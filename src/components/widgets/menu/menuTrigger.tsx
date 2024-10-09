import { JSX, splitProps } from "solid-js";
import { useMenu } from "./menu";

interface MenuTrigger extends JSX.HTMLAttributes<Omit<HTMLButtonElement, 'onClick'>> {
  toggle?: true;
  close?: true;
}

function MenuTrigger(props: MenuTrigger) {
  const [local, inner] = splitProps(props, ["close", "toggle", "children"]);
  const [menuIsOpen, setMenuIsOpen] = useMenu();

  if(local.toggle) {
    return (
      <button {...inner} onClick={() => setMenuIsOpen(!menuIsOpen())}>
        {local.children}
      </button>
    )
  } else if(local.close) {
    return (
      <button {...inner} onClick={() => setMenuIsOpen(false)}>
        {local.children}
      </button>
    )
  } else {
    return (
      <button {...inner} onClick={() => setMenuIsOpen(true)}>
        {local.children}
      </button>
    )
  }
}

export default MenuTrigger;