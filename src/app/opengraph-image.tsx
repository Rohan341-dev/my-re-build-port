import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";
import { profile } from "@/data/profile";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080B0A",
          backgroundImage:
            "radial-gradient(900px 500px at 12% 0%, #123326 0%, #080B0A 62%)",
          padding: "72px",
          color: "#E8F0EB",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                border: "1px solid #2B3B33",
                backgroundColor: "#17231C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: -0.5,
              }}
            >
              RY
            </div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#98A69D",
              }}
            >
              Software Engineer
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#68766E",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                backgroundColor: "#19C784",
              }}
            />
            Nepal / 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#19C784",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Engineering Ideas Into Reality.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#98A69D",
              maxWidth: 760,
              lineHeight: 1.5,
            }}
          >
            Software Engineer · Full-Stack Developer · Tech Entrepreneur
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1E2A24",
            paddingTop: 26,
            fontSize: 15,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#68766E",
          }}
        >
          <span>rohan.codenestnep.com</span>
          <span style={{ color: "#16C8D9" }}>Build · Ship · Learn</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
