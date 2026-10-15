const stats = [
  { value: "20+", label: "Years in business" },
  { value: "Gold", label: "Microsoft partner" },
  { value: "2014", label: "Cloud services since" },
  { value: "24/7", label: "Technical support" },
];

export function StatsBar() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-6 py-8 text-center sm:px-8 ${
              i >= 2 ? "border-t border-border sm:border-t-0" : ""
            }`}
          >
            <p className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
