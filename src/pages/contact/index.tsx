import { For } from "solid-js";
import { createForm, email, minLength, required, pattern } from '@modular-forms/solid';
import { translate, scopedTranslator } from "i18n";
import Page from 'components/layout/page';
import Section from 'components/layout/section';
import Aside from 'components/layout/aside';
import Input from 'components/form/input';
import OfficeCard from "components/ui/cards/OfficeCard";
import InfoCard from "components/ui/cards/InfoCard";

export default function Contact() {
  const t = scopedTranslator(translate, "contact");

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

  return (
    <Page title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}>
      <Section>
        <h1>{t("title")}</h1>
        <p>{t("text")}</p>
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
                  <p class="text-start mb-1"><span class="text-sm">{t("form.services.text")}</span></p>
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
              <InfoCard icon="src/assets/icons/contact/sales.svg" title={t("form.contacts.sales.title")} text={t("form.contacts.sales.email")}/>
              <InfoCard icon="src/assets/icons/contact/partners.svg" title={t("form.contacts.partners.title")} text={t("form.contacts.partners.email")}/>
              <InfoCard icon="src/assets/icons/contact/support.svg" title={t("form.contacts.support.title")} text={t("form.contacts.support.email")}/>
            </div>
          </div>
          <img class="hidden lg:block px-3 self-start" src="src/assets/images/contact/hero.svg" alt="" />
        </div>
      </Section>
      <Section>
        <h6 class="text-purple">{t("offices.section")}</h6>
        <h2>{t("offices.title")}</h2>
        <p>{t("offices.text")}</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-2 text-start">
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
      </Section>
      <Section>
        <h6 class="text-purple">{t("faq.section")}</h6>
        <h2>{t("faq.title")}</h2>
        <p>{t("faq.text")} futuresphere@gmail.com</p>
        <div class="grid lg:grid-cols-2 gap-3 md:gap-4">
          <For each={t("faq.data")}>
            {(faq, _index) => (
              <div class="text-start">
                <h6 class="text-purple">{faq.title}</h6>
                <br />
                <p>{faq.text}</p>
              </div>
            )}
          </For>
        </div>
      </Section>
      <Aside />
    </Page>
  );
}
