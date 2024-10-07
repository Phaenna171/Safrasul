"use client";
import Home from "./home";
import { ProductProvider } from "./products/context/ProductContext";
export default function Example() {
  return (
    <>
      <ProductProvider>
        <Home />
      </ProductProvider>
    </>
  );
}
