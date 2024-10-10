import { createSignal, Match, Show, Switch } from "solid-js";
import { A } from "@solidjs/router";
import { useTranslator, useLanguage } from "i18n/index";
import useTheme from "theme/index";
import Icon from "components/ui/icon";
import Logo from "components/ui/logo";
import portuguese from "assets/icons/flags/brazil.webp";
import english from "assets/icons/flags/english.webp";
import spanish from "assets/icons/flags/spain.webp";
import { Menu, MenuTrigger, MenuContent } from "~/components/widgets/menu";

function Header() {
  const [theme, setTheme] = useTheme();
  const [menuIsOpen, setMenuIsOpen] = createSignal(false);
  const [lang, setLang] = useLanguage();
  const t = useTranslator("global");

  return (
    <header class="
    relative
    flex justify-between items-center
    m-1 mb-2.5 py-0.5 px-0.75 rounded-full
    text-white dark:text-black
    bg-dark dark:bg-white
    ">
      <span class="w-15">
        <a class="
        w-max
        flex items-center
        p-0.375 px-0.75
        rounded-full
        text-white dark:bg-dark
        " href="/">
          <Logo class="size-1.5 fill-white" />
          FutureSphere
        </a>
      </span>

      <nav class="
      max-md:hidden
      flex justify-center gap-1
      "
      >
        <A class="hover:text-purple" activeClass="text-purple" href="/about" end>{t("header.menu.about")}</A>
        <A class="hover:text-purple" activeClass="text-purple" href="/careers" end>{t("header.menu.careers")}</A>
        <A class="hover:text-purple" activeClass="text-purple" href="/blogs" end>{t("header.menu.blogs")}</A>
        <A class="hover:text-purple" activeClass="text-purple" href="/pricing" end>{t("header.menu.pricing")}</A>
      </nav>

      <span class="w-15 hidden md:flex justify-end items-center gap-1">
        <A class="max-md:hidden rounded-full text-white bg-purple p-0.375 px-0.75" href="/contact" end>{t("header.menu.contact")}</A>
        <span class="font-black text-purple">&nbsp;|&nbsp;</span>
        <span class="flex items-center gap-1">
          <Menu class="relative">
            {(menuIsOpen) => (
              <>
              <MenuTrigger class="flex items-center" toggle>
                <Switch>
                  <Match when={lang() == "pt"}>
                    <img class="h-1.5 rounded-sm" src={portuguese} alt="portuguese" loading="lazy"/>
                  </Match>
                  <Match when={lang() == "en"}>
                    <img class="h-1.5 rounded-sm" src={english} alt="english" loading="lazy"/>
                  </Match>
                  <Match when={lang() == "es"}>
                    <img class="h-1.5 rounded-sm" src={spanish} alt="spanish" loading="lazy"/>
                  </Match>
                </Switch>
              </MenuTrigger>
              <MenuContent class={`${menuIsOpen() ? "flex" : "hidden"} w-max absolute left-50 -translate-x-50 top-100 flex-col items-center gap-0.5 rounded-lg bg-dark p-0.5 dark:bg-white`}>
                <button title="Português" onClick={() => setLang("pt")}>
                  <img class="h-1.75 rounded-sm" src={portuguese} alt="portuguese" loading="lazy"/>
                </button>
                <button title="English" onClick={() => setLang("en")}>
                  <img class="h-1.75 rounded-sm" src={english} alt="english" loading="lazy"/>
                </button>
                <button title="Español" onClick={() => setLang("es")}>
                  <img class="h-1.75 rounded-sm" src={spanish} alt="spanish" loading="lazy"/>
                </button>
              </MenuContent>
              </>
            )}
          </Menu>
          <Show
            when={theme() == "light"} fallback={
              <button title="dark" class="hidden md:inline-block rounded-full bg-dark dark:bg-white dark:text-black" onClick={() => setTheme("light")}>
                <Icon class="inline-block" color="fill-yellow-500  stroke-yellow-500 size-1.5" name="FiMoon"/>
              </button>
            }>
            <button title="light" class="hidden md:inline-block rounded-full bg-dark dark:bg-white dark:text-black" onClick={() => setTheme("dark")}>
              <Icon class="inline-block" color="fill-yellow-500 stroke-yellow-500 size-1.5" name="FiSun"/>
            </button>
          </Show>
        </span>
      </span>

      <Show when={menuIsOpen() == true} fallback={
        <button class="md:hidden mr-0.375" aria-label="Open navigation menu" onClick={() => setMenuIsOpen(!menuIsOpen())}>
          <Icon name="RiSystemMenu2Line" color="text-white dark:text-purple size-2" />
        </button>
      }>
        <button class="md:hidden mr-0.375" aria-label="Close navigation menu" onClick={() => setMenuIsOpen(!menuIsOpen())}>
          <Icon color="text-purple size-2" name="FiX" />
        </button>
      </Show>

      <div class={`
      ${menuIsOpen() ? "flex" : "hidden"}
      flex-col justify-between items-center gap-2
      absolute top-[110%] right-0 z-1 w-100
      py-2 px-1 rounded-2xl
      bg-dark dark:bg-white
      `}>
        <span class="w-100 flex justify-between items-center">
          <Menu class="relative">
            {(menuIsOpen) => (
              <>
              <MenuTrigger class={`${menuIsOpen() && "bg-white dark:bg-dark"} w-full flex items-center rounded-b-none rounded-lg p-0.5`} toggle>
                <Switch>
                  <Match when={lang() == "pt"}>
                    <img class="h-1.75 rounded-sm" src={portuguese} alt="portuguese" loading="lazy"/>
                  </Match>
                  <Match when={lang() == "en"}>
                    <img class="h-1.75 rounded-sm" src={english} alt="english" loading="lazy"/>
                  </Match>
                  <Match when={lang() == "es"}>
                    <img class="h-1.75 rounded-sm" src={spanish} alt="spanish" loading="lazy"/>
                  </Match>
                </Switch>
              </MenuTrigger>
              <MenuContent class={`${menuIsOpen() ? "flex bg-white dark:bg-dark" : "hidden"} absolute left-50 -translate-x-50 top-100 w-max flex-col items-center gap-0.5 rounded-t-none rounded-lg p-0.5`}>
                <button title="Português" onClick={() => setLang("pt")}>
                  <img class="h-1.75 rounded-sm" src={portuguese} alt="portuguese" loading="lazy"/>
                </button>
                <button title="English" onClick={() => setLang("en")}>
                  <img class="h-1.75 rounded-sm" src={english} alt="english" loading="lazy"/>
                </button>
                <button title="Español" onClick={() => setLang("es")}>
                  <img class="h-1.75 rounded-sm" src={spanish} alt="spanish" loading="lazy"/>
                </button>
              </MenuContent>
              </>
            )}
          </Menu>
          <a class="
          flex items-center justify-center
          p-0.375 px-0.75
          dark:rounded-full
          text-3xl
          text-white dark:text-black
          " href="/">
            <Logo class="size-2.5 fill-white dark:fill-black" />
            FutureSphere
          </a>
          <Show
            when={theme() == "light"} fallback={
              <button title="dark" class="inline-block rounded-full dark:text-black" onClick={() => setTheme("light")}>
                <Icon class="inline-block" color="fill-yellow-500  stroke-yellow-500 size-2.5" name="FiMoon"/>
              </button>
            }>
            <button title="light" class="inline-block rounded-full dark:text-black" onClick={() => setTheme("dark")}>
              <Icon class="inline-block" color="fill-yellow-500 stroke-yellow-500 size-2.5" name="FiSun"/>
            </button>
          </Show>
        </span>
        <nav class="flex flex-col justify-center items-center gap-1.25 text-white dark:text-black">
          <A class="text-xl hover:text-purple" activeClass="text-purple" href="/about" end>{t("header.menu.about")}</A>
          <A class="text-xl hover:text-purple" activeClass="text-purple" href="/careers" end>{t("header.menu.careers")}</A>
          <A class="text-xl hover:text-purple" activeClass="text-purple" href="/blogs" end>{t("header.menu.blogs")}</A>
          <A class="text-xl hover:text-purple" activeClass="text-purple" href="/pricing" end>{t("header.menu.pricing")}</A>
          <A class="text-xl hover:text-purple" activeClass="text-purple" href="/contact" end>{t("header.menu.contact")}</A>
        </nav>
        <span class="flex flex-col items-center gap-0.5 w-full">
          <a class="w-full text-center rounded-full px-1.25 py-0.375 text-white bg-purple" href="/login">{t("ui.login")}</a>
          <a class="w-full text-center rounded-full px-1.25 py-0.375 text-black dark:text-white bg-white dark:bg-dark" href="/signup">{t("ui.signup")}</a>
        </span>
      </div>
    </header>
  );
}

export default Header;