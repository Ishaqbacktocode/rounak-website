import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <article className="relative overflow-hidden px-6 pb-32 pt-40 md:pt-48">
      <div aria-hidden="true" className="aurora" />
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Home
        </Link>

        <header className="mt-10 border-b border-foreground/10 pb-10">
          <p className="text-sm font-medium text-[var(--brand)]">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">Last updated {updated}</p>
          <p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            {intro}
          </p>
        </header>

        <div className="divide-y divide-foreground/10">
          {sections.map((section, index) => (
            <section key={section.heading} className="py-8 md:py-10">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                <span className="mr-3 text-sm font-medium tabular-nums text-[var(--brand)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 leading-7 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-muted-foreground marker:text-[var(--brand)]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.heading === "Contact Information" ||
              section.heading === "Contact Us" ? (
                <address className="mt-5 space-y-2 not-italic leading-7 text-muted-foreground">
                  <p className="font-medium text-foreground">Rounak Computers LLC</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@rounakcomputers.com"
                      className="underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-foreground"
                    >
                      info@rounakcomputers.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+97143865656"
                      className="underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-foreground"
                    >
                      +971 4 386 5656
                    </a>
                  </p>
                </address>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
