import { RouteSectionProps } from "@solidjs/router";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

interface LayoutProps extends RouteSectionProps {}

function Layout(props: LayoutProps) {
  return (
    <div class="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout;