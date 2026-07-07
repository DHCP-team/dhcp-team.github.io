import MatrixRain from "./MatrixRain";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 py-24 text-center sm:py-32"
    >
      <MatrixRain />
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="DHCP logo"
          width={240}
          height={240}
          className="mx-auto mb-8 pixelated"
        />

        <h1
          className="mb-5 text-2xl font-bold leading-relaxed tracking-wider gradient-text sm:text-4xl"
          style={{ fontFamily: "var(--font-pressstart)" }}
        >
          Diponegoro Hacking Core of Pwning
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
          Cybersecurity community of Diponegoro University. Documentation,
          write-ups, and events &mdash; coming soon.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] px-6 py-3 text-base font-semibold text-black no-underline transition hover:opacity-90"
          >
            Explore
          </a>
          <a
            href="https://github.com/DHCP-team"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-6 py-3 text-base font-semibold text-[var(--text)] no-underline transition hover:border-[rgba(255,255,255,0.22)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}