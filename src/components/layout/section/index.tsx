import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLElement> {}

export default function Section(props: Props) {
  return (
    <section class={`flex flex-col text-center gap-1 md:gap-1.25 lg:gap-1.5 ${props.class}`}>
      {props.children}
    </section>
  )
}