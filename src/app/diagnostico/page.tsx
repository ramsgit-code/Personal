import { DiagnosticForm } from "@/components/DiagnosticForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico Gratuito de Automatización Comercial",
  description:
    "Sesión gratuita de 30 minutos. Analizo tu proceso comercial y te digo exactamente qué sistema necesitas para dejar de perder leads.",
  alternates: { canonical: "https://ramiroperez.com/diagnostico" },
  openGraph: {
    title: "Diagnóstico Gratuito — Automatización Comercial",
    description:
      "30 minutos para saber exactamente qué sistema necesitas. Sin compromiso ni pitch agresivo.",
  },
};

export default function DiagnosticoPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left — pitch */}
          <div className="md:sticky md:top-32">
            <span className="inline-block text-xs font-mono text-accent border border-accent/30 rounded px-2 py-0.5 mb-4">
              Diagnostico gratuito
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              30 minutos para saber exactamente que necesitas.
            </h1>
            <p className="text-foreground-muted leading-relaxed mb-8">
              Rellena el formulario. Lo reviso antes de la llamada y te presento un analisis
              de tu proceso actual con los puntos de mejora concretos.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Sin compromiso ni pitch agresivo",
                "Analisis real de tu proceso comercial",
                "Recomendacion concreta de sistema",
                "Solo para negocios con 10+ leads/mes",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-foreground-muted items-start">
                  <span className="text-accent mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <DiagnosticForm />
          </div>
        </div>
      </div>
    </div>
  );
}
