import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section id="nosotros" className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-dark sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-slate-600">
            Somos tu veterinaria de confianza con experiencia, tecnología y un
            ambiente pensado para el bienestar de tu mascota.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-blue-100 bg-accent-light/50 p-8 transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              <span className="font-display text-4xl font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-primary-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
