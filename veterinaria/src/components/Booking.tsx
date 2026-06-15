import Image from "next/image";
import { Check, Phone, Plus } from "lucide-react";
import { getWhatsAppUrl, images, siteConfig } from "@/lib/data";
import { Button } from "./ui/Button";

const checklist = [
  "Servicio de vacunación completo",
  "Consulta veterinaria integral",
  "Desparasitación y profilaxis",
  "Esterilización segura",
];

export function Booking() {
  return (
    <section
      id="contacto"
      className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32 bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-3xl font-bold text-primary-dark sm:text-4xl lg:text-5xl">
            Agenda una llamada y mantente conectado
          </h2>

          <ul className="mt-10 space-y-5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-medium text-slate-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-slate-600 leading-relaxed text-lg">
            Disponemos de los mejores veterinarios y equipos de vanguardia en
            un ambiente acogedor y seguro. Agenda consultas, vacunas y baños
            por WhatsApp con nuestros especialistas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button
              href={getWhatsAppUrl()}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar cita
            </Button>
            <a
              href={`tel:${siteConfig.phoneLink}`}
              className="flex items-center gap-2 font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              Emergencia 24h: {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:max-w-[560px]">
          <div className="absolute -left-4 top-8 grid grid-cols-3 gap-2.5 opacity-40 animate-float-slow">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-primary" />
            ))}
          </div>
          <div className="absolute right-2 top-4 text-accent animate-float">
            <Plus className="h-7 w-7" />
          </div>
          <div className="absolute bottom-10 -left-2 text-primary/50 animate-float-slow">
            <Plus className="h-9 w-9" />
          </div>

          <div
            className="relative w-full animate-scale-in"
            style={{ aspectRatio: "1 / 1" }}
          >
            <div
              className="absolute inset-[5%] rounded-full bg-sky-100/80"
              aria-hidden
            />
            <div
              className="absolute inset-[10%] rounded-full bg-sky-200/50"
              aria-hidden
            />
            <div className="absolute inset-[14%] overflow-hidden rounded-full shadow-2xl shadow-blue-200 ring-4 ring-white">
              <Image
                src={images.vetCircle}
                alt="Veterinaria profesional con mascota"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
