import { For } from "solid-js";
import { useI18n } from "../../i18n";
import { Header, Main, Aside, Footer } from "../../components/layout";
import MetaData from '../../components/meta';
import { Title, Text, Card } from "../../components/ui";

import icon_1 from "../../assets/icons/features/icon-1.svg";
import icon_2 from "../../assets/icons/features/icon-2.svg";
import icon_3 from "../../assets/icons/features/icon-3.svg";
import icon_4 from "../../assets/icons/features/icon-4.svg";
import icon_5 from "../../assets/icons/features/icon-5.svg";
import icon_6 from "../../assets/icons/features/icon-6.svg";

const featureIcons = [icon_1, icon_2, icon_3, icon_4, icon_5, icon_6];

export default function Contact() {
  const t = useI18n("features");

  return (
    <>
    <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")} />
    <Header />
    <Main>
      <div class="flex flex-col text-center gap-1 md:gap-1.25 lg:gap-1.5">
        <h6 class="text-purple">{t("features.section")}</h6>
        <Title level="1">{t("features.title")}</Title>
        <Text>{t("features.text")}</Text>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start gap-3 mt-2">
          <For each={t("features.data")}>
            {(data, index) => <Card type="info" thumbnail={featureIcons[index()]} title={data.title} text={data.text}/>}
          </For>
        </div>
      </div>
      <Aside />
    </Main>
    <Footer />
    </>
  );
}
