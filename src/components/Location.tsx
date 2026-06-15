import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/data";
import { Button } from "./ui/Button";

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteConfig.address
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const mapsLink = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteConfig.address
)}`;

export function Location() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-accent-light">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-dark sm:text-4xl">
              Siempre cerca de ti y tu mascota
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Ofrecemos atención de emergencias 24 horas al día para estar
              siempre disponibles cuando tu mascota lo necesite.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <MapPin className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-primary-dark">
                    {siteConfig.name} Clínica Veterinaria
                  </p>
                  <p className="text-slate-600">{siteConfig.address}</p>
                </div>
              </div>

              <a
                href={`tel:${siteConfig.phoneLink}`}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <Phone className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary-dark">
                    Central telefónica
                  </p>
                  <p className="text-slate-600">{siteConfig.phone}</p>
                </div>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <MessageCircle className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary-dark">WhatsApp</p>
                  <p className="text-slate-600">{siteConfig.whatsapp}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <Mail className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary-dark">Email</p>
                  <p className="text-slate-600">{siteConfig.email}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </Button>
              <Button
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Agendar por WhatsApp
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-blue-200 h-[400px] lg:h-[500px]">
            <iframe
              title="Ubicación de la clínica"
              src={mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
