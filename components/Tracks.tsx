import { tracks } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  web: (
    <path d="M2 5h20v14H2zM2 9h20M6 12.5h4M6 15h6" />
  ),
  pwn: (
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3zM9.5 12.5a2.5 2.5 0 115 0v2h-5v-2z" />
  ),
  reversing: (
    <path d="M4 4h16v16H4zM4 9h16M9 9v11M14 14l3 3-3 3M17 17H9" />
  ),
  crypto: (
    <path d="M7 11V8a5 5 0 0110 0v3M5 11h14v10H5zM12 15v2" />
  ),
  misc: (
    <path d="M12 2l3 6 6 .5-4.5 4 1.5 6.5L12 16l-6 3 1.5-6.5L3 8.5 9 8z" />
  ),
};

export default function Tracks() {
  return (
    <section id="tracks" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-3 text-xl font-bold tracking-wider sm:text-3xl"
          style={{ fontFamily: "var(--font-pressstart)" }}
        >
          Our tracks
        </h2>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <div key={track.name} className="glass-card p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(55,230,255,0.1)] text-[var(--brand)]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[track.icon]}
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">
                {track.name}
              </h3>
              <p className="text-base text-[var(--muted)]">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}