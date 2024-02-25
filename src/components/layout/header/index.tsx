import { createSignal, Show } from "solid-js";
import { A } from "@solidjs/router";
import { Icon } from "../../ui";
import {theme, setTheme} from "../../../theme";
import { useI18n, setLocaleI18n, flag, setFlag, flags } from "../../../i18n";
import Logo from "../../ui/logo";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = createSignal(false);
  const [menuLanguageisOpen, setMenuLanguageIsOpen] = createSignal(false);

  const [_language, setLanguage] = setLocaleI18n();
  const t = useI18n("global");

  return (
    <div class="m-1 flex justify-evenly md:m-1.5">
      <header class="relative flex w-100 items-center justify-between rounded-full bg-dark p-0.5 text-white dark:bg-white dark:text-black">
        <a
          class="flex rounded-full p-0.375 px-1 dark:bg-dark dark:text-white"
          href="/"
        >
          <Logo class="size-1.5 fill-white" />
          FutureSphere
        </a>
        <div>
          <button
            class="mr-1 md:hidden"
            onClick={() => setMenuIsOpen(!menuIsOpen())}
          >
            <Icon
              color="text-white dark:text-purple size-1.5"
              name="RiSystemMenu2Line"
            />
          </button>
          <nav
            class={`${menuIsOpen() ? "flex" : "hidden"} gap-0.5 max-[768px]:absolute max-[768px]:right-0 max-[768px]:top-3.5 max-[768px]:w-7 max-[768px]:flex-col max-[768px]:rounded-xl max-[768px]:bg-dark max-[768px]:p-0.5 max-[768px]:text-center max-[768px]:dark:bg-white md:static md:flex md:flex-row`}
          >
            <A
              class="hover:text-purple"
              activeClass="text-purple"
              href="/about"
              end
            >
              {t("header.menu.about")}
            </A>
            <A
              class="hover:text-purple"
              activeClass="text-purple"
              href="/careers"
              end
            >
              {t("header.menu.careers")}
            </A>
            <A
              class="hover:text-purple"
              activeClass="text-purple"
              href="/blogs"
              end={true}
            >
              {t("header.menu.blogs")}
            </A>
            <A
              class="hover:text-purple"
              activeClass="text-purple"
              href="/pricing"
              end
            >
              {t("header.menu.pricing")}
            </A>
            <A
              class="hover:text-purple md:hidden"
              activeClass="text-purple"
              href="/contact"
              end
            >
              {t("header.menu.contact")}
            </A>
          </nav>
        </div>
        <A
          class="hidden rounded-full bg-purple p-0.375 px-1.25 text-white md:block hover:bg-purple-light"
          href="/contact"
        >
          {t("header.menu.contact")}
        </A>
      </header>
      <span class="ml-1 flex w-9 items-center justify-evenly rounded-full bg-dark dark:bg-white md:ml-1.5 relative">
        <span class="flex items-center">
          <button
            class=""
            onClick={() => setMenuLanguageIsOpen(!menuLanguageisOpen())}
          >
            <img class="size-2" src={flag()} alt="" />
          </button>
          <div
            class={`${menuLanguageisOpen() ? "flex" : "hidden"} absolute left-0.875 top-3.5 w-3 flex-col items-center gap-0 rounded-lg bg-dark p-0.5 dark:bg-white`}
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
        <Show
          when={theme() == "light"}
          fallback={
            <button
              title="dark"
              class="inline-block rounded-full bg-dark dark:bg-white dark:text-black"
              onClick={() => setTheme("light")}
            >
              <Icon
                class="inline-block"
                color="fill-yellow-500  stroke-yellow-500 size-1.5"
                name="FiMoon"
              />
            </button>
          }
        >
          <button
            title="light"
            class="inline-block rounded-full bg-dark dark:bg-white dark:text-black"
            onClick={() => setTheme("dark")}
          >
            <Icon
              class="inline-block"
              color="fill-yellow-500 stroke-yellow-500 size-1.5"
              name="FiSun"
            />
          </button>
        </Show>
      </span>
    </div>
  );
}
