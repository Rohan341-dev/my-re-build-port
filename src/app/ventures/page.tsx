import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, CircleDot } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ventures, initiatives } from "@/data/ventures";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ventures",
  description:
    "Rohan Yadav's entrepreneurship profile — CEO & Founder of Code Nest Nepal and Founder of SajiloCode, building software products, business systems, and technology teams in Nepal.",
  path: "/ventures",
});

export default function VenturesPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Ventures"
        title={
          <>
            Building companies is
            <br className="hidden lg:block" /> its own kind of engineering.
          </>
        }
        description="Software is only part of the work. Building a team, shaping a product direction, and running an organisation add a different set of constraints. These are the ventures where I am learning that discipline."
        aside={
          <div className="grid grid-cols-2 divide-x divide-line rounded-xl border border-line bg-card/60 backdrop-blur">
            <div className="p-5">
              <p className="font-display text-3xl font-medium tracking-tight text-ink">
                {ventures.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Companies
              </p>
            </div>
            <div className="p-5">
              <p className="font-display text-3xl font-medium tracking-tight text-ink">
                {initiatives.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Initiatives
              </p>
            </div>
          </div>
        }
      />

      <Section bordered={false}>
        <div className="space-y-10">
          {ventures.map((venture, index) => (
            <Reveal key={venture.slug}>
              <article className="border-t border-line pt-10 first:border-t-0 first:pt-0">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <div
                      className="relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-7 lg:sticky lg:top-24"
                      style={{
                        backgroundImage: `radial-gradient(120% 120% at 8% 0%, ${venture.accent.from} 0%, #06100c 60%), radial-gradient(80% 80% at 100% 100%, ${venture.accent.to}33 0%, transparent 62%)`,
                      }}
                    >
                      <div className="noise absolute inset-0 opacity-[0.06]" aria-hidden="true" />
                      <div className="relative">
                        <div className="flex items-start justify-between gap-3">
                          <Badge className="border-white/15 bg-white/5 text-white/70">
                            <CircleDot className="size-2.5" aria-hidden="true" />
                            {venture.role}
                          </Badge>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                            {venture.since ? `Since ${venture.since}` : "Present"}
                          </span>
                        </div>

                        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                          {String(index + 1).padStart(2, "0")} / Company
                        </p>
                        <h2 className="mt-2 font-display text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">
                          {venture.legalName}
                        </h2>
                        <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                          {venture.tagline}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {venture.focus.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10.5px] text-white/65"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {venture.url && (
                          <a
                            href={venture.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] font-medium text-white/80 transition-colors hover:border-brand/40 hover:text-brand"
                          >
                            {venture.urlLabel}
                            <ArrowUpRight className="size-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="text-[15px] leading-relaxed text-muted">
                      {venture.overview}
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="text-[10px] uppercase tracking-[0.18em] text-faint">
                          Products
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {venture.products.map((product) => (
                            <li
                              key={product}
                              className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted"
                            >
                              <span
                                className="mt-1.5 size-1 shrink-0 rounded-full bg-brand"
                                aria-hidden="true"
                              />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[10px] uppercase tracking-[0.18em] text-faint">
                          Services
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {venture.services.map((service) => (
                            <span
                              key={service}
                              className="rounded-md border border-line bg-card px-2 py-1 text-[10.5px] text-muted"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 rounded-xl border border-line bg-card p-5">
                      <h3 className="text-[10px] uppercase tracking-[0.18em] text-faint">
                        Role &amp; contribution
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {venture.contribution.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-muted"
                          >
                            <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-brand/25 bg-brand/10 text-brand">
                              <Check className="size-2.5" aria-hidden="true" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-faint">
                <span className="section-index text-brand">01</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                Initiatives
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                Products built inside the ventures.
              </h2>
            </div>
            <p className="max-w-sm text-[12px] leading-relaxed text-faint">
              Projects and platforms that sit under the company umbrella,
              representing the product side of the work.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {initiatives.map((initiative, index) => {
            const isProject = [
              "axisone",
              "shope-ease",
              "smart-school-route-management",
            ].includes(initiative.slug);
            return (
              <Reveal key={initiative.slug} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-xl border border-line bg-card p-5">
                  <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.16em]">
                    <span className="text-faint">{initiative.status}</span>
                    <span className="font-mono text-faint">{initiative.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
                    {initiative.name}
                  </h3>
                  <p className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-brand">
                    {initiative.role}
                  </p>
                  <p className="mt-3 flex-1 text-[12.5px] leading-relaxed text-muted">
                    {initiative.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {initiative.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-2.5 py-1 text-[10px] text-faint"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {isProject && (
                    <Link
                      href={`/projects/${initiative.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 border-t border-line pt-4 text-[11px] font-medium text-ink transition-colors hover:text-brand"
                    >
                      View project
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
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
                Collaboration
              </p>
              <h2 className="mt-2 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                Building something in Nepal or beyond?
              </h2>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-muted">
                I am open to product collaborations, engineering conversations,
                and ventures that need someone who can build.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                See the work
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
