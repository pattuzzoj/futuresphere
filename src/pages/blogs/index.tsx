import { createSignal, For } from 'solid-js';
import { translate, scopedTranslator } from "i18n";
import Page from 'components/layout/page';
import Aside from 'components/layout/aside';
import BlogCard from "components/ui/cards/BlogCard";

export default function Blogs() {
  const t = scopedTranslator(translate, "blogs");
  const [category, setCategory] = createSignal(["All", "Todos"]);

  return (
    <Page title={t("meta.title")} description={t("meta.description")} keywords={t("meta.keywords")} >
      <div class="flex flex-col text-center gap-1 md:gap-1.25 lg:gap-1.5">
        <h1>{t("blogs.title")}</h1>
        <p>{t("blogs.text")}</p>
        <br />
        <div class="flex flex-col md:flex-row items-center text-start gap-1.25">
          <img class="md:size-50 rounded-2xl" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading='lazy' />
          <div class="flex flex-col items-center text-start gap-1.25">
            <span class="self-start bg-purple-light rounded-full p-0.5 text-white">{t("blogs.blog.category")}</span>
            <h2>{t("blogs.blog.title")}</h2>
            <p>{t("blogs.blog.text")}</p>
          </div>
        </div>
        <br />
        <br />
        <span class="flex justify-center gap-0.5">
          <button class={`p-0.5 rounded-full dark:text-white ${category().includes("All") && "bg-purple-light text-white"}`} onClick={() => setCategory(["All", "Todos"])}>{t("blogs.categories.all")}</button>
          <button class={`p-0.5 rounded-full dark:text-white ${category().includes("Healthcare") && "bg-purple-light text-white"}`} onClick={() => setCategory(["Healthcare", "Saúde", "Salud"])}>{t("blogs.categories.healthcare")}</button>
          <button class={`p-0.5 rounded-full dark:text-white ${category().includes("Businesses") && "bg-purple-light text-white"}`} onClick={() => setCategory(["Businesses", "Negócios", "Negocios"])}>{t("blogs.categories.businesses")}</button>
          <button class={`p-0.5 rounded-full dark:text-white ${category().includes("Cloud Computing") && "bg-purple-light text-white"}`} onClick={() => setCategory(["Cloud Computing", "Computação em Nuvem", "Computación en la Nube"])}>{t("blogs.categories.cloud")}</button>
        </span>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start gap-3 mt-2">
          <For each={t("blogs.blogs")}>
            {(data, _index) => (
              <div class={`${(!category().includes("All") && !category().includes(data.category)) && "hidden"}`}>
                <BlogCard
                  thumbnail="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title={data.title}
                  text={data.text}
                  category={data.category}
                />
              </div>
            )}
          </For>
        </div>
      </div>
      <Aside />
    </Page>
  );
}
