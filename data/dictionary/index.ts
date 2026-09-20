import { en } from "@/data/dictionary/en";
import { ur } from "@/data/dictionary/ur";
import type { Dictionary, Locale } from "@/lib/types";

export const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  UR: ur,
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale];
};
