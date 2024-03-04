import { For } from 'solid-js';
import { useI18n } from "../../i18n";
import { Header, Main, Section, Aside, Footer } from "../../components/layout";
import MetaData from '../../components/meta';
import { Title, Text, Link, Card } from "../../components/ui";

import hero from "../../assets/images/about/hero.svg";

import value_1 from "../../assets/icons/values/value-1.svg";
import value_2 from "../../assets/icons/values/value-2.svg";
import value_3 from "../../assets/icons/values/value-3.svg";
import value_4 from "../../assets/icons/values/value-4.svg";
import value_5 from "../../assets/icons/values/value-5.svg";
import value_6 from "../../assets/icons/values/value-6.svg";

import discord from "../../assets/icons/clients/discord.svg";
import google from "../../assets/icons/clients/google.svg";
import shopify from "../../assets/icons/clients/shopify.svg";
import slack from "../../assets/icons/clients/slack.svg";

import san_francisco from "../../assets/images/san_francisco.svg";
import new_mexico from "../../assets/images/new_mexico.svg";
import london from "../../assets/images/london.svg";

export default function About() {
  const t = useI18n("about");

  const valuesIcons = [value_1, value_2, value_3, value_4, value_5, value_6];
  const officesImages = [san_francisco, new_mexico, london];
  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")} />
      <Header />
      <Main>
        <Section>
          <Title level="1">{t("title")}</Title>
          <Text>{t("text")}</Text>
          <span class="flex justify-center gap-1">
            <Link type="signup" />
            <Link type="contact" />
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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start gap-3 mt-2">
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
          <Slide type="list" control="buttons" data={t("team.team")} initialValue={2}>
            <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFub3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFub3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFub3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFub3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFub3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </Slide>
          <div class="w-100 flex justify-center">
            <a class="hover:bg-dark cursor-pointer rounded-full p-0.5 flex items-center justify-center" href="">
              <Icon
                color="fill-purple"
                name="BsTwitter"
              />
            </a>
            <a class="hover:bg-dark cursor-pointer rounded-full p-0.5 flex items-center justify-center" href="">
              <Icon
                color="fill-purple"
                name="BsFacebook"
              />
            </a>
            <a class="hover:bg-dark cursor-pointer rounded-full p-0.5 flex items-center justify-center" href="">
              <Icon
                color="fill-purple"
                name="BsLinkedin"
              />
            </a>
          </div>
        </Section> */}
        <Section>
          <h6 class="text-purple">{t("offices.section")}</h6>
          <Title level={2}>{t("offices.title")}</Title>
          <Text>{t("offices.text")}</Text>
          <div class="grid gap-4 text-start md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-2">
            <For each={t("offices.offices")}>
              {(data, index) => (
                <Card
                  type="office"
                  thumbnail={officesImages[index()]}
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
          <h6 class="text-purple">{t("careers.section")}</h6>
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
