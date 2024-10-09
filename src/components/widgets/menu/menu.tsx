import { Accessor, createContext, createSignal, JSX, JSXElement, Setter, Show, splitProps, useContext } from "solid-js";

interface MenuProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "children"> {
  initialState?: boolean;
  children: JSXElement | ((isOpen: Accessor<boolean>) => JSXElement);
}

type MenuReturn = [
  Accessor<boolean>,
  Setter<boolean>
]

const MenuContext = createContext<MenuReturn>([] as unknown as MenuReturn);

function Menu(props: MenuProps) {
  const [local, inner] = splitProps(props, ["initialState", "children"]);
  const [isOpen, setIsOpen] = createSignal(props.initialState ?? false);

  return (
    <MenuContext.Provider value={[isOpen, setIsOpen]}>
      <div {...inner}>
        <Show when={typeof local.children === "function"} fallback={<>{local.children}</>}>
          {typeof local.children === "function" && local.children(isOpen)}
        </Show>
      </div>
    </MenuContext.Provider>
  )
}

export default Menu;
export const useMenu = (): MenuReturn => useContext(MenuContext);