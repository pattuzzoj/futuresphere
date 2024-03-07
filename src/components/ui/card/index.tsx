import { Switch, Match } from 'solid-js';
import { Title, Text } from '../typography';
import { useI18n } from '../../../i18n';

const t = useI18n("global");

interface Props {
  type: "info" | "blog" | "description" | "office";
  thumbnail: any;
  title?: any;
  text: any;
  category?: string;
  city?: string;
  number?: string;
}

function InfoCard(props: Props) {
  return (
    <div class="flex flex-col items-center gap-1.25 max-w-18">
      <img class="size-2" src={props.thumbnail} alt="" loading='lazy' />
      <Title level="5">{props.title}</Title>
      <Text>{props.text}</Text>
    </div>
  )
}

function BlogCard(props: Props) {
  return (
    <div class="flex flex-col text-start gap-1.25">
      <img class="aspect-card rounded-2xl" src={props.thumbnail} alt="" loading='lazy' />
      <span class="self-start bg-purple-light rounded-full p-0.5 text-white">{props.category}</span>
      <Title level="5">{props.title}</Title>
      <Text>{props.text}</Text>
      <span class="self-end dark:text-white"><a class="underline underline-offset-4 decoration-purple hover:no-underline hover:bg-purple rounded-full p-0.375 hover:text-white" href="/blogs">{t("ui.more")}</a></span>
    </div>
  )
}

function OfficeCard(props: Props) {
  return (
    <div class="flex flex-col gap-0.5 text-start">
      <img class="rounded-2xl" src={props.thumbnail} alt="" />
      <div>
        <span class="text-purple">{props.city}</span>
        <Text>{props.text}</Text>
        <span class="dark:text-white">{props.number}</span>
      </div>
    </div>
  );
}

function DescriptionCard(props: Props) {
  return (
    <div class="grid md:grid-cols-2 gap-1 lg:gap-1.5 items-center max-w-5xl text-start">
      <img class="aspect-card object-cover rounded-3xl" src={props.thumbnail} alt="" loading='lazy' />
      <div class="flex flex-col justify-between gap-1">
        <Title level="5">{props.title}</Title>
        <Text class="text-xl">{props.text}</Text>
      </div>
    </div>
  )
}

export default function Card(props: Props) {
  return(
    <Switch>
      <Match when={props.type == "info"}>
        <InfoCard {...props} />
      </Match>
      <Match when={props.type == "blog"}>
        <BlogCard {...props} />
      </Match>
      <Match when={props.type == "office"}>
        <OfficeCard {...props} />
      </Match>
      <Match when={props.type == "description"}>
        <DescriptionCard {...props} />
      </Match>
    </Switch>
  )
}