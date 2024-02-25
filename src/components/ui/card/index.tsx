import { Title, Text } from '../typography';

interface Props {
  type: "info" | "blog" | "description";
  thumbnail: any;
  title: any;
  text: any;
  category?: string;
  number?: string;
}

export default function Card(props: Props) {
  return {
    "info": (
      <div class="flex flex-col items-center gap-1.25 max-w-18">
        <img class="size-2" src={props.thumbnail} alt="" loading='lazy' />
        <Title level="3">{props.title}</Title>
        <Text>{props.text}</Text>
      </div>
    ),
    "blog": (
      <div class="flex flex-col items-center gap-1.25">
        <img class="size-100 rounded-2xl" src={props.thumbnail} alt="" loading='lazy' />
        <span class="self-start bg-purple-light rounded-full p-0.5 text-white">{props.category}</span>
        <Title level="3">{props.title}</Title>
        <Text>{props.text}</Text>
      </div>
    ),
    "description": (
      <div class="grid md:grid-cols-2 gap-1 lg:gap-1.5 items-center max-w-[1000px] text-start">
        <img class="h-100 object-cover rounded-3xl" src={props.thumbnail} alt="" loading='lazy' />
        <div class="flex flex-col justify-between gap-1">
          <Title level="3">{props.title}</Title>
          <Text class="text-xl">{props.text}</Text>
        </div>
      </div>
    ),
    "": (
      <div class="flex flex-col items-center gap-1.25">
        <img class="size-100 rounded-2xl" src={props.thumbnail} alt="" loading='lazy' />
        <span class="self-start bg-purple-light rounded-full p-0.5 text-white">{props.category}</span>
        <Title class="text-purple" level="5">{props.title}</Title>
        <Text>{props.text}</Text>
        <span>{props.number}</span>
      </div>
    )
  }[props.type];
}