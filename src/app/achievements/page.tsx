import type { Metadata } from "next";
import { Award, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { CertificateGallery } from "@/components/achievements/certificate-gallery";
import {
  certificateAchievements,
  milestoneAchievements,
} from "@/data/achievements";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Achievements",
  description:
    "Verified achievements of Rohan Yadav — the M³ Bootcamp at the Mathematical Institute in Nepal, the Leroy AI course, the 3rd Cloudlet Tech Conference 2026, mathematics competitions, and venture milestones.",
  path: "/achievements",
});

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Achievements"
        title={
          <>
            Milestones, documented
            <br className="hidden lg:block" /> with evidence.
          </>
        }
        description="Bootcamps, courses, conferences, competitions, and venture milestones. Where a certificate exists, it is shown. Where it does not, the entry says so plainly."
        aside={
          <div className="grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-card/60 backdrop-blur">
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                {certificateAchievements.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Certificates
              </p>
            </div>
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                {milestoneAchievements.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Milestones
              </p>
            </div>
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                2024
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                — 2026
              </p>
            </div>
          </div>
        }
      />

      <Section bordered={false}>
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-faint">
                <span className="section-index text-brand">01</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                Evidence
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                Certificates &amp; recognition.
              </h2>
              <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted">
                Select a certificate to view it full size. Dates and organisers
                are listed as they appear on the evidence.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-faint">
              <ShieldCheck className="size-3.5 text-brand" aria-hidden="true" />
              Verified documents
            </div>
          </div>
        </Reveal>

        <div className="mt-8">
          <CertificateGallery items={certificateAchievements} />
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-faint">
            <span className="section-index text-brand">02</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            Timeline
          </div>
          <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            The path, in order.
          </h2>
          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted">
            Milestones, competitions, and the work behind the ventures. No
            invented positions or affiliations.
          </p>
        </Reveal>

        <ol className="relative mt-8 border-l border-line pl-5 sm:pl-8">
          {milestoneAchievements.map((achievement, index) => (
            <Reveal key={achievement.slug} delay={index * 0.03}>
              <li className="relative pb-8 last:pb-0">
                <span
                  className="absolute -left-[27px] top-1.5 grid size-3.5 place-items-center rounded-full border border-line-strong bg-bg sm:-left-[39px]"
                  aria-hidden="true"
                >
                  <span className="size-1.5 rounded-full bg-brand" />
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-brand">
                    {achievement.date}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-faint">
                    {achievement.kind}
                  </span>
                </div>
                <h3 className="mt-1.5 font-display text-base font-medium tracking-tight text-ink sm:text-lg">
                  {achievement.title}
                </h3>
                <p className="mt-0.5 text-[11px] text-faint">
                  {achievement.organizer}
                </p>
                <p className="mt-2 max-w-2xl text-[12.5px] leading-relaxed text-muted">
                  {achievement.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
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
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand">
                <Award className="size-3.5" aria-hidden="true" />
                Keep building
              </p>
              <h2 className="mt-2 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                Recognition is a byproduct, not the goal.
              </h2>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-muted">
                The work continues — in products, experiments, and the next
                thing worth learning.
              </p>
            </div>
            <ButtonLink href="/projects" variant="secondary">
              Explore the work
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
