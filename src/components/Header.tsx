"use client";

import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { getWhatsAppUrl, navLinks, siteConfig } from "@/lib/data";
import { Button } from "./ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 animate-fade-in-up">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="font-display text-2xl font-bold text-primary-dark flex items-center gap-2"
        >
          <PawPrint className="h-7 w-7 text-primary" />
          {siteConfig.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={whatsappUrl}
            variant="outline"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar cita
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-primary-dark"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white px-4 py-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-primary py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href={whatsappUrl}
              className="mt-2 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar cita
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
