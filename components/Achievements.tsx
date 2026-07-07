import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-3 text-xl font-bold tracking-wider sm:text-3xl"
          style={{ fontFamily: "var(--font-pressstart)" }}
        >
          Achievements
        </h2>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]" />

        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)]">
          <table className="w-full text-left text-base">
            <thead className="bg-[rgba(255,255,255,0.04)] text-[var(--muted)]">
              <tr>
                <th className="px-4 py-3 font-medium">Event</th>
                <th className="px-4 py-3 font-medium">Placement</th>
                <th className="px-4 py-3 font-medium">Year</th>
                <th className="px-4 py-3 font-medium">Note</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((a, i) => (
                <tr
                  key={i}
                  className="border-t border-[var(--border)] text-[var(--text)]"
                >
                  <td className="px-4 py-3">{a.event}</td>
                  <td className="px-4 py-3">
                    <span className="font-semibold gradient-text">
                      {a.placement}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[var(--muted)]">{a.year}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{a.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-[var(--muted)]">
          More achievements will be added as we compete.
        </p>
      </div>
    </section>
  );
}