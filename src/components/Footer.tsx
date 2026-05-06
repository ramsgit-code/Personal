import Link from "next/link";
import { LogoBrand } from "@/components/logos/LogoBrand";

const BASE_URL = "https://ramiroperez.com";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity w-fit">
            <LogoBrand className="h-6 w-6 shrink-0" />
            <span className="font-semibold text-foreground tracking-tight">
              Ramiro Perez<span className="text-accent">.</span>
            </span>
          </Link>
          <p className="text-sm text-foreground-muted max-w-xs mt-3 leading-relaxed">
            Sistemas de captación, cualificación y cierre para negocios que quieren vender con orden.
          </p>
          <p className="text-xs text-muted mt-4">
            España
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://www.linkedin.com/in/ramiro-perez-rodero-48148115b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground-muted hover:text-foreground transition-colors flex items-center gap-1.5"
              aria-label="LinkedIn de Ramiro Perez"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Servicios</p>
          <Link href="/servicios#lead-qualification-system" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Lead Qualification System</Link>
          <Link href="/servicios#proposal-automation" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Proposal Automation</Link>
          <Link href="/servicios#whatsapp-crm-automation" className="text-sm text-foreground-muted hover:text-foreground transition-colors">WhatsApp + CRM Automation</Link>
          <Link href="/soluciones" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Soluciones por sector</Link>
        </div>

        {/* Empresa */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Empresa</p>
          <Link href="/sobre-mi" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Sobre mí</Link>
          <Link href="/casos-de-exito" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Casos reales</Link>
          <Link href="/blog" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Blog</Link>
          <Link href="/diagnostico" className="text-sm text-accent hover:text-accent-hover transition-colors font-medium mt-2">
            Solicitar diagnóstico →
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted">© {year} Ramiro Perez. Todos los derechos reservados.</p>
          <p className="text-xs text-muted">Sistemas reales. Sin humo.</p>
        </div>
      </div>
    </footer>
  );
}
