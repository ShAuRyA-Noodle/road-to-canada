import { motion } from "motion/react";
import { Minus, Plus } from "@phosphor-icons/react";
import { useLocalStorage } from "../lib/storage";
import { Reveal, SectionHead } from "./Reveal";

type Sheet = { id: string; label: string; sub: string; target: number; url: string };

const SHEETS: Sheet[] = [
  {
    id: "a2z",
    label: "Striver A2Z",
    sub: "The foundation. Solve by hand.",
    target: 455,
    url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  },
  {
    id: "neet",
    label: "NeetCode 150",
    sub: "Interview pattern set.",
    target: 150,
    url: "https://neetcode.io/practice",
  },
  {
    id: "blind",
    label: "Blind 75",
    sub: "Speed revision before mocks.",
    target: 75,
    url: "https://neetcode.io/practice?tab=blind75",
  },
];

type Counts = Record<string, number>;

export function DsaTracker() {
  const [counts, setCounts] = useLocalStorage<Counts>("rtg-dsa", {});

  const bump = (id: string, by: number, max: number) =>
    setCounts((p) => ({ ...p, [id]: Math.max(0, Math.min(max, (p[id] ?? 0) + by)) }));

  const totalSolved = SHEETS.reduce((s, sh) => s + (counts[sh.id] ?? 0), 0);
  const totalTarget = SHEETS.reduce((s, sh) => s + sh.target, 0);

  return (
    <section id="grind" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The grind"
          title="Problems solved, by hand"
          lead="The one number that actually buys the job. Watching does nothing. This counter only moves when you solve."
        />

        <div className="mb-8 flex flex-wrap items-end gap-x-3">
          <span className="font-display text-6xl leading-none text-[var(--color-accent)]">
            {totalSolved}
          </span>
          <span className="pb-1 text-[var(--color-muted)]">/ {totalTarget} problems solved</span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {SHEETS.map((sh, i) => {
            const n = counts[sh.id] ?? 0;
            const pct = Math.round((n / sh.target) * 100);
            return (
              <Reveal key={sh.id} delay={i * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-[var(--radius)] border bg-[var(--color-surface)] p-6">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <a
                        href={sh.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display text-2xl transition-colors hover:text-[var(--color-accent)]"
                      >
                        {sh.label}
                      </a>
                      <span className="text-sm text-[var(--color-muted)]">{pct}%</span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{sh.sub}</p>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-display text-4xl leading-none">{n}</span>
                      <span className="text-sm text-[var(--color-muted)]">/ {sh.target}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--color-line)]">
                      <motion.div
                        className="h-full rounded-full bg-[var(--color-accent)]"
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={() => bump(sh.id, -1, sh.target)}
                      aria-label="Remove one"
                      className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:border-[var(--color-accent)] active:scale-95"
                    >
                      <Minus weight="bold" size={18} />
                    </button>
                    <button
                      onClick={() => bump(sh.id, 1, sh.target)}
                      aria-label="Add one"
                      className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] font-medium text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <Plus weight="bold" size={18} />
                      Solved one
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
