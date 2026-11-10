import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProduct, products } from "@/lib/products";
import { getWhatsAppLink, SITE_URL } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";
import { getSourcePageCopy } from "@/lib/source-page-copy";

export const dynamicParams = false;

const productImages: Record<string, string> = {
  "microsoft-365": "/images/category1/prod4.png",
  "microsoft-copilot": "/images/category1/prod6.png",
  "microsoft-dynamics": "/images/category1/prod5.png",
  "microsoft-azure-services": "/images/category1/prod10.png",
  "computer-sales-services": "/images/category1/prod7.png",
  telephony: "/images/category1/prod2.png",
  "cctv-solutions": "/images/category1/prod9.png",
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const seo = getSourceSeo(`/products/${slug}`);
  return {
    title: seo?.title ?? `${p.title} in Dubai & UAE | Rounak Computers`,
    description: seo?.description ?? `${p.tagline} ${p.summary}`,
    alternates: { canonical: `/products/${p.slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const sourceCopy = getSourcePageCopy(`/products/${slug}`);

  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);
  const quoteHref = `/contact-us?service=${encodeURIComponent(p.title)}`;
  const waHref = getWhatsAppLink(`Hello, I'd like to know more about ${p.title}`);
  const productImage = productImages[p.slug];

  return (
    <>
      {/* Hero */}
      <section className="site-hero relative overflow-hidden px-6 pb-16 pt-40 md:pb-24 md:pt-44">
        <div className="aurora" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <nav className="mb-8 text-sm text-muted-foreground">
              <Link href="/products" className="hover:text-foreground">Products</Link>
              <span className="mx-2">/</span>
              <span>{p.title}</span>
            </nav>

            <div className="flex size-16 items-center justify-center rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/10">
              <p.icon className="size-8 text-[var(--brand)]" />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              Microsoft solutions
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
              {sourceCopy?.heading ?? p.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{p.tagline}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button render={<Link href={quoteHref} />} nativeButton={false} size="lg" className="rounded-full">
                Get a quote <ArrowRight />
              </Button>
              <Button
                render={<a href={waHref} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <MessageCircle /> WhatsApp us
              </Button>
            </div>
          </Reveal>

          {productImage && (
            <Reveal delay={0.12} className="relative">
              <div className="product-detail-image relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card/70 p-2 shadow-2xl shadow-[var(--brand)]/10">
                <Image
                  src={productImage}
                  alt={`${p.title} product visual`}
                  width={900}
                  height={560}
                  priority
                  className="h-72 w-full rounded-[1.5rem] object-cover object-center sm:h-96"
                />
                <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-background/45 via-transparent to-white/10" />
                <div className="absolute bottom-7 left-7 rounded-2xl border border-white/20 bg-background/75 px-4 py-3 shadow-lg backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">Rounak Computers</p>
                  <p className="mt-1 text-sm font-medium">Setup, support and guidance</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <nav className="sticky top-0 z-30 border-y border-foreground/10 bg-background/85 px-6 py-3 backdrop-blur-xl" aria-label="Product page sections">
        <div className="mx-auto grid max-w-6xl grid-cols-4 items-center gap-1 text-center text-[10px] text-muted-foreground sm:flex sm:gap-5 sm:whitespace-nowrap sm:text-sm">
          <a href="#overview" className="rounded-lg px-1 py-2 font-medium text-foreground hover:text-[var(--brand)] sm:px-0 sm:py-1">Overview</a>
          <a href="#features" className="rounded-lg px-1 py-2 hover:text-foreground sm:px-0 sm:py-1">What we provide</a>
          <a href="#benefits" className="rounded-lg px-1 py-2 hover:text-foreground sm:px-0 sm:py-1">Benefits</a>
          <a href={quoteHref} className="rounded-lg bg-foreground px-1 py-2 font-medium text-background hover:opacity-90 sm:hidden">Get a quote</a>
          {p.faqs.length > 0 && <a href="#faqs" className="hidden hover:text-foreground sm:inline sm:py-1">FAQs</a>}
          <Link href={quoteHref} className="hidden shrink-0 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background sm:ml-auto sm:inline-flex">
            Get a quote
          </Link>
        </div>
      </nav>

      <section id="overview" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 md:py-20">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">At a glance</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A clearer way to get started.</h2>
            </div>
            <div>
              <p className="leading-8 text-muted-foreground">{p.tagline}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {p.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-foreground/10 bg-card/70 p-4">
                    <span className="mb-3 block size-2 rounded-full bg-[var(--brand)]" />
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
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

      <section className="mx-auto max-w-5xl space-y-20 px-6 py-10">
        <div id="features" className="scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">How we help</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">What we provide</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {p.features.map((feature) => (
              <SpotlightCard key={feature.title}>
                <article className="h-full p-7">
                  <span className="text-sm font-semibold text-[var(--brand)]">0{p.features.indexOf(feature) + 1}</span>
                  <h3 className="mt-5 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.text}</p>
                </article>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div id="benefits" className="scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">The outcome</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Benefits for your business</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {p.benefits.map((benefit) => (
              <li key={benefit} className="rounded-2xl border border-foreground/10 bg-card/60 p-5">
                <div className="flex gap-3 leading-7 text-muted-foreground">
                  <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-[var(--brand)]" />
                  <span>{benefit}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {p.faqs.length > 0 && (
          <div id="faqs" className="scroll-mt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Need to know</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Frequently asked questions</h2>
            <Accordion className="mt-6 rounded-2xl border border-foreground/10 px-5">
              {p.faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`}>
                  <AccordionTrigger className="py-5 text-sm sm:text-base">{faq.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-4 leading-7 text-muted-foreground">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </section>

      {/* Related */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold">More products</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <SpotlightCard key={r.slug}>
              <Link href={`/products/${r.slug}`} className="flex h-full flex-col p-6">
                {productImages[r.slug] && (
                  <Image
                    src={productImages[r.slug]}
                    alt=""
                    width={800}
                    height={450}
                    className="mb-5 h-32 w-full rounded-xl object-cover object-center"
                  />
                )}
                <div className="flex items-start justify-between">
                  <r.icon className="size-6 text-[var(--brand)]" />
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-5 font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.tagline}</p>
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 pt-8">
        <Reveal className="site-cta-panel mx-auto max-w-5xl rounded-[2rem] border p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Let&apos;s talk about {p.title}</h2>
          <Button render={<Link href={quoteHref} />} nativeButton={false} size="lg" className="mt-8 rounded-full">
            Contact us
          </Button>
        </Reveal>
      </section>

      {/* Structured data: service + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: sourceCopy?.heading ?? p.title,
              description: getSourceSeo(`/products/${p.slug}`)?.description ?? p.summary,
              url: `${SITE_URL}/products/${p.slug}`,
              areaServed: "AE",
              provider: { "@type": "Organization", name: "Rounak Computers LLC", url: SITE_URL },
            },
            ...(p.faqs.length > 0
              ? [{
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: p.faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                }]
              : []),
          ]),
        }}
      />
    </>
  );
}
