import { createForm, email, required, pattern } from '@modular-forms/solid';
import { scopedTranslator, translate } from "i18n";
import Page from 'components/layout/page';
import Input from 'components/form/input';

export default function Login() {
  const t = scopedTranslator(translate, "login");

  type signupForm = {
    email: string;
    password: string;
  }

  const [signupForm, {Form, Field}] = createForm<signupForm>({
    revalidateOn: "input"
  })

  return (
    <Page title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}>
      <div class="flex flex-col justify-between h-[100vh]">
        <div class="lg:flex lg:justify-center gap-8">
          <div class="flex flex-col justify-center items-center gap-3">
            <h1 class="self-center lg:self-start">{t("title")}</h1>
            <Form class="flex flex-col gap-2.5 w-100 md:w-[30rem]" onSubmit={() => {}}>
              <Field
              name="email"
              validate={[
                required("required"),
                email(" ")
              ]}
              >
                {(field, props) => (
                  <Input {...props} id="firstName" type="text" placeholder={t("form.email.text")}>
                    {field.error &&
                    <span class="absolute top-100 left-0 text-sm text-red-600">{field.error == "required" ? t("form.email.required") : t("form.email.error")}</span>}
                  </Input>
                )}
              </Field>
              <Field
              name="password"
              validate={[
                required("required"),
                pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, " ")
              ]}
              >
                {(field, props) => (
                  <Input {...props} id="firstName" type="password" placeholder={t("form.password.text")}>
                    {field.error &&
                    <span class="absolute top-100 left-0 text-sm text-red-600">{field.error == "required" ? t("form.password.required") : t("form.password.error")}</span>}
                  </Input>
                )}
              </Field>
              <button class="lg:w-auto text-white bg-purple py-0.5 px-2 rounded-full" type="submit">{t("form.submit")}</button>
              <div class="flex flex-col justify-between">
                <a href="/signup">{t("form.recovery")}</a>
                <br />
                <a href="/signup">{t("form.register.text")} <span class="text-purple">{t("form.register.link")}</span></a>
              </div>
            </Form>
          </div>
          <img class="hidden lg:block px-3 self-start" src="/assets/images/contact/hero.svg" alt="" />
        </div>
      </div>
    </Page>
  );
}
