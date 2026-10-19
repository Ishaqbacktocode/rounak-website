import * as cheerio from "cheerio";
import type { PageContent } from "@/components/site-page";

export const sourcePages = [
  "about-us", "about-us/our-team", "about-us/our-partners", "about-us/clients-and-testimonials", "about-us/faq",
  "products", "products/microsoft-copilot", "products/microsoft-dynamics", "products/microsoft-azure-services", "products/microsoft-365", "products/telephony", "products/cctv-solutions", "products/computer-sales-services", "products/professional-cctv-installation-company-in-dubai",
  "it-services", "it-services/structured-cabling", "it-services/it-amc-services-get-it-annual-maintenance-contract", "it-services/managed-it-services", "it-services/spla", "it-services/structured-cabling-company-dubai", "it-services/expert-it-support-services-dubai", "it-services/comprehensive-it-managed-services-dubai", "it-services/advanced-website-joomla-based-application",
  "cloud-services", "cloud-services/alibaba-cloud", "cloud-services/amazon-web-services", "cloud-services/azure-cloud-services", "cloud-services/disaster-recovery-as-service-draas", "cloud-services/migration-services", "cloud-services/best-solutions-to-backup-your-data", "cloud-services/quality-ibm-watson-workspace-in-dubai", "cloud-services/huawei-cloud-services",
  "security", "security/o365-advance-threat-protection", "security/sophos-security-in-dubai", "security/ibm-mass-360", "security/mimecast-dubai", "security/top-security-solutions-for-ransomware-dubai", "security/barracuda-email-security", "security/guaranteed-information-security-in-dubai",
  "blog", "blog/uae-e-invoicing-the-it-readiness-checklist-before-your-asp-deadline", "blog/still-running-windows-10-esu-costs-and-your-options-in-2026", "blog/barracuda-vs-mimecast-for-uae-businesses-choosing-an-email-security-layer", "contact-us", "privacy-policy", "tos", "sitemap",
] as const;

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export async function loadSourcePage(slug: string): Promise<PageContent & { title: string; description: string } | undefined> {
  if (!sourcePages.includes(slug as (typeof sourcePages)[number])) return undefined;
  const response = await fetch(`https://rounakcomputers.com/${slug}`, { next: { revalidate: 3600 } });
  if (!response.ok) return undefined;
  const $ = cheerio.load(await response.text());
  const main = $("main").first();
  const title = clean($("meta[property='og:title']").attr("content") || $("h1, h2").first().text() || $("title").text());
  const description = clean($("meta[name='description']").attr("content") || main.find("p").first().text());
  const image = main.find("img").first().attr("src");
  const imageUrl = image ? new URL(image, "https://rounakcomputers.com").toString() : undefined;
  const blocks: { title: string; body: string; bullets?: string[] }[] = [];
  const headings = main.find("h1, h2, h3").toArray();
  for (const heading of headings) {
    const headingTitle = clean($(heading).text());
    if (!headingTitle || /newsletter subscription|quick links|product & services|contact us/i.test(headingTitle)) continue;
    const bodyParts: string[] = [];
    let next = $(heading).next();
    while (next.length && !/^h[1-3]$/i.test(next[0].tagName)) {
      if (next.is("p")) bodyParts.push(clean(next.text()));
      next = next.next();
    }
    if (bodyParts.length) blocks.push({ title: headingTitle, body: bodyParts.join("\n\n") });
  }
  const paragraphs = main.find("p").toArray().map((node) => clean($(node).text())).filter(Boolean);
  const captured = new Set(blocks.map((block) => block.body));
  paragraphs.forEach((body, index) => {
    if (!captured.has(body)) blocks.push({ title: index === 0 ? title : "More from Rounak Computers", body });
  });
  const intro = paragraphs[0] || description;
  return {
    eyebrow: slug.split("/")[0].replaceAll("-", " "),
    title,
    intro,
    description,
    image: imageUrl,
    sections: blocks.length ? blocks : [{ title, body: description }],
  };
}
