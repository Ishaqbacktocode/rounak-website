import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { BlogCarousel } from "@/components/blog/blog-carousel";
import { Reveal } from "@/components/reveal";
import { blogPosts, type BlogPost } from "@/lib/blog";
import { blogTopics, getBlogTopic, type BlogTopic } from "@/lib/blog-categories";
import { contact } from "@/lib/site";

const topicDescriptions: Record<BlogTopic, string> = {
  "Cloud & AI": "Cloud platforms, AI, and the ideas shaping what comes next.",
  Cybersecurity: "Practical advice to protect your people, systems, and data.",
  "Microsoft & Workplace": "Microsoft tools and modern ways of working, made practical.",
  "IT Operations": "Guidance for keeping your everyday technology running smoothly.",
  "Business & Compliance": "Technology decisions, regulations, and what they mean for business.",
  "Continuity & Recovery": "Prepare for disruption and build a faster path back to business.",
};

function getTopicPosts(posts: BlogPost[], topic: BlogTopic) {
  return posts.filter((post) => getBlogTopic(post) === topic);
}

function getTopicId(topic: BlogTopic) {
  return `topic-${topic.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-")}`;
}

export function BlogIndex() {
  const topicSections = blogTopics
    .map((topic) => ({ topic, posts: getTopicPosts(blogPosts, topic) }))
    .filter(({ posts }) => posts.length > 0);

  return (
    <>
      <section className="site-hero relative isolate overflow-hidden px-6 pb-12 pt-36 md:pb-16 md:pt-48">
        <div className="aurora" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-36 top-8 size-[28rem] rounded-full bg-[var(--brand)]/10 blur-[100px] md:right-[8%] md:size-[38rem]" />
          <div className="absolute right-[18%] top-32 size-48 rounded-full border border-[var(--brand)]/10 md:size-72" />
          <div className="absolute right-[22%] top-40 size-36 rounded-full border border-[var(--brand)]/10 md:size-56" />
        </div>
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/20 bg-[var(--brand)]/5 px-3 py-1.5 text-xs font-medium text-[var(--brand)] backdrop-blur">
              <Sparkles aria-hidden="true" className="size-3.5" />
              The Rounak journal
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Better questions.
              <br />
              <span className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand)] bg-clip-text text-transparent">
                Smarter business.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A curated stream of practical ideas on cloud, security, and the
              technology shaping what comes next.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3.5 py-2 backdrop-blur">
                <BookOpen aria-hidden="true" className="size-4 text-[var(--brand)]" />
                <span><strong className="font-semibold text-foreground">{blogPosts.length}</strong> field notes</span>
              </span>
              <span className="rounded-full border border-foreground/10 bg-background/60 px-3.5 py-2 backdrop-blur">
                {topicSections.length} technology topics
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:pb-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Jump into a topic
            </p>
            <nav aria-label="Blog topics" className="flex max-w-xl flex-wrap gap-2 lg:max-w-[26rem] lg:justify-end">
              {topicSections.map(({ topic, posts }) => (
                <a
                  key={topic}
                  href={`#${getTopicId(topic)}`}
                  className="rounded-full border border-foreground/10 bg-background/60 px-3.5 py-2 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-[var(--brand)]/30 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
                >
                  {topic}
                  <span className="ml-1.5 text-muted-foreground/70">{posts.length}</span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section
        id="latest-articles"
        aria-label="Articles by topic"
        className="mx-auto max-w-7xl scroll-mt-24 space-y-12 px-6 pb-24 pt-8 md:space-y-16 md:pt-12"
      >
        {topicSections.map(({ topic, posts }, index) => (
          <Reveal key={topic} delay={Math.min(index * 0.04, 0.16)}>
            <section id={getTopicId(topic)} aria-labelledby={`topic-heading-${index}`} className="scroll-mt-28">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 sm:mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                    {String(index + 1).padStart(2, "0")} / {String(topicSections.length).padStart(2, "0")}
                  </p>
                  <h2
                    id={`topic-heading-${index}`}
                    className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
                  >
                    {topic}
                  </h2>
                  <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base">
                    {topicDescriptions[topic]}
                  </p>
                </div>
                <span className="pb-0.5 text-sm tabular-nums text-muted-foreground">
                  {posts.length} {posts.length === 1 ? "article" : "articles"}
                </span>
              </div>
              <BlogCarousel posts={posts} topic={topic} />
            </section>
          </Reveal>
        ))}
      </section>

      <section className="relative isolate overflow-hidden px-6 py-10 md:py-16">
        <Reveal className="site-cta-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border p-7 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-32 size-72 rounded-full border border-[var(--brand)]/15 sm:size-96" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-20 size-56 rounded-full border border-[var(--brand-2)]/15 sm:size-72" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                From insight to action
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Have a technology challenge on your mind?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                Bring your questions to our Dubai-based team. We’ll help you
                explore a practical next step for your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-col">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Talk to our team
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-background/50 px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--brand)]/30 hover:text-[var(--brand)]"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-16 md:py-24">
        <div aria-hidden="true" className="faq-ambient" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              The reading room
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              A few quick notes on finding and using the ideas in our journal.
            </p>
          </Reveal>

          <div className="space-y-3">
            {[
              {
                question: "How are articles organized?",
                answer:
                  "Articles are grouped by their primary topic, such as cybersecurity, cloud and AI, or IT operations. Each article appears once in the category most relevant to its subject.",
              },
              {
                question: "Who are these guides written for?",
                answer:
                  "They’re written for business owners, IT teams, and decision-makers looking for clear, practical context on technology and how it can support their organization.",
              },
              {
                question: "Can I get advice about a topic in an article?",
                answer:
                  "Yes. If an article raises questions about your own technology needs, contact our team and tell us what you’re working through. We’ll help you discuss a practical next step.",
              },
              {
                question: "How can I find a specific article?",
                answer:
                  "Use the topic links near the top of the page to jump to a subject, then browse its horizontal article shelf. On phones and tablets, swipe the shelf; on larger screens, use the arrows or keyboard focus and horizontal scrolling.",
              },
            ].map(({ question, answer }, index) => (
              <Reveal key={question} delay={Math.min(index * 0.05, 0.15)}>
                <details className="group rounded-2xl border border-foreground/10 bg-card/60 transition-colors open:border-[var(--brand)]/25 open:bg-card/90">
                  <summary className="flex cursor-pointer list-none items-center gap-4 rounded-2xl px-5 py-5 outline-none transition-colors hover:text-[var(--brand)] focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6">
                    <span className="hidden w-8 shrink-0 text-xs font-semibold tabular-nums text-[var(--brand)]/70 sm:block">
                      0{index + 1}
                    </span>
                    <span className="flex-1 text-left text-sm font-semibold leading-6 sm:text-base">
                      {question}
                    </span>
                    <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 text-muted-foreground transition duration-300 group-open:rotate-45 group-open:border-[var(--brand)]/30 group-open:text-[var(--brand)]">
                      +
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      <p className="border-t border-foreground/10 px-5 pb-5 pt-4 text-sm leading-7 text-muted-foreground sm:ml-12 sm:px-6">
                        {answer}
                      </p>
                    </div>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
