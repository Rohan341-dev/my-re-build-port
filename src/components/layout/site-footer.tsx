import Link from "next/link";
import { ArrowUp, Download, Mail } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { SocialLinks } from "@/components/ui/social-links";
import { Container } from "@/components/ui/container";
import { navigation, resume } from "@/data/navigation";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const year = 2026;
  const half = Math.ceil(navigation.length / 2);
  const columns = [navigation.slice(0, half), navigation.slice(half)];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-secondary">
      <Container className="pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-faint">
              Let&apos;s build something
            </p>
            <h2 className="mt-4 max-w-md font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl">
              Have an idea worth engineering?
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand"
            >
              <Mail className="size-4" aria-hidden="true" />
              {profile.email}
            </a>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {columns.map((column, columnIndex) => (
              <nav
                key={columnIndex}
                aria-label={columnIndex === 0 ? "Footer" : "Footer resources"}
                className="flex flex-col gap-3"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-faint">
                  {columnIndex === 0 ? "Navigate" : "Explore"}
                </p>
                {column.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                {columnIndex === 1 && (
                  <a
                    href={resume.href}
                    download={resume.fileName}
                    className="inline-flex w-fit items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                  >
                    Resume
                    <Download className="size-3.5" aria-hidden="true" />
                  </a>
                )}
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-faint">
            <span>
              © {year} {siteConfig.name}. All rights reserved.
            </span>
            <span className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden="true" />
            <span>Based in Nepal</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-brand/40 hover:text-brand"
            >
              Back to top
              <ArrowUp className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        <p className="mx-auto max-w-[1240px] translate-y-[18%] px-5 font-display text-[clamp(3.5rem,14vw,11rem)] font-semibold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_var(--line-strong)] sm:px-8 lg:px-10">
          ROHAN YADAV
        </p>
      </div>
    </footer>
  );
}
