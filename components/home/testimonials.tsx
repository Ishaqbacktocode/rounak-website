import { reviews } from "@/lib/home-content";

function Row({ items, reverse }: { items: typeof reviews; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] ${
        reverse ? "marquee-reverse" : ""
      }`}
    >
      <div className="marquee-track flex w-max gap-4 py-2">
        {doubled.map((r, i) => (
          <figure
            key={i}
            className="flex w-[22rem] shrink-0 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <blockquote className="line-clamp-6 text-sm leading-relaxed text-muted-foreground">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-medium">{r.author}</span>
              <span className="text-muted-foreground"> · {r.source}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const mid = Math.ceil(reviews.length / 2);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm text-[var(--brand)]">Real People, Real Results</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          What Our Clients Say About Rounak Computers
        </h2>
      </div>
      <div className="mt-12 space-y-4">
        <Row items={reviews.slice(0, mid)} />
        <Row items={reviews.slice(mid)} reverse />
      </div>
    </section>
  );
}