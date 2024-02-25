import { useI18n } from "../../i18n";
import MetaData from "../../components/meta";
import { Header, Footer } from "../../components/layout";

export default function Contact() {
  const t = useI18n("contact");

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
