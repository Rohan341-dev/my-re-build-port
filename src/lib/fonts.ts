import localFont from "next/font/local";

export const inter = localFont({
  src: "../fonts/Inter-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const manrope = localFont({
  src: "../fonts/Manrope-variable.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});
