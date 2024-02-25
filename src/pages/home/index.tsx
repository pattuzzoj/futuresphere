import { useI18n } from "../../i18n";
import { Aside, Header, Footer, Main, Section } from "../../components/layout";
import { Title, Text } from '../../components/ui/typography';
import { Signup, ContactUs } from '../../components/ui/buttons';
import Card from '../../components/ui/card';
import Slide from '../../components/ui/widgets/slide';

import hero from '../../assets/images/home/hero.svg';
// import service from '../../assets/images/home/Image.svg';
// import testimonial from '../../assets/images/home/Client Image.svg';
// import mission from '../../assets/images/home/mission.svg';
// import blog from '../../assets/images/home/blog.svg';
import icon_1 from '../../assets/images/home//Icon_1.svg';
import icon_2 from '../../assets/images/home//Icon_2.svg';
import icon_3 from '../../assets/images/home//Icon_3.svg';

import descript from '../../assets/icons/descript.svg';
import shopify from '../../assets/icons/shopify.svg';
import slack from '../../assets/icons/slack.svg';
import elastic from '../../assets/icons/elastic.svg';
import loom from '../../assets/icons/loom.svg';

export default function Home() {
  const t = useI18n("home");

  return (
    <>
      <Header />
      <Main class="gap-8">
        <Section class="gap-2">
          <Title level="1" class="text-center">{t('title')}</Title>
          <Text class="text-2xl">{t('text')}</Text>
          <span class="flex justify-center gap-1">
            <Signup />
            <ContactUs />
          </span>
          <img class="rounded-full w-100" src={hero} alt="" loading='lazy'/>
          <div class="flex flex-col md:flex-row justify-evenly gap-1">
            <p class="text-purple text-lg">
              <span class="text-5xl">{t('stats.1.stats')}</span>
              <br />
              {t('stats.1.text')}
            </p>
            <p class="text-purple text-lg">
              <span class="text-5xl">{t('stats.2.stats')}</span>
              <br />
              {t('stats.2.text')}
            </p>
            <p class="text-purple text-lg">
              <span class="text-5xl">{t('stats.3.stats')}</span>
              <br />
              {t('stats.3.text')}
            </p>
          </div>
        </Section>
        <Section class="gap-2">
          <h6 class="text-purple">{t("features.section")}</h6>
          <Title class="" level="2">{t("features.title")}</Title>
          <Text>{t("features.text")}</Text>
          <br />
          <div class="flex flex-col items-center md:items-baseline md:flex-row md:flex-wrap md:justify-center lg:justify-around gap-3">
            <Card 
            type='info' 
            thumbnail={icon_1} 
            title={t('features.features.1.title')} 
            text={t('features.features.1.text')} />
            <Card 
            type='info' 
            thumbnail={icon_2} 
            title={t('features.features.2.title')} 
            text={t('features.features.2.text')} />
            <Card 
            type='info' 
            thumbnail={icon_3} 
            title={t('features.features.3.title')} 
            text={t('features.features.3.text')} />
          </div>
        </Section>
        <Section class="gap-2">
          <h6 class="text-purple">{t("our mission statement.section")}</h6>
          <div class="flex justify-center">
            <Card 
              type='description' 
              thumbnail='https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
              title={t('our mission statement.title')} 
              text={t('our mission statement.text')}/>
          </div>
        </Section>
        <Section class="gap-2">
          <h6 class="text-purple">{t("our clients.section")}</h6>
          <Title class="" level="2">{t("our clients.title")}</Title>
          <Text class="text-2xl">{t("our clients.text")}</Text>
          <div class="flex flex-wrap justify-center gap-4">
            <img src={descript} alt="" />
            <img src={shopify} alt="" />
            <img src={slack} alt="" />
            <img src={elastic} alt="" />
            <img src={loom} alt="" />
          </div>
        </Section>
        <Section class="gap-3">
          <div>
            <h6 class="text-purple">{t("testimonials.section")}</h6>
            <Title level="2">{t("testimonials.title")}</Title>
          </div>
          <Slide type="slideItem" control='buttons'>
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <img class="h-100 md:h-24 w-100 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div class="flex flex-col justify-between text-start gap-1">
                <Text class="text-xl">{t("testimonials.testimonials.1.text")}</Text>
                <div>
                  <Text><span class="text-3xl">{t("testimonials.testimonials.1.author")}</span></Text>
                  <Text><span class="text-2xl">{t("testimonials.testimonials.1.role")}</span></Text>
                </div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <img class="h-100 md:h-24 w-100 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div class="flex flex-col justify-between text-start gap-1">
                <Text class="text-xl">{t("testimonials.testimonials.2.text")}</Text>
                <div>
                  <Text><span class="text-3xl">{t("testimonials.testimonials.2.author")}</span></Text>
                  <Text><span class="text-2xl">{t("testimonials.testimonials.2.role")}</span></Text>
                </div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-1.5 text-start">
              <img class="h-100 md:h-24 w-100 object-cover rounded-3xl" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWFufGVufDB8fDB8fHww" alt="" />
              <div class="flex flex-col justify-between text-start gap-1">
                <Text class="text-xl">{t("testimonials.testimonials.3.text")}</Text>
                <div>
                  <Text><span class="text-3xl">{t("testimonials.testimonials.3.author")}</span></Text>
                  <Text><span class="text-2xl">{t("testimonials.testimonials.3.role")}</span></Text>
                </div>
              </div>
            </div>
          </Slide>
        </Section>
        <Section class="gap-2">
          <h6 class="text-purple">{t("blogs.section")}</h6>
          <Title class="" level="2">{t("features.title")}</Title>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-3 lg:gap-2 text-start">
            <Card 
            type='blog' 
            thumbnail='https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            title={t('blogs.blogs.1.title')} 
            text={t('blogs.blogs.1.text')} 
            category={t('blogs.blogs.1.category')}/>
            <Card 
            type='blog' 
            thumbnail='https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            title={t('blogs.blogs.2.title')} 
            text={t('blogs.blogs.2.text')} 
            category={t('blogs.blogs.2.category')}/>
            <Card 
            type='blog' 
            thumbnail='https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            title={t('blogs.blogs.3.title')} 
            text={t('blogs.blogs.3.text')} 
            category={t('blogs.blogs.3.category')}/>
            <Card 
            type='blog' 
            thumbnail='https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            title={t('blogs.blogs.3.title')} 
            text={t('blogs.blogs.3.text')} 
            category={t('blogs.blogs.3.category')}/>
          </div>
          <div class="flex justify-center items-center gap-1">
            <ContactUs/>
            <a class="text-purple-light" href="">View All &gt;</a>
          </div>
        </Section>
        <Aside />
      </Main>
      <Footer />
    </>
  );
}
