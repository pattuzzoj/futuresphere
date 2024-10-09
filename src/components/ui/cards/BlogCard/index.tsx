import { useTranslator } from "i18n/index";

interface BlogCardProps {
  thumbnail: string;
  title: string;
  text: string;
  category: string;
}

function BlogCard(props: BlogCardProps) {
  const t = useTranslator("global");
  
  return (
    <div class="flex flex-col text-start gap-1.25">
      <img class="aspect-card rounded-2xl" src={props.thumbnail} alt="" loading='lazy' />
      <span class="self-start bg-purple-light rounded-full p-0.5 text-white">{props.category}</span>
      <h5>{props.title}</h5>
      <p>{props.text}</p>
      <span class="self-end dark:text-white"><a class="underline underline-offset-4 decoration-purple hover:no-underline hover:bg-purple rounded-full p-0.375 hover:text-white" href="/blogs">{t("ui.more")}</a></span>
    </div>
  )
}

export default BlogCard;