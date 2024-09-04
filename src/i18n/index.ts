import { createSignal, createEffect, createMemo } from "solid-js";
import { flatten, translator, scopedTranslator } from "@solid-primitives/i18n";
import { dictionaries } from "./languages";
import portuguese from "assets/icons/flags/brazil.svg";
import english from "assets/icons/flags/english.svg";
import spanish from "assets/icons/flags/spain.svg";

type Locale = "en" | "es" | "pt";

const flags = {
  en: english,
  es: spanish,
  pt: portuguese,
};

const defaultLang: Locale = "pt";
const storedLang = (localStorage.getItem("lang") as Locale) ?? defaultLang;

window.addEventListener("storage", langUpdateListener);

const [language, setLanguage] = createSignal<Locale>(storedLang);
const dictionary = createMemo(() => flatten(dictionaries[language()]));
const translate = translator(dictionary);
const [flag, setFlag] = createSignal(flags[language()]);

function langUpdateListener(event: StorageEvent) {
  if (event.key === "lang" && event.newValue !== null) {
    const newLanguage = event.newValue as Locale;
    setLanguage(newLanguage);
    setFlag(flags[newLanguage]);
  }
}

function setLocaleI18n() {
  createEffect(() => {
    const lang = language();
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  });

  return [language, setLanguage];
}

function useI18n(scope: any) {
  return scopedTranslator(translate, scope);
}

export { translate, scopedTranslator, setLocaleI18n, flag, setFlag, flags }