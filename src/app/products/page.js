'use client'
import { ProductProvider } from './context/ProductContext';
import MainProducts from '../components/products/MainProduct';

export default function ProductsPage() {
  return (
    <>
      <ProductProvider>
        <MainProducts />
      </ProductProvider>
    </>
  )
}
