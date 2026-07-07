export default function Contact() {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="mb-3 text-xl font-bold tracking-wider sm:text-3xl"
          style={{ fontFamily: "var(--font-pressstart)" }}
        >
          Get in touch
        </h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]" />

        <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted)]">
          Want to collaborate, sponsor, or join our scrims? Reach us via GitHub
          or hop into our Discord server.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/DHCP-team"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] px-6 py-3.5 text-base font-semibold text-black no-underline transition hover:opacity-90"
          >
            GitHub Organization
          </a>
          <a
            href="#"
            aria-disabled="true"
            title="Invitational only"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-6 py-3.5 text-base font-semibold text-[var(--muted)] no-underline"
          >
            Discord (invitational only)
          </a>
        </div>
      </div>
    </section>
  );
}