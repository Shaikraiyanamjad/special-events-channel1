import heroImg from "@/assets/hero.jpg";

const stats = [
  { v: "12K+", l: "Global events covered" },
  { v: "480", l: "Live webcasts / yr" },
  { v: "92", l: "Countries reached" },
  { v: "1.4M", l: "Executive members" },
];

const sponsors = [
  "Marriott", "Forbes", "Bloomberg", "Web Summit", "Four Seasons",
  "TED", "Hilton", "Reuters", "Accor", "Emirates",
];

export function Hero() {
  return (
    <section className="relative isolate">
      {/* Full-screen video background */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImg}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-business-team-meeting-in-a-conference-room-4837-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-a-business-meeting-9166/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle scrim only at edges so content stays legible — no heavy overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
          <div className="max-w-4xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Live now · Global Hospitality Summit, Dubai
            </div>

            <h1 className="font-display text-5xl font-light leading-[1.02] text-white text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Where Global Events &amp;{" "}
              <span className="italic text-primary-soft">Business Leaders</span>{" "}
              Connect.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Discover premier conferences, executive insights, sponsorship opportunities,
              hospitality events, and industry-leading experiences from around the world.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#events"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Explore Events
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#webcasts"
                className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold text-white hover:text-primary-soft transition-colors"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">▶</span>
                Watch Webcasts
              </a>
              <a
                href="#sponsors"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip below the cinematic video */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-white p-5 shadow-soft transition-transform hover:-translate-y-1">
                <dt className="text-xs uppercase tracking-wider text-foreground/60">{s.l}</dt>
                <dd className="mt-1 font-display text-3xl font-medium text-gradient-emerald">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Sponsor marquee */}
        <div className="border-y border-border/60 bg-white/60 backdrop-blur-md">
          <div className="overflow-hidden py-6">
            <div className="marquee flex w-max gap-16 px-6">
              {[...sponsors, ...sponsors].map((s, i) => (
                <span
                  key={i}
                  className="font-display text-2xl font-light tracking-wide text-foreground/40 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
