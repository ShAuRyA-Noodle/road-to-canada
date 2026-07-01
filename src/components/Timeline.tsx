import { useCountry } from "../lib/CountryContext";
import { Reveal, SectionHead } from "./Reveal";

export function Timeline() {
  const TIMELINE = useCountry().country.timeline;
  return (
    <section id="timeline" className="border-t px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="The route"
          title="Sixteen months, mapped"
          lead="Fixed dates bend for nothing. Everything else flexes around them."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-line)] md:left-1/2" />
          <div className="flex flex-col gap-10">
            {TIMELINE.map((m, i) => (
              <Reveal key={m.when} delay={Math.min(i * 0.04, 0.3)}>
                <div
                  className={`relative grid gap-4 pl-8 md:grid-cols-2 md:pl-0 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] md:left-1/2 md:-translate-x-1/2" />
                  <div className={i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}>
                    <span className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-accent)]">
                      {m.when}
                    </span>
                    <h3 className="mt-1 font-display text-2xl">{m.title}</h3>
                  </div>
                  <div className={i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}>
                    <p className="text-[var(--color-muted)]">{m.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
