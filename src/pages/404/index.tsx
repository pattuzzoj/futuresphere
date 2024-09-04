import { useNavigate } from "@solidjs/router";
import { translate, scopedTranslator } from "i18n";
import Page from "components/layout/page";

export default function NotFound() {
  const navigate = useNavigate();
  navigate("/404");
  
  const t = scopedTranslator(translate, "notFound");

  return (
    <Page title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}>
      <div class="flex flex-col items-center gap-1.5 md:-mt-4">
        <img class="w-100 max-w-5xl" src="src/assets/images/404/404.svg" alt="" />
        <h2 class="text-purple">{t("text")}</h2>
      </div>
    </Page>
  );
}
