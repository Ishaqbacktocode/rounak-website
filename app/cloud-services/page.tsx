import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/service-category-page";
import { getCategory } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/cloud-services");
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description ?? getCategory("cloud-services").description,
  alternates: { canonical: "/cloud-services" },
};

export default function CloudServicesPage() {
  return <ServiceCategoryPage slug="cloud-services" />;
}
