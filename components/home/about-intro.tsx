import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { IMG, aboutText } from "@/lib/home-content";

export function AboutIntro() {
  return (
    <section className="mx-auto max-w-6xl space-y-28 px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Who We Are</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{aboutText.who}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Image
            src={`${IMG}/2024/10/05/clod.webp`}
            alt="Rounak Computers cloud and IT services in Dubai"
            width={1200}
            height={800}
            className="h-auto w-full rounded-3xl border border-white/10"
          />
        </Reveal>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <Image
            src={`${IMG}/2024/10/05/microsoft.png`}
            alt="Microsoft cloud partner"
            width={1200}
            height={800}
            className="h-auto w-full rounded-3xl border border-white/10"
          />
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">What We Do</h3>
          <p className="mt-6 leading-relaxed text-muted-foreground">{aboutText.what}</p>
          <a
            href={aboutText.sapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition-colors hover:bg-white/5"
          >
            Find us in SAP <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}