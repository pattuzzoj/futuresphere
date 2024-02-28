import { For } from 'solid-js';
import { useI18n } from "../../i18n";
import { Header, Main, Section, Aside, Footer } from "../../components/layout";
import MetaData from '../../components/meta';
import { Title, Text } from "../../components/ui/typography";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import Slide from "../../components/ui/widgets/slide";

import hero from "../../assets/images/home/hero.svg";
import icon_1 from "../../assets/images/home/Icon_1.svg";
import icon_2 from "../../assets/images/home/Icon_2.svg";
import icon_3 from "../../assets/images/home/Icon_3.svg";

import discord from "../../assets/icons/clients/discord.svg";
import google from "../../assets/icons/clients/google.svg";
import shopify from "../../assets/icons/clients/shopify.svg";
import slack from "../../assets/icons/clients/slack.svg";

export default function Home() {
  const t = useI18n("home");

  const featureIcons = [icon_1, icon_2, icon_3];
  const servicesImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0aW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvY2Vzc3xlbnwwfHwwfHx8MA%3D%3D"
  ];
  const testimonialsImages = [
    "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1609837644611-47e1d1841299?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxrbDJaRml3WWpJc3x8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxNzI0Mzc2fHxlbnwwfHx8fHw%3D"
  ];

  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")} />
      <Header />
      <Main class="gap-5 md:gap-6 lg:gap-8">
        <Section>
          <Title level="1" class="text-center">
            {t("title")}
          </Title>
          <Text class="text-2xl">{t("text")}</Text>
          <span class="flex justify-center gap-1">
            <Button type="signup" />
            <Button type="contact" />
          </span>
          <img class="w-100 rounded-full my-3" src={hero} alt="" loading="lazy" />
          <div class="flex flex-col justify-evenly gap-1 md:flex-row">
            <For each={t("stats")}>
              {(data, _index) => (
                <p class="text-lg text-purple">
                  <span class="text-5xl">{data.stats}</span>
                  <br />
                  {data.text}
                </p>
              )}
            </For>
          </div>
        </Section>
        <Section>
          <h6 class="text-purple">{t("features.section")}</h6>
          <Title class="" level="2">
            {t("features.title")}
          </Title>
          <Text>{t("features.text")}</Text>
          <div class="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-baseline md:justify-center lg:justify-around mt-2">
            <For each={t("features.features")}>
              {(data, index) => <Card type="info" thumbnail={featureIcons[index()]} title={data.title} text={data.text}/>}
            </For>
          </div>
        </Section>
        <Section>
          <h6 class="text-purple">{t("our mission statement.section")}</h6>
          <div class="flex justify-center">
            <Card
              type="description"
              thumbnail="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title={t("our mission statement.title")}
              text={t("our mission statement.text")}
            />
          </div>
        </Section>
        <Section>
          <h6 class="text-purple">{t("our clients.section")}</h6>
          <Title class="" level="2">
            {t("our clients.title")}
          </Title>
          <Text class="text-2xl">{t("our clients.text")}</Text>
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
          <Slide type="slideItem" control="buttons" position="start">
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <div class="flex flex-col justify-center gap-1 text-start">
                <h6 class="text-purple">{t("services.section")}</h6>
                <Title class="!text-purple" level={3}>{t("services.services")[0].title}</Title>
                <Text>{t("services.services")[0].text}</Text>
              </div>
              <img class="size-100 md:h-24 rounded-3xl object-cover" src={servicesImages[0]} alt="" />
            </div>
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <div class="flex flex-col justify-center gap-1 text-start">
                <h6 class="text-purple">{t("services.section")}</h6>
                <Title class="!text-purple" level={3}>{t("services.services")[1].title}</Title>
                <Text>{t("services.services")[1].text}</Text>
              </div>
              <img class="size-100 md:h-24 rounded-3xl object-cover" src={servicesImages[1]} alt="" />
            </div>
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <div class="flex flex-col justify-center gap-1 text-start">
                <h6 class="text-purple">{t("services.section")}</h6>
                <Title class="!text-purple" level={3}>{t("services.services")[2].title}</Title>
                <Text>{t("services.services")[2].text}</Text>
              </div>
              <img class="size-100 md:h-24 rounded-3xl object-cover" src={servicesImages[2]} alt="" />
            </div>
          </Slide>
        </Section>
        <Section>
          <h6 class="text-purple">{t("testimonials.section")}</h6>
          <Title level="2">{t("testimonials.title")}</Title>
          <Slide type="slideItem" control="buttons" position="end">
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <img class="size-100 md:h-24 rounded-3xl object-cover" src={testimonialsImages[0]} alt="" />
              <div class="flex flex-col justify-between gap-1 text-start">
                <Text>{t("testimonials.testimonials")[0].text}</Text>
                <div>
                  <Text><span class="text-3xl">{t("testimonials.testimonials")[0].author}</span></Text>
                  <Text><span class="text-2xl">{t("testimonials.testimonials")[0].role}</span></Text>
                </div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <img class="size-100 md:h-24 rounded-3xl object-cover" src={testimonialsImages[1]} alt="" />
              <div class="flex flex-col justify-between gap-1 text-start">
                <Text>{t("testimonials.testimonials")[1].text}</Text>
                <div>
                  <Text><span class="text-3xl">{t("testimonials.testimonials")[1].author}</span></Text>
                  <Text><span class="text-2xl">{t("testimonials.testimonials")[1].role}</span></Text>
                </div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <img class="size-100 md:h-24 rounded-3xl object-cover" src={testimonialsImages[2]} alt="" />
              <div class="flex flex-col justify-between gap-1 text-start">
                <Text>{t("testimonials.testimonials")[2].text}</Text>
                <div>
                  <Text><span class="text-3xl">{t("testimonials.testimonials")[2].author}</span></Text>
                  <Text><span class="text-2xl">{t("testimonials.testimonials")[2].role}</span></Text>
                </div>
              </div>
            </div>
          </Slide>
        </Section>
        <Section>
          <h6 class="text-purple">{t("blogs.section")}</h6>
          <Title class="" level="2">
            {t("features.title")}
          </Title>
          <div class="grid gap-4 text-start md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-2">
            <For each={t("blogs.blogs")}>
              {(data, _index) => (
                <Card
                  type="blog"
                  thumbnail="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title={data.title}
                  text={data.text}
                  category={data.category}
                />
              )}
            </For>
          </div>
          <span class="flex items-center justify-center gap-1 mt-1.5">
            <Button type="contact" />
            <a class="text-purple-light" href="">
              View All &gt;
            </a>
          </span>
        </Section>
        <Aside />
      </Main>
      <Footer />
    </>
  );
}
