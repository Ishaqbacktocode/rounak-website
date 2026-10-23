import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-44">
      <div className="aurora" />
      <Reveal className="mx-auto max-w-5xl">
        {eyebrow && <p className="text-sm text-[var(--brand)]">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>}
        {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
      </Reveal>
    </section>
  );
}