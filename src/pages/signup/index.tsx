import { createForm, email, required, pattern } from '@modular-forms/solid';
import { useTranslator } from "i18n";
import MetaData from "components/meta";
import Input from 'components/form/input';

export default function SignUp() {
  const t = useTranslator("signup");

  type signupForm = {
    username: string;
    email: string;
    password: string;
    terms: boolean;
  }

  const [signupForm, {Form, Field}] = createForm<signupForm>({
    revalidateOn: "input"
  })

  return (
    <>
      <MetaData title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")}/>
      <div class="flex justify-center items-center">
        <div class="lg:flex lg:justify-center gap-8">
          <div class="flex flex-col justify-center items-center gap-3">
            <h1 class="self-center lg:self-start">{t("title")}</h1>
            <Form class="flex flex-col gap-2.5 md:w-[35rem]" onSubmit={() => {}}>
              <Field 
              name="username"
              validate={[
                required("required"),
                pattern(/^[\S]{3,}$/, " ")
              ]}
              >
                {(field, props) => (
                  <Input {...props} id="username" type="text" placeholder={t("form.username.text")}>
                    {field.error &&
                    <span class="absolute top-100 left-0 text-sm text-red-600">{field.error == "required" ? t("form.username.required") : t("form.username.error")}</span>}
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
                  <Input {...props} id="email" type="text" placeholder={t("form.email.text")}>
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
                  <Input {...props} id="password" type="password" placeholder={t("form.password.text")}>
                    {field.error &&
                    <span class="absolute top-100 left-0 text-sm text-red-600">{field.error == "required" ? t("form.password.required") : t("form.password.error")}</span>}
                  </Input>
                )}
              </Field>
              <div class="flex flex-col justify-between items-center gap-2 lg:flex-row">
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
                      {field.error && <span class="absolute left-0 top-100 text-sm text-red-600">{t("form.terms.required")}</span>}
                    </div>
                  )}
                </Field>
                <button class="lg:w-auto text-white bg-purple py-0.5 px-2 rounded-full" type="submit">{t("form.submit")}</button>
              </div>
              <a href="/login">{t("form.login.text")} <span class="text-purple">{t("form.login.link")}</span></a>
            </Form>
          </div>
          <img class="hidden lg:block px-3 self-start" src="/assets/images/contact/hero.svg" alt="" />
        </div>
      </div>
    </>
  );
}
