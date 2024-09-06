import { For } from 'solid-js';
import { useTranslator } from "i18n";
import MetaData from "components/meta";
import Section from 'components/layout/section';
import Aside from 'components/layout/aside';
import Slide from "components/widgets/slide";
import BlogCard from 'components/ui/cards/BlogCard';
import DescriptionCard from 'components/ui/cards/DescriptionCard';
import InfoCard from 'components/ui/cards/InfoCard';
import ContactLink from 'components/typography/links/ContactLink';
import SignupLink from 'components/typography/links/SignupLink';
import ViewLink from 'components/typography/links/ViewLink';

export default function Home() {
  const t = useTranslator("home");

  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}/>
      <Section>
        <div>
          <h1>
            {t("title")}
          </h1>
          <br />
          <p class="text-xl">{t("text")}</p>
          <br />
          <div class="flex justify-center gap-0.75">
            <SignupLink/>
            <ContactLink/>
          </div>
        </div>
        <img class="aspect-banner w-100 rounded-full" src="/assets/images/home/hero.svg" alt="" loading="lazy" />
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
        <h6 class="text-purple"><span class="text-purple">{t("features.section")}</span></h6>
        <h2>
          {t("features.title")}
        </h2>
        <p>{t("features.text")}</p>
        <div class="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-baseline md:justify-center lg:justify-around mt-2">
          <For each={t("features.features")}>
            {(data) => <InfoCard icon={data.icon} title={data.title} text={data.text}/>}
          </For>
        </div>
        <span class="flex items-center justify-center gap-1 mt-1.5">
          <ContactLink />
          <ViewLink href="/features" />
        </span>
      </Section>
      <Section>
        <h6 class="text-purple">{t("our mission statement.section")}</h6>
        <div class="flex justify-center">
          <DescriptionCard
            thumbnail="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={t("our mission statement.title")}
            text={t("our mission statement.text")}
          />
        </div>
      </Section>
      <Section>
        <h6 class="text-purple">{t("our clients.section")}</h6>
        <h2>
          {t("our clients.title")}
        </h2>
        <p class="text-2xl">{t("our clients.text")}</p>
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
        <Slide type="item" control="buttons" position="start">
          <div class="grid md:grid-cols-2 gap-1.5 text-start">
            <div class="flex flex-col justify-center gap-1 text-start">
              <h6 class="text-purple">{t("services.section")}</h6>
              <h4>{t("services.services")[0].title}</h4>
              <p>{t("services.services")[0].text}</p>
            </div>
            <img class="size-100 md:h-24 rounded-3xl object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div class="grid md:grid-cols-2 gap-1.5 text-start">
            <div class="flex flex-col justify-center gap-1 text-start">
              <h6 class="text-purple">{t("services.section")}</h6>
              <h4>{t("services.services")[1].title}</h4>
              <p>{t("services.services")[1].text}</p>
            </div>
            <img class="size-100 md:h-24 rounded-3xl object-cover" src="https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0aW5nfGVufDB8fDB8fHww" alt="" />
          </div>
          <div class="grid md:grid-cols-2 gap-1.5 text-start">
            <div class="flex flex-col justify-center gap-1 text-start">
              <h6 class="text-purple">{t("services.section")}</h6>
              <h4>{t("services.services")[2].title}</h4>
              <p>{t("services.services")[2].text}</p>
            </div>
            <img class="size-100 md:h-24 rounded-3xl object-cover" src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvY2Vzc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </Slide>
      </Section>
      <Section>
        <h6 class="text-purple">{t("testimonials.section")}</h6>
        <h2>{t("testimonials.title")}</h2>
        <Slide type="item" control="buttons" position="end">
          <div class="grid md:grid-cols-2 gap-1.5 text-start">
            <img class="size-100 md:h-24 rounded-3xl object-cover" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div class="flex flex-col justify-between gap-1 text-start">
              <p>{t("testimonials.testimonials")[0].text}</p>
              <div>
                <p><span class="text-3xl">{t("testimonials.testimonials")[0].author}</span></p>
                <p><span class="text-2xl">{t("testimonials.testimonials")[0].role}</span></p>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-1.5 text-start">
            <img class="size-100 md:h-24 rounded-3xl object-cover" src="https://images.unsplash.com/photo-1609837644611-47e1d1841299?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxrbDJaRml3WWpJc3x8ZW58MHx8fHx8" alt="" />
            <div class="flex flex-col justify-between gap-1 text-start">
              <p>{t("testimonials.testimonials")[1].text}</p>
              <div>
                <p><span class="text-3xl">{t("testimonials.testimonials")[1].author}</span></p>
                <p><span class="text-2xl">{t("testimonials.testimonials")[1].role}</span></p>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-1.5 text-start">
            <img class="size-100 md:h-24 rounded-3xl object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxNzI0Mzc2fHxlbnwwfHx8fHw%3D" alt="" />
            <div class="flex flex-col justify-between gap-1 text-start">
              <p>{t("testimonials.testimonials")[2].text}</p>
              <div>
                <p><span class="text-3xl">{t("testimonials.testimonials")[2].author}</span></p>
                <p><span class="text-2xl">{t("testimonials.testimonials")[2].role}</span></p>
              </div>
            </div>
          </div>
        </Slide>
      </Section>
      <Section>
        <h6 class="text-purple">{t("blogs.section")}</h6>
        <h2>
          {t("features.title")}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start gap-3 mt-2">
          <For each={t("blogs.blogs")}>
            {(data, _index) => (
              <BlogCard
                thumbnail="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title={data.title}
                text={data.text}
                category={data.category}
              />
            )}
          </For>
        </div>
        <span class="flex items-center justify-center gap-1 mt-1.5">
          <ContactLink />
          <ViewLink href="/blogs" />
        </span>
      </Section>
      <Aside />
    </>
  );
}
