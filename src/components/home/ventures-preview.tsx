import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { initiatives, ventures } from "@/data/ventures";

export function VenturesPreview() {
  const [primary, secondary] = ventures;

  return (
    <Section id="ventures">
      <Reveal>
        <SectionHeading
          index="04"
          eyebrow="Ventures"
          title={
            <>
              Companies I&apos;m
              <br className="hidden sm:block" /> building.
            </>
          }
          description="Software is one part of the work. Building teams, products, and companies is the other. These are the ventures where both meet."
          action={
            <Link
              href="/ventures"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              Venture profile
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          }
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        {[primary, secondary].filter(Boolean).map((venture, index) => {
          const isPrimary = index === 0;
          return (
            <Reveal
              key={venture.slug}
              delay={index * 0.08}
              className={isPrimary ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <div
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8"
                style={{
                  backgroundImage: `radial-gradient(120% 120% at 10% 0%, ${venture.accent.from} 0%, #06100c 58%), radial-gradient(80% 80% at 100% 100%, ${venture.accent.to}33 0%, transparent 60%)`,
                }}
              >
                <div className="noise absolute inset-0 opacity-[0.06]" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <Badge className="border-white/15 bg-white/5 text-white/70">
                      <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                      {venture.role}
                    </Badge>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                      {venture.since ?? "Present"}
                    </span>
                  </div>

                  <h3
                    className={
                      isPrimary
                        ? "mt-8 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
                        : "mt-8 font-display text-2xl font-medium tracking-tight text-white"
                    }
                  >
                    {venture.legalName}
                  </h3>
                  <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/60">
                    {venture.tagline} {venture.overview.split(". ")[0]}.
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
                </div>

                <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40">
                    <Building2 className="size-3.5" aria-hidden="true" />
                    {venture.products.length} product areas
                  </div>
                  <div className="flex items-center gap-4">
                    {venture.url && (
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/75 transition-colors hover:text-brand"
                      >
                        {venture.urlLabel}
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </a>
                    )}
                    <Link
                      href="/ventures"
                      className="text-[11px] font-medium text-brand transition-colors hover:text-white"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {initiatives.map((initiative, index) => (
          <Reveal key={initiative.slug} delay={index * 0.05}>
            <div className="flex h-full flex-col rounded-xl border border-line bg-card p-5 transition-colors hover:border-brand/30">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.16em] text-faint">
                  {initiative.status}
                </span>
                <span className="font-mono text-[10px] text-faint">
                  {initiative.year}
                </span>
              </div>
              <h4 className="mt-4 font-display text-base font-medium tracking-tight text-ink">
                {initiative.name}
              </h4>
              <p className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-brand">
                {initiative.role}
              </p>
              <p className="mt-3 line-clamp-3 text-[12px] leading-relaxed text-muted">
                {initiative.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
