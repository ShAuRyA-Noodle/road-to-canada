import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { COUNTRIES, type CountryData, type CountryKey } from "./countries";

type Ctx = { key: CountryKey; country: CountryData; setCountry: (k: CountryKey) => void };

const CountryCtx = createContext<Ctx | null>(null);

function initialKey(): CountryKey {
  const saved = localStorage.getItem("rtg-country") as CountryKey | null;
  return saved && saved in COUNTRIES ? saved : "canada";
}

export function CountryProvider({ children }: { children: ReactNode }) {
  const [key, setKey] = useState<CountryKey>(() => {
    const k = initialKey();
    document.documentElement.dataset.country = k;
    return k;
  });

  const setCountry = useCallback((k: CountryKey) => {
    setKey(k);
    localStorage.setItem("rtg-country", k);
    document.documentElement.dataset.country = k;
  }, []);

  return (
    <CountryCtx.Provider value={{ key, country: COUNTRIES[key], setCountry }}>
      {children}
    </CountryCtx.Provider>
  );
}

export function useCountry() {
  const ctx = useContext(CountryCtx);
  if (!ctx) throw new Error("useCountry must be used inside CountryProvider");
  return ctx;
}
