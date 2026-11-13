import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { homeFaqs } from "@/lib/faq";

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden px-6 py-20 md:py-28">
      <div aria-hidden="true" className="faq-ambient" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Answers, clearly
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            A quick guide to our IT products and services, cloud solutions, and support.
          </p>
          <Link
            href="/contact-us"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform duration-300 ease-out active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100"
          >
            Ask us a question
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-[3px] motion-reduce:transition-none motion-reduce:translate-x-0"
            />
          </Link>
          <p className="mt-8 hidden text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/70 lg:block">
            IT expertise · Dubai · UAE
          </p>
        </Reveal>

        <div className="space-y-3">
          {homeFaqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `home-faq-answer-${index + 1}`;

            return (
              <Reveal key={question} delay={index * 0.08}>
                <div
                  className={`faq-item group rounded-2xl border border-foreground/10 bg-card/65 transition-colors ${
                    isOpen ? "border-[var(--brand)]/25 bg-card/90" : ""
                  }`}
                  data-open={isOpen}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center gap-4 rounded-2xl px-5 py-5 text-left outline-none transition-colors hover:text-[var(--brand)] focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6"
                  >
                    <span className="hidden w-8 shrink-0 text-xs font-semibold tabular-nums text-[var(--brand)]/70 sm:block">
                      0{index + 1}
                    </span>
                    <span className="flex-1 text-sm font-semibold leading-6 sm:text-base">
                      {question}
                    </span>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background/70 text-muted-foreground transition duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-45 border-[var(--brand)]/30 text-[var(--brand)]" : ""
                      }`}
                    >
                      <Plus aria-hidden="true" className="size-4" />
                    </span>
                  </button>
                  <motion.div
                    id={answerId}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      ease: "easeOut",
                    }}
                    className="faq-answer overflow-hidden"
                  >
                    <div className="faq-answer-inner">
                      <p className="border-t border-foreground/10 px-5 pb-5 pt-4 text-sm leading-7 text-muted-foreground sm:ml-12 sm:px-6 sm:pt-5">
                        {answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
