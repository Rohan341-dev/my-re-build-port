import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ResearchDirectory } from "@/components/research/research-directory";
import { research, researchCategories } from "@/data/research";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Research",
  description:
    "The research and experimentation lab of Rohan Yadav — large language models, AI agents, computer vision, automation, SaaS architecture, and technical experiments.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="The lab"
        title={
          <>
            A working notebook,
            <br className="hidden lg:block" /> not a list of papers.
          </>
        }
        description="Experiments, prototypes, and ideas in progress. This is where I test what emerging technology can actually do inside real products — and where I document the things that do not work."
        aside={
          <div className="grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-card/60 backdrop-blur">
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                {research.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Experiments
              </p>
            </div>
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                {researchCategories.length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Domains
              </p>
            </div>
            <div className="p-4">
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                {research.filter((entry) => entry.status === "Active").length}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-faint">
                Active
              </p>
            </div>
          </div>
        }
      />

      <Section bordered={false}>
        <ResearchDirectory items={research} />

        <Reveal className="mt-10">
          <div className="rounded-xl border border-line bg-card p-5 sm:p-6">
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand">
                  How to read the lab
                </p>
                <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
                  Entries here are engineering experiments, not published
                  research. Some become products, some stay prototypes, and some
                  are simply things worth understanding. Statuses reflect that
                  honestly.
                </p>
              </div>
              <ButtonLink href="/projects" variant="secondary">
                See the products
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      <Container className="pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-card p-6 sm:p-8">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 120% at 10% 0%, var(--glow) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand">
                Collaborate
              </p>
              <h2 className="mt-2 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                Working on something adjacent?
              </h2>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-muted">
                I enjoy exchanging notes with people exploring AI, vision,
                automation, and product architecture.
              </p>
            </div>
            <ButtonLink href="/contact">Get in touch</ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
