"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnostico",
    desc: "30 minutos. Analizo tu proceso actual, los puntos de fuga y te digo exactamente que sistema necesitas.",
  },
  {
    number: "02",
    title: "Diseno del sistema",
    desc: "Mapa del funnel, estructura del CRM, automatizaciones y flujos de comunicacion. Todo documentado.",
  },
  {
    number: "03",
    title: "Implementacion",
    desc: "Construyo y conecto todo: formularios, Go High Level, WhatsApp, emails, propuestas.",
  },
  {
    number: "04",
    title: "Entrega y formacion",
    desc: "El sistema funciona desde el primer dia. Te explico como leer los datos y gestionar el pipeline.",
  },
  {
    number: "05",
    title: "Soporte 30 dias",
    desc: "Ajustes incluidos durante el primer mes. Si algo no funciona como debe, lo corrijo.",
  },
];

export function Process() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag">Como trabajo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sin sorpresas. Sin promesas vagas.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6 md:pl-16 relative"
              >
                <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-background border border-border items-center justify-center shrink-0">
                  <span className="text-xs font-mono text-accent">{step.number}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="md:hidden text-xs font-mono text-accent">{step.number}</span>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
