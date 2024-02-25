import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLElement> {}

export default function Main(props: Props) {
  return (
    <main class={`mx-2 flex flex-col gap-1 py-1 xl:mx-8 md:py-2 lg:py-4 text-center ${props.class}`}>
      {props.children}
    </main>
  );
}