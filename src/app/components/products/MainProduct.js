'use client'
import { React, useRef, useContext } from 'react';
import Header from "../Header";
import ImageGrid from "./ImageGrid";
import Description from './Description';
import Footer from '../Footer';
import Semente from './Semente';
import Menu from './Menu';
import { ProductContext } from '../../products/context/ProductContext';


export default function MainProducts() {

  const { datas, selectedCategory, selectedSeed, handleSeedSelect } = useContext(ProductContext)
  const footerRef = useRef(null);

  return (
    <>
      <Header footerRef={footerRef} />
      {/* MENU */}
      <Menu />
      {/* Condicional: Exibe a grid ou a descrição da semente */}
      {selectedSeed === null ? (
        <div>
          <ImageGrid />

          <Description />
        </div>
      ) : (
        <Semente />
      )}
      <Footer ref={footerRef} />

    </>

  );
}
