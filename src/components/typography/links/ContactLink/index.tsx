import { useTranslator } from "i18n/index";

function ContactLink() {
  const t = useTranslator("global");
  
  return (
    <a title={t("ui.contact")} class="
    cursor-pointer
    border-2 border-purple rounded-full
    px-1.25 py-0.375
    text-white
    bg-purple dark:hover:bg-transparent hover:bg-transparent
    dark:hover:text-white hover:text-black"
    href="contact">{t("ui.contact")}</a>
  )
}

export default ContactLink;