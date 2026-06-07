import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "../lib/storage";

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
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between rounded-full border bg-[var(--color-surface)]/80 px-5 backdrop-blur-md">
        <a href="#top" className="font-display text-lg tracking-tight">
          Road to <span className="text-[var(--color-accent)]">Germany</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-[var(--color-accent)]"
        >
          {theme === "dark" ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
        </button>
      </nav>
    </header>
  );
}
