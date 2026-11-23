import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SocialLinks } from "@/components/ui/social-links";
import { Reveal } from "@/components/motion/reveal";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 60% at 78% 8%, var(--glow) 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 8% 90%, color-mix(in oklab, var(--accent) 9%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" aria-hidden="true" />

      <Container className="relative pb-14 pt-12 sm:pt-16 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-muted backdrop-blur">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
                </span>
                {profile.eyebrow}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,6vw,4.85rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink">
                Engineering Ideas
                <br />
                Into{" "}
                <span className="text-gradient font-semibold">Reality.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[17px]">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                {profile.identity.map((item, index) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2.5 text-[12px] font-medium text-ink"
                  >
                    {index > 0 && (
                      <span
                        className="size-1 rounded-full bg-line-strong"
                        aria-hidden="true"
                      />
                    )}
                    {index === 0 && (
                      <span className="size-1 rounded-full bg-brand" aria-hidden="true" />
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="/projects" size="lg">
                  Explore My Work
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Let&apos;s Connect
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-5 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4 text-[11px] text-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {profile.based}
                  </span>
                  <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                  <span>{profile.availabilityNote}</span>
                </div>
                <SocialLinks />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.16} y={24}>
              <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
                <div
                  className="absolute -inset-2 rounded-[22px] border border-line"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[18px] border border-line-strong bg-elevated shadow-soft">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={profile.portrait.src}
                      alt={profile.portrait.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 420px"
                      className="object-cover object-[50%_28%] grayscale-[18%] transition duration-700 hover:grayscale-0"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#04100b]/95 via-[#04100b]/10 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                      <span className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                        Portrait / 2026
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                        <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                        Building
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="font-display text-lg font-medium tracking-tight text-white">
                        {profile.name}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                        Software Engineer · Full-Stack Developer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-line bg-surface/80 px-4 py-3">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-faint">
                      <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                      Currently building
                    </div>
                    <Link
                      href="/projects/smart-school-route-management"
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink transition-colors hover:text-brand"
                    >
                      Smart School Route
                      <ArrowRight className="size-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.36}>
          <div className="mt-14 flex items-center justify-between gap-4 border-t border-line pt-5">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-faint transition-colors hover:text-ink"
            >
              <span className="grid size-7 place-items-center rounded-full border border-line transition-colors group-hover:border-brand/40 group-hover:text-brand">
                <ArrowDown className="size-3.5" aria-hidden="true" />
              </span>
              Scroll to explore
            </Link>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-faint sm:block">
              Nepal / 2026
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
