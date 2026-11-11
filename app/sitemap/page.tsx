import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, FileText, Layers3, Newspaper } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/lib/blog";
import { categoryList, companyLinks, groupServices, legalLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap | Rounak Computers",
  description:
    "Browse the pages, services, and articles on the Rounak Computers website.",
  alternates: { canonical: "/sitemap" },
};

const mainPages = [
  { label: "Home", href: "/" },
  ...companyLinks,
  ...categoryList.map((category) => ({
    label: category.title,
    href: `/${category.slug}`,
  })),
];

function PageLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-[var(--brand)]/5 hover:text-foreground"
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0 text-muted-foreground/60 transition-colors group-hover:text-[var(--brand)]"
      />
    </Link>
  );
}

export default function SitemapPage() {
  return (
    <>
      <section className="site-hero relative overflow-hidden px-6 pb-14 pt-36 md:pb-20 md:pt-48">
        <div className="aurora" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <span aria-hidden="true" className="px-2 text-foreground/30">/</span>
              <span aria-current="page" className="text-foreground">Sitemap</span>
            </nav>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Find your way around
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Sitemap
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore our pages, business technology services, and latest articles.
              Everything is organized below to help you find what you need.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 pt-8 md:grid-cols-2 md:pt-12">
        <Reveal>
          <section className="site-card h-full rounded-3xl border p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Layers3 aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Website pages</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Company information and service overviews
                </p>
              </div>
            </div>
            <nav aria-label="Website pages" className="mt-6 grid gap-1 sm:grid-cols-2">
              {mainPages.map((page) => (
                <PageLink key={page.href} href={page.href}>
                  {page.label}
                </PageLink>
              ))}
            </nav>
          </section>
        </Reveal>

        <Reveal delay={0.06}>
          <section className="site-card h-full rounded-3xl border p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <FileText aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Legal</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Policies and website information
                </p>
              </div>
            </div>
            <nav aria-label="Legal pages" className="mt-6">
              {legalLinks.map((page) => (
                <PageLink key={page.href} href={page.href}>
                  {page.label}
                </PageLink>
              ))}
              <PageLink href="/sitemap.xml">XML sitemap</PageLink>
            </nav>
          </section>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.12}>
          <section className="site-card rounded-3xl border p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Layers3 aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Services</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Browse our solutions by category
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {categoryList.map((category) => (
                <section key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="text-base font-semibold transition-colors hover:text-[var(--brand)]"
                  >
                    {category.title}
                  </Link>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {category.tagline}
                  </p>
                  <div className="mt-4">
                    {groupServices(category.slug).flatMap((group) =>
                      group.items.map((service) => (
                        <PageLink
                          key={service.slug}
                          href={`/${service.category}/${service.slug}`}
                        >
                          {service.title}
                        </PageLink>
                      ))
                    )}
                  </div>
                </section>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.18}>
          <section className="site-card rounded-3xl border p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Newspaper aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Articles</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Insights and practical technology guides
                </p>
              </div>
            </div>
            <nav aria-label="Articles" className="mt-6 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <PageLink key={post.slug} href={`/blog/${post.slug}`}>
                  {post.title}
                </PageLink>
              ))}
            </nav>
          </section>
        </Reveal>
      </section>
    </>
  );
}
