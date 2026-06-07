import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-xl text-[var(--color-muted)]">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
