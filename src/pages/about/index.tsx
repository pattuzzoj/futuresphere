import { For } from 'solid-js';
import { translate, scopedTranslator } from "i18n";
import Page from 'components/layout/page';
import Section from 'components/layout/section';
import Aside from 'components/layout/aside';
import InfoCard from 'components/ui/cards/InfoCard';
import OfficeCard from 'components/ui/cards/OfficeCard';
import SignupLink from 'components/typography/links/SignupLink';
import ContactLink from 'components/typography/links/ContactLink';

export default function About() {
  const t = scopedTranslator(translate, "about");

  return (
    <Page title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}>
      <Section>
        <h1>{t("title")}</h1>
        <p>{t("text")}</p>
        <span class="flex justify-center gap-0.75">
          <SignupLink/>
          <ContactLink/>
        </span>
        <img class="aspect-wide" src="/assets/images/about/hero.svg" alt="" />
      </Section>
      <Section>
        <h6>{t("story.section")}</h6>
        <div class="flex flex-col md:flex-row">
          <p>{t("story.stories")[0].text}</p>
          <img src="" alt="" />
        </div>
        <div class="flex flex-col md:flex-row">
          <img src="" alt="" />
          <p>{t("story.stories")[1].text}</p>
        </div>
      </Section>
      <Section>
        <h6>{t("clients.section")}</h6>
        <h2>{t("clients.title")}</h2>
        <p>{t("clients.text")}</p>
        <div class="flex flex-wrap justify-center gap-4 mt-1.5">
          <span class="flex items-center text-3xl dark:text-white font-bold gap-0.5">
            <img class="size-4" src="/assets/icons/clients/discord.svg" alt="" />
            Discord
          </span>
          <span class="flex items-center text-3xl dark:text-white font-bold gap-0.5">
            <img class="size-4" src="/assets/icons/clients/shopify.svg" alt="" />
            Shopify
          </span>
          <span class="flex items-center text-3xl dark:text-white font-bold gap-0.5">
            <img class="size-4" src="/assets/icons/clients/slack.svg" alt="" />
            Slack
          </span>
          <span class="flex items-center text-3xl dark:text-white font-bold gap-0.5">
            <img class="size-4" src="/assets/icons/clients/google.svg" alt="" />
            Google
          </span>
        </div>
      </Section>
      <Section>
        <h6>{t("values.section")}</h6>
        <h2>{t("values.title")}</h2>
        <p>{t("values.text")}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start gap-3 mt-2">
          <For each={t("values.values")}>
            {(data) => <InfoCard icon={data.icon} title={data.title} text={data.text}/>}
          </For>
        </div>
      </Section>
      <Section>
        <h6>{t("offices.section")}</h6>
        <h2>{t("offices.title")}</h2>
        <p>{t("offices.text")}</p>
        <div class="grid gap-4 text-start md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-2">
          <For each={t("offices.offices")}>
            {(data) => (
              <OfficeCard
                thumbnail={data.thumbnail}
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
        <h6>{t("careers.section")}</h6>
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
    </Page>
  );
}
