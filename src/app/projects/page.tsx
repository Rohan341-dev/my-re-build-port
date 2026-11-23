import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ProjectDirectory } from "@/components/projects/project-directory";
import { projects, projectCategories, getProjectSlugs } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "The full project directory of Rohan Yadav — SaaS platforms, school and restaurant systems, e-commerce, computer vision, and GPS experiments. Filter by category, status, and technology.",
  path: "/projects",
});

export default function ProjectsPage() {
  const slugs = getProjectSlugs();

  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Projects"
        title={
          <>
            A directory of things
            <br className="hidden lg:block" /> built and explored.
          </>
        }
        description="Every project here is marked with its real stage — launched, in development, prototype, or research. No inflated claims, no invented numbers."
        aside={
          <div className="grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-card/60 backdrop-blur">
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                {projects.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Projects
              </p>
            </div>
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                {projectCategories.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Categories
              </p>
            </div>
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                {slugs.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Case studies
              </p>
            </div>
          </div>
        }
      />

      <Section bordered={false}>
        <ProjectDirectory items={projects} />
      </Section>
    </>
  );
}
