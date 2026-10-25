import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { aboutText } from "@/lib/home-content";

export function AboutIntro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-foreground/10 shadow-2xl shadow-[var(--brand)]/10">
            <Image
              src="/images/about-team.jpg"
              alt="Colleagues working together on technology solutions"
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-sm font-medium text-white sm:bottom-7 sm:left-7">
              Technology built around people
            </p>
          </div>
          <div className="absolute -bottom-5 right-4 rounded-2xl border border-foreground/10 bg-background/95 px-5 py-4 shadow-xl backdrop-blur-xl sm:-right-5">
            <p className="text-2xl font-semibold tracking-tight">20+ years</p>
            <p className="mt-1 text-xs text-muted-foreground">supporting businesses in Dubai</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Who we are
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Your trusted IT partner in Dubai
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">{aboutText.who}</p>

          <div className="mt-8 border-t border-foreground/10 pt-6">
            <h3 className="text-lg font-semibold tracking-tight">What we do</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{aboutText.what}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Learn about us <ArrowRight className="size-4" />
            </Link>
            <a
              href={aboutText.sapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Find us in SAP <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}