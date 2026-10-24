export const IMG = "/images";

export type Card = { title: string; href: string; image: string; text?: string };

export const heroSlides = [
  { title: "Innovative IT Solutions to Empower Your Business", text: "Explore our range of products, including Microsoft Copilot, CCTV Solutions, and more, to enhance your business operations.", cta: "View Products", href: "/products" },
  { title: "Comprehensive IT Services for Seamless Operations", text: "From structured cabling to managed IT services, we provide expert support to ensure your business runs smoothly.", cta: "View IT Services", href: "/it-services" },
  { title: "Transform Your Business with Advanced Cloud Solutions", text: "Leverage the power of AWS, Azure, and more with our cloud services, designed for data backup, migration, and disaster recovery.", cta: "View Cloud Services", href: "/cloud-services" },
  { title: "Protect Your Business with Leading Security Solutions", text: "Stay secure with top-tier solutions like O365 Advanced Threat Protection, Sophos Security, and Barracuda Email Security.", cta: "View Security Solutions", href: "/security" },
];

export const aboutText = {
  who: "For over 20 years, Rounak Computers LLC has been a trusted provider of IT sales and services in Dubai, recognized as a Microsoft Gold Partner in Cloud Productivity. We have built a solid reputation by offering a wide range of services, including structured cabling, CCTV, Managed IT Services, Onsite support, and AMC services for critical IT infrastructure. We also provide rental solutions for PCs, laptops, and projectors for events. Many of our clients have been with us since the beginning, and we pride ourselves on addressing every customer's needs, no matter the size of the deal, across sectors like healthcare, education, government, manufacturing, and more. We only procure products from authorized distributors, maintaining strong partnerships with leading brands like Microsoft, HP, Dell, Lenovo, and Sophos. Since 2014, we have expanded into cloud services, offering solutions like Microsoft Office 365, Azure, and seamless migrations with zero downtime. Our certified team of professionals is continuously trained to deliver cutting-edge IT solutions, ensuring that we meet the evolving needs of our clients.",
  what: "As a certified Microsoft Cloud Partner, Rounak Computers offers expert solutions for migrating, implementing, and managing your business in the cloud. Our deep expertise in Microsoft technologies like Office 365, Azure, and Dynamics 365 ensures seamless integration, enhanced productivity, and secure cloud operations. Let us help you unlock the full potential of Microsoft's cloud services to drive efficiency and growth for your business.",
  sapUrl: "https://portal.us.bn.cloud.ariba.com/profile/public?anId=AN01048320127&sourceApplication=SBN",
};

const c1 = `${IMG}/category1`;

export const products: Card[] = [
  { title: "Microsoft Copilot", href: "/products/microsoft-copilot", image: `${c1}/prod6.png` },
  { title: "Microsoft Dynamics", href: "/products/microsoft-dynamics", image: `${c1}/prod5.png` },
  { title: "Microsoft Azure Services", href: "/products/microsoft-azure-services", image: `${c1}/prod10.png` },
  { title: "Microsoft 365", href: "/products/microsoft-365", image: `${c1}/prod4.png` },
  { title: "Telephony Solutions", href: "/products/telephony", image: `${c1}/prod2.png` },
  { title: "CCTV Solutions", href: "/products/cctv-solutions", image: `${c1}/prod9.png` },
  { title: "Computer Sales & Services", href: "/products/computer-sales-services", image: `${c1}/prod7.png` },
  { title: "Professional CCTV Installation", href: "/products/professional-cctv-installation-company-in-dubai", image: `${c1}/prod8.png` },
];

export const itServices: Card[] = [
  { title: "Structured Cabling", href: "/it-services/structured-cabling", image: `${c1}/prod1-2.png` },
  { title: "IT AMC Services", href: "/it-services/it-amc-services-get-it-annual-maintenance-contract", image: `${c1}/prod4-2.png` },
  { title: "Managed IT Services", href: "/it-services/managed-it-services", image: `${c1}/prod8-2.png` },
  { title: "SPLA", href: "/it-services/spla", image: `${c1}/prod6-2.png` },
  { title: "Structured Cabling Company", href: "/it-services/structured-cabling-company-dubai", image: `${c1}/prod3-2.png` },
  { title: "Expert IT Support", href: "/it-services/expert-it-support-services-dubai", image: `${c1}/prod5-2.png` },
  { title: "IT Managed Services", href: "/it-services/comprehensive-it-managed-services-dubai", image: `${c1}/prod2-2.png` },
  { title: "Advanced Joomla Website & Apps", href: "/it-services/advanced-website-joomla-based-application", image: `${c1}/prod9-2.png` },
];

