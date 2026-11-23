import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Rohan Yadav — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative grid size-9 shrink-0 place-items-center rounded-[7px] border border-line-strong bg-elevated font-display text-[12px] font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:border-brand/50">
        RY
        <span
          className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-brand ring-2 ring-bg"
          aria-hidden="true"
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[13.5px] font-semibold tracking-tight text-ink">
            Rohan Yadav
          </span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.24em] text-faint">
            Software Engineer
          </span>
        </span>
      )}
    </Link>
  );
}
