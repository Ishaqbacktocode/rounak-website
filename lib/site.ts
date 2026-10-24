export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rounakcomputers.com";

export type CategorySlug = "products" | "it-services" | "cloud-services" | "security";

export const categories: Record<
  CategorySlug,
  { slug: CategorySlug; title: string; navLabel: string; tagline: string; description: string }
> = {
  products: {
    slug: "products",
    title: "Products",
    navLabel: "Products",
    tagline: "Microsoft, telephony, CCTV and hardware",
    description: "Microsoft 365, Copilot, Dynamics, CCTV, telephony and computer sales for Dubai businesses.",
  },
  "it-services": {
    slug: "it-services",
    title: "IT Services",
    navLabel: "IT Services",
    tagline: "Managed IT, AMC, cabling and support",
    description: "Managed IT services, annual maintenance contracts, structured cabling and on-site support in Dubai.",
  },
  "cloud-services": {
    slug: "cloud-services",
    title: "Cloud Services",
    navLabel: "Cloud",
    tagline: "AWS, Azure, Alibaba, Huawei, DRaaS",
    description: "Cloud migration, disaster recovery, backup and multi-cloud platforms across the UAE.",
  },
  security: {
    slug: "security",
    title: "Security",
    navLabel: "Security",
    tagline: "Email, firewall and ransomware protection",
    description: "Sophos, Mimecast, Barracuda and Microsoft security solutions for UAE businesses.",
  },
};

export const categoryList = Object.values(categories);

export type Service = {
  category: CategorySlug;
  slug: string;
  title: string;
  group: string;
  summary: string;
};

