import { motion } from "motion/react";
import { Check, Flame } from "@phosphor-icons/react";
import { RITUALS } from "../lib/data";
import { currentStreak, todayKey, useLocalStorage } from "../lib/storage";
import { Reveal, SectionHead } from "./Reveal";

type Log = Record<string, string[]>; // dateKey -> ritual ids done

export function DailyRituals() {
  const [log, setLog] = useLocalStorage<Log>("rtg-rituals", {});
  const today = todayKey();
  const doneToday = log[today] ?? [];

  const toggle = (id: string) => {
    setLog((prev) => {
      const cur = new Set(prev[today] ?? []);
      cur.has(id) ? cur.delete(id) : cur.add(id);
      return { ...prev, [today]: [...cur] };
    });
  };

  // a day counts toward the streak once at least 3 rituals are logged
  const qualifyingDays = Object.entries(log)
    .filter(([, ids]) => ids.length >= 3)
    .map(([d]) => d);
  const streak = currentStreak(qualifyingDays);
  const pct = Math.round((doneToday.length / RITUALS.length) * 100);

  return (
    <section id="today" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="Today"
          title="The daily ritual"
          lead="Tick each block as you finish it. Three or more keeps the streak alive. German is sacred."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-3 sm:grid-cols-2">
            {RITUALS.map((r, i) => {
              const done = doneToday.includes(r.id);
              return (
                <Reveal key={r.id} delay={i * 0.05}>
                  <button
                    onClick={() => toggle(r.id)}
                    className={`group flex w-full items-center gap-4 rounded-[var(--radius)] border p-5 text-left transition-colors ${
                      done
                        ? "border-transparent bg-[var(--color-accent-soft)]"
                        : "bg-[var(--color-surface)] hover:border-[var(--color-accent)]"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        done
                          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                          : "border-[var(--color-muted)]"
                      }`}
                    >
                      {done && <Check weight="bold" size={16} />}
                    </span>
                    <span>
                      <span className="block font-medium">{r.label}</span>
                      <span className="text-sm text-[var(--color-muted)]">{r.target}</span>
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-[var(--radius)] border bg-[var(--color-surface)] p-7">
              <div className="flex items-center gap-3">
                <Flame weight="fill" size={28} className="text-[var(--color-accent)]" />
                <div>
                  <div className="font-display text-4xl leading-none">{streak}</div>
                  <div className="text-sm text-[var(--color-muted)]">day streak</div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm text-[var(--color-muted)]">
                  <span>Today</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[var(--color-line)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-accent)]"
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <p className="mt-4 text-sm text-[var(--color-muted)]">
                  {pct === 100
                    ? "Every block done. Future you in Munich says thank you."
                    : "Keep going. The struggle is the skill."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
