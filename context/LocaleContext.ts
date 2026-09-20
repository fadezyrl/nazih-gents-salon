import { createContext } from "react";
import type { Dictionary, Locale } from "@/lib/types";

export type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  isRtl: boolean;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);
