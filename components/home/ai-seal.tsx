import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { aiSeal } from "@/lib/home-content";

export function AiSeal() {
  return (
    <section
      id="dubai-ai-seal"
      className="relative isolate scroll-mt-28 overflow-hidden px-6 py-20 md:py-28"
    >
      <div aria-hidden="true" className="ai-seal-ambient" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Recognition in responsible innovation
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Dubai AI Seal
            </h2>
          </div>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles aria-hidden="true" className="size-4 text-[var(--brand)]" />
            Government of Dubai · Dubai AI Week 2025
          </p>
        </Reveal>

        <div className="ai-seal-feature relative grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="ai-seal-image-card relative">
            <div className="ai-seal-image-frame relative aspect-[3/2] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-slate-100 shadow-2xl shadow-[var(--brand)]/10 sm:rounded-[2rem]">
              <Image
                src="/images/dubai-ai-seal.png"
                alt="Rounak Computers team at the Dubai AI Seal recognition event"
                fill
                priority={false}
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="ai-seal-photo object-contain"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 px-1 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Dubai AI Week · 21 April 2025
              </span>
              <span>Small Enterprises category</span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <div className="ai-seal-info relative flex h-full min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card/80 p-7 shadow-xl shadow-[var(--brand)]/5 backdrop-blur-sm sm:rounded-[2rem] sm:p-9 lg:p-10">
              <div
                aria-hidden="true"
                className="ai-seal-glow pointer-events-none absolute -right-24 -top-28 size-72 rounded-full bg-[var(--brand)] opacity-[0.09] blur-[90px]"
              />
              <div className="relative inline-flex size-12 items-center justify-center rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 text-[var(--brand)]">
                <Award aria-hidden="true" className="size-5" />
              </div>
              <h3 className="relative mt-6 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {aiSeal.title}
              </h3>
              <div className="relative mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {aiSeal.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="relative mt-8 grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 border-y border-foreground/10 py-5">
                <p className="text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
                  09<span className="text-[var(--brand)]">/</span>325
                </p>
                <p className="text-sm font-medium leading-5">
                  selected companies
                  <span className="block text-xs font-normal text-muted-foreground">
                    recognized across the UAE
                  </span>
                </p>
              </div>

              <Link
                href="/about-us"
                className="group relative mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold transition-colors hover:text-[var(--brand)]"
              >
                More about Rounak Computers
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 text-[var(--brand)] transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
