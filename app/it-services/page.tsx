import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/service-category-page";
import { getCategory } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/it-services");
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description ?? getCategory("it-services").description,
  alternates: { canonical: "/it-services" },
};

export default function ItServicesPage() {
  return <ServiceCategoryPage slug="it-services" />;
}
