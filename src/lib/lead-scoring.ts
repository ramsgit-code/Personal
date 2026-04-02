export type LeadTier = "cold" | "warm" | "hot" | "premium";

interface LeadData {
  presupuesto: string;
  urgencia: string;
  volumen_leads: string;
  tamano_equipo: string;
  crm_actual: string;
  sector: string;
}

export function calculateScore(data: LeadData): number {
  let score = 0;

  // Presupuesto (max 30)
  const presupuestoMap: Record<string, number> = {
    "<1000": 0,
    "1000-3000": 10,
    "3000-7000": 20,
    ">7000": 30,
  };
  score += presupuestoMap[data.presupuesto] ?? 0;

  // Urgencia (max 25)
  const urgenciaMap: Record<string, number> = {
    explorando: 5,
    "1-3meses": 15,
    prisa: 25,
  };
  score += urgenciaMap[data.urgencia] ?? 0;

  // Volumen de leads (max 20)
  const volumenMap: Record<string, number> = {
    "<10": 0,
    "10-50": 10,
    "50-200": 15,
    "200+": 20,
  };
  score += volumenMap[data.volumen_leads] ?? 0;

  // Tamano de equipo (max 10)
  const equipoMap: Record<string, number> = {
    solo: 3,
    "2-5": 7,
    "6-20": 10,
    "20+": 10,
  };
  score += equipoMap[data.tamano_equipo] ?? 0;

  // CRM actual (max 10) — sin CRM = mas dolor = mas motivado
  const crmMap: Record<string, number> = {
    ninguno: 10,
    otro: 7,
    pipedrive: 6,
    hubspot: 5,
    gohighlevel: 5,
    salesforce: 4,
  };
  score += crmMap[data.crm_actual] ?? 5;

  // Sector (max 5)
  const sectorMap: Record<string, number> = {
    salud: 5,
    formacion: 5,
    eventos: 5,
    consultoria: 4,
    agencia: 4,
    retail: 3,
    otro: 2,
  };
  score += sectorMap[data.sector] ?? 2;

  return Math.min(score, 100);
}

export function getTier(score: number): LeadTier {
  if (score >= 76) return "premium";
  if (score >= 51) return "hot";
  if (score >= 31) return "warm";
  return "cold";
}

export function getTags(data: LeadData & { como_conociste: string; tier: LeadTier }): string[] {
  const tags: string[] = ["#nuevo-lead", `#${data.tier}`];

  // Sector
  const sectorTagMap: Record<string, string> = {
    salud: "#clinica",
    eventos: "#eventos",
    formacion: "#formacion",
    consultoria: "#consultoria",
    agencia: "#agencia",
  };
  if (sectorTagMap[data.sector]) tags.push(sectorTagMap[data.sector]);

  // Canal
  const canalTagMap: Record<string, string> = {
    linkedin: "#via-linkedin",
    google: "#via-google",
    referido: "#via-referido",
  };
  if (canalTagMap[data.como_conociste]) tags.push(canalTagMap[data.como_conociste]);

  // Presupuesto bajo
  if (data.presupuesto === "<1000") tags.push("#budget-bajo");

  // Early stage
  if (data.volumen_leads === "<10") tags.push("#early-stage");

  return tags;
}
