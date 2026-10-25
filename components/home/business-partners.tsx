import Image from "next/image";
import { Reveal } from "@/components/reveal";

const partners = [
  { name: "Microsoft", logo: "/images/about-partners/microsoft.png" },
  { name: "Huawei", logo: "/images/about-partners/huawei.png" },
  { name: "HP", logo: "/images/about-partners/hp.png" },
  { name: "Lenovo", logo: "/images/about-partners/lenovo.png" },
  { name: "Dell", logo: "/images/about-partners/dell.png" },
  { name: "SonicWall", logo: "/images/about-partners/sonic.png" },
  { name: "IBM", logo: "/images/about-partners/ibm.png" },
  { name: "Stanley", logo: "/images/about-partners/stanley.png" },
  { name: "Sophos", logo: "/images/about-partners/sophos.png" },
];

export function BusinessPartners() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 -z-10 size-[34rem] rounded-full bg-[var(--brand)] opacity-[0.06] blur-[120px]"
      />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Working with the best
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Our business partners
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Trusted technology relationships help us bring proven products and
            solutions to businesses across the UAE.
          </p>
        </Reveal>

        <ul className="grid grid-cols-3 gap-2 sm:gap-4">
          {partners.map((partner, index) => (
            <li key={partner.name}>
              <Reveal delay={Math.min(index * 0.045, 0.24)} className="h-full">
                <div className="group relative flex h-full min-h-32 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-foreground/10 bg-card/75 p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/30 hover:bg-card hover:shadow-xl hover:shadow-[var(--brand)]/10 sm:min-h-40 sm:gap-4 sm:rounded-3xl sm:p-6">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--brand)]/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="relative flex h-16 w-full items-center justify-center rounded-xl border border-slate-200/80 bg-white px-1 py-2 shadow-sm sm:h-20 sm:px-4">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={56}
                      sizes="(min-width: 1024px) 160px, 40vw"
                      className={`h-12 w-full object-contain sm:h-16 ${
                        partner.name === "Sophos" ? "rounded-md bg-[#edf2f8] px-2" : ""
                      }`}
                    />
                  </span>
                  <span className="relative text-sm font-semibold tracking-tight">
                    {partner.name}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
