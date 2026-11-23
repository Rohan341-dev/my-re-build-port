import { Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/data/profile";

export function AboutPreview() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="About"
              title={
                <>
                  A builder&apos;s path,
                  <br /> still being written.
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="mt-8 rounded-xl border border-line bg-card p-6">
              <Quote className="size-5 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-lg leading-snug tracking-tight text-ink">
                &ldquo;Don&apos;t just learn technology. Build something with
                it.&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid size-9 place-items-center rounded-full border border-brand/20 bg-brand/10 font-display text-[11px] font-semibold text-brand">
                  RY
                </span>
                <span>
                  <span className="block text-[13px] font-medium text-ink">
                    {profile.name}
                  </span>
                  <span className="block text-[11px] text-faint">
                    Software engineer · Nepal
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.06}>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                I&apos;m a student programmer and full-stack developer from
                Nepal, publicly known as{" "}
                <span className="font-medium text-ink">Rohan Codekage</span>. I
                started with curiosity, a browser, and a broken HTML page — then
                followed that curiosity into backend systems, databases, AI, and
                companies.
              </p>
              <p>
                Today I&apos;m the founder of SajiloCode and the CEO &amp;
                Founder of Code Nest Nepal. My work sits where engineering meets
                entrepreneurship: building products that solve ordinary
                problems for real people.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 grid gap-x-8 gap-y-5 border-y border-line py-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-faint">
                  Focus
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink">
                  Full-stack engineering · SaaS · AI &amp; computer vision
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-faint">
                  Currently
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink">
                  Building products across SajiloCode and Code Nest Nepal
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.interests.slice(0, 5).map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-line bg-surface/40 px-3 py-1.5 text-[11px] text-muted"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                More about me
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
