export const homeFaqs = [
  {
    question: "What IT products and services does Rounak Computers provide?",
    answer:
      "Rounak Computers provides IT products and services for businesses, including hardware and software, Microsoft solutions, cloud services, structured cabling, CCTV, telephony, managed IT, and security solutions.",
  },
  {
    question: "Can you help our business move to the cloud?",
    answer:
      "Yes. Rounak Computers helps businesses plan and carry out cloud migrations, with services that include Microsoft Azure, AWS, Alibaba Cloud, Huawei Cloud, cloud backup, and disaster recovery.",
  },
  {
    question: "Do you provide ongoing IT support?",
    answer:
      "Rounak Computers offers managed IT services, onsite support, and annual maintenance contracts to help businesses maintain their IT infrastructure.",
  },
  {
    question: "Can you recommend hardware and software for our business?",
    answer:
      "The team can help you select business hardware and software based on your requirements, including Microsoft products, computers, laptops, servers, CCTV, and telephony solutions.",
  },
  {
    question: "Which areas does Rounak Computers serve?",
    answer:
      "Rounak Computers is based in Dubai and provides IT and cloud solutions to businesses in Dubai and across the UAE.",
  },
  {
    question: "How can I discuss my company's IT requirements?",
    answer:
      "Contact the Rounak Computers team through the enquiry page to discuss your requirements and find the right products or services for your business.",
  },
] as const;

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};
