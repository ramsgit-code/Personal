"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/casos-de-exito", label: "Casos reales" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-mi", label: "Sobre mi" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-foreground tracking-tight">
          Ramiro Perez<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/diagnostico" className="btn-primary">
            Solicita tu diagnostico
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground-muted"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/diagnostico" className="btn-primary w-fit" onClick={() => setOpen(false)}>
            Solicita tu diagnostico
          </Link>
        </div>
      )}
    </header>
  );
}
