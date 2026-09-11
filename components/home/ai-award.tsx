import Image from "next/image";
import { Award } from "lucide-react";

export function AiAward() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
      <div className="overflow-hidden border border-border bg-card">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 lg:p-14">
            <div className="inline-flex items-center gap-2 border border-border bg-muted/50 px-4 py-2 text-sm font-medium">
              <Award className="h-4 w-4 text-primary" />
              Dubai AI Week &middot; 21 April 2025
            </div>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Recognized for Excellence in AI by the Government of Dubai
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground text-pretty">
              Rounak Computers was awarded the{" "}
              <span className="font-semibold text-foreground">Dubai AI Seal</span>{" "}
              &mdash; one of just nine recipients out of 325 companies certified
              across the UAE. Recognized in the Small Enterprises category, the
              award reflects our focus on building responsible, high-impact AI
              solutions that drive meaningful digital transformation.
            </p>
          </div>
          <div className="relative h-full min-h-64 lg:min-h-[24rem]">
            <Image
              src="/images/ai-award.png"
              alt="Dubai AI Seal awarded to Rounak Computers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
