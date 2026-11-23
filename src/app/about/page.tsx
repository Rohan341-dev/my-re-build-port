import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { ventures } from "@/data/ventures";
import { technologyGroups } from "@/data/technologies";
import { resume } from "@/data/navigation";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "The story of Rohan Yadav — a software engineer, full-stack developer, and founder from Nepal, building products and companies around ideas worth exploring.",
  path: "/about",
  type: "profile",
});

const atAGlance = [
  { label: "Name", value: "Rohan Yadav" },
  { label: "Known as", value: "Rohan Codekage" },
  { label: "Based in", value: "Nepal" },
  { label: "Focus", value: "Full-stack engineering, SaaS, AI" },
  { label: "Ventures", value: "Code Nest Nepal · SajiloCode" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="About"
        title={
          <>
            Engineering, products, and the path
            <br className="hidden lg:block" /> between them.
          </>
        }
        description="I am a software engineer and founder from Nepal. I build full-stack products, explore emerging technology, and turn ideas into systems people can use."
        aside={
          <div className="rounded-xl border border-line bg-card/60 p-5 backdrop-blur">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-faint">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
              Currently building
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-ink">
              Smart School Route Management, SajiloCode products, and Code Nest
              Nepal.
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-line pt-4 text-[11px] text-faint">
              <MapPin className="size-3.5" aria-hidden="true" />
              Nepal · 2026
            </div>
          </div>
        }
      />

      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
                <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-elevated">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={profile.portrait.src}
                      alt={profile.portrait.alt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 430px"
                      className="object-cover object-[50%_28%] grayscale-[15%]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#04100b]/90 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                      <div>
                        <p className="font-display text-base font-medium text-white">
                          {profile.name}
                        </p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/55">
                          {profile.alias}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-white/60">
                        Nepal
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg border border-line bg-card px-4 py-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-faint">
                    Resume
                  </span>
                  <a
                    href={resume.href}
                    download={resume.fileName}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-brand"
                  >
                    <Download className="size-3.5" aria-hidden="true" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                A builder&apos;s path, still being written.
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
                {profile.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-8 grid gap-x-8 gap-y-4 border-y border-line py-6 sm:grid-cols-2">
                {atAGlance.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-faint">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-[13px] text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact">Let&apos;s connect</ButtonLink>
                <ButtonLink href="/projects" variant="secondary">
                  View projects
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-faint">
                <span className="section-index text-brand">01</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                Journey
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                The path so far.
              </h2>
            </div>
            <p className="max-w-sm text-[12px] leading-relaxed text-faint">
              No shortcuts, no invented milestones. Just the sequence of things
              I actually learned by building.
            </p>
          </div>
        </Reveal>

        <ol className="mt-10 border-t border-line">
          {profile.journey.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <li className="group grid gap-3 border-b border-line py-6 sm:grid-cols-[120px_1fr] sm:gap-8 lg:grid-cols-[160px_1fr_1fr]">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  {String(index + 1).padStart(2, "0")} / {step.phase}
                </span>
                <h3 className="font-display text-lg font-medium tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-faint">
                <span className="section-index text-brand">02</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                Philosophy
              </div>
              <blockquote className="mt-5 font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-medium leading-[1.18] tracking-tight text-ink">
                &ldquo;{profile.philosophy.title}&rdquo;
              </blockquote>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                {profile.philosophy.body}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {profile.principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-line bg-card p-5">
                  <span className="grid size-8 place-items-center rounded-lg border border-line bg-elevated text-brand">
                    <Sparkles className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-medium tracking-tight text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.18}>
              <div className="flex h-full flex-col justify-center rounded-xl border border-brand/20 bg-brand/[0.05] p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-brand">
                  The process
                </p>
                <p className="mt-2 font-display text-lg leading-snug tracking-tight text-ink">
                  Idea &rarr; Research &rarr; Design &rarr; Code &rarr; Debug
                  &rarr; Improve &rarr; Ship
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-faint">
                <span className="section-index text-brand">03</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                Entrepreneurship
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                From code to company.
              </h2>
            </div>
            <Link
              href="/ventures"
              className="group inline-flex items-center gap-2 text-[12px] font-medium text-brand"
            >
              Full venture profile
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ventures.map((venture, index) => (
            <Reveal key={venture.slug} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-card p-6">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="brand">{venture.role}</Badge>
                  {venture.since && (
                    <span className="font-mono text-[10px] tracking-[0.16em] text-faint">
                      Founded {venture.since}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-ink">
                  {venture.legalName}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {venture.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {venture.focus.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-2.5 py-1 text-[10.5px] text-faint"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-4 pt-5 text-[11px]">
                  <Link
                    href="/ventures"
                    className="inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-brand"
                  >
                    <BriefcaseBusiness className="size-3.5" aria-hidden="true" />
                    Details
                  </Link>
                  {venture.url && (
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-faint transition-colors hover:text-brand"
                    >
                      {venture.urlLabel}
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-faint">
                <span className="section-index text-brand">04</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                Interests
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                What keeps me curious.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                My interests extend beyond traditional software development —
                into AI, systems, hardware, and the way physical and digital
                worlds connect.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-xl border border-line bg-card p-5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-faint">
                    Technical
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {profile.interests.map((interest) => (
                      <li
                        key={interest}
                        className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted"
                      >
                        <span
                          className="mt-1.5 size-1 shrink-0 rounded-full bg-brand"
                          aria-hidden="true"
                        />
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="flex h-full flex-col gap-4">
                  <div className="rounded-xl border border-line bg-card p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-faint">
                      Personal
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {profile.personalInterests.map((interest) => (
                        <li
                          key={interest}
                          className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted"
                        >
                          <span
                            className="mt-1.5 size-1 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {interest}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-line bg-bg-secondary/50 p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-faint">
                      Working across
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {technologyGroups.map((group) => (
                        <span
                          key={group.key}
                          className="rounded-full border border-line px-2.5 py-1 text-[10.5px] text-muted"
                        >
                          {group.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <Container className="pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-card p-6 sm:p-8">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 120% at 90% 0%, var(--glow) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand">
                Resume
              </p>
              <h2 className="mt-2 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                The short version, on paper.
              </h2>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-muted">
                A one-page summary of my work, ventures, and technical focus.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={resume.href}
                download={resume.fileName}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-[#04140d] transition-colors hover:bg-brand/90"
              >
                <Download className="size-4" aria-hidden="true" />
                Download resume
              </a>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
