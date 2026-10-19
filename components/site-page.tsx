import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cloud, ShieldCheck, Users, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";

export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  sections: { title: string; body: string; bullets?: string[] }[];
};

export function SitePage({ content }: { content: PageContent }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{content.eyebrow}</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">{content.title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{content.intro}</p>
                <Link href="/contact-us" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90">Talk to an expert <ArrowRight className="h-4 w-4" /></Link>
              </div>
              {content.image ? <Image src={content.image} alt="Rounak Computers technology services" width={800} height={560} className="h-72 w-full rounded-[1.5rem] object-cover shadow-xl lg:h-96" /> : <div className="grid grid-cols-2 gap-4"><ValueCard icon={Cloud} title="Cloud first" /><ValueCard icon={ShieldCheck} title="Secure by design" /><ValueCard icon={Users} title="Human expertise" /><ValueCard icon={Wrench} title="Built to last" /></div>}
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          {content.sections.map((section) => <article key={section.title} className="rounded-3xl border border-border bg-card p-7 shadow-sm lg:p-9"><h2 className="font-heading text-2xl font-semibold tracking-tight">{section.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{section.body}</p>{section.bullets && <ul className="mt-6 flex flex-col gap-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />{bullet}</li>)}</ul>}</article>)}
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8"><div className="rounded-3xl bg-primary px-7 py-10 text-primary-foreground lg:flex lg:items-center lg:justify-between lg:px-12"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Ready when you are</p><h2 className="mt-3 font-heading text-3xl font-semibold">Let&apos;s build a stronger IT foundation.</h2></div><Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground lg:mt-0">Start a conversation <ArrowRight className="h-4 w-4" /></Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
function ValueCard({ icon: Icon, title }: { icon: typeof Cloud; title: string }) { return <div className="rounded-2xl border border-border bg-card p-5"><Icon className="h-5 w-5 text-primary" /><p className="mt-8 font-heading font-semibold">{title}</p></div>; }
