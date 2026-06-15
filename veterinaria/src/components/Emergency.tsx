import { Clock, Shield, Cpu, Heart } from "lucide-react";
import { clinicServices } from "@/lib/data";

const icons = [Clock, Shield, Cpu, Heart];

export function Emergency() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-dark shadow-2xl shadow-blue-300">
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
              Atención de emergencias
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Veterinaria 24 horas
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Staff especializado",
                "La más alta tecnología",
                "Infraestructura moderna",
                "Atención integral 24/7",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-blue-100"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {clinicServices.map((service, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={service}
                  className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/20"
                >
                  <Icon className="h-6 w-6 text-accent mb-2" />
                  <p className="text-sm font-semibold text-white">{service}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
