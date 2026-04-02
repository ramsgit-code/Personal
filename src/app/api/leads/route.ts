import { NextRequest, NextResponse } from "next/server";
import { calculateScore, getTier, getTags } from "@/lib/lead-scoring";
import { createOrUpdateContact, createOpportunity, buildCustomFields } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // 1. Calculate score and tier
    const score = calculateScore({
      presupuesto: data.presupuesto,
      urgencia: data.urgencia,
      volumen_leads: data.volumen_leads,
      tamano_equipo: data.tamano_equipo,
      crm_actual: data.crm_actual,
      sector: data.sector,
    });

    const tier = getTier(score);
    const tags = getTags({ ...data, tier });

    const enriched = { ...data, lead_score: score, lead_tier: tier };

    // 2. Create contact in GHL
    const [firstName, ...rest] = (data.nombre as string).split(" ");
    const lastName = rest.join(" ");

    const contact = await createOrUpdateContact({
      firstName,
      lastName,
      email: data.email,
      phone: data.telefono,
      website: data.web,
      source: data.como_conociste,
      tags,
      customField: buildCustomFields(enriched),
    });

    // 3. Create opportunity in pipeline "Nuevo Lead" stage
    if (contact?.contact?.id) {
      await createOpportunity({
        title: `${data.nombre} — ${data.empresa}`,
        pipelineId: process.env.GHL_PIPELINE_ID!,
        pipelineStageId: process.env.GHL_STAGE_NUEVO_LEAD!,
        contactId: contact.contact.id,
        status: "open",
      });
    }

    return NextResponse.json({ ok: true, score, tier });
  } catch (err) {
    console.error("[leads API]", err);
    // Return 200 anyway — don't block the user if GHL is down
    return NextResponse.json({ ok: true, fallback: true });
  }
}
