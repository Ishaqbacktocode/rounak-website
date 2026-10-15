import { SiteHeader } from "@/components/home/site-header";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { Partners } from "@/components/home/partners";
import { Services } from "@/components/home/services";
import { CloudSolutions } from "@/components/home/cloud";
import { Security } from "@/components/home/security";
import { About } from "@/components/home/about";
import { AiAward } from "@/components/home/ai-award";
import { Testimonials } from "@/components/home/testimonials";
import { Contact } from "@/components/home/contact";
import { SiteFooter } from "@/components/home/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Partners />
        <Services />
        <CloudSolutions />
        <Security />
        <About />
        <AiAward />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
