"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const headline = "Cloud, AI & IT that keeps Dubai businesses running.".split(" ");

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6">
      <div className="aurora" />
      <div className="mx-auto w-full max-w-5xl pt-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Dubai AI Seal recipient · Microsoft Gold Partner
        </motion.span>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          Managed IT, Microsoft cloud, security and structured cabling, trusted by Dubai
          companies for over 20 years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
        <Button
        render={<Link href="/contact-us" />}
        nativeButton={false}
        size="lg"
        className="rounded-full"
        >
        Talk to an expert <ArrowRight />
        </Button>
        <Button
        render={<Link href="/cloud-services" />}
        nativeButton={false}
        size="lg"
        variant="outline"
        className="rounded-full"
        >
        Explore cloud
        </Button>
        </motion.div>
      </div>
    </section>
  );
}