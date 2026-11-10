import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Database,
  Layers3,
  LockKeyhole,
  Mail,
  MessageCircle,
  Network,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { SolutionSectionHeading } from "@/components/solution-landing-primitives";
import { getServiceDetail, type ServiceDetail } from "@/lib/service-content";
import { getSourcePageCopy } from "@/lib/source-page-copy";
import {
  getCategory,
  getService,
  getWhatsAppLink,
  servicesByCategory,
  type Service,
} from "@/lib/site";

export type ServiceDetailCategory = "cloud-services" | "security";
export type ServiceDetailTheme = "cloud" | "security";

export type ServiceDetailTemplateData = {
  category: NonNullable<ReturnType<typeof getCategory>>;
  service: Service;
  details: ServiceDetail;
  sourceCopy: ReturnType<typeof getSourcePageCopy>;
  related: Service[];
};

export function getServiceDetailTemplateData(
  categorySlug: ServiceDetailCategory,
  slug: string,
): ServiceDetailTemplateData {
  const category = getCategory(categorySlug);
  const service = getService(categorySlug, slug);
  const details = getServiceDetail(slug);

  if (!category || !service || !details) notFound();

  return {
    category,
    service,
    details,
    sourceCopy: getSourcePageCopy(`/${categorySlug}/${slug}`),
    related: servicesByCategory(categorySlug)
      .filter((item) => item.slug !== slug)
      .slice(0, 3),
  };
}

