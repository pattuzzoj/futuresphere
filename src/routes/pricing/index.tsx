import { useTranslator } from "~/i18n";
import MetaData from "components/meta";
import Aside from 'components/layout/aside';
import Icon from "components/ui/icon";

export default function Pricing() {
  const t = useTranslator("pricing");

  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}/>
      <div class="flex flex-col text-center gap-2.5 lg:gap-2.5">
        <div class="flex flex-col text-center gap-1 md:gap-1.25">
          <h1>{t("title")}</h1>
          <p>{t("text")}</p>
        </div>
        <div class="flex flex-col items-center gap-2 lg:flex-row lg:gap-1 lg:items-end lg:justify-evenly">
          <div class="flex flex-col gap-1.25 dark:text-white max-w-24 shadow-purple-light shadow-inner p-1.5 rounded-2xl">
            <h3>{t("plans.basic")}</h3>
            <p class="!text-xl"><span class="text-5xl text-black dark:text-white">$0</span>/{t("plans.period")}</p>
            <p class="!text-lg">{t("plans.text")}</p>
            <button class="self-center w-50 p-0.5 border-2 border-purple rounded-full text-purple hover:text-white hover:bg-purple">{t("plans.button")}</button>
            <ul class="text-start">
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.design")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.seo")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.support")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
            </ul>
            <div class="text-start">
              <h6 class="text-purple text-base">{t("plans.features.title")}</h6>
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
            <span class="!text-purple">{t("plans.recommended")}</span>
            <h3>{t("plans.business")}</h3>
            <p class="!text-xl"><span class="text-5xl text-purple">$19</span>/{t("plans.period")}</p>
            <p class="!text-lg">{t("plans.text")}</p>
            <button class="self-center w-50 p-0.5 border-2 border-purple rounded-full text-purple hover:text-white hover:bg-purple">{t("plans.button")}</button>
            <ul class="text-start">
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.design")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.seo")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.support")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
            </ul>
            <div class="text-start">
              <h6 class="text-purple text-base">{t("plans.features.title")}</h6>
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
            <h3>{t("plans.enterprise")}</h3>
            <p class="!text-xl"><span class="text-5xl text-black dark:text-white">$29</span>/{t("plans.period")}</p>
            <p class="!text-lg">{t("plans.text")}</p>
            <button class="self-center w-50 p-0.5 border-2 border-purple rounded-full text-purple hover:text-white hover:bg-purple">{t("plans.button")}</button>
            <ul class="text-start">
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.design")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.seo")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
              <li class="flex justify-between items-center gap-0.25">{t("plans.infrastructure.support")} <Icon name="FaSolidCircleCheck" color="fill-purple" /></li>
            </ul>
            <div class="text-start">
              <h6 class="text-purple text-base">{t("plans.features.title")}</h6>
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
    </>
  );
}