export const services: Service[] = [
  // PRODUCTS
  { category: "products", slug: "microsoft-365", title: "Microsoft 365", group: "Microsoft", summary: "Email, Teams, SharePoint and Office apps, deployed and managed for your team." },
  { category: "products", slug: "microsoft-copilot", title: "Microsoft Copilot", group: "Microsoft", summary: "AI assistance across your Microsoft apps, with a safe rollout plan." },
  { category: "products", slug: "microsoft-dynamics", title: "Microsoft Dynamics 365", group: "Microsoft", summary: "ERP and CRM implementation, customisation and support." },
  { category: "products", slug: "microsoft-azure-services", title: "Microsoft Azure Services", group: "Microsoft", summary: "Azure licensing, setup and ongoing management." },
  { category: "products", slug: "computer-sales-services", title: "Computer Sales & Services", group: "Infrastructure", summary: "Laptops, desktops and servers from authorised distributors, plus rental for events." },
  { category: "products", slug: "telephony", title: "Telephony Solutions", group: "Infrastructure", summary: "Business phone systems built around how your team works." },
  { category: "products", slug: "cctv-solutions", title: "CCTV Solutions", group: "Infrastructure", summary: "Professional CCTV design, installation and maintenance." },
  { category: "products", slug: "professional-cctv-installation-company-in-dubai", title: "Professional CCTV Installation", group: "Infrastructure", summary: "Professional CCTV installation for offices, warehouses and retail." },

  // IT SERVICES
  { category: "it-services", slug: "structured-cabling-company-dubai", title: "Structured Cabling Company", group: "Infrastructure", summary: "Certified structured cabling for offices, data rooms and warehouses." },
  { category: "it-services", slug: "comprehensive-it-managed-services-dubai", title: "Comprehensive IT Managed Services", group: "Support & managed", summary: "End-to-end managed IT services for growing Dubai businesses." },
  { category: "it-services", slug: "managed-it-services", title: "Managed IT Services", group: "Support & managed", summary: "Proactive monitoring, helpdesk and infrastructure management for a predictable monthly cost." },
  { category: "it-services", slug: "it-amc-services-get-it-annual-maintenance-contract", title: "IT AMC Services", group: "Support & managed", summary: "Annual maintenance contracts covering your critical IT infrastructure." },
  { category: "it-services", slug: "expert-it-support-services-dubai", title: "IT Support", group: "Support & managed", summary: "On-site and remote support from certified engineers." },
  { category: "it-services", slug: "structured-cabling", title: "Structured Cabling", group: "Infrastructure", summary: "Clean, certified network cabling for offices, data rooms and warehouses." },
  { category: "it-services", slug: "spla", title: "SPLA Licensing", group: "Licensing & apps", summary: "Microsoft Services Provider License Agreement guidance and management." },
  { category: "it-services", slug: "advanced-website-joomla-based-application", title: "Websites & Web Apps", group: "Licensing & apps", summary: "Business websites and custom web applications." },

  // CLOUD
  { category: "cloud-services", slug: "amazon-web-services", title: "Amazon Web Services", group: "Platforms", summary: "Scalable compute, storage and networking on AWS." },
  { category: "cloud-services", slug: "azure-cloud-services", title: "Microsoft Azure", group: "Platforms", summary: "Enterprise cloud with hybrid and multi-cloud support." },
  { category: "cloud-services", slug: "alibaba-cloud", title: "Alibaba Cloud", group: "Platforms", summary: "AI and cloud computing services with built-in security and backup." },
  { category: "cloud-services", slug: "huawei-cloud-services", title: "Huawei Cloud", group: "Platforms", summary: "Big data, AI and high-performance computing on Huawei Cloud." },
  { category: "cloud-services", slug: "quality-ibm-watson-workspace-in-dubai", title: "IBM Watson Workspace", group: "Platforms", summary: "AI-supported collaboration that connects to your enterprise apps." },
  { category: "cloud-services", slug: "disaster-recovery-as-service-draas", title: "Disaster Recovery (DRaaS)", group: "Protect & migrate", summary: "Replicate workloads to the cloud and fail over fast to keep the business running." },
  { category: "cloud-services", slug: "best-solutions-to-backup-your-data", title: "Cloud Backup", group: "Protect & migrate", summary: "Encrypted, automated backup that protects against hardware failure and attacks." },
  { category: "cloud-services", slug: "migration-services", title: "Cloud Migration", group: "Protect & migrate", summary: "Move data and applications to the cloud with minimal risk and downtime." },

  // SECURITY
  { category: "security", slug: "o365-advance-threat-protection", title: "Office 365 Advanced Threat Protection", group: "Email security", summary: "Stop phishing, malware and malicious links before they reach inboxes." },
  { category: "security", slug: "mimecast-dubai", title: "Mimecast", group: "Email security", summary: "Email security, archiving and continuity from Mimecast." },
  { category: "security", slug: "barracuda-email-security", title: "Barracuda Email Security", group: "Email security", summary: "Layered email protection against spam, phishing and ransomware." },
  { category: "security", slug: "sophos-security-in-dubai", title: "Sophos Firewall", group: "Network & endpoint", summary: "Next-generation firewall and endpoint protection from Sophos." },
  { category: "security", slug: "ibm-mass-360", title: "IBM MaaS360", group: "Network & endpoint", summary: "Unified endpoint and mobile device management." },
  { category: "security", slug: "top-security-solutions-for-ransomware-dubai", title: "Ransomware Protection", group: "Network & endpoint", summary: "Layered defences and recovery planning against ransomware." },
    { category: "security", slug: "guaranteed-information-security-in-dubai", title: "Guaranteed Information Security", group: "Network & endpoint", summary: "Advanced ICT and information security solutions for UAE businesses." },
];

export const allServices = services;

export const getCategory = (slug: string) => categories[slug as CategorySlug];

export const getService = (category: string, slug: string) =>
  services.find((s) => s.category === category && s.slug === slug);

export const servicesByCategory = (c: CategorySlug) =>
  services.filter((s) => s.category === c);

export function groupServices(c: CategorySlug) {
  const map = new Map<string, Service[]>();
  for (const s of servicesByCategory(c)) {
    map.set(s.group, [...(map.get(s.group) ?? []), s]);
  }
  return [...map].map(([group, items]) => ({ group, items }));
}

export const contact = {
  email: "info@rounakcomputers.com",
  mobile: "+971 55 4752 832",
  landline: "+971 4 386 5656",
  address: "602, 6th Floor, Al Rifaa Plaza, Khalid Bin Al Waleed Road, Dubai, UAE",
  whatsapp: "https://wa.me/971504752832",
};

export const companyLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Dubai AI Seal", href: "/dubai-ai-seal" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

// TODO: replace with Rounak's real profile URLs, delete any you don't use
export const socials = [
  { label: "LinkedIn", href: "https://in.linkedin.com/company/rounakcomputersllc" },
  { label: "Facebook", href: "https://www.facebook.com/rounakcomputersllc" },
  { label: "Instagram", href: "https://www.instagram.com/rounakcloud/" },
];