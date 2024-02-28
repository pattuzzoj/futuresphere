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
    BsTwitter,
    BsFacebook,
    BsLinkedin,
    FiSun,
    FiMoon,
    RiSystemMenu2Line
  }[props.name]
      

  return (
    <IconComponent class={`${props.color}`} title={props.title}/>
  );
}