import Image from "next/image";
import { partners } from "@/lib/data";

export function Partners() {
  const renderPartners = (duplicate = false) =>
    partners.map((partner) => (
      <li
        key={partner.name}
        className="flex w-36 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-foreground/10 bg-background/75 px-5 py-4 sm:w-40"
      >
        <Image
          src={partner.logo}
          alt={duplicate ? "" : `${partner.name} logo`}
          width={120}
          height={48}
          sizes="120px"
          className={`h-9 w-full object-contain ${
            partner.name === "Sophos" ? "rounded-md bg-[#edf2f8] px-2" : ""
          }`}
        />
        <span className="text-sm font-medium text-foreground">{partner.name}</span>
      </li>
    ));

  return (
    <section
      aria-labelledby="partners-heading"
      className="border-y border-foreground/10 py-8"
    >
      <h2
        id="partners-heading"
        className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
      >
        Technology partners
      </h2>
      <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max">
          <ul className="flex w-max gap-4 pr-4">{renderPartners()}</ul>
          <ul aria-hidden="true" className="flex w-max gap-4 pr-4">
            {renderPartners(true)}
          </ul>
        </div>
      </div>
    </section>
  );
}