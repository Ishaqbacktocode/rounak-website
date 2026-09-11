import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rounak Computers | Cloud, Microsoft & Managed IT Solutions in Dubai",
  description:
    "For 20+ years Rounak Computers has delivered cloud, Microsoft 365, cybersecurity, managed IT and infrastructure services across the UAE. Microsoft Gold Partner and Dubai AI Seal recipient.",
  keywords: [
    "cloud solutions Dubai",
    "managed IT services UAE",
    "Microsoft 365 partner",
    "cybersecurity Dubai",
    "IT AMC services",
    "Rounak Computers",
  ],
  openGraph: {
    title: "Rounak Computers | Cloud, Microsoft & Managed IT Solutions in Dubai",
    description:
      "Cloud, Microsoft, cybersecurity and managed IT services trusted by UAE businesses for over 20 years.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full bg-background",
        "antialiased",
        inter.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
