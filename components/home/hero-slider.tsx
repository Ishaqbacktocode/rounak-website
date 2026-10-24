"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/home-content";

const DURATION = 6.5;

export function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIdx((v) => (v + 1) % heroSlides.length), DURATION * 1000);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden px-6">
      <div className="aurora" />
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center pt-24">
        <Link
          href="/#dubai-ai-seal"
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Dubai AI Seal recipient · 20+ years in Dubai
        </Link>

        <div className="relative min-h-[26rem] md:min-h-[24rem]">
          {heroSlides.map((s, i) => (
            <motion.div
              key={s.href}
              aria-hidden={i !== idx}
              inert={i !== idx}
              animate={{
                opacity: i === idx ? 1 : 0,
                y: i === idx ? 0 : 24,
                filter: i === idx ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
                {s.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{s.text}</p>
              <Button
                render={<Link href={s.href} />}
                nativeButton={false}
                size="lg"
                className="mt-8 rounded-full"
              >
                {s.cta} <ArrowRight />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {heroSlides.map((s, i) => (
            <button
              key={s.href}
              onClick={() => setIdx(i)}
              aria-label={`Show slide ${i + 1}: ${s.cta}`}
              className="relative h-1.5 w-16 overflow-hidden rounded-full bg-white/15"
            >
              {i === idx && (
                <motion.span
                  key={idx}
                  className="absolute inset-y-0 left-0 bg-[var(--brand)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: DURATION, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}