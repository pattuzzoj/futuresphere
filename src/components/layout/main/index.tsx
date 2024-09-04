import { JSX, JSXElement } from 'solid-js';

interface MainProps extends JSX.HTMLAttributes<HTMLElement> {
  children: JSXElement;
}

function Main(props: MainProps) {
  return (
    <main class="
    max-w-7xl flex flex-col
    gap-y-3 md:gap-y-3.5 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6
    my-1 md:my-1.5 lg:my-2
    m-auto
    text-center
    p-1
    ">
      {props.children}
    </main>
  )
}

export default Main;