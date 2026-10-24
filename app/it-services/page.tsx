import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/service-category-page";
import { getCategory } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Services in Dubai | Rounak Computers",
  description: getCategory("it-services").description,
  alternates: { canonical: "/it-services" },
};

export default function ItServicesPage() {
  return <ServiceCategoryPage slug="it-services" />;
}
