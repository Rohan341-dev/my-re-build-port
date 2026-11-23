import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Page not found",
  description: "The page you are looking for does not exist.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 20%, var(--glow) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative flex min-h-[72vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">
          Error / 404
        </p>
        <h1 className="mt-5 font-display text-[clamp(5rem,18vw,12rem)] font-semibold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_var(--line-strong)]">
          404
        </h1>
        <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          This page doesn&apos;t exist.
        </h2>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          The route may have moved, or the link might be incorrect. The work is
          still where you left it.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-[#04140d] transition-colors hover:bg-brand/90"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
          >
            Browse projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-faint">
          <Link href="/about" className="link-underline hover:text-ink">
            About
          </Link>
          <Link href="/ventures" className="link-underline hover:text-ink">
            Ventures
          </Link>
          <Link href="/research" className="link-underline hover:text-ink">
            Research
          </Link>
          <Link href="/contact" className="link-underline hover:text-ink">
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
