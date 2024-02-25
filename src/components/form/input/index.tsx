import { JSX } from 'solid-js';

interface Props extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return (
    <input name={props.name} type={props.type} pattern={props.pattern} />
  );
}
