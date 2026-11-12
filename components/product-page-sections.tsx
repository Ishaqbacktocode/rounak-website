import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Layers, Workflow } from "lucide-react";
import { products, productGroups } from "@/lib/products";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";

const groupDescriptions: Record<(typeof productGroups)[number], string> = {
  All: "Technology for the way your business works.",
  Microsoft: "Workplace, productivity, business management and cloud tools from Microsoft.",
  Infrastructure: "Practical hardware, communications and security solutions for your workplace.",
};

const groupImages = {
  Microsoft: "/images/visuals/microsoft-workplace.jpg",
  Infrastructure: "/images/visuals/it-infrastructure.jpg",
} as const;

const process = [
  {
    step: "01",
    title: "Understand your requirements",
    text: "We start with how your team works, what needs improving, and the technology you already use.",
  },
  {
    step: "02",
    title: "Recommend the right product",
    text: "We help you compare suitable options and choose a solution that fits your requirements.",
  },
  {
    step: "03",
    title: "Configure and deploy",
    text: "Our team handles setup, migration, configuration or installation so the solution is ready to use.",
  },
  {
    step: "04",
    title: "Support your team",
    text: "We remain available for training, troubleshooting and ongoing support after deployment.",
  },
] as const;

export function ProductPageSections() {
  const faqs = products.flatMap((product) =>
    product.faqs.map((faq) => ({ ...faq, product: product.title }))
  ).slice(0, 6);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Find your solution
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Products that fit the way your business works.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {productGroups.slice(1).map((group, index) => {
            const groupProducts = products.filter((product) => product.group === group);
            const groupImage =
              group === "Microsoft" ? groupImages.Microsoft : groupImages.Infrastructure;
            return (
              <Reveal key={group} delay={index * 0.06}>
                <SpotlightCard>
                  <div className="flex h-full flex-col p-7 md:p-8">
                    <div className="product-category-image relative overflow-hidden rounded-2xl border border-foreground/10">
                      <Image
                        src={groupImage}
                        alt=""
                        width={1200}
                        height={675}
                        className="h-44 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                      {index === 0 ? <Workflow className="size-6" /> : <Layers className="size-6" />}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">{group}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{groupDescriptions[group]}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {groupProducts.map((product) => (
                        <li key={product.slug}>
                          <Link
                            href={`/products/${product.slug}`}
                            className="group/link inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--brand)]"
                          >
                            <product.icon className="size-4 text-[var(--brand)]" />
                            {product.title}
                            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-foreground/10 bg-card/35 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              A practical process
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              From product selection to productive teams.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              We help you choose, configure and support the technology your business depends on.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-foreground/10 bg-background/70 p-6">
                  <span className="text-sm font-semibold text-[var(--brand)]">{item.step}</span>
                  <h3 className="mt-5 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              Product questions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Need help choosing?
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Start with a question or tell us what you want to improve. We can help you find the right product for your business.
            </p>
            <Link
              href="/contact-us"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Talk to an expert <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Accordion className="rounded-2xl border border-foreground/10 px-5">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`product-faq-${index}`}>
                <AccordionTrigger className="py-5 text-sm sm:text-base">{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="pb-4 leading-7 text-muted-foreground">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      <section className="px-6 pb-32">
        <Reveal className="mx-auto max-w-5xl rounded-3xl border border-foreground/10 bg-gradient-to-br from-[var(--brand)]/15 to-transparent p-10 text-center md:p-14">
          <Check className="mx-auto size-8 text-[var(--brand)]" />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Not sure which product fits?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            Tell us what your business needs to improve, and our team will help you find the right solution.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Enquire now <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
