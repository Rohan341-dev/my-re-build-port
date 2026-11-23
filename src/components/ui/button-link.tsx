import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-[#04140d] hover:bg-brand/90 shadow-[0_10px_30px_-12px_var(--glow)]",
  secondary:
    "border border-line-strong bg-surface/40 text-ink hover:border-brand/40 hover:bg-elevated",
  ghost: "text-ink hover:text-brand",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-[13px]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm sm:text-[15px]",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: "arrow" | "external" | "download" | "none";
  external?: boolean;
  ariaLabel?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon = "arrow",
  external,
  ariaLabel,
}: ButtonLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const Icon =
    icon === "external"
      ? ArrowUpRight
      : icon === "download"
        ? Download
        : ArrowRight;

  const content = (
    <>
      <span>{children}</span>
      {icon !== "none" && (
        <Icon
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {content}
    </Link>
  );
}
