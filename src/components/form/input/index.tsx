import { JSX } from 'solid-js';

interface Props extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return (
    <div class="relative inline-block">
      <input id={props.id} class="outline-none border-b-2 border-gray-600 focus:border-purple p-0.5 placeholder-transparent peer" type={props.type} placeholder={props.placeholder} {...props}/>
      <label class="absolute left-0 -top-50 scale-90 font-light dark:text-white peer-placeholder-shown:left-0.5 peer-placeholder-shown:top-50 peer-placeholder-shown:-translate-y-50 peer-placeholder-shown:font-medium peer-placeholder-shown:text-black peer-placeholder-shown:scale-100 transition-all" for={props.id}>{props.placeholder}</label>
    </div>
    // <input name={props.name} type={props.type} pattern={props.pattern} />
  );
}
