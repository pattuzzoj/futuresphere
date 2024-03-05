import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLParagraphElement> {}

export default function Text(props: Props) {
  return (<p class={`${props.class}`}>{props.children}</p>)
}