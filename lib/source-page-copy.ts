export type SourceSection = {
  heading: string;
  paragraphs?: string[];
  points?: string[];
};

export type SourcePageCopy = {
  heading: string;
  sections: SourceSection[];
};

const approachSection: SourceSection = {
  heading: "Our Approach to Cloud Solutions for Business",
  paragraphs: [
    "At Rounak Computers, we combine the experience of working with UAE cloud services and managed IT services, ensuring growth and stability for enterprises. Proven methods and certified experts make implementation simple and effective.",
  ],
};

export const categoryCopy: Record<
  string,
  { heading: string; introHeading?: string; intro: string; sections: SourceSection[] }
> = {
  products: {
    heading: "Innovative IT Solutions to Empower Your Business",
    intro:
      "Explore our range of products, including Microsoft Copilot, CCTV Solutions, and more, to enhance your business operations.",
    sections: [approachSection],
  },
  "it-services": {
    heading: "Comprehensive IT Services for Seamless Operations",
    intro:
      "From structured cabling to managed IT services, we provide expert support to ensure your business runs smoothly.",
    sections: [approachSection],
  },
  "cloud-services": {
    heading: "Expert Cloud Service Providers",
    introHeading: "Cloud Solutions in The UAE",
    intro:
      "Rounak Computers offers reliable and secure cloud solutions in UAE, tailored to the needs of companies in Dubai and across the region. As one of the leading cloud service providers in Dubai, we help organizations improve their IT infrastructure, increase scalability, and ensure stable system performance. If you need cloud solutions in Dubai or expert advice, our specialists will support the digital transformation processes. The experience gained over the years as one of the recognized IT maintenance companies in Dubai allows us to implement effective cloud computing strategies that increase flexibility, innovation and business productivity.",
    sections: [approachSection],
  },
  security: {
    heading: "Protect Your Business with Leading Security Solutions",
    intro:
      "Stay secure with top-tier solutions like O365 Advanced Threat Protection, Sophos Security, and Barracuda Email Security.",
    sections: [approachSection],
  },
};

export const productCopy: Record<string, SourcePageCopy> = {
  "microsoft-365": {
    heading: "Microsoft Office 365",
    sections: [
      {
        heading: "About Microsoft Office 365",
        paragraphs: [
          "Rounak Computers is an ideal partner for the seamless integration of Microsoft 365 in Dubai for your business. We offer activation and migration services as well as complete support for a streamlined transition to M365 in Dubai. Our tailored solutions cater to businesses of all sizes, offering comprehensive assistance at every step. We offer affordable packages for Microsoft 365 so you can have control over your privacy, data security, and transparency. Furthermore, our team of certified professionals leverages their in-depth expertise to maximize the potential of Microsoft 365, enabling you to harness its full capabilities effortlessly. Join us in unlocking the power of M365 and revolutionizing the way you work. As one of the best IT maintenance companies besides Microsoft 365, we also provide services related to other products, such as Microsoft Azure and Amazon Web Services in Dubai.",
        ],
      },
      { heading: "Features You Get with Microsoft 365 in Dubai" },
    ],
  },
  "microsoft-copilot": {
    heading: "Empower Your Business with Microsoft Copilot",
    sections: [
      {
        heading: "Microsoft Copilot",
        paragraphs: [
          "Unlock the full potential of your business with Microsoft Copilot products, now available at Rounak Computers.",
          "As a leading reseller, we offer tailored solutions to transform your organization into an AI-powered enterprise.",
        ],
      },
      {
        heading: "Transformative AI Scenarios",
        paragraphs: [
          "Microsoft Copilot provides a comprehensive library of scenarios that can revolutionize how your departments function. From customer service to legal, every aspect of your business can benefit from our AI-driven solutions.",
        ],
      },
      {
        heading: "Advanced Capabilities with Microsoft 365",
        paragraphs: [
          "Copilot for Microsoft 365 takes it a step further by connecting with your work data, integrating seamlessly with the apps you use every day. Enhance your workflows and productivity with Copilot Studio and other extensions designed to streamline your business processes.",
        ],
      },
      {
        heading: "Accelerate Your Implementation",
        paragraphs: [
          "Looking to implement Microsoft Copilot quickly? Download our functional scenario kits, scenario guides, and day-in-the-life guides. These resources are designed to help you realize the full value of your Microsoft Copilot investment efficiently.",
        ],
      },
      { heading: "Optimize Every Department with Microsoft Copilot" },
    ],
  },
  "microsoft-dynamics": { heading: "Microsoft Dynamics 365", sections: [] },
  "microsoft-azure-services": { heading: "Microsoft Azure Services", sections: [] },
  telephony: { heading: "Telephony Solutions", sections: [] },
  "cctv-solutions": { heading: "CCTV Solutions", sections: [] },
  "computer-sales-services": {
    heading: "Computer Sales & Services",
    sections: [
      {
        heading: "Buy Laptop For Office: Knowing What You Want?",
        paragraphs: [
          "Every office professional is going to reach a point in the work life where the boss will stipulate a budget for one to be able to buy a personal use laptop used for assignments, which is paid for by the company.",
          "This will usually take place when the workplace is making a major change to comply with latest environmental or efficiency standards, when there needs to be a rise in productivity across the board, or when the place decides to make upgrades to the hardware or software components.",
          "Even though the mass production and ample competition in the market has driven the cost of laptop computers very low, some of the most advanced machines can set one back more than a thousand dollars, especially if these are highly portable and have a carry friendly profile.",
        ],
      },
    ],
  },
  "professional-cctv-installation-company-in-dubai": {
    heading: "Professional CCTV Installation Company in Dubai",
    sections: [],
  },
};

