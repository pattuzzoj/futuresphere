import { createForm, email, required } from '@modular-forms/solid';
import { scopedTranslator, translate } from "i18n";

function Aside() {
  const t = scopedTranslator(translate, "global");

  type newsletterForm = {
    email: string;
  }

  const [newsletterForm, {Form, Field}] = createForm<newsletterForm>({
    revalidateOn: "input"
  });

  return (
    <aside class="flex justify-center">
      <div class="
      flex flex-col items-center gap-1.5 sm:gap-2 max-w-[60rem] rounded-3xl bg-aside bg-cover
      p-2 sm:p-3 md:p-3.5 lg:p-6 xl:p-7 2xl:p-8">
        <img class="size-4" src="/assets/icons/icon-mail.svg" alt="" />
        <h2 class="text-white">{t("aside.title")}</h2>
        <p class="text-2xl text-white">{t("aside.text")}</p>
        <Form class="relative w-100" onSubmit={() => {}}>
          <Field
          name="email"
          validate={[
            required("required"),
            email(" ")
          ]}
          >
            {(field, props) => (
              <>
                <input
                {...props}
                class="w-100 rounded-2xl p-1 md:pr-20 outline-none border-2 focus:border-purple text-black bg-white placeholder-transparent caret-purple peer"
                type="email"
                placeholder={t("aside.email.text")}
                />
                <label class="
                absolute -top-[20%] left-0
                md:-top-1.5
                peer-placeholder-shown:top-25 peer-placeholder-shown:left-1.25 peer-placeholder-shown:-translate-y-50
                md:peer-placeholder-shown:top-50 md:peer-placeholder-shown:-translate-y-50
                text-white peer-placeholder-shown:text-black
                transition-all
                ">
                  {t("aside.email.text")}
                </label>
                {field.error && <span class="absolute top-25 -translate-y-50 right-1 md:-translate-y-0 md:right-auto md:left-0 md:top-100 text-sm font-semibold text-red-600">{field.error == "required" ? t("aside.email.required") : t("aside.email.error")}</span>}
              </>
            )}
          </Field>
          <button type="submit" class="
          w-100 rounded-2xl p-1 mt-0.5 text-white bg-purple
          md:w-auto md:mt-0 md:p-0.75 md:absolute md:top-50 md:right-0.25 md:-translate-y-50 
          ">{t("aside.email.subscribe")}</button>
        </Form>
      </div>
    </aside>
  );
}

export default Aside;