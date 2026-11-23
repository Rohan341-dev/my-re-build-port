import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { research } from "@/data/research";

export function ResearchPreview() {
  const entries = research.slice(0, 3);

  return (
    <Section id="research">
      <Reveal>
        <SectionHeading
          index="05"
          eyebrow="The lab"
          title="Research & experiments."
          description="A working notebook of ideas I am testing — language models, agents, computer vision, automation, and software architecture."
          action={
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              Enter the lab
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          }
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {entries.map((entry, index) => (
          <Reveal key={entry.slug} delay={index * 0.06}>
            <Link
              href="/research"
              className="group flex h-full flex-col rounded-xl border border-line bg-card p-6 transition-colors duration-300 hover:border-brand/30"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-brand">
                  LAB / {entry.index}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-secondary/60 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-muted">
                  {entry.status}
                </span>
              </div>

              <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-faint">
                {entry.category}
              </p>
              <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-ink transition-colors group-hover:text-brand">
                {entry.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-muted">
                {entry.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {entry.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line px-2 py-1 text-[10px] text-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
