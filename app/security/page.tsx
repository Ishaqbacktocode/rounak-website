import type { Metadata } from "next";
import { ServiceCategoryPage } from "@/components/service-category-page";
import { getCategory } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cybersecurity Services in Dubai | Rounak Computers",
  description: getCategory("security").description,
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return <ServiceCategoryPage slug="security" />;
}
