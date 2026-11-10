import { ArrowUpRight, Cloud, Database, Gauge, Network, RefreshCw } from "lucide-react";
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

const cloudPartners = [
  { name: "Amazon Web Services", image: "/images/partners/aws.svg" },
  { name: "Microsoft Azure", image: "/images/partners/microsoft.svg" },
  { name: "Alibaba Cloud", image: "/images/partners/alibaba-cloud.svg" },
  { name: "Huawei Cloud", image: "/images/partners/huawei.svg" },
];

const cloudBrandImages: Record<string, string> = {
  "amazon-web-services": "/images/partners/aws.svg",
  "azure-cloud-services": "/images/partners/microsoft.svg",
  "alibaba-cloud": "/images/2026/02/17/alibaba-cloud-logo.webp",
  "huawei-cloud-services": "/images/partners/huawei.svg",
};

const cloudJourney = [
  {
    title: "Assess the workload",
    description: "Map applications, dependencies, data and business requirements before choosing a path.",
    icon: Network,
  },
  {
    title: "Plan the transition",
    description: "Sequence migration, security and continuity around your current environment.",
    icon: ArrowUpRight,
  },
  {
    title: "Operate with visibility",
    description: "Review resource usage, backups and recovery as cloud needs evolve.",
    icon: Gauge,
  },
];

export function CloudServiceDetailTemplate({ slug }: { slug: string }) {
  const data = getServiceDetailTemplateData("cloud-services", slug);

  return (
    <>
      <ServiceDetailHero
        data={data}
        theme="cloud"
        image="/images/visuals/cloud-server.jpg"
        imageAlt="Earth at night, illustrating connected cloud infrastructure."
        brandImage={cloudBrandImages[slug]}
        brandImageFit={slug === "alibaba-cloud" ? "wordmark" : "icon"}
        visualTitle="Cloud, connected."
        visualNote="Designed around your workloads."
        visualTags={["Cloud migration", "Data protection", "Recovery planning"]}
      />

      <SolutionPartnerStrip label="Cloud platforms and technology" brands={cloudPartners} />

      <ServiceOverviewSection
        data={data}
        theme="cloud"
        eyebrow="Cloud service overview"
        title="A cloud plan built around the way you work."
        description="Explore the service, understand what it covers, and see how it can fit into your wider cloud environment."
      />

      <section className="cloud-detail-journey px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SolutionSectionHeading
              eyebrow="A thoughtful cloud lifecycle"
              title="From first assessment to ongoing operations."
              description="Cloud services work best when platform choices, migration and day-to-day management are considered together."
            />
          </Reveal>
          <div className="cloud-journey-grid mt-12">
            {cloudJourney.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.08} className="h-full">
                  <article className="cloud-journey-card">
                    <div className="cloud-journey-card-topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Icon aria-hidden="true" />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <div className="cloud-journey-note">
            <Cloud aria-hidden="true" />
            <p>
              Cloud solutions can include public, private or hybrid environments, along with backup and disaster recovery.
            </p>
            <Database aria-hidden="true" />
            <RefreshCw aria-hidden="true" />
          </div>
        </div>
      </section>

      <ServiceCapabilitySection
        data={data}
        theme="cloud"
        eyebrow="Service capabilities"
        title="What this cloud service makes possible."
        description={`The capabilities below are shaped around ${data.service.title.toLowerCase()} and the requirements of your environment.`}
      />

      <ServiceSourceSections data={data} theme="cloud" />

      <ServiceBenefitsSection
        data={data}
        theme="cloud"
        eyebrow="Business outcomes"
        title="Cloud that supports the next step."
        description="Build for reliability and clarity, with a service scope shaped to your workloads and team."
      />

      <ServiceFaqSection data={data} />
      <ServiceRelatedSection data={data} />
      <SolutionCTA
        theme="cloud"
        eyebrow="Plan your next move"
        title={`Make ${data.service.title} work for your business.`}
        description="Talk with our UAE team about your workloads, priorities and the right next step."
      />
      <ServiceFaqSchema data={data} />
    </>
  );
}
