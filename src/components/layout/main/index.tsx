import { JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLElement> {}

export default function Main(props: Props) {
  return (
    <main class="
    flex flex-col
    gap-y-3 md:gap-y-3.5 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6
    mx-1.5 md:mx-2.5 lg:mx-3.5 xl:mx-5 2xl:mx-8
    my-1 md:my-1 lg:my-1.5 xl:my-2 2xl:my-2.5
    text-center
    ">
      {props.children}
    </main>
  );
}