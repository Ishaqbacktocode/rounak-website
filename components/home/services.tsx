import {
  Bot,
  LayoutGrid,
  Cloud,
  Mail,
  Phone,
  Video,
  MonitorSmartphone,
  Cable,
  Wrench,
  Server,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const products = [
  {
    icon: Bot,
    title: "Microsoft Copilot",
    description:
      "Bring AI-powered productivity into everyday work across the Microsoft 365 suite.",
  },
  {
    icon: LayoutGrid,
    title: "Microsoft Dynamics 365",
    description:
      "Unify sales, service and operations with connected business applications.",
  },
  {
    icon: Cloud,
    title: "Microsoft Azure",
    description:
      "Scalable enterprise cloud for analytics, databases, networking and hybrid workloads.",
  },
  {
    icon: Mail,
    title: "Microsoft 365",
    description:
      "Email, collaboration and licensing with seamless, zero-downtime migrations.",
  },
  {
    icon: Phone,
    title: "Telephony Solutions",
    description:
      "Modern cloud calling and unified communications for connected teams.",
  },
  {
    icon: Video,
    title: "CCTV Solutions",
    description:
      "Professional surveillance design and installation for premises security.",
  },
];

const services = [
  { icon: Cable, title: "Structured Cabling" },
  { icon: Wrench, title: "IT AMC Services" },
  { icon: Server, title: "Managed IT Services" },
  { icon: MonitorSmartphone, title: "Computer Sales & Service" },
  { icon: LayoutGrid, title: "SPLA Licensing" },
  { icon: Globe, title: "Web & App Development" },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Products &amp; Services
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Everything your business needs, from one IT partner.
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground text-pretty">
          Explore our range of Microsoft, communications and security products
          &mdash; backed by hands-on services that keep operations running
          smoothly.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <div
              key={product.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold">
                {product.title}
              </h3>
              <p className="mt-2.5 leading-7 text-muted-foreground">
                {product.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 rounded-3xl border border-border bg-muted/40 p-8 lg:p-10">
        <h3 className="font-heading text-xl font-semibold">
          Comprehensive IT services for seamless operations
        </h3>
        <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
          From structured cabling to fully managed IT, our expert team provides
          the day-to-day support that keeps your business moving.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{service.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
