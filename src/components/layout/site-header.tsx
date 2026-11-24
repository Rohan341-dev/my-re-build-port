"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SocialLinks } from "@/components/ui/social-links";
import { navigation, resume } from "@/data/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const onPopState = () => setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", onPopState);
    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }, 120);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b transition-colors duration-500",
          scrolled || open
            ? "border-line bg-bg/85 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/70"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300",
                    active
                      ? "text-ink"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute inset-x-3 -bottom-px h-px bg-brand"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={resume.href}
              download={resume.fileName}
              className="hidden items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-4 py-2 text-[12px] font-medium text-ink transition-colors duration-300 hover:border-brand/40 hover:text-brand sm:inline-flex"
            >
              <Download className="size-3.5" aria-hidden="true" />
              Resume
            </a>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="grid size-9 place-items-center rounded-full border border-line bg-surface/50 text-ink transition-colors hover:border-brand/40 hover:text-brand lg:hidden"
            >
              {open ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <motion.div
          className="h-px origin-left bg-gradient-to-r from-brand via-accent to-transparent"
          style={{ scaleX: reduce ? 1 : scrollYProgress }}
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex min-h-full w-full max-w-[1240px] flex-col px-5 pb-10 pt-8 sm:px-8">
              <nav aria-label="Mobile" className="flex flex-col">
                {navigation.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group flex items-baseline justify-between border-b border-line py-4 transition-colors",
                        active ? "text-ink" : "text-muted hover:text-ink",
                      )}
                    >
                      <span className="font-display text-2xl font-medium tracking-tight">
                        {item.label}
                      </span>
                      <span
                        className={cn(
                          "text-[11px] tabular-nums tracking-[0.2em]",
                          active ? "text-brand" : "text-faint",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 flex flex-col gap-5">
                <a
                  href={resume.href}
                  download={resume.fileName}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-[#04140d]"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download Resume
                </a>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <SocialLinks />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-faint">
                    Nepal / 2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
