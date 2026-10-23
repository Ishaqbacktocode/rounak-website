"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";
import { productGroups, products } from "@/lib/products";

const span = { 2: "md:col-span-2", 3: "md:col-span-3", 4: "md:col-span-4" } as const;
const bento = [4, 2, 2, 2, 2, 3, 3] as const;

export function ProductsGrid() {
  const [filter, setFilter] = useState<(typeof productGroups)[number]>("All");
  const list = products.filter((p) => filter === "All" || p.group === filter);
  const filtered = filter !== "All";

  return (
    <div>
      <div role="tablist" aria-label="Filter products" className="mb-10 flex flex-wrap gap-2">
        {productGroups.map((g) => (
          <button
            key={g}
            role="tab"
            aria-selected={filter === g}
            onClick={() => setFilter(g)}
            className="relative rounded-full px-4 py-2 text-sm transition-colors"
          >
            {filter === g && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/20"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative ${filter === g ? "text-foreground" : "text-muted-foreground"}`}>
              {g}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 md:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => {
            const cols = filtered ? (list.length % 2 === 0 ? 3 : 2) : bento[i] ?? 2;
            const big = cols >= 4;
            return (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={span[cols as 2 | 3 | 4]}
              >
                <SpotlightCard>
                  <Link
                    href={`/products/${p.slug}`}
                    className="flex h-full min-h-[280px] flex-col p-8"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand)]/30 to-[var(--brand-2)]/10">
                        <p.icon className="size-7 text-[var(--brand)]" />
                      </div>
                      <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>

                    <p className="mt-8 text-xs uppercase tracking-wider text-muted-foreground">
                      {p.group}
                    </p>
                    <h3 className={`mt-2 font-semibold tracking-tight ${big ? "text-3xl" : "text-xl"}`}>
                      {p.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{p.tagline}</p>

                    <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}