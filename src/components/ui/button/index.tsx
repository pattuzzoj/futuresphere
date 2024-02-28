import { JSX, Switch, Match } from "solid-js";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  type: "contact" | "signup";
}

function ContactButton(props: Props) {
  return (
    <a title={props.title} class="rounded-full bg-purple px-1.25 py-0.375 text-white hover:bg-purple-light cursor-pointer">Contact Us</a>
  )
}

function SignupButton(props: Props) {
  return (
    <a
      title={props.title}
      class="cursor-pointer rounded-full border-2 bg-dark px-1.25 py-0.375 text-white border-dark hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white"
    >
      Signup
    </a>
  )
}

export default function Button(props: Props) {
  return (
  <Switch fallback={<button class={props.class} title={props.title}>{props.children}</button>}>
    <Match when={props.type == "contact"}>
      <ContactButton {...props}/>
    </Match>
    <Match when={props.type == "signup"}>
      <SignupButton {...props}/>
    </Match>
  </Switch>
  )
}