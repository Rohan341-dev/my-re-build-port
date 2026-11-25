import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, { dot: string; text: string }> = {
  Launched: { dot: "bg-brand", text: "text-brand" },
  "In Development": { dot: "bg-accent", text: "text-accent" },
  Prototype: { dot: "bg-[#c9a45c]", text: "text-[#8a6a2f] dark:text-[#d8b977]" },
  Research: { dot: "bg-faint", text: "text-muted" },
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const styles = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em]",
        styles.text,
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          styles.dot,
          status === "In Development" && "animate-pulse-dot",
        )}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
