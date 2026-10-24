import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/service-category-page";
import { getCategory } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cloud Services in Dubai & UAE | Rounak Computers",
  description: getCategory("cloud-services").description,
  alternates: { canonical: "/cloud-services" },
};

export default function CloudServicesPage() {
  return <ServiceCategoryPage slug="cloud-services" />;
}
