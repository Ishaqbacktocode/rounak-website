"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
  Star,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { reviews } from "@/lib/home-content";

const platforms = [
  {
    name: "Google Reviews",
    source: "Google",
    logo: "/images/reviews/google.png",
    href: "https://www.google.com/search?q=rounak+computers+llc",
  },
  {
    name: "GoodFirms",
    source: "GoodFirms",
    logo: "/images/reviews/goodfirms.png",
    href: "https://www.goodfirms.co/company/rounak-computers-llc#reviews",
  },
] as const;

function Rating({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={`size-4 ${
            index < value
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
}

function ReviewSlider({
  items,
  platform,
}: {
  items: typeof reviews;
  platform: (typeof platforms)[number];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeReview = items[activeIndex];

  useEffect(() => {
    if (!isPlaying || isHovered || isFocused || reduceMotion || items.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isFocused, isHovered, isPlaying, items.length, reduceMotion]);

  const showReview = (offset: number) => {
    setActiveIndex((index) => (index + offset + items.length) % items.length);
  };

  if (!activeReview) return null;

  return (
    <div
      className="mx-auto max-w-4xl"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${platform.name} testimonials`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card/75 p-6 shadow-xl shadow-[var(--brand)]/5 backdrop-blur-sm sm:p-10 md:p-12">
        <div
          aria-hidden="true"
          className="testimonial-card-glow pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-[var(--brand)] opacity-[0.09] blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="testimonial-card-glow testimonial-card-glow-delay pointer-events-none absolute -bottom-40 -left-24 size-80 rounded-full bg-[var(--brand-2)] opacity-[0.08] blur-[100px]"
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={`${platform.source}-${activeIndex}`}
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
            className="relative flex min-h-64 flex-col"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex items-center justify-between gap-4">
              <Rating
                value={activeReview.rating}
                label={`${activeReview.rating} out of 5 stars`}
              />
              <span className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                Client review
              </span>
            </div>
            <blockquote className="mt-7 flex-1 text-lg leading-8 tracking-tight text-foreground/90 sm:text-xl sm:leading-9">
              “{activeReview.text}”
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-foreground/10 pt-5">
              <div>
                <span className="block font-semibold">{activeReview.author}</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {platform.name} reviewer
                </span>
              </div>
              <span className="text-sm tabular-nums text-muted-foreground">
                {String(activeIndex + 1).padStart(2, "0")}{" "}
                <span className="px-1 text-foreground/30">/</span>{" "}
                {String(items.length).padStart(2, "0")}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" aria-label="Choose a review">
          {items.map((item, index) => (
            <button
              key={`${item.author}-${index}`}
              type="button"
              aria-label={`Show review ${index + 1} by ${item.author}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-7 bg-[var(--brand)]"
                  : "w-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isPlaying ? "Pause automatic reviews" : "Play automatic reviews"}
            onClick={() => setIsPlaying((playing) => !playing)}
            className="flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-background/70 text-muted-foreground transition-colors hover:text-foreground"
          >
            {isPlaying ? (
              <Pause aria-hidden="true" className="size-4" />
            ) : (
              <Play aria-hidden="true" className="size-4" />
            )}
          </button>
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => showReview(-1)}
            className="flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-background/70 transition-colors hover:border-[var(--brand)]/30 hover:text-[var(--brand)]"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => showReview(1)}
            className="flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-background/70 transition-colors hover:border-[var(--brand)]/30 hover:text-[var(--brand)]"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="testimonial-background-glow pointer-events-none absolute -left-48 top-1/4 size-[32rem] rounded-full bg-[var(--brand)] opacity-[0.08] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="testimonial-background-glow testimonial-background-glow-delay pointer-events-none absolute -right-48 bottom-0 size-[32rem] rounded-full bg-[var(--brand-2)] opacity-[0.07] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Real people, real results
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Trusted by businesses across the UAE
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Read what clients say about working with the Rounak Computers team.
          </p>
        </Reveal>

        <div className="space-y-14 md:space-y-16">
          {platforms.map((platform, platformIndex) => {
            const platformReviews = reviews.filter(
              (review) => review.source === platform.source
            );

            return (
              <section key={platform.source} aria-labelledby={`${platform.source}-reviews`}>
                <Reveal
                  delay={platformIndex * 0.08}
                  className="mb-6 flex flex-col justify-between gap-5 border-b border-foreground/10 pb-5 sm:flex-row sm:items-center"
                >
                  <div className="flex flex-wrap items-center gap-5">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      width={140}
                      height={48}
                      className="h-9 w-auto max-w-36 object-contain"
                    />
                    <div className="hidden h-9 w-px bg-foreground/10 sm:block" />
                    <div>
                      <h3
                        id={`${platform.source}-reviews`}
                        className="text-lg font-semibold tracking-tight"
                      >
                        {platform.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {platformReviews.length} client reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 sm:justify-end">
                    <div className="flex items-center gap-2">
                      <Rating value={5} label="5-star reviews" />
                      <span className="text-sm font-medium">Client ratings</span>
                    </div>
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      View reviews
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={platformIndex * 0.08}>
                  <ReviewSlider items={platformReviews} platform={platform} />
                </Reveal>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
