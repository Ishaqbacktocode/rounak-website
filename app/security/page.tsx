import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/service-category-page";
import { getCategory } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/security");
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description ?? getCategory("security").description,
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return <ServiceCategoryPage slug="security" />;
}
