export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Ventures", href: "/ventures" },
  { label: "Research", href: "/research" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation: NavItem[] = [
  ...navigation,
  { label: "Resume", href: "/resume.pdf" },
];

export const resume = {
  href: "/resume.pdf",
  fileName: "Rohan-Yadav-Resume.pdf",
  label: "Resume",
} as const;
