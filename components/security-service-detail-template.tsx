import { LockKeyhole, Mail, Network } from "lucide-react";
import {
  ServiceBenefitsSection,
  ServiceCapabilitySection,
  ServiceDetailHero,
  ServiceFaqSchema,
  ServiceFaqSection,
  ServiceOverviewSection,
  ServiceRelatedSection,
  ServiceSourceSections,
  getServiceDetailTemplateData,
} from "@/components/service-detail-template-parts";
import { Reveal } from "@/components/reveal";
import { SolutionCTA, SolutionPartnerStrip, SolutionSectionHeading } from "@/components/solution-landing-primitives";

const securityPartners = [
  { name: "Microsoft 365", image: "/images/partners/microsoft.svg" },
  { name: "Sophos", image: "/images/partners/sophos.png" },
  { name: "Mimecast", image: "/images/partners/mimecast.png" },
  { name: "Barracuda" },
];

const securityBrandImages: Record<string, string> = {
  "o365-advance-threat-protection": "/images/partners/microsoft.svg",
  "sophos-security-in-dubai": "/images/partners/sophos.png",
  "mimecast-dubai": "/images/partners/mimecast.png",
};

const securityLayers = [
  {
    title: "Email and collaboration",
    description: "Help protect business email from phishing, malware, malicious links and unsafe attachments.",
    icon: Mail,
  },
  {
    title: "Network and endpoint",
    description: "Use firewall and device controls to reduce exposure across the systems your team relies on.",
    icon: Network,
  },
  {
    title: "Resilience and recovery",
    description: "Layered defenses and recovery planning help limit disruption when an incident occurs.",
    icon: LockKeyhole,
  },
];

function SecurityLayerSection() {
  return (
    <section className="security-layer-section px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SolutionSectionHeading
            eyebrow="Defense in depth"
            title="Protection across the layers that matter."
            description="Email, network and endpoint controls are easier to manage when they are designed to work together."
          />
        </Reveal>
        <div className="security-layer-grid mt-12">
          {securityLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <Reveal key={layer.title} delay={index * 0.08} className="h-full">
                <article className="security-layer-card">
                  <div className="security-layer-card-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{layer.title}</h3>
                  <p>{layer.description}</p>
                  <span className="security-layer-card-rule" aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SecurityServiceDetailTemplate({ slug }: { slug: string }) {
  const data = getServiceDetailTemplateData("security", slug);

  return (
    <>
      <ServiceDetailHero
        data={data}
        theme="security"
        image="/images/visuals/it-infrastructure.jpg"
        imageAlt="Close-up of a connected circuit board representing business IT infrastructure."
        brandImage={securityBrandImages[slug]}
        visualTitle="Security by design."
        visualNote="Layers built around your environment."
        visualTags={["Email protection", "Network defense", "Endpoint security"]}
      />

      <SolutionPartnerStrip label="Security technologies from" brands={securityPartners} />

      <ServiceOverviewSection
        data={data}
        theme="security"
        eyebrow="Security service overview"
        title="Controls chosen for your real environment."
        description="Explore the protection this service provides, how it fits with your current setup, and where it can strengthen your security posture."
      />

      <SecurityLayerSection />

      <ServiceCapabilitySection
        data={data}
        theme="security"
        eyebrow="Service capabilities"
        title="How this solution helps protect your business."
        description="Review the capabilities and service details, then shape the right scope for your people, devices and systems."
      />

      <ServiceSourceSections data={data} theme="security" />

      <ServiceBenefitsSection
        data={data}
        theme="security"
        eyebrow="Built for resilience"
        title="Security that supports everyday work."
        description="Thoughtful protection helps your team work with confidence while keeping business information in view."
      />

      <ServiceFaqSection data={data} />
      <ServiceRelatedSection data={data} />
      <SolutionCTA
        theme="security"
        eyebrow="Strengthen your security posture"
        title={`Talk to us about ${data.service.title}.`}
        description="Share your security priorities and environment with our team to plan a practical next step."
      />
      <ServiceFaqSchema data={data} />
    </>
  );
}
