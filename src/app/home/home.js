import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import GrupoWhatsApp from "../components/GrupoWhatsApp";
export default function Home() {

  return (
    <>
      <Head>
        <title>Safrasul Sementes</title>
      </Head>
      <GrupoWhatsApp />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
