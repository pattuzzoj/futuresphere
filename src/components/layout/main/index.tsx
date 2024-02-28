import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLElement> {}

export default function Main(props: Props) {
  return (
    <main class={`flex flex-col my-2 md:my-3 mx-2 xl:mx-16 text-center gap-5 md:gap-6 lg:gap-6 ${props.class}`}>
      {props.children}
    </main>
  );
}