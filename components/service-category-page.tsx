import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { CategorySlug } from "@/lib/site";
import { getCategory, groupServices, type Service } from "@/lib/site";
import { categoryContent } from "@/lib/service-content";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

type ServiceCategory = Exclude<CategorySlug, "products">;

export function ServiceCategoryPage({ slug }: { slug: ServiceCategory }) {
  const category = getCategory(slug);
  const content = categoryContent[slug];
  const groups = groupServices(slug);
  const count = groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-44">
        <div className="aurora" />
        <Reveal className="mx-auto max-w-6xl">
          <p className="text-sm text-[var(--brand)]">{category.tagline}</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {content.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {content.intro}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              render={<Link href="/contact-us" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Talk to an expert <ArrowRight />
            </Button>
            <span className="text-sm text-muted-foreground">
              {count} services · Dubai and across the UAE
            </span>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 0.05}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <span className="flex size-9 items-center justify-center rounded-xl bg-[var(--brand)]/10">
                  <Check className="size-4 text-[var(--brand)]" />
                </span>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <p className="text-sm text-[var(--brand)]">Services</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            {category.title}, made practical.
          </h2>
        </div>
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.group}>
              <h3 className="mb-5 text-sm uppercase tracking-wider text-muted-foreground">
                {group.group}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((service, index) => (
                  <Reveal key={service.slug} delay={(index % 2) * 0.05}>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--brand)]/20 to-transparent p-10 text-center md:p-14">
          <p className="text-sm text-[var(--brand)]">Work with Rounak</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Let&apos;s find the right solution for your business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{content.cta}</p>
          <Button
            render={<Link href="/contact-us" />}
            nativeButton={false}
            size="lg"
            className="mt-8 rounded-full"
          >
            Get in touch <ArrowRight />
          </Button>
        </Reveal>
      </section>
    </>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/${service.category}/${service.slug}`}
      className="group flex h-full min-h-44 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-[var(--brand)]">
          {service.title}
        </h4>
        <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <p className="mt-3 leading-relaxed text-muted-foreground">{service.summary}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm">
        Explore service <ArrowRight className="size-4 text-[var(--brand)]" />
      </span>
    </Link>
  );
}
