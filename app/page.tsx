import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeSolutions } from "@/components/home/home-solutions";
import { Partners } from "@/components/partners";
import { AboutIntro } from "@/components/home/about-intro";
import { Approach } from "@/components/home/approach";
import { AiSeal } from "@/components/home/ai-seal";
import { Testimonials } from "@/components/home/testimonials";
import { HomeCta } from "@/components/home/cta";
import { contact, SITE_URL } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";

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
      <HomeHero />
      <Partners />
      <AboutIntro />
      <HomeSolutions />
      <Approach />
      <AiSeal />
      <HomeCta />
      <Testimonials />
    </>
  );
}