import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowsClockwise, Check } from "@phosphor-icons/react";
import { COURSES, TRACKS, type Verdict } from "../lib/curriculum";
import { useLocalStorage } from "../lib/storage";
import { Reveal, SectionHead } from "./Reveal";

const VERDICT_COLOR: Record<Verdict, string> = {
  Do: "var(--color-accent)",
  Later: "#C98A2B",
  Skip: "#9A8C92",
  Done: "#3F8F6B",
};

type Filter = "All" | Verdict | "Redundant";
const FILTERS: Filter[] = ["All", "Do", "Later", "Done", "Skip", "Redundant"];
const FILTER_LABEL: Record<Filter, string> = {
  All: "Everything",
  Do: "Do now",
  Later: "Later",
  Done: "Done",
  Skip: "Skip",
  Redundant: "Redundant",
};

export function Curriculum() {
  const [filter, setFilter] = useState<Filter>("All");
  const [done, setDone] = useLocalStorage<Record<string, boolean>>("rtg-courses", {});
  const toggle = (id: string) => setDone((p) => ({ ...p, [id]: !p[id] }));

  const counts: Record<Filter, number> = {
    All: COURSES.length,
    Do: COURSES.filter((c) => c.verdict === "Do").length,
    Later: COURSES.filter((c) => c.verdict === "Later").length,
    Done: COURSES.filter((c) => c.verdict === "Done").length,
    Skip: COURSES.filter((c) => c.verdict === "Skip").length,
    Redundant: COURSES.filter((c) => c.redundant).length,
  };

  const matches = (c: (typeof COURSES)[number]) =>
    filter === "All" ? true : filter === "Redundant" ? !!c.redundant : c.verdict === filter;

  // progress counts only what is worth doing: Do + Later, plus already Done
  const worth = COURSES.filter((c) => c.verdict !== "Skip");
  const doneCount = worth.filter((c) => done[c.id] || c.verdict === "Done").length;
  const pct = Math.round((doneCount / worth.length) * 100);

  return (
    <section id="curriculum" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The arsenal"
          title="Every link, nothing cut"
          lead={`All ${COURSES.length} resources you sent are here, split by track. Duplicates and overlaps are kept and flagged, not removed. Tap Redundant to cluster them.`}
        />

        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-transparent bg-[var(--color-ink)] text-[var(--color-bg)]"
                      : "hover:border-[var(--color-accent)]"
                  }`}
                >
                  {FILTER_LABEL[f]}
                  {f !== "All" && <span className="ml-1.5 opacity-60">{counts[f]}</span>}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-40 overflow-hidden rounded-full bg-[var(--color-line)]">
              <motion.div
                className="h-full rounded-full bg-[var(--color-accent)]"
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-sm text-[var(--color-muted)]">
              {doneCount}/{worth.length} worth doing
            </span>
          </div>
        </div>

        <div className="grid gap-10">
          {TRACKS.map((track) => {
            const items = COURSES.filter((c) => c.track === track && matches(c));
            if (items.length === 0) return null;
            return (
              <Reveal key={track}>
                <div>
                  <h3 className="mb-4 font-display text-2xl">
                    {track}
                    <span className="ml-3 align-middle text-sm font-normal text-[var(--color-muted)]">
                      {items.length}
                    </span>
                  </h3>
                  <div className="grid gap-2">
                    {items.map((c) => {
                      const checked = !!done[c.id] || c.verdict === "Done";
                      return (
                        <div
                          key={c.id}
                          className="flex items-center gap-3 rounded-xl border bg-[var(--color-surface)] px-4 py-3"
                        >
                          <button
                            onClick={() => toggle(c.id)}
                            aria-label="Toggle done"
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                              checked
                                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                                : "border-[var(--color-muted)]"
                            }`}
                          >
                            {checked && <Check weight="bold" size={12} />}
                          </button>

                          <div className="min-w-0 flex-1">
                            <div
                              className={`truncate text-sm font-medium ${
                                checked ? "text-[var(--color-muted)]" : ""
                              }`}
                            >
                              {c.label}
                            </div>
                            <div className="flex items-center gap-2">
                              {c.redundant && (
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#C98A2B]">
                                  <ArrowsClockwise size={11} weight="bold" />
                                  {c.redundant}
                                </span>
                              )}
                              {c.note && !c.redundant && (
                                <span className="truncate text-xs text-[var(--color-muted)]">
                                  {c.note}
                                </span>
                              )}
                            </div>
                          </div>

                          <span
                            className="shrink-0 rounded-full px-2.5 py-1 text-xs font-medium text-white"
                            style={{ background: VERDICT_COLOR[c.verdict] }}
                          >
                            {c.verdict === "Do" ? "Do now" : c.verdict}
                          </span>

                          {c.url ? (
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Open course"
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                            >
                              <ArrowUpRight size={15} weight="bold" />
                            </a>
                          ) : (
                            <span className="h-8 w-8 shrink-0" />
                          )}
                        </div>
                      );
                    })}
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
