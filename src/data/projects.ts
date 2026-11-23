export type ProjectStatus =
  | "Launched"
  | "In Development"
  | "Prototype"
  | "Research";

export type ProjectCategory =
  | "SaaS"
  | "Platform"
  | "AI & Vision"
  | "E-Commerce"
  | "Hardware";

export type ProjectLinkKind = "demo" | "github" | "external";

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

export interface ArchitectureBlock {
  title: string;
  body: string;
}

export interface ProjectCover {
  from: string;
  to: string;
  monogram: string;
  pattern: "grid" | "orbit" | "waves" | "mesh";
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  role: string;
  summary: string;
  description: string;
  tech: string[];
  tags: string[];
  cover: ProjectCover;
  links: ProjectLink[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: ArchitectureBlock[];
  contribution: string[];
  challenges: string[];
  outcomes?: string[];
  screenshotsNote: string;
}

export const projectCategories: ProjectCategory[] = [
  "SaaS",
  "Platform",
  "AI & Vision",
  "E-Commerce",
  "Hardware",
];

export const projects: Project[] = [
  {
    slug: "smart-school-route-management",
    title: "Smart School Route Management",
    shortTitle: "Smart School Route",
    subtitle: "School transportation tracking and safety platform",
    category: "Platform",
    year: "2024 — Present",
    status: "In Development",
    featured: true,
    role: "Lead Developer",
    summary:
      "A school transportation platform combining GPS tracking, route management, driver monitoring, and camera-based safety checks in one real-time system.",
    description:
      "A school transportation platform combining GPS tracking, route management, driver monitoring, and camera-based safety checks in one real-time system.",
    tech: [
      "Python",
      "Django",
      "FastAPI",
      "OpenCV",
      "MediaPipe",
      "PostgreSQL",
    ],
    tags: ["GPS", "Computer Vision", "Safety", "Dashboards"],
    cover: {
      from: "#0C3A2B",
      to: "#19C784",
      monogram: "SR",
      pattern: "orbit",
      label: "Route intelligence",
    },
    links: [],
    overview:
      "Smart School Route Management is a school transportation system designed around visibility and safety. It connects vehicle location data, route planning, driver monitoring, and camera-based checks into a single operational view for schools and parents.",
    problem:
      "School transportation often runs on limited visibility. Parents do not know where the bus is, schools cannot monitor routes in real time, and safety incidents can go undetected until it is too late.",
    solution:
      "A connected system that brings GPS tracking, route management, driver monitoring, timestamps, safety alerts, and camera-based computer vision into one dashboard — so schools can see what is happening and parents can trust the journey.",
    features: [
      "Live GPS location tracking for school vehicles",
      "Route planning and route management",
      "Driver monitoring and trip timestamps",
      "Real-time operational dashboards",
      "Safety alerts and event visibility",
      "Camera-based monitoring using computer vision",
      "Location history and route records",
    ],
    architecture: [
      {
        title: "Location ingestion",
        body: "GPS location data flows from vehicles into a Python backend built with Django and FastAPI, where trips, routes, and timestamps are recorded.",
      },
      {
        title: "Application layer",
        body: "Django models and REST APIs manage schools, vehicles, drivers, routes, and alerts, keeping operational data consistent.",
      },
      {
        title: "Vision layer",
        body: "OpenCV and MediaPipe process camera input for monitoring-oriented checks, connecting physical observations to the digital record.",
      },
      {
        title: "Data and dashboards",
        body: "PostgreSQL stores relational data while dashboards surface live status, route progress, and safety events for operators.",
      },
    ],
    contribution: [
      "Designed the product concept and system architecture.",
      "Built the backend data model and APIs for routes, vehicles, and trips.",
      "Explored computer vision for camera-based monitoring.",
      "Designed the operational dashboard and safety-alert experience.",
    ],
    challenges: [
      "Making real-time location data reliable and understandable for non-technical school staff.",
      "Combining GPS, vision, and dashboard concerns into one coherent product.",
      "Designing for safety-critical situations without overpromising what the system can detect.",
    ],
    screenshotsNote:
      "Interface previews are being prepared. This project is still in development, so no product screenshots are published yet.",
  },
  {
    slug: "codenest-executive-suite",
    title: "CodeNest Executive Suite",
    shortTitle: "Executive Suite",
    subtitle: "Business management platform for modern operations",
    category: "SaaS",
    year: "Ongoing",
    status: "Prototype",
    featured: true,
    role: "CEO & Founder — Product Lead",
    summary:
      "A business management platform concept from Code Nest Nepal that brings CRM, billing, and day-to-day operations into one workspace.",
    description:
      "A business management platform concept from Code Nest Nepal that brings CRM, billing, and day-to-day operations into one workspace.",
    tech: ["Next.js", "React", "Django", "PostgreSQL", "REST APIs"],
    tags: ["CRM", "Billing", "Business Systems", "SaaS"],
    cover: {
      from: "#0A2B2E",
      to: "#16C8D9",
      monogram: "CE",
      pattern: "grid",
      label: "Operations suite",
    },
    links: [
      {
        label: "Code Nest Nepal",
        href: "https://codenestnep.com",
        kind: "external",
      },
    ],
    overview:
      "CodeNest Executive Suite is a business management platform concept developed under Code Nest Nepal. It explores how CRM, billing, and operational workflows can live in a single, well-designed workspace rather than a set of disconnected tools.",
    problem:
      "Small and growing businesses often manage customer relationships, billing, and operations across spreadsheets and separate applications. The result is duplicated work, unclear records, and decisions made without a reliable view of the business.",
    solution:
      "A unified workspace that connects customer records, billing, and operational workflows — designed to be approachable for teams that do not have dedicated software administrators.",
    features: [
      "Customer and lead management (CRM)",
      "Billing and invoice workflows",
      "Operational dashboards",
      "Role-aware business workspace",
      "Reusable modules for different business types",
    ],
    architecture: [
      {
        title: "Client application",
        body: "A Next.js and React interface provides the dashboards and workflows, with Tailwind CSS used for a consistent design system.",
      },
      {
        title: "Service layer",
        body: "A Django backend exposes REST APIs that handle business logic, permissions, and integrations.",
      },
      {
        title: "Data model",
        body: "PostgreSQL holds relational business data with a model designed around reusable modules instead of one-off features.",
      },
    ],
    contribution: [
      "Defined the product direction and the core business workflows.",
      "Led the platform's scope across CRM, billing, and operations.",
      "Contributed to the frontend experience and backend data model.",
    ],
    challenges: [
      "Keeping a broad business platform focused enough to be usable.",
      "Designing reusable modules without making the product feel generic.",
      "Balancing a polished interface with practical, everyday workflows.",
    ],
    screenshotsNote:
      "This product is at prototype stage. Screenshots will be published when the interface is ready for public review.",
  },
  {
    slug: "restro",
    title: "RESTRO",
    shortTitle: "RESTRO",
    subtitle: "Restaurant management SaaS",
    category: "SaaS",
    year: "Ongoing",
    status: "In Development",
    featured: true,
    role: "Product Developer",
    summary:
      "A restaurant management system within the SajiloCode product line — covering menus, orders, billing, and daily restaurant operations.",
    description:
      "A restaurant management system within the SajiloCode product line — covering menus, orders, billing, and daily restaurant operations.",
    tech: ["Python", "Django", "JavaScript", "PostgreSQL", "REST APIs"],
    tags: ["Restaurants", "Billing", "Operations", "SaaS"],
    cover: {
      from: "#1B2A1D",
      to: "#19C784",
      monogram: "RS",
      pattern: "waves",
      label: "Restaurant operations",
    },
    links: [],
    overview:
      "RESTRO is a restaurant management product being built within SajiloCode's portfolio of business systems. It focuses on the operational core of a restaurant: the menu, the order flow, and the billing that ties a service day together.",
    problem:
      "Restaurants often run on a mix of paper tickets, disconnected spreadsheets, and generic software that does not match how their service actually works. Orders get lost, billing slows down, and owners lack a clear view of daily operations.",
    solution:
      "A focused management system that connects menus, orders, and billing in a workflow designed for day-to-day restaurant use — practical, local, and affordable.",
    features: [
      "Menu and category management",
      "Order capture and order status tracking",
      "Billing and receipt workflows",
      "Daily operational records",
      "Role-based access for restaurant teams",
    ],
    architecture: [
      {
        title: "Backend",
        body: "Django models and REST APIs handle menus, orders, billing records, and staff permissions.",
      },
      {
        title: "Interface",
        body: "A JavaScript-based interface keeps the order and billing flow fast and legible during service hours.",
      },
      {
        title: "Data",
        body: "PostgreSQL stores transactional restaurant data with relationships between orders, items, and bills.",
      },
    ],
    contribution: [
      "Shaped the restaurant product concept within SajiloCode.",
      "Built core management and billing workflows.",
      "Designed the interface around fast, repeated daily operations.",
    ],
    challenges: [
      "Designing for speed and clarity during busy service periods.",
      "Keeping the system flexible enough for different restaurant formats.",
      "Making billing and order records reliable from day one.",
    ],
    screenshotsNote:
      "RESTRO is in active development. Screenshots will be added once the interface has reached a stable public build.",
  },
  {
    slug: "face-recognition-attendance",
    title: "Face Recognition Attendance",
    shortTitle: "Face Attendance",
    subtitle: "Computer vision attendance experiment",
    category: "AI & Vision",
    year: "Ongoing",
    status: "Prototype",
    featured: true,
    role: "Developer",
    summary:
      "An attendance system prototype that uses computer vision to detect and recognize faces, turning camera input into attendance records.",
    description:
      "An attendance system prototype that uses computer vision to detect and recognize faces, turning camera input into attendance records.",
    tech: ["Python", "OpenCV", "MediaPipe", "Flask"],
    tags: ["Computer Vision", "Face Detection", "Automation", "Flask"],
    cover: {
      from: "#0B2630",
      to: "#16C8D9",
      monogram: "FR",
      pattern: "mesh",
      label: "Vision systems",
    },
    links: [],
    overview:
      "Face Recognition Attendance is a computer vision prototype exploring how a camera can replace manual attendance processes. It combines face detection, recognition, and a simple attendance record into one experimental workflow.",
    problem:
      "Manual attendance is slow, easy to falsify, and produces records that are hard to analyse. Camera-based attendance offers a faster, hands-free alternative — but reliability, privacy, and environmental conditions all matter.",
    solution:
      "A prototype that detects faces from a live camera feed, matches recognized identities, and records attendance automatically, built with Python, OpenCV, MediaPipe, and Flask.",
    features: [
      "Live camera face detection",
      "Face recognition and identity matching",
      "Automatic attendance record creation",
      "Basic attendance lookup through a Flask interface",
      "Reusable detection pipeline for other vision experiments",
    ],
    architecture: [
      {
        title: "Capture",
        body: "OpenCV reads frames from a camera and prepares them for processing.",
      },
      {
        title: "Detection and recognition",
        body: "MediaPipe and Python-based vision logic detect faces and compare them against known identities.",
      },
      {
        title: "Application",
        body: "A Flask application records matches and exposes a simple attendance view.",
      },
    ],
    contribution: [
      "Built the vision pipeline for detection and recognition.",
      "Connected recognition results to an attendance record.",
      "Explored the limits of camera-based attendance in practical conditions.",
    ],
    challenges: [
      "Handling lighting, angles, and movement in real camera conditions.",
      "Balancing recognition accuracy with speed.",
      "Thinking carefully about privacy and responsible use of biometric data.",
    ],
    screenshotsNote:
      "This is a prototype and no public screenshots are available yet. The project remains an active computer vision experiment.",
  },
  {
    slug: "shope-ease",
    title: "Shope-ease",
    shortTitle: "Shope-ease",
    subtitle: "E-commerce platform for product discovery and online shopping",
    category: "E-Commerce",
    year: "2024",
    status: "Launched",
    featured: true,
    role: "Founder & Developer",
    summary:
      "An e-commerce platform launched in 2024, covering electronics, fashion, and fitness with catalogue, search, cart, checkout, and order management.",
    description:
      "An e-commerce platform launched in 2024, covering electronics, fashion, and fitness with catalogue, search, cart, checkout, and order management.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Django", "SQLite"],
    tags: ["E-commerce", "Product Discovery", "Django"],
    cover: {
      from: "#13291F",
      to: "#4ADE80",
      monogram: "SE",
      pattern: "grid",
      label: "Commerce platform",
    },
    links: [],
    overview:
      "Shope-ease is a launched e-commerce platform built as a real-world experiment in digital commerce. It brings product listings, discovery, accounts, and ordering into a complete shopping experience across electronics, fashion, and fitness.",
    problem:
      "Generic e-commerce platforms often feel disconnected from local markets, and using them means giving up control over the customer experience.",
    solution:
      "A self-built commerce platform with a complete product flow — catalogue, search, cart, checkout, user accounts, and order management — launched to learn what it takes to run a real online store.",
    features: [
      "Product catalogue across multiple categories",
      "Product discovery and search",
      "Cart and checkout flow",
      "User accounts",
      "Order management",
    ],
    architecture: [
      {
        title: "Presentation",
        body: "Server-rendered pages built with HTML, CSS, and JavaScript with a responsive storefront experience.",
      },
      {
        title: "Application",
        body: "A Django backend manages products, categories, accounts, carts, and orders.",
      },
      {
        title: "Data",
        body: "SQLite stores catalogue and order data for the launched build.",
      },
    ],
    contribution: [
      "Built the storefront and product discovery experience.",
      "Developed the catalogue, cart, checkout, and order flows.",
      "Launched the platform and operated it as a real commerce experiment.",
    ],
    challenges: [
      "Designing a shopping experience that feels trustworthy on a small budget.",
      "Handling the full order lifecycle from browsing to fulfilment.",
      "Learning operations and customer expectations beyond the code.",
    ],
    outcomes: [
      "Launched as a live e-commerce platform in 2024.",
    ],
    screenshotsNote:
      "Storefront screenshots from the 2024 launch are not included in this rebuild. The platform remains a verified launched project.",
  },
  {
    slug: "axisone",
    title: "AxisOne",
    shortTitle: "AxisOne",
    subtitle: "Student platform to learn, build, and launch",
    category: "Platform",
    year: "2024 — Present",
    status: "In Development",
    featured: false,
    role: "Founder & Developer",
    summary:
      "A student platform concept that brings learning resources, digital tools, and startup-building frameworks into one place.",
    description:
      "A student platform concept that brings learning resources, digital tools, and startup-building frameworks into one place.",
    tech: ["Next.js", "React", "Tailwind CSS", "Python", "PostgreSQL"],
    tags: ["EdTech", "Learning", "Startup Building"],
    cover: {
      from: "#10302B",
      to: "#2DD4BF",
      monogram: "A1",
      pattern: "orbit",
      label: "Learn · Build · Launch",
    },
    links: [],
    overview:
      "AxisOne is a student platform designed around a single idea: learning, building, and launching should not live in separate places. It brings resources, digital tools, and startup-building frameworks into one ecosystem.",
    problem:
      "Students often have access to learning material but no structured path from education to creation to launching something real.",
    solution:
      "A unified platform where students can learn, use practical digital tools, and follow frameworks for building and launching their own products.",
    features: [
      "Learning resources organised for practical progress",
      "Digital tools for building",
      "Startup-building frameworks",
      "Productivity features for student builders",
    ],
    architecture: [
      {
        title: "Frontend",
        body: "A Next.js and React application with a Tailwind CSS design system.",
      },
      {
        title: "Backend",
        body: "A Python backend manages accounts, resources, and platform data.",
      },
      {
        title: "Data",
        body: "PostgreSQL stores structured learning and product-building content.",
      },
    ],
    contribution: [
      "Defined the AxisOne concept and product direction.",
      "Designed the learning-to-launch workflow.",
      "Built the frontend experience and platform structure.",
    ],
    challenges: [
      "Turning a broad student ecosystem into a focused first product.",
      "Designing a workflow that supports both learning and shipping.",
    ],
    screenshotsNote:
      "AxisOne is in development. Screenshots will be published when the platform reaches a public build.",
  },
  {
    slug: "sajilocode",
    title: "SajiloCode",
    shortTitle: "SajiloCode",
    subtitle: "Technology and product initiative for practical business software",
    category: "SaaS",
    year: "2024 — Present",
    status: "Launched",
    featured: false,
    role: "Founder",
    summary:
      "A product lab and technology initiative building school management, restaurant systems, CRM, billing, and business automation.",
    description:
      "A product lab and technology initiative building school management, restaurant systems, CRM, billing, and business automation.",
    tech: [
      "Python",
      "Django",
      "JavaScript",
      "SQLite",
      "PostgreSQL",
      "REST APIs",
    ],
    tags: ["SaaS", "EdTech", "Business Systems", "Automation"],
    cover: {
      from: "#123026",
      to: "#19C784",
      monogram: "SC",
      pattern: "mesh",
      label: "Product lab",
    },
    links: [],
    overview:
      "SajiloCode is a technology and product initiative founded in 2024. It began as a space to build real-world systems for Nepali schools and businesses, and has expanded into a portfolio of management products and automation tools.",
    problem:
      "Schools, restaurants, and small businesses in Nepal often rely on manual processes, paper records, or expensive imported software that does not fit how they actually operate.",
    solution:
      "A product lab that designs affordable, localised software — starting with a school management system and expanding into restaurant management, CRM, billing, SaaS platforms, and business automation.",
    features: [
      "School management systems",
      "Restaurant management systems",
      "CRM and lead management",
      "Billing systems",
      "Business automation tooling",
      "SaaS products for local businesses",
    ],
    architecture: [
      {
        title: "Shared foundation",
        body: "Reusable Django modules and REST APIs provide a common base across products.",
      },
      {
        title: "Product line",
        body: "Each product solves a specific operational problem while sharing authentication, data, and billing patterns.",
      },
      {
        title: "Delivery",
        body: "Products are built for practical deployment in Nepali schools, restaurants, and small businesses.",
      },
    ],
    contribution: [
      "Founded SajiloCode and set its product direction.",
      "Built the initial school management product.",
      "Expanded the portfolio into restaurant, CRM, billing, and automation systems.",
      "Led product, development, and team building.",
    ],
    challenges: [
      "Building for businesses with limited technical capacity.",
      "Keeping products affordable without compromising quality.",
      "Growing a product portfolio while running a small team.",
    ],
    outcomes: ["Founded in 2024 as a technology and product initiative."],
    screenshotsNote:
      "Product screenshots are not published yet. Detailed previews will be added as each product is released.",
  },
  {
    slug: "gps-location-systems",
    title: "GPS & Location Systems",
    shortTitle: "GPS Systems",
    subtitle: "Location data, hardware, and real-time tracking experiments",
    category: "Hardware",
    year: "2024",
    status: "Research",
    featured: false,
    role: "Developer & Researcher",
    summary:
      "Engineering experiments connecting GPS modules, location APIs, device communication, and real-time dashboards.",
    description:
      "Engineering experiments connecting GPS modules, location APIs, device communication, and real-time dashboards.",
    tech: ["Python", "JavaScript", "GPS APIs", "Arduino", "REST APIs"],
    tags: ["GPS", "Hardware", "Real-time Data", "Arduino"],
    cover: {
      from: "#0B1F2A",
      to: "#16C8D9",
      monogram: "GP",
      pattern: "waves",
      label: "Location systems",
    },
    links: [],
    overview:
      "GPS & Location Systems is a set of engineering experiments exploring how physical location data flows into digital systems — from GPS modules and devices to APIs, dashboards, and applications.",
    problem:
      "Location-aware products depend on a reliable bridge between hardware and software. Understanding that bridge is essential before building real tracking systems.",
    solution:
      "A series of experiments with GPS modules, location APIs, device communication, and real-time dashboards that establish the foundation for projects like Smart School Route Management.",
    features: [
      "GPS module data capture",
      "Device-to-server communication experiments",
      "Location API integration",
      "Real-time dashboard prototypes",
      "Hardware integration with Arduino",
    ],
    architecture: [
      {
        title: "Device layer",
        body: "GPS modules and Arduino-based hardware capture location data in physical environments.",
      },
      {
        title: "Transport",
        body: "Python services and REST APIs move location data from devices into software systems.",
      },
      {
        title: "Visualisation",
        body: "JavaScript dashboards explore how live location data can be presented clearly.",
      },
    ],
    contribution: [
      "Explored GPS hardware and data capture.",
      "Built device-to-server communication experiments.",
      "Prototyped live location dashboards.",
    ],
    challenges: [
      "Handling unreliable signals and noisy location data.",
      "Connecting constrained hardware to web systems.",
      "Presenting live location without overwhelming the user.",
    ],
    screenshotsNote:
      "These are research experiments. Visual previews are limited to internal prototypes.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getAllProjectTech(): string[] {
  const set = new Set<string>();
  projects.forEach((project) => project.tech.forEach((tech) => set.add(tech)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
