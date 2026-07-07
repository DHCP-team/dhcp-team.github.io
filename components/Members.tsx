import { members } from "@/lib/data";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? "?") + (parts[1]?.[0] ?? "");
}

export default function Members() {
  return (
    <section id="members" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-3 text-xl font-bold tracking-wider sm:text-3xl"
          style={{ fontFamily: "var(--font-pressstart)" }}
        >
          The team
        </h2>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <div key={i} className="glass-card flex items-center gap-4 p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] text-lg font-bold text-[#0b0f14]">
                {m.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <span style={{ fontFamily: "var(--font-pressstart)" }}>
                    {initials(m.name)}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold text-[var(--text)]">
                  {m.name}
                </h3>
                <p className="text-base text-[var(--brand)]">{m.role}</p>
                <p
                  className="truncate text-sm text-[var(--muted)]"
                >
                  {m.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}