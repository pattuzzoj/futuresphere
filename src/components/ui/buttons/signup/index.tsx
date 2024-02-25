import { JSX } from "solid-js";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Signup(props: Props) {
  return (
    <a
      title={props.title}
      class="cursor-pointer rounded-full border-2 bg-dark px-1.25 py-0.375 text-white border-dark hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white"
    >
      Signup
    </a>
  );
}
