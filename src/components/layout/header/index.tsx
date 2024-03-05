import { createSignal, Show } from "solid-js";
import { A } from "@solidjs/router";
import { Icon } from "../../ui";
import { theme, setTheme } from "../../../theme";
import { useI18n, setLocaleI18n, flag, setFlag, flags } from "../../../i18n";
import Logo from "../../ui/logo";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = createSignal(false);
  const [menuLanguageisOpen, setMenuLanguageIsOpen] = createSignal(false);

  const [_language, setLanguage] = setLocaleI18n();
  const t = useI18n("global");

  return (
    <header class="
    relative
    flex justify-between items-center
    m-1 py-0.5 px-0.75 rounded-full
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
          <span class="relative">
            <span class="flex items-center">
              <button
                class=""
                onClick={() => setMenuLanguageIsOpen(!menuLanguageisOpen())}
              >
                <img class="size-2" src={flag()} alt="" />
              </button>
              <div
                class={`${menuLanguageisOpen() ? "flex" : "hidden"} absolute left-50 -translate-x-50 top-100 w-3 flex-col items-center gap-0 rounded-lg bg-dark p-0.5 dark:bg-white`}
              >
                <button
                  title="Portuguese"
                  onClick={() => {
                    setLanguage("pt");
                    setFlag(flags.pt);
                    setMenuLanguageIsOpen(!menuLanguageisOpen());
                  }}
                >
                  <img class="size-2" src={flags['pt']} alt="" />
                </button>
                <button
                  title="English"
                  onClick={() => {
                    setLanguage("en");
                    setFlag(flags.en);
                    setMenuLanguageIsOpen(!menuLanguageisOpen());
                  }}
                >
                  <img class="size-2" src={flags['en']} alt="" />
                </button>
                <button
                  title="Spanish"
                  onClick={() => {
                    setLanguage("es");
                    setFlag(flags.es);
                    setMenuLanguageIsOpen(!menuLanguageisOpen());
                  }}
                >
                  <img class="size-2" src={flags['es']} alt="" />
                </button>
              </div>
            </span>
          </span>
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
        <button class="md:hidden mr-0.375" onClick={() => setMenuIsOpen(!menuIsOpen())}>
          <Icon name="RiSystemMenu2Line" color="text-white dark:text-purple size-2" />
        </button>
      }>
        <button class="md:hidden mr-0.375" onClick={() => setMenuIsOpen(!menuIsOpen())}>
          <Icon color="text-purple size-2" name="FiX" />
        </button>
      </Show>

      <div class={`
      ${menuIsOpen() ? "block" : "hidden"}
      absolute top-100 right-0 z-1 w-100
      py-2 px-1 rounded-2xl
      bg-white dark:bg-dark
      `}>
        <div class="flex flex-col gap-1">
          <div class="flex flex-col gap-2">
            <span class="w-100 flex justify-between items-center">
              <span class="relative">
                <span class="flex items-center">
                  <button
                    class=""
                    onClick={() => setMenuLanguageIsOpen(!menuLanguageisOpen())}
                  >
                    <img class="size-2.5" src={flag()} alt="" />
                  </button>
                  <div
                    class={`${menuLanguageisOpen() ? "flex" : "hidden"} absolute left-50 -translate-x-50 top-100 w-100 flex-col items-center gap-0 rounded-lg bg-dark p-0.25 dark:bg-white`}
                  >
                    <button
                      title="Portuguese"
                      onClick={() => {
                        setLanguage("pt");
                        setFlag(flags.pt);
                        setMenuLanguageIsOpen(!menuLanguageisOpen());
                      }}
                    >
                      <img class="size-2.5" src={flags['pt']} alt="" />
                    </button>
                    <button
                      title="English"
                      onClick={() => {
                        setLanguage("en");
                        setFlag(flags.en);
                        setMenuLanguageIsOpen(!menuLanguageisOpen());
                      }}
                    >
                      <img class="size-2.5" src={flags['en']} alt="" />
                    </button>
                    <button
                      title="Spanish"
                      onClick={() => {
                        setLanguage("es");
                        setFlag(flags.es);
                        setMenuLanguageIsOpen(!menuLanguageisOpen());
                      }}
                    >
                      <img class="size-2.5" src={flags['es']} alt="" />
                    </button>
                  </div>
                </span>
              </span>
              <a class="
              flex items-center justify-center
              p-0.375 px-0.75
              dark:rounded-full
              text-3xl
              text-black dark:text-white
              " href="/">
                <Logo class="size-2.5 fill-black dark:fill-white" />
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
            <nav class="flex flex-col justify-center items-center gap-1.25 text-black dark:text-white">
              <A class="text-xl hover:text-purple" activeClass="text-purple" href="/about" end>{t("header.menu.about")}</A>
              <A class="text-xl hover:text-purple" activeClass="text-purple" href="/careers" end>{t("header.menu.careers")}</A>
              <A class="text-xl hover:text-purple" activeClass="text-purple" href="/blogs" end>{t("header.menu.blogs")}</A>
              <A class="text-xl hover:text-purple" activeClass="text-purple" href="/pricing" end>{t("header.menu.pricing")}</A>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );

  // return (
  //   <div class="p-1 flex justify-evenly md:p-1.5">
  //     <header class="md:relative flex w-100 items-center justify-between rounded-full bg-dark p-0.5 text-white dark:bg-white dark:text-black">
  //       <a class="flex rounded-full p-0.375 px-1 dark:bg-dark dark:text-white" href="/">
  //         <Logo class="size-1.5 fill-white" />
  //         FutureSphere
  //       </a>
  //       <div>
  //         <button class="mr-1 md:hidden" onClick={() => setMenuIsOpen(!menuIsOpen())}>
  //           <Icon color="text-white dark:text-purple size-1.5" name="RiSystemMenu2Line" />
  //         </button>
  //         <nav class={`${menuIsOpen() ? "flex" : "hidden"} gap-0.5 md:flex md:flex-row max-md:absolute max-md:top-0 max-md:right-0 max-md:flex-col max-md:bg-dark dark:max-md:bg-white dark:text-black`}>
  //           <A class="hover:text-purple" activeClass="text-purple" href="/about" end>{t("header.menu.about")}</A>
  //           <A class="hover:text-purple" activeClass="text-purple" href="/careers" end>{t("header.menu.careers")}</A>
  //           <A class="hover:text-purple" activeClass="text-purple" href="/blogs" end>{t("header.menu.blogs")}</A>
  //           <A class="hover:text-purple" activeClass="text-purple" href="/pricing" end>{t("header.menu.pricing")}</A>
  //           <A class="hover:text-purple md:hidden" activeClass="text-purple" href="/contact" end>{t("header.menu.contact")}</A>
  //         </nav>
  //       </div>
  //       <A class="hidden rounded-full bg-purple p-0.375 px-1.25 text-white md:block hover:bg-purple-light" href="/contact">{t("header.menu.contact")}</A>
  //     </header>
  //     <span class="ml-1 flex w-4 md:w-9 items-center justify-evenly rounded-full md:rounded-full bg-dark dark:bg-white md:ml-1.5 relative">
  //       <span class="flex items-center">
  //         <button
  //           class=""
  //           onClick={() => setMenuLanguageIsOpen(!menuLanguageisOpen())}
  //         >
  //           <img class="size-2" src={flag()} alt="" />
  //         </button>
  //         <div
  //           class={`${menuLanguageisOpen() ? "flex" : "hidden"} absolute left-0.25 md:left-0.875 top-3.5 w-3 flex-col items-center gap-0 rounded-lg bg-dark p-0.5 dark:bg-white`}
  //         >
  //           <button
  //             title="Portuguese"
  //             onClick={() => {
  //               setLanguage("pt");
  //               setFlag(flags.pt);
  //               setMenuLanguageIsOpen(!menuLanguageisOpen());
  //             }}
  //           >
  //             <img class="size-2" src={flags['pt']} alt="" />
  //           </button>
  //           <button
  //             title="English"
  //             onClick={() => {
  //               setLanguage("en");
  //               setFlag(flags.en);
  //               setMenuLanguageIsOpen(!menuLanguageisOpen());
  //             }}
  //           >
  //             <img class="size-2" src={flags['en']} alt="" />
  //           </button>
  //           <button
  //             title="Spanish"
  //             onClick={() => {
  //               setLanguage("es");
  //               setFlag(flags.es);
  //               setMenuLanguageIsOpen(!menuLanguageisOpen());
  //             }}
  //           >
  //             <img class="size-2" src={flags['es']} alt="" />
  //           </button>
  //         </div>
  //       </span>
  //       <Show
  //         when={theme() == "light"} fallback={
  //           <button title="dark" class="hidden md:inline-block rounded-full bg-dark dark:bg-white dark:text-black" onClick={() => setTheme("light")}>
  //             <Icon class="inline-block" color="fill-yellow-500  stroke-yellow-500 size-1.5" name="FiMoon"/>
  //           </button>
  //         }>
  //         <button title="light" class="hidden md:inline-block rounded-full bg-dark dark:bg-white dark:text-black" onClick={() => setTheme("dark")}>
  //           <Icon class="inline-block" color="fill-yellow-500 stroke-yellow-500 size-1.5" name="FiSun"/>
  //         </button>
  //       </Show>
  //     </span>

  //     <div class={`
  //     ${menuIsOpen() ? "flex" : "hidden"}
  //     flex-col gap-2
  //     h-100 w-50 p-1
  //     fixed top-0 right-0 z-2
  //     bg-dark
  //     `}> 
  //       <span class="flex justify-between">
  //         <Show
  //           when={theme() == "light"} fallback={
  //             <button title="dark" class="inline-block rounded-full dark:text-black" onClick={() => setTheme("light")}>
  //               <Icon class="inline-block" color="fill-yellow-500  stroke-yellow-500 size-3" name="FiMoon"/>
  //             </button>
  //           }>
  //           <button title="light" class="inline-block rounded-full dark:text-black" onClick={() => setTheme("dark")}>
  //             <Icon class="inline-block" color="fill-yellow-500 stroke-yellow-500 size-3" name="FiSun"/>
  //           </button>
  //         </Show>

  //         <button class="mr-1 md:hidden" onClick={() => setMenuIsOpen(!menuIsOpen())}>
  //           <Icon color="text-purple size-3" name="FiX" />
  //         </button>
  //       </span>
  //       <a class="flex items-center self-center rounded-full text-white text-4xl" href="/">
  //         <Logo class="size-3 fill-white" />
  //         FutureSphere
  //       </a>
  //       <nav class={`flex flex-col justify-center gap-2 h-100 text-center text-xl`}>
  //         <A class="hover:text-purple" activeClass="text-purple" href="/about" end>{t("header.menu.about")}</A>
  //         <A class="hover:text-purple" activeClass="text-purple" href="/careers" end>{t("header.menu.careers")}</A>
  //         <A class="hover:text-purple" activeClass="text-purple" href="/blogs" end>{t("header.menu.blogs")}</A>
  //         <A class="hover:text-purple" activeClass="text-purple" href="/pricing" end>{t("header.menu.pricing")}</A>
  //         <A class="hover:text-purple md:hidden" activeClass="text-purple" href="/contact" end>{t("header.menu.contact")}</A>
  //       </nav>
  //     </div>
  //   </div>
  // );
}
