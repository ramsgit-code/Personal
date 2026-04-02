import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Lead Qualification System, Proposal Automation y WhatsApp + CRM Automation. Tres sistemas para convertir mas sin trabajar mas.",
};

const services = [
  {
    slug: "lead-qualification-system",
    tag: "Sistema A",
    title: "Lead Qualification System",
    tagline: "Filtra automaticamente quien vale tu tiempo.",
    problem:
      "Recibes leads pero no sabes cuales son buenos hasta que pierdes tiempo hablando con ellos. El equipo hace seguimiento manual y aun asi los leads se enfriansin convertir.",
    deliverables: [
      "Formulario de precualificacion multi-paso",
      "Sistema de scoring automatico (cold / warm / hot / premium)",
      "Pipeline configurado en Go High Level",
      "Tags automaticos segun respuestas del lead",
      "Automatizacion de primer contacto (email + WhatsApp)",
      "Dashboard de seguimiento y reporte",
    ],
    benefits: [
      "Solo hablas con leads que cumplen tu criterio minimo",
      "Ningun lead se queda sin respuesta en las primeras 24h",
      "Sabes exactamente en que etapa esta cada oportunidad",
      "El sistema trabaja sin supervision constante",
    ],
    forWho: "Clinicas, academias, consultoras, agencias. Cualquier negocio con 10+ leads/mes.",
  },
  {
    slug: "proposal-automation",
    tag: "Sistema B",
    title: "Proposal Automation System",
    tagline: "Propuestas en minutos, no en dias.",
    problem:
      "Crear propuestas a mano es lento, inconsistente y hace que pierdas momentum con el cliente. Para cuando la envias, ya esta frio o ya eligio a la competencia.",
    deliverables: [
      "Formulario interno de intake post-llamada",
      "Propuesta web dinamica generada automaticamente",
      "PDF descargable con branding profesional",
      "Automatizacion de envio con seguimiento integrado",
      "Pipeline de estado de propuesta en GHL",
      "Recordatorios automaticos si no hay respuesta",
    ],
    benefits: [
      "Propuesta lista en menos de 10 minutos",
      "Imagen profesional consistente en cada envio",
      "Seguimiento automatico sin perseguir al cliente",
      "Mides exactamente cuantas propuestas se convierten",
    ],
    forWho: "Agencias, freelances, empresas de servicios. Cualquiera que envie mas de 5 propuestas al mes.",
  },
  {
    slug: "whatsapp-crm-automation",
    tag: "Sistema C",
    title: "WhatsApp + CRM Automation",
    tagline: "Seguimiento automatico que no suena a robot.",
    problem:
      "WhatsApp es tu canal principal pero es un caos: mensajes sin respuesta, sin historial, sin sistema. Leads que llegan y nadie atiende, o que se atienden de forma inconsistente.",
    deliverables: [
      "Agente automatico de WhatsApp integrado con GHL",
      "Flujo de bienvenida y precualificacion",
      "Secuencias de nurturing por WhatsApp y email",
      "Notificaciones al equipo por leads calificados",
      "Historial completo de conversacion en CRM",
      "Reportes de conversion por canal",
    ],
    benefits: [
      "Respuesta inmediata 24/7 sin depender de una persona",
      "Leads cualificados antes de que hables con ellos",
      "Historial de cada lead en un solo lugar",
      "Nunca mas un lead sin seguimiento",
    ],
    forWho: "Clinicas, formacion, eventos, retail premium. Negocios donde WhatsApp es canal principal de captacion.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <span className="inline-block text-xs font-mono text-accent border border-accent/30 rounded px-2 py-0.5 mb-6">
          Servicios
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          Tres sistemas. Un objetivo.
        </h1>
        <p className="text-foreground-muted text-lg mb-20 max-w-xl">
          Cada sistema resuelve una parte del proceso comercial. Pueden implementarse juntos o por separado.
        </p>

        <div className="flex flex-col gap-20">
          {services.map((s) => (
            <div key={s.slug} id={s.slug} className="border-t border-border pt-12">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-xs font-mono text-accent border border-accent/30 rounded px-2 py-0.5 shrink-0 mt-1">
                  {s.tag}
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
                  <p className="text-foreground-muted mt-1">{s.tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-3">El problema</p>
                  <p className="text-sm text-foreground-muted leading-relaxed">{s.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-3">Para quien</p>
                  <p className="text-sm text-foreground-muted leading-relaxed">{s.forWho}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-surface border border-border rounded-xl p-6">
                  <p className="text-xs text-muted uppercase tracking-wider mb-4">Entregables</p>
                  <ul className="flex flex-col gap-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-foreground-muted items-start">
                        <span className="text-accent mt-0.5 shrink-0">→</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-surface border border-border rounded-xl p-6">
                  <p className="text-xs text-muted uppercase tracking-wider mb-4">Beneficios</p>
                  <ul className="flex flex-col gap-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-foreground-muted items-start">
                        <span className="text-accent mt-0.5 shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/diagnostico" className="btn-primary">
                Solicita tu diagnostico →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
