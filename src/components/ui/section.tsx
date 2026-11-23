import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Section({
  id,
  children,
  className,
  containerClassName,
  bordered = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-24 lg:py-28",
        bordered && "border-t border-line",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
