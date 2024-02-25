import { createSignal, createEffect } from 'solid-js';
import { HTML } from '../utils/constants'

type Theme = "light" | "dark";

let defaultTheme: Theme = "light";
const storedTheme: any = localStorage.getItem("theme");

if(!storedTheme) {
  localStorage.setItem("theme", defaultTheme);
} else {
  defaultTheme = storedTheme;
}

const [theme, setTheme] = createSignal(defaultTheme);
HTML.setAttribute("data-theme", theme());

createEffect(() => {
  localStorage.setItem("theme", theme());
  HTML.setAttribute("data-theme", theme());
});

window.addEventListener("storage", themeUpdateListener);

function themeUpdateListener(event: StorageEvent) {
  if (event.key === "theme") {
    const newTheme = event.newValue as Theme;

    if(newTheme !== null && newTheme !== theme()) {
      setTheme(newTheme);
    }
  }
}

export default function useTheme() {
  return [theme, setTheme];
}