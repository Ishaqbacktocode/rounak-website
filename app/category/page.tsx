import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { categoryList, getCategory, groupServices, type CategorySlug } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryList.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return {
    title: `${c.title} in Dubai | Rounak Computers`,
    description: c.description,
    alternates: { canonical: `/${c.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-44">
        <div className="aurora" />
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-[var(--brand)]">{c.tagline}</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">{c.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{c.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-32">
        {groupServices(c.slug as CategorySlug).map((g) => (
          <div key={g.group}>
            <h2 className="mb-6 text-sm uppercase tracking-wider text-muted-foreground">{g.group}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {g.items.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link
                    href={`/${s.category}/${s.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <p className="mt-3 text-muted-foreground">{s.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}