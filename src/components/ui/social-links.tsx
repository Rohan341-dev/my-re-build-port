import {
  ArrowUpRight,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { socials, type SocialIcon, type SocialLink } from "@/data/socials";

const iconMap: Record<SocialIcon, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  mail: Mail,
  globe: Globe,
};

export function SocialIconLink({
  social,
  className,
}: {
  social: SocialLink;
  className?: string;
}) {
  const Icon = iconMap[social.icon];
  const isExternal = social.href.startsWith("http");

  return (
    <a
      href={social.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={social.label}
      className={cn(
        "group grid size-9 place-items-center rounded-full border border-line bg-surface/50 text-muted transition-colors duration-300 hover:border-brand/40 hover:text-brand",
        className,
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
    </a>
  );
}

export function SocialLinks({
  className,
  items = socials,
}: {
  className?: string;
  items?: SocialLink[];
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map((social) => (
        <SocialIconLink key={social.label} social={social} />
      ))}
    </div>
  );
}

export function SocialRowList({
  items,
  className,
}: {
  items: SocialLink[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col", className)}>
      {items.map((social) => {
        const Icon = iconMap[social.icon];
        const isExternal = social.href.startsWith("http");
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 border-b border-line py-3.5 transition-colors hover:text-brand"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-full border border-line bg-surface/50 text-muted transition-colors group-hover:border-brand/40 group-hover:text-brand">
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[12px] font-medium text-ink transition-colors group-hover:text-brand">
                    {social.label}
                  </span>
                  <span className="text-[11px] text-faint">{social.handle}</span>
                </span>
              </span>
              <ArrowUpRight
                className="size-3.5 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
