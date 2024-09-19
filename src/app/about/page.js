"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainAbout from "../components/about/MainAbout"
import React, { useRef } from "react";


export default function About(){
  const footerRef = useRef(null);

  return (
    <>
      <Header footerRef={footerRef}/>
      <MainAbout/>
      <Footer ref={footerRef}/>
    </>
  )
}