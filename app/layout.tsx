import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Footer, WhatsAppButton } from "@/components/footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rounak Computers LLC | Cloud, AI & IT Services in Dubai",
  description:
    "Cloud, managed IT, security and Microsoft solutions for Dubai businesses. 20+ years of experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${mono.variable} grain font-sans antialiased`}>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}