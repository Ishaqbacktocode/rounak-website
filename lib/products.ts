import {
  Cctv,
  Cloud,
  LayoutGrid,
  Laptop,
  PhoneCall,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { servicesByCategory, type Service } from "@/lib/site";

type ProductExtra = {
  icon: LucideIcon;
  tagline: string;
  highlights: string[];
  features: { title: string; text: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

const cctvProductDetails: ProductExtra = {
  icon: Cctv,
  tagline: "CCTV designed, installed and maintained by one team.",
  highlights: ["Site survey", "HD & remote view", "Maintenance"],
  features: [
    { title: "Site survey & design", text: "We visit, identify blind spots and design coverage that fits your premises." },
    { title: "Professional installation", text: "Neat cabling, correct camera placement and full testing." },
    { title: "Remote viewing", text: "Check cameras from your phone or computer, wherever you are." },
    { title: "Maintenance & AMC", text: "Regular checks and fast repairs so cameras are working when you need them." },
  ],
  benefits: [
    "Coverage planned, not guessed",
    "Clean installation that suits your office",
    "Annual maintenance available",
    "Works alongside your network and security setup",
  ],
  faqs: [
    { q: "Do you offer a site survey before quoting?", a: "Yes. A survey lets us recommend the right number and type of cameras." },
    { q: "Can we view cameras remotely?", a: "Yes. Remote access can be set up securely on phones and computers." },
  ],
};

const extras: Record<string, ProductExtra> = {
  "microsoft-365": {
    icon: LayoutGrid,
    tagline: "Email, Teams and Office apps, set up properly the first time.",
    highlights: ["Email & Teams", "SharePoint", "Zero-downtime migration"],
    features: [
      { title: "Licensing & deployment", text: "The right plan for each user, deployed and configured for your company." },
      { title: "Email & data migration", text: "Move mailboxes and files from your current host without interrupting work." },
      { title: "Security hardening", text: "Multi-factor authentication, conditional access and sensible defaults from day one." },
      { title: "Training & support", text: "Short, practical training and a support line when your team gets stuck." },
    ],
    benefits: [
      "One licensing partner for purchase, setup and support",
      "Migration planned around your working hours",
      "Secure configuration, not just installation",
      "Predictable monthly cost per user",
    ],
    faqs: [
      { q: "Can you migrate us from our current email host?", a: "Yes. We plan the move, migrate mailboxes and files, and keep your domain and email working throughout." },
      { q: "Which Microsoft 365 plan do we need?", a: "It depends on your team size and security needs. We review how you work and recommend the lowest-cost plan that fits." },
    ],
  },
  "microsoft-copilot": {
    icon: Sparkles,
    tagline: "AI across your Microsoft apps, rolled out safely.",
    highlights: ["Readiness check", "Safe rollout", "Team training"],
    features: [
      { title: "Readiness assessment", text: "We review permissions and data sharing so Copilot only surfaces what each person should see." },
      { title: "Licensing & rollout", text: "Phased deployment, starting with the teams that benefit most." },
      { title: "Training & adoption", text: "Practical prompts and workflows for each department, not generic demos." },
      { title: "Governance & monitoring", text: "Usage reporting and policies so AI use stays under control." },
    ],
    benefits: [
      "Clean up data access before AI touches it",
      "Start small, prove value, then expand",
      "Staff who actually use the tool",
      "Backed by our Dubai AI Seal expertise",
    ],
    faqs: [
      { q: "Is our data safe with Copilot?", a: "Copilot respects your existing Microsoft 365 permissions. That's why we fix over-shared files and access rights before rollout." },
      { q: "Do we need Microsoft 365 first?", a: "Copilot works on top of Microsoft 365, so yes. We can set up both together." },
    ],
  },
  "microsoft-dynamics": {
    icon: Workflow,
    tagline: "ERP and CRM that match how your business really runs.",
    highlights: ["ERP & CRM", "Integration", "UAE e-invoicing ready"],
    features: [
      { title: "Implementation", text: "Requirements, configuration and go-live with a clear plan and milestones." },
      { title: "Customisation & integration", text: "Connect Dynamics to your finance, sales and operations tools." },
      { title: "Data migration", text: "Clean, validated transfer from your existing systems." },
      { title: "Support & upgrades", text: "Ongoing support, including readiness for UAE e-invoicing requirements." },
    ],
    benefits: [
      "One system for finance, sales and operations",
      "Configured to your process, not the other way round",
      "Local team for support in your time zone",
      "Room to add modules as you grow",
    ],
    faqs: [
      { q: "How long does a Dynamics 365 project take?", a: "It depends on scope. After a discovery call we give you a phased plan with realistic timelines." },
      { q: "Can you prepare us for UAE e-invoicing?", a: "Yes. We review your current setup and plan the changes needed. Contact us to discuss your timeline." },
    ],
  },
  "microsoft-azure-services": {
    icon: Cloud,
    tagline: "Azure licensing, setup and management, with costs under control.",
    highlights: ["Subscriptions", "Architecture", "Cost control"],
    features: [
      { title: "Licensing & subscriptions", text: "Azure subscriptions and licensing handled through one local partner." },
      { title: "Architecture & setup", text: "Secure, scalable environments designed around your workloads." },
      { title: "Cost management", text: "Monitoring and right-sizing so the bill doesn't surprise you." },
      { title: "Ongoing management", text: "Patching, monitoring and support after go-live." },
    ],
    benefits: [
      "Hybrid and multi-cloud friendly",
      "Cost visibility from the start",
      "Certified engineers on call",
      "Pairs with our backup and DRaaS services",
    ],
    faqs: [
      { q: "Can Azure work with our on-premise servers?", a: "Yes. Azure supports hybrid setups, so you can move workloads gradually." },
      { q: "How do you keep Azure costs down?", a: "We size resources to real usage, set budgets and alerts, and review spend regularly." },
    ],
  },
  "computer-sales-services": {
    icon: Laptop,
    tagline: "Laptops, desktops and servers from authorised distributors.",
    highlights: ["HP · Dell · Lenovo", "Event rental", "Setup & support"],
    features: [
      { title: "Hardware supply", text: "Laptops, desktops and servers sourced only from authorised distributors." },
      { title: "Rental for events", text: "PCs, laptops and projectors for conferences, training and exhibitions." },
      { title: "Setup & imaging", text: "Devices delivered configured, secured and ready to use." },
      { title: "Warranty & repairs", text: "Help with warranty claims and repairs after purchase." },
    ],
    benefits: [
      "Genuine products with manufacturer warranty",
      "Deals of any size get the same attention",
      "Bulk deployment support",
      "On-site help if something fails",
    ],
    faqs: [
      { q: "Do you rent equipment for short events?", a: "Yes. We rent PCs, laptops and projectors for events. Tell us the dates and quantities for a quote." },
      { q: "Are your products genuine?", a: "We only buy from authorised distributors, so you get genuine stock and official warranty." },
    ],
  },
  telephony: {
    icon: PhoneCall,
    tagline: "Business phone systems built around how your team works.",
    highlights: ["IP telephony", "Call routing", "Easy to scale"],
    features: [
      { title: "System design", text: "We map your call flows, extensions and offices before choosing a system." },
      { title: "Installation & setup", text: "Handsets, cabling and configuration, tested before handover." },
      { title: "Call routing & menus", text: "Auto-attendants and routing so callers reach the right person." },
      { title: "Support", text: "Fast fixes and changes when your team grows or moves." },
    ],
    benefits: [
      "Professional first impression on every call",
      "Add extensions without new wiring",
      "One partner for phones and network",
      "Support from the engineers who installed it",
    ],
    faqs: [
      { q: "Can the phone system integrate with our other tools?", a: "Often yes. We check your setup and tell you what's possible before you buy." },
      { q: "Do you handle the cabling too?", a: "Yes. Our structured cabling team can wire the office alongside the phone installation." },
    ],
  },
  "cctv-solutions": cctvProductDetails,
  "professional-cctv-installation-company-in-dubai": cctvProductDetails,
};

export type Product = Service & ProductExtra;

export const products: Product[] = servicesByCategory("products").map((s) => ({
  ...s,
  ...extras[s.slug],
}));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const productGroups = ["All", "Microsoft", "Infrastructure"] as const;