import Link from "next/link";
import { ArrowRight, Search, Rocket, LifeBuoy } from "lucide-react";

const approach = [
  {
    icon: Search,
    title: "We Understand",
    description:
      "We study your business objectives and select the technologies that fit best.",
  },
  {
    icon: Rocket,
    title: "We Deliver",
    description:
      "Deployments include monitoring, orchestration and optimization to cut cost and lift efficiency.",
  },
  {
    icon: LifeBuoy,
    title: "We Support",
    description:
      "Round-the-clock support ensures stability, compliance and smooth operation.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Who We Are
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              A trusted IT partner in Dubai for over 20 years.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-muted-foreground text-pretty">
              <p>
                Rounak Computers LLC is a trusted provider of IT sales and
                services in Dubai and a Microsoft Gold Partner in Cloud
                Productivity. We serve healthcare, education, government,
                manufacturing and more &mdash; addressing every customer&apos;s
                needs, no matter the size of the deal.
              </p>
              <p>
                We procure only from authorized distributors, maintaining strong
                partnerships with Microsoft, HP, Dell, Lenovo and Sophos. Since
                2014 we have expanded into cloud services including Microsoft
                365, Azure and seamless, zero-downtime migrations.
              </p>
            </div>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Work with our certified team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {approach.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-border bg-background p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
