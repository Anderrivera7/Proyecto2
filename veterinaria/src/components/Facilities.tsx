import { PawPrint } from "lucide-react";
import { facilities } from "@/lib/data";

export function Facilities() {
  const leftItems = facilities.filter((f) => f.side === "left");
  const rightItems = facilities.filter((f) => f.side === "right");

  return (
    <section
      id="instalaciones"
      className="px-4 py-20 sm:px-6 lg:px-8 bg-accent-light"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-dark sm:text-4xl">
            Instalaciones que ofrecemos
          </h2>
          <p className="mt-4 text-slate-600">
            Tu mascota siempre sana en nuestra clínica veterinaria. Espacios
            modernos, cómodos y equipados para cada necesidad de tu mejor amigo.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          <div className="space-y-8">
            {leftItems.map((item) => (
              <FacilityItem key={item.id} label={item.label} align="right" />
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="rounded-[50%] bg-gradient-to-br from-sky-200 to-sky-100 p-8 shadow-xl shadow-blue-100">
              <div className="flex aspect-[3/4] items-center justify-center rounded-[45%] bg-white/40">
                <PawPrint className="h-24 w-24 text-primary opacity-80" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {rightItems.map((item) => (
              <FacilityItem key={item.id} label={item.label} align="left" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilityItem({
  label,
  align,
}: {
  label: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex items-center gap-3 ${
        align === "right" ? "justify-end text-right" : "justify-start"
      }`}
    >
      {align === "right" && (
        <div className="hidden lg:flex items-center gap-2 flex-1">
          <div className="h-0.5 flex-1 bg-primary/30" />
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>
      )}
      <span className="font-display text-lg font-semibold text-primary-dark whitespace-nowrap">
        {label}
      </span>
      {align === "left" && (
        <div className="hidden lg:flex items-center gap-2 flex-1">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <div className="h-0.5 flex-1 bg-primary/30" />
        </div>
      )}
    </div>
  );
}
