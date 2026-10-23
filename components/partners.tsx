import { partners } from "@/lib/data";

export function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="marquee overflow-hidden border-y border-white/10 py-8 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
      <div className="marquee-track flex w-max gap-16 text-xl font-medium text-muted-foreground">
        {row.map((p, i) => (
          <span key={i}>{p}</span>
        ))}
      </div>
    </section>
  );
}