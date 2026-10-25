import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="aurora" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative z-10">
          <Link
            href="/#dubai-ai-seal"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/65 px-4 py-2 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="size-2 rounded-full bg-emerald-500" />
            Dubai AI Seal recipient · 20+ years in Dubai
            <ArrowUpRight className="size-3.5" />
          </Link>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Innovative IT Solutions to Empower Your{" "}
            <span className="home-hero-accent bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] bg-clip-text text-transparent">
              Business
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore our range of products, including Microsoft Copilot, CCTV Solutions, and more,
            to enhance your business operations.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              render={<Link href="/products" />}
              nativeButton={false}
              size="lg"
              className="h-12 rounded-full px-6 text-sm"
            >
              View Products <ArrowRight />
            </Button>
            <Button
              render={<Link href="/cloud-services" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-6 text-sm"
            >
              View Cloud Services
            </Button>
          </div>

          <Link
            href="#home-solutions"
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore our services <ArrowDown className="size-4" />
          </Link>
        </div>

        <div className="home-hero-artwork relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            className="home-hero-glow absolute -inset-8 rounded-full bg-[radial-gradient(ellipse_at_center,var(--brand)_0%,transparent_68%)] opacity-20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="home-hero-orbit absolute -inset-3 rounded-[2.8rem] border border-dashed border-[var(--brand)]/25 sm:-inset-5"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-background/60 p-2.5 shadow-2xl shadow-[var(--brand)]/15 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-3">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-slate-200 sm:rounded-[2rem]">
              <Image
                src="/images/dubai-ai-seal.png"
                alt="Rounak Computers team at the Dubai AI Seal recognition event"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="home-hero-photo object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    Government of Dubai
                  </p>
                  <p className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                    Dubai AI Seal recipient
                  </p>
                </div>
                <span className="hidden rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs backdrop-blur sm:inline-flex">
                  Dubai AI Week · 2025
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 right-4 rounded-2xl border border-foreground/10 bg-background/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-5 sm:px-5">
            <p className="text-xs font-medium text-muted-foreground">
              Recognized among
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">
              9<span className="text-muted-foreground"> of 325</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
