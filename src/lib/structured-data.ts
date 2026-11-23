import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.alias,
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.portrait.src}`,
    email: `mailto:${profile.email}`,
    jobTitle: "Software Engineer",
    description: profile.shortBio,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
    },
    sameAs: socials
      .filter((social) => social.href.startsWith("http"))
      .map((social) => social.href),
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Python",
      "Django",
      "React",
      "Next.js",
      "PostgreSQL",
      "Artificial Intelligence",
      "Large Language Models",
      "Computer Vision",
      "SaaS Architecture",
      "Entrepreneurship",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Code Nest Nepal Pvt. Ltd.",
        url: "https://codenestnep.com",
      },
      {
        "@type": "Organization",
        name: "SajiloCode Pvt. Ltd.",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: profile.name,
    },
  };
}

export function projectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected projects by Rohan Yadav",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${siteConfig.url}/projects/${project.slug}`,
    })),
  };
}
