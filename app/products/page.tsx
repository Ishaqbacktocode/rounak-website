import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Headset, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductsGrid } from "@/components/products-grid";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products | Microsoft, CCTV, Telephony & Hardware in Dubai | Rounak Computers",
  description:
    "Microsoft 365, Copilot, Dynamics 365, Azure, CCTV, telephony and computer sales and rental for Dubai businesses.",
  alternates: { canonical: "/products" },
};

const reasons = [
  { icon: BadgeCheck, title: "Authorised sources only", text: "Hardware and licences come from authorised distributors, so everything is genuine and covered." },
  { icon: Headset, title: "Support after the sale", text: "The engineers who set it up are the ones you call when you need help." },
  { icon: Truck, title: "Any deal size", text: "From one laptop to a full office rollout, you get the same attention." },
];

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
              Everything your team{" "}
              <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] bg-clip-text text-transparent">
                runs on.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Microsoft software, phones, cameras and hardware from one partner in Dubai,
              chosen, installed and supported by certified engineers.
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

      {/* Why Rounak */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <r.icon className="size-7 text-[var(--brand)]" />
                <h3 className="mt-6 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--brand)]/20 to-transparent p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Not sure what you need?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Tell us about your business. We'll recommend only what makes sense.
          </p>
          <Button render={<Link href="/contact-us" />} nativeButton={false} size="lg" className="mt-8 rounded-full">
            Talk to an expert
          </Button>
        </Reveal>
      </section>
    </>
  );
}