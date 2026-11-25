export const profile = {
  name: "Rohan Yadav",
  alias: "Rohan Codekage",
  firstName: "Rohan",
  lastName: "Yadav",
  eyebrow: "Software Engineer / Technology Builder",
  headline: "Engineering Ideas Into Reality.",
  intro:
    "I build digital products, develop software systems, and explore emerging technologies to solve practical problems.",
  identity: ["Software Engineer.", "Builder.", "Entrepreneur."],
  position: "Software Engineer · Full-Stack Developer · Tech Entrepreneur",
  location: "Nepal",
  based: "Based in Nepal",
  timezone: "Asia/Kathmandu",
  email: "rohanyadav234.np@gmail.com",
  availabilityNote: "Building and open to collaboration.",
  portrait: {
    src: "/assets/rohan-profile-2026.jpg",
    alt: "Formal portrait of Rohan Yadav in a suit and traditional Nepali topi",
    width: 1254,
    height: 1254,
  },
  shortBio:
    "A student programmer and full-stack developer from Nepal, building software, products, and companies around ideas worth exploring.",
  bio: [
    "I'm Rohan Yadav — a software engineer, full-stack developer, and founder based in Nepal, publicly known as Rohan Codekage. My work sits at the intersection of engineering, product, and entrepreneurship.",
    "I didn't start with a plan. I started with a browser, a broken HTML page, and the question: how does this actually work? That question carried me from my first lines of HTML and CSS into backend systems, databases, APIs, full-stack applications, AI experiments, and eventually companies.",
    "Today I'm the founder of SajiloCode Pvt. Ltd. and the CEO & Founder of Code Nest Nepal Pvt. Ltd. — two ventures built around a simple belief: software should solve ordinary, real problems for the people who need it most.",
    "I enjoy the entire process — idea, research, design, code, debug, improve, ship. Every project teaches something, and every failure becomes the foundation for the next attempt.",
  ],
  philosophy: {
    title: "Don't just learn technology. Build something with it.",
    body: "Tutorials end. Projects teach. I care about the full arc of a product: understanding the problem, designing the system, writing the code, and getting it in front of real people.",
  },
  narrative: [
    {
      label: "The first HTML page",
      text: "A browser, a broken page, and a question that refused to go away.",
    },
    {
      label: "The first real project",
      text: "From static pages to full-stack systems — learning by shipping.",
    },
    {
      label: "The first venture",
      text: "The best code matters only when it reaches the people who need it.",
    },
    {
      label: "Building companies",
      text: "Building a company is its own form of engineering — vision, people, and execution.",
    },
  ],
  interests: [
    "Artificial intelligence and large language models",
    "Computer vision and real-time systems",
    "SaaS architecture and product development",
    "Education technology and business systems",
    "Automation and developer tooling",
    "Hardware, GPS, and physical computing",
    "Physics-inspired systems and first-principles thinking",
  ],
  personalInterests: [
    "Mathematics and olympiad-style problem solving",
    "Learning how physical systems work",
    "Building in public and sharing the process",
    "Following AI research and product design",
  ],
  now: [
    {
      label: "Learning",
      value:
        "Advanced AI agent architectures, system design patterns, and product strategy.",
    },
    {
      label: "Building",
      value:
        "Smart School Route Management, SajiloCode products, and Code Nest Nepal.",
    },
    {
      label: "Exploring",
      value:
        "LLM integration, computer vision applications, and SaaS architecture.",
    },
    {
      label: "Thinking about",
      value:
        "How AI can be practically integrated into everyday products and business systems.",
    },
  ],
  principles: [
    {
      title: "Build for real use",
      body: "Every system should answer a practical problem, not just demonstrate a technical idea.",
    },
    {
      title: "Stay honest about the stage",
      body: "Concepts, prototypes, and shipped products are different things — and should be described as such.",
    },
    {
      title: "Own the full arc",
      body: "Idea, research, design, engineering, and delivery. Understanding the whole system makes each part better.",
    },
  ],
  journey: [
    {
      phase: "Beginning",
      title: "Early coding",
      body: "First encounters with programming, HTML, CSS, and the web. The curiosity that started everything.",
    },
    {
      phase: "Foundation",
      title: "Frontend development",
      body: "HTML to CSS to JavaScript — learning the building blocks by creating pages and experimenting with layouts.",
    },
    {
      phase: "Growth",
      title: "Full-stack development",
      body: "Backend, APIs, databases, and frameworks. Moving beyond the frontend into complete systems with Python and Django.",
    },
    {
      phase: "Products",
      title: "Product development",
      body: "SaaS, management systems, e-commerce, and EdTech. Shifting from writing code to building products.",
    },
    {
      phase: "Exploration",
      title: "AI exploration",
      body: "Large language models, AI agents, computer vision, and automation — the frontier that keeps expanding.",
    },
    {
      phase: "Ventures",
      title: "Entrepreneurship",
      body: "SajiloCode and Code Nest Nepal — learning what it takes to build not just software, but businesses.",
    },
  ],
} as const;

export type Profile = typeof profile;
