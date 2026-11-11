"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { getBlogImage } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog";

type BlogCarouselProps = {
  posts: BlogPost[];
  topic: string;
};

export function BlogCarousel({ posts, topic }: BlogCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 2);
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(track);
    track.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", updateScrollState);
    };
  }, [updateScrollState, posts.length]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const distance = Math.max(track.clientWidth * 0.8, 280);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    track.scrollBy({ left: direction * distance, behavior });
  };

  return (
    <div className="group/carousel relative">
      <div
        ref={trackRef}
        role="region"
        aria-label={`${topic} articles`}
        tabIndex={0}
        className="blog-carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 pr-6 outline-none sm:gap-5"
      >
        {posts.map((post) => (
          <article
            key={post.slug}
            className="w-[min(82vw,19rem)] shrink-0 snap-start sm:w-[19rem] lg:w-[21rem]"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="site-card group/card flex h-full flex-col overflow-hidden rounded-2xl border bg-card/75 transition duration-300 hover:-translate-y-1 hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
            >
              <div className="relative aspect-[1.72] overflow-hidden bg-muted">
                <Image
                  src={getBlogImage(post)}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 304px, 336px"
                  className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                  {topic}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock3 aria-hidden="true" className="size-3.5" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-2.5 line-clamp-2 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover/card:text-[var(--brand)]">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-5 text-muted-foreground">
                  {post.excerpt || post.intro[0]}
                </p>
                <span className="mt-4 text-xs font-semibold text-[var(--brand)]">
                  Read article
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          type="button"
          aria-label={`Scroll ${topic} articles left`}
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="pointer-events-auto -ml-2 flex size-9 items-center justify-center rounded-full border border-foreground/10 bg-background/90 text-foreground shadow-lg backdrop-blur transition hover:scale-105 hover:border-[var(--brand)]/30 hover:text-[var(--brand)] disabled:pointer-events-none disabled:opacity-0 sm:-ml-5 sm:size-11"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          aria-label={`Scroll ${topic} articles right`}
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="pointer-events-auto -mr-2 flex size-9 items-center justify-center rounded-full border border-foreground/10 bg-background/90 text-foreground shadow-lg backdrop-blur transition hover:scale-105 hover:border-[var(--brand)]/30 hover:text-[var(--brand)] disabled:pointer-events-none disabled:opacity-0 sm:-mr-5 sm:size-11"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
