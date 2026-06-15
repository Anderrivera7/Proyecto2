"use client";

import { useEffect, useRef, useState } from "react";
import { stats, testimonials } from "@/lib/data";
import { CountUp } from "./ui/CountUp";
import { cn } from "@/lib/utils";

export function StatsBar() {
  const [visible, setVisible] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const featured = testimonials[testimonialIndex];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
      setFadeKey((k) => k + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "flex flex-col overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-200 lg:flex-row transition-all duration-700 ease-out",
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-[0.98]"
          )}
        >
          <div className="flex flex-1 flex-wrap bg-primary px-8 py-10 sm:px-12 sm:py-14 lg:py-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "flex-1 min-w-[160px] py-3 text-center sm:text-left transition-all duration-700 ease-out",
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    delay={index * 200}
                    duration={2000}
                  />
                </p>
                <p
                  className={cn(
                    "mt-2 text-base font-medium text-blue-100 transition-all duration-500",
                    visible ? "opacity-100" : "opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-1 items-center gap-6 bg-primary-dark px-8 py-10 sm:px-12 sm:py-14 lg:py-16 transition-all duration-700 ease-out",
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <div
              key={`avatar-${fadeKey}`}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 font-display text-2xl font-bold text-white animate-scale-in"
            >
              {featured.name.charAt(0)}
            </div>
            <div key={`quote-${fadeKey}`} className="animate-fade-in testimonial-fade">
              <p className="text-base leading-relaxed text-blue-100 italic sm:text-lg">
                &ldquo;{featured.quote.slice(0, 120)}...&rdquo;
              </p>
              <p className="mt-3 font-display text-lg font-semibold text-white">
                {featured.name}
              </p>
              <p className="text-sm text-blue-200">{featured.pet}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
