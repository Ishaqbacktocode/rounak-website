import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HomeCta() {
  return (
    <section className="px-6 pb-16">
      <Reveal className="home-cta-panel site-cta-panel mx-auto max-w-6xl rounded-[2rem] border p-10 text-center md:p-16">
        <p className="text-sm text-[var(--brand)]">Let Us Elevate Your Business</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Let us help you succeed
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Transform your business into a future-ready digital enterprise with our comprehensive
          cloud solutions at Rounak Computers.
        </p>
        <Button
          render={<Link href="/contact-us" />}
          nativeButton={false}
          size="lg"
          className="mt-8 rounded-full transition-transform duration-300 ease-out active:translate-y-0 active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100 motion-reduce:active:translate-y-0"
        >
          Enquire now
        </Button>
      </Reveal>
    </section>
  );
}
