import { Icon } from "../../ui";
import { useI18n } from "../../../i18n";
import iconMail from "../../../assets/images/icon-mail.svg";

export default function Aside() {
  const t = useI18n("global.aside");

  return (
    <aside class="flex flex-col items-center justify-center gap-4 rounded-3xl bg-aside bg-cover p-1 py-8 text-center">
      <div class="flex w-100 max-w-2xl flex-col items-center justify-center gap-3">
        <img class="size-4" src={iconMail} alt="" />
        <h2 class="text-5xl text-white">{t("title")}</h2>
        <p class="text-2xl text-white">{t("text")}</p>
        <form action="" class="relative w-100">
          <input
            class="w-100 rounded-2xl bg-white p-1 md:pr-20"
            type="text"
            placeholder={t("email.placeholder")}
          />
          <button
            class="absolute right-50 top-[110%] translate-x-50 md:right-0.125 md:translate-x-0 md:top-50 md:-translate-y-50 w-100 md:w-auto rounded-2xl bg-purple p-[0.8rem] text-white hover:bg-purple-light"
            type="submit"
          >
            {t("email.subscribe")}
          </button>
        </form>
      </div>
    </aside>
  );
}
