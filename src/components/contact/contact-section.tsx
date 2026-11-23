import { Mail, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialRowList } from "@/components/ui/social-links";
import { primarySocials } from "@/data/socials";
import { profile } from "@/data/profile";

export function ContactSection({
  index = "07",
  showHeading = true,
}: {
  index?: string;
  showHeading?: boolean;
}) {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          {showHeading && (
            <Reveal>
              <SectionHeading
                index={index}
                eyebrow="Contact"
                title={
                  <>
                    Let&apos;s build
                    <br /> something worth using.
                  </>
                }
                description="Have an idea, a problem, or a collaboration in mind? I am always open to thoughtful conversations with engineers, founders, and teams."
              />
            </Reveal>
          )}

          <Reveal delay={0.08}>
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-faint">
                Business email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="link-underline mt-2 inline-flex items-center gap-2 font-display text-lg font-medium tracking-tight text-ink transition-colors hover:text-brand"
              >
                <Mail className="size-4 text-brand" aria-hidden="true" />
                {profile.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-faint">
                Professional profiles
              </p>
              <SocialRowList items={primarySocials} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center gap-2 text-[11px] text-faint">
              <MapPin className="size-3.5" aria-hidden="true" />
              Based in Nepal · Working with teams anywhere
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-card p-5 shadow-card sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-line pb-4">
                <div>
                  <p className="font-display text-sm font-semibold tracking-tight text-ink">
                    Start a conversation
                  </p>
                  <p className="mt-0.5 text-[11px] text-faint">
                    Fields marked <span className="text-brand">*</span> are required.
                  </p>
                </div>
                <span className="hidden rounded-full border border-line bg-bg-secondary/60 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-faint sm:block">
                  Secure form
                </span>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
