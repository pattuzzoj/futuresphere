import { JSX } from 'solid-js';

interface Props extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function A(props: Props) {
  return (<a title={props.title} class={`${props.class}`} href={props.href} hreflang={props.hreflang}>{props.children}</a>);
}