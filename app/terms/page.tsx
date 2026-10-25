import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use | Rounak Computers",
  description:
    "Read the terms and conditions for using the Rounak Computers website and services.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By using our website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please refrain from using our website.",
    ],
  },
  {
    heading: "Changes to Terms",
    paragraphs: [
      "Rounak Computers reserves the right to modify or update these Terms of Use at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "Use of Content",
    paragraphs: [
      "All content on this website, including text, graphics, logos, images, and software, is the property of Rounak Computers or its content suppliers. You may not modify, distribute, reproduce, or use any content for commercial purposes without our express written permission.",
    ],
  },
  {
    heading: "User Conduct",
    paragraphs: ["By using this website, you agree to not:"],
    bullets: [
      "Engage in unlawful or harmful activities.",
      "Upload or transmit any viruses or harmful code.",
      "Use any automated systems to access or disrupt the website.",
    ],
  },
  {
    heading: "Third-Party Links",
    paragraphs: [
      "Our website may contain links to third-party websites. These links are provided for your convenience, and Rounak Computers does not endorse or take responsibility for the content or practices of these external sites.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "Rounak Computers shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website or services. This includes, but is not limited to, damages resulting from errors, interruptions, or data loss.",
    ],
  },
  {
    heading: "Termination of Use",
    paragraphs: [
      "We reserve the right to terminate your access to our website and services at any time, without notice, for any reason, including violation of these terms.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These Terms of Use are governed by the laws of the UAE. Any disputes arising from the use of our website will be subject to the jurisdiction of the UAE courts.",
    ],
  },
  {
    heading: "Contact Information",
    paragraphs: [
      "If you have any questions regarding these Terms of Use, please contact us at:",
    ],
  },
];

export default function TermsPage() {
  return (
    <main>
      <LegalPage
        title="Terms of Use"
        updated="09 October 2024"
        intro="Welcome to Rounak Computers' website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully."
        sections={sections}
      />
    </main>
  );
}
