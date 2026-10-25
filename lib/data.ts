import { Cloud, Shield, Server, Boxes, type LucideIcon } from "lucide-react";

export type Pillar = {
  title: string;
  blurb: string;
  href: string;
  icon: LucideIcon;
  items: string[];
};

export const pillars: Pillar[] = [
  {
    title: "Products",
    blurb: "Microsoft Copilot, Dynamics, 365, CCTV, telephony and hardware.",
    href: "/products",
    icon: Boxes,
    items: ["Microsoft Copilot", "Microsoft Dynamics", "Microsoft 365", "CCTV Solutions"],
  },
  {
    title: "IT Services",
    blurb: "Managed IT, AMC, structured cabling and on-site support.",
    href: "/it-services",
    icon: Server,
    items: ["Managed IT Services", "IT AMC", "Structured Cabling", "SPLA"],
  },
  {
    title: "Cloud",
    blurb: "AWS, Azure, Alibaba and Huawei Cloud, plus DRaaS and migration.",
    href: "/cloud-services",
    icon: Cloud,
    items: ["AWS", "Microsoft Azure", "DRaaS", "Migration"],
  },
  {
    title: "Security",
    blurb: "Sophos, Mimecast, Barracuda and O365 Advanced Threat Protection.",
    href: "/security",
    icon: Shield,
    items: ["Sophos", "Mimecast", "Barracuda", "O365 ATP"],
  },
];

export type Partner = {
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  { name: "Microsoft", logo: "/images/partners/microsoft.svg" },
  { name: "HP", logo: "/images/partners/hp.svg" },
  { name: "Dell", logo: "/images/partners/dell.svg" },
  { name: "Lenovo", logo: "/images/partners/lenovo.svg" },
  { name: "Sophos", logo: "/images/partners/sophos.png" },
  { name: "AWS", logo: "/images/partners/aws.svg" },
  { name: "Alibaba Cloud", logo: "/images/partners/alibaba-cloud.svg" },
  { name: "Huawei", logo: "/images/partners/huawei.svg" },
  { name: "Mimecast", logo: "/images/partners/mimecast.png" },
];

export const stats = [
  { value: 20, suffix: "+", label: "Years in Dubai" },
  { value: 2014, suffix: "", label: "Cloud since" },
  { value: 9, suffix: "", label: "Dubai AI Seal recipients (we're one)" },
];