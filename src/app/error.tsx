"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="mx-auto flex min-h-[70vh] w-full max-w-[640px] flex-col items-center justify-center px-5 py-20 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">
          Unexpected error
        </p>
        <h1 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Something broke on this page.
        </h1>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          The rest of the site is still intact. Try again, or head back home and
          continue exploring.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-[#04140d] transition-colors hover:bg-brand/90"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
          >
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