export const serviceCopy: Record<string, SourcePageCopy> = {
  "structured-cabling": {
    heading: "Structured Cabling",
    sections: [
      {
        heading: "Structured Cabling",
        paragraphs: [
          "Leaving aside homes and small offices, there are several locations involving the use of dozens of computers and hundreds of hardware components, creating a complicated web of wires, cables, sockets and outlets.",
          "This includes large buildings with multiple smaller office spaces and floors, college campuses, and big shopping malls, where computers serve many of the management needs.",
        ],
      },
      {
        heading: "Proper Cable Management",
        paragraphs: [
          "Without the proper cabling infrastructure and networking capabilities, there is the risk of improper plugging in and out, inaccurate troubleshooting methods, and a mess of several components out of place.",
          "Structured cabling companies in Dubai such as Rounak Computers seek to redress exactly these needs and issues, with professional services that target proper and effective management of the many smaller subsystems that feed the large networking infrastructure.",
          "A structured cabling system offers an overall architecture that is not only promised to function without run of the mill problems and downtime, but also provide ample flexibility in terms of adaptability, customization, and upgradation. A proper system will make sure its overall performance does not suffer when the many routine changes and additions are made to the components playing a part in the network.",
        ],
      },
    ],
  },
  "it-amc-services-get-it-annual-maintenance-contract": {
    heading: "IT AMC Dubai - Get IT Annual Maintenance Contract",
    sections: [
      {
        heading: "Services Offered Under Our IT Annual Maintenance Contract",
        paragraphs: [
          "As an established IT AMC company Dubai, we cover the areas businesses rely on most, including:",
        ],
      },
      { heading: "Reasons to Choose Rounak Computers" },
      {
        heading: "Partner with Us Today!",
        paragraphs: [
          "Keep your business running smoothly with professional IT AMC services in Dubai backed by an experienced IT support company in Dubai. Contact Rounak Computers to discuss a tailored IT AMC support agreement that fits your infrastructure, users, and growth plans. Our team helps you maintain a secure, reliable, and well-managed IT environment so you can focus on business performance with confidence.",
        ],
      },
    ],
  },
  "managed-it-services": {
    heading: "IT Managed Services Dubai",
    sections: [
      {
        heading: "IT Managed Services UAE",
        paragraphs: [
          "Managed IT services are a vital component of modern business infrastructure, providing comprehensive IT support tailored to meet diverse organizational needs. At Rounak Computers, we specialize in proactive monitoring, system maintenance, and seamless IT integration to enhance operational efficiency. With customizable plans, businesses can access services like Office 365 management, antivirus solutions, telephony setup, and disaster recovery. Our expertise ensures robust data security and uninterrupted workflows, empowering businesses to focus on growth. Experience reliable IT solutions with one of the IT maintenance companies Dubai that keep your operations ahead in a dynamic digital landscape.",
        ],
      },
      { heading: "Comprehensive IT Managed Services in Dubai" },
    ],
  },
  spla: { heading: "SPLA", sections: [] },
  "structured-cabling-company-dubai": {
    heading: "Structured Cabling Company Dubai",
    sections: [
      {
        heading: "Dubai's Best Structured Cabling Company",
        paragraphs: [
          "Rounak Computers offers top-quality structured cabling solutions for businesses in Dubai. As one of the reputed IT maintenance companies in the UAE, we specialize in designing, implementing, and maintaining reliable network cabling infrastructure. Our experienced team can handle projects of all sizes and ensure reduced downtime and maximum efficiency. Trust us to meet your complex requirements with cost-effective solutions that cater to your immediate needs and future scalability. Whether it's new installations, upgrades, or relocations, our experts are here to enhance your network connectivity. Contact us now for the top-notch services of a structured cabling company. Furthermore, we also offer CCTV installation and Huawei cloud service in Dubai.",
        ],
      },
      { heading: "Installation Process of Structured Network Cabling" },
    ],
  },
  "expert-it-support-services-dubai": {
    heading: "IT Support Dubai Company",
    sections: [
      {
        heading: "Expert IT Support Dubai",
        paragraphs: [
          "Rounak Computers offers unmatched IT help in Dubai designed to take your company's operations to the next level. Our IT support services, which prioritize increased speed, steadfast accuracy, and uncompromising quality, are made to make it easy for you to accomplish your corporate objectives. We have the know-how to meet your specific IT demands, regardless of how big or small your business is. We are dedicated to offering prompt and effective IT help so your company can continue operating without disruptions. To provide solutions that lead the industry, we prioritize the highest security and performance requirements by utilizing state-of-the-art encryption and sophisticated cloud-based technologies. As a reliable partner and one of Dubai's top IT maintenance firms, you can fully rely on us to provide all-inclusive solutions to satisfy your various demands. Beyond traditional IT assistance, we provide multiple services, including cloud services in UAE, and IT managed services.",
        ],
      },
    ],
  },
  "comprehensive-it-managed-services-dubai": {
    heading: "Comprehensive IT Managed Services Dubai",
    sections: [
      {
        heading: "Comprehensive IT Managed Services Dubai",
        paragraphs: [
          "Welcome to Rounak Computers, your trusted partner for exceptional IT managed services in UAE designed to optimize your business operations and drive growth. Our mission is to empower our esteemed clients by maximizing the utilization of their IT resources, boosting operational capacity, and minimizing operating expenses. From storage and data management to applications, networks, desktops, and servers, we efficiently handle every aspect of your IT infrastructure. Our fully managed services allow you to prioritize your core business activities while we seamlessly handle day-to-day IT operations with complete transparency.",
          "What sets us apart as an IT managed service provider is our unwavering commitment to comprehensive ownership and delivering premium organizational efficiency and business performance. Furthermore, we offer highly competitive rates to support your organization's growth and success. Contact us today to discover how we can drive your business forward. As one of the best IT maintenance companies in Dubai, we pride ourselves on offering an extensive range of specialized solutions alongside our exceptional managed services. Whether it's offering cloud solutions, fortifying your systems with robust information security measures, or providing data backup services, we have got you covered.",
        ],
      },
      { heading: "Variety of Managed IT Services We Offer" },
      { heading: "Why Choose Us?" },
      { heading: "Tailored Managed IT Services for Every Business Need" },
    ],
  },
  "advanced-website-joomla-based-application": {
    heading: "Advanced Website & Joomla-based Application",
    sections: [
      {
        heading: "Advanced Website & Joomla-based Application",
        paragraphs: [
          "Providing tailored, high-performance website design and development services, specializing in complex Joomla-based applications and solutions that meet your business needs.",
          "At Rounak Computers, we offer advanced website design and development services with a focus on Joomla-based applications. Whether you're looking for a dynamic website or a complex, custom solution, our expert team is equipped to handle it all. From seamless integrations to robust functionalities, we create tailored websites that not only meet your needs but also drive results. Stay tuned as we're in the process of updating and enhancing our services to offer even more cutting-edge solutions. Exciting updates are coming soon!",
        ],
      },
    ],
  },
  "amazon-web-services": {
    heading: "Amazon Web Services UAE",
    sections: [
      {
        heading: "Our AWS Cloud Services Dubai Includes",
        paragraphs: [
          "Rounak Computers provides a comprehensive range of AWS cloud services to ensure your business is empowered with the best tools and infrastructure. Here’s what we bring to the table:",
        ],
        points: [
          "Cloud Migration — Effortlessly move your existing systems to the AWS cloud with minimal downtime and maximum efficiency.",
          "AWS Managed Services — We carefully monitor and manage your AWS setup, allowing you to focus on your major business activities.",
          "Infrastructure as a Service (IaaS) — Make use of scalable networking, storage, and computational resources to expand the functionality of your apps.",
          "Software as a Service (SaaS) Integration — Integrate SaaS applications with AWS to enhance teamwork and productivity.",
          "Data Storage Solutions — Store and manage your data securely by leveraging AWS’s scalable storage options.",
          "Data Analytics and Big Data Solutions — Enable you to gain valuable insights with AWS’s advanced analytics and big data tools.",
          "Security and Compliance Solutions — Protect your data and meet regulatory requirements with AWS’s robust security and compliance offerings.",
          "Networking & Content Delivery — Enhance the performance and reliability of your systems with AWS networking solutions.",
          "AI & Machine Learning — Implement AWS Artificial Intelligence and Machine Learning tools to innovate and automate your processes.",
          "Database Management — Optimize your database performance with AWS's advanced database solutions.",
        ],
      },
      {
        heading: "Advantages of Adopting Amazon Web Services Dubai",
        paragraphs: [
          "Choosing AWS cloud services in Dubai with Rounak Computers offers numerous advantages, such as:",
        ],
        points: [
          "Scalability — Scale your resources up or down based on demand without compromising performance.",
          "Cost Efficiency — Pay only for what you use, eliminating the need for costly on-premises infrastructure.",
          "Global Reach — Access AWS’s extensive global network to ensure seamless operations anywhere in the world.",
          "Enhanced Security — Benefit from AWS’s advanced security features, including encryption, identity management, and compliance tools.",
          "Innovation — Stay ahead with the latest technologies like AI, Machine Learning, IoT, and serverless computing.",
          "High Availability — Experience minimal downtime with AWS’s reliable and redundant infrastructure.",
        ],
      },
      {
        heading: "Our AWS Implementation Process",
        points: [
          "Consultation — Understanding your organization's needs and objectives.",
          "Assessment — Evaluating your current infrastructure and readiness for AWS migration.",
          "Planning — Designing a comprehensive AWS strategy.",
          "Deployment — Seamless implementation of AWS services.",
          "Optimization — Continuous monitoring and optimization to ensure peak performance.",
        ],
      },
      {
        heading: "What Sets Us Apart?",
        paragraphs: [
          "At Rounak Computers, we pride ourselves on being a trusted partner for businesses in Dubai seeking AWS solutions. Here’s why we stand out:",
        ],
        points: [
          "Certified AWS Experts — Our team consists of certified professionals with extensive experience in AWS technologies.",
          "Customized Solutions — We design solutions that align perfectly with your business requirements and goals.",
          "24/7 Support — Enjoy round-the-clock assistance to keep your AWS environment running smoothly.",
          "Proven Track Record — We have vast experience delivering professional IT and cloud services to businesses across industries.",
          "End-to-End Services — From consultation to deployment and maintenance, our staff handles it all.",
        ],
      },
      {
        heading: "Call Us Today for AWS Excellence",
        paragraphs: [
          "Whether new to AWS or aiming to improve your cloud configuration, Rounak Computers is here to assist you every step of the way. With extensive experience and a client-centric approach, we guarantee a smooth and successful migration to the AWS cloud. To receive exceptional services and see your business flourish, get in touch with us now!",
        ],
      },
    ],
  },
  "azure-cloud-services": {
    heading: "Microsoft Azure Cloud Solutions",
    sections: [
      {
        heading: "How Do We Help?",
        paragraphs: ["Our services cover key areas of digital transformation:"],
        points: [
          "Strategic Planning and Migration — We are developing the architecture and gradually migrating the infrastructure and applications to Microsoft Azure UAE. For this purpose, tools are used for secure data migration, integration and risk reduction.",
          "Creating a Reliable Architecture — Our engineers design flexible solutions based on Azure Virtual Machines, App Services and Logic Apps. This architecture combines productivity, cost-effectiveness, and readiness for future challenges.",
          "Cost Optimization — We identify hidden savings opportunities, implement automation, and make recommendations to reduce TCO by up to 30%.",
          "Integration of Local Systems — We provide seamless integration of local IT resources with Azure Kubernetes Service, Azure Functions and Virtual Network. This increases manageability and protects sensitive data.",
          "24/7 Monitoring and Support — Round-the-clock monitoring and technical assistance guarantee a 99.95% uptime SLA and uninterrupted application operation.",
          "Safe Load Transfer — We organize fast and secure data transfer between Azure and other cloud platforms, reducing the risk of downtime.",
          "Scaling of Resources — Automatic configuration using Azure Load Balancer and Kubernetes allows you to maintain high performance even under peak loads.",
          "Data Protection and Management — We use Azure SQL Database, Cosmos DB and Blob Storage for information storage, as well as Synapse Analytics and Cognitive Services for analytics and AI/ML tasks.",
          "Disaster Recovery and Risk Management — We implement DRaaS solutions and backups so that the business remains protected from leaks, failures and cyber attacks.",
          "Compliance with standards — We provide Identity and Access Management and compliance with international standards ISO, GDPR, HIPAA and local UAE requirements. This is critical for the banking sector, healthcare, and government agencies.",
        ],
      },
      {
        heading: "Start Right Now",
        paragraphs: [
          "Take a step towards the digital future with Rounak Computers. Our Microsoft Azure cloud services in Dubai will help you reduce costs, increase flexibility, and accelerate business growth. Contact us today to discuss the project.",
        ],
      },
    ],
  },
  "disaster-recovery-as-service-draas": {
    heading: "Disaster Recovery as Service (DRaaS)",
    sections: [],
  },
  "migration-services": { heading: "Migration Services", sections: [] },
  "best-solutions-to-backup-your-data": {
    heading: "Backup Your Data with The Best Solutions in Dubai",
    sections: [
      {
        heading: "Backup Your Data with The Best Solutions in Dubai",
        paragraphs: [
          "These days, all businesses save their company data in digital format. Rounak Computers protects and safeguards your company information by providing secure and dependable data backup solutions in Dubai. Do not worry about losing any of your valuable business or personal data.",
        ],
      },
      {
        heading: "How Does Our Data Backup Solution Help?",
        paragraphs: [
          "Our data backup solution reduces the possibility of losing important company or personal data. Unexpected threats like cyberattacks, hard drive malfunctions, and human mistakes can occasionally result in data loss. Thanks to a strong data backup solution, your data remains safe so that you can focus on company growth with peace of mind. A dependable data backup solution relieves the anxiety brought on by possible online dangers.",
        ],
        points: [
          "Prevent Data Loss — Keep crucial company files, personal documents, and memories safe from accidental deletion or device failure.",
          "Anytime Data Access — Cloud backups store your data remotely, allowing you to retrieve it from any stable internet connection device.",
          "Protects Against Physical Damage — Guarantees data protection against physical damage such as hardware failure, natural disaster, theft, etc.",
          "Keep Business Data Safe — Ensure that your company's critical information, such as customer data and financial files, is always safe and easily recoverable.",
          "Eliminate Concerns Regarding Data Loss — Cloud backups protect your data regardless of unanticipated situations. Data backup solutions eliminate concerns regarding the safety of your digital data.",
        ],
      },
      {
        heading: "How Do We Ensure the Protection of Your Data?",
        paragraphs: [
          "Do not stress about losing your data to cyber threats. We assist you in backing up your data in Dubai with the best data backup services.",
        ],
      },
      {
        heading: "Smart Data Backup Solutions for Business Continuity",
        paragraphs: [
          "As an expert cloud service provider, our data backup services keep your digital information secure, accessible, and recoverable when necessary. Here is what we offer:",
          "Your business security is our top priority. We guarantee complete protection with every data backup solution we provide.",
        ],
      },
    ],
  },
  "quality-ibm-watson-workspace-in-dubai": {
    heading: "Quality IBM Watson Workspace in Dubai",
    sections: [
      {
        heading: "Quality IBM Watson Workspace in Dubai",
        paragraphs: [
          "Rounak Computers offers a comprehensive suite of IBM Watson services in Dubai at competitive prices, catering to both large corporations and SMEs. Whether you need seamless communication for your team or want to connect with clients effortlessly, IBM Watson Workspace has you covered. It is designed for teams who collaborate and work together on a regular basis.",
          "Further, it allows you to search all conversations to recover important documents or notes without any issues. It is also effective in connecting third-party apps with your day-to-day tools. Cognitive technology, artificial intelligence, fast conversation, and task prioritization in IBM Workspace make it a perfect messaging app for any enterprise.",
          "We also offer several other services and are among the best cloud service providers. You can get in touch if you are looking for AWS Cloud Services or Huawei Cloud Solutions in Dubai.",
        ],
      },
      { heading: "Key Features of IBM Watson" },
    ],
  },
  "huawei-cloud-services": {
    heading: "Huawei Cloud Services For Your Business In Dubai",
    sections: [
      {
        heading: "Why Choose Huawei Cloud Services?",
        paragraphs: [
          "Finding the correct cloud service is critical for organizations seeking to grow while improving security. Huawei Cloud offers unique creative solutions suited to fit your company's needs. Here's why you should use Huawei Cloud services to power up your business:",
        ],
      },
      { heading: "Our Huawei Cloud Service Offerings in Dubai" },
      { heading: "Why Choose Us for Huawei Cloud Services?" },
      {
        heading: "Huawei Cloud Services",
        paragraphs: [
          "Your business security is our top priority. We guarantee complete protection with every data backup solution we provide.",
        ],
      },
    ],
  },
  "o365-advance-threat-protection": {
    heading: "O365 Advance Threat Protection",
    sections: [{ heading: "Three Functions Offered by ATP" }],
  },
  "sophos-security-in-dubai": {
    heading: "Sophos Firewall in Dubai",
    sections: [
      {
        heading: "Sophos Email Security Service in Dubai",
        paragraphs: [
          "Rounak Computers proudly stands as an official partner of Sophos, a leading name in email security service and cybersecurity solutions. As a certified partner, we provide the powerful and state-of-the-art Sophos XG Firewall. Use our experience to defend your IT infrastructure, guaranteeing unmatched defense against changing online threats. Discover the powerful features of Sophos XG Firewall, an email security solution designed to strengthen your network's defenses. With Sophos XG Firewall, you can count on the best IT maintenance companies in Dubai to be your committed ally while you navigate the digital world safely. We provide Ransomware and Mimecast in addition to Sophos security in Dubai.",
        ],
      },
      { heading: "Key Features of Sophos Firewall in Dubai" },
      { heading: "What our IT AMC Services Includes" },
      {
        heading: "Why Choose Rounak Computers?",
        points: [
          "Certified Sophos Partner",
          "Specialized Expertise",
          "Proactive Support",
          "Tailored Solutions",
          "Reliable Customer Service",
          "Cost-Effective Packages",
          "Continuous Monitoring and Updates",
        ],
      },
      { heading: "Secure Your Business with Sophos Security in Dubai!" },
    ],
  },
  "ibm-mass-360": {
    heading: "IBM MASS 360",
    sections: [
      {
        heading: "Our Comprehensive IBM MaaS 360 Service",
        paragraphs: [
          "IBM MASS 360 is a trusted enterprise mobility management solution that makes working in a mobile world more simpler and safer. Use powerful mobile device management with comprehensive, integrated protection to enable applications, content, email and devices, without compromising the user experience, data security or privacy.",
        ],
      },
    ],
  },
  "mimecast-dubai": {
    heading: "Mimecast Dubai",
    sections: [
      { heading: "Mimecast Archiving, Recovery, and Security Features" },
      {
        heading: "How Mimecast Enhances Regulatory Compliance and Data Governance?",
        points: [
          "Comprehensive Data Retention — Securely stores email data to meet local and international regulations.",
          "Efficient Search and Discovery — Rapidly locate critical information for audits and legal requests.",
          "Encryption for Secure Communications — Protects sensitive data, ensuring compliance with strict security standards.",
          "Detailed Audit Trails — Real-time reporting provides clear records for regulatory review.",
          "Compliance Framework Integration — Supports GDPR, HIPAA, and industry regulations with customizable policies.",
        ],
      },
    ],
  },
  "top-security-solutions-for-ransomware-dubai": {
    heading: "Best Security Solutions for Ransomware in Dubai",
    sections: [
      {
        heading: "Protecting Your Data and Devices For Ransomware Dubai",
        paragraphs: [
          "Ransomware in Dubai is a severely dangerous type of malware that can cause severe harm to individuals and businesses. At Rounak Computers, we take the threat very seriously and understand the potential consequences of a ransomware attack. Essentially, ransomware is designed to block users from accessing their files and data until a ransom is paid to the cybercriminals responsible for the attack. Unfortunately, ransomware can destroy critical data and documents, causing significant disruptions to your operations and damaging your company's reputation. It is crucial to protect your systems and essential IT resources from ransomware and respond promptly to attacks to ensure the security of your network and business.",
          "However, detecting the presence of ransomware is challenging, and once your files are encrypted, attackers demand ransom payments for data retrieval. Don't take any risks with your critical data and operations. We are committed to ensuring the security of your devices and the integrity of your data. Protect your business from the devastating effects of ransomware by acting proactively. In addition to ransomware protection, we provide various cloud solutions and Amazon web services in UAE. We are committed to ensuring the security of your devices and the integrity of your data.",
        ],
      },
      { heading: "Common Infection Sources for Ransomware in Dubai" },
      { heading: "Multi-Layer Defense and Protection Against Ransomware Dubai" },
      { heading: "Ransomware Dubai Precautions" },
      {
        heading: "Protect Your Business with Advanced Ransomware Solution",
        paragraphs: [
          "Ransomware attacks can strike any time, putting your company’s data and reputation at risk. At Rounak Computers, we provide top-tier ransomware Dubai protection solutions tailored for businesses. Our advanced security measures help prevent attacks, safeguard sensitive data, and ensure fast recovery if the unexpected occurs. Don’t let ransomware disrupt your operations—take action today and secure your business against evolving threats.",
        ],
      },
    ],
  },
  "barracuda-email-security": {
    heading: "Barracuda Email Security",
    sections: [{ heading: "How Does Barracuda Email Protection Help Your Business?" }],
  },
  "guaranteed-information-security-in-dubai": {
    heading: "Advanced ICT Solutions Dubai",
    sections: [
      {
        heading: "Your Trusted Information Security Company in Dubai",
        paragraphs: [
          "Cyber threats and security violations are the nightmares of every business. At Rounak Computers, we provide reliable information security Dubai services to keep your data safe and secure from online hazards. Our solutions include firewalls, encryption, and proactive threat protection tailored to your business requirements. We also offer Mimecast, Sophos and Ransomware Protection to help businesses meet security compliance and industry standards.",
          "As your trusted partner, we understand that every business deserves strong ICT solutions for efficient functioning. That's why we offer professional IT security services through a skilled team.",
        ],
      },
      { heading: "FAQs" },
    ],
  },
};

export function getSourcePageCopy(path: string) {
  const slug = path.split("/").pop() ?? "";
  return productCopy[slug] ?? serviceCopy[slug];
}
