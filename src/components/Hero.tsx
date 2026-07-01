import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import { useCountry } from "../lib/CountryContext";

function useCountdown(intakeISO: string, startISO: string) {
  const now = Date.now();
  const intake = new Date(intakeISO).getTime();
  const start = new Date(startISO).getTime();
  const total = intake - start;
  const left = intake - now;
  const days = Math.max(0, Math.ceil(left / 86_400_000));
  const progress = Math.min(1, Math.max(0, 1 - left / total));
  return { days, progress };
}

export function Hero() {
  const reduce = useReducedMotion();
  const { country } = useCountry();
  const { days, progress } = useCountdown(country.intake, country.journeyStart);
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-28 md:px-10">
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: glowY }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-60 blur-[120px]"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_60%)] opacity-40" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-[1400px] items-end gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            key={country.key + "-eyebrow"}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]"
          >
            {country.heroEyebrow}
          </motion.p>

          <motion.h1
            key={country.key + "-title"}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl leading-[0.98] tracking-tight md:text-7xl"
          >
            Shaurya goes
            <br />
            to <span className="text-[var(--color-accent)]">{country.heroAccentWord}</span>
          </motion.h1>

          <motion.p
            key={country.key + "-sub"}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-lg text-[var(--color-muted)]"
          >
            {country.heroSub}
          </motion.p>

          <motion.a
            href="#today"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Start today's ritual
            <ArrowDown weight="bold" size={18} />
          </motion.a>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[var(--radius)] border bg-[var(--color-surface)] p-8"
        >
          <CountRing days={days} progress={progress} />
        </motion.div>
      </div>
    </section>
  );
}

function CountRing({ days, progress }: { days: number; progress: number }) {
  const R = 78;
  const C = 2 * Math.PI * R;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-[200px] w-[200px]">
        <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
          <circle cx="100" cy="100" r={R} fill="none" stroke="var(--color-line)" strokeWidth="10" />
          <motion.circle
            cx="100"
            cy="100"
            r={R}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={C}
            animate={{ strokeDashoffset: C * (1 - progress) }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-5xl leading-none">{days}</span>
          <span className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            days to go
          </span>
        </div>
      </div>
      <p className="mt-5 text-sm text-[var(--color-muted)]">
        {Math.round(progress * 100)}% of the journey behind you
      </p>
    </div>
  );
}
