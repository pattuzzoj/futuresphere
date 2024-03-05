import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLElement> {}

export default function Section(props: Props) {
  return (
    <section class="
    flex flex-col
    gap-y-2 md:gap-y-2.5
    ">
      {props.children}
    </section>
  )
}