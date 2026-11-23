export type SkillLevel = "core" | "working" | "exploring";

export interface Technology {
  name: string;
  level: SkillLevel;
}

export interface TechnologyGroup {
  key: string;
  title: string;
  description: string;
  items: Technology[];
}

export const skillLevelLabels: Record<SkillLevel, string> = {
  core: "Core",
  working: "Working knowledge",
  exploring: "Exploring",
};

export const technologyGroups: TechnologyGroup[] = [
  {
    key: "frontend",
    title: "Frontend",
    description: "Interfaces, interaction, and design systems for the web.",
    items: [
      { name: "HTML", level: "core" },
      { name: "CSS", level: "core" },
      { name: "JavaScript", level: "core" },
      { name: "TypeScript", level: "working" },
      { name: "React", level: "working" },
      { name: "Next.js", level: "working" },
      { name: "Tailwind CSS", level: "working" },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    description: "Application logic, APIs, and the systems behind the interface.",
    items: [
      { name: "Python", level: "core" },
      { name: "Django", level: "core" },
      { name: "Flask", level: "working" },
      { name: "FastAPI", level: "working" },
      { name: "REST APIs", level: "core" },
    ],
  },
  {
    key: "database",
    title: "Database",
    description: "Modelling and storing the data products depend on.",
    items: [
      { name: "PostgreSQL", level: "working" },
      { name: "SQLite", level: "core" },
    ],
  },
  {
    key: "ai",
    title: "AI & Vision",
    description: "Practical intelligence: language models, vision, and automation.",
    items: [
      { name: "LLMs", level: "working" },
      { name: "AI Agents", level: "exploring" },
      { name: "Computer Vision", level: "working" },
      { name: "OpenCV", level: "working" },
      { name: "MediaPipe", level: "working" },
      { name: "Automation", level: "working" },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    description: "The everyday environment for building and shipping.",
    items: [
      { name: "Git", level: "core" },
      { name: "GitHub", level: "core" },
      { name: "VS Code", level: "core" },
      { name: "Linux", level: "working" },
    ],
  },
];
