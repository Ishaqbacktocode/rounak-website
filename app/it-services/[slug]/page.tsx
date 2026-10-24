import type { Metadata } from "next";
import { ServiceDetailPage, getServicePageMetadata } from "@/components/service-detail-page";
import { servicesByCategory } from "@/lib/site";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesByCategory("it-services").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return getServicePageMetadata({ category: "it-services", ...(await params) });
}

export default async function ItServicePage({ params }: Props) {
  const { slug } = await params;
  return <ServiceDetailPage category="it-services" slug={slug} />;
}
