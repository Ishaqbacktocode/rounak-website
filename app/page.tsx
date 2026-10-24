import type { Metadata } from "next";
import { HeroSlider } from "@/components/home/hero-slider";
import { Partners } from "@/components/partners";
import { AboutIntro } from "@/components/home/about-intro";
import { CardGrid } from "@/components/home/card-grid";
import { Approach } from "@/components/home/approach";
import { AiSeal } from "@/components/home/ai-seal";
import { Testimonials } from "@/components/home/testimonials";
import { HomeCta } from "@/components/home/cta";
import { products, itServices, cloud, security } from "@/lib/home-content";
import { contact, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rounak Computers LLC: Cloud and AI services company in Dubai",
  description:
    "Rounak Computers provides customized IT solutions, including hardware sales, software licensing, web development, and consulting, helping businesses achieve growth effectively.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rounak Computers LLC",
  url: SITE_URL,
  email: contact.email,
  telephone: "+971554752832",
  address: {
    "@type": "PostalAddress",
    streetAddress: "602, 6th Floor, Al Rifaa Plaza, Khalid Bin Al Waleed Road",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    "https://www.facebook.com/rounakcomputersllc",
    "https://in.linkedin.com/company/rounakcomputersllc",
    "https://www.instagram.com/rounakcloud/",
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSlider />
      <Partners />
      <AboutIntro />
      <CardGrid title="Innovative IT Solutions to Empower Your Business" intro="Explore our range of products, including Microsoft Copilot, CCTV Solutions, and more, to enhance your business operations." cards={products} />
      <CardGrid title="Comprehensive IT Services for Seamless Operations" intro="From structured cabling to managed IT services, we provide expert support to ensure your business runs smoothly." cards={itServices} />
      <CardGrid title="Cloud Solutions in The UAE" intro={cloud.intro} subheading="Our Advanced Cloud Computing Services in Dubai" subintro={cloud.subintro} cards={cloud.cards} columns={3} />
      <CardGrid title="Protect Your Business with Leading Security Solutions" intro="Stay secure with top-tier solutions like O365 Advanced Threat Protection, Sophos Security, and Barracuda Email Security." cards={security} />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
          Rounak Computers provides customized IT solutions, including hardware sales, software
          licensing, web development, and consulting, helping businesses achieve growth effectively.
        </h1>
      </section>

      <Approach />
      <AiSeal />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          Security is a core focus across all our services, ensuring comprehensive protection for
          your business in every solution we implement and deploy.
        </p>
      </section>

      <Testimonials />
      <HomeCta />
    </>
  );
}