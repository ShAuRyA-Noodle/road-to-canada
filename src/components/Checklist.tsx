import { motion } from "motion/react";
import { Check } from "@phosphor-icons/react";
import { useLocalStorage } from "../lib/storage";
import { useCountry } from "../lib/CountryContext";
import { Reveal, SectionHead } from "./Reveal";

export function Checklist() {
  const { key, country } = useCountry();
  const CHECKLIST = country.checklist;
  const [done, setDone] = useLocalStorage<Record<string, boolean>>(`rtg-checklist-${key}`, {});
  const toggle = (id: string) => setDone((p) => ({ ...p, [id]: !p[id] }));

  return (
    <section id="checklist" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The paperwork"
          title="Nothing left to chance"
          lead="The documents that actually gate the journey. APS waits for your final result. Start it the day it drops."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CHECKLIST.map((group, gi) => {
            const total = group.items.length;
            const complete = group.items.filter((it) => done[it.id]).length;
            return (
              <Reveal key={group.id} delay={gi * 0.05}>
                <div className="flex h-full flex-col rounded-[var(--radius)] border bg-[var(--color-surface)] p-6">
                  <div className="mb-4 flex items-baseline justify-between">
                    <h3 className="font-display text-xl">{group.title}</h3>
                    <span className="text-sm text-[var(--color-muted)]">
                      {complete}/{total}
                    </span>
                  </div>
                  <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-[var(--color-line)]">
                    <motion.div
                      className="h-full rounded-full bg-[var(--color-accent)]"
                      animate={{ width: `${(complete / total) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((it) => {
                      const checked = !!done[it.id];
                      return (
                        <li key={it.id}>
                          <button
                            onClick={() => toggle(it.id)}
                            className="flex w-full items-center gap-3 rounded-lg py-1.5 text-left"
                          >
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                checked
                                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                                  : "border-[var(--color-muted)]"
                              }`}
                            >
                              {checked && <Check weight="bold" size={12} />}
                            </span>
                            <span
                              className={`text-sm ${
                                checked
                                  ? "text-[var(--color-muted)] line-through"
                                  : "text-[var(--color-ink)]"
                              }`}
                            >
                              {it.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
