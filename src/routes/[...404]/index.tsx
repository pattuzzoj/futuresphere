import { useNavigate } from "@solidjs/router";
import { useTranslator } from "~/i18n";
import MetaData from "components/meta";
import hero from "assets/images/404_hero.svg";

export default function NotFound() {
  const navigate = useNavigate();
  navigate("/404");
  
  const t = useTranslator("notFound");

  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}/>
      <div class="flex flex-col items-center gap-1.5 md:-mt-4">
        <img class="w-100 max-w-5xl" src={hero} alt="" />
        <h2 class="text-purple">{t("text")}</h2>
      </div>
    </>
  );
}
