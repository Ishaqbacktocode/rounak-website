import Link from "next/link";
import { ArrowRight, Boxes, Cloud, Server, Shield } from "lucide-react";
import { Reveal } from "@/components/reveal";

const solutions = [
  {
    slug: "products",
    icon: Boxes,
    label: "Products",
    description: "Business hardware and software, selected to help your team work smarter.",
  },
  {
    slug: "it-services",
    icon: Server,
    label: "IT Services",
    description: "Reliable technical support and infrastructure for your everyday operations.",
  },
  {
    slug: "cloud-services",
    icon: Cloud,
    label: "Cloud Services",
    description: "Secure cloud platforms and expert guidance to help your business scale.",
  },
  {
    slug: "security",
    icon: Shield,
    label: "Security",
    description: "Practical cybersecurity solutions to protect your people and business data.",
  },
] as const;

export function HomeSolutions() {
  return (
    <section
      id="home-solutions"
      className="scroll-mt-28 overflow-hidden px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Technology that moves your business forward
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground md:pb-1">
            Practical expertise across the technology your business depends on.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {solutions.map(({ slug, icon: Icon, label, description }, index) => (
            <Reveal key={slug} delay={index * 0.05} className="h-full">
              <Link
                href={`/${slug}`}
                className="group relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/30 hover:bg-card hover:shadow-xl hover:shadow-[var(--brand)]/10 sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-[var(--brand)] opacity-[0.05] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.14]"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-[var(--brand)]/15 bg-[var(--brand)]/5 text-[var(--brand)] transition-colors group-hover:bg-[var(--brand)]/10">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-medium tabular-nums text-muted-foreground/70">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="relative mt-8 text-xl font-semibold tracking-tight sm:text-2xl">
                  {label}
                </h3>
                <p className="relative mt-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
                <span className="relative mt-auto inline-flex items-center gap-2 border-t border-foreground/10 pt-5 text-sm font-medium">
                  Explore {label.toLowerCase()}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-[var(--brand)] transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
