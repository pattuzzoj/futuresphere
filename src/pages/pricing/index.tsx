import { useI18n } from "../../i18n";
import { Header, Main, Aside, Footer } from "../../components/layout";
import MetaData from '../../components/meta';
import { Title, Text, Icon } from "../../components/ui";

export default function Pricing() {
  const t = useI18n("pricing");

  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")} />
      <Header />
      <Main>
        <div class="flex flex-col text-center gap-2.5 lg:gap-2.5">
          <div class="flex flex-col text-center gap-1 md:gap-1.25">
            <Title level="1">{t("title")}</Title>
            <Text>{t("text")}</Text>
          </div>
          <div class="flex flex-col items-center gap-2 lg:flex-row lg:gap-1 lg:items-end lg:justify-evenly">
            <div class="flex flex-col gap-1.25 dark:text-white max-w-24 shadow-purple-light shadow-inner p-1.5 rounded-2xl">
              <Title class="" level="3">{t("plans.basic")}</Title>
              <Text class="!text-xl"><span class="text-5xl text-black dark:text-white">$0</span>/{t("plans.period")}</Text>
              <Text class="!text-lg">{t("plans.text")}</Text>
              <button class="self-center w-50 p-0.5 border-2 border-purple rounded-full text-purple hover:text-white hover:bg-purple">{t("plans.button")}</button>
              <ul class="text-start">
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.design")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.seo")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.support")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              </ul>
              <div class="text-start">
                <Title class="text-purple text-base" level="6">{t("plans.features.title")}</Title>
                <ul>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.bandwidth")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.domain")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.certificate")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleXmark" color="fill-gray-600" /> {t("plans.features.support")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleXmark" color="fill-gray-600" /> {t("plans.features.reporting")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleXmark" color="fill-gray-600" /> {t("plans.features.integration")}</li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col gap-1.25 dark:text-white max-w-24 shadow-purple shadow-inner p-1.5 rounded-2xl">
              <Title class="!text-purple" level="5">{t("plans.recommended")}</Title>
              <Title class="" level="3">{t("plans.business")}</Title>
              <Text class="!text-xl"><span class="text-5xl text-purple">$19</span>/{t("plans.period")}</Text>
              <Text class="!text-lg">{t("plans.text")}</Text>
              <button class="self-center w-50 p-0.5 border-2 border-purple rounded-full text-purple hover:text-white hover:bg-purple">{t("plans.button")}</button>
              <ul class="text-start">
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.design")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.seo")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.support")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              </ul>
              <div class="text-start">
                <Title class="text-purple text-base" level="6">{t("plans.features.title")}</Title>
                <ul>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.bandwidth")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.domain")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.certificate")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.support")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.reporting")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleXmark" color="fill-gray-600" /> {t("plans.features.integration")}</li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col gap-1.25 dark:text-white max-w-24 shadow-purple-light shadow-inner p-1.5 rounded-2xl">
              <Title class="" level="3">{t("plans.enterprise")}</Title>
              <Text class="!text-xl"><span class="text-5xl text-black dark:text-white">$29</span>/{t("plans.period")}</Text>
              <Text class="!text-lg">{t("plans.text")}</Text>
              <button class="self-center w-50 p-0.5 border-2 border-purple rounded-full text-purple hover:text-white hover:bg-purple">{t("plans.button")}</button>
              <ul class="text-start">
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.design")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.seo")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
                <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.support")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              </ul>
              <div class="text-start">
                <Title class="text-purple text-base" level="6">{t("plans.features.title")}</Title>
                <ul>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.bandwidth")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.domain")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.certificate")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.support")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.reporting")}</li>
                  <li class="flex items-center gap-0.25"><Icon name="FaSolidCircleCheck" color="fill-purple" /> {t("plans.features.integration")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Aside />
      </Main>
      <Footer />
    </>
  );
}
