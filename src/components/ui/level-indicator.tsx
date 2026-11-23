import { cn } from "@/lib/utils";
import {
  skillLevelLabels,
  type SkillLevel,
} from "@/data/technologies";

const filledByLevel: Record<SkillLevel, number> = {
  core: 3,
  working: 2,
  exploring: 1,
};

export function LevelIndicator({
  name,
  level,
  className,
}: {
  name: string;
  level: SkillLevel;
  className?: string;
}) {
  const filled = filledByLevel[level];

  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      title={`${name} — ${skillLevelLabels[level]}`}
    >
      <span className="flex items-center gap-[3px]" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={cn(
              "h-3 w-[3px] rounded-full transition-colors",
              index < filled ? "bg-brand" : "bg-line-strong",
            )}
          />
        ))}
      </span>
      <span className="sr-only">
        {name}: {skillLevelLabels[level]}
      </span>
    </span>
  );
}
