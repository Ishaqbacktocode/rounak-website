import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cloud, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Microsoft Gold Partner &middot; Dubai AI Seal 2025
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
            Innovative IT solutions to{" "}
            <span className="text-primary">empower your business.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground text-pretty">
            For over 20 years, Rounak Computers has helped UAE organizations
            move to the cloud, secure their data and manage IT with confidence
            &mdash; from Microsoft 365 and Azure to cybersecurity, infrastructure
            and managed services.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:opacity-90"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Explore our services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Cloud className="h-4 w-4 text-primary" /> Cloud &amp; Microsoft
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Cybersecurity
            </span>
            <span className="inline-flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" /> Managed IT
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-2xl">
            <Image
              src="/images/hero-datacenter.png"
              alt="Modern cloud and data center infrastructure managed by Rounak Computers"
              width={900}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
