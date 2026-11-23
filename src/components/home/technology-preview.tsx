import {
  BrainCircuit,
  Code2,
  Database,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { LevelIndicator } from "@/components/ui/level-indicator";
import {
  technologyGroups,
  skillLevelLabels,
  type SkillLevel,
} from "@/data/technologies";

const icons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  ai: BrainCircuit,
  tools: Wrench,
};

const levels: SkillLevel[] = ["core", "working", "exploring"];

export function TechnologyPreview() {
  return (
    <Section id="technology">
      <Reveal>
        <SectionHeading
          index="03"
          eyebrow="Technology"
          title="Tools I use."
          description="Not percentages. Not rankings. An honest map of the technologies I reach for — and where I am still learning."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {technologyGroups.map((group, index) => {
          const Icon = icons[group.key] ?? Code2;
          return (
            <Reveal key={group.key} delay={index * 0.05} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-line bg-card p-5 transition-colors duration-300 hover:border-brand/30">
                <div className="flex items-center justify-between">
                  <span className="grid size-8 place-items-center rounded-lg border border-line bg-elevated text-muted transition-colors group-hover:border-brand/30 group-hover:text-brand">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-faint">
                  {group.description}
                </p>

                <ul className="mt-4 flex flex-col border-t border-line">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-2 border-b border-line py-2 last:border-b-0"
                    >
                      <span className="text-[12px] text-muted">{item.name}</span>
                      <LevelIndicator name={item.name} level={item.level} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-lg border border-line bg-bg-secondary/40 px-4 py-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-faint">
            How to read this
          </span>
          {levels.map((level) => (
            <span
              key={level}
              className="inline-flex items-center gap-2 text-[11px] text-muted"
            >
              <LevelIndicator name={skillLevelLabels[level]} level={level} />
              {skillLevelLabels[level]}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
