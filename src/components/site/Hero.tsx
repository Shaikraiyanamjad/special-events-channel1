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
    <section className="relative isolate overflow-hidden pt-24">
      {/* Background video with image fallback */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImg}
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-business-meeting-9166/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 30%, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%), radial-gradient(50% 50% at 90% 80%, color-mix(in oklab, var(--primary-deep) 35%, transparent), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Live now · Global Hospitality Summit, Dubai
            </div>

            <h1 className="font-display text-5xl font-light leading-[1.02] text-foreground text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Where Global Events &amp;{" "}
              <span className="italic text-gradient-emerald">Business Leaders</span>{" "}
              Connect.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
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
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                  ▶
                </span>
                Watch Webcasts
              </a>
              <a
                href="#sponsors"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/60 px-7 py-3.5 text-sm font-semibold text-primary-deep hover:bg-white"
              >
                Become a Sponsor
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl glass p-4 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <dt className="text-xs uppercase tracking-wider text-foreground/60">{s.l}</dt>
                  <dd className="mt-1 font-display text-3xl font-medium text-gradient-emerald">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Floating side card */}
          <div className="lg:col-span-4">
            <div className="float-slow rounded-3xl glass p-6 shadow-elegant">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-deep">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> On Air
                </span>
                <span className="text-xs text-foreground/60">02:14:09</span>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <img
                  src={heroImg}
                  alt="Live broadcast"
                  className="h-44 w-full object-cover"
                  width={640}
                  height={360}
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-medium">
                CEO Roundtable: The Future of Global Hospitality
              </h3>
              <p className="mt-1 text-sm text-foreground/60">
                Featuring leaders from Marriott, Accor & Four Seasons
              </p>
              <button className="mt-4 w-full rounded-full bg-gradient-emerald py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow">
                Join Live Stream
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor marquee */}
      <div className="relative border-y border-border/60 bg-white/60 backdrop-blur-md">
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
    </section>
  );
}
