import { technologyGroups } from "@/data/technologies";

const items = Array.from(
  new Set(technologyGroups.flatMap((group) => group.items.map((item) => item.name))),
);

export function TechMarquee() {
  return (
    <div className="marquee-mask overflow-hidden border-b border-line bg-bg-secondary/50 py-4">
      <div className="flex w-max animate-marquee items-center">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 pr-8 text-[10.5px] font-medium uppercase tracking-[0.22em] text-faint"
          >
            {item}
            <span
              className="size-1 rounded-full bg-line-strong"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
