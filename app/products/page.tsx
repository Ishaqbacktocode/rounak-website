import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductsGrid } from "@/components/products-grid";
import { ProductPageSections } from "@/components/product-page-sections";
import { Reveal } from "@/components/reveal";
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

          <div className="relative hidden h-80 md:col-span-2 md:block" aria-hidden>
            <div className="product-hero-image absolute inset-x-4 top-2 overflow-hidden rounded-3xl border border-foreground/10 bg-card/70 p-2 shadow-2xl shadow-[var(--brand)]/10">
              <Image
                src="/images/category1/prod6.png"
                alt=""
                width={600}
                height={400}
                className="h-64 w-full rounded-2xl object-cover"
              />
            </div>
            <div className="product-hero-float absolute -bottom-2 -left-2 overflow-hidden rounded-2xl border border-foreground/10 bg-background p-1 shadow-xl">
              <Image
                src="/images/category1/prod5.png"
                alt=""
                width={220}
                height={140}
                className="h-24 w-36 rounded-xl object-cover"
              />
            </div>
            <div className="product-hero-float-delay absolute -right-2 top-8 overflow-hidden rounded-2xl border border-foreground/10 bg-background p-1 shadow-xl">
              <Image
                src="/images/category1/prod10.png"
                alt=""
                width={220}
                height={140}
                className="h-24 w-36 rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-16">
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

      <ProductPageSections />
    </>
  );
}