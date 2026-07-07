const stats = [
  { label: "Founded", value: "2025" },
  { label: "Members", value: "30+" },
  { label: "CTFs played", value: "unknown" },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-3 text-xl font-bold tracking-wider sm:text-3xl"
          style={{ fontFamily: "var(--font-pressstart)" }}
        >
          Who we are
        </h2>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]" />

        <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed text-[var(--muted)]">
            <p>
              <strong className="text-[var(--text)]">DHCP</strong> (Diponegoro
              Hacking Core of Pwning) is the cybersecurity community of
              Diponegoro University. We focus on Capture The Flag (CTF)
              competitions across multiple categories: Web, Pwn, Reversing,
              Crypto, and Misc.
            </p>
            <p>
              We run regular training sessions, internal scrims, and compete in
              national and international CTF events. Our goal is to grow a
              strong offensive-security culture at UNDIP and help members
              level up from beginner to competitor.
            </p>
            <p>
              Whether you are new to cybersecurity or an experienced player,
              there is a track for you. We share knowledge, write-ups, and
              tooling openly within the community.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card p-4 text-center md:text-left"
              >
                <div
                  className="text-lg font-bold gradient-text"
                  style={{ fontFamily: "var(--font-pressstart)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-[var(--muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}