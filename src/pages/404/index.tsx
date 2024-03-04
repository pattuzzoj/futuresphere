import { useI18n } from "../../i18n";
import { Header, Main, Section, Aside, Footer } from "../../components/layout";
import { Title, Text, Link, Card } from "../../components/ui";
import notFound from '../../assets/images/404/404.svg';

export default function Home() {
  return (
    <>
    <div class="flex flex-col justify-between h-[100vh]">
      <Header />
      <Main>
        <div class="flex flex-col items-center gap-2 md:-mt-4">
          <img class="w-100 max-w-[60rem]" src={notFound} alt="" />
          <Title level="1" class="text-3xl md:text-4xl !text-purple">Oops! Nothing to see here!</Title>
        </div>
      </Main>
      <Footer />
    </div>
    </>
  );
}
