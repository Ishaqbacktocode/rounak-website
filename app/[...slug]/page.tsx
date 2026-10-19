import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadSourcePage, sourcePages } from "@/lib/source-content";
import { SitePage } from "@/components/site-page";

export function generateStaticParams() {
  return sourcePages.map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const slug = (await params).slug.join("/");
  const page = await loadSourcePage(slug);
  return page ? { title: page.title, description: page.description } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const slug = (await params).slug.join("/");
  const page = await loadSourcePage(slug);
  if (!page) notFound();
  return <SitePage content={page} />;
}
