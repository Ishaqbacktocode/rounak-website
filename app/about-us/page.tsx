import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Stats } from "@/components/stats";
import { Partners } from "@/components/partners";
import { team, timeline, values } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Rounak Computers | IT & Cloud Partner in Dubai",
  description:
    "Over 20 years helping Dubai businesses with cloud, managed IT, security and Microsoft solutions.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Dubai IT partner for more than 20 years."
        text="We started with hardware and support, then grew into cloud, security and AI as our clients' needs grew. The approach hasn't changed: understand the business first, then recommend technology."
      >
        <Button render={<Link href="/contact-us" />} nativeButton={false} size="lg" className="rounded-full">
          Talk to our team <ArrowRight />
        </Button>
        <Button render={<Link href="/dubai-ai-seal" />} nativeButton={false} size="lg" variant="outline" className="rounded-full">
          Dubai AI Seal
        </Button>
      </PageHero>

      <Stats />

      {/* Values */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">What we stand for</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <v.icon className="size-7 text-[var(--brand)]" />
                <h3 className="mt-6 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">Our journey</h2>
        <ol className="mt-12 space-y-10 border-l border-white/10 pl-8">
          {timeline.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[2.45rem] top-1.5 size-3 rounded-full bg-[var(--brand)] ring-4 ring-background" />
                <p className="text-sm text-[var(--brand)]">{t.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">The team</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--brand)]/30 to-[var(--brand-2)]/10" />
                <p className="mt-4 font-semibold">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <h2 className="mb-8 px-6 text-center text-sm uppercase tracking-wider text-muted-foreground">
          Technology partners
        </h2>
        <Partners />
      </section>
    </>
  );
}