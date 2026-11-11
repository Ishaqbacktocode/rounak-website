import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import type { Service } from "@/lib/site";

export type SolutionTheme = "cloud" | "security";

export type SolutionFeature = {
  label: string;
  icon: LucideIcon;
};

export type PartnerBrand = {
  name: string;
  image?: string;
};

export function SolutionHero({
  theme,
  eyebrow,
  heading,
  intro,
  image,
  imageAlt,
  imageLabel,
  imageTitle,
  imageDescription,
  features,
}: {
  theme: SolutionTheme;
  eyebrow: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageLabel: string;
  imageTitle: string;
  imageDescription: string;
  features: SolutionFeature[];
}) {
  return (
    <section
      className={`site-hero solution-hero solution-hero--${theme} relative overflow-hidden px-6 pb-16 pt-36 sm:pb-20 sm:pt-44`}
    >
      <div className="solution-hero-halo solution-hero-halo--one" aria-hidden="true" />
      <div className="solution-hero-halo solution-hero-halo--two" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] xl:gap-16">
        <Reveal className="solution-hero-copy">
          <p className="solution-eyebrow">
            <span className="solution-eyebrow-mark" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-[13ch] text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[4.5rem]">
            {heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            {intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<Link href="/contact-us" />}
              nativeButton={false}
              size="lg"
              className="h-12 rounded-full px-6"
            >
              Talk to a specialist
              <ArrowRight data-icon="inline-end" />
            </Button>
            <a className="solution-secondary-action" href="#services">
              Explore solutions
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <ul className="solution-hero-features" aria-label={`${theme} capabilities`}>
            {features.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="solution-hero-visual-reveal" delay={0.12}>
          <div className={`solution-hero-visual solution-hero-visual--${theme}`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="solution-hero-image"
            />
            <div className="solution-hero-image-shade" aria-hidden="true" />
            <div className="solution-hero-image-grid" aria-hidden="true" />
            <div className="solution-orbit solution-orbit--outer" aria-hidden="true">
              <span className="solution-orbit-node" />
            </div>
            <div className="solution-orbit solution-orbit--inner" aria-hidden="true" />

            <div className="solution-image-topline">
              <span className="solution-image-label">
                <span className="solution-image-label-dot" aria-hidden="true" />
                {imageLabel}
              </span>
              <span className="solution-image-location">Dubai · UAE</span>
            </div>

            <div className="solution-float-card solution-float-card--top">
              <span className="solution-float-card-icon" aria-hidden="true">
                {theme === "cloud" ? <ArrowUpRight /> : <ShieldCheck />}
              </span>
              <span>
                <span className="solution-float-card-label">Designed for business</span>
                <strong>{imageTitle}</strong>
              </span>
            </div>

            <div className="solution-float-card solution-float-card--bottom">
              <span className="solution-float-card-signal" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>
                <span className="solution-float-card-label">Rounak Computers</span>
                <strong>{imageDescription}</strong>
              </span>
            </div>

            <div className="solution-image-footer" aria-hidden="true">
              <span>Technology that moves business forward</span>
              <ArrowUpRight />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SolutionSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`solution-section-heading solution-section-heading--${align}`}>
      <p className="solution-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="solution-section-description">{description}</p>
    </div>
  );
}

export function SolutionPartnerStrip({
  label,
  brands,
}: {
  label: string;
  brands: PartnerBrand[];
}) {
  return (
    <section className="solution-partner-strip mt-6 px-6" aria-label={label}>
      <div className="mx-auto flex max-w-7xl flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="solution-partner-label">{label}</p>
        <div className="solution-partner-list">
          {brands.map((brand) => (
            <div className="solution-partner-item" key={brand.name}>
              <div className="solution-partner-logo">
                {brand.image ? (
                  <Image
                    src={brand.image}
                    alt=""
                    width={142}
                    height={44}
                    className="solution-partner-logo-image"
                  />
                ) : (
                  <span className="solution-partner-text-mark">{brand.name}</span>
                )}
              </div>
              <span className="solution-partner-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionServiceCard({
  service,
  icon: Icon,
  index,
}: {
  service: Service;
  icon: LucideIcon;
  index: number;
}) {
  const href = `/${service.category}/${service.slug}`;

  return (
    <Reveal delay={(index % 4) * 0.045} className="h-full">
      <SpotlightCard className="solution-service-card">
        <Link href={href} className="solution-service-card-link">
          <span className="solution-service-icon" aria-hidden="true">
            <Icon />
          </span>
          <span className="solution-service-group">{service.group}</span>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <span className="solution-service-action">
            Explore solution
            <ArrowUpRight aria-hidden="true" />
          </span>
        </Link>
      </SpotlightCard>
    </Reveal>
  );
}

export function SolutionCTA({
  theme,
  eyebrow,
  title,
  description,
}: {
  theme: SolutionTheme;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="px-6 pb-24 pt-6 sm:pb-32">
      <Reveal className={`solution-cta-panel solution-cta-panel--${theme} site-cta-panel mx-auto max-w-7xl`}>
        <div className="solution-cta-decoration" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="solution-cta-copy">
          <p className="solution-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Button
          render={<Link href="/contact-us" />}
          nativeButton={false}
          size="lg"
          className="solution-cta-button rounded-full px-6"
        >
          Start a conversation
          <ArrowRight data-icon="inline-end" />
        </Button>
      </Reveal>
    </section>
  );
}
