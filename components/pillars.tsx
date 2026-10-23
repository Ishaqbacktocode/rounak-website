"use client";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { pillars, type Pillar } from "@/lib/data";

function SpotlightCard({ p, className }: { p: Pillar; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const bg = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, color-mix(in oklch, var(--brand) 22%, transparent), transparent 70%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: bg }}
      />
      <Link href={p.href} className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between">
          <p.icon className="size-8 text-[var(--brand)]" />
          <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
        <h3 className="mt-10 text-2xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-muted-foreground">{p.blurb}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {p.items.map((i) => (
            <li key={i} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
              {i}
            </li>
          ))}
        </ul>
      </Link>
    </motion.div>
  );
}

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
        Everything your business needs, from one team.
      </h2>
      <div className="mt-14 grid gap-4 md:grid-cols-6">
        <SpotlightCard p={pillars[0]} className="md:col-span-4" />
        <SpotlightCard p={pillars[1]} className="md:col-span-2" />
        <SpotlightCard p={pillars[2]} className="md:col-span-2" />
        <SpotlightCard p={pillars[3]} className="md:col-span-4" />
      </div>
    </section>
  );
}