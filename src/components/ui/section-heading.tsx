import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  className,
  align = "left",
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {(index || eyebrow) && (
          <div
            className={cn(
              "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-faint",
              align === "center" && "justify-center",
            )}
          >
            {index && <span className="section-index text-brand">{index}</span>}
            {index && eyebrow && (
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            )}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        )}
        <h2 className="mt-5 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.08] tracking-tight text-ink">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
