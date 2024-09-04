import { JSX } from 'solid-js';
import { BsTwitter, BsFacebook, BsLinkedin } from 'solid-icons/bs';
import { FiSun, FiMoon, FiX } from 'solid-icons/fi';
import { RiSystemMenu2Line } from 'solid-icons/ri';
import { FaSolidCircleCheck, FaSolidCircleXmark } from 'solid-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'solid-icons/ai'

interface IconProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  name:
  | "BsTwitter"
  | "BsFacebook"
  | "BsLinkedin"
  | "FiSun"
  | "FiMoon"
  | "FiX"
  | "RiSystemMenu2Line"
  | "FaSolidCircleCheck"
  | "FaSolidCircleXmark"
  | "AiFillEye"
  | "AiFillEyeInvisible"
};

function Icon(props: IconProps) {
  const IconComponent = {
    BsTwitter,
    BsFacebook,
    BsLinkedin,
    FiSun,
    FiMoon,
    FiX,
    RiSystemMenu2Line,
    FaSolidCircleCheck,
    FaSolidCircleXmark,
    AiFillEye,
    AiFillEyeInvisible
  }[props.name]
      

  return (
    <IconComponent class={`${props.color}`} title={props.title}/>
  );
}

export default Icon;