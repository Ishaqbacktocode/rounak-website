import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HomeCta() {
  return (
    <section className="px-6 pb-16">
      <Reveal className="home-cta-panel mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center md:p-16">
        <p className="text-sm text-[var(--brand)]">Let Us Elevate Your Business</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Let Us Help You Succeed
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Transform your business into a future-ready digital enterprise with our comprehensive
          cloud solutions at Rounak Computers.
        </p>
        <Button
          render={<Link href="/contact-us" />}
          nativeButton={false}
          size="lg"
          className="mt-8 rounded-full"
        >
          Contact Us Now
        </Button>
      </Reveal>
    </section>
  );
}