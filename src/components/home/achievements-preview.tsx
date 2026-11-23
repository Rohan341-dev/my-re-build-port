import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { featuredAchievements } from "@/data/achievements";

export function AchievementsPreview() {
  return (
    <Section id="achievements">
      <Reveal>
        <SectionHeading
          index="06"
          eyebrow="Achievements"
          title="Milestones, with proof."
          description="Bootcamps, conferences, courses, and competitions — documented where evidence exists, and described honestly where it does not."
          action={
            <Link
              href="/achievements"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              All achievements
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          }
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredAchievements.map((achievement, index) => (
          <Reveal key={achievement.slug} delay={index * 0.06}>
            <Link
              href={`/achievements#${achievement.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors duration-300 hover:border-brand/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef0ea] p-3 dark:bg-[#0b120f]">
                <div className="relative h-full w-full overflow-hidden rounded-[5px] border border-black/5 bg-white shadow-sm">
                  <Image
                    src={achievement.image!.src}
                    alt={achievement.image!.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                    className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/90 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#3c4a40] backdrop-blur">
                  {achievement.kind}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-faint">
                  <span>{achievement.organizer}</span>
                  <span>{achievement.date}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-medium tracking-tight text-ink transition-colors group-hover:text-brand">
                  {achievement.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-muted">
                  {achievement.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-4 text-[10px]">
                  <span className="uppercase tracking-[0.16em] text-faint">
                    {achievement.evidenceNote}
                  </span>
                  <ArrowUpRight
                    className="size-3.5 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
