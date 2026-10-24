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
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] bg-clip-text text-transparent">
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

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-[radial-gradient(ellipse_at_center,var(--brand)_0%,transparent_68%)] opacity-15 blur-3xl"
          />
          <div className="relative rounded-[2rem] border border-foreground/10 bg-background/60 p-2.5 shadow-2xl shadow-[var(--brand)]/10 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-3">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-[#f4f2ff] sm:rounded-[2rem]">
              <Image
                src="/images/category1/prod6.png"
                alt="Microsoft Copilot for business productivity"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-2 top-5 max-w-[12rem] rounded-2xl border border-foreground/10 bg-background/90 p-4 shadow-xl backdrop-blur-xl sm:-left-8 sm:top-10 sm:max-w-[14rem] sm:p-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Government of Dubai
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-snug">
              Dubai AI Seal recipient
            </p>
          </div>

          <div className="absolute -bottom-5 right-2 rounded-2xl border border-foreground/10 bg-background/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:-right-5 sm:px-6">
            <p className="text-3xl font-semibold tracking-tight">
              9<span className="text-muted-foreground"> / 325</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">certified UAE companies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
