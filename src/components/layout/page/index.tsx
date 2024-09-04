import { JSXElement } from "solid-js";
import MetaData from "components/meta";
import Footer from "../footer";
import Header from "../header";

interface PageProps {
  title: string
  description: string
  keywords: string
  children: JSXElement
}

function Page(props: PageProps) {
  return (
    <>
      <MetaData title={props.title} description={props.description} keywords={props.keywords} />
      <Header />
      <main class="
      flex flex-col
      gap-y-3 md:gap-y-3.5 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6
      mx-1.5 md:mx-2.5 lg:mx-3.5 xl:mx-5 2xl:mx-8
      my-1 md:my-1 lg:my-1.5 xl:my-2 2xl:my-2.5
      text-center
      ">
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Page;