import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { teamCopy } from "@/lib/source-page-copy";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/about-us/our-team");

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: { canonical: "/about-us/our-team" },
};

export default function OurTeamPage() {
  const [intro, vision, values] = teamCopy.sections;

  return (
    <main className="relative isolate overflow-hidden">
      <section className="site-hero relative overflow-hidden px-6 pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="aurora" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <span aria-hidden="true" className="px-2 text-foreground/30">/</span>
              <Link href="/about-us" className="transition-colors hover:text-foreground">About Us</Link>
              <span aria-hidden="true" className="px-2 text-foreground/30">/</span>
              <span aria-current="page" className="text-foreground">Our Team</span>
            </nav>
            <div className="mt-10 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                People behind the solutions
              </p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                {teamCopy.heading}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Experienced specialists, continuously learning and ready to help your business get more from technology.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-foreground/10 shadow-2xl shadow-[var(--brand)]/10">
              <Image
                src="/images/our-team.webp"
                alt="Rounak Computers team collaborating on IT solutions"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-sm font-medium text-white sm:bottom-8 sm:left-8">
                One team, focused on your business
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Why our team
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Expertise that keeps moving forward
            </h2>
            {intro.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-5 leading-7 text-muted-foreground">{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {[vision, values].map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.08} className="h-full">
              <article className="site-card h-full rounded-[1.75rem] border border-foreground/10 bg-card/75 p-7 shadow-sm sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                  0{index + 1}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">{section.heading}</h2>
                <ul className="mt-7 space-y-4">
                  {section.points?.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 text-muted-foreground">
                      <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-[var(--brand)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 pt-8 md:pb-32">
        <Reveal className="site-cta-panel mx-auto max-w-7xl rounded-[2rem] border p-8 text-center sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Ready to work with our team?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            Tell us what your business needs and our specialists will help you find the right way forward.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Talk to our team <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
