import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Search, Rocket, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { allServices, getCategory, getService, servicesByCategory, contact } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allServices.map((s) => ({ category: s.category, slug: s.slug }));
}

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const s = getService(category, slug);
  if (!s) return {};
  return {
    title: `${s.title} in Dubai & UAE | Rounak Computers`,
    description: s.summary,
    alternates: { canonical: `/${s.category}/${s.slug}` },
  };
}

const approach = [
  { icon: Search, title: "We understand", text: "We study your business goals first, then recommend what fits." },
  { icon: Rocket, title: "We deliver", text: "Deployment with monitoring and optimisation built in to control cost." },
  { icon: LifeBuoy, title: "We support", text: "Ongoing support and regular maintenance from certified engineers." },
];

export default async function ServicePage({ params }: Props) {
  const { category, slug } = await params;
  const s = getService(category, slug);
  const c = getCategory(category);
  if (!s || !c) notFound();

  const related = servicesByCategory(s.category)
    .filter((x) => x.slug !== s.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-24 pt-44">
        <div className="aurora" />
        <div className="mx-auto max-w-5xl">
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href={`/${c.slug}`} className="hover:text-foreground">
              {c.title}
            </Link>
            <span className="mx-2">/</span>
            <span>{s.title}</span>
          </nav>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            {s.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{s.summary}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button render={<Link href="/contact-us" />} nativeButton={false} size="lg" className="rounded-full">
              Get a quote <ArrowRight />
            </Button>
            <Button
              render={<a href={contact.whatsapp} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              WhatsApp us
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <a.icon className="size-7 text-[var(--brand)]" />
                <h3 className="mt-6 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-6 text-2xl font-semibold">Related in {c.title}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/${r.category}/${r.slug}`}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
            >
              <h3 className="font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--brand)]/20 to-transparent p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Let&apos;s talk about {s.title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Tell us what you need and a certified engineer will get back to you.
          </p>
          <Button
            render={<Link href="/contact-us" />}
            nativeButton={false}
            size="lg"
            className="mt-8 rounded-full"
          >
            Contact us
          </Button>
        </Reveal>
      </section>
    </>
  );
}