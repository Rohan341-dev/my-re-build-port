import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCount(value: number, singular: string, plural?: string) {
  return `${value} ${value === 1 ? singular : (plural ?? `${singular}s`)}`;
}

export function absoluteUrl(path = "") {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://rohan.codenestnep.com";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
