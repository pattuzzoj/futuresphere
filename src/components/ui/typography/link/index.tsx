import { JSX, Switch, Match } from "solid-js";
import { useI18n } from "../../../../i18n";

const t = useI18n("global");

interface Props extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  type: "contact" | "signup" | "view";
}

function ContactLink(props: Props) {
  return (
    <a title={props.title} class="
    cursor-pointer
    border-2 border-purple rounded-full
    px-1.25 py-0.375
    bg-purple dark:hover:bg-transparent hover:bg-transparent
    dark:hover:text-white hover:text-black"
    href="contact">{t("ui.contact")}</a>
  )
}

function SignupLink(props: Props) {
  return (
    <a
      title={props.title}
      class="cursor-pointer
       border-2 border-dark dark:border-white rounded-full
       px-1.25 py-0.375
       dark:text-black hover:text-black dark:hover:text-white
       bg-dark hover:bg-transparent dark:bg-white dark:hover:bg-transparent" href="/signup"
    >
      {t("ui.signup")}
    </a>
  )
}

function ViewLink(props: Props) {
  return (
    <a title={props.title} class="text-purple" href={props.href}>
      {t("ui.view")} &gt;
    </a>
  )
}

export default function Link(props: Props) {
  return (
  <Switch>
    <Match when={props.type == "contact"}>
      <ContactLink {...props}/>
    </Match>
    <Match when={props.type == "signup"}>
      <SignupLink {...props}/>
    </Match>
    <Match when={props.type == "view"}>
      <ViewLink {...props}/>
    </Match>
  </Switch>
  )
}