import React, { useRef } from "react";
import Header from "../components/Header";
import MainIndex from "../components/index/MainIndex";
import Footer from "../components/Footer";
import GrupoWhatsApp from "../components/index/GrupoWhatsApp";

export default function Home() {
  const footerRef = useRef(null);

  return (
    <>
      <GrupoWhatsApp />
      <Header footerRef={footerRef} />
      <MainIndex />
      <Footer ref={footerRef} />
    </>
  );
}
