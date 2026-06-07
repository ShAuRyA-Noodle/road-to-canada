import { motion, useReducedMotion } from "motion/react";
import { AFFIRMATIONS } from "../lib/data";

export function Marquee() {
  const reduce = useReducedMotion();
  const row = [...AFFIRMATIONS, ...AFFIRMATIONS];

  return (
    <section className="overflow-hidden border-t bg-[var(--color-accent-soft)] py-16">
      <div className="mb-8 px-6 text-center md:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
          Why you are doing this
        </p>
      </div>
      <div className="relative flex">
        <motion.div
          className="flex shrink-0 gap-10 pr-10"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {row.map((line, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-2xl text-[var(--color-ink)]/80 md:text-3xl"
            >
              {line}
              <span className="px-6 text-[var(--color-accent)]">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
