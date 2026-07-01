import { CaretDown } from "@phosphor-icons/react";
import type { UniStatus } from "../lib/data";
import { useLocalStorage } from "../lib/storage";
import { useCountry } from "../lib/CountryContext";
import { Reveal, SectionHead } from "./Reveal";

const STATUSES: UniStatus[] = [
  "Researching",
  "Preparing",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

const TIER_COLOR: Record<string, string> = {
  Reach: "var(--color-accent)",
  Target: "#C98A2B",
  Safe: "#3F8F6B",
};

export function Universities() {
  const { key, country } = useCountry();
  const UNIVERSITIES = country.universities;
  const [status, setStatus] = useLocalStorage<Record<string, UniStatus>>(`rtg-unis-${key}`, {});

  const offers = Object.values(status).filter((s) => s === "Offer").length;
  const applied = Object.values(status).filter((s) =>
    ["Applied", "Interview", "Offer"].includes(s),
  ).length;

  return (
    <section id="universities" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The eleven"
          title="Apply broad, land three"
          lead="No single university is a sure thing. Eleven of them together are. Track each one here."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          <Stat label="Applied" value={`${applied} / 11`} />
          <Stat label="Offers" value={`${offers}`} highlight />
          <Stat label="Goal" value="3 to 4 offers" />
        </div>

        <div className="grid gap-3">
          {UNIVERSITIES.map((u, i) => (
            <Reveal key={u.id} delay={Math.min(i * 0.03, 0.3)}>
              <div className="grid items-center gap-4 rounded-[var(--radius)] border bg-[var(--color-surface)] p-5 md:grid-cols-[1.3fr_1fr_0.8fr_auto]">
                <div className="flex items-center gap-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium text-white"
                    style={{ background: TIER_COLOR[u.tier] }}
                  >
                    {u.tier}
                  </span>
                  <div>
                    <div className="font-medium">{u.name}</div>
                    <div className="text-sm text-[var(--color-muted)]">{u.program}</div>
                  </div>
                </div>
                <div className="text-sm text-[var(--color-muted)]">{u.note}</div>
                <div className="text-sm">
                  <div>{u.tuition}</div>
                  <div className="text-[var(--color-muted)]">{u.deadline}</div>
                </div>
                <div className="relative">
                  <select
                    value={status[u.id] ?? "Researching"}
                    onChange={(e) =>
                      setStatus((p) => ({ ...p, [u.id]: e.target.value as UniStatus }))
                    }
                    className="w-full appearance-none rounded-full border bg-[var(--color-bg)] py-2 pl-4 pr-9 text-sm font-medium outline-none focus:border-[var(--color-accent)] md:w-40"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <CaretDown
                    size={14}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-[var(--radius)] border px-5 py-3 ${
        highlight ? "bg-[var(--color-accent-soft)]" : "bg-[var(--color-surface)]"
      }`}
    >
      <div className="font-display text-2xl leading-none">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
        {label}
      </div>
    </div>
  );
}
