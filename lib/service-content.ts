import type { CategorySlug } from "@/lib/site";

type ServiceFeature = { title: string; text: string };
type ServiceFaq = { q: string; a: string };

export type ServiceDetail = {
  tagline: string;
  overview: string;
  features: ServiceFeature[];
  benefits: string[];
  faqs: ServiceFaq[];
};

export const categoryContent: Record<
  Exclude<CategorySlug, "products">,
  {
    headline: string;
    intro: string;
    benefitsTitle: string;
    benefits: string[];
    cta: string;
  }
> = {
  "it-services": {
    headline: "IT that keeps your business moving.",
    intro:
      "From day-to-day support and managed IT to cabling and licensing, get practical technology services backed by engineers who understand your business.",
    benefitsTitle: "A dependable partner for your IT",
    benefits: [
      "One team for support, infrastructure and licensing",
      "Recommendations based on your users and business needs",
      "Planned maintenance that helps prevent avoidable disruption",
      "Clear communication from assessment through ongoing support",
    ],
    cta: "Tell us what your team needs. We will help you find the right level of IT support.",
  },
  "cloud-services": {
    headline: "Cloud, planned around your business.",
    intro:
      "Choose, migrate and manage cloud platforms with a clear view of performance, security, resilience and cost, supported by a team based in the UAE.",
    benefitsTitle: "Make cloud work for your business",
    benefits: [
      "Choose platforms and services to fit real workloads",
      "Plan migrations around dependencies and business continuity",
      "Keep costs visible with monitoring and regular reviews",
      "Build backup and recovery into your cloud operations",
    ],
    cta: "Share your cloud goals with our team and plan a practical next step.",
  },
  security: {
    headline: "Security built into how your business works.",
    intro:
      "Protect email, devices and business information with layered security solutions selected for your environment and supported beyond deployment.",
    benefitsTitle: "A more resilient security posture",
    benefits: [
      "Address email, endpoint and network risks together",
      "Match controls to your people, devices and working patterns",
      "Make security easier to operate with clear ownership",
      "Review and improve your protections as your business changes",
    ],
    cta: "Talk to a security specialist about your priorities and current setup.",
  },
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "structured-cabling-company-dubai": {
    tagline: "Structured cabling designed and installed for dependable connectivity.",
    overview:
      "A reliable network starts with a well-planned physical layer. We survey your site, design cable routes and install a labelled infrastructure that supports your current users and future growth.",
    features: [
      { title: "Site survey and design", text: "Review floor plans, work areas, equipment rooms and capacity requirements before installation." },
      { title: "Professional installation", text: "Install structured copper and fibre cabling with organised routes and suitable termination points." },
      { title: "Testing and documentation", text: "Test installed links and provide clear labelling and records for easier troubleshooting." },
      { title: "Expansion and remediation", text: "Add network points, tidy existing cabling or plan upgrades with minimal disruption." },
    ],
    benefits: ["Consistent connectivity for users and devices", "A cleaner, easier-to-maintain cable infrastructure", "Capacity planned for office moves and expansion", "A single team for survey, installation and handover"],
    faqs: [
      { q: "Can you survey our office before quoting?", a: "Yes. A site survey helps confirm the number and location of outlets, cable routes and any access requirements." },
      { q: "Do you test and label the cabling?", a: "We test installed links and label outlets so your team can identify connections more easily." },
      { q: "Can you work around a live office?", a: "We can plan installation phases and working hours around your operations, subject to the site requirements." },
    ],
  },
  "comprehensive-it-managed-services-dubai": {
    tagline: "A joined-up managed IT service for your people and infrastructure.",
    overview:
      "Bring support, monitoring and technology planning together with a service designed around how your organisation operates. We work with your team to make IT more predictable and easier to manage.",
    features: [
      { title: "Service assessment", text: "Review your users, devices, infrastructure and current support processes to establish priorities." },
      { title: "Monitoring and maintenance", text: "Keep an eye on supported systems and schedule routine maintenance to reduce avoidable issues." },
      { title: "User support", text: "Give staff a clear route to get help with everyday technology problems and requests." },
      { title: "Planning and reporting", text: "Review recurring issues, upcoming changes and practical improvement opportunities." },
    ],
    benefits: ["A consistent support experience for employees", "Better visibility of IT issues and recurring needs", "Planned maintenance and clearer ownership", "IT guidance aligned with business priorities"],
    faqs: [
      { q: "What is included in managed IT services?", a: "The scope is agreed around your environment and may include user support, monitoring, maintenance and technology planning." },
      { q: "Can you support a hybrid workforce?", a: "Yes. We can plan support for office-based, remote and hybrid users based on the systems your team uses." },
      { q: "Can you take over from our current IT provider?", a: "We can review your setup and plan a structured handover, including access, documentation and open support items." },
    ],
  },
  "managed-it-services": {
    tagline: "Proactive IT support that helps your team stay productive.",
    overview:
      "Move beyond reactive fixes with support that combines a responsive helpdesk, system monitoring and regular maintenance. Choose a service scope that fits your users and infrastructure.",
    features: [
      { title: "Helpdesk support", text: "Give employees a straightforward way to report problems and request assistance." },
      { title: "Infrastructure monitoring", text: "Monitor agreed systems for availability and issues that may need attention." },
      { title: "Routine maintenance", text: "Plan updates, health checks and preventative work for supported devices and systems." },
      { title: "Service reviews", text: "Use support trends and business changes to prioritise the next improvements." },
    ],
    benefits: ["Faster access to technical assistance", "Fewer surprises through preventative attention", "A defined support scope and escalation path", "Support that can scale as your team changes"],
    faqs: [
      { q: "Do you provide both remote and on-site support?", a: "Support can combine remote assistance with on-site visits where the issue or agreed service scope requires them." },
      { q: "Can you support our existing systems?", a: "We begin by assessing your systems, access and documentation, then confirm what can be supported and any prerequisites." },
      { q: "How is the monthly service scoped?", a: "We review users, locations, supported systems and service expectations before proposing a suitable plan." },
    ],
  },
  "it-amc-services-get-it-annual-maintenance-contract": {
    tagline: "Planned IT maintenance and support under a clear annual agreement.",
    overview:
      "An annual maintenance contract gives your organisation a defined way to request assistance and maintain covered IT systems. We shape the agreement around your equipment, locations and support needs.",
    features: [
      { title: "Coverage review", text: "Document the equipment, sites and services included in your maintenance agreement." },
      { title: "Preventative maintenance", text: "Schedule checks and routine work to help keep covered systems in good condition." },
      { title: "Incident response", text: "Provide a clear contact and escalation process for issues affecting covered services." },
      { title: "Renewal and improvement planning", text: "Review changing equipment, recurring faults and upcoming requirements before renewal." },
    ],
    benefits: ["Defined coverage and support expectations", "Planned attention for critical infrastructure", "A single point of contact for covered IT", "Better visibility of maintenance needs and renewals"],
    faqs: [
      { q: "What equipment can an IT AMC cover?", a: "Coverage can include agreed user devices, servers, network equipment and other IT systems after an initial review." },
      { q: "Can an AMC include on-site visits?", a: "Yes. Visit frequency and response arrangements can be included in the scope agreed for your organisation." },
      { q: "Can we include more than one office?", a: "Yes. We can assess each location and define the equipment and service requirements for each site." },
    ],
  },
  "expert-it-support-services-dubai": {
    tagline: "Practical remote and on-site IT support when your team needs it.",
    overview:
      "Help your employees resolve day-to-day technology issues with access to experienced support. We troubleshoot problems, explain next steps and escalate issues that need deeper investigation.",
    features: [
      { title: "User and device support", text: "Assist with common workstation, account, software and connectivity problems." },
      { title: "Remote troubleshooting", text: "Resolve suitable issues remotely and keep users informed as work progresses." },
      { title: "On-site assistance", text: "Arrange in-person support for problems that require access to your office or equipment." },
      { title: "Issue follow-up", text: "Record outcomes and identify recurring problems that may need a longer-term fix." },
    ],
    benefits: ["A clear route for staff to request help", "Less time lost to everyday technical issues", "Remote and on-site assistance options", "Support from a team familiar with business IT"],
    faqs: [
      { q: "Can I request one-time IT support?", a: "Yes. Contact us with the issue and your location so we can assess the right support option." },
      { q: "Do you help with office network problems?", a: "Yes. We can investigate connectivity issues across user devices, Wi-Fi and network equipment." },
      { q: "Can you support a whole office?", a: "We can review your user count, sites and systems and recommend an ongoing support arrangement if needed." },
    ],
  },
  "structured-cabling": {
    tagline: "Clean, organised network cabling for offices and technical spaces.",
    overview:
      "Well-organised cabling makes networks easier to support and expand. We help install and improve network points, patching and cable routes for offices, server rooms and commercial spaces.",
    features: [
      { title: "Network point installation", text: "Plan and install outlets where users, access points and equipment need reliable connections." },
      { title: "Rack and patching organisation", text: "Improve patch-panel layouts and cable management for easier maintenance." },
      { title: "Cable testing", text: "Check installed links and identify faults that may affect network performance." },
      { title: "Moves and changes", text: "Relocate or add connections as your office layout and equipment change." },
    ],
    benefits: ["Easier identification of network connections", "Fewer untidy or undocumented cable runs", "A more maintainable office network", "Installation planned around your site"],
    faqs: [
      { q: "Can you add network points to an existing office?", a: "Yes. We can survey the current layout and plan additional points and cable routes." },
      { q: "Do you organise server racks?", a: "We can assist with rack patching and cable management as part of a cabling or network project." },
      { q: "Can cabling work be done after hours?", a: "Working hours can be discussed during planning to reduce disruption to your staff." },
    ],
  },
  spla: {
    tagline: "Microsoft SPLA guidance for service providers and hosted environments.",
    overview:
      "Understand how Microsoft Services Provider License Agreement requirements relate to your hosted services. Get help reviewing your environment, licensing needs and reporting process.",
    features: [
      { title: "Licensing requirement review", text: "Map the Microsoft software and hosted services in scope to your service model." },
      { title: "Usage and reporting guidance", text: "Clarify the information needed to track and report eligible usage." },
      { title: "Deployment planning", text: "Align licensing decisions with the way customers access your hosted environment." },
      { title: "Ongoing review", text: "Revisit requirements as services, usage and Microsoft licensing terms change." },
    ],
    benefits: ["A clearer view of licensing obligations", "Support aligning licences to hosted services", "More consistent usage tracking", "A local point of contact for licensing questions"],
    faqs: [
      { q: "Who should consider SPLA?", a: "SPLA is intended for eligible service providers that license Microsoft software to provide hosted services to customers." },
      { q: "Can you review our current licensing setup?", a: "We can review the information you provide and discuss your environment and licensing questions." },
      { q: "Does SPLA cover every Microsoft product?", a: "Product eligibility and terms vary. Confirm current programme details and product use rights before making licensing decisions." },
    ],
  },
  "advanced-website-joomla-based-application": {
    tagline: "Business websites and web applications planned around real user needs.",
    overview:
      "Create or improve a website or web application with clear goals, maintainable implementation and a thoughtful user experience. We help define the scope from initial requirements through launch.",
    features: [
      { title: "Discovery and requirements", text: "Identify audiences, workflows, content needs and the outcomes the website should support." },
      { title: "Design and development", text: "Build responsive pages and application features shaped around the agreed scope." },
      { title: "Content and integrations", text: "Organise content and connect suitable business tools or data sources." },
      { title: "Launch and ongoing care", text: "Test key journeys, prepare deployment and plan maintenance after launch." },
    ],
    benefits: ["A website aligned with your business goals", "Responsive experiences across common devices", "A clear, maintainable project scope", "Support available beyond initial launch"],
    faqs: [
      { q: "Can you update an existing website?", a: "Yes. We can assess your current website and recommend a focused redesign, technical update or new functionality." },
      { q: "Do you build web applications as well as websites?", a: "Yes. We can discuss workflows and application requirements and confirm a suitable project scope." },
      { q: "Can you help after the site launches?", a: "Ongoing updates and support can be discussed as part of the project or a separate maintenance arrangement." },
    ],
  },
  "amazon-web-services": {
    tagline: "AWS cloud services designed for your workloads and operating model.",
    overview:
      "Plan and manage AWS environments with attention to architecture, access, resilience and spend. Whether you are starting a new deployment or reviewing an existing account, begin with your workload requirements.",
    features: [
      { title: "AWS architecture", text: "Plan compute, storage, network and identity services for your business workloads." },
      { title: "Cloud migration", text: "Assess dependencies and move suitable applications and data in planned stages." },
      { title: "Security and operations", text: "Review access, monitoring, backup and operational responsibilities." },
      { title: "Cost visibility", text: "Set budgets and review resource usage to identify opportunities for right-sizing." },
    ],
    benefits: ["Architecture based on workload needs", "Planned transitions from on-premises or other cloud platforms", "Better visibility of usage and spend", "Ongoing management options after deployment"],
    faqs: [
      { q: "Can you help us move existing systems to AWS?", a: "Yes. We can assess applications, dependencies and recovery needs before recommending a migration approach." },
      { q: "Can you review an existing AWS account?", a: "We can review the areas in scope, such as architecture, security configuration, operations and cost visibility." },
      { q: "How do we keep AWS costs under control?", a: "Budgets, usage monitoring, resource tagging and regular right-sizing reviews help make spend more visible." },
    ],
  },
  "azure-cloud-services": {
    tagline: "Microsoft Azure services for secure, connected business workloads.",
    overview:
      "Use Azure to support cloud and hybrid workloads with a plan for identity, networking, security, continuity and cost. We help shape the environment and support it as your needs evolve.",
    features: [
      { title: "Azure design and setup", text: "Plan subscriptions, resource organisation, networking and access for your environment." },
      { title: "Hybrid connectivity", text: "Connect suitable on-premises systems and cloud services around your workload needs." },
      { title: "Migration and modernisation", text: "Assess applications and move or improve them in manageable stages." },
      { title: "Management and optimisation", text: "Monitor resources, review usage and plan maintenance for deployed services." },
    ],
    benefits: ["A cloud foundation aligned to Microsoft technologies", "A structured approach to hybrid environments", "Security and continuity considered from the outset", "Ongoing visibility of usage and cost"],
    faqs: [
      { q: "Can Azure work with our on-premises servers?", a: "Yes. Azure supports hybrid architectures, and we can assess connectivity and workload requirements." },
      { q: "Can you migrate Microsoft workloads to Azure?", a: "We can review your applications and plan a phased migration or modernisation approach." },
      { q: "Do you provide ongoing Azure management?", a: "Ongoing monitoring, maintenance and cost reviews can be included in an agreed service scope." },
    ],
  },
  "alibaba-cloud": {
    tagline: "Alibaba Cloud services for regional reach, data and digital workloads.",
    overview:
      "Assess Alibaba Cloud services for applications that need scalable infrastructure, data capabilities or access to regional markets. Plan the architecture, security and operations before deployment.",
    features: [
      { title: "Platform assessment", text: "Review your workload, users, data location and regional requirements." },
      { title: "Cloud architecture", text: "Plan compute, storage and networking services around application needs." },
      { title: "Migration and deployment", text: "Prepare deployment steps, test dependencies and move workloads in stages." },
      { title: "Operations and cost review", text: "Set responsibilities for monitoring, backup, security and resource usage." },
    ],
    benefits: ["Platform selection based on business and regional needs", "Architecture planned for the workloads in scope", "Migration steps with dependencies considered", "An operational plan beyond initial deployment"],
    faqs: [
      { q: "Can Alibaba Cloud support our existing applications?", a: "Suitability depends on application architecture, integrations, user locations and data requirements; an assessment can clarify options." },
      { q: "Can you help migrate services to Alibaba Cloud?", a: "Yes. We can review dependencies and create a phased migration and testing plan." },
      { q: "Can Alibaba Cloud be part of a multi-cloud setup?", a: "It can be considered alongside other platforms where there is a clear business or technical reason and an operating plan." },
    ],
  },
  "huawei-cloud-services": {
    tagline: "Huawei Cloud planning, deployment and management for business workloads.",
    overview:
      "Explore Huawei Cloud services for infrastructure, data and application workloads. We help assess fit, plan the environment and establish security and operating practices.",
    features: [
      { title: "Workload and platform assessment", text: "Understand workload requirements, user locations, integrations and service expectations." },
      { title: "Environment design", text: "Plan cloud resources, network access and identity around the intended use." },
      { title: "Deployment and migration", text: "Prepare implementation steps and test applications as services are introduced." },
      { title: "Ongoing operations", text: "Define monitoring, backup, access reviews and cost management responsibilities." },
    ],
    benefits: ["A considered platform fit assessment", "Deployment shaped around your workloads", "Security and operations planned alongside infrastructure", "Support for future changes and optimisation"],
    faqs: [
      { q: "Can you help assess whether Huawei Cloud is right for us?", a: "Yes. We can discuss workload requirements, regions, integrations and operational considerations." },
      { q: "Can you help with deployment and migration?", a: "We can plan deployment stages, review dependencies and coordinate testing and handover." },
      { q: "Do you support Huawei Cloud after setup?", a: "Ongoing operational support can be scoped around your environment and internal capabilities." },
    ],
  },
  "quality-ibm-watson-workspace-in-dubai": {
    tagline: "IBM cloud and AI workspace guidance for connected business workflows.",
    overview:
      "Evaluate IBM collaboration and AI workspace capabilities in the context of your existing tools, information access and user workflows. Begin with the intended business use and platform availability.",
    features: [
      { title: "Use-case discovery", text: "Identify teams, collaboration needs and workflows that could benefit from connected tools." },
      { title: "Platform and integration review", text: "Assess available IBM services, integrations and compatibility with your environment." },
      { title: "Data and access planning", text: "Consider information permissions, user roles and governance requirements." },
      { title: "Adoption planning", text: "Prepare user guidance, testing and a measured rollout plan." },
    ],
    benefits: ["Use cases tied to real team needs", "Integrations assessed before rollout", "Data access and governance considered", "Adoption planned alongside technology"],
    faqs: [
      { q: "Can IBM workspace tools connect with our existing apps?", a: "Available integrations depend on the current products and your environment; we can review the requirements." },
      { q: "Can you help with AI and collaboration planning?", a: "Yes. We can help define use cases, review data access and plan a responsible adoption approach." },
      { q: "Are product names and availability subject to change?", a: "Yes. IBM product portfolios and service availability can change, so confirm current options during assessment." },
    ],
  },
  "disaster-recovery-as-service-draas": {
    tagline: "Cloud-based disaster recovery planned around recovery objectives.",
    overview:
      "Prepare for service disruption with a recovery plan that identifies critical workloads, acceptable recovery times and dependencies. DRaaS can provide a managed path to replicate and restore selected systems.",
    features: [
      { title: "Business impact and recovery objectives", text: "Identify critical systems, dependencies, recovery time and recovery point expectations." },
      { title: "Replication design", text: "Plan how selected workloads and data will be replicated to a recovery environment." },
      { title: "Failover planning", text: "Document decision points, responsibilities and steps to restore services during an incident." },
      { title: "Recovery testing", text: "Exercise the recovery process and update the plan based on test results." },
    ],
    benefits: ["Recovery priorities linked to business impact", "Documented roles and response steps", "A tested approach to restoring critical services", "Reduced uncertainty during disruptive incidents"],
    faqs: [
      { q: "What is the difference between DR and backup?", a: "Backups preserve recoverable copies of data; disaster recovery also plans how systems and services are restored and operated." },
      { q: "How quickly can systems be recovered?", a: "Recovery times depend on workload design, data replication, dependencies and agreed objectives; these should be tested." },
      { q: "How often should a recovery plan be tested?", a: "Test frequency should reflect system criticality and change. Important plans should be exercised regularly and after significant changes." },
    ],
  },
  "best-solutions-to-backup-your-data": {
    tagline: "Cloud backup designed to protect business data and support recovery.",
    overview:
      "Build a backup approach around the data you need to recover, how quickly you need it and how long it must be retained. Combine protected copies with regular restore testing.",
    features: [
      { title: "Data and retention assessment", text: "Identify important systems, data owners, recovery needs and retention requirements." },
      { title: "Backup architecture", text: "Plan backup schedules, destinations, access controls and storage capacity." },
      { title: "Monitoring and reporting", text: "Track backup jobs and investigate failures rather than assuming every copy is usable." },
      { title: "Restore testing", text: "Test selected restores to confirm that data can be recovered within expected timeframes." },
    ],
    benefits: ["Clearer visibility of backup coverage", "Retention aligned with business requirements", "Protected access to backup copies", "Confidence improved through restore testing"],
    faqs: [
      { q: "Does cloud backup replace disaster recovery?", a: "No. Backup protects recoverable data, while disaster recovery also addresses restoring services, infrastructure and dependencies." },
      { q: "How long should we keep backups?", a: "Retention depends on operational, contractual and regulatory requirements and should be defined with your data owners." },
      { q: "Do you test whether backups can be restored?", a: "Restore testing should be part of the plan. We can help define a schedule and test scope for the systems covered." },
    ],
  },
  "migration-services": {
    tagline: "Cloud migration planned to reduce risk and business disruption.",
    overview:
      "Move applications, data and infrastructure with a clear understanding of dependencies, owners and business impact. A phased migration gives your team time to validate each step.",
    features: [
      { title: "Discovery and dependency mapping", text: "Inventory workloads, integrations, data, users and technical prerequisites." },
      { title: "Migration strategy", text: "Choose an approach for each workload, from relocation to modernisation or replacement." },
      { title: "Phased execution", text: "Schedule migrations with acceptance checks, communications and rollback considerations." },
      { title: "Post-migration optimisation", text: "Validate performance, security, backup and cost after workloads are live." },
    ],
    benefits: ["Fewer surprises through upfront discovery", "A migration path matched to each workload", "Business continuity considered at each stage", "Validation and optimisation after cutover"],
    faqs: [
      { q: "How long does a cloud migration take?", a: "Timing depends on the number of workloads, complexity, data volume and testing requirements; discovery helps establish a realistic schedule." },
      { q: "Can we migrate in stages?", a: "Yes. Phased migrations can reduce risk and allow teams to validate the environment before moving additional workloads." },
      { q: "Will there be downtime?", a: "Some changes may require a maintenance window. The impact depends on the workload and chosen migration method and should be planned in advance." },
    ],
  },
  "o365-advance-threat-protection": {
    tagline: "Strengthen Microsoft 365 email protection against common threats.",
    overview:
      "Reduce exposure to phishing, malicious links and harmful attachments by reviewing email security controls, user reporting and response processes across your Microsoft 365 environment.",
    features: [
      { title: "Email protection review", text: "Assess relevant Microsoft 365 threat protection settings and how they apply to your users." },
      { title: "Phishing and link controls", text: "Review safeguards for suspicious messages, links and attachments based on available licences." },
      { title: "Reporting and response", text: "Make it easier for staff to report suspicious email and define follow-up responsibilities." },
      { title: "Configuration and guidance", text: "Apply agreed settings and provide practical guidance for administrators and users." },
    ],
    benefits: ["A clearer view of email security configuration", "More consistent handling of suspicious messages", "Controls aligned with available Microsoft licences", "Users who know how to report potential threats"],
    faqs: [
      { q: "Does Microsoft 365 include email security features?", a: "Microsoft provides security capabilities across its plans, but feature availability depends on your licence and configuration." },
      { q: "Can you review our current protection settings?", a: "Yes. We can assess the settings in scope and recommend changes based on your licences and requirements." },
      { q: "Can email security stop every phishing attempt?", a: "No security control catches everything. Technical protections, user reporting and incident response should work together." },
    ],
  },
  "mimecast-dubai": {
    tagline: "Mimecast email security and continuity solutions for business communication.",
    overview:
      "Assess Mimecast services for email threat protection, continuity and archiving needs. Plan implementation around your email platform, retention requirements and user workflows.",
    features: [
      { title: "Email security assessment", text: "Review current email risks, mail flow and the protections your organisation needs." },
      { title: "Deployment planning", text: "Plan configuration, mail routing, testing and user communication for implementation." },
      { title: "Continuity and archiving review", text: "Assess relevant continuity and retention requirements before selecting services." },
      { title: "Administration and review", text: "Establish ownership for policy changes, reporting and ongoing service checks." },
    ],
    benefits: ["Email protection considered with business workflows", "Deployment planned around mail flow", "Continuity and retention requirements reviewed", "Clearer administration after implementation"],
    faqs: [
      { q: "Can Mimecast work with Microsoft 365?", a: "Mimecast offers services that can be used with Microsoft 365; suitability and configuration depend on your requirements." },
      { q: "Can you migrate our email security to Mimecast?", a: "We can review your current mail flow and plan a controlled implementation and testing process." },
      { q: "Does Mimecast provide email archiving?", a: "Mimecast offers archiving services; confirm current product capabilities, retention and licensing against your needs." },
    ],
  },
  "barracuda-email-security": {
    tagline: "Barracuda email security to help protect users and business messages.",
    overview:
      "Review email protection needs across phishing, spam, malware and impersonation risks. We help assess Barracuda options and plan configuration around your mail platform.",
    features: [
      { title: "Threat and mail-flow review", text: "Understand how email enters and leaves your organisation and where controls are needed." },
      { title: "Protection configuration", text: "Plan filtering and policy settings for common email threats and business requirements." },
      { title: "User and administrator guidance", text: "Clarify how suspicious messages are reported, reviewed and escalated." },
      { title: "Ongoing policy review", text: "Revisit settings and reporting as threats, users and email practices change." },
    ],
    benefits: ["Layered controls for business email", "Configuration aligned with mail flow", "Clear reporting and escalation practices", "Ongoing review of protection policies"],
    faqs: [
      { q: "Can Barracuda protect Microsoft 365 email?", a: "Barracuda provides email security options for Microsoft 365 environments; confirm the specific service and configuration for your setup." },
      { q: "Can we keep our existing email platform?", a: "Email security services can often be deployed alongside existing platforms, subject to compatibility and configuration review." },
      { q: "Will a gateway prevent all malicious email?", a: "No filter is perfect. Combine technical controls with user awareness, reporting and an incident response process." },
    ],
  },
  "sophos-security-in-dubai": {
    tagline: "Sophos network and endpoint protection for a more manageable security posture.",
    overview:
      "Review network boundaries, user devices and administration practices to identify where Sophos security products may fit. Plan deployment and ongoing management around your environment.",
    features: [
      { title: "Environment and risk review", text: "Understand network layout, endpoints, remote access and current security operations." },
      { title: "Firewall and endpoint planning", text: "Select and configure appropriate network and device protection for the agreed scope." },
      { title: "Policy and visibility", text: "Set clear policies and review available alerts and reporting for administrators." },
      { title: "Updates and support", text: "Plan maintenance, policy updates and escalation for potential security events." },
    ],
    benefits: ["Network and endpoint needs considered together", "Security policies suited to your environment", "Clearer visibility for administrators", "Support for ongoing configuration and maintenance"],
    faqs: [
      { q: "Can Sophos protect both our network and laptops?", a: "Sophos offers firewall and endpoint products; the right combination depends on your requirements and licensing." },
      { q: "Can you replace or configure our existing firewall?", a: "We can assess your network and plan a deployment or replacement, including connectivity and change requirements." },
      { q: "Do you offer ongoing Sophos support?", a: "Ongoing monitoring, updates and support can be included in a service scope agreed for your environment." },
    ],
  },
  "ibm-mass-360": {
    tagline: "IBM MaaS360 endpoint management for business devices and users.",
    overview:
      "Manage mobile and endpoint devices with policies that reflect how employees work. Review device types, ownership, access needs and support processes before rolling out management controls.",
    features: [
      { title: "Device and user assessment", text: "Inventory supported devices, user groups, ownership models and access requirements." },
      { title: "Policy design", text: "Plan enrolment, configuration, application and security policies for device groups." },
      { title: "Deployment and onboarding", text: "Roll out management in stages and guide users through device enrolment." },
      { title: "Lifecycle and compliance review", text: "Define processes for lost devices, staff changes, policy exceptions and device retirement." },
    ],
    benefits: ["More consistent device configuration", "Clearer separation of work access and device ownership", "A defined response for lost or retired devices", "Improved visibility of managed endpoints"],
    faqs: [
      { q: "Can MaaS360 manage employee-owned devices?", a: "Personal-device management options depend on platform support and policy choices; privacy and employee communication should be considered." },
      { q: "Can we manage both phones and computers?", a: "MaaS360 supports endpoint management use cases; confirm current platform coverage and features for your device mix." },
      { q: "Can you help with device enrolment?", a: "Yes. We can plan enrolment groups, policies and user guidance for a phased rollout." },
    ],
  },
  "top-security-solutions-for-ransomware-dubai": {
    tagline: "Reduce ransomware risk with layered prevention and recovery planning.",
    overview:
      "Ransomware readiness combines identity protection, secure systems, user awareness, monitoring and tested recovery. We help identify practical improvements across prevention, response and restoration.",
    features: [
      { title: "Exposure and readiness review", text: "Review identity, endpoints, email, network access and existing recovery arrangements." },
      { title: "Preventative controls", text: "Prioritise configuration, updates, access restrictions and user practices that reduce exposure." },
      { title: "Detection and response planning", text: "Clarify how suspicious activity is reported, assessed and escalated." },
      { title: "Recovery and restore testing", text: "Review protected backups and test restoration steps for critical services." },
    ],
    benefits: ["Security improvements prioritised by business impact", "Prevention and recovery considered together", "Clear incident roles and escalation steps", "More confidence from tested recovery procedures"],
    faqs: [
      { q: "Can ransomware be completely prevented?", a: "No single solution can guarantee prevention. Layered controls and a tested recovery plan help reduce risk and limit impact." },
      { q: "Are backups enough to recover from ransomware?", a: "Backups are essential but should be protected, monitored and tested; recovery also depends on systems, access and business processes." },
      { q: "Can you help us create an incident response plan?", a: "Yes. We can help define contacts, escalation steps, recovery priorities and responsibilities for your environment." },
    ],
  },
  "guaranteed-information-security-in-dubai": {
    tagline: "Information security guidance for people, processes and technology.",
    overview:
      "Build a practical security programme around the information your business relies on. Identify priorities, strengthen controls and clarify responsibilities as your organisation changes.",
    features: [
      { title: "Security posture review", text: "Discuss your environment, information risks and existing security practices." },
      { title: "Policy and access guidance", text: "Review practical controls for user access, information handling and operational responsibilities." },
      { title: "Technical security planning", text: "Identify improvements across endpoints, email, networks and cloud services." },
      { title: "Improvement roadmap", text: "Prioritise recommendations into manageable actions with clear ownership." },
    ],
    benefits: ["A broader view of information security risks", "Prioritised actions instead of disconnected tools", "Clearer ownership across teams", "A roadmap that can evolve with your business"],
    faqs: [
      { q: "What does information security cover?", a: "It includes the people, processes and technologies used to protect business information from unauthorised access, loss or disruption." },
      { q: "Can you assess our current security setup?", a: "We can review the areas in scope and help identify practical improvements based on your business and systems." },
      { q: "Can you help us work toward a compliance requirement?", a: "We can discuss technical and operational readiness; formal certification or legal advice may require a qualified independent assessor." },
    ],
  },
};

export function getServiceDetail(slug: string) {
  return serviceDetails[slug];
}
