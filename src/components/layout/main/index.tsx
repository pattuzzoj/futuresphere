import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLElement> {}

export default function Main(props: Props) {
  return (
    <main class={`flex items-center flex-col my-2 md:my-3 mx-1 md:mx-2 lg:mx-4 xl:mx-8 2xl:mx-16 text-center gap-5 md:gap-7 ${props.class}`}>
      {props.children}
    </main>
  );
}