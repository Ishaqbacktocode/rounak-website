import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { getProduct, products } from "@/lib/products";
import { contact, SITE_URL } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";
import { getSourcePageCopy } from "@/lib/source-page-copy";

export const dynamicParams = false;

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
  const waHref = `${contact.whatsapp}?text=${encodeURIComponent(`Hello, I'd like to know more about ${p.title}`)}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-44">
        <div className="aurora" />
        <Reveal className="mx-auto max-w-5xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-foreground">Products</Link>
            <span className="mx-2">/</span>
            <span>{p.title}</span>
          </nav>

          <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand)]/30 to-[var(--brand-2)]/10">
            <p.icon className="size-8 text-[var(--brand)]" />
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {sourceCopy?.heading ?? p.title}
          </h1>

          <div className="mt-10 flex flex-wrap gap-3">
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

      {/* Related */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold">More products</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <SpotlightCard key={r.slug}>
              <Link href={`/products/${r.slug}`} className="flex h-full flex-col p-6">
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
        <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--brand)]/20 to-transparent p-12 text-center">
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
          ]),
        }}
      />
    </>
  );
}