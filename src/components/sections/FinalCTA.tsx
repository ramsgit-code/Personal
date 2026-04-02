"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface border border-border rounded-2xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            ¿Tu proceso comercial podria funcionar{" "}
            <span className="text-accent">sin que tu estes encima de el?</span>
          </h2>
          <p className="text-foreground-muted text-lg mb-10 max-w-xl mx-auto">
            En 30 minutos te digo exactamente que sistema necesitas y si tiene sentido que trabajemos juntos.
          </p>
          <Link href="/diagnostico" className="btn-primary text-base px-10 py-4 inline-flex">
            Solicita tu diagnostico gratuito
            <ArrowRight size={18} />
          </Link>
          <p className="text-xs text-muted mt-4">
            Respondo en menos de 24h. Sin humo, sin pitch agresivo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
