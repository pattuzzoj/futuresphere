import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLElement> {}

export default function Section(props: Props) {
  return (
    <section class={`flex flex-col text-center ${props.class}`}>
      {props.children}
    </section>
  )
}