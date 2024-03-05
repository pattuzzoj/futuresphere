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
    1: <h1 class={`${props.class}`}>{props.children}</h1>,
    2: <h2 class={`${props.class}`}>{props.children}</h2>,
    3: <h3 class={`${props.class}`}>{props.children}</h3>,
    4: <h4 class={`${props.class}`}>{props.children}</h4>,
    5: <h5 class={`${props.class}`}>{props.children}</h5>,
    6: <h6 class={`${props.class}`}>{props.children}</h6>,
  }[props.level]
}