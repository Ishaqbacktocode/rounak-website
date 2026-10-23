"use client";
import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => (node.textContent = Math.round(v).toString() + suffix),
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section className="mx-auto grid max-w-5xl gap-10 px-6 py-24 md:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="text-6xl font-semibold tracking-tight">
            <Counter to={s.value} suffix={s.suffix} />
          </div>
          <p className="mt-2 text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </section>
  );
}