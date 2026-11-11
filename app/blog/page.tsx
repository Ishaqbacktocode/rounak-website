import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/blog-index";
import { getSourceSeo } from "@/lib/source-seo";

const seo = getSourceSeo("/blog");
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogIndex />;
}
