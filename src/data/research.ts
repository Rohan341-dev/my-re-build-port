export type ResearchCategory =
  | "Artificial Intelligence"
  | "Large Language Models"
  | "Computer Vision"
  | "Automation"
  | "Software Architecture"
  | "Technical Experiments";

export type ResearchStatus = "Active" | "Experimental" | "Ongoing";

export interface ResearchEntry {
  slug: string;
  index: string;
  title: string;
  category: ResearchCategory;
  status: ResearchStatus;
  description: string;
  tech: string[];
  relatedProject?: string;
}

export const researchCategories: ResearchCategory[] = [
  "Artificial Intelligence",
  "Large Language Models",
  "Computer Vision",
  "Automation",
  "Software Architecture",
  "Technical Experiments",
];

export const research: ResearchEntry[] = [
  {
    slug: "language-model-experiments",
    index: "01",
    title: "Language Model Experiments",
    category: "Large Language Models",
    status: "Active",
    description:
      "Working with large language models for content generation, summarisation, and developer productivity. Exploring prompt engineering, fine-tuning concepts, and practical LLM integration.",
    tech: ["LLM", "Python"],
  },
  {
    slug: "ai-agent-systems",
    index: "02",
    title: "AI Agent Systems",
    category: "Artificial Intelligence",
    status: "Active",
    description:
      "Building autonomous and semi-autonomous agents that can reason, plan, and execute multi-step tasks. Experimenting with tool use, memory, and agent architectures.",
    tech: ["Agents", "Python", "LLM"],
  },
  {
    slug: "computer-vision",
    index: "03",
    title: "Computer Vision",
    category: "Computer Vision",
    status: "Active",
    description:
      "Exploring OpenCV and MediaPipe for real-time image processing, face detection, hand tracking, and vision-based applications connected to real products.",
    tech: ["OpenCV", "MediaPipe", "Python"],
    relatedProject: "face-recognition-attendance",
  },
  {
    slug: "ai-powered-automation",
    index: "04",
    title: "AI-Powered Automation",
    category: "Automation",
    status: "Experimental",
    description:
      "Creating systems that automate repetitive tasks using AI — data processing, content workflows, intelligent form filling, and decision support.",
    tech: ["AI", "Python", "Automation"],
  },
  {
    slug: "saas-architecture",
    index: "05",
    title: "SaaS Architecture Patterns",
    category: "Software Architecture",
    status: "Ongoing",
    description:
      "Studying how to structure multi-product SaaS systems: shared foundations, reusable modules, billing, permissions, and the boundaries that keep a product portfolio maintainable.",
    tech: ["Django", "PostgreSQL", "REST APIs"],
  },
  {
    slug: "developer-productivity",
    index: "06",
    title: "Developer Productivity",
    category: "Technical Experiments",
    status: "Experimental",
    description:
      "Building AI-assisted coding tools, review assistants, and workflow enhancers — exploring how AI can accelerate the building process itself.",
    tech: ["AI", "DevTools"],
  },
  {
    slug: "applied-ai-products",
    index: "07",
    title: "Applied AI Products",
    category: "Artificial Intelligence",
    status: "Active",
    description:
      "Integrating AI capabilities into real products — smart search, recommendation features, and AI-enhanced user experiences that stay practical.",
    tech: ["AI", "SaaS", "Python"],
  },
  {
    slug: "gps-location-systems",
    index: "08",
    title: "GPS & Location Systems",
    category: "Technical Experiments",
    status: "Ongoing",
    description:
      "Experiments with GPS modules, location APIs, device communication, and real-time dashboards — understanding how physical location data flows into digital systems.",
    tech: ["Python", "GPS APIs", "Arduino"],
    relatedProject: "gps-location-systems",
  },
];
