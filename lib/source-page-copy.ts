export type SourceSection = {
  heading: string;
  paragraphs?: string[];
  points?: string[];
};

export type SourcePageCopy = {
  heading: string;
  sections: SourceSection[];
};

export const teamCopy: SourcePageCopy = {
  heading: "Meet Our IT Specialists",
  sections: [
    {
      heading: "A team committed to your success",
      paragraphs: [
        "All our employees at Rounak Computers are full-time employees with vast experience in their respective domains. We keep our team engaged in new product training so we can serve our clients with the latest products and technology.",
        "Every team member shares a genuine desire to help clients improve their businesses through practical, dependable IT solutions.",
      ],
    },
    {
      heading: "Our Vision",
      points: [
        "To be recognised as one of the leading IT-enabled services providers in Dubai.",
        "To be recognised as one of the top cloud computing services providers in Dubai.",
        "To be recognised as a one-stop shop for corporate IT support services in Dubai.",
        "To be an extension of our customers' teams for their information technology requirements and help improve their ROI with the latest technologies, cloud computing, and IoT.",
      ],
    },
    {
      heading: "Our Values",
      points: [
        "Be transparent with customers.",
        "Always advise the right technology.",
      ],
    },
  ],
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
  "microsoft-dynamics": {
    heading: "Microsoft Dynamics 365",
    sections: [
      {
        heading: "Microsoft Dynamics 365",
        paragraphs: [
          "With the help of social insights, business intelligence, and campaign management in the cloud, on-premises, or in a hybrid setting, Microsoft Dynamics 365 Dubai, CRM is our customer relationship management (CRM) business solution.",
          "By organising and automating corporate operations that foster customer happiness and loyalty in the sales, marketing, and customer support industries, customer relationship management (CRM) may assist in lowering costs and increasing profitability. CRM solutions may increase revenue through automated marketing, customer support, and sales forces. This is the best software for smooth and finest features",
          "Rounak Computers is hailed to be the Microsoft dynamic partner in UAE.",
        ],
      },
      {
        heading: "Your Trusted Cloud Partner",
        paragraphs: [
          "As a certified Microsoft Cloud Partner, Rounak Computers offers expert solutions for migrating, implementing, and managing your business in the cloud. Our deep expertise in Microsoft technologies like Office 365, Azure, and Dynamics 365 ensures seamless integration, enhanced productivity, and secure cloud operations. Let us help you unlock the full potential of Microsoft's cloud services to drive efficiency and growth for your business.",
        ],
      },
      {
        heading: "Cloud Migration UAE - Microsoft Dynamics 365",
        paragraphs: [
          "Enterprise software frequently has foundational components, such as data processing methods and database formats, that are unique to the program with which they will be utilized, which limits the application's interoperability with other external apps that you may prefer utilizing.",
          "Microsoft appears to be attempting to change course and move to standardized and consistent database schematics because customized databases are difficult to integrate and upgrade. Any new solution Microsoft introduces under the Dynamics 365 umbrella is accessible to all customers. The main distinction of this is that consumers will now explore programs through Microsoft AppSource, a brand-new marketplace. It's the best and most updated software that will help you with your business. Undoubtedly Microsoft Dynamic 365 Dubai is your ultimate choice all you need is to get in touch with authentic and reliable Microsoft dynamic partner Dubai for a genuine product.",
          "As a result, the Common Data Model will enable integration with all programs developed by Microsoft as well as any other apps that make use of a common API.",
        ],
      },
      {
        heading: "Uses for Microsoft Dynamics 365 include",
        points: [
          "Linking people, processes, and data from many apps, such as Microsoft Dynamics 365, Office 365, LinkedIn, and Azure, to help your organization work as a cohesive whole.",
          "Using built-in AI, analytics, and guided action suggestions to make better decisions.",
          "Modifying the program to suit your demands as opposed to altering your company model. The majority of programs may be customized using Microsoft Power Platform or integrated with current systems.",
          "For progressive company innovation, modernize your strategy by combining AI, mixed reality, social media, and mobile capabilities.",
        ],
      },
      {
        heading: "Customer perceptions",
        paragraphs: [
          "This module helps users get actionable insights from the data by integrating customer data from Office 365, Microsoft Dynamics 365, and other data sources. The module also includes Power BI for data analytics and visualisation. By applying artificial intelligence algorithms to identify trends and patterns in customer behaviour, predictive data may be gathered.",
        ],
      },
      { heading: "Consumer Assistance", paragraphs: ["Dynamics 365 offers support agent tools, self-service / self-care portal tools, community engagement tools, and multichannel customer interaction capabilities."] },
      { heading: "Field Service", paragraphs: ["The Field Service Component of Dynamics 365 is primarily used for client communication capabilities, contract administration, inventory management, resource planning, and scheduling."] },
      { heading: "Finance and Operations", paragraphs: ["Dynamics 365 offers all the reporting and analytics features in this module, as well as financial management. Additionally, it provides supply chain management, warehouse and inventory control, project, production, scheduling, and cost management manufacturing tools."] },
      { heading: "Sales & Marketing", paragraphs: ["Dynamics 365 provides campaign management and specialised, targeted marketing solutions that are catered to your unique needs by combining Dynamics CRM with Adobe Marketing Cloud."] },
      { heading: "Service Automation for Projects", paragraphs: ["Automates project planning, service analytics, time and expense management, and resource scheduling all at once. offers what you need while managing operations more efficiently."] },
      { heading: "Retail", paragraphs: ["Inventory management, personnel management, operational analytics, and integrated business tools."] },
      { heading: "Human Resource Operations", paragraphs: ["LinkedIn and talent cloud services are connected to handle all parts of HR. Recruitment, selection, and integration of new personnel are all part of managing HR activities."] },
      {
        heading: "Why Microsoft Dynamics 365 Modules Should Be Your First Choice?",
        paragraphs: [
          "When Dynamics 365 and ERP's CRM and ERP modules are linked with Microsoft's productivity tools, users obtain an integrated and intelligent perspective of data about customer records, transactions, behaviours, and preferences. This includes information about orders, inventory, and deliveries. Dynamics 365 partner UAE offers excellent functionality and enhanced analytical insight capabilities for decision-makers who still need more. By far, the most significant advantage of Dynamics 365 being the best software is the extensive integration it provides with other Microsoft business programmes.",
          "For firms that heavily rely on Office 365, Outlook, or Azure, Dynamics 365 offers more favourable interaction with sister products than the bulk of competing CRM solutions. Microsoft is expanding its portfolio of external programmes that interact with Dynamics through the AppSource app store.",
        ],
      },
    ],
  },
  "microsoft-azure-services": {
    heading: "Microsoft Azure Services",
    sections: [
      {
        heading: "Microsoft Azure Services",
        paragraphs: [
          "While previously considered a high-end feature only used by people who knew their way around software technology and applications, cloud computing and storage have become mainstream, with programs like Dropbox adding several new users daily. This shift is driving a need for better technology to manage software systems and cut down costs and more useful compression algorithms, making this a staple.",
        ],
      },
      {
        heading: "Your Trusted Cloud Partner",
        paragraphs: [
          "As a certified Microsoft Cloud Partner, Rounak Computers offers expert solutions for migrating, implementing, and managing your business in the cloud. Our deep expertise in Microsoft technologies like Office 365, Azure, and Dynamics 365 ensures seamless integration, enhanced productivity, and secure cloud operations. Let us help you unlock the full potential of Microsoft's cloud services to drive efficiency and growth for your business.",
        ],
      },
      {
        heading: "Microsoft Azure",
        paragraphs: [
          "More than 200 products and cloud services are available on the Azure cloud platform, which may be used to develop new solutions, address present problems, and foresee problems in the future. Using the frameworks and tools of your choosing, you can develop, run, and manage apps across multiple clouds, on-premises, and at the edge. Azure supports multiple programming languages and third-party software, offering infrastructure, platform, and software as a service.",
        ],
      },
      {
        heading: "Computing Using Azure Cloud Services",
        paragraphs: [
          "Azure cloud services in Dubai use several functions that are key to the work done by software, backend, and frontend professionals. In computing, this includes hosting websites, allowing web developers to combine sites using many of the top tools, including PHP and Python, making uploading possible through user portals. WebJobs allows users to run applications and processing in the background, either on a schedule or continuously.",
        ],
      },
      {
        heading: "How Microsoft Azure Can Benefit Your Business",
        points: [
          "Apply sophisticated coding and linguistic models to a range of application cases.",
          "Use safe, ready-to-code workstations in the cloud to accelerate development.",
          "Instantly create Linux and Windows virtual machines.",
          "Use an enterprise-grade service to handle the entire machine-learning lifecycle.",
          "Track work, share code, and release applications with modern development services.",
          "Create app infrastructure environments quickly using project-based templates.",
        ],
      },
      {
        heading: "Management And Messaging Through Azure Cloud Services",
        paragraphs: [
          "In the management and enterprise setting, Azure cloud services in UAE provide several key functions that reduce time, errors, processing hiccups, and forgetting to schedule events. The system offers several tasks common to enterprise situations based in a cloud setting, allowing it to do them automatically when needed. The service bus allows even devices not on the platform to integrate and communicate with Azure.",
        ],
      },
    ],
  },
  telephony: {
    heading: "Telephony Solutions",
    sections: [
      {
        heading: "Telephony Solutions in UAE",
        paragraphs: [
          "Telephony is the backbone of your network- it serves communicative purposes within and outside any organization. For a smooth and unhindered collaboration telephone serves a great purpose and ensures communication among employees and for marketing collateral.",
          "This telephony integration is a cost-effective and smooth telecommunication system promoting and propagating convenient services by renowned service providers. It can be efficiently integrated with the already set management system such as emails and Instant Messaging.",
          "Whether you are running a small-scale business or a large-scale one, communication among employees or with customers is essential.",
          "We through Rounak Computers are providing wonderful solutions all over in UAE for all of your telephony needs. We deal with different brands of PABX installations like Panasonic, Yeastar, NEC, Avaya, and Cisco.",
        ],
      },
      { heading: "Single-Number Reach", paragraphs: ["The integration of various devices into a single number, independent of the platform (cellular, analog, digital, or IP), enables simultaneous search and ring of a desk phone, mobile phone, smartphone, and other devices."] },
      { heading: "Softphone", paragraphs: ["A telephony program known as a softphone adds telephone capability to your laptop. You may use all of your desk phone's features, including making and taking calls, checking voicemail, seeing call logs, and starting and taking part in conference calls."] },
      { heading: "Voice and Data Services", paragraphs: ["Both wired and wireless lines may access voice and data communications. Planning a telephone solution is the perfect opportunity to review your current coverage, plan alternatives, and tariffs in order to increase efficiency and save costs."] },
      { heading: "Conferencing", paragraphs: ["A crucial part of a telephone system is conferencing, which combines Web-based, audio, and video technology for peer-to-peer communication, room-to-room communication, or high-definition conferencing."] },
      { heading: "Reporting Analytics and Management", paragraphs: ["Organizations may use these telephony tools to monitor telephony systems and perform thorough call reports."] },
      { heading: "How can your Organization Benefit from Telephony?", points: ["Connect your users regardless of their locations", "Add phone lines more efficiently and conveniently", "Communication is faster and easier", "Get rid of conventional PBX-based systems", "Make in-bound and out-bound calls"] },
      { heading: "What Does Private Automatic Branch Exchange (PABX) Mean?", paragraphs: ["Call centers and other big companies employ private automatic branch exchange (PABX), a technology that enables a single access number to deliver several lines to external callers while giving a variety of external lines to internal callers or personnel."] },
    ],
  },
  "cctv-solutions": {
    heading: "CCTV Solutions",
    sections: [
      {
        heading: "CCTV Camera Installation Needs",
        paragraphs: [
          "The home and office are two places perhaps the most in need of avid and advanced security systems that can help detect and prevent mishaps.",
          "Both of these places house several valuable items, including money, commodities, files, and important documentation, all of which are prone to misuse if they fall in the wrong hands.",
        ],
      },
      {
        heading: "Security And Protection Needs",
        paragraphs: [
          "Work spaces and corporate headquarters have a need to protect everything that is kept on site, including paperwork, intellectual property, hardware systems and components, and other important items. All of these needs have made the security and surveillance abilities of offices and homes very important, as users look for a cost effective and practical way to use technology to prevent unfortunate events, specifically theft.",
        ],
      },
      {
        heading: "CCTV Security",
        paragraphs: [
          "One surveillance mechanism that is not only perfect for monitoring the office space, but extremely practical for security needs at home is the installation of CCTV cameras in the vicinity.",
          "CCTV installation companies in Dubai will not only help with the technical aspects of hooking the hardware up, but may also provide it themselves, if users choose not to make use of their own purchased components.",
        ],
      },
    ],
  },
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
    sections: [
      {
        heading: "Best CCTV Installation Services",
        paragraphs: [
          "Welcome to Rounak Computer, your trusted IT maintenance company offering top-of-the-line CCTV camera installation services. Our skilled technicians provide tailored surveillance solutions for commercial and residential properties. We use high-quality cameras and advanced equipment to ensure optimal performance and reliability. Your safety is our priority, and we take pride in delivering cutting-edge surveillance systems for offices, warehouses, retail stores, and homes.",
        ],
      },
      { heading: "High-Quality Camera Selection", paragraphs: ["We provide top-quality cameras and cutting-edge equipment to ensure clear and high-resolution footage, even in challenging lighting conditions."] },
      { heading: "Expert Consultation and Site Assessment", paragraphs: ["Our experienced technicians offer expert advice and conduct thorough site assessments to determine the most effective camera placement for maximum coverage."] },
      { heading: "Professional Installation and Setup", paragraphs: ["Trust our skilled team to handle the installation and setup process with precision and efficiency, ensuring seamless functionality of your CCTV system."] },
      { heading: "Integration with Existing Security Systems", paragraphs: ["If you already have a security system in place, we can integrate CCTV cameras seamlessly to enhance overall security and surveillance capabilities."] },
      { heading: "Maintenance and Support Services", paragraphs: ["Count on our reliable maintenance and support services to keep your CCTV system running smoothly. We offer timely repairs and proactive monitoring for continuous protection."] },
      { heading: "Residential CCTV Camera Setup", paragraphs: ["Protect your home and loved ones with our reliable residential CCTV installation. We offer a range of camera options to enhance the security of your property."] },
      { heading: "Our CCTV Installation Process", points: ["Site assessment: Evaluating the location and security requirements.", "System design: Planning camera placement and network setup.", "Equipment setup: Mounting cameras and configuring hardware.", "Wiring and cabling: Establishing connections for power and data.", "Network configuration: Setting up the CCTV system on the network.", "DVR/NVR setup: Configuring the recording and storage device.", "Camera calibration: Adjusting settings for optimal performance.", "Testing and troubleshooting: Ensuring all cameras function correctly.", "Client training: Instruct users on operating the CCTV system.", "Handover: Completing documentation and finalizing the installation."] },
      { heading: "Why Choose Us?", points: ["Dubai Police Approved", "2-Year Warranty", "24-Hour Replacement", "30 Days of Recording", "Extended Storage", "British Standards Compliance", "Trusted and Reputable", "24/7 Support"] },
    ],
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
  spla: {
    heading: "SPLA",
    sections: [
      {
        heading: "What is SPLA?",
        paragraphs: [
          "SPLA is a specialized licensing program crafted for service providers and independent software vendors (ISVs). It grants businesses the ability to license Microsoft software products, enabling them to offer cutting-edge software services and hosted applications to their end customers. This flexible model eliminates the need for upfront investments or lengthy commitments, allowing you to stay current with the latest Microsoft software offerings hassle-free.",
        ],
      },
      {
        heading: "How Does It Work?",
        paragraphs: [
          "Consultation: Our dedicated team collaborates closely with you to grasp your software needs, recommending the most suitable licensing options tailored specifically to your business requirements.",
          "Setup: Once you've chosen your desired licenses, we guide you through the setup process, assisting with the establishment of your SPLA agreement and provisioning your software subscriptions.",
          "Usage Monitoring: Track your software usage effortlessly through our user-friendly dashboard, enabling you to optimize your licensing strategy and manage costs effectively.",
          "Support & Maintenance: Benefit from ongoing support and maintenance provided by our experienced team, ensuring a seamless and stress-free SPLA journey for your business.",
        ],
      },
      {
        heading: "Advantages of SPLA",
        paragraphs: [
          "Here are the key benefits you'll enjoy by opting for SPLA services with Rounak Computers:",
        ],
        points: [
          "Flexibility — Whether you operate in a dedicated or shared hosting environment, SPLA grants you the flexibility to seamlessly deliver customized IT services to your customers.",
          "Cost-Effectiveness — You only pay for the licenses based on your monthly utilization, ensuring cost-effectiveness and budget control.",
          "Access to the Latest Microsoft Products — Keep your customers up-to-date with the latest Microsoft platform offerings without the hassle of physical media.",
          "Global Reach — Expand your business horizons by delivering software services to end customers worldwide, wherever distribution is legally permitted.",
          "Collaboration Opportunities — Extend your market reach by partnering with small and midsize businesses through additional resellers and affiliate partnerships.",
          "Scalability — Focus on hosting your application solutions while leveraging infrastructure as a service from data center providers like Microsoft Azure.",
          "Outsourcing Support — Entrust day-to-day server management to outsourcing companies while retaining ownership of your software services.",
          "Product Testing and Evaluation — Conduct internal testing of Microsoft products to ensure quality and reliability before offering them as services.",
          "On-Premises Deployment — Install Microsoft products on servers located at your end customer's premises under your management and control.",
          "Demo and Trial Opportunities — Conduct up to 50 user product demos and provide your customers with a complimentary 60-day trial period.",
          "Affiliate Inclusion — Include your affiliates under a single agreement for simplified management.",
          "Academic Offerings — Expand your business with special price offerings tailored to academic end customers.",
          "Simplified Licensing Process — Streamline licensing with the Microsoft Business and Services Agreement (MBSA), reducing paperwork and facilitating support service purchases.",
        ],
      },
    ],
  },
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
    sections: [
      {
        heading: "Disaster Recovery as Service (DRaaS)",
        paragraphs: [
          "Your business data is invaluable. Protecting it from potential disasters is paramount to ensuring continuity and safeguarding your operations. At Rounak Computers, one of the top-notch IT maintenance companies in Dubai, we specialize in offering diverse disaster recovery solutions to mitigate data loss risks from cyberattacks, equipment failures, or human errors. Our seasoned professionals devise robust business continuity and disaster recovery (BCDR) strategies tailored to shield your business from various disaster scenarios. These strategies thereby help minimize downtime, mitigate potential data breaches, and prevent revenue loss.",
        ],
      },
      {
        heading: "Our Tailored Solutions",
        paragraphs: [
          "Each project we undertake is approached with a focus on custom solutions aligned with the client's specific needs. We start with an initial consultation, collaborating closely with key stakeholders to identify critical systems and potential failure points. Subsequently, we draft a comprehensive business continuity plan ensuring seamless business operations even under adverse circumstances.",
        ],
      },
      {
        heading: "Advantages of DRaaS",
        points: [
          "Reduced Downtime — Our business continuity and disaster recovery solutions are tailored to ensure minimized downtime in the event of a disaster.",
          "Increased Security — Integrating security measures into disaster recovery plans ensures data remains secure and compliant with industry standards.",
          "24/7 Operation — A well-crafted disaster recovery plan enables your business to function round the clock, 365 days a year.",
        ],
      },
      {
        heading: "Azure Recovery Services: Enhancing Your BCDR Strategy",
        paragraphs: [
          "Azure Site Recovery (ASR), a DRaaS offering by Microsoft, plays a crucial role in safeguarding data and applications during disasters. By leveraging ASR, you can replicate workloads and applications from a primary site to a secondary location, ensuring seamless continuity in the event of an outage. Azure Backup further enhances data protection by securely storing your business data in the Microsoft Cloud.",
        ],
      },
      {
        heading: "Features of ASR",
        points: [
          "Simple BCDR Solution — Set up and manage replication, failover, and failback from a single location in the Azure portal.",
          "Azure VM Replication — Set up disaster recovery of Azure VMs from a primary site to a secondary location.",
          "On-Premises VM Replication — Replicate on-premises VMs and physical servers to Azure or a secondary physical datacenter.",
          "Workload Replication — Replicate workloads running on supported Azure VMs, on-premises Hyper-V and VMware VMs, and Windows/Linux physical servers.",
          "Data Resilience — Site Recovery orchestrates replication without tampering with application data.",
          "RTO and RPO Targets — Keep recovery time objectives and recovery point objectives within the desired limits.",
          "Testing Without Disruption — Run disaster recovery drills without affecting ongoing replication.",
          "Flexible Failovers — Run planned failovers for expected outages or unplanned failovers for unexpected disasters, then fail back when the primary site is available.",
        ],
      },
    ],
  },
  "migration-services": {
    heading: "Migration Services",
    sections: [
      {
        heading: "Migration Services",
        paragraphs: [
          "Rounak Computers offers Office 365 Migration services in Dubai and other Emirates. Rounak has Microsoft Certified Office 365 Engineers with hands of experience. Rounak is specialized in Office 365 Migration and deployment services. It has carried out more than 100 complex migrations. Office 365 Migrations include On-premises Exchange to Office 365, Hybrid deployment, cutover migrations etc.",
        ],
      },
      {
        heading: "Office 365 Migration- Cloud Migration UAE",
        paragraphs: [
          "Our certified Engineers ensure the Office 365 migration with zero downtime to the end users. If your company does not have a dedicated IT or tech support department, chances are it will call in an office 365 migration company to help sort things out with the transition.",
        ],
      },
      {
        heading: "Migrate to the Cloud",
        paragraphs: [
          "Planning to migrate your infrastructure and data to the cloud, but not sure where to start? Your business workloads don't have to be difficult or daunting to move from on-premises to the cloud. Microsoft is providing two free Cloud Migration Assessments aimed to help you understand what actions you need to take to start moving your apps, data, and infrastructure to the Microsoft Azure Cloud.",
        ],
        points: [
          "Free Datacenter Migration Assessment — Assessment of on-premises applications and servers; identification of application and server dependencies; configuration, TCO and ROI analysis reports.",
          "Free Modern Data Estate Assessment — Transform business applications with Analytics; reimagine your data platforms in the Cloud; gain insights and resources to help you modernize.",
        ],
      },
    ],
  },
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
