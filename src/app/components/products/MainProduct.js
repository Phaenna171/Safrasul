'use client'
import { useContext } from 'react';
import Header from "../Header";
import ImageGrid from "./ImageGrid";
import Description from './Description';
import Footer from '../Footer';
import Semente from './Semente';
import Menu from './Menu';
import { ProductContext } from '../../products/context/ProductContext';


export default function MainProducts() {

  const { datas, descriptions, selectedCategory, selectedSeed, handleSeedSelect } = useContext(ProductContext)

  return (
    <>
      <Header />
      {/* MENU */}
      <Menu />
      {/* Condicional: Exibe a grid ou a descrição da semente */}
      {selectedSeed === null ? (
        <div>
          <ImageGrid
            images={datas[selectedCategory].images}
            titles={datas[selectedCategory].titles}
            descriptions={datas[selectedCategory].descriptions}
            onImageClick={handleSeedSelect} // Passa a função para o componente ImageGrid
          />

          <Description/>
        </div>
      ) : (
        <Semente />
      )}
      <Footer />

    </>

  );
}