export const cloud = {
  intro: "Rounak Computers offers reliable and secure cloud solutions in UAE, tailored to the needs of companies in Dubai and across the region. As one of the leading cloud service providers in Dubai, we help organizations improve their IT infrastructure, increase scalability, and ensure stable system performance. If you need cloud solutions in Dubai or expert advice, our specialists will support the digital transformation processes. The experience gained over the years as one of the recognized IT maintenance companies in Dubai allows us to implement effective cloud computing strategies that increase flexibility, innovation and business productivity.",
  subintro: "We offer a wide range of services, from disaster recovery and cloud migration to secure data backup. Using platforms such as AWS, Azure, and Google Cloud, we are building a scalable and productive infrastructure. As experienced cloud service providers in UAE, we pay special attention to business continuity, compliance with standards and high availability of solutions.",
  cards: [
    { title: "Amazon Web Services Cloud Solutions in Dubai", href: "/cloud-services/amazon-web-services", image: `${c1}/3prod2.png`, text: "AWS enables companies to deploy scalable UAE cloud solutions with flexible computing power, secure data storage, and advanced networking features. Organizations reduce infrastructure costs while maintaining a high level of security and global reach." },
    { title: "Microsoft Azure in Dubai", href: "/cloud-services/azure-cloud-services", image: `${c1}/3prod3.png`, text: "Azure provides the enterprise layer of cloud services Dubai with integrated capabilities for analytics, databases and networks. The platform supports hybrid and multi-cloud scenarios, increases business flexibility and ensures compliance. As trusted cloud service providers in Dubai, we integrate these technologies into your workflows." },
    { title: "Disaster Recovery (DRaaS) in Dubai", href: "/cloud-services/disaster-recovery-as-service-draas", image: `${c1}/3prod4.png`, text: "Our DRaaS solutions help companies maintain business continuity by replicating data and applications in the cloud. Fast failover and scalable architecture minimize downtime and protect critical resources." },
    { title: "Migration Services", href: "/cloud-services/migration-services", image: `${c1}/3prod5.png`, text: "Professional cloud migration services allow you to transfer workloads to the cloud with minimal risk. We ensure smooth migration of data and applications using IaaS, PaaS and SaaS models to optimize IT resources." },
    { title: "Data Backup", href: "/cloud-services/best-solutions-to-backup-your-data", image: `${c1}/3prod6.png`, text: "Reliable and encrypted cloud backup solutions protect corporate information from hardware failures, cyber attacks, and unforeseen threats. Automatic processes preserve the integrity and confidentiality of data." },
    { title: "Cloud Services in the UAE", href: "/cloud-services", image: `${c1}/3prod1.png`, text: "Modern cloud solutions in UAE provide companies with flexible and cost-effective infrastructure. We offer virtualization, DevOps support, disaster recovery, and edge server solutions to enhance efficiency and scalability." },
    { title: "IBM Watson Workspace", href: "/cloud-services/quality-ibm-watson-workspace-in-dubai", image: `${c1}/3prod7.png`, text: "IBM Watson Workspace is a cloud-based collaboration platform with artificial intelligence support. It integrates with enterprise applications, improves communication, and automates processes, helping companies make more accurate decisions." },
    { title: "Huawei Cloud Services", href: "/cloud-services/huawei-cloud-services", image: `${c1}/3prod8.png`, text: "Huawei Cloud includes solutions in the field of big data, AI and high-performance computing. The highly secure cloud architecture supports digital transformation processes and helps optimize business performance in Dubai." },
    { title: "Alibaba Cloud", href: "/cloud-services/alibaba-cloud", image: `${IMG}/2026/02/17/alibaba-cloud-logo.webp`, text: "Reliable and scalable cloud storage solutions from Alibaba Cloud protect your corporate data with built-in security and automatic backup features." },
  ] as Card[],
};

