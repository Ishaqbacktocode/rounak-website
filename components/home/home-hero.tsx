import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="site-hero relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="aurora" />
      <div className="mx-auto max-w-4xl">
        <div className="relative z-10">
          <Link
            href="/#dubai-ai-seal"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/65 px-4 py-2 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="size-2 rounded-full bg-emerald-500" />
            Dubai AI Seal recipient · 20+ years in Dubai
            <ArrowUpRight className="size-3.5" />
          </Link>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Innovative IT solutions to empower your{" "}
            <span className="home-hero-accent bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] bg-clip-text text-transparent">
              business
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
            Explore services <ArrowDown className="size-4" />
          </Link>
        </div>


      </div>
    </section>
  );
}
