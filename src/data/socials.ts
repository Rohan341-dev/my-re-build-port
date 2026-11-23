export type SocialIcon =
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "mail"
  | "globe";

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: SocialIcon;
  primary?: boolean;
}

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    handle: "Rohan341-dev",
    href: "https://github.com/Rohan341-dev",
    icon: "github",
    primary: true,
  },
  {
    label: "LinkedIn",
    handle: "rohan-codekage",
    href: "https://np.linkedin.com/in/rohan-codekage-746656356",
    icon: "linkedin",
    primary: true,
  },
  {
    label: "Email",
    handle: "rohanyadav234.np@gmail.com",
    href: "mailto:rohanyadav234.np@gmail.com",
    icon: "mail",
    primary: true,
  },
  {
    label: "Code Nest Nepal",
    handle: "codenestnep.com",
    href: "https://codenestnep.com",
    icon: "globe",
  },
  {
    label: "Instagram",
    handle: "@rohanl2l",
    href: "https://www.instagram.com/rohanl2l",
    icon: "instagram",
  },
  {
    label: "Facebook",
    handle: "Rohan Codekage",
    href: "https://www.facebook.com/rohanl2l",
    icon: "facebook",
  },
];

export const primarySocials = socials.filter((social) => social.primary);
