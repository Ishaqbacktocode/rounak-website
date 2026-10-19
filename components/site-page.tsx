import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cloud, ShieldCheck, Users, Wrench, Sparkles, LockKeyhole, ChevronRight, Building2, MessageCircle, Quote } from "lucide-react";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";

export type PageSection = {
  title: string;
  body: string;
  bullets?: string[];
  kind?: "overview" | "department" | "faq" | "testimonial";
};

export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  sections: PageSection[];
  slug?: string;
};

const productSlugs = [
  "microsoft-copilot", "microsoft-dynamics", "microsoft-azure-services", "microsoft-365", "telephony", "cctv-solutions", "computer-sales-services", "professional-cctv-installation-company-in-dubai",
];
const label = (slug: string) => slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ");

export function SitePage({ content }: { content: PageContent }) {
  const category = content.slug?.split("/")[0] ?? "general";
  const isIndex = !content.slug?.includes("/");
  const isProducts = category === "products";
  const accent = category === "security" ? "security" : category === "cloud-services" ? "cloud" : category === "it-services" ? "services" : "products";
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className={`relative overflow-hidden border-b border-border ${accent}-wash`}>
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mb-12 flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"><span>{content.eyebrow}</span><span className="hidden sm:block">Rounak Computers / {category}</span></div>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div><p className="mb-5 flex items-center gap-2 text-sm font-semibold text-primary"><Sparkles className="size-4" /> Technology, made clear</p><h1 className="max-w-4xl font-heading text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-8xl">{content.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{content.intro}</p><Link href="/contact-us" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:translate-x-1">Talk to an expert <ArrowRight className="size-4" /></Link></div>
              {content.image ? <Image src={content.image} alt={content.title} width={900} height={620} className="h-72 w-full rounded-[2rem] object-cover shadow-2xl lg:h-[28rem]" /> : <div className="grid grid-cols-2 gap-3"><ValueCard icon={Cloud} title="Cloud first" /><ValueCard icon={ShieldCheck} title="Secure by design" /><ValueCard icon={Users} title="Human expertise" /><ValueCard icon={Wrench} title="Built to last" /></div>}
            </div>
          </div>
        </section>
        {isProducts && isIndex ? <ProductIndex /> : <ContentSections sections={content.sections} accent={accent} />}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8"><div className="rounded-[2rem] bg-foreground px-7 py-12 text-background lg:flex lg:items-center lg:justify-between lg:px-12"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-60">Ready when you are</p><h2 className="mt-3 max-w-xl font-heading text-3xl font-semibold tracking-tight">Let&apos;s build a stronger IT foundation.</h2></div><Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground lg:mt-0">Start a conversation <ArrowRight className="size-4" /></Link></div></section>
      </main><SiteFooter />
    </div>
  );
}

function ProductIndex() { return <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24"><div className="mb-10 flex items-end justify-between gap-6"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Explore the range</p><h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Products</h2><p className="mt-4 max-w-xl text-muted-foreground">Technology products and solutions selected to help your business work smarter, safer, and faster.</p></div><LockKeyhole className="hidden size-10 text-primary/40 sm:block" /></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{productSlugs.map((slug, index) => <Link key={slug} href={`/products/${slug}`} className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"><span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span><h3 className="mt-14 min-h-14 font-heading text-xl font-semibold tracking-tight">{label(slug)}</h3><span className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">View product <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></section> }
function ContentSections({ sections, accent }: { sections: PageContent["sections"]; accent: string }) {
  const meaningful = sections.filter((section) => section.body.trim())
  const primary = meaningful.find((section) => section.kind === "overview") ?? meaningful[0]
  const faq = meaningful.filter((section) => section.kind === "faq")
  const testimonial = meaningful.find((section) => section.kind === "testimonial")
  const departments = meaningful.filter((section) => section !== primary && section.kind !== "faq" && section.kind !== "testimonial")

  return <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
    {primary && <article className="grid gap-8 rounded-[2rem] border border-border bg-card p-8 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-12"><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">01 / overview</span><h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{primary.title}</h2></div><p className="whitespace-pre-line text-base leading-8 text-muted-foreground">{primary.body}</p></article>}

    {departments.length > 0 && <div className="mt-20"><div className="mb-8 flex items-end justify-between gap-4"><div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">02 / departments</span><h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Explore the capabilities</h2></div><Building2 className="hidden size-8 text-primary/50 sm:block" /></div><div className="grid gap-4 md:grid-cols-2">{departments.map((section, index) => <article key={`${section.title}-${index}`} className="rounded-3xl border border-border bg-card p-7"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{accent}</span></div><h3 className="mt-10 font-heading text-2xl font-semibold tracking-tight">{section.title}</h3><p className="mt-4 whitespace-pre-line leading-7 text-muted-foreground">{section.body}</p>{section.bullets && <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-muted-foreground">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</article>)}</div></div>}

    <div className="mt-20 grid gap-6 lg:grid-cols-2">
      <article className="rounded-[2rem] border border-border bg-card p-8 lg:p-10"><div className="flex items-center gap-3 text-primary"><MessageCircle className="size-5" /><span className="text-xs font-semibold uppercase tracking-[0.2em]">03 / faq</span></div><h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight">Frequently asked questions</h2>{faq.length ? <div className="mt-6 flex flex-col gap-5">{faq.map((item) => <div key={item.title}><h3 className="font-semibold">{item.title}</h3><p className="mt-2 whitespace-pre-line leading-7 text-muted-foreground">{item.body}</p></div>)}</div> : <p className="mt-4 leading-7 text-muted-foreground">Contact our team for clear answers about scope, delivery, support, and the right technology path for your business.</p>}</article>
      <article className="rounded-[2rem] bg-foreground p-8 text-background lg:p-10"><Quote className="size-7 opacity-60" /><span className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] opacity-60">04 / testimonial</span><p className="mt-5 text-xl leading-8">{testimonial?.body ?? "Rounak Computers brings the expertise and responsiveness businesses need from a technology partner."}</p><p className="mt-8 text-sm opacity-60">{testimonial?.title ?? "Rounak Computers client experience"}</p></article>
    </div>
  </section>
}
function ValueCard({ icon: Icon, title }: { icon: typeof Cloud; title: string }) { return <div className="rounded-2xl border border-border bg-card p-5"><Icon className="size-5 text-primary" /><p className="mt-8 font-heading font-semibold">{title}</p></div>; }
