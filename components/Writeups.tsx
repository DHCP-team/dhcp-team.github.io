import { writeups } from "@/lib/data";

export default function Writeups() {
  return (
    <section id="writeups" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-3 text-xl font-bold tracking-wider sm:text-3xl"
          style={{ fontFamily: "var(--font-pressstart)" }}
        >
          Write-ups
        </h2>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]" />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {writeups.map((w) => (
            <article
              key={w.slug}
              className="glass-card flex flex-col p-5"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span
                  className="rounded-full bg-[rgba(55,230,255,0.1)] px-2.5 py-1 text-xs font-medium text-[var(--brand)]"
                >
                  {w.category}
                </span>
                <span className="text-sm text-[var(--muted)]">{w.date}</span>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-[var(--text)]">
                {w.title}
              </h3>
              <p className="mb-3 text-base text-[var(--muted)]">{w.excerpt}</p>
              <div className="mt-auto">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                  title="Coming soon"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--warn)]" />
                  Coming soon
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Write-ups will be published here.
        </p>
      </div>
    </section>
  );
}