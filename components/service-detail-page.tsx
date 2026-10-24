import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { getServiceDetail } from "@/lib/service-content";
import { getSourceSeo } from "@/lib/source-seo";
import { getSourcePageCopy } from "@/lib/source-page-copy";
import {
  getCategory,
  getService,
  servicesByCategory,
  type CategorySlug,
} from "@/lib/site";

type Props = { category: Exclude<CategorySlug, "products">; slug: string };

export function getServicePageMetadata({ category, slug }: Props): Metadata {
  const service = getService(category, slug);
  const details = getServiceDetail(slug);
  if (!service || !details) return {};
  const path = `/${service.category}/${service.slug}`;
  const seo = getSourceSeo(path);
  return {
    title: seo?.title ?? `${service.title} in Dubai & UAE | Rounak Computers`,
    description: seo?.description ?? `${details.tagline} ${service.summary}`,
    alternates: { canonical: path },
  };
}

export function ServiceDetailPage({ category: categorySlug, slug }: Props) {
  const service = getService(categorySlug, slug);
  const category = getCategory(categorySlug);
  const details = getServiceDetail(slug);
  const sourceCopy = getSourcePageCopy(`/${categorySlug}/${slug}`);
  if (!service || !category || !details) notFound();

  const related = servicesByCategory(categorySlug)
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const quoteHref = `/contact-us?service=${encodeURIComponent(service.title)}`;
  const whatsappHref = `https://wa.me/971504752832?text=${encodeURIComponent(
    `Hello, I'd like to know more about ${service.title}`,
  )}`;

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-44">
        <div className="aurora" />
        <Reveal className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <Link href={`/${category.slug}`} className="hover:text-foreground">
              {category.title}
            </Link>
            <span className="mx-2">/</span>
            <span>{sourceCopy?.heading ?? service.title}</span>
          </nav>
          <p className="text-sm text-[var(--brand)]">{category.tagline}</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {sourceCopy?.heading ?? service.title}
          </h1>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              render={<Link href={quoteHref} />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Request a consultation <ArrowRight />
            </Button>
            <Button
              render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <MessageCircle /> WhatsApp us
            </Button>
          </div>
        </Reveal>
      </section>

      {sourceCopy?.sections.map((section) => (
        <section key={section.heading} className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="text-3xl font-semibold tracking-tight">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          {section.points && (
            <ul className="mt-5 space-y-3">
              {section.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">More {category.title.toLowerCase()}</h2>
          <Link
            href={`/${category.slug}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--brand)]"
          >
            All services <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <SpotlightCard key={item.slug}>
              <Link href={`/${item.category}/${item.slug}`} className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{item.title}</h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32 pt-8">
        <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--brand)]/20 to-transparent p-10 text-center md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to talk about {service.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us what your business needs and our team will get back to you.
          </p>
          <Button
            render={<Link href={quoteHref} />}
            nativeButton={false}
            size="lg"
            className="mt-8 rounded-full"
          >
            Contact our team <ArrowRight />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
