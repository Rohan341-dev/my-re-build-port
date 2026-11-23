"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { Achievement } from "@/data/achievements";

export function CertificateGallery({ items }: { items: Achievement[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const triggers = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    const previous = openIndex;
    setOpenIndex(null);
    if (previous !== null) {
      window.setTimeout(() => triggers.current[previous]?.focus(), 60);
    }
  }, [openIndex]);

  const go = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + direction + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => closeRef.current?.focus(), 80);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [openIndex, close, go]);

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((achievement, index) => (
          <div key={achievement.slug} id={achievement.slug} className="scroll-mt-24">
            <button
              ref={(node) => {
                triggers.current[index] = node;
              }}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View certificate: ${achievement.title}`}
              className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-card text-left transition-colors duration-300 hover:border-brand/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef0ea] p-4 dark:bg-[#0b120f]">
                <div className="relative h-full w-full overflow-hidden rounded-[5px] border border-black/5 bg-white shadow-sm">
                  <Image
                    src={achievement.image!.src}
                    alt={achievement.image!.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 560px"
                    className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                  />
                </div>
                <span className="absolute right-7 top-7 grid size-8 place-items-center rounded-full border border-black/10 bg-white/90 text-[#3c4a40] opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="size-3.5" aria-hidden="true" />
                </span>
                <span className="absolute left-7 top-7 rounded-full border border-black/10 bg-white/90 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#3c4a40] backdrop-blur">
                  {achievement.kind}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-faint">
                  <span>{achievement.organizer}</span>
                  <span>{achievement.date}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-medium tracking-tight text-ink transition-colors group-hover:text-brand sm:text-lg">
                  {achievement.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-muted">
                  {achievement.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-4 text-[10px]">
                  <span className="uppercase tracking-[0.16em] text-faint">
                    {achievement.evidenceNote}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors group-hover:text-brand">
                    View
                    <Maximize2 className="size-3" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {mounted && active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close certificate viewer"
              tabIndex={-1}
              onClick={close}
              className="absolute inset-0 cursor-default bg-[#020604]/85 backdrop-blur-sm"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-title"
              className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-bg shadow-soft"
              initial={reduce ? false : { opacity: 0, y: 16, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-medium tracking-tight text-ink" id="certificate-title">
                    {active.title}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] uppercase tracking-[0.14em] text-faint">
                    {active.organizer} · {active.date}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous certificate"
                    className="grid size-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <ChevronLeft className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next certificate"
                    className="grid size-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={close}
                    aria-label="Close certificate viewer"
                    className="ml-1 grid size-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#eef0ea] p-4 dark:bg-[#0b120f] sm:p-6">
                <Image
                  src={active.image!.src}
                  alt={active.image!.alt}
                  width={active.image!.width}
                  height={active.image!.height}
                  sizes="(max-width: 1024px) 92vw, 900px"
                  className="h-auto max-h-[68vh] w-auto max-w-full rounded-sm border border-black/5 bg-white object-contain shadow-sm"
                />
              </div>

              <div className="border-t border-line px-4 py-3 sm:px-5">
                <p className="text-[11.5px] leading-relaxed text-muted">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
