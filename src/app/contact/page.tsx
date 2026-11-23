import type { Metadata } from "next";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { ContactSection } from "@/components/contact/contact-section";
import { profile } from "@/data/profile";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Rohan Yadav — software engineer, full-stack developer, and founder based in Nepal. Business email, LinkedIn, and GitHub.",
  path: "/contact",
});

const openTo = [
  "Product collaborations",
  "Engineering conversations",
  "Early-stage ventures",
  "AI and computer vision experiments",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="07"
        eyebrow="Contact"
        title={
          <>
            Have a problem
            <br className="hidden lg:block" /> worth engineering?
          </>
        }
        description="Whether it is a product idea, a technical problem, or a conversation about building companies — I read every message myself."
        aside={
          <div className="rounded-xl border border-line bg-card/60 p-5 backdrop-blur">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Open to
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {openTo.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-bg-secondary/50 px-2.5 py-1 text-[10.5px] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-1.5 border-t border-line pt-4 text-[11px] font-medium text-ink transition-colors hover:text-brand"
            >
              {profile.email}
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        }
      />

      <ContactSection showHeading={false} />
    </>
  );
}
