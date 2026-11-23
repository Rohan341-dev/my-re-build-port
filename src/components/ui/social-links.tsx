import {
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
