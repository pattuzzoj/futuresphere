import { JSX, Switch, Match } from "solid-js";
import { useI18n } from "../../../i18n";

const t = useI18n("global");

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  type: "contact" | "signup" | "view";
}

function ContactLink(props: Props) {
  return (
    <a title={props.title} class="cursor-pointer rounded-full border-2 bg-purple px-1.25 py-0.375 text-white border-purple hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white">{t("ui.contact")}</a>
  )
}

function SignupLink(props: Props) {
  return (
    <a
      title={props.title}
      class="cursor-pointer rounded-full border-2 bg-dark px-1.25 py-0.375 text-white border-dark hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white"
    >
      {t("ui.signup")}
    </a>
  )
}

function ViewLink(props: Props) {
  return (
    <a title={props.title} class="text-purple" href="/blogs">
      {t("ui.view")} &gt;
    </a>
  )
}

export default function Link(props: Props) {
  return (
  <Switch fallback={<button class={props.class} title={props.title}>{props.children}</button>}>
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