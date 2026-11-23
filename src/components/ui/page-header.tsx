import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  index,
  title,
  description,
  aside,
  className,
}: {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-line", className)}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 88% -10%, var(--glow) 0%, transparent 62%)",
        }}
        aria-hidden="true"
      />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative pb-12 pt-12 sm:pt-16 lg:pb-16 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-faint">
              {index && <span className="section-index text-brand">{index}</span>}
              {index && <span className="h-px w-8 bg-line-strong" aria-hidden="true" />}
              <span>{eyebrow}</span>
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.035em] text-ink">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            )}
          </div>
          {aside && <div className="lg:col-span-4">{aside}</div>}
        </div>
      </Container>
    </section>
  );
}
