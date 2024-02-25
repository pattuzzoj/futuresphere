import { JSX } from 'solid-js';
import { BsTwitter, BsFacebook, BsLinkedin } from 'solid-icons/bs';
import { FiSun, FiMoon } from 'solid-icons/fi';
import { RiSystemMenu2Line } from 'solid-icons/ri';

interface Props extends JSX.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  name:
  | "BsTwitter"
  | "BsFacebook"
  | "BsLinkedin"
  | "FiSun"
  | "FiMoon"
  | "RiSystemMenu2Line"
};

export default function Icon(props: Props) {
  const IconComponent = {
    "BsTwitter": BsTwitter,
    "BsFacebook": BsFacebook,
    "BsLinkedin": BsLinkedin,
    "FiSun": FiSun,
    "FiMoon": FiMoon,
    "RiSystemMenu2Line": RiSystemMenu2Line
  }[props.name]
      

  return (
    <span title={props.title} class={`${props.class} flex justify-center items-center`}><IconComponent class={`${props.color}`}/></span>
  );
}