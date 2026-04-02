// Go High Level integration
// Docs: https://highlevel.stoplight.io/docs/integrations

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_BASE_URL = "https://rest.gohighlevel.com/v1";

interface GHLContactPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  website?: string;
  source?: string;
  tags?: string[];
  customField?: Record<string, string>;
}

interface GHLOpportunityPayload {
  title: string;
  pipelineId: string;
  pipelineStageId: string;
  contactId: string;
  monetaryValue?: number;
  status: "open" | "won" | "lost" | "abandoned";
}

async function ghlFetch(path: string, options: RequestInit) {
  const res = await fetch(`${GHL_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-04-15",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GHL API error ${res.status}: ${body}`);
  }

  return res.json();
}

export async function createOrUpdateContact(payload: GHLContactPayload) {
  return ghlFetch("/contacts/", {
    method: "POST",
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      ...payload,
    }),
  });
}

export async function createOpportunity(payload: GHLOpportunityPayload) {
  return ghlFetch("/opportunities/", {
    method: "POST",
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      ...payload,
    }),
  });
}

export async function addTagsToContact(contactId: string, tags: string[]) {
  return ghlFetch(`/contacts/${contactId}/tags`, {
    method: "POST",
    body: JSON.stringify({ tags }),
  });
}

// Map form data to GHL custom fields
// Custom field IDs must be created in GHL first and set in .env
export function buildCustomFields(data: Record<string, unknown>): Record<string, string> {
  return {
    [process.env.GHL_FIELD_SECTOR ?? "sector"]: String(data.sector ?? ""),
    [process.env.GHL_FIELD_TIPO_NEGOCIO ?? "tipo_negocio"]: String(data.tipo_negocio ?? ""),
    [process.env.GHL_FIELD_TAMANO_EQUIPO ?? "tamano_equipo"]: String(data.tamano_equipo ?? ""),
    [process.env.GHL_FIELD_VOLUMEN_LEADS ?? "volumen_leads"]: String(data.volumen_leads ?? ""),
    [process.env.GHL_FIELD_CRM_ACTUAL ?? "crm_actual"]: String(data.crm_actual ?? ""),
    [process.env.GHL_FIELD_USA_WHATSAPP ?? "usa_whatsapp"]: String(data.usa_whatsapp ?? ""),
    [process.env.GHL_FIELD_TIEMPO_PROPUESTA ?? "tiempo_propuesta"]: String(data.tiempo_propuesta ?? ""),
    [process.env.GHL_FIELD_PROBLEMA ?? "problema_principal"]: String(data.problema_principal ?? ""),
    [process.env.GHL_FIELD_URGENCIA ?? "urgencia"]: String(data.urgencia ?? ""),
    [process.env.GHL_FIELD_PRESUPUESTO ?? "presupuesto_estimado"]: String(data.presupuesto ?? ""),
    [process.env.GHL_FIELD_LEAD_SCORE ?? "lead_score"]: String(data.lead_score ?? ""),
    [process.env.GHL_FIELD_LEAD_TIER ?? "lead_tier"]: String(data.lead_tier ?? ""),
    [process.env.GHL_FIELD_COMO_CONOCISTE ?? "lead_source_detail"]: String(data.como_conociste ?? ""),
    [process.env.GHL_FIELD_NOTAS ?? "notas"]: String(data.notas ?? ""),
  };
}
