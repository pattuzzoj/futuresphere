import { JSX } from "solid-js";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  return (
    <button title={props.title} class={`${props.class}`}>
      {props.children}
    </button>
  );
}
