import { Title, Text } from '../../typography';

interface Props {
  category: string;
  title: string;
  text: string;
}

export default function Blog(props: Props) {
  return (
    <div class="flex flex-col items-center gap-1.25">
      <img src="" alt="" />
      <span>{props.category}</span>
      <Title level="3">{props.title}</Title>
      <Text>{props.text}</Text>
    </div>
  )
}