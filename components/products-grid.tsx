"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";
import { productGroups, products } from "@/lib/products";

const span = { 2: "md:col-span-2", 3: "md:col-span-3", 4: "md:col-span-4" } as const;
const bento = [4, 2, 2, 2, 2, 3, 3] as const;
const productImages: Record<string, string> = {
  "microsoft-365": "/images/category1/prod4.png",
  "microsoft-copilot": "/images/category1/prod6.png",
  "microsoft-dynamics": "/images/category1/prod5.png",
  "microsoft-azure-services": "/images/category1/prod10.png",
  "computer-sales-services": "/images/category1/prod7.png",
  telephony: "/images/category1/prod2.png",
  "cctv-solutions": "/images/category1/prod8.png",
};

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
            className="relative rounded-full border border-foreground/10 px-4 py-2 text-sm transition-colors hover:border-[var(--brand)]/30"
          >
            {filter === g && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/25"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative ${filter === g ? "font-medium text-foreground" : "text-muted-foreground"}`}>
              {g}
              <span className="ml-2 text-xs tabular-nums text-muted-foreground">
                {g === "All" ? products.length : products.filter((p) => p.group === g).length}
              </span>
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
                    className="flex h-full min-h-[280px] flex-col p-7 md:p-8"
                  >
                    {productImages[p.slug] && (
                      <div className="relative mb-6 overflow-hidden rounded-2xl border border-foreground/10 bg-background">
                        <Image
                          src={productImages[p.slug]}
                          alt=""
                          width={720}
                          height={360}
                          className="h-32 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/45 to-transparent" />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/10">
                        <p.icon className="size-6 text-[var(--brand)]" />
                      </div>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                      {p.group}
                    </p>
                    <h3 className={`mt-2 font-semibold tracking-tight ${big ? "text-3xl" : "text-xl"}`}>
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                      {p.summary}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium">
                      Explore solution
                      <ArrowRight className="size-4 text-[var(--brand)] transition-transform group-hover:translate-x-1" />
                    </span>
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