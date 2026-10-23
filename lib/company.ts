import { Award, Handshake, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

export const values: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Handshake, title: "Long-term partnership", text: "We stay with clients for years, not projects. Many have been with us for over a decade." },
  { icon: ShieldCheck, title: "Security first", text: "Every solution we design starts with protecting your data and your uptime." },
  { icon: Zap, title: "Fast response", text: "Certified engineers on call, by phone, WhatsApp or on site." },
  { icon: Award, title: "Certified expertise", text: "Authorised partner of the vendors we recommend, so you get official support." },
];

// TODO: replace with your real milestones
export const timeline = [
  { year: "TODO", title: "Rounak Computers founded in Dubai", text: "Started with computer sales and on-site support." },
  { year: "2014", title: "Cloud services launched", text: "Began helping clients move to AWS and Azure." },
  { year: "TODO", title: "Microsoft partnership", text: "Added Microsoft 365, Dynamics and licensing." },
  { year: "TODO", title: "Dubai AI Seal", text: "Recognised under the Dubai AI Seal programme." },
];

// TODO: real names, roles and photos in /public/team
export const team = [
  { name: "Name Surname", role: "Managing Director" },
  { name: "Name Surname", role: "Head of Cloud" },
  { name: "Name Surname", role: "Head of Security" },
  { name: "Name Surname", role: "Support Lead" },
];

// TODO: confirm every answer against the official programme page
export const sealFaqs = [
  { q: "What is the Dubai AI Seal?", a: "TODO: one or two sentences describing the programme and who runs it, taken from the official source." },
  { q: "What does it mean for my business?", a: "TODO: explain what the recognition means in practice, such as vetted AI capability and trusted delivery." },
  { q: "Which AI services do you offer?", a: "Microsoft Copilot rollout, AI-ready cloud infrastructure, and secure data foundations. We also help you choose where AI is worth the cost and where it isn't." },
  { q: "Is my data safe when we use AI tools?", a: "We configure permissions, data loss prevention and access controls before any AI tool goes live, so it only sees what it should." },
];

export const aiOfferings = [
  { title: "Copilot rollout", text: "Licensing, permissions clean-up, training and adoption for Microsoft Copilot.", href: "/products/microsoft-copilot" },
  { title: "AI-ready cloud", text: "Scalable infrastructure on Azure, AWS, Alibaba or Huawei for AI workloads.", href: "/cloud-services" },
  { title: "Secure data foundations", text: "Backup, classification and protection so AI works on clean, safe data.", href: "/security" },
];