import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { JSX } from "solid-js";

interface LayoutProps {
  children?: JSX.Element;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout;