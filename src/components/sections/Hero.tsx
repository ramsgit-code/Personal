"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="tag">Sistema de captacion comercial</span>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-foreground">
            Convierte tu proceso comercial en un sistema que{" "}
            <span className="text-accent">trabaja por ti.</span>
          </h1>

          <p className="text-xl text-foreground-muted max-w-2xl mb-10 leading-relaxed">
            Automatizo la captacion, cualificacion y cierre de leads para negocios
            que no pueden permitirse perder oportunidades por falta de sistema.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/diagnostico" className="btn-primary text-base px-8 py-4">
              Solicita tu diagnostico gratuito
              <ArrowRight size={18} />
            </Link>
            <Link href="/casos-de-exito" className="btn-secondary text-base px-8 py-4">
              Ver casos reales
            </Link>
          </div>

          <p className="text-xs text-muted mt-4">
            Sin compromiso · 30 minutos · Solo para negocios con mas de 10 leads/mes
          </p>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10"
        >
          {[
            { value: "3+", label: "Sistemas implementados" },
            { value: "8 min", label: "Propuesta generada" },
            { value: "0", label: "Leads sin respuesta" },
            { value: "100%", label: "Integrado con GHL" },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-3xl font-bold text-foreground">{m.value}</p>
              <p className="text-sm text-muted mt-1">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
