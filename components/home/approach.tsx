import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { approach } from "@/lib/home-content";

export function Approach() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Our Approach to Cloud Solutions for Business
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">{approach.intro}</p>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {approach.steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1} className="h-full">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <CheckCircle2 className="size-7 text-[var(--brand)]" />
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}