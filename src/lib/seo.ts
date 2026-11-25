import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetaInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/opengraph-image",
  type = "website",
  noIndex = false,
}: PageMetaInput = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const images = [{ url: image, width: 1200, height: 630, alt: fullTitle }];

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: type === "profile" ? "profile" : type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
