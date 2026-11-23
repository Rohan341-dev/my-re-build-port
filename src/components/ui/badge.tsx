import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "brand" | "outline" | "muted";

const variants: Record<BadgeVariant, string> = {
  default: "border-line bg-elevated text-muted",
  brand: "border-brand/25 bg-brand/10 text-brand",
  outline: "border-line-strong bg-transparent text-ink",
  muted: "border-transparent bg-elevated text-faint",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium leading-none tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
