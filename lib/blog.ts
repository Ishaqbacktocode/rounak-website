import sourceBlogPosts from "@/lib/source-blog.json";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  excerpt: string;
  readTime: string;
  intro: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = sourceBlogPosts.map((post) => ({
  ...post,
  sections: post.sections.map((section) => ({
    ...section,
    paragraphs: section.paragraphs ?? [],
  })),
}));

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
