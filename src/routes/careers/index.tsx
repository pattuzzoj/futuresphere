import { For } from "solid-js";
import { useTranslator } from "~/i18n";
import MetaData from "components/meta";
import Section from "components/layout/section";
import Aside from "components/layout/aside";
import OfficeCard from "components/ui/cards/OfficeCard";
import ContactLink from "components/typography/links/ContactLink";
import SignupLink from "components/typography/links/SignupLink";
import hero from "assets/images/careers_hero.webp";

export default function Careers() {
  const t = useTranslator("careers");
  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}/>
      <Section>
        <h1>{t("title")}</h1>
        <p>{t("text")}</p>
        <img class="self-center aspect-square mt-5" src={hero} alt="" fetchpriority="high"/>
      </Section>
      <Section>
        <div class="flex flex-col md:flex-row items-center text-start gap-1.25">
          <img class="md:size-50 rounded-2xl" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading='lazy' />
          <div class="flex flex-col items-center text-start gap-1.25">
            <span class="self-start text-purple">{t("perks.section")}</span>
            <h2 class="self-start">{t("perks.title")}</h2>
            <p>{t("perks.text")}</p>
          </div>
        </div>
        <br />
        <div class="grid grid-cols-2 gap-3 text-start">
          <For each={t("perks.perks")}>
            {(item, _index) => (
              <div>
                <h6 class="self-start text-purple">{item.title}</h6>
                <br />
                <p>{item.text}</p>
              </div>
            )}
          </For>
        </div>
      </Section>
      <Section>
        <span class="text-purple">{t("offices.section")}</span>
        <h2>{t("offices.title")}</h2>
        <p>{t("offices.text")}</p>
        <div class="grid gap-4 text-start md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-2">
          <For each={t("offices.offices")}>
            {(data, _index) => (
              <OfficeCard
                thumbnail="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                city={data.city}
                text={data.address}
                number={data.number}
              />
            )}
          </For>
        </div>
        <span class="flex justify-center gap-0.75">
          <SignupLink/>
          <ContactLink/>
        </span>
      </Section>
      <Section>
        <span class="text-purple">{t("careers.section")}</span>
        <h2>{t("careers.title")}</h2>
        <p>{t("careers.text")}</p>
        <br />
        <div class="flex justify-around text-start">
          <div class="flex flex-col gap-0.25 w-80 md:w-70 lg:w-100">
            <h5>{t("careers.careers")[0].role}</h5>
            <p>{t("careers.careers")[0].time} -<span class="text-purple"> On Site</span></p>
            <p>{t("careers.careers")[0].description}</p>
          </div>
          <a class="flex items-center justify-center size-2.5 lg:size-3 text-purple text-xl border-2 border-purple hover:bg-purple rounded-full" href=""><span class="text-purple hover:text-white">&gt;</span></a>
        </div>
        <div class="flex justify-around text-start">
          <div class="flex flex-col gap-0.25 w-80 md:w-70 lg:w-100">
            <h5>{t("careers.careers")[1].role}</h5>
            <p>{t("careers.careers")[1].time} -<span class="text-purple"> On Site</span></p>
            <p>{t("careers.careers")[1].description}</p>
          </div>
          <a class="flex items-center justify-center size-2.5 lg:size-3 text-purple text-xl border-2 border-purple hover:bg-purple rounded-full" href=""><span class="text-purple hover:text-white">&gt;</span></a>
        </div>
        <div class="flex justify-around text-start">
          <div class="flex flex-col gap-0.25 w-80 md:w-70 lg:w-100">
            <h5>{t("careers.careers")[2].role}</h5>
            <p>{t("careers.careers")[2].time} -<span class="text-purple"> On Site</span></p>
            <p>{t("careers.careers")[2].description}</p>
          </div>
          <a class="flex items-center justify-center size-2.5 lg:size-3 text-purple text-xl border-2 border-purple hover:bg-purple rounded-full" href=""><span class="text-purple hover:text-white">&gt;</span></a>
        </div>
      </Section>
      <Aside />
    </>
  );
}
