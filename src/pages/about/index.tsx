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

export default function About() {
  const t = useI18n("about");

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
