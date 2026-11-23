import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  FeaturedProjectCard,
  ProjectCard,
} from "@/components/projects/project-card";
import { featuredProjects, projects } from "@/data/projects";

export function SelectedWork() {
  const [primary, ...rest] = featuredProjects;
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="work" bordered={false} className="pt-16 sm:pt-20 lg:pt-24">
      <Reveal>
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Products, systems,
              <br className="hidden sm:block" /> and experiments.
            </>
          }
          description="A selection of the software I have designed, built, and shipped — from school transportation platforms to business systems and AI experiments. Each one marked with its real stage."
          action={
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              All projects
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          }
        />
      </Reveal>

      <div className="mt-10">
        {primary && (
          <Reveal>
            <FeaturedProjectCard project={primary} />
          </Reveal>
        )}
      </div>

      <div className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {rest.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-faint">
            <span className="uppercase tracking-[0.18em]">Also in the archive</span>
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="link-underline text-muted transition-colors hover:text-ink"
              >
                {project.title}
              </Link>
            ))}
          </div>
          <Link
            href="/projects"
            className="link-underline w-fit text-[12px] font-medium text-brand"
          >
            Browse the full directory
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
