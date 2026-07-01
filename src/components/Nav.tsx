import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "../lib/storage";
import { useCountry } from "../lib/CountryContext";
import { COUNTRY_ORDER, COUNTRIES } from "../lib/countries";

const LINKS = [
  { href: "#today", label: "Today" },
  { href: "#universities", label: "The Eleven" },
  { href: "#grind", label: "Grind" },
  { href: "#curriculum", label: "Arsenal" },
  { href: "#checklist", label: "Paperwork" },
  { href: "#timeline", label: "Route" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const { key, country, setCountry } = useCountry();
  const label = country.label;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-3 rounded-full border bg-[var(--color-surface)]/80 px-5 backdrop-blur-md">
        <a href="#top" className="shrink-0 font-display text-lg tracking-tight">
          Road to <span className="text-[var(--color-accent)]">{label}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="flex items-center rounded-full border p-0.5">
            {COUNTRY_ORDER.map((k) => (
              <button
                key={k}
                onClick={() => setCountry(k)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  key === k
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {COUNTRIES[k].label}
              </button>
            ))}
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-[var(--color-accent)]"
          >
            {theme === "dark" ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
