import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductsGrid } from "@/components/products-grid";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";
import { contact } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";
import { categoryCopy } from "@/lib/source-page-copy";

const seo = getSourceSeo("/products");
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-44">
        <div className="aurora" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-sm text-[var(--brand)]">Products</p>
            <h1 className="mt-3 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              {categoryCopy.products.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {categoryCopy.products.intro}
            </p>
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
          </Reveal>

          {/* Floating icon cluster */}
          <div className="relative hidden h-72 md:col-span-2 md:block" aria-hidden>
            {products.slice(0, 6).map((p, i) => {
              const pos = [
                "left-2 top-2", "right-4 top-10", "left-20 top-32",
                "right-0 top-44", "left-0 top-52", "right-24 top-0",
              ][i];
              return (
                <div
                  key={p.slug}
                  className={`absolute ${pos} ${i % 2 ? "float-slower" : "float-slow"}`}
                >
                  <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                    <p.icon className="size-7 text-[var(--brand)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ProductsGrid />
      </section>

      {categoryCopy.products.sections.map((section) => (
        <section key={section.heading} className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-3xl font-semibold tracking-tight">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}