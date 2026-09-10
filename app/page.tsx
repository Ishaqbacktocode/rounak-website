<<<<<<< Updated upstream
// app/page.js
export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Welcome to My Homepage</h1>
      <p style={styles.subtitle}>
        This is a simple Next.js homepage example.
      </p>
    </main>
  );
}

// Inline styles for simplicity
const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
};
=======
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Headphones,
  ShieldCheck,
  Server,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    icon: Cloud,
    title: "Microsoft & Cloud",
    description:
      "Modernize your workplace with Microsoft 365, Copilot, Azure, Dynamics 365 and cloud solutions built around your business.",
    href: "/solutions/microsoft",
  },
  {
    icon: Headphones,
    title: "Managed IT",
    description:
      "Keep your technology running reliably with proactive IT support, AMC and managed infrastructure services.",
    href: "/solutions/managed-it",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protect users, devices, email and business data with practical security solutions designed for today's threats.",
    href: "/solutions/cybersecurity",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Build a dependable technology foundation with hardware, networking, structured cabling, telephony and CCTV.",
    href: "/solutions/infrastructure",
  },
];

const benefits = [
  "20+ years of technology experience",
  "Microsoft-focused solutions",
  "UAE-based technical support",
  "Business-first recommendations",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              R
            </div>

            <div className="leading-none">
              <div className="text-lg font-bold tracking-tight">
                Rounak
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Computers
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/solutions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Solutions
            </Link>

            <Link
              href="/industries"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Industries
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Why Rounak
            </Link>

            <Link
              href="/insights"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Insights
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 sm:inline-flex"
          >
            Talk to an IT Expert
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-32 top-40 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Technology partner for modern businesses
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Technology that keeps your{" "}
              <span className="text-primary">business moving.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              From Microsoft and cloud to cybersecurity and managed IT,
              Rounak helps businesses build, secure and manage technology
              that works.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:opacity-90"
              >
                Talk to an IT Expert
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Explore Solutions
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
              <span>Microsoft</span>
              <span>Cloud</span>
              <span>Cybersecurity</span>
              <span>Managed IT</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 shadow-2xl">
              <div className="rounded-[1.5rem] border border-border/70 bg-background p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Your technology
                    </p>
                    <p className="mt-1 text-xl font-semibold">
                      Connected. Secure. Managed.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    ["Microsoft & Cloud", "Optimized"],
                    ["Cybersecurity", "Protected"],
                    ["IT Infrastructure", "Managed"],
                    ["Technical Support", "Available"],
                  ].map(([label, status]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-4"
                    >
                      <span className="text-sm font-medium">{label}</span>
                      <span className="text-xs font-medium text-primary">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground">
                  <p className="text-sm font-medium opacity-80">
                    Rounak Computers
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    One technology partner.
                  </p>
                  <p className="mt-1 text-sm opacity-80">
                    Multiple layers of expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          <div className="px-6 py-7 text-center sm:px-8">
            <p className="text-2xl font-bold tracking-tight">20+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Years Experience
            </p>
          </div>

          <div className="px-6 py-7 text-center sm:px-8">
            <p className="text-2xl font-bold tracking-tight">Microsoft</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Cloud Expertise
            </p>
          </div>

          <div className="border-t border-border px-6 py-7 text-center sm:border-t-0 sm:px-8">
            <p className="text-2xl font-bold tracking-tight">UAE</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Local Support
            </p>
          </div>

          <div className="border-t border-border px-6 py-7 text-center sm:border-t-0 sm:px-8">
            <p className="text-2xl font-bold tracking-tight">360°</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              IT Capability
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Technology solutions built around your business.
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Whether you are moving to the cloud, strengthening security or
            simply need reliable IT support, our services work together as
            one technology strategy.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <Link
                key={solution.title}
                href={solution.href}
                className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {solution.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {solution.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-primary">
                  Explore solution
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Rounak */}
      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Why Rounak
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology should make business simpler, not harder.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              For more than two decades, Rounak Computers has helped
              businesses navigate changing technology. Today, that means
              combining Microsoft, cloud, infrastructure, cybersecurity and
              managed IT into practical solutions that support the way your
              business actually operates.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Discover Rounak
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  0{index + 1}
                </div>

                <p className="font-semibold leading-6">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
>>>>>>> Stashed changes
