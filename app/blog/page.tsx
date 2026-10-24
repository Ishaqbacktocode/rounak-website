import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "IT Insights & Guides | Rounak Computers",
  description:
    "Practical guides to Microsoft 365, cloud, cybersecurity and business technology from Rounak Computers in Dubai.",
  alternates: { canonical: "/blog" },
};

const [featuredPost, ...otherPosts] = blogPosts;

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-44">
        <div className="aurora" />
        <Reveal className="mx-auto max-w-6xl">
          <p className="text-sm text-[var(--brand)]">The Rounak blog</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Practical insight for{" "}
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] bg-clip-text text-transparent">
              better IT decisions.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Clear, useful guidance on the technology that keeps your business moving.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.05] md:min-h-[360px] md:grid-cols-5"
          >
            <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-gradient-to-br from-[var(--brand)]/25 via-[var(--brand-2)]/10 to-transparent p-8 md:col-span-2 md:p-10">
              <div className="absolute -right-12 -top-16 size-64 rounded-full border border-white/10" />
              <div className="absolute -right-2 -top-6 size-44 rounded-full border border-white/10" />
              <div className="absolute bottom-8 right-8 flex size-20 items-center justify-center rounded-3xl border border-white/15 bg-background/30 backdrop-blur">
                <BookOpen className="size-9 text-[var(--brand)]" />
              </div>
              <span className="relative w-fit rounded-full border border-white/15 bg-background/30 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                Featured guide
              </span>
              <span className="relative text-sm text-muted-foreground">01 / 03</span>
            </div>

            <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-12">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[var(--brand)]">
                <span>{featuredPost.category}</span>
                <span className="size-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock3 className="size-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight transition-colors group-hover:text-[var(--brand)] md:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                Read the guide
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-[var(--brand)]">More to explore</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">From our team</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Straightforward ideas to help you plan, protect and get more from your technology.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {otherPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.07}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full min-h-72 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.06] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--brand)]">
                    {post.category}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight transition-colors group-hover:text-[var(--brand)]">
                  {post.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-2 pt-8 text-xs text-muted-foreground">
                  <Clock3 className="size-3.5" />
                  {post.readTime}
                  <span className="ml-auto text-sm font-medium text-foreground">Read article</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