export function ServiceDetailHero({
  data,
  theme,
  image,
  imageAlt,
  brandImage,
  visualTitle,
  visualNote,
  visualTags,
}: {
  data: ServiceDetailTemplateData;
  theme: ServiceDetailTheme;
  image: string;
  imageAlt: string;
  brandImage?: string;
  visualTitle: string;
  visualNote: string;
  visualTags: string[];
}) {
  const quoteHref = `/contact-us?service=${encodeURIComponent(data.service.title)}`;
  const whatsappHref = getWhatsAppLink(`Hello, I would like to discuss ${data.service.title}`);
  const VisualIcon = theme === "cloud" ? Cloud : ShieldCheck;

  return (
    <section
      className={`site-hero service-detail-hero service-detail-hero--${theme} relative overflow-hidden px-6 pb-16 pt-36 sm:pb-24 sm:pt-44`}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <nav aria-label="Breadcrumb" className="service-detail-breadcrumb">
            <Link href={`/${data.category.slug}`}>
              {data.category.title}
            </Link>
            <ArrowRight aria-hidden="true" />
            <span aria-current="page">{data.service.title}</span>
          </nav>
        </Reveal>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] xl:gap-16">
          <Reveal className="service-detail-hero-copy">
            <p className="solution-eyebrow">
              <span className="solution-eyebrow-mark" aria-hidden="true" />
              {data.category.title} / {data.service.group}
            </p>
            <h1 className="mt-5 max-w-[13ch] text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[4.35rem]">
              {data.service.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-foreground sm:text-xl">
              {data.details.tagline}
            </p>
            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              {data.service.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href={quoteHref} />}
                nativeButton={false}
                size="lg"
                className="h-12 rounded-full px-5"
              >
                Request a consultation
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                render={<a href={whatsappHref} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-5"
              >
                <MessageCircle data-icon="inline-start" />
                WhatsApp us
              </Button>
            </div>

            <div className="service-detail-hero-tags" aria-label="Service focus">
              {visualTags.map((tag) => (
                <span key={tag}>
                  <Check aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="service-detail-visual-reveal" delay={0.12}>
            <div className={`service-detail-visual service-detail-visual--${theme}`}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="service-detail-image"
              />
              <div className="service-detail-image-shade" aria-hidden="true" />
              <div className="service-detail-image-grid" aria-hidden="true" />
              <div className="service-detail-orbit" aria-hidden="true">
                <span />
              </div>

              <div className="service-detail-visual-topline">
                <span>{theme === "cloud" ? "CLOUD SYSTEMS" : "SECURITY BY DESIGN"}</span>
                <span>Dubai · UAE</span>
              </div>

              <div className="service-detail-brand-panel">
                <span className="service-detail-brand-icon" aria-hidden="true">
                  <VisualIcon />
                </span>
                <div className="service-detail-brand-copy">
                  <span>{data.service.group}</span>
                  <strong>{data.service.title}</strong>
                </div>
                {brandImage && (
                  <span className="service-detail-brand-logo">
                    <Image src={brandImage} alt="" width={136} height={48} />
                  </span>
                )}
              </div>

              <div className="service-detail-visual-note">
                <span className="service-detail-note-mark" aria-hidden="true" />
                <span>
                  <span className="service-detail-note-label">{visualTitle}</span>
                  <strong>{visualNote}</strong>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServiceOverviewSection({
  data,
  theme,
  eyebrow,
  title,
  description,
}: {
  data: ServiceDetailTemplateData;
  theme: ServiceDetailTheme;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section id="overview" className={`service-detail-overview service-detail-overview--${theme} px-6 py-20 sm:py-28`}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <Reveal>
          <SolutionSectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="service-detail-overview-card">
            <p className="service-detail-overview-label">{data.service.group}</p>
            <p>{data.details.overview}</p>
            <div className="service-detail-overview-meta">
              <span>{data.category.title}</span>
              <span>{data.service.title}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceCapabilitySection({
  data,
  theme,
  eyebrow,
  title,
  description,
}: {
  data: ServiceDetailTemplateData;
  theme: ServiceDetailTheme;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const cloudIcons: LucideIcon[] = [Cloud, Network, Database, RefreshCw];
  const securityIcons: LucideIcon[] = [Mail, ShieldCheck, LockKeyhole, Layers3];
  const icons = theme === "cloud" ? cloudIcons : securityIcons;

  return (
    <section id="capabilities" className={`service-detail-capabilities service-detail-capabilities--${theme} px-6 py-20 sm:py-28`}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SolutionSectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <div className={`service-capability-grid service-capability-grid--${theme} mt-12`}>
          {data.details.features.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={feature.title} delay={(index % 4) * 0.05} className="h-full">
                <SpotlightCard className={`service-capability-card service-capability-card--${theme}`}>
                  <article>
                    <div className="service-capability-card-topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Icon aria-hidden="true" />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceSourceSections({
  data,
  theme,
}: {
  data: ServiceDetailTemplateData;
  theme: ServiceDetailTheme;
}) {
  const sections = data.sourceCopy?.sections ?? [];
  if (!sections.length) return null;

  return (
    <section className={`service-detail-source service-detail-source--${theme} px-6 py-20 sm:py-28`}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <div className="service-detail-source-intro">
            <p className="solution-eyebrow">From Rounak Computers</p>
            <h2>More about {data.service.title}</h2>
            <p>Explore the service details, capabilities and guidance from our original service information.</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion className="service-detail-source-accordion">
            {sections.map((section, index) => (
              <AccordionItem
                key={`${section.heading}-${index}`}
                value={`source-${index}`}
                className="service-detail-source-item"
              >
                <AccordionTrigger className="service-detail-source-trigger">
                  <span className="service-detail-source-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{section.heading}</span>
                </AccordionTrigger>
                <AccordionContent className="service-detail-source-content">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.points && (
                    <ul>
                      {section.points.map((point) => (
                        <li key={point}>
                          <Check aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceBenefitsSection({
  data,
  theme,
  eyebrow,
  title,
  description,
}: {
  data: ServiceDetailTemplateData;
  theme: ServiceDetailTheme;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className={`service-detail-benefits service-detail-benefits--${theme} px-6 py-20 sm:py-28`}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SolutionSectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <ul className="service-detail-benefit-list">
          {data.details.benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={(index % 4) * 0.04}>
              <li className="service-detail-benefit-item">
                <span className="service-detail-benefit-check">
                  <Check aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceFaqSection({ data }: { data: ServiceDetailTemplateData }) {
  if (!data.details.faqs.length) return null;

  return (
    <section className="service-detail-faq px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <SolutionSectionHeading
            eyebrow="Good to know"
            title="Questions, answered."
            description={`A few useful details about ${data.service.title.toLowerCase()} and how to get started.`}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion className="service-detail-faq-accordion">
            {data.details.faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`} className="service-detail-faq-item">
                <AccordionTrigger className="service-detail-faq-trigger">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="service-detail-faq-content">
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceRelatedSection({ data }: { data: ServiceDetailTemplateData }) {
  if (!data.related.length) return null;

  return (
    <section className="service-detail-related px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SolutionSectionHeading
            eyebrow={`More ${data.category.title}`}
            title="Keep exploring."
            description="Related services that may work alongside this solution."
          />
          <Link href={`/${data.category.slug}`} className="service-detail-all-services">
            View all services <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {data.related.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05} className="h-full">
              <SpotlightCard className="service-detail-related-card">
                <Link href={`/${service.category}/${service.slug}`} className="service-detail-related-link">
                  <span>{service.group}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceFaqSchema({ data }: { data: ServiceDetailTemplateData }) {
  if (!data.details.faqs.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.details.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      }}
    />
  );
}
