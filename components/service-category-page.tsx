import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import type { CategorySlug } from "@/lib/site";
import { getCategory, getWhatsAppLink, groupServices, type Service } from "@/lib/site";
import { categoryCopy } from "@/lib/source-page-copy";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

type ServiceCategory = Exclude<CategorySlug, "products">;

const groupImages: Record<string, string> = {
  Infrastructure: "/images/visuals/it-infrastructure.jpg",
  "Support & managed": "/images/visuals/it-support.jpg",
  "Licensing & apps": "/images/visuals/it-applications.jpg",
};

const itServiceRoutes = [
  ["Keep systems running", "Managed IT Services", "managed-it-services"],
  ["Maintain critical infrastructure", "IT AMC Services", "it-amc-services-get-it-annual-maintenance-contract"],
  ["Improve office connectivity", "Structured Cabling", "structured-cabling"],
  ["Get technical help", "IT Support", "expert-it-support-services-dubai"],
] as const;

const processSteps = [
  "Understand your environment",
  "Recommend the right support model",
  "Implement or improve your setup",
  "Provide ongoing support",
] as const;

const cloudApproach = [
  {
    title: "We Understand",
    text: "We study business objectives and offer suitable options. If you are looking for cloud service providers in Dubai or flexible cloud services in Dubai, we will select the best technologies.",
  },
  {
    title: "We Deliver",
    text: "Our cloud solutions in Dubai deployment projects include monitoring, orchestration and optimization tools to reduce costs and increase efficiency.",
  },
  {
    title: "We Support",
    text: "Round-the-clock support from experienced cloud service providers in UAE ensures smooth operation. We guarantee compliance with standards, regular maintenance and confidence in the stability of your processes.",
  },
] as const;

