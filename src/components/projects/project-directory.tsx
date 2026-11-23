"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { RotateCcw, Search, SlidersHorizontal, X } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
  type ProjectStatus,
} from "@/data/projects";
import { cn } from "@/lib/utils";

const statuses: ProjectStatus[] = [
  "Launched",
  "In Development",
  "Prototype",
  "Research",
];

type CategoryFilter = ProjectCategory | "All";
type StatusFilter = ProjectStatus | "All";

export function ProjectDirectory({ items }: { items: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [status, setStatus] = useState<StatusFilter>("All");
  const [tech, setTech] = useState("All");
  const deferredQuery = useDeferredValue(query);
  const reduce = useReducedMotion();

  const techOptions = useMemo(
    () =>
      Array.from(new Set(items.flatMap((project) => project.tech))).sort((a, b) =>
        a.localeCompare(b),
      ),
    [items],
  );

  const counts = useMemo(() => {
    const map = new Map<CategoryFilter, number>();
    map.set("All", items.length);
    projectCategories.forEach((item) => {
      map.set(item, items.filter((project) => project.category === item).length);
    });
    return map;
  }, [items]);

  const filtered = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();

    return items.filter((project) => {
      if (category !== "All" && project.category !== category) return false;
      if (status !== "All" && project.status !== status) return false;
      if (tech !== "All" && !project.tech.includes(tech)) return false;
      if (!needle) return true;

      const haystack = [
        project.title,
        project.subtitle,
        project.summary,
        project.description,
        project.category,
        project.status,
        project.role,
        project.year,
        ...project.tech,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(needle);
    });
  }, [items, category, status, tech, deferredQuery]);

  const hasFilters =
    query.trim().length > 0 ||
    category !== "All" ||
    status !== "All" ||
    tech !== "All";

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setStatus("All");
    setTech("All");
  }

  return (
    <div>
      <div className="rounded-xl border border-line bg-card p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-faint"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, technologies, or themes"
              aria-label="Search projects"
              className="w-full rounded-lg border border-line bg-bg py-2.5 pl-10 pr-10 text-sm text-ink placeholder:text-faint/80 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full text-faint transition-colors hover:bg-elevated hover:text-ink"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-faint">
            <SlidersHorizontal className="size-3.5" aria-hidden="true" />
            <span aria-live="polite">
              {filtered.length} of {items.length} projects
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {(["All", ...projectCategories] as CategoryFilter[]).map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={active}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors",
                  active
                    ? "border-brand bg-brand text-[#04140d]"
                    : "border-line bg-bg-secondary/40 text-muted hover:border-line-strong hover:text-ink",
                )}
              >
                {item}
                <span
                  className={cn(
                    "tabular-nums",
                    active ? "text-[#04140d]/60" : "text-faint",
                  )}
                >
                  {counts.get(item) ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center">
          <label className="flex items-center gap-2 text-[11px] text-faint">
            Status
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as StatusFilter)}
              className="rounded-lg border border-line bg-bg px-2.5 py-1.5 text-[12px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
            >
              <option value="All">All</option>
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-2 text-[11px] text-faint">
            Technology
            <select
              value={tech}
              onChange={(event) => setTech(event.target.value)}
              className="max-w-[200px] rounded-lg border border-line bg-bg px-2.5 py-1.5 text-[12px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
            >
              <option value="All">All</option>
              {techOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          {hasFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] text-muted transition-colors hover:border-brand/40 hover:text-brand sm:ml-auto"
            >
              <RotateCcw className="size-3" aria-hidden="true" />
              Reset filters
            </button>
          )}
        </div>
      </div>

      <div className="mt-8">
        {filtered.length > 0 ? (
          <motion.div layout className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} showFeatured />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="rounded-xl border border-dashed border-line-strong bg-card/40 px-6 py-16 text-center">
            <p className="font-display text-lg font-medium tracking-tight text-ink">
              No projects match those filters.
            </p>
            <p className="mx-auto mt-2 max-w-sm text-[13px] text-muted">
              Try a different search term, technology, or clear the filters to
              see everything.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 text-[12px] font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" />
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
