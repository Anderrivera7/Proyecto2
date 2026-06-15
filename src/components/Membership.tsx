import { Gift, Star } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/data";
import { Button } from "./ui/Button";

export function Membership() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-sky-100 to-accent-light border border-blue-100">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Star className="h-5 w-5 fill-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Membresía exclusiva
                </span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-dark sm:text-4xl">
                Pawcare Members: la membresía más completa
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Baños mensuales, consultas ilimitadas y descuentos exclusivos en
                servicios veterinarios y grooming. Precios especiales en
                productos, envíos gratis y sorteos mensuales con premios
                increíbles.
              </p>
              <p className="mt-2 font-semibold text-primary">
                ¡Todo para consentir a tu mascota y cuidar tu bolsillo!
              </p>
              <Button
                href={getWhatsAppUrl("Hola, quisiera información sobre Pawcare Members.")}
                className="mt-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Más información
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Baños mensuales",
                "Consultas ilimitadas",
                "Descuentos exclusivos",
                "Sorteos mensuales",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md shadow-blue-50"
                >
                  <Gift className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-primary-dark">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
