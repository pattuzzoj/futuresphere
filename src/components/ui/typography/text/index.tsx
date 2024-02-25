import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLParagraphElement> {}

export default function Text(props: Props) {
  return (<p class={`${props.class} text-neutral-700 dark:text-white font-normal md:text-xs lg:text-lg`}>{props.children}</p>)
}