export const security: Card[] = [
  { title: "Advance Threat Protection", href: "/security/o365-advance-threat-protection", image: `${c1}/4prod4.png` },
  { title: "Sophos Security in Dubai", href: "/security/sophos-security-in-dubai", image: `${c1}/4prod1.png` },
  { title: "IBM MASS 360", href: "/security/ibm-mass-360", image: `${c1}/4prod3.png` },
  { title: "Mimecast Dubai", href: "/security/mimecast-dubai", image: `${c1}/4prod2.png` },
  { title: "Top Security Solutions", href: "/security/top-security-solutions-for-ransomware-dubai", image: `${c1}/4prod7.png` },
  { title: "Barracuda Email Security", href: "/security/barracuda-email-security", image: `${c1}/4prod5.png` },
  { title: "Guaranteed Information Security", href: "/security/guaranteed-information-security-in-dubai", image: `${c1}/4prod6.png` },
];

export const approach = {
  intro: "At Rounak Computers, we combine the experience of working with UAE cloud services and managed IT services, ensuring growth and stability for enterprises. Proven methods and certified experts make implementation simple and effective.",
  steps: [
    { title: "We Understand", text: "We study business objectives and offer suitable options. If you are looking for cloud service providers in Dubai or flexible cloud services in Dubai, we will select the best technologies." },
    { title: "We Deliver", text: "Our cloud solutions in Dubai deployment projects include monitoring, orchestration and optimization tools to reduce costs and increase efficiency." },
    { title: "We Support", text: "Round-the-clock support from experienced cloud service providers in UAE ensures smooth operation. We guarantee compliance with standards, regular maintenance and confidence in the stability of your processes." },
  ],
};

export const aiSeal = {
  title: "Recognized for Excellence in AI by the Government of Dubai",
  paragraphs: [
    "We're proud to share that Rounak Computers has been awarded the Dubai AI Seal by the Government of Dubai during the Dubai AI Week on 21 April 2025.",
    "Out of 325 companies certified across the UAE, we are honored to be named one of just nine recipients. Rounak received the award under the Small Enterprises category (tier not assigned yet). This recognition reflects our team's continued focus on building responsible, high-impact AI solutions that contribute to meaningful digital transformation.",
    "Thank you to our partners, customers, and the broader community for your ongoing support.",
  ],
};

// NOTE: on the live site the Google reviewer names look duplicated, so the first
// three are shown without names. Add the right names once you confirm them.
export const reviews = [
  { source: "Google", author: "Google reviewer", text: "Our Office 365 was formerly hosted by GoDaddy, and Rounak Computers provided invaluable assistance during our migration from GoDaddy to Office 365. We received excellent support, and we extend our gratitude to Mr. Safuvan for his assistance." },
  { source: "Google", author: "Google reviewer", text: "Rounak Computers has been instrumental in transforming our business operations. Their expertise in implementing advanced technologies and their commitment to customer satisfaction have made a significant impact on our productivity and efficiency. The team's professionalism and dedication to delivering outstanding results are truly commendable." },
  { source: "Google", author: "Google reviewer", text: "One of best cloud service provider in EMEA region with highly trained certified engineers team from Pre Sales or Post Sales." },
  { source: "GoodFirms", author: "Arun Raj", text: "I have been working with prem and Karthik for a long time. They are really wonderful persons in terms of technical and personal. The company is sound in Cloud Solutions, AI, black chain and Dev Ops. They are always accessible at any time. They monitor my services and provide alerts when we have security issues. Overall they are perfect for my cloud needs and money." },
  { source: "GoodFirms", author: "Ashino Thomas", text: "It's been 5 years since I am dealing with them. The entire Rounak team is capable to guide and suggest the right product as per the customer's requirement. The product knowledge and customer support are at its best." },
  { source: "GoodFirms", author: "Rikdha Jalakam", text: "Quick and prompt service. Helped us even after closing as we needed a HP charger urgently." },
  { source: "GoodFirms", author: "Madhu Kurup", text: "Rounak Computers is a company with a helpful attitude. Their support system is very efficient. They have a team of professionals willing to help at any time. I wish Rounak Computers all the best in their endeavors." },
  { source: "GoodFirms", author: "Mohamed Haris, System Analyst at FXGate Ltd", text: "Rounak Computers is one of the best IT service company in UAE. Excellent support for cloud solutions and Microsoft services such as Microsoft Office 365. Working with Rounak computers since long time and their services are very impressive. I would recommend them when it comes to IT services." },
  { source: "GoodFirms", author: "Wail", text: "We are very happy with our decision for choosing Rounak Computers LLC. Rounak team is a highly competent and professional group of the consultant. Definitely a great company to work with!" },
];