import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import GrupoWhatsApp from "../components/GrupoWhatsApp";
export default function Home() {

  return (
    <>
      <GrupoWhatsApp />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
