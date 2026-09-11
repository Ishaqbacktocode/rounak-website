import {
  ArrowRightLeft,
  DatabaseBackup,
  ShieldAlert,
  Boxes,
  Globe2,
  Layers,
} from "lucide-react";

const cloudServices = [
  {
    icon: Boxes,
    title: "AWS Cloud Solutions",
    description:
      "Deploy scalable UAE cloud workloads with flexible compute, secure storage and global reach.",
  },
  {
    icon: Layers,
    title: "Microsoft Azure",
    description:
      "Enterprise cloud with integrated analytics, databases and hybrid or multi-cloud support.",
  },
  {
    icon: ShieldAlert,
    title: "Disaster Recovery (DRaaS)",
    description:
      "Replicate data and applications in the cloud for fast failover and business continuity.",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration Services",
    description:
      "Move workloads to the cloud with minimal risk across IaaS, PaaS and SaaS models.",
  },
  {
    icon: DatabaseBackup,
    title: "Data Backup",
    description:
      "Encrypted, automated cloud backup that protects information from failures and attacks.",
  },
  {
    icon: Globe2,
    title: "Multi-Cloud Strategy",
    description:
      "AWS, Azure, Google Cloud, Huawei and Alibaba Cloud tuned for flexibility and performance.",
  },
];

export function CloudSolutions() {
  return (
    <section id="cloud" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
            Cloud Solutions in the UAE
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Transform your business with advanced cloud.
          </h2>
          <p className="mt-5 text-lg leading-8 text-primary-foreground/80 text-pretty">
            As one of Dubai&apos;s leading cloud service providers, we build
            scalable, secure infrastructure focused on business continuity,
            compliance and high availability.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cloudServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2.5 leading-7 text-primary-foreground/80">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
