import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { getServiceDetail } from "@/lib/service-content";
import {
  getCategory,
  getService,
  servicesByCategory,
  type CategorySlug,
} from "@/lib/site";

type Props = { category: Exclude<CategorySlug, "products">; slug: string };

const steps = [
  {
    number: "01",
    title: "Understand your environment",
    text: "We learn about your users, systems, priorities and constraints before recommending an approach.",
  },
  {
    number: "02",
    title: "Plan and deliver",
    text: "Agree the scope, sequence and communication, then implement and test the work.",
  },
  {
    number: "03",
    title: "Support what comes next",
    text: "Review outcomes, hand over useful documentation and discuss ongoing support where needed.",
  },
];

export function getServicePageMetadata({ category, slug }: Props): Metadata {
  const service = getService(category, slug);
  const details = getServiceDetail(slug);
  if (!service || !details) return {};
  return {
    title: `${service.title} in Dubai & UAE | Rounak Computers`,
    description: `${details.tagline} ${service.summary}`,
    alternates: { canonical: `/${service.category}/${service.slug}` },
  };
}

export function ServiceDetailPage({ category: categorySlug, slug }: Props) {
  const service = getService(categorySlug, slug);
  const category = getCategory(categorySlug);
  const details = getServiceDetail(slug);
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
            <span>{service.title}</span>
          </nav>
          <p className="text-sm text-[var(--brand)]">{category.tagline}</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            {details.tagline}
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
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

      <section className="mx-auto max-w-5xl px-6 py-12">
        <Reveal>
          <p className="max-w-4xl text-2xl leading-relaxed tracking-tight">
            {details.overview}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {details.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <SpotlightCard>
                <div className="p-8">
                  <span className="text-sm text-[var(--brand)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold">{feature.title}</h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{feature.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-semibold tracking-tight">Why work with Rounak</h2>
            <ul className="mt-8 space-y-5">
              {details.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]/20">
                    <Check className="size-3.5 text-[var(--brand)]" />
                  </span>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight">How we work</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-5">
                  <span className="text-3xl font-semibold text-white/20">{step.number}</span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="md:col-span-2">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
              <p className="text-sm text-[var(--brand)]">{category.title}</p>
              <h2 className="mt-3 text-xl font-semibold">Let&apos;s discuss {service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us about your requirements. Our team will help you identify a practical
                next step.
              </p>
              <Button
                render={<Link href={quoteHref} />}
                nativeButton={false}
                className="mt-6 w-full rounded-full"
              >
                Request a consultation
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">Questions</h2>
        <Accordion>
          {details.faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`faq-${index}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

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
