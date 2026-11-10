import {
  ArrowUpRight,
  Cloud,
  Database,
  LifeBuoy,
  Layers3,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  SolutionCTA,
  SolutionHero,
  SolutionPartnerStrip,
  SolutionSectionHeading,
  SolutionServiceCard,
} from "@/components/solution-landing-primitives";
import { groupServices } from "@/lib/site";

const cloudGroups = groupServices("cloud-services");

const cloudIcons: Record<string, LucideIcon> = {
  "amazon-web-services": Cloud,
  "azure-cloud-services": Server,
  "alibaba-cloud": Layers3,
  "huawei-cloud-services": Workflow,
  "quality-ibm-watson-workspace-in-dubai": Cloud,
  "disaster-recovery-as-service-draas": RefreshCw,
  "best-solutions-to-backup-your-data": Database,
  "migration-services": ArrowUpRight,
};

const approachSteps = [
  {
    number: "01",
    title: "We understand",
    description:
      "We study your business objectives and recommend cloud options shaped around your requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "We deliver",
    description:
      "We plan and deploy cloud solutions with migration, monitoring, orchestration, and cost optimization in mind.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "We support",
    description:
      "Ongoing support and regular maintenance help keep your cloud environment stable as your business grows.",
    icon: LifeBuoy,
  },
];

const cloudPartners = [
  { name: "Amazon Web Services", image: "/images/partners/aws.svg" },
  { name: "Microsoft Azure", image: "/images/partners/microsoft.svg" },
  { name: "Alibaba Cloud", image: "/images/partners/alibaba-cloud.svg" },
  { name: "Huawei Cloud", image: "/images/partners/huawei.svg" },
];

export function CloudServicesLanding() {
  return (
    <>
      <SolutionHero
        theme="cloud"
        eyebrow="Cloud solutions · Dubai & UAE"
        heading="Cloud solutions in the UAE, built for what’s next."
        intro="Secure, scalable cloud services for businesses across Dubai and the UAE—from migration and backup to disaster recovery and managed platforms."
        image="/images/visuals/cloud-server.jpg"
        imageAlt="Earth at night, representing globally connected cloud infrastructure"
        imageLabel="Cloud infrastructure"
        imageTitle="A cloud built around your business"
        imageDescription="Migration · protection · recovery"
        features={[
          { label: "Cloud migration", icon: ArrowUpRight },
          { label: "Data protection", icon: ShieldCheck },
          { label: "Business continuity", icon: RefreshCw },
        ]}
      />

      <SolutionPartnerStrip
        label="Cloud platforms we work with"
        brands={cloudPartners}
      />

      <section id="overview" className="solution-section px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SolutionSectionHeading
              eyebrow="Cloud services in the UAE"
              title="A better cloud starts with a clear business goal."
              description="Rounak Computers delivers reliable, secure cloud solutions tailored to organizations in Dubai and across the region."
            />
          </Reveal>
          <Reveal delay={0.08} className="solution-overview-copy">
            <p>
              Improve your IT infrastructure, increase scalability, and keep
              systems performing reliably. Our specialists help businesses
              choose the right cloud approach and support digital transformation
              with AWS, Azure, Google Cloud, and more.
            </p>
            <p>
              From cloud migration and secure data backup to disaster recovery,
              we plan for flexibility, high availability, and business
              continuity at every stage.
            </p>
            <a className="solution-text-link" href="#services">
              Explore cloud services <ArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="services" className="solution-section solution-section--soft px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SolutionSectionHeading
              eyebrow="Our advanced cloud computing services"
              title="The right platform. A resilient plan."
              description="Explore cloud platforms and managed services that bring infrastructure, data protection, and recovery together."
            />
          </Reveal>

          <div className="mt-14 flex flex-col gap-16">
            {cloudGroups.map((group) => (
              <div key={group.group}>
                <div className="solution-group-heading">
                  <h3>{group.group}</h3>
                  <span>{String(group.items.length).padStart(2, "0")} solutions</span>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {group.items.map((service, index) => (
                    <SolutionServiceCard
                      key={service.slug}
                      service={service}
                      icon={cloudIcons[service.slug] ?? Cloud}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="solution-section px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SolutionSectionHeading
              eyebrow="Our approach to cloud solutions"
              title="From first conversation to ongoing support."
              description="Proven methods and experienced specialists make cloud implementation straightforward and effective."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {approachSteps.map(({ number, title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.08} className="h-full">
                <article className="solution-approach-card h-full">
                  <div className="solution-approach-topline">
                    <span>{number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="solution-cloud-focus mt-6">
            <div className="solution-cloud-focus-copy">
              <p className="solution-eyebrow">Business continuity, built in</p>
              <h3>Plan for the move—and for what comes after.</h3>
              <p>
                Combine migration, encrypted backup, and disaster recovery into
                one cloud strategy designed to help reduce downtime and protect
                critical information.
              </p>
            </div>
            <div className="solution-cloud-focus-flow" aria-label="Plan, protect, recover">
              <span><Search aria-hidden="true" /> Plan</span>
              <i aria-hidden="true" />
              <span><Database aria-hidden="true" /> Protect</span>
              <i aria-hidden="true" />
              <span><RefreshCw aria-hidden="true" /> Recover</span>
            </div>
          </Reveal>
        </div>
      </section>

      <SolutionCTA
        theme="cloud"
        eyebrow="Ready to start a conversation?"
        title="Let’s find the right cloud path for your business."
        description="Talk with the Rounak Computers team about cloud services, migration, backup, or disaster recovery in the UAE."
      />
    </>
  );
}
