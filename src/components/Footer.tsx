import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="font-semibold text-foreground mb-1">
            Ramiro Perez<span className="text-accent">.</span>
          </p>
          <p className="text-sm text-foreground-muted max-w-xs">
            Sistemas de captacion, cualificacion y cierre para negocios que quieren vender con orden.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Servicios</p>
          <Link href="/servicios/lead-qualification-system" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Lead Qualification System</Link>
          <Link href="/servicios/proposal-automation" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Proposal Automation</Link>
          <Link href="/servicios/whatsapp-crm-automation" className="text-sm text-foreground-muted hover:text-foreground transition-colors">WhatsApp + CRM Automation</Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Empresa</p>
          <Link href="/sobre-mi" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Sobre mi</Link>
          <Link href="/casos-de-exito" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Casos reales</Link>
          <Link href="/blog" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Blog</Link>
          <Link href="/diagnostico" className="text-sm text-accent hover:text-accent-hover transition-colors">Solicitar diagnostico →</Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Ramiro Perez. Todos los derechos reservados.</p>
          <p className="text-xs text-muted">Sistemas reales. Sin humo.</p>
        </div>
      </div>
    </footer>
  );
}
