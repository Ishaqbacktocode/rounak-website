import type { Metadata } from "next";
import { SecurityLanding } from "@/components/security-landing";
import { getCategory } from "@/lib/site";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/security");
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description ?? getCategory("security").description,
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return <SecurityLanding />;
}
