"use client"

import HeaderBlog from "../components/blog/HeaderBlog"
import MainBlog from "../components/blog/MainBlog";
import Footer from "../components/Footer"
import React, { useRef } from "react";
import { BlogProvider } from "./context/BlogContext";


export default function Blog() {
  const footerRef = useRef(null);

  return (
    <>
      <BlogProvider>
        <HeaderBlog footerRef={footerRef} />
        <MainBlog />
        <Footer ref={footerRef} />
      </BlogProvider>
    </>
  )
}


