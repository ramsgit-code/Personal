"use client";

import { m } from "framer-motion";
import { LogoHospitalCapilar } from "@/components/logos/LogoHospitalCapilar";
import { LogoEventosBarcelona } from "@/components/logos/LogoEventosBarcelona";
import { LogoHermetic } from "@/components/logos/LogoHermetic";

const cases = [
  {
    Logo: LogoHospitalCapilar,
    tag: "Lead Qualification",
    metric: "−40%",
    metricLabel: "tiempo en llamadas",
    result: "Solo hablan con leads que ya tienen intencion real de compra.",
  },
  {
    Logo: LogoEventosBarcelona,
    tag: "Proposal Automation",
    metric: "8 min",
    metricLabel: "por propuesta",
    result: "De 3 dias a 8 minutos. El cliente recibe precio antes que la competencia.",
  },
  {
    Logo: LogoHermetic,
    tag: "WhatsApp + CRM",
    metric: "0",
    metricLabel: "leads sin respuesta",
    result: "Todos los leads reciben respuesta automatica en los primeros 5 minutos.",
  },
];

export function CaseStudies() {
  return (
    <section>
      <div className="section">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="tag">Casos reales</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sistemas que ya estan funcionando.
          </h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map(({ Logo, tag, metric, metricLabel, result }, i) => (
            <m.div
              key={tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="card flex flex-col gap-6"
            >
              {/* Logo */}
              <div className="h-10 flex items-center">
                <Logo className="h-6 w-auto text-foreground-muted opacity-70" />
              </div>

              {/* Metric */}
              <div>
                <p className="text-5xl font-bold text-foreground tracking-tight leading-none">
                  {metric}
                </p>
                <p className="text-sm text-muted mt-1">{metricLabel}</p>
              </div>

              {/* Result */}
              <p className="text-sm text-foreground-muted leading-relaxed mt-auto">
                {result}
              </p>

              <span className="text-xs font-mono text-accent/80 border border-accent/20 rounded px-2 py-0.5 w-fit">
                {tag}
              </span>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
