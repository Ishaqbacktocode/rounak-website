import { Reveal } from "@/components/reveal";
import { aiSeal } from "@/lib/home-content";

export function AiSeal() {
  return (
    <section id="dubai-ai-seal" className="scroll-mt-28 px-6 py-24">
      <Reveal className="relative mx-auto grid max-w-6xl gap-12 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--brand)]/15 via-transparent to-transparent p-8 md:p-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm text-[var(--brand)]">Government of Dubai · Dubai AI Week 2025</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {aiSeal.title}
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {aiSeal.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-6 lg:items-center lg:text-center">
          <div>
            <p className="text-7xl font-semibold tracking-tight md:text-8xl">
              9<span className="text-muted-foreground"> / 325</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              recipients among certified UAE companies
            </p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm">
            Small Enterprises category
          </span>
        </div>
      </Reveal>
    </section>
  );
}