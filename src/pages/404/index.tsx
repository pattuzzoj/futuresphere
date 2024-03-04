import { useI18n } from "../../i18n";
import { Header, Main, Footer } from "../../components/layout";
import { Title } from "../../components/ui";
import notFound from '../../assets/images/404/404.svg';

export default function NotFound() {
  const t = useI18n("notFound");

  return (
    <>
    <div class="flex flex-col justify-between h-[100vh]">
      <Header />
      <Main>
        <div class="flex flex-col items-center gap-2 md:-mt-4 w-100">
          <img class="w-100 max-w-5xl" src={notFound} alt="" />
          <Title level="1" class="text-3xl md:text-4xl !text-purple">{t("text")}</Title>
        </div>
      </Main>
      <Footer />
    </div>
    </>
  );
}
