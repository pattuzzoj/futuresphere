import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLHeadingElement> {
  level:
  | 1 | "1"
  | 2 | "2"
  | 3 | "3"
  | 4 | "4"
  | 5 | "5"
  | 6 | "6"
}

export default function Title(props: Props) {
  return {
    1: <h1 title={props.title} class={`${props.class} text-black dark:text-white`}>{props.children}</h1>,
    2: <h2 title={props.title} class={`${props.class} text-black dark:text-white`}>{props.children}</h2>,
    3: <h3 title={props.title} class={`${props.class} text-black dark:text-white`}>{props.children}</h3>,
    4: <h4 title={props.title} class={`${props.class} text-black dark:text-white`}>{props.children}</h4>,
    5: <h5 title={props.title} class={`${props.class} text-black dark:text-white`}>{props.children}</h5>,
    6: <h6 title={props.title} class={`${props.class} text-black dark:text-white`}>{props.children}</h6>,
  }[props.level]
}