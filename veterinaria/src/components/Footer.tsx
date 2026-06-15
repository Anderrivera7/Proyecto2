import { PawPrint } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold text-white">
              <PawPrint className="h-6 w-6 text-accent" />
              {siteConfig.name}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-blue-200">
              Clínica veterinaria especializada con atención 24 horas. Tu
              mascota y tú más felices.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white">Nosotros</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Staff médico
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white">Servicios</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.slice(2).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.whatsapp}</li>
              <li>{siteConfig.email}</li>
              <li className="text-blue-200">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-blue-800 pt-8 sm:flex-row">
          <p className="text-sm text-blue-300">
            {siteConfig.name} Clínica Veterinaria © {currentYear}.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Libro de reclamaciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
