export type AchievementKind =
  | "Bootcamp"
  | "Course"
  | "Conference"
  | "Competition"
  | "Milestone";

export interface Achievement {
  slug: string;
  title: string;
  organizer: string;
  date: string;
  kind: AchievementKind;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  evidenceNote?: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  {
    slug: "m3-bootcamp",
    title: "M³ Bootcamp",
    organizer: "Mathematical Institute in Nepal",
    date: "2025",
    kind: "Bootcamp",
    description:
      "Completed the M³ bootcamp program at the Mathematical Institute in Nepal — an intensive mathematics program focused on structured problem solving.",
    image: {
      src: "/assets/certificate-m3-bootcamp.jpeg",
      alt: "M³ Bootcamp certificate of appreciation from the Mathematical Institute in Nepal",
      width: 1280,
      height: 904,
    },
    evidenceNote: "Certificate of appreciation",
    featured: true,
  },
  {
    slug: "leroy-ai-course",
    title: "Leroy AI Course",
    organizer: "Leroy AI",
    date: "Date not specified",
    kind: "Course",
    description:
      "Completed a specialised AI training course with Leroy AI, building a foundation for applied AI and large language model work.",
    image: {
      src: "/assets/certificate-leroy-ai.jpeg",
      alt: "Leroy AI course certificate",
      width: 1600,
      height: 1131,
    },
    evidenceNote: "Certificate of completion",
    featured: true,
  },
  {
    slug: "cloudlet-ai-conference",
    title: "3rd Cloudlet Tech Conference",
    organizer: "CloudNepal.net",
    date: "2026",
    kind: "Conference",
    description:
      "Received a certificate of achievement for active participation and contribution at the 3rd Cloudlet Tech Conference 2026, themed “Shaping the Future: Harmonizing Human Intelligence and AI”.",
    image: {
      src: "/assets/certificate-cloudlet-ai.png",
      alt: "Certificate of achievement from the 3rd Cloudlet Tech Conference 2026",
      width: 2000,
      height: 1414,
    },
    evidenceNote: "Certificate of achievement",
    featured: true,
  },
  {
    slug: "professional-development",
    title: "Google Certified Full Stack Development",
    organizer: "Broadway Infosys",
    date: "July 2026",
    kind: "Course",
    description:
      "Completed the Google Certified Full Stack Development course with Broadway Infosys, awarded on July 12, 2026, covering the skills required to work as a full-stack developer.",
    image: {
      src: "/assets/certificate-completion.png",
      alt: "Google Certified Full Stack Development certificate of completion from Broadway Infosys",
      width: 2000,
      height: 1414,
    },
    evidenceNote: "Certificate of completion",
  },
  {
    slug: "mathematics-competitions",
    title: "Mathematics Competitions",
    organizer: "Various",
    date: "2024",
    kind: "Competition",
    description:
      "Participated in mathematics competitions and olympiad-level problem solving — an ongoing interest that shapes how I approach engineering problems.",
  },
  {
    slug: "sajilocode-founded",
    title: "SajiloCode founded",
    organizer: "SajiloCode Pvt. Ltd.",
    date: "2024",
    kind: "Milestone",
    description:
      "Founded SajiloCode, a technology initiative building management systems, SaaS products, and business automation tools.",
  },
  {
    slug: "shope-ease-launched",
    title: "Shope-ease launched",
    organizer: "Shope-ease",
    date: "2024",
    kind: "Milestone",
    description:
      "Built and launched an e-commerce platform covering electronics, fashion, and fitness products.",
  },
  {
    slug: "smart-school-route-system",
    title: "Smart School Route System",
    organizer: "Independent project",
    date: "2024 — 2025",
    kind: "Milestone",
    description:
      "Designed and built a comprehensive school transportation safety platform combining GPS, computer vision, and real-time dashboards.",
  },
  {
    slug: "ai-llm-experiments",
    title: "AI and LLM experiments",
    organizer: "Independent research",
    date: "2025",
    kind: "Milestone",
    description:
      "Started active experimentation with large language models, AI agents, and applied artificial intelligence.",
  },
  {
    slug: "building-in-public",
    title: "Building in public",
    organizer: "Ongoing",
    date: "Ongoing",
    kind: "Milestone",
    description:
      "Sharing the journey of learning, building, and creating technology — documenting both the shipped work and the process behind it.",
  },
];

export const featuredAchievements = achievements.filter(
  (achievement) => achievement.featured,
);

export const certificateAchievements = achievements.filter(
  (achievement) => achievement.image,
);

export const milestoneAchievements = achievements.filter(
  (achievement) => !achievement.image,
);
