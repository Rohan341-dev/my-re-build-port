import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ImageOff,
  Link2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProjectArt } from "@/components/ui/project-art";
import { StatusBadge } from "@/components/ui/status-badge";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import {
  getProject,
  getProjectSlugs,
  projects,
  type Project,
} from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { profile } from "@/data/profile";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createMetadata({ title: "Project not found", noIndex: true });
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

function CaseSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[10px] tracking-[0.2em] text-brand">
          {index}
        </span>
        <h2 className="font-display text-xl font-medium tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <div className="mt-4 sm:pl-9">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-3 text-[14.5px] leading-relaxed text-muted">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function LinkIcon({ kind }: { kind: Project["links"][number]["kind"] }) {
  if (kind === "github") return <Link2 className="size-3.5" aria-hidden="true" />;
  return <ArrowUpRight className="size-3.5" aria-hidden="true" />;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: profile.name,
      url: siteConfig.url,
    },
    keywords: project.tech.join(", "),
    about: project.category,
    creativeWorkStatus: project.status,
  };

  let sectionNumber = 0;
  const next = () => String(++sectionNumber).padStart(2, "0");

  return (
    <>
      <article>
        <section className="relative overflow-hidden border-b border-line">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 65% 80% at 85% -20%, var(--glow) 0%, transparent 62%)",
            }}
            aria-hidden="true"
          />
          <Container className="relative pb-10 pt-8 sm:pt-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] text-faint">
              <Link href="/projects" className="transition-colors hover:text-ink">
                Projects
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-muted">{project.category}</span>
            </nav>

            <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={project.status} />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-faint">
                    {project.year} · {project.role}
                  </span>
                </div>
                <h1 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.035em] text-ink">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
                  {project.subtitle}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-card px-2.5 py-1 text-[10.5px] font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:col-span-4 lg:justify-end">
                {project.links.map((link) => (
                  <ButtonLink
                    key={link.href}
                    href={link.href}
                    external={link.kind !== "github"}
                    size="sm"
                    icon="external"
                  >
                    {link.label}
                  </ButtonLink>
                ))}
                <ButtonLink href="/contact" variant="secondary" size="sm">
                  Discuss
                </ButtonLink>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <ProjectArt
                cover={project.cover}
                title={project.title}
                className="aspect-[16/10] sm:aspect-[16/8] lg:aspect-[21/8]"
              />
            </div>
          </Container>
        </section>

        <Section bordered={false}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl border border-line bg-card p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-faint">
                    Project details
                  </p>
                  <dl className="mt-4 space-y-3">
                    <div className="flex items-start justify-between gap-4 border-b border-line pb-3">
                      <dt className="text-[11px] text-faint">Role</dt>
                      <dd className="text-right text-[12px] font-medium text-ink">
                        {project.role}
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4 border-b border-line pb-3">
                      <dt className="text-[11px] text-faint">Year</dt>
                      <dd className="text-right text-[12px] text-ink">{project.year}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4 border-b border-line pb-3">
                      <dt className="text-[11px] text-faint">Category</dt>
                      <dd className="text-right text-[12px] text-ink">
                        {project.category}
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-[11px] text-faint">Status</dt>
                      <dd className="text-right">
                        <StatusBadge status={project.status} />
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-5 border-t border-line pt-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-faint">
                      Stack
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-bg-secondary/60 px-2 py-1 text-[10px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-line pt-4">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 text-[11px] font-medium text-ink transition-colors hover:text-brand"
                    >
                      <ArrowLeft className="size-3.5" aria-hidden="true" />
                      All projects
                    </Link>
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-line bg-bg-secondary/40 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-faint">
                    An honest note
                  </p>
                  <p className="mt-2 text-[11.5px] leading-relaxed text-muted">
                    This case study describes work at its actual stage. Metrics,
                    testimonials, or outcomes are only included when they are
                    verified.
                  </p>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <Reveal>
                <CaseSection index={next()} title="Project overview">
                  <Paragraphs items={[project.overview]} />
                </CaseSection>
              </Reveal>

              <Reveal>
                <CaseSection index={next()} title="The problem">
                  <Paragraphs items={[project.problem]} />
                </CaseSection>
              </Reveal>

              <Reveal>
                <CaseSection index={next()} title="The solution">
                  <Paragraphs items={[project.solution]} />
                </CaseSection>
              </Reveal>

              <Reveal>
                <CaseSection index={next()} title="Product features">
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 rounded-lg border border-line bg-card px-3.5 py-3 text-[12.5px] leading-relaxed text-muted"
                      >
                        <span
                          className="mt-1.5 size-1 shrink-0 rounded-full bg-brand"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CaseSection>
              </Reveal>

              <Reveal>
                <CaseSection index={next()} title="Architecture">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.architecture.map((block) => (
                      <div
                        key={block.title}
                        className="rounded-lg border border-line bg-card p-4"
                      >
                        <h3 className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink">
                          {block.title}
                        </h3>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                          {block.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </CaseSection>
              </Reveal>

              <Reveal>
                <CaseSection index={next()} title="My contribution">
                  <ul className="space-y-2.5">
                    {project.contribution.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] leading-relaxed text-muted"
                      >
                        <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-brand/25 bg-brand/10 text-brand">
                          <Check className="size-2.5" aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CaseSection>
              </Reveal>

              <Reveal>
                <CaseSection index={next()} title="Challenges">
                  <ol className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={challenge}
                        className="flex items-start gap-3 text-[13px] leading-relaxed text-muted"
                      >
                        <span className="font-mono text-[10px] text-faint">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {challenge}
                      </li>
                    ))}
                  </ol>
                </CaseSection>
              </Reveal>

              <Reveal>
                <CaseSection index={next()} title="Screenshots">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[0, 1].map((item) => (
                      <div
                        key={item}
                        className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line-strong bg-bg-secondary/30 px-4 text-center"
                      >
                        <ImageOff className="size-5 text-faint" aria-hidden="true" />
                        <p className="text-[11px] font-medium text-muted">
                          Interface preview pending
                        </p>
                        <p className="max-w-[220px] text-[10px] leading-relaxed text-faint">
                          No screenshot is published for this stage of the
                          project.
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-[11px] leading-relaxed text-faint">
                    {project.screenshotsNote}
                  </p>
                </CaseSection>
              </Reveal>

              {project.outcomes && project.outcomes.length > 0 && (
                <Reveal>
                  <CaseSection index={next()} title="Verified outcomes">
                    <ul className="space-y-2.5">
                      {project.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted"
                        >
                          <span
                            className="mt-1.5 size-1 shrink-0 rounded-full bg-brand"
                            aria-hidden="true"
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </CaseSection>
                </Reveal>
              )}

              <Reveal>
                <CaseSection index={next()} title="Links">
                  {project.links.length > 0 ? (
                    <div className="flex flex-wrap gap-2.5">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[12px] font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
                        >
                          <LinkIcon kind={link.kind} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-lg border border-line bg-card p-4">
                      <p className="text-[12.5px] leading-relaxed text-muted">
                        No public links are available for this project yet. If
                        you want to know more about the work or discuss it
                        directly,{" "}
                        <Link
                          href="/contact"
                          className="font-medium text-brand hover:underline"
                        >
                          get in touch
                        </Link>
                        .
                      </p>
                    </div>
                  )}
                </CaseSection>
              </Reveal>
            </div>
          </div>
        </Section>

        <section className="border-t border-line">
          <Container className="py-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-faint">
                  Next project
                </p>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group mt-2 inline-flex items-center gap-3 font-display text-xl font-medium tracking-tight text-ink transition-colors hover:text-brand sm:text-2xl"
                >
                  {nextProject.title}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <p className="mt-1 text-[11px] text-faint">
                  {nextProject.category} · {nextProject.year}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <Badge variant="outline">{project.status}</Badge>
                <ButtonLink href="/projects" variant="secondary" size="sm">
                  Back to directory
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
