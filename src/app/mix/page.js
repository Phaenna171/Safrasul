'use client'
import React, { useRef } from "react";
import HeaderMix from "./components/HeaderMix";
import Footer from "../components/Footer";
import { MixProvider } from "./context/MixContext";
import MainMix from "./components/MainMix";

export default function Mix() {
  const footerRef = useRef(null);

  return (
    <>
      <MixProvider>
        <HeaderMix footerRef={footerRef} />
        <MainMix />
        <Footer ref={footerRef} />
      </MixProvider>
    </>
  );
}
