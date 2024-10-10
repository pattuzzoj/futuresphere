import { For } from "solid-js";
import { useTranslator } from "~/i18n";
import MetaData from "components/meta";
import Aside from 'components/layout/aside';
import InfoCard from "components/ui/cards/InfoCard";

const featureIcons = [
  "/assets/icons/features/feature-1.svg",
  "/assets/icons/features/feature-2.svg",
  "/assets/icons/features/feature-3.svg",
  "/assets/icons/features/feature-4.svg",
  "/assets/icons/features/feature-5.svg",
  "/assets/icons/features/feature-6.svg",
  ];

export default function Contact() {
  const t = useTranslator("features");

  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}/>
      <div class="flex flex-col text-center gap-1 md:gap-1.25 lg:gap-1.5">
        <span class="text-purple">{t("features.section")}</span>
        <h1>{t("features.title")}</h1>
        <p>{t("features.text")}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start gap-3 mt-2">
          <For each={t("features.data")}>
            {(data, index) => <InfoCard icon={featureIcons[index()]} title={data.title} text={data.text}/>}
          </For>
        </div>
      </div>
      <Aside />
    </>
  );
}
