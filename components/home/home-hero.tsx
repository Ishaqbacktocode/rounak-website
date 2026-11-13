import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

export function HomeHero() {
  return (
    <section className="site-hero relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="aurora" />
      <div className="mx-auto max-w-4xl">
        <div className="relative z-10">
          <Reveal delay={0} className="mb-8 w-fit">
            <Link
              href="/#dubai-ai-seal"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/65 px-4 py-2 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
            >
              <span className="size-2 rounded-full bg-emerald-500" />
              Dubai AI Seal recipient · <CountUp value={20} suffix="+" label="20+" /> years in Dubai
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Innovative IT solutions to empower your{" "}
              <span className="home-hero-accent bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] bg-clip-text text-transparent">
                business
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="mt-7">
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore our range of products, including Microsoft Copilot, CCTV Solutions, and more,
              to enhance your business operations.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-9">
            <div className="flex flex-wrap gap-3">
              <Button
                render={<Link href="/products" />}
                nativeButton={false}
                size="lg"
                className="group h-12 rounded-full px-6 text-sm transition-transform duration-300 ease-out active:translate-y-0 active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100 motion-reduce:active:translate-y-0"
              >
                View Products
                <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-[3px] motion-reduce:transition-none motion-reduce:translate-x-0" />
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
          </Reveal>

          <Link
            href="#home-solutions"
            className="group mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore services
            <ArrowDown className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:translate-x-0" />
          </Link>
        </div>


      </div>
    </section>
  );
}
