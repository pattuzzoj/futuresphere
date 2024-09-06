import { Accessor, Setter, createEffect, createMemo } from "solid-js";
import { flatten, translator, scopedTranslator } from "@solid-primitives/i18n";
import useLocalStorage from 'hooks/useLocalStorage';
import { dictionaries } from "./languages";

type Locale = "en" | "es" | "pt";
type Scope = keyof typeof dictionaries.en;

const [lang, setLang] = useLocalStorage<Locale>("lang", "pt");
const dictionary = createMemo(() => flatten(dictionaries[lang()]));
const translate = translator(dictionary);

createEffect(() => document.documentElement.setAttribute("lang", lang()));

function useTranslator<S extends Scope>(scope: S) {
  return scopedTranslator(translate, scope);
}
  
function useLanguage(): [Accessor<Locale>, Setter<Locale>] {
  return [lang, setLang];
}

export { useTranslator, useLanguage }