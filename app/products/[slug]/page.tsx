import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { getProduct, products } from "@/lib/products";
import { contact, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.title} in Dubai & UAE | Rounak Computers`,
    description: `${p.tagline} ${p.summary}`,
    alternates: { canonical: `/products/${p.slug}` },
  };
}

const steps = [
  { n: "01", title: "We understand", text: "A short call to learn your goals, team size and constraints." },
  { n: "02", title: "We deliver", text: "Deployment with testing and handover, on a clear timeline." },
  { n: "03", title: "We support", text: "Certified engineers on call after go-live." },
];

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

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
            {p.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">{p.tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {p.highlights.map((h) => (
              <li key={h} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                {h}
              </li>
            ))}
          </ul>

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

      {/* Overview + features */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="max-w-3xl text-2xl leading-relaxed tracking-tight">{p.summary}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {p.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <SpotlightCard>
                <div className="p-8">
                  <span className="text-sm text-[var(--brand)]">0{i + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-muted-foreground">{f.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits + sticky quote card */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-semibold tracking-tight">Why choose Rounak</h2>
            <ul className="mt-8 space-y-5">
              {p.benefits.map((b) => (
                <li key={b} className="flex gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/20">
                    <Check className="size-3.5 text-[var(--brand)]" />
                  </span>
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight">How it works</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="text-3xl font-semibold text-white/20">{s.n}</span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="md:col-span-2">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
              <h3 className="text-lg font-semibold">Interested in {p.title}?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us what you need. A certified engineer will reply, usually within one working day.
              </p>
              <Button render={<Link href={quoteHref} />} nativeButton={false} className="mt-6 w-full rounded-full">
                Request a quote
              </Button>
              <a
                href={`tel:${contact.mobile.replace(/\s/g, "")}`}
                className="mt-4 block text-center text-sm text-muted-foreground hover:text-foreground"
              >
                or call {contact.mobile}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">Questions</h2>
        <Accordion>
          {p.faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

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
              name: p.title,
              description: p.summary,
              url: `${SITE_URL}/products/${p.slug}`,
              areaServed: "AE",
              provider: { "@type": "Organization", name: "Rounak Computers LLC", url: SITE_URL },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: p.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
    </>
  );
}