import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle || post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.excerpt || undefined,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-40">
        <div className="aurora" />
        <Reveal className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>
          {post.category && (
            <p className="mt-10 text-xs uppercase tracking-wider text-[var(--brand)]">
              {post.category}
            </p>
          )}
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {post.title}
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="max-w-3xl">
          {post.intro.map((paragraph) => (
            <p key={paragraph} className="mb-6 leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          {post.sections.map((section) => (
            <Reveal key={section.heading} className="mb-10">
              <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.points && (
                <ul className="mt-5 space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </article>

        <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:sticky lg:top-24">
          <p className="text-sm text-[var(--brand)]">Need a hand?</p>
          <h2 className="mt-3 text-xl font-semibold">Put the right plan into practice.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Talk with our team about your business goals and technology requirements.
          </p>
          <Button
            render={<Link href="/contact-us" />}
            nativeButton={false}
            className="mt-6 w-full rounded-full"
          >
            Talk to our team <ArrowRight />
          </Button>
        </aside>
      </section>
    </>
  );
}
