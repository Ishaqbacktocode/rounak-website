"use client";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);
  const bg = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, color-mix(in oklch, var(--brand) 24%, transparent), transparent 70%)`;

  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      className={`group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20 ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: bg }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}