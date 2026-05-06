"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoBrand } from "@/components/logos/LogoBrand";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/casos-de-exito", label: "Casos reales" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <LogoBrand className="h-6 w-6 shrink-0" />
          <span className="font-semibold text-foreground tracking-tight">
            Ramiro Perez<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-foreground font-medium"
                    : "text-foreground-muted hover:text-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/diagnostico" className="btn-primary">
            Solicita tu diagnóstico
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground-muted hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active ? "text-foreground font-medium" : "text-foreground-muted"
                }`}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/diagnostico" className="btn-primary w-fit" onClick={() => setOpen(false)}>
            Solicita tu diagnóstico
          </Link>
        </div>
      )}
    </header>
  );
}
