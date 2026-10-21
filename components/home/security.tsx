import { ShieldCheck, Lock, MailWarning, Smartphone, Fingerprint } from "lucide-react";

const solutions = [
  {
    icon: ShieldCheck,
    title: "O365 Advanced Threat Protection",
    description:
      "Guard mailboxes and collaboration tools against phishing, malware and zero-day attacks.",
  },
  {
    icon: Lock,
    title: "Sophos Security",
    description:
      "Next-generation endpoint and network protection managed end to end.",
  },
  {
    icon: MailWarning,
    title: "Barracuda & Mimecast Email Security",
    description:
      "Layered email filtering, archiving and continuity to stop threats before they land.",
  },
  {
    icon: Smartphone,
    title: "IBM MaaS360",
    description:
      "Unified endpoint management that secures devices, apps and data everywhere.",
  },
];

export function Security() {
  return (
    <section id="security" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Security
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Protect your business with leading security solutions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground text-pretty">
            Security is a core focus across everything we deliver. From email to
            endpoints, we implement top-tier solutions that keep your people and
            data protected.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-muted/40 px-5 py-4">
            <Fingerprint className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">
              Comprehensive protection built into every solution we deploy.
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold leading-snug">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
