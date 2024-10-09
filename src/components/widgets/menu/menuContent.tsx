import { JSX, Show, splitProps } from "solid-js";
import { useMenu } from "./menu";

interface MenuContentProps extends JSX.HTMLAttributes<HTMLDivElement> {}

function MenuContent(props: MenuContentProps) {
  const [local, inner] = splitProps(props, ["children"]);
  const [menuIsOpen] = useMenu();

  return (
    <Show when={menuIsOpen()}>
      <div {...inner}>
        {local.children}
      </div>
    </Show>
  )
}

export default MenuContent;