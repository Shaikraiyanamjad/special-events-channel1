import { SectionHeader } from "./Section";

const pins = [
  { x: "22%", y: "38%", city: "New York", events: 124 },
  { x: "44%", y: "34%", city: "London", events: 98 },
  { x: "50%", y: "40%", city: "Paris", events: 76 },
  { x: "56%", y: "52%", city: "Dubai", events: 62 },
  { x: "72%", y: "48%", city: "Singapore", events: 81 },
  { x: "82%", y: "42%", city: "Tokyo", events: 70 },
  { x: "30%", y: "62%", city: "São Paulo", events: 44 },
  { x: "60%", y: "70%", city: "Cape Town", events: 31 },
];

export function GlobalMap() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Global Reach"
          title={
            <>
              92 countries. One <span className="italic text-gradient-emerald">live channel.</span>
            </>
          }
          description="Track international conferences, hospitality venues, and trade shows happening right now across the global event ecosystem."
        />

        <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-soft p-6 shadow-soft sm:p-10">
          <div
            className="relative aspect-[2/1] w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--primary) 35%, transparent) 1px, transparent 0)",
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(ellipse at center, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 60%, transparent 100%)",
            }}
          >
            {pins.map((p) => (
              <div
                key={p.city}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: p.x, top: p.y }}
              >
                <span className="block h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-primary/20" />
                <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-primary/40" />
                <div className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-xl glass px-3 py-2 text-xs opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-semibold text-foreground">{p.city}</p>
                  <p className="text-foreground/60">{p.events} live events</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {[
              { l: "Cities", v: "320+" },
              { l: "Live now", v: "47" },
              { l: "Venues mapped", v: "1,840" },
              { l: "Annual reach", v: "12M" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white p-5 text-center shadow-soft">
                <p className="font-display text-3xl text-gradient-emerald">{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-foreground/55">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
