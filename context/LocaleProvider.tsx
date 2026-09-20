"use client";

import {
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { getDictionary } from "@/data/dictionary";
import { LocaleContext } from "@/context/LocaleContext";
import type { Locale } from "@/lib/types";

const LOCALE_STORAGE_KEY = "ngs-locale";

type LocaleProviderProps = {
  children: ReactNode;
  defaultLocale?: Locale;
};

export const LocaleProvider = ({
  children,
  defaultLocale = "EN",
}: LocaleProviderProps): ReactElement => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored === "EN" || stored === "UR") {
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable — keep default
    }
  }, []);

  const setLocale = (next: Locale): void => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // ignore persistence failures
    }
  };

  const dictionary = getDictionary(locale);
  const isRtl = locale === "UR";

  return (
    <LocaleContext.Provider value={{ locale, dictionary, setLocale, isRtl }}>
      {children}
    </LocaleContext.Provider>
  );
};
