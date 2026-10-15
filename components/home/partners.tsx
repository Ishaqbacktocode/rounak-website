const partners = [
  "Microsoft",
  "AWS",
  "Azure",
  "Google Cloud",
  "HP",
  "Dell",
  "Lenovo",
  "Sophos",
  "Barracuda",
  "Mimecast",
];

export function Partners() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Trusted technology partners &amp; authorized distributors
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-heading text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
