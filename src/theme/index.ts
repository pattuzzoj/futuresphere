import { Accessor, Setter, createEffect } from "solid-js";
import useLocalStorage from "hooks/useLocalStorage";

type Theme = "light" | "dark";

function useTheme(): [Accessor<Theme>, Setter<Theme>] {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  createEffect(() => {
    document.documentElement.setAttribute("data-theme", theme());
  });

  return [theme, setTheme];
}

export default useTheme;