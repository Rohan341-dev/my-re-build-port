export interface Venture {
  slug: string;
  name: string;
  legalName: string;
  role: string;
  since?: string;
  status: string;
  tagline: string;
  overview: string;
  focus: string[];
  products: string[];
  services: string[];
  contribution: string[];
  url?: string;
  urlLabel?: string;
  accent: {
    from: string;
    to: string;
  };
}

export interface Initiative {
  slug: string;
  name: string;
  role: string;
  year: string;
  status: string;
  description: string;
  focus: string[];
  href?: string;
}

export const ventures: Venture[] = [
  {
    slug: "code-nest-nepal",
    name: "Code Nest Nepal",
    legalName: "Code Nest Nepal Pvt. Ltd.",
    role: "CEO & Founder",
    status: "Active",
    tagline: "From software projects to software systems.",
    overview:
      "Code Nest Nepal is a technology company building the digital infrastructure for Nepali businesses. It brings together SaaS development, business websites, CMS, e-commerce, management systems, CRM, and automation under one product and engineering practice.",
    focus: [
      "SaaS development",
      "Business systems",
      "Product strategy",
      "Team building",
      "Operations",
    ],
    products: [
      "Business management platform",
      "School management systems",
      "Restaurant systems",
      "CRM and lead management",
      "Business websites and CMS",
      "E-commerce platforms",
    ],
    services: [
      "SaaS development",
      "Custom software",
      "Web development",
      "CMS",
      "E-commerce",
      "School management",
      "Restaurant management",
      "CRM",
      "Lead management",
      "Business automation",
    ],
    contribution: [
      "Drives the company's technology strategy and product direction.",
      "Bridges technical execution and business vision.",
      "Builds and develops the team behind the company's products.",
      "Owns the gap between what is technically possible and what clients actually need.",
    ],
    url: "https://codenestnep.com",
    urlLabel: "codenestnep.com",
    accent: { from: "#0A2B2E", to: "#16C8D9" },
  },
  {
    slug: "sajilocode",
    name: "SajiloCode",
    legalName: "SajiloCode Pvt. Ltd.",
    role: "Founder",
    since: "2024",
    status: "Active",
    tagline: "Building software that solves ordinary problems.",
    overview:
      "SajiloCode was created as a product lab — a space to build and ship real-world systems for schools, restaurants, and small businesses. What began with a school management system has grown into a broader portfolio of practical SaaS products and automation tools.",
    focus: [
      "EdTech",
      "Business systems",
      "SaaS",
      "Product development",
      "Team leadership",
    ],
    products: [
      "School management system",
      "Restaurant management",
      "CRM",
      "Billing",
      "SaaS platforms",
      "Business automation",
    ],
    services: [
      "Web development",
      "Custom software",
      "SaaS",
      "School management",
      "Restaurant management",
      "CRM",
      "Billing systems",
      "CMS",
      "E-commerce",
      "ERP",
      "HRM",
      "Automation",
    ],
    contribution: [
      "Founded the company and set its product direction.",
      "Built the initial school management product.",
      "Expanded the portfolio into restaurant, CRM, billing, and automation systems.",
      "Leads product development, engineering, and team building.",
      "Defines the flow from idea to team, product, users, and growth.",
    ],
    accent: { from: "#123026", to: "#19C784" },
  },
];

export const initiatives: Initiative[] = [
  {
    slug: "axisone",
    name: "AxisOne",
    role: "Founder & Developer",
    year: "2024 — Present",
    status: "In Development",
    description:
      "A student platform designed to bring learning, building, and launching into a single ecosystem — learning resources, digital tools, and startup-building frameworks in one place.",
    focus: ["EdTech", "Learning", "Startup Building", "Digital Tools"],
  },
  {
    slug: "shope-ease",
    name: "Shope-ease",
    role: "Founder & Developer",
    year: "2024",
    status: "Launched",
    description:
      "An e-commerce platform launched in 2024, covering electronics, fashion, and fitness with product discovery, cart, checkout, accounts, and order management.",
    focus: ["E-commerce", "Product Discovery", "Online Shopping"],
  },
  {
    slug: "smart-school-route-management",
    name: "Smart School Route Management",
    role: "Lead Developer",
    year: "2024 — Present",
    status: "In Development",
    description:
      "A school transportation safety platform combining GPS tracking, route management, driver monitoring, dashboards, and computer vision.",
    focus: ["GPS", "Safety", "Computer Vision", "EdTech"],
  },
];
