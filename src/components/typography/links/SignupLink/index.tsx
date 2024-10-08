import { useTranslator } from "i18n/index";

function SignupLink() {
  const t = useTranslator("global");

  return (
    <a
      title={t("ui.signup")}
      class="cursor-pointer
       border-2 border-dark dark:border-white rounded-full
       px-1.25 py-0.375
       text-white
       dark:text-black hover:text-black dark:hover:text-white
       bg-dark hover:bg-transparent dark:bg-white dark:hover:bg-transparent" href="/signup"
    >
      {t("ui.signup")}
    </a>
  )
}

export default SignupLink;