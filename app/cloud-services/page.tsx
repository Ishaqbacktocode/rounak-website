import type { Metadata } from "next";
import { CloudServicesLanding } from "@/components/cloud-services-landing";
import { getCategory } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/cloud-services");
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description ?? getCategory("cloud-services").description,
  alternates: { canonical: "/cloud-services" },
};

export default function CloudServicesPage() {
  return <CloudServicesLanding />;
}
