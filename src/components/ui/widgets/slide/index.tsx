import { createSignal, JSXElement, For, Index, JSX } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLElement> {
  type: "slideItem" | "slideList";
  control?: "buttons" | "indicators";
  initialValue?: number;
  loop?: true;
  interval?: number;
  position?: "start" | "center" | "end";
  children: Array<JSXElement>
}

export default function Slide(props: Props) {
  const [position, setPosition] = createSignal(props.initialValue || 0);
  const [list, setList] = createSignal(props.children);

  const nextPosition = () => {
    if(props.type == "slideItem") {
      setPosition((position() + 1) % list().length);
    } else if(props.type == "slideList") {
      const items = list().slice();
      const item = items.shift();
      items.push(item);
      setList(items);
    }
  }

  const previousPosition = () => {
    if(props.type == "slideItem") {
      setPosition((position() - 1 + list().length) % list().length);
    } else if(props.type == "slideList") {
      const items = list().slice();
      const item = items.pop();
      items.unshift(item);
      setList(items);
    }
  }

  (props.loop || !props.control) && setInterval(() => nextPosition(), (props.interval || 2) * 1000);

  return (
    <div class="flex flex-col">
      <div class="flex">
        <Index each={list()}>
          {(item, index) => props.type == "slideItem" ? <div class={`hidden ${position() == index && "!block"}`}>{item()}</div> : <div>{item()}</div>}
        </Index>
      </div>
      <br />
      {
      props.control &&
      <span class={`flex gap-0.5 ${{"start": "justify-start", "center": "justify-center", "end":"justify-end"}[props.position!]}`}>
        {{
          "buttons": (
            <>
            <button class="size-3 p-0.5 text-purple text-xl border-2 border-purple hover:bg-purple hover:text-white rounded-full" onClick={previousPosition}>&lt;</button>
            <button class="size-3 p-0.5 text-purple text-xl border-2 border-purple hover:bg-purple hover:text-white rounded-full" onClick={nextPosition}>&gt;</button>
            </>
          ),
          "indicators": (
            <For each={list()}>
              {(_item, index) => <button class={`size-1 rounded-full border-2 border-purple ${index() == position() && "bg-purple"}`} onClick={() => setPosition(index())}></button>}
            </For>
          )
        }[props.control]}
      </span>
      }
    </div>
  )
}