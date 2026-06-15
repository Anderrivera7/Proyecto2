import Image from "next/image";
import { Plus, PawPrint } from "lucide-react";
import { getWhatsAppUrl, images } from "@/lib/data";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-accent-light to-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative z-10">
          <h1 className="font-display text-4xl font-bold leading-tight text-primary-dark sm:text-5xl lg:text-6xl animate-fade-in-up">
            Cuidamos a tu mascota y la ayudamos a crecer feliz{" "}
            <span className="inline-block animate-float-slow">🐾</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-lg lg:text-xl animate-fade-in-up delay-200">
            Saludable desde la nariz hasta la cola. Cuidado especializado y la
            más alta tecnología para tu mascota en un solo lugar, con atención
            24 horas.
          </p>
          <div className="mt-10 animate-fade-in-up delay-300">
            <Button
              href={getWhatsAppUrl()}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </Button>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-xl lg:max-w-none min-h-[480px] sm:min-h-[520px] lg:min-h-[620px] animate-fade-in-right delay-200"
        >
          <div className="absolute -right-2 top-6 text-accent opacity-60 animate-float">
            <Plus className="h-10 w-10" />
          </div>
          <div className="absolute left-2 top-1/3 text-primary opacity-40 animate-float-slow">
            <PawPrint className="h-12 w-12" />
          </div>
          <div className="absolute bottom-16 right-6 h-20 w-20 rounded-full border-4 border-accent opacity-50 animate-pulse-ring" />

          <div
            className="relative ml-auto w-[92%] rounded-[3rem] bg-sky-200 p-5 sm:p-6 shadow-2xl shadow-blue-200 animate-scale-in delay-300"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <Image
                src={images.heroMain}
                alt="Veterinaria examinando a un perro en la clínica"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 92vw, 560px"
              />
            </div>
          </div>

          <div
            className="absolute -bottom-6 left-0 w-[52%] rounded-3xl bg-sky-100 p-4 shadow-xl shadow-blue-200 animate-scale-in delay-500"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images.heroSecondary}
                alt="Veterinaria cuidando a un cachorro"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
