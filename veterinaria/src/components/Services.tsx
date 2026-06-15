"use client";

import { useState } from "react";
import {
  Syringe,
  Brush,
  Stethoscope,
  Sparkles,
  PawPrint,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { services, getWhatsAppUrl } from "@/lib/data";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const iconMap = {
  syringe: Syringe,
  brush: Brush,
  stethoscope: Stethoscope,
  sparkles: Sparkles,
};

export function Services() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () => setActive((i) => (i === services.length - 1 ? 0 : i + 1));

  return (
    <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <PawPrint className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-dark sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-slate-600">
            ¿Qué podemos hacer por tu mascota hoy? Atención integral con los
            mejores profesionales y tecnología de vanguardia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isActive = index === active;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "group rounded-3xl p-6 text-left transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1",
                  isActive
                    ? "bg-primary text-white shadow-blue-200"
                    : "bg-white text-primary-dark hover:bg-accent-light"
                )}
              >
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl",
                    isActive ? "bg-white/20" : "bg-accent-light"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-7 w-7",
                      isActive ? "text-white" : "text-primary"
                    )}
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    isActive ? "text-blue-100" : "text-slate-500"
                  )}
                >
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-accent-light transition-colors"
            aria-label="Servicio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <Button
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Más información
          </Button>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-accent-light transition-colors"
            aria-label="Siguiente servicio"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
