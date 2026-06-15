"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
};

export function CountUp({
  end,
  suffix = "",
  duration = 1800,
  delay = 0,
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now() + delay;
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, end, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString("es-PE")}
      {suffix}
    </span>
  );
}
