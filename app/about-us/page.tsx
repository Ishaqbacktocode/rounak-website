import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Headset,
  Laptop,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BusinessPartners } from "@/components/home/business-partners";
import { AiSeal } from "@/components/home/ai-seal";
import { aboutText, approach } from "@/lib/home-content";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/about-us");

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: { canonical: "/about-us" },
};

const capabilities = [
  {
    title: "Hardware & software",
    description:
      "Business hardware and software from authorized distributors, selected to suit your requirements.",
    icon: Laptop,
  },
  {
    title: "Cloud solutions",
    description:
      "Cloud migration, implementation, and management across Microsoft cloud platforms.",
    icon: Cloud,
  },
  {
    title: "IT infrastructure",
    description:
      "Structured cabling, CCTV, telephony, onsite support, and maintenance for critical infrastructure.",
    icon: Network,
  },
  {
    title: "Managed IT & security",
    description:
      "Ongoing IT support and security-minded solutions to help keep business operations running.",
    icon: ShieldCheck,
  },
];

const approachIcons = [Laptop, Cloud, Headset];

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden">
      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="aurora" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <span aria-hidden="true" className="px-2 text-foreground/30">/</span>
              <span aria-current="page" className="text-foreground">About Us</span>
            </nav>
            <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_0.65fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                  Established in Dubai · 2004
                </p>
                <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  IT expertise shaped around your business.
                </h1>
              </div>
              <div className="lg:pb-2">
                <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  For more than two decades, we have helped organizations in Dubai
                  navigate changing technology with practical advice, trusted
                  products, and dependable support.
                </p>
                <Link
                  href="/contact-us"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Talk to our team
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-[var(--brand)] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-foreground/10 shadow-2xl shadow-[var(--brand)]/10">
              <Image
                src="/images/about-team.jpg"
                alt="Technology team collaborating on business solutions"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-sm font-medium text-white sm:bottom-8 sm:left-8">
                People-first technology, delivered with care
              </p>
            </div>
            <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/95 px-5 py-4 shadow-xl backdrop-blur-xl sm:-right-5">
              <Users aria-hidden="true" className="size-5 text-[var(--brand)]" />
              <div>
                <p className="text-lg font-semibold leading-none">18 colleagues</p>
                <p className="mt-1.5 text-xs text-muted-foreground">working as one team</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A trusted IT partner in Dubai
            </h2>
            <p className="mt-6 leading-7 text-muted-foreground">{aboutText.who}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Since 2004", "Dubai-based", "Certified professionals"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-foreground/10 bg-card/70 px-3.5 py-2 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Our story
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Building IT solutions for over two decades
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal className="h-full">
              <div className="relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card/75 p-7 shadow-sm sm:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[var(--brand)] opacity-[0.07] blur-3xl"
                />
                <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                  Our beginning
                </p>
                <div className="relative mt-12">
                  <p className="text-6xl font-semibold tracking-[-0.06em] sm:text-7xl">
                    2004
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                    One employee. A 250 sq. ft. room. A commitment to service.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-[1.75rem] border border-foreground/10 bg-card/70 p-7 sm:p-9">
                <div className="space-y-5 leading-7 text-muted-foreground">
                  <p>
                    Founded in a modest 250 sq. ft. room within a struggling mall,
                    Rounak Computers began with a single employee and a vision: to
                    provide exceptional hardware solutions with unparalleled
                    customer service. A commitment to customer satisfaction and
                    staying current with technology helped the company grow.
                  </p>
                  <p>
                    Today, Rounak Computers is a team of 18, working from a
                    1,400 sq. ft. office. Its focus on client service has helped
                    build partnerships with technology providers including
                    Microsoft, Huawei, and Amazon.
                  </p>
                  <p>
                    The company has expanded into cloud migration and
                    cybersecurity, continuing to adapt its services as client
                    needs and technology evolve.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-foreground/10 pt-6">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight">20+</p>
                    <p className="mt-1 text-xs text-muted-foreground">years in Dubai</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold tracking-tight">1,400</p>
                    <p className="mt-1 text-xs text-muted-foreground">sq. ft. office</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-20 md:py-28">
        <div
          aria-hidden="true"
          className="approach-glow pointer-events-none absolute -left-48 top-1/4 size-[32rem] rounded-full bg-[var(--brand)] opacity-[0.07] blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Comprehensive IT services, tailored to your business
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              We help businesses address their technology needs, from selecting
              the right equipment to implementing and supporting the systems
              they depend on.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.05} className="h-full">
                <article className="group relative flex h-full min-h-60 flex-col overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-card/75 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/30 hover:shadow-xl hover:shadow-[var(--brand)]/10 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 text-[var(--brand)]">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="text-xs font-semibold tabular-nums text-[var(--brand)]/70">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-xl shadow-[var(--brand)]/5">
              <Image
                src="/images/2024/10/05/microsoft.png"
                alt="Microsoft cloud solutions"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-contain p-6 sm:p-10"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Cloud expertise
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Make the most of the cloud
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">{aboutText.what}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/cloud-services"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Explore cloud services <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                href={aboutText.sapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/70 px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--brand)]/30 hover:text-[var(--brand)]"
              >
                Find us in SAP <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Our approach to cloud solutions for business
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              {approach.intro}
            </p>
          </Reveal>
          <div className="relative mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
            <div
              aria-hidden="true"
              className="absolute left-[18%] right-[18%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent md:block"
            />
            {approach.steps.map((step, index) => {
              const Icon = approachIcons[index] ?? Cloud;

              return (
                <Reveal key={step.title} delay={index * 0.1} className="h-full">
                  <article className="group relative flex h-full min-h-64 flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card/75 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/30 hover:shadow-xl hover:shadow-[var(--brand)]/10 sm:p-8">
                    <div className="relative flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 text-[var(--brand)]">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="text-sm font-semibold tabular-nums text-[var(--brand)]/70">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 text-xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                      {step.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative isolate grid gap-8 overflow-hidden rounded-[2rem] border border-foreground/10 bg-card/80 p-7 shadow-xl shadow-[var(--brand)]/5 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 -z-10 size-96 rounded-full bg-[var(--brand)] opacity-[0.08] blur-[110px]"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                Why Rounak Computers
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Your trusted partner for scalable, reliable IT
              </h2>
            </div>
            <div className="space-y-5 leading-7 text-muted-foreground">
              <p>
                Customer satisfaction is at the heart of everything we do. Our
                experienced team delivers reliable, scalable IT solutions and
                works to ensure each client receives attentive service. We
                understand that every business has unique needs and strive to
                meet them with precision and care.
              </p>
              <p>
                Our commitment to innovation and partnerships with leading
                technology providers helps clients access current IT
                advancements. We aim to be a partner dedicated to their success
                and growth.
              </p>
              <div className="flex items-start gap-3 rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 p-5 text-sm leading-6 text-foreground">
                <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" />
                <p>
                  Security is a core focus across our services, helping protect
                  your business in every solution we implement.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 pb-24 pt-8 md:pb-32">
        <Reveal className="about-cta-panel mx-auto max-w-7xl rounded-[2rem] border border-foreground/10 p-8 text-center sm:p-12 md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Let’s build what’s next
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Tell us what your business needs from technology.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Talk with our team about IT products, cloud solutions, infrastructure,
            or ongoing support.
          </p>
          <Link
            href="/contact-us"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Contact our team
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-[var(--brand)] transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </section>
      <AiSeal />
      <BusinessPartners />
    </main>
  );
}
