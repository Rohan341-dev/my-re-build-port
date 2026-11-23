import { cn } from "@/lib/utils";
import type { ProjectCover } from "@/data/projects";

function Pattern({ pattern }: { pattern: ProjectCover["pattern"] }) {
  if (pattern === "orbit") {
    return (
      <div className="absolute -right-20 top-1/2 size-[420px] -translate-y-1/2 sm:-right-10">
        {[0, 1, 2, 3].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-full border border-white/[0.08]"
            style={{ inset: `${ring * 38}px` }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
        <div className="absolute left-[18%] top-[26%] size-1.5 rounded-full bg-brand/80" />
      </div>
    );
  }

  if (pattern === "waves") {
    return (
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((wave) => (
          <path
            key={wave}
            d={`M-20 ${170 + wave * 34} C 120 ${90 + wave * 34}, 260 ${
              250 + wave * 20
            }, 420 ${170 + wave * 30} S 620 ${90 + wave * 34}, 640 ${
              150 + wave * 34
            }`}
            fill="none"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="1"
          />
        ))}
      </svg>
    );
  }

  if (pattern === "mesh") {
    return (
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5].map((line) => (
          <line
            key={`h-${line}`}
            x1="0"
            y1={line * 70 + 30}
            x2="600"
            y2={line * 70 + 30}
            stroke="rgba(255,255,255,0.06)"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((line) => (
          <line
            key={`v-${line}`}
            x1={line * 75}
            y1="0"
            x2={line * 75 + 90}
            y2="400"
            stroke="rgba(255,255,255,0.05)"
          />
        ))}
        <polygon
          points="330,120 430,180 430,280 330,340 230,280 230,180"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
        />
        <polygon
          points="330,150 405,195 405,265 330,310 255,265 255,195"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.1)"
        />
      </svg>
    );
  }

  return (
    <>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 10%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 40%, black 10%, transparent 72%)",
        }}
      />
      <div className="absolute right-[12%] top-1/2 hidden h-40 w-40 -translate-y-1/2 rotate-45 border border-white/10 sm:block" />
      <div className="absolute right-[16%] top-1/2 hidden h-24 w-24 -translate-y-1/2 rotate-45 border border-white/[0.07] sm:block" />
    </>
  );
}

export function ProjectArt({
  cover,
  title,
  className,
}: {
  cover: ProjectCover;
  title: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Abstract visual for ${title}`}
      className={cn(
        "relative isolate overflow-hidden bg-[#06100c]",
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(120% 110% at 12% 0%, ${cover.from} 0%, #06100c 62%), radial-gradient(90% 90% at 100% 100%, ${cover.to}38 0%, transparent 62%)`,
      }}
    >
      <div className="noise absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,10,8,0.1) 0%, rgba(4,10,8,0.55) 100%)",
        }}
        aria-hidden="true"
      />
      <div aria-hidden="true">
        <Pattern pattern={cover.pattern} />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
            {cover.label}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/35">
            <span className="size-1 rounded-full bg-brand" aria-hidden="true" />
            RY
          </span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <span className="font-display text-[clamp(2.75rem,7vw,4.75rem)] font-light leading-none tracking-tight text-white/85">
            {cover.monogram}
          </span>
          <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
            2026 / NEPAL
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-3 rounded-[inherit] border border-white/[0.06]"
        aria-hidden="true"
      />
    </div>
  );
}
