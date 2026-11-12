import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeSolutions } from "@/components/home/home-solutions";
import { Partners } from "@/components/partners";
import { AboutIntro } from "@/components/home/about-intro";
import { Approach } from "@/components/home/approach";
import { AiSeal } from "@/components/home/ai-seal";
import { Testimonials } from "@/components/home/testimonials";
import { HomeFaq } from "@/components/home/faq";
import { HomeCta } from "@/components/home/cta";
import { contact, SITE_URL, socials } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";
import { faqJsonLd } from "@/lib/faq";

const seo = getSourceSeo("/");
export const metadata: Metadata = {
  title: seo?.title,
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
  telephone: contact.mobile.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "602, 6th Floor, Al Rifaa Plaza, Khalid Bin Al Waleed Road",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: socials.map(({ href }) => href),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeHero />
      <Partners />
      <AboutIntro />
      <HomeSolutions />
      <Approach />
      <AiSeal title="Recognized for excellence in AI by the Government of Dubai" />
      <HomeCta />
      <Testimonials />
      <HomeFaq />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
