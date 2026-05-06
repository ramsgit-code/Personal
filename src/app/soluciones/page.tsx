import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones por Sector — Automatización Comercial",
  description:
    "Sistemas de automatización específicos para clínicas, empresas de eventos, academias y servicios profesionales. El mismo sistema adaptado al ciclo de venta de tu sector.",
  alternates: { canonical: "https://ramiroperez.com/soluciones" },
  openGraph: {
    title: "Soluciones por Sector — Automatización Comercial con Go High Level",
    description:
      "Automatización para clínicas, eventos, formación y consultoras. Casos reales con resultados medibles en cada vertical.",
  },
};

const verticals = [
  {
    slug: "clinicas-hospitales",
    sector: "Salud",
    title: "Clinicas y Hospitales",
    pain: "Los pacientes preguntan por precio y no vuelven. El equipo pierde tiempo en llamadas sin conversion.",
    solution: "Funnel de precualificacion por tratamiento, urgencia y presupuesto. Solo hablas con quien tiene intencion real.",
    automations: ["Formulario multi-paso en web o WhatsApp", "Score automatico por tipo de consulta", "Email + WhatsApp de confirmacion inmediato", "Pipeline: Consulta → Cualificado → Cita → Atendido"],
    ghl: "Custom fields: tipo de tratamiento, urgencia, presupuesto. Pipeline especifico para salud.",
    reference: "Hospital Capilar",
  },
  {
    slug: "empresas-eventos",
    sector: "Eventos",
    title: "Empresas de Eventos",
    pain: "Las peticiones de presupuesto tardan dias. Los clientes se van con quien responde antes.",
    solution: "Sistema de propuesta automatica. El cliente rellena el formulario y recibe precio en minutos.",
    automations: ["Formulario de intake: tipo, fecha, aforo, presupuesto", "Propuesta web generada automaticamente", "Seguimiento si no abre en 48h", "Pipeline: Solicitud → Propuesta → Negociacion → Cierre"],
    ghl: "Custom fields: tipo de evento, fecha, aforo, ciudad. Automatizacion de propuesta post-formulario.",
    reference: "EB Eventos Barcelona",
  },
  {
    slug: "formacion-cursos",
    sector: "Formacion",
    title: "Academias y Formacion Online",
    pain: "Muchos interesados, pocos que compran. El equipo pierde tiempo con leads que no tienen intencion.",
    solution: "Funnel de captacion con precualificacion y nurturing automatico hasta conversion.",
    automations: ["Lead magnet → formulario → score", "Secuencia nurturing 7 dias", "WhatsApp a los 3 dias si no abre emails", "Pipeline: Lead → Nurture → Llamada → Matriculado"],
    ghl: "Custom fields: modalidad, presupuesto, urgencia. Secuencias de nurturing segmentadas.",
    reference: "Academia de formacion online",
  },
  {
    slug: "servicios-profesionales",
    sector: "Consultoria",
    title: "Servicios Profesionales",
    pain: "Los referidos llegan pero el proceso de cierre es lento, inconsistente y sin seguimiento.",
    solution: "Sistema de diagnostico + propuesta + seguimiento que profesionaliza el comercial completo.",
    automations: ["Formulario de diagnostico publico", "Score + pipeline automatico", "Propuesta web post-llamada", "Cadencia de seguimiento: 2d, 5d, 10d"],
    ghl: "Pipeline completo de consultoria. Propuestas automatizadas post-llamada con seguimiento incluido.",
    reference: "Hermetic / Lederle",
  },
];

export default function SolucionesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <span className="inline-block text-xs font-mono text-accent border border-accent/30 rounded px-2 py-0.5 mb-6">
          Soluciones
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          El mismo sistema, adaptado a tu sector.
        </h1>
        <p className="text-foreground-muted text-lg mb-20 max-w-xl">
          El proceso comercial varia segun el negocio. Adapto cada sistema al ciclo de venta, canal y tipo de cliente de cada vertical.
        </p>

        <div className="flex flex-col gap-16">
          {verticals.map((v, i) => (
            <div key={v.slug} className="border-t border-border pt-12">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="text-xs font-mono text-accent/70 border border-accent/20 rounded px-2 py-0.5 mb-3 inline-block">
                    {v.sector}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{v.title}</h2>
                  {v.reference && (
                    <p className="text-xs text-muted mt-1">Caso real: {v.reference}</p>
                  )}
                </div>
                <span className="text-4xl font-bold text-border">0{i + 1}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-2">El problema</p>
                  <p className="text-sm text-foreground-muted leading-relaxed">{v.pain}</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-2">La solucion</p>
                  <p className="text-sm text-foreground-muted leading-relaxed">{v.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-xs text-muted uppercase tracking-wider mb-3">Automatizaciones clave</p>
                  <ul className="flex flex-col gap-2">
                    {v.automations.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-foreground-muted items-start">
                        <span className="text-accent shrink-0 mt-0.5">→</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-xs text-muted uppercase tracking-wider mb-3">Integracion GHL</p>
                  <p className="text-sm text-foreground-muted leading-relaxed">{v.ghl}</p>
                </div>
              </div>

              <Link href="/diagnostico" className="btn-primary">
                Solicitar diagnostico para {v.title.toLowerCase()} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
