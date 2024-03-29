import { For } from "solid-js";
import { useI18n } from "../../i18n";
import { Header, Main, Section, Aside, Footer } from "../../components/layout";
import MetaData from '../../components/meta';
import { Title, Text, Card } from "../../components/ui";
import { createForm, email, minLength, required, pattern } from '@modular-forms/solid';
import Input from '../../components/form/input';

import hero from '../../assets/images/contact/hero.svg';
import sales from '../../assets/icons/contact/sales.svg';
import partners from '../../assets/icons/contact/partners.svg';
import support from '../../assets/icons/contact/support.svg';

import san_francisco from "../../assets/images/san_francisco.svg";
import new_mexico from "../../assets/images/new_mexico.svg";
import london from "../../assets/images/london.svg";

export default function Contact() {
  const t = useI18n("contact");

  type contactForm = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    services: {
      development: boolean;
      design: boolean;
      seo: boolean;
      marketing: boolean;
      consulting: boolean;
    };
    message: string;
    terms: boolean;
  }

  const [contactForm, {Form, Field}] = createForm<contactForm>({
    revalidateOn: "input"
  });

  const officesImages = [san_francisco, new_mexico, london];

  return (
    <>
    <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")} />
    <Header />
    <Main>
      <Section>
        <Title level="1">{t("title")}</Title>
        <Text>{t("text")}</Text>
        <br />
        <br />
        <div class="lg:flex lg:justify-center gap-8">
          <div class="flex flex-col gap-5">
            <div>
              <Form class="flex-grow flex flex-col gap-2.5" onSubmit={() => {}}>
                <div class="grid place-items-stretch md:grid-cols-2 gap-2.5">
                  <Field
                  name="firstName"
                  validate={[
                    required("required"),
                    pattern(/^[\S]+$/, " ")
                  ]}>
                    {(field, props) => (
                      <Input {...props} id="firstName" type="text" placeholder={t("form.first name.text")}>
                        {field.error &&
                        <span class="absolute top-100 left-0 text-sm text-red-600">{field.error == "required" ? t("form.first name.required") : t("form.first name.error")}</span>}
                      </Input>
                    )}
                  </Field>
                  <Field 
                  name="lastName"
                  validate={[
                    required("required"),
                    pattern(/^[\S]+$/, " ")
                  ]}
                  >
                    {(field, props) => (
                      <Input {...props} id="firstName" type="text" placeholder={t("form.last name.text")}>
                        {field.error &&
                        <span class="absolute top-100 left-0 text-sm text-red-600">{field.error == "required" ? t("form.last name.required") : t("form.last name.error")}</span>}
                      </Input>
                    )}
                  </Field>
                  <Field
                  name="email"
                  validate={[
                    required("required"),
                    email(" ")
                  ]}
                  >
                    {(field, props) => (
                      <Input {...props} id="firstName" type="email" placeholder={t("form.email.text")}>
                        {field.error &&
                        <span class="absolute top-100 left-0 text-sm text-red-600">{field.error == "required" ? t("form.email.required") : t("form.email.error")}</span>}
                      </Input>
                    )}
                  </Field>
                  <Field 
                  name="subject"
                  validate={[
                    required("required"),
                    minLength(5, " ")
                  ]}
                  >
                    {(field, props) => (
                      <Input {...props} id="firstName" type="text" placeholder={t("form.subject.text")}>
                        {field.error &&
                        <span class="absolute top-100 left-0 text-sm text-red-600">{field.error == "required" ? t("form.subject.required") : t("form.subject.error")}</span>}
                      </Input>
                    )}
                  </Field>
                </div>
                <div>
                  <Text class="text-start mb-1"><span class="text-sm">{t("form.services.text")}</span></Text>
                  <div class="flex gap-0.75">
                    <Field
                    name="services.development"
                    type="boolean"
                    >
                      {(_field, props) => (
                      <div class="relative">
                        <label class="p-0.5 rounded-full dark:text-white has-[:checked]:bg-purple-light hover:cursor-pointer has-[:checked]:text-white">
                          <input {...props} type="checkbox" class="checked:accent-purple hidden" required/>
                          {t("form.services.development")}
                        </label>
                      </div>
                      )}
                    </Field>
                    <Field
                    name="services.design"
                    type="boolean"
                    >
                      {(_field, props) => (
                      <div class="relative">
                        <label class="p-0.5 rounded-full dark:text-white has-[:checked]:bg-purple-light hover:cursor-pointer has-[:checked]:text-white">
                          <input {...props} type="checkbox" class="checked:accent-purple hidden" required/>
                          {t("form.services.design")}
                        </label>
                      </div>
                      )}
                    </Field>
                    <Field
                    name="services.seo"
                    type="boolean"
                    >
                      {(_field, props) => (
                      <div class="relative">
                        <label class="p-0.5 rounded-full dark:text-white has-[:checked]:bg-purple-light hover:cursor-pointer has-[:checked]:text-white">
                          <input {...props} type="checkbox" class="checked:accent-purple hidden" required/>
                          {t("form.services.seo")}
                        </label>
                      </div>
                      )}
                    </Field>
                    <Field
                    name="services.marketing"
                    type="boolean"
                    >
                      {(_field, props) => (
                      <div class="relative">
                        <label class="p-0.5 rounded-full dark:text-white has-[:checked]:bg-purple-light hover:cursor-pointer has-[:checked]:text-white">
                          <input {...props} type="checkbox" class="checked:accent-purple hidden" required/>
                          {t("form.services.marketing")}
                        </label>
                      </div>
                      )}
                    </Field>
                    <Field
                    name="services.consulting"
                    type="boolean"
                    >
                      {(_field, props) => (
                      <div class="relative">
                        <label class="p-0.5 rounded-full dark:text-white has-[:checked]:bg-purple-light hover:cursor-pointer has-[:checked]:text-white">
                          <input {...props} type="checkbox" class="checked:accent-purple hidden" required/>
                          {t("form.services.consulting")}
                        </label>
                      </div>
                      )}
                    </Field>
                  </div>
                </div>
                <Field 
                name="message"
                validate={[
                  required("required"),
                  minLength(20, " ")
                ]}
                >
                  {(field, props) => (
                    <div class="relative">
                      <textarea {...props} class="w-100 outline-none border-2 rounded-lg focus:border-purple border-gray-400 p-0.5 placeholder-transparent caret-purple peer" text-blackows="5" placeholder={t("form.message.text")} required/>
                      <label class="absolute left-0 -top-1.25 scale-90 dark:text-white peer-placeholder-shown:left-0.75 peer-placeholder-shown:top-0.5 peer-placeholder-shown:text-black peer-placeholder-shown:scale-100 transition-all">{t("form.message.text")}</label>
                      {field.error && <span class="absolute left-0 top-100 text-sm text-red-600">{field.error == "required" ? t("form.message.required") : t("form.message.error")}</span>}
                    </div>
                  )}
                </Field>
                <div class="flex flex-col justify-between items-start gap-2 lg:flex-row">
                  <Field 
                  name="terms"
                  type="boolean"
                  validate={[
                    required("required")
                  ]}
                  >
                    {(field, props) => (
                      <div class="relative">
                        <label class="dark:text-white">
                          <input {...props} type="checkbox" class="accent-purple" required/>
                          &nbsp; {t("form.terms.text")}
                        </label>
                        {field.error && <span class="absolute left-0 top-100 text-sm text-red-600">{t("form.first name.required")}</span>}
                      </div>
                    )}
                  </Field>
                  <button class="w-100 lg:w-auto text-white bg-purple py-0.5 px-2 rounded-full" type="submit">{t("form.submit")}</button>
                </div>
              </Form>
            </div>
            <div class="grid grid-cols-3 gap-5">
              <Card type="info" thumbnail={sales} title={t("form.contacts.sales.title")} text={t("form.contacts.sales.email")}/>
              <Card type="info" thumbnail={partners} title={t("form.contacts.partners.title")} text={t("form.contacts.partners.email")}/>
              <Card type="info" thumbnail={support} title={t("form.contacts.support.title")} text={t("form.contacts.support.email")}/>
            </div>
          </div>
          <img class="hidden lg:block px-3 self-start" src={hero} alt="" />
        </div>
      </Section>
      <Section>
        <Title level="6" class="text-purple">{t("offices.section")}</Title>
        <Title level={2}>{t("offices.title")}</Title>
        <Text>{t("offices.text")}</Text>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-2 text-start">
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
      </Section>
      <Section>
        <Title level="6" class="text-purple">{t("faq.section")}</Title>
        <Title level="2">{t("faq.title")}</Title>
        <Text>{t("faq.text")} futuresphere@gmail.com</Text>
        <div class="grid lg:grid-cols-2 gap-3 md:gap-4">
          <For each={t("faq.data")}>
            {(faq, _index) => (
              <div class="text-start">
                <Title level="6" class="text-purple">{faq.title}</Title>
                <br />
                <Text>{faq.text}</Text>
              </div>
            )}
          </For>
        </div>
      </Section>
      <Aside />
    </Main>
    <Footer />
    </>
  );
}
