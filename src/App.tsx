import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";
import { CountryProvider, useCountry } from "./lib/CountryContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { DailyRituals } from "./components/DailyRituals";
import { Universities } from "./components/Universities";
import { Checklist } from "./components/Checklist";
import { Timeline } from "./components/Timeline";
import { Marquee } from "./components/Marquee";
import { Curriculum } from "./components/Curriculum";
import { DsaTracker } from "./components/DsaTracker";

function AppInner() {
  const { country } = useCountry();
  return (
    <div id="top" className="grain min-h-[100dvh]">
      <Nav />
      <main>
        <Hero />
        <DailyRituals />
        <Universities />
        <DsaTracker />
        <Curriculum />
        <Marquee />
        <Checklist />
        <Timeline />
      </main>
      <footer className="border-t px-6 py-14 text-center md:px-10">
        <p className="font-display text-2xl">{country.footerLine}</p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Built for Shaurya. Open it daily. Tick one block. Repeat.
        </p>
      </footer>
    </div>
  );
}

export function App() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduce]);

  return (
    <CountryProvider>
      <AppInner />
    </CountryProvider>
  );
}
