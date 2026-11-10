import {
  ArrowUpRight,
  Check,
  LockKeyhole,
  Mail,
  Network,
  Shield,
  ShieldCheck,
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

const securityGroups = groupServices("security");

const securityIcons: Record<string, LucideIcon> = {
  "o365-advance-threat-protection": Mail,
  "mimecast-dubai": Mail,
  "barracuda-email-security": Mail,
  "sophos-security-in-dubai": ShieldCheck,
  "ibm-mass-360": Network,
  "top-security-solutions-for-ransomware-dubai": Shield,
};

const securityPartners = [
  { name: "Microsoft 365", image: "/images/partners/microsoft.svg" },
  { name: "Sophos", image: "/images/partners/sophos.png" },
  { name: "Mimecast", image: "/images/partners/mimecast.png" },
  { name: "IBM MaaS360", image: "/images/category1/4prod3.png" },
  { name: "Barracuda" },
];

const protectionLayers = [
  {
    number: "01",
    title: "Email & collaboration",
    description:
      "Help identify phishing, malicious links, malware, and suspicious attachments before they reach your team.",
    icon: Mail,
  },
  {
    number: "02",
    title: "Network & devices",
    description:
      "Support safer access with firewall protection, endpoint security, and mobile device management.",
    icon: Network,
  },
  {
    number: "03",
    title: "Ransomware readiness",
    description:
      "Pair layered defences with recovery planning to help protect data and keep essential work moving.",
    icon: ShieldCheck,
  },
];

const securityApproach = [
  {
    title: "Understand your needs",
    description:
      "Start with your users, systems, and business requirements to shape the right security approach.",
    icon: LockKeyhole,
  },
  {
    title: "Layer the protection",
    description:
      "Bring together email, firewall, encryption, and device protection around your environment.",
    icon: ShieldCheck,
  },
  {
    title: "Keep improving",
    description:
      "Review policies and protection as your team, infrastructure, and risks evolve.",
    icon: Check,
  },
];

export function SecurityLanding() {
  return (
    <>
      <SolutionHero
        theme="security"
        eyebrow="Business security · Dubai & UAE"
        heading="Protect your business with leading security solutions."
        intro="Stay secure with solutions including Microsoft 365 Advanced Threat Protection, Sophos Security, and Barracuda Email Security."
        image="/images/visuals/it-infrastructure.jpg"
        imageAlt="Close-up of a computer circuit board representing connected business infrastructure"
        imageLabel="Security solutions"
        imageTitle="Protection at every layer"
        imageDescription="Email · network · devices"
        features={[
          { label: "Email protection", icon: Mail },
          { label: "Network security", icon: ShieldCheck },
          { label: "Device management", icon: Network },
        ]}
      />

      <SolutionPartnerStrip
        label="Security technologies we work with"
        brands={securityPartners}
      />

      <section id="overview" className="solution-section px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <Reveal>
            <SolutionSectionHeading
              eyebrow="Information security for your business"
              title="Security that fits the way your business works."
              description="Cyber threats and security breaches challenge every business. Rounak Computers provides information security solutions tailored to your requirements."
            />
          </Reveal>
          <Reveal delay={0.08} className="solution-security-overview">
            <p>
              Protect your data from online threats with firewalls, encryption,
              and proactive threat protection. Solutions include Sophos,
              Mimecast, and ransomware protection to support security and
              compliance needs.
            </p>
            <div className="solution-security-checklist">
              <p><Check aria-hidden="true" /> Email security and threat protection</p>
              <p><Check aria-hidden="true" /> Firewall and endpoint safeguards</p>
              <p><Check aria-hidden="true" /> Device management and recovery planning</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="solution-section solution-section--soft px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SolutionSectionHeading
              eyebrow="Leading security solutions"
              title="Protection for inboxes, networks, and devices."
              description="Explore the security services offered by Rounak Computers, from advanced email protection to firewall and ransomware solutions."
            />
          </Reveal>

          <div className="mt-14 flex flex-col gap-16">
            {securityGroups.map((group) => (
              <div key={group.group}>
                <div className="solution-group-heading">
                  <h3>{group.group}</h3>
                  <span>{String(group.items.length).padStart(2, "0")} solutions</span>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((service, index) => (
                    <SolutionServiceCard
                      key={service.slug}
                      service={service}
                      icon={securityIcons[service.slug] ?? ShieldCheck}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="protection" className="solution-section px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SolutionSectionHeading
              eyebrow="A layered approach"
              title="Information security, from the inbox out."
              description="Bring practical protections together across the parts of your business most exposed to threats."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {protectionLayers.map(({ number, title, description, icon: Icon }, index) => (
              <Reveal key={number} delay={index * 0.07} className="h-full">
                <article className="solution-protection-card h-full">
                  <div className="solution-protection-number">{number}</div>
                  <span className="solution-protection-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="solution-section solution-section--soft px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SolutionSectionHeading
              eyebrow="How we work"
              title="A thoughtful, practical security journey."
              description="The right security solution starts with understanding your business, then building protection that can evolve with it."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {securityApproach.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.08} className="h-full">
                <article className="solution-approach-card h-full">
                  <div className="solution-approach-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="solution-security-note mt-6">
            <span className="solution-security-note-icon" aria-hidden="true">
              <ShieldCheck />
            </span>
            <p>
              Security is a core focus across the services Rounak Computers
              implements and deploys.
            </p>
            <ArrowUpRight aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <SolutionCTA
        theme="security"
        eyebrow="Ready to start a conversation?"
        title="Let’s strengthen your business security."
        description="Talk with the Rounak Computers team about email, firewall, endpoint, or ransomware protection for your organization."
      />
    </>
  );
}
