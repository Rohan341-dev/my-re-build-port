import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TechMarquee } from "@/components/home/tech-marquee";
import { SelectedWork } from "@/components/home/selected-work";
import { AboutPreview } from "@/components/home/about-preview";
import { TechnologyPreview } from "@/components/home/technology-preview";
import { VenturesPreview } from "@/components/home/ventures-preview";
import { ResearchPreview } from "@/components/home/research-preview";
import { AchievementsPreview } from "@/components/home/achievements-preview";
import { ContactSection } from "@/components/contact/contact-section";
import { createMetadata } from "@/lib/seo";
import { projectsSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <SelectedWork />
      <AboutPreview />
      <TechnologyPreview />
      <VenturesPreview />
      <ResearchPreview />
      <AchievementsPreview />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema()) }}
      />
    </>
  );
}
