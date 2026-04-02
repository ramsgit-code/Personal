"use client";

import { motion } from "framer-motion";

const cases = [
  {
    client: "Clinica capilar",
    sector: "Salud",
    system: "Lead Qualification System",
    problem: "El equipo perdia tiempo en llamadas iniciales con leads sin intencion real de compra.",
    solution: "Funnel de precualificacion con scoring automatico e integracion Go High Level.",
    result: "40% menos tiempo en llamadas iniciales. Solo hablan con quien tiene intencion.",
  },
  {
    client: "Empresa de eventos",
    sector: "Eventos",
    system: "Proposal Automation System",
    problem: "Las propuestas tardaban 1-3 dias. Los clientes pedian precio a la competencia mientras esperaban.",
    solution: "Formulario de intake → propuesta web automatica → envio inmediato con seguimiento.",
    result: "Propuesta generada en 8 minutos. Imagen profesional consistente.",
  },
  {
    client: "Landing de formacion",
    sector: "Formacion",
    system: "WhatsApp + CRM Automation",
    problem: "Interesados que no respondian emails y se perdian sin convertir.",
    solution: "Asistente WhatsApp automatico + secuencia de nurturing integrada con CRM.",
    result: "0 leads sin respuesta en las primeras 24h del ciclo.",
  },
];

export function CaseStudies() {
  return (
    <section>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag">Casos reales</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sistemas que ya estan funcionando.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{c.client}</p>
                  <p className="text-xs text-muted">{c.sector} · {c.system}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">Problema</p>
                <p className="text-sm text-foreground-muted">{c.problem}</p>
              </div>

              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">Solucion</p>
                <p className="text-sm text-foreground-muted">{c.solution}</p>
              </div>

              <div className="border-t border-border pt-4 mt-auto">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">Resultado</p>
                <p className="text-sm text-accent font-medium">{c.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
