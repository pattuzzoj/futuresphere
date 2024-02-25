import { JSX } from 'solid-js';
import * as antDesign from 'solid-icons/ai';
import * as box from 'solid-icons/bi';
import * as bootstrap from 'solid-icons/bs';
import * as gg from 'solid-icons/cg';
import * as fontAwesome from 'solid-icons/fa';
import * as feather from 'solid-icons/fi';
import * as hero from 'solid-icons/hi';
import * as icoMoon from 'solid-icons/im';
import * as ion from 'solid-icons/io';
import * as github from 'solid-icons/oc';
import * as remix from 'solid-icons/ri';
import * as simple from 'solid-icons/si';
import * as tabler from 'solid-icons/tb';
import * as typ from 'solid-icons/ti';
import * as vscode from 'solid-icons/vs';
import * as weather from 'solid-icons/wi';

type IconNames = 
| keyof typeof antDesign 
| keyof typeof box 
| keyof typeof bootstrap 
| keyof typeof gg 
| keyof typeof fontAwesome 
| keyof typeof feather 
| keyof typeof hero 
| keyof typeof icoMoon 
| keyof typeof ion 
| keyof typeof github 
| keyof typeof remix 
| keyof typeof simple 
| keyof typeof tabler 
| keyof typeof typ 
| keyof typeof vscode 
| keyof typeof weather

interface Props extends JSX.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  lib:
  | "antDesign"
  | "box"
  | "bootstrap"
  | "gg"
  | "fontAwesome"
  | "feather"
  | "hero"
  | "icoMoon"
  | "ion"
  | "github"
  | "remix"
  | "simple"
  | "tabler"
  | "typ"
  | "vscode"
  | "weather";
  name: IconNames;
};

export default function Icon(props: Props) {
  try {
    const IconComponent = {
      antDesign,
      box,
      bootstrap,
      gg,
      fontAwesome,
      feather,
      hero,
      icoMoon,
      ion,
      github,
      remix,
      simple,
      tabler,
      typ,
      vscode,
      weather
    }[props.lib][props.name];

    return (
      <span title={props.title} class={`${props.class} flex justify-center items-center`}><IconComponent class={`${props.color}`}/></span>
    );
  } catch(e) {
    console.error(`${props.name} doesn't exist in the lib ${props.lib}`)
    return null;
  }
}