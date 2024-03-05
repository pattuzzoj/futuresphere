import { Header, Footer, Main } from "../../components/layout";
import { Title, Text } from "../../components/ui";
import { createForm, email, required, pattern } from '@modular-forms/solid';
import { useI18n } from "../../i18n";

export default function SignUp() {
  const t = useI18n("signup");

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
    <div class="flex flex-col justify-between h-[100vh]">
      <Header />
      <Main>
        <div>
          <Title level="1">teste</Title>
          <Text>teste</Text>
          <Form class="flex flex-col gap-2.5" onSubmit={() => {}}>
            <Field 
            name="username"
            validate={[
              required("required"),
              pattern(/^[\S]{3,}$/, " ")
            ]}
            >
              {(field, props) => (
                <div class="relative">
                  <input {...props} class="w-100 outline-none border-2 rounded-lg focus:border-purple p-0.5 placeholder-transparent caret-purple peer" type="text" placeholder={t("form.last name.text")}/>
                  <label class="absolute left-0 -top-50 scale-90 dark:text-white peer-placeholder-shown:left-0.75 peer-placeholder-shown:top-50 peer-placeholder-shown:-translate-y-50 peer-placeholder-shown:font-medium peer-placeholder-shown:text-black peer-placeholder-shown:scale-100 transition-all">{t("form.last name.text")}</label>
                  {field.error && <span class="absolute left-0 top-100 text-sm text-red-600">{field.error == "required" ? t("form.last name.required") : t("form.last name.error")}</span>}
                </div>
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
                <div class="relative">
                  <input {...props} class="w-100 outline-none border-2 rounded-lg focus:border-purple p-0.5 placeholder-transparent caret-purple peer" type="email" placeholder={t("form.email.text")} required/>
                  <label class="absolute left-0 -top-50 scale-90 dark:text-white peer-placeholder-shown:left-0.75 peer-placeholder-shown:top-50 peer-placeholder-shown:-translate-y-50 peer-placeholder-shown:font-medium peer-placeholder-shown:text-black peer-placeholder-shown:scale-100 transition-all">{t("form.email.text")}</label>
                  {field.error && <span class="absolute left-0 top-100 text-sm text-red-600">{field.error == "required" ? t("form.email.required") : t("form.email.error")}</span>}
                </div>
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
                <div class="relative">
                  <input {...props} class="w-100 outline-none border-2 rounded-lg focus:border-purple p-0.5 placeholder-transparent caret-purple peer" type="email" placeholder={t("form.email.text")} required/>
                  <label class="absolute left-0 -top-50 scale-90 dark:text-white peer-placeholder-shown:left-0.75 peer-placeholder-shown:top-50 peer-placeholder-shown:-translate-y-50 peer-placeholder-shown:font-medium peer-placeholder-shown:text-black peer-placeholder-shown:scale-100 transition-all">{t("form.email.text")}</label>
                  {field.error && <span class="absolute left-0 top-100 text-sm text-red-600">{field.error == "required" ? t("form.email.required") : t("form.email.error")}</span>}
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
      </Main>
      <Footer />
    </div>
  );
}
