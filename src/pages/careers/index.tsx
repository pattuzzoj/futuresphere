import { For } from "solid-js";
import { useI18n } from "../../i18n";
import { Header, Main, Section, Aside, Footer } from "../../components/layout";
import MetaData from '../../components/meta';
import { Title, Text, Link, Card } from "../../components/ui";
import hero from '../../assets/images/careers/hero.svg';

export default function Careers() {
  const t = useI18n("careers");

  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")} />
      <Header />
      <Main>
        <Section>
          <Title level="1">{t("title")}</Title>
          <Text>{t("text")}</Text>
          <img class="mt-5" src={hero} alt="" />
        </Section>
        <Section>
          <div class="flex flex-col md:flex-row items-center text-start gap-1.25">
            <img class="md:size-50 rounded-2xl" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading='lazy' />
            <div class="flex flex-col items-center text-start gap-1.25">
              <Title level="6" class="self-start text-purple">{t("perks.section")}</Title>
              <Title level="2" class="self-start">{t("perks.title")}</Title>
              <Text>{t("perks.text")}</Text>
            </div>
          </div>
          <br />
          <div class="grid grid-cols-2 gap-3 text-start">
            <For each={t("perks.perks")}>
              {(item, _index) => (
                <div>
                  <Title level="6" class="self-start text-purple">{item.title}</Title>
                  <br />
                  <Text>{item.text}</Text>
                </div>
              )}
            </For>
          </div>
        </Section>
        <Section>
          <Title level="6" class="text-purple">{t("offices.section")}</Title>
          <Title level={2}>{t("offices.title")}</Title>
          <Text>{t("offices.text")}</Text>
          <div class="grid gap-4 text-start md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-2">
            <For each={t("offices.offices")}>
              {(data, _index) => (
                <Card
                  type="office"
                  thumbnail="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  city={data.city}
                  text={data.address}
                  number={data.number}
                />
              )}
            </For>
          </div>
          <span class="flex justify-center gap-1">
            <Link type="signup" />
            <Link type="contact" />
          </span>
        </Section>
        <Section>
          <Title level="6" class="text-purple">{t("careers.section")}</Title>
          <Title level={2}>{t("careers.title")}</Title>
          <Text>{t("careers.text")}</Text>
          <br />
          <div class="flex justify-around text-start">
            <div class="flex flex-col gap-0.25 w-80 md:w-70 lg:w-100">
              <Title level={5}>{t("careers.careers")[0].role}</Title>
              <Text>{t("careers.careers")[0].time} -<span class="text-purple"> On Site</span></Text>
              <Text>{t("careers.careers")[0].description}</Text>
            </div>
            <a class="flex items-center justify-center size-2.5 lg:size-3 text-purple text-xl border-2 border-purple hover:bg-purple rounded-full" href=""><span class="text-purple hover:text-white">&gt;</span></a>
          </div>
          <div class="flex justify-around text-start">
            <div class="flex flex-col gap-0.25 w-80 md:w-70 lg:w-100">
              <Title level={5}>{t("careers.careers")[1].role}</Title>
              <Text>{t("careers.careers")[1].time} -<span class="text-purple"> On Site</span></Text>
              <Text>{t("careers.careers")[1].description}</Text>
            </div>
            <a class="flex items-center justify-center size-2.5 lg:size-3 text-purple text-xl border-2 border-purple hover:bg-purple rounded-full" href=""><span class="text-purple hover:text-white">&gt;</span></a>
          </div>
          <div class="flex justify-around text-start">
            <div class="flex flex-col gap-0.25 w-80 md:w-70 lg:w-100">
              <Title level={5}>{t("careers.careers")[2].role}</Title>
              <Text>{t("careers.careers")[2].time} -<span class="text-purple"> On Site</span></Text>
              <Text>{t("careers.careers")[2].description}</Text>
            </div>
            <a class="flex items-center justify-center size-2.5 lg:size-3 text-purple text-xl border-2 border-purple hover:bg-purple rounded-full" href=""><span class="text-purple hover:text-white">&gt;</span></a>
          </div>
        </Section>
        <Aside />
      </Main>
      <Footer />
    </>
  );
}
