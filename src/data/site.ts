export const siteConfig = {
  name: "Rohan Yadav",
  alias: "Rohan Codekage",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://rohan.codenestnep.com",
  title: "Rohan Yadav | Software Engineer & Tech Entrepreneur",
  shortTitle: "Rohan Yadav",
  description:
    "Rohan Yadav is a software engineer, full-stack developer, and founder based in Nepal. He builds digital products, software systems, and technology ventures — engineering ideas into reality.",
  tagline: "Engineering Ideas Into Reality.",
  locale: "en_US",
  location: "Nepal",
  email: "rohanyadav234.np@gmail.com",
  keywords: [
    "Rohan Yadav",
    "Rohan Codekage",
    "Software Engineer Nepal",
    "Full-Stack Developer",
    "Tech Entrepreneur",
    "Django Developer",
    "Next.js Developer",
    "Code Nest Nepal",
    "SajiloCode",
    "AI Engineer",
    "Computer Vision",
    "SaaS Developer",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
