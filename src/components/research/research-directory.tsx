"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import {
  researchCategories,
  type ResearchCategory,
  type ResearchEntry,
} from "@/data/research";
import { cn } from "@/lib/utils";

type Filter = ResearchCategory | "All";

export function ResearchDirectory({ items }: { items: ResearchEntry[] }) {
  const [category, setCategory] = useState<Filter>("All");
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () =>
      category === "All"
        ? items
        : items.filter((entry) => entry.category === category),
    [items, category],
  );

  const counts = useMemo(() => {
    const map = new Map<Filter, number>();
    map.set("All", items.length);
    researchCategories.forEach((item) => {
      map.set(item, items.filter((entry) => entry.category === item).length);
    });
    return map;
  }, [items]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1.5">
        {(["All", ...researchCategories] as Filter[]).map((item) => {
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

      <div className="mt-6 flex items-center gap-2 text-[11px] text-faint" aria-live="polite">
        <FlaskConical className="size-3.5" aria-hidden="true" />
        {filtered.length} of {items.length} experiments
      </div>

      <div className="mt-4 border-t border-line">
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((entry) => {
            const linked = entry.relatedProject;
            return (
              <motion.article
                key={entry.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group grid gap-4 border-b border-line py-6 sm:grid-cols-[88px_1fr] sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-brand">
                    LAB / {entry.index}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-faint">
                    <span
                      className={cn(
                        "size-1 rounded-full",
                        entry.status === "Active"
                          ? "bg-brand"
                          : entry.status === "Experimental"
                            ? "bg-accent"
                            : "bg-faint",
                      )}
                      aria-hidden="true"
                    />
                    {entry.status}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-faint">
                      {entry.category}
                    </p>
                    <span className="h-2.5 w-px bg-line-strong" aria-hidden="true" />
                    <p className="text-[10px] uppercase tracking-[0.18em] text-faint">
                      {entry.tech.join(" · ")}
                    </p>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-ink transition-colors group-hover:text-brand sm:text-xl">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
                    {entry.description}
                  </p>

                  {linked && (
                    <Link
                      href={`/projects/${linked}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-brand transition-colors hover:text-ink"
                    >
                      Related project
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
