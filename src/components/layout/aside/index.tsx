import { useI18n } from "../../../i18n";
import iconMail from "../../../assets/icons/icon-mail.svg";
import { Title, Text } from "../../ui/typography";

export default function Aside() {
  const t = useI18n("global");

  return (
    <aside class="flex justify-center">
      <div class="
      flex flex-col items-center gap-1.5 sm:gap-2 max-w-[60rem] rounded-3xl bg-aside bg-cover
      p-2 sm:p-3 md:p-3.5 lg:p-6 xl:p-7 2xl:p-8">
        <img class="size-4" src={iconMail} alt="" />
        <Title level="2" class="text-white">{t("aside.title")}</Title>
        <Text class="text-2xl text-white">{t("aside.text")}</Text>
        <form class="relative w-100">
          <input
            class="w-100 rounded-2xl p-1 md:pr-20 text-black bg-white"
            type="text"
            placeholder={t("aside.email.placeholder")}
          />
          <button class="
          w-100 rounded-2xl p-1 mt-0.5 text-white bg-purple
          md:w-auto md:mt-0 md:p-0.75 md:absolute md:top-50 md:right-0.25 md:-translate-y-50 
          ">{t("aside.email.subscribe")}</button>
          {/* <button
            class="absolute right-50 top-[110%] translate-x-50 md:right-0.125 md:translate-x-0 md:top-50 md:-translate-y-50 w-100 md:w-auto rounded-2xl bg-purple p-[0.8rem] text-white hover:bg-purple-light"
            type="submit"
          >
            {t("aside.email.subscribe")}
          </button> */}
        </form>
      </div>
    </aside>
  );
}