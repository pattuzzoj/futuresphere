import { useI18n } from "../../i18n";
import MetaData from "../../components/meta";
import { Header, Footer } from "../../components/layout";
import {
  Accordion,
  Button,
  Dropdown,
  Icon,
  Link,
  List,
  Slide,
  Title,
} from "../../components/ui";

export default function Home() {
  const t = useI18n("home");

  return (
    <>
      <MetaData/>
      <Header />
      <main>
        
      </main>
      <Footer />
    </>
  );
}
