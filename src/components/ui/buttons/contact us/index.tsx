import { JSX } from "solid-js";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ContactUs(props: Props) {
  return (
    <a title={props.title} class="rounded-full bg-purple px-1.25 py-0.375 text-white hover:bg-purple-light cursor-pointer">Contact Us</a>
  );
}
