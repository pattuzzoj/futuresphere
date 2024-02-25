// I18nContextProvider.jsx
import { createSignal, createEffect, createMemo } from 'solid-js';
import * as i18n from '@solid-primitives/i18n';
import { dictionaries } from './languages';
import { HTML } from '../utils/constants';
import portuguese from '../assets/icons/flags/brazil.svg';
import english from '../assets/icons/flags/english-flag.svg';
import spanish from '../assets/icons/flags/spain-flag.svg';

type Locale = "en" | "es" | "pt";

const flags = {
  en: english,
  es: spanish,
  pt: portuguese,
}

const defaultLang: Locale = "pt";
const storedLang = (localStorage.getItem("lang") as Locale) ?? defaultLang;

window.addEventListener("storage", langUpdateListener);

const [language, setLanguage] = createSignal<Locale>(storedLang);
const dictionary = createMemo(() => i18n.flatten(dictionaries[language()]));
const translate = i18n.translator(dictionary);
const [_flag, setFlag] = createSignal(flags[language()]);

function langUpdateListener(event: StorageEvent) {
  if (event.key === "lang" && event.newValue !== null) {
    const newLanguage = event.newValue as Locale;
      setLanguage(newLanguage);
      setFlag(flags[newLanguage]);
  }
}

export function setLocaleI18n() {
  createEffect(() => {
    const lang = language();
    HTML.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  });

  return [language, setLanguage];
}

export function useI18n(scope: any) {
  return i18n.scopedTranslator(translate, scope);
}

export function useFlag() {
  return [_flag, setFlag, flags];
}