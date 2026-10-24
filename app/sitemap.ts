import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { allServices, categoryList, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, priority: 1 },
    ...["about-us", "contact-us", "blog"].map((p) => ({
      url: `${SITE_URL}/${p}`,
      lastModified: now,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...categoryList.map((c) => ({
      url: `${SITE_URL}/${c.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...allServices.map((s) => ({
      url: `${SITE_URL}/${s.category}/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}