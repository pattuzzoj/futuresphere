import { JSXElement } from "solid-js";
import MetaData from "components/meta";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";

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
      <div class="min-h-[100vh] flex flex-col justify-between">
        <Header />
        <Main>
          {props.children}
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default Page;