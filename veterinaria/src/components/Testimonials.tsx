"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary-dark sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-slate-600">
            Historias de familias que confían en nosotros
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <div className="relative rounded-3xl bg-white p-8 shadow-xl shadow-blue-100 sm:p-10">
            <Quote className="absolute top-6 right-6 h-10 w-10 text-accent opacity-50" />

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-accent-light bg-primary font-display text-2xl font-bold text-white">
                {current.name.charAt(0)}
              </div>
              <div>
                <p className="font-display text-lg font-bold text-primary-dark">
                  {current.name}
                </p>
                <p className="text-sm text-slate-500">{current.pet}</p>
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 italic">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-primary"
                        : "w-2 bg-blue-200 hover:bg-accent"
                    }`}
                    aria-label={`Testimonio ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-accent-light"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-accent-light"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
