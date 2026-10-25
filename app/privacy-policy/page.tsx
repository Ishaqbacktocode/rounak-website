import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Rounak Computers",
  description:
    "Learn how Rounak Computers collects, uses, and safeguards personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    paragraphs: ["We may collect personal information such as:"],
    bullets: [
      "Contact details (name, email, phone number)",
      "Billing information (address, payment details)",
      "Technical data (IP address, browser type, device information)",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: ["We use the information collected to:"],
    bullets: [
      "Provide IT and cloud services",
      "Process orders and payments",
      "Improve our website and services",
      "Send important updates or marketing communications (with your consent)",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We take appropriate security measures to protect your data against unauthorized access, loss, or alteration. All sensitive information, such as payment details, is encrypted and securely stored.",
    ],
  },
  {
    heading: "Sharing of Information",
    paragraphs: [
      "We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted partners to help us provide services, such as payment processors or cloud service providers, in compliance with applicable privacy laws.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "Our website uses cookies to enhance user experience and track usage patterns. You can manage or disable cookies through your browser settings.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@rounakcomputers.com.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top of the page.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <LegalPage
        title="Privacy Policy"
        updated="09 October 2024"
        intro="At Rounak Computers, we prioritize the privacy of our users and are committed to protecting any personal data shared with us. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website and services."
        sections={sections}
      />
    </main>
  );
}
