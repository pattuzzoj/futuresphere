import { JSX, For } from 'solid-js';

interface Props extends JSX.OlHTMLAttributes<HTMLUListElement> {
  items?: Array<number | string>;
}

export default function List(props: Props) {
  return (
    <ul class={`${props.class}`}>
      {props.items ? <For each={props.items}>{(item) => <li>{item}</li>}</For> : props.children}
    </ul>
  );
}