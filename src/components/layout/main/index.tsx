import { JSX, JSXElement } from 'solid-js';

interface MainProps extends JSX.HTMLAttributes<HTMLElement> {
  children: JSXElement;
}

function Main(props: MainProps) {
  return (
    <main class="
    max-w-5xl flex flex-col
    gap-y-8 xl:gap-y-10
    my-1 md:my-1.5 lg:my-2
    md:m-auto
    text-center
    p-1
    ">
      {props.children}
    </main>
  )
}

export default Main;