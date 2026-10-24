export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "microsoft-365-security-checklist",
    category: "Microsoft 365",
    title: "A practical Microsoft 365 security checklist for small businesses",
    excerpt:
      "A straightforward review of accounts, access, sharing and recovery can make your Microsoft 365 environment easier to manage and more resilient.",
    readTime: "6 min read",
    sections: [
      {
        heading: "Start with accounts and sign-in",
        paragraphs: [
          "Every user account is a route into your business data. Begin with a current list of staff, administrators and external guests, and remove access that is no longer needed.",
          "Require multi-factor authentication for all users, with particular care for administrator accounts. Keep administrator access limited to named people who need it, and use separate admin accounts for privileged work.",
        ],
        points: [
          "Remove or disable accounts when people leave.",
          "Review administrator roles and guest accounts regularly.",
          "Use strong sign-in policies for remote access.",
        ],
      },
      {
        heading: "Review how information is shared",
        paragraphs: [
          "Files and mailboxes can become widely accessible over time. Check SharePoint and OneDrive permissions, shared links and Teams membership to confirm that people can access only what they need.",
          "Agree on simple rules for external sharing. A quick permissions review is especially useful after team changes, new projects or a move to Microsoft 365.",
        ],
      },
      {
        heading: "Prepare for suspicious messages",
        paragraphs: [
          "Technical email protections help reduce risk, but staff still need a clear way to report messages that look unusual. Make sure reporting is easy and that someone is responsible for following up.",
          "Use the security controls included in your licences where appropriate, and review their configuration rather than assuming that defaults match your organisation's needs.",
        ],
      },
      {
        heading: "Plan recovery, not just retention",
        paragraphs: [
          "Retention settings and backups serve different purposes. Decide which information must be retained, how long it should be kept and how quickly key services need to be restored after an incident or accidental deletion.",
          "Document who can initiate recovery and test the process periodically. A plan is only useful if your team knows how to use it.",
        ],
      },
    ],
  },
  {
    slug: "planning-a-cloud-migration",
    category: "Cloud",
    title: "What to consider before moving business workloads to the cloud",
    excerpt:
      "A successful cloud move starts with business goals and a clear view of applications, dependencies, costs and recovery requirements.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Define what success looks like",
        paragraphs: [
          "Cloud migration is a means to an outcome, not an outcome by itself. Identify the issue you want to solve: capacity constraints, resilience, remote access, ageing infrastructure or the time required to maintain systems.",
          "Set measurable expectations before comparing platforms. This makes it easier to decide what should move, what should stay and how to judge the result.",
        ],
      },
      {
        heading: "Map applications and dependencies",
        paragraphs: [
          "Create an inventory of the systems in scope, who uses them and what they depend on. Include identity, databases, integrations, network connections, licensing and data flows.",
          "Some workloads can move with minimal changes; others may need redesign or may be better left where they are for now. A dependency map helps avoid surprises during cutover.",
        ],
      },
      {
        heading: "Estimate the full cost",
        paragraphs: [
          "Look beyond the headline compute price. Include storage, data transfer, backups, monitoring, support, security controls, licences and the effort needed to operate the environment.",
          "Decide who will review usage and budgets after launch. Regular cost reviews can identify resources that are no longer needed or are sized above actual demand.",
        ],
      },
      {
        heading: "Move in stages and test recovery",
        paragraphs: [
          "A limited pilot can validate assumptions before critical services move. Set clear acceptance checks, a change window and a rollback plan for each stage.",
          "Test backup restoration and recovery objectives in the target environment. Confirm that the people responsible for operations can monitor and support the new setup after migration.",
        ],
      },
    ],
  },
  {
    slug: "planning-cctv-for-your-premises",
    category: "Security",
    title: "Planning CCTV coverage for an office, warehouse or retail space",
    excerpt:
      "Useful camera coverage comes from understanding the site, lighting, viewing needs, network and access controls before equipment is selected.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Begin with the purpose of each camera",
        paragraphs: [
          "List the areas that need monitoring and why. An entrance may require a clear view of people arriving, while a loading area may need enough context to understand activity across a wider space.",
          "Walk the site at different times of day. Shelving, doors, reflections and changing light can create blind spots that are easy to miss on a floor plan.",
        ],
      },
      {
        heading: "Match the camera to the conditions",
        paragraphs: [
          "Resolution is only one part of image quality. Distance, field of view, lighting, mounting height and the detail you need to recognise all affect camera selection and placement.",
          "Consider low-light conditions and backlighting, and confirm that the proposed position gives a useful view without obstructions.",
        ],
      },
      {
        heading: "Plan storage, network and access",
        paragraphs: [
          "Estimate how much footage you need to retain and how quickly it may need to be reviewed. These requirements affect recording capacity, network design and the ongoing cost of the system.",
          "Restrict viewing and administration to authorised people. Use secure remote access, keep devices updated and agree how footage requests and account changes will be handled.",
        ],
      },
      {
        heading: "Include maintenance in the plan",
        paragraphs: [
          "A camera that is out of focus, offline or blocked may go unnoticed without routine checks. Assign responsibility for reviewing system health and responding to faults.",
          "Before handover, test the views, recording and playback process with the people who will use the system. Keep a record of camera locations and key settings for future maintenance.",
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
