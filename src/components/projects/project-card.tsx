import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectArt } from "@/components/ui/project-art";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function TechList({ tech, limit = 4 }: { tech: string[]; limit?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.slice(0, limit).map((item) => (
        <span
          key={item}
          className="rounded-md border border-line bg-bg-secondary/60 px-2 py-1 text-[10.5px] font-medium tracking-wide text-muted"
        >
          {item}
        </span>
      ))}
      {tech.length > limit && (
        <span className="rounded-md px-2 py-1 text-[10.5px] text-faint">
          +{tech.length - limit}
        </span>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  className,
  showFeatured = false,
}: {
  project: Project;
  className?: string;
  showFeatured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group flex flex-col", className)}
    >
      <div className="relative overflow-hidden rounded-xl border border-line bg-card">
        <ProjectArt
          cover={project.cover}
          title={project.title}
          className="aspect-[16/10] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.04]" />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <StatusBadge status={project.status} />
            {showFeatured && project.featured && (
              <span className="rounded-full border border-brand/25 bg-brand/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-brand">
                Featured
              </span>
            )}
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-faint">
            {project.year}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-4">
          <TechList tech={project.tech} />
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-4 text-[11px]">
          <span className="uppercase tracking-[0.16em] text-faint">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors group-hover:text-brand">
            Case study
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid gap-3 rounded-2xl border border-line bg-card p-3 transition-colors duration-500 hover:border-brand/30 sm:p-4 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="relative overflow-hidden rounded-xl">
        <ProjectArt
          cover={project.cover}
          title={project.title}
          className="aspect-[16/11] min-h-[240px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] lg:aspect-auto lg:h-full"
        />
      </div>

      <div className="flex flex-col justify-between gap-8 p-3 sm:p-5">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-[10px] uppercase tracking-[0.18em] text-faint">
              {project.category} · {project.year}
            </span>
          </div>

          <h3 className="mt-5 font-display text-2xl font-medium leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-brand sm:text-[28px]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-5">
            <TechList tech={project.tech} limit={5} />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-line pt-4">
          <span className="text-[11px] uppercase tracking-[0.18em] text-faint">
            {project.role}
          </span>
          <span className="inline-flex items-center gap-2 text-[12px] font-medium text-ink transition-colors group-hover:text-brand">
            Read case study
            <span className="grid size-7 place-items-center rounded-full border border-line transition-colors group-hover:border-brand/40">
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
