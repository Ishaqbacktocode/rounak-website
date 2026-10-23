import type { MetadataRoute } from "next";
import { allServices, categoryList, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, priority: 1 },
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