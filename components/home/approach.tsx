import { ArrowRight, Headset, Lightbulb, Settings2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { approach } from "@/lib/home-content";

const stepIcons = [Lightbulb, Settings2, Headset];

export function Approach() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="approach-glow pointer-events-none absolute -left-48 top-1/4 size-[32rem] rounded-full bg-[var(--brand)] opacity-[0.07] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            A clear path to better IT
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            A thoughtful approach. Reliable results.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            {approach.intro}
          </p>
        </Reveal>

        <div className="relative mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          <div
            aria-hidden="true"
            className="absolute left-[18%] right-[18%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent md:block"
          />
          {approach.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? Lightbulb;

            return (
              <Reveal key={step.title} delay={index * 0.1} className="h-full">
                <article className="approach-card group relative flex h-full min-h-72 flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card/75 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/30 hover:shadow-xl hover:shadow-[var(--brand)]/10 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-[var(--brand)] opacity-[0.04] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.12]"
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 text-[var(--brand)] transition-transform duration-300 group-hover:scale-105">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="text-sm font-semibold tabular-nums tracking-wider text-[var(--brand)]/70">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="relative mt-8 text-xl font-semibold tracking-tight sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {step.text}
                  </p>
                  <div className="relative mt-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
                    {index < approach.steps.length - 1 ? (
                      <>
                        Next step <ArrowRight aria-hidden="true" className="size-3.5 text-[var(--brand)]" />
                      </>
                    ) : (
                      <>Built for the long term</>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}