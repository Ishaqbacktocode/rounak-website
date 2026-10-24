import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Card } from "@/lib/home-content";

const cols = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" } as const;

export function CardGrid({
  id,
  title,
  intro,
  subheading,
  subintro,
  cards,
  columns = 4,
}: {
  id?: string;
  title: string;
  intro?: string;
  subheading?: string;
  subintro?: string;
  cards: Card[];
  columns?: 3 | 4;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        {intro && <p className="mt-4 max-w-3xl text-muted-foreground">{intro}</p>}
        {subheading && <h3 className="mt-12 text-2xl font-semibold">{subheading}</h3>}
        {subintro && <p className="mt-3 max-w-3xl text-muted-foreground">{subintro}</p>}
      </Reveal>

      <div className={`mt-12 grid gap-4 sm:grid-cols-2 ${cols[columns]}`}>
        {cards.map((c, i) => (
          <Reveal key={c.href + c.title} delay={(i % 4) * 0.06} className="h-full">
            <Link
              href={c.href}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.06]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{c.title}</h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                {c.text && <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}