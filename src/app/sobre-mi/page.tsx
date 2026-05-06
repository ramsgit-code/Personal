import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Ramiro Perez — Especialista en Automatización Comercial",
  description:
    "Especialista en sistemas de captación, cualificación y automatización comercial con Go High Level. No soy una agencia: diseño e implemento el sistema completo.",
  alternates: { canonical: "https://ramiroperez.com/sobre-mi" },
  openGraph: {
    title: "Sobre Ramiro Perez — Automatización Comercial con Go High Level",
    description:
      "Diseño el proceso completo: desde el formulario de captación hasta el cierre. Sistemas reales implementados en clínicas, eventos y formación.",
  },
};

const specialties = [
  "Lead qualification systems con Go High Level",
  "Automatizacion de propuestas comerciales",
  "Agentes de WhatsApp integrados con CRM",
  "Funnels de captacion y nurturing",
  "Integraciones API y automatizacion de procesos",
  "Posicionamiento SEO tecnico",
];

export default function SobreMiPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <span className="inline-block text-xs font-mono text-accent border border-accent/30 rounded px-2 py-0.5 mb-6">
          Sobre mi
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
          No soy una agencia.<br />
          Soy el que construye el sistema.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col gap-6 text-foreground-muted leading-relaxed">
            <p>
              Trabajo con negocios que tienen un problema comercial real: leads que no se convierten,
              seguimientos que no se hacen, propuestas que tardan demasiado o pipelines que nadie mira.
            </p>
            <p>
              No vendo software. No vendo plantillas. Diseno el proceso completo y lo construyo:
              desde el formulario que llega el lead hasta el momento en que el cliente firma.
            </p>
            <p>
              He implementado sistemas reales para clinicas, empresas de eventos y academia de formacion.
              Sistemas que funcionan hoy, no demos que quedan bonitas en una presentacion.
            </p>
            <p>
              La diferencia con una agencia generica es simple: yo entiendo tanto el proceso comercial
              como la tecnologia que lo mueve. No necesitas explicarme que es un pipeline ni un CRM.
              Necesitas que alguien lo construya bien desde el primer dia.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-surface border border-border rounded-xl p-6">
              <p className="text-xs text-muted uppercase tracking-wider mb-4">Especialidades</p>
              <ul className="flex flex-col gap-3">
                {specialties.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-foreground-muted items-start">
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6">
              <p className="text-xs text-muted uppercase tracking-wider mb-4">Como trabajo</p>
              <ul className="flex flex-col gap-2 text-sm text-foreground-muted">
                <li>✓ Diagnostico previo siempre</li>
                <li>✓ Entregables claros desde el inicio</li>
                <li>✓ Soporte 30 dias incluido</li>
                <li>✓ Sin dependencias: el sistema es tuyo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <p className="text-2xl font-semibold text-foreground mb-4">
            ¿Tiene sentido que hablemos?
          </p>
          <p className="text-foreground-muted mb-6">
            Si tienes un proceso comercial con friccion y quieres saber exactamente que necesitas
            para mejorarlo, empieza por el diagnostico.
          </p>
          <Link href="/diagnostico" className="btn-primary">
            Solicita tu diagnostico gratuito →
          </Link>
        </div>
      </div>
    </div>
  );
}
