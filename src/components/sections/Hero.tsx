"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LogoHospitalCapilar } from "@/components/logos/LogoHospitalCapilar";
import { LogoEventosBarcelona } from "@/components/logos/LogoEventosBarcelona";
import { LogoHermetic } from "@/components/logos/LogoHermetic";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section w-full">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-[4.5rem] font-bold leading-[1.04] tracking-tight mb-6 text-foreground">
            Tu proceso comercial,{" "}
            <span className="text-accent">funcionando solo.</span>
          </h1>

          <p className="text-lg text-foreground-muted max-w-xl mb-10 leading-relaxed">
            Diseno sistemas de captacion, cualificacion y cierre de leads
            para negocios que quieren vender mas sin depender de procesos manuales.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link href="/diagnostico" className="btn-primary text-base px-7 py-3.5">
              Solicita tu diagnostico
              <ArrowRight size={16} />
            </Link>
            <Link href="/casos-de-exito" className="btn-secondary text-base px-7 py-3.5">
              Ver casos reales
            </Link>
          </div>
        </m.div>

        {/* Social proof logos */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-6">
            Sistemas implementados en
          </p>
          <div className="flex flex-wrap items-center gap-10">
            <LogoHospitalCapilar className="h-5 w-auto text-foreground opacity-40 hover:opacity-70 transition-opacity" />
            <LogoEventosBarcelona className="h-7 w-auto text-foreground opacity-40 hover:opacity-70 transition-opacity" />
            <LogoHermetic className="h-5 w-auto text-foreground opacity-40 hover:opacity-70 transition-opacity" />
          </div>
        </m.div>
      </div>
    </section>
  );
}
