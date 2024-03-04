import { JSX } from 'solid-js';
import { BsTwitter, BsFacebook, BsLinkedin } from 'solid-icons/bs';
import { FiSun, FiMoon } from 'solid-icons/fi';
import { RiSystemMenu2Line } from 'solid-icons/ri';
import { FaSolidCircleCheck, FaSolidCircleXmark } from 'solid-icons/fa'

interface Props extends JSX.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  name:
  | "BsTwitter"
  | "BsFacebook"
  | "BsLinkedin"
  | "FiSun"
  | "FiMoon"
  | "RiSystemMenu2Line"
  | "FaSolidCircleCheck"
  | "FaSolidCircleXmark"
};

export default function Icon(props: Props) {
  const IconComponent = {
    BsTwitter,
    BsFacebook,
    BsLinkedin,
    FiSun,
    FiMoon,
    RiSystemMenu2Line,
    FaSolidCircleCheck,
    FaSolidCircleXmark
  }[props.name]
      

  return (
    <IconComponent class={`${props.color}`} title={props.title}/>
  );
}