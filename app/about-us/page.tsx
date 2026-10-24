import type { Metadata } from "next";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/about-us");

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden px-6 pb-32 pt-44">
      <div className="aurora" />
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-[var(--brand)]">Home / About Us</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-7xl">About Us</h1>
        <section className="mt-16 max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Our Approach to Cloud Solutions for Business
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            At Rounak Computers, we combine the experience of working with UAE cloud services and
            managed IT services, ensuring growth and stability for enterprises. Proven methods
            and certified experts make implementation simple and effective.
          </p>
        </section>
      </div>
    </main>
  );
}
