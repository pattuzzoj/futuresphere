import { For } from 'solid-js';
import { useI18n } from "../../i18n";
import { Header, Main, Section, Aside, Footer } from "../../components/layout";
import MetaData from '../../components/meta';
import { Title, Text } from "../../components/ui/typography";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
// import Slide from "../../components/ui/widgets/slide";

import hero from "../../assets/images/about/hero.svg";

import icon_1 from "../../assets/images/home/Icon_1.svg";
import icon_2 from "../../assets/images/home/Icon_2.svg";
import icon_3 from "../../assets/images/home/Icon_3.svg";

import discord from "../../assets/icons/clients/discord.svg";
import google from "../../assets/icons/clients/google.svg";
import shopify from "../../assets/icons/clients/shopify.svg";
import slack from "../../assets/icons/clients/slack.svg";

export default function About() {
  const t = useI18n("about");

  const valuesIcons = [icon_1, icon_2, icon_3, icon_1, icon_2, icon_3];
  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")} />
      <Header />
      <Main>
        <Section>
          <Title level={2}>{t("title")}</Title>
          <Text>{t("text")}</Text>
          <span class="flex justify-center gap-1">
            <Button type="signup" />
            <Button type="contact" />
          </span>
          <img src={hero} alt="" />
        </Section>
        <Section>
          <h6 class="text-purple">{t("story.section")}</h6>
          <div class="flex flex-col md:flex-row">
            <Text>{t("story.stories")[0].text}</Text>
            <img src="" alt="" />
          </div>
          <div class="flex flex-col md:flex-row">
            <img src="" alt="" />
            <Text>{t("story.stories")[1].text}</Text>
          </div>
        </Section>
        <Section>
          <h6 class="text-purple">{t("clients.section")}</h6>
          <Title level={2}>{t("clients.title")}</Title>
          <Text>{t("clients.text")}</Text>
          <div class="flex flex-wrap justify-center gap-4 mt-1.5">
            <span class="flex items-center text-3xl dark:text-white font-bold gap-0.5">
              <img class="size-4" src={discord} alt="" />
              Discord
            </span>
            <span class="flex items-center text-3xl dark:text-white font-bold gap-0.5">
              <img class="size-4" src={shopify} alt="" />
              Shopify
            </span>
            <span class="flex items-center text-3xl dark:text-white font-bold gap-0.5">
              <img class="size-4" src={slack} alt="" />
              Slack
            </span>
            <span class="flex items-center text-3xl dark:text-white font-bold gap-0.5">
              <img class="size-4" src={google} alt="" />
              Google
            </span>
          </div>
        </Section>
        <Section>
          <h6 class="text-purple">{t("values.section")}</h6>
          <Title level={2}>{t("values.title")}</Title>
          <Text>{t("values.text")}</Text>
          <div class="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-baseline md:justify-center lg:justify-around mt-2">
            <For each={t("values.values")}>
              {(data, index) => <Card type="info" thumbnail={valuesIcons[index()]} title={data.title} text={data.text}/>}
            </For>
          </div>
        </Section>
        {/* <Section>
          <h6 class="text-purple">{t("team.section")}</h6>
          <Title level={2}>{t("team.title")}</Title>
          <Text>{t("team.text")}</Text>
          <br />
          <Text>{t("")}</Text>
          <span>{t("")}</span>
          <span>{t("")}</span>
          <span>
            <Icon name="" />
            <Icon name="" />
            <Icon name="" />
          </span>
          <Slide></Slide>
        </Section> */}
        <Section>
          <h6 class="text-purple">{t("offices.section")}</h6>
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
            <Button type="signup" />
            <Button type="contact" />
          </span>
        </Section>
        <Section>
          <h6 class="text-purple">{t("careers.section")}</h6>
          <Title level={2}>{t("careers.title")}</Title>
          <Text>{t("careers.text")}</Text>
        </Section>
        <Aside />
      </Main>
      <Footer />
    </>
  );
}