export function ServiceCategoryPage({ slug }: { slug: ServiceCategory }) {
  const category = getCategory(slug);
  const content = categoryCopy[slug];
  const groups = groupServices(slug);
  const count = groups.reduce((total, group) => total + group.items.length, 0);
  const isItServices = slug === "it-services";

  return (
    <>
      <section className="site-hero relative overflow-hidden px-6 pb-16 pt-44 md:pb-24">
        <div className="aurora" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-sm text-[var(--brand)]">{category.tagline}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
              {content.heading}
            </h1>
            {content.introHeading && (
              <h2 className="mt-6 max-w-3xl text-2xl font-semibold tracking-tight">
                {content.introHeading}
              </h2>
            )}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {content.intro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button render={<Link href="/contact-us" />} nativeButton={false} size="lg" className="rounded-full">
                Talk to an expert <ArrowRight />
              </Button>
              <span className="text-sm text-muted-foreground">
                {count} services · Dubai and across the UAE
              </span>
            </div>
          </Reveal>
          {isItServices && (
            <Reveal delay={0.12} className="relative hidden lg:block">
              <div className="service-category-visual relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card/70 p-2 shadow-2xl shadow-[var(--brand)]/10">
                <Image
                  src="/images/visuals/it-hero.jpg"
                  alt="IT infrastructure support"
                  width={900}
                  height={560}
                  priority
                  className="h-96 w-full rounded-[1.5rem] object-cover object-center"
                />
                <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-background/70 via-transparent to-white/10" />
                <div className="absolute bottom-7 left-7 rounded-2xl border border-white/20 bg-background/75 px-4 py-3 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">IT services</p>
                  <p className="mt-1 text-sm font-medium">Infrastructure · Support · Applications</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {isItServices && (
        <>
          <nav className="sticky top-0 z-30 mt-6 border-y border-foreground/10 bg-background/85 px-6 py-3 backdrop-blur-xl" aria-label="IT services sections">
            <div className="mx-auto grid max-w-6xl grid-cols-5 gap-1 text-center text-[10px] text-muted-foreground sm:flex sm:items-center sm:gap-6 sm:whitespace-nowrap sm:text-sm">
              <a href="#services" className="rounded-lg px-1 py-2 font-medium text-foreground hover:text-[var(--brand)] sm:px-0">Services</a>
              <a href="#choose-service" className="rounded-lg px-1 py-2 hover:text-foreground sm:px-0">Find your service</a>
              <a href="#approach" className="rounded-lg px-1 py-2 hover:text-foreground sm:px-0">Our approach</a>
              <a href="#process" className="rounded-lg px-1 py-2 hover:text-foreground sm:px-0">Our process</a>
              <Link href="/contact-us" className="rounded-lg bg-foreground px-1 py-2 font-medium text-background sm:ml-auto sm:rounded-full sm:px-4">Get in touch</Link>
            </div>
          </nav>

          <section id="choose-service" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-24">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Find the right starting point</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">IT support built around your business needs.</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {itServiceRoutes.map(([need, title, href], index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <Link href={`/it-services/${href}`} className="group flex items-center justify-between rounded-2xl border border-foreground/10 bg-card/60 p-6 transition hover:-translate-y-1 hover:border-[var(--brand)]/30">
                    <div>
                      <p className="text-sm text-muted-foreground">{need}</p>
                      <h3 className="mt-2 text-lg font-semibold group-hover:text-[var(--brand)]">{title}</h3>
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="approach" className="scroll-mt-24 border-y border-foreground/10 bg-card/30 px-6 py-20 md:py-24">
            <div className="mx-auto max-w-6xl">
              <Reveal className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Our approach</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Our Approach to Cloud Solutions for Business</h2>
                <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
                  At Rounak Computers, we combine the experience of working with UAE cloud services and managed IT services, ensuring growth and stability for enterprises. Proven methods and certified experts make implementation simple and effective.
                </p>
              </Reveal>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {cloudApproach.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <div className="h-full rounded-[1.75rem] border border-[var(--brand)]/15 bg-[var(--brand)]/10 px-6 py-8 text-center transition hover:-translate-y-1 hover:bg-[var(--brand)]/15 md:px-7">
                      <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-[var(--brand)] text-background">
                        <Check className="size-5" />
                      </span>
                      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-4 leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {content.sections.map((section) => (
        <section key={section.heading} className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">{paragraph}</p>
          ))}
        </section>
      ))}

      <section id={isItServices ? "services" : undefined} className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24">
        <div className="mb-10">
          <p className="text-sm text-[var(--brand)]">Services</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{category.title}, made practical.</h2>
        </div>
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.group}>
              {isItServices && groupImages[group.group] && (
                <div className="mb-5 overflow-hidden rounded-2xl border border-foreground/10">
                  <Image src={groupImages[group.group]} alt="" width={1600} height={900} className="h-48 w-full object-cover object-center transition-transform duration-700 hover:scale-105" />
                </div>
              )}
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">{group.group}</h3>
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

      {isItServices && (
        <section id="process" className="scroll-mt-24 border-y border-foreground/10 bg-card/35 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">A practical process</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">From IT challenge to dependable support.</h2>
              <p className="mt-5 max-w-md leading-7 text-muted-foreground">We help you understand your environment, improve the setup, and keep your team supported.</p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((title, index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-foreground/10 bg-background/70 p-6">
                    <span className="text-sm font-semibold text-[var(--brand)]">0{index + 1}</span>
                    <h3 className="mt-5 font-semibold">{title}</h3>
                    <Check className="mt-8 size-5 text-[var(--brand)]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-32 pt-8">
        <Reveal className="site-cta-panel mx-auto max-w-5xl rounded-3xl border p-10 text-center md:p-14">
          <p className="text-sm text-[var(--brand)]">Work with Rounak</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{isItServices ? "Not sure which IT service you need?" : "Let's find the right solution for your business."}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">Tell us what your business needs and our team will help you identify the right next step.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button render={<Link href="/contact-us" />} nativeButton={false} size="lg" className="mt-8 rounded-full">Get in touch <ArrowRight /></Button>
            {isItServices && (
              <Button render={<a href={getWhatsAppLink("Hello, I'd like to know more about your IT services")} target="_blank" rel="noreferrer" />} nativeButton={false} size="lg" variant="outline" className="mt-8 rounded-full"><MessageCircle /> WhatsApp us</Button>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/${service.category}/${service.slug}`} className="site-card group flex h-full min-h-44 flex-col rounded-2xl border border-foreground/10 bg-card/70 p-7 transition hover:-translate-y-1 hover:border-[var(--brand)]/30 hover:bg-card">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-[var(--brand)]">{service.title}</h4>
        <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <p className="mt-3 leading-relaxed text-muted-foreground">{service.summary}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm">Explore service <ArrowRight className="size-4 text-[var(--brand)] transition-transform group-hover:translate-x-1" /></span>
    </Link>
  );
}
