import type { BlogPost } from "@/lib/blog";

export const blogTopics = [
  "Cloud & AI",
  "Cybersecurity",
  "Microsoft & Workplace",
  "IT Operations",
  "Business & Compliance",
  "Continuity & Recovery",
] as const;

export type BlogTopic = (typeof blogTopics)[number];

const topicRules: Array<{ topic: BlogTopic; pattern: RegExp }> = [
  {
    topic: "Business & Compliance",
    pattern: /e-?invoic|pint ae|data localiz|privacy law|voip rules|regulation|compliance/i,
  },
  {
    topic: "Cybersecurity",
    pattern: /cyber|security|ransomware|phish|threat|firewall|sophos|mimecast|barracuda|unauthorized application|sira|cctv/i,
  },
  {
    topic: "Continuity & Recovery",
    pattern: /disaster recover|draas|rto|rpo|backup|business continuity|downtime|recovery/i,
  },
  {
    topic: "Microsoft & Workplace",
    pattern: /microsoft|office 365|m365|windows|copilot|dynamics|erp|iphone|workplace/i,
  },
  {
    topic: "Cloud & AI",
    pattern: /cloud|aws|azure|alibaba|huawei|artificial intelligence|\bai\b|edge computing/i,
  },
  {
    topic: "IT Operations",
    pattern: /it support|it infrastructure|it amc|managed it|helpdesk|wi-?fi|network|cabling|sla|telephony|consulting/i,
  },
];

export function getBlogTopic(post: BlogPost): BlogTopic {
  const content = `${post.title} ${post.slug} ${post.excerpt}`;
  return topicRules.find(({ pattern }) => pattern.test(content))?.topic ?? "IT Operations";
}

export function getBlogImage(post: BlogPost): string {
  const content = `${post.title} ${post.slug}`.toLowerCase();

  if (/\bcctv\b|sira/.test(content)) return "/images/visuals/security-camera.jpg";
  if (/cyber|security|ransomware|phish|threat|firewall|sophos|mimecast|barracuda/.test(content)) {
    return "/images/visuals/it-infrastructure.jpg";
  }
  if (/cloud|aws|azure|alibaba|huawei|\bai\b|artificial intelligence|edge computing/.test(content)) {
    return "/images/visuals/cloud-server.jpg";
  }
  if (/microsoft|office 365|m365|windows|copilot|dynamics|erp/.test(content)) {
    return "/images/visuals/microsoft-workplace.jpg";
  }
  if (/iphone|laptop|computer|device/.test(content)) {
    return "/images/visuals/business-laptop.jpg";
  }
  if (/support|managed it|it amc|helpdesk|sla|consulting/.test(content)) {
    return "/images/visuals/it-support.jpg";
  }
  if (/wi-?fi|network|cabling|infrastructure|telephony|voip/.test(content)) {
    return "/images/visuals/it-infrastructure.jpg";
  }
  return "/images/visuals/it-applications.jpg";
}
