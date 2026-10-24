import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, Cloud, Server, Shield } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { categoryCopy } from "@/lib/source-page-copy";

const solutions = [
  { slug: "products", icon: Boxes, label: "Products" },
  { slug: "it-services", icon: Server, label: "IT Services" },
  { slug: "cloud-services", icon: Cloud, label: "Cloud Services" },
  { slug: "security", icon: Shield, label: "Security" },
] as const;

export function HomeSolutions() {
  return (
    <section id="home-solutions" className="scroll-mt-28 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Products &amp; Services
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Explore our range of products, including Microsoft Copilot, CCTV Solutions, and more,
            to enhance your business operations.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map(({ slug, icon: Icon, label }, index) => {
            const content = categoryCopy[slug];

            return (
              <Reveal key={slug} delay={index * 0.05} className="h-full">
                <Link
                  href={`/${slug}`}
                  className="group relative flex h-full min-h-64 flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card/70 p-7 transition-colors hover:bg-card sm:min-h-72 sm:p-9"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-[var(--brand)] opacity-[0.06] blur-3xl transition-opacity group-hover:opacity-[0.12]"
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-foreground/10 bg-background/70 text-[var(--brand)]">
                      <Icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <h3 className="relative mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {label}
                  </h3>
                  {content.introHeading && (
                    <p className="relative mt-2 text-sm font-medium text-[var(--brand)]">
                      {content.introHeading}
                    </p>
                  )}
                  <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {content.intro}
                  </p>
                  <span className="relative mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium">
                    Explore {label.toLowerCase()}
                    <ArrowRight aria-hidden="true" className="size-4 text-[var(--brand)]" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
