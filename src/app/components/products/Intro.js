import { useContext } from "react"
import { ProductContext } from "@/app/products/context/ProductContext"
import Image from "next/image"

export default function Intro() {

  const { datas, selectedCategory, selectedSeed } = useContext(ProductContext)
  return (
    <>
      <div className="grid grid-rows-3 bg-cover bg-center px-16 xl:px-56 py-10"
        style={{
          backgroundImage: `url(${datas[selectedCategory].intro[selectedSeed].img})`
        }}
      >
        <div className="row-start-3 row-span-1 w-[250px]">
          <h1 className="font-effra text-3xl  md:text-start md:text-4xl lg:text-5xl text-white leading-8">{datas[selectedCategory].cabecalho[selectedSeed].title}</h1>
          <p className="font-openSans text-xl  font-light leading-5 text-white break-words whitespace-normal">
            {datas[selectedCategory].intro[selectedSeed].txt}
          </p>
          <button className="text-white mt-4 bg-[#F07A10] text-xs py-1 px-4 md:py-1 md:px-6 rounded-full">
            FAÇA SUA COTAÇÃO
          </button>
        </div>
      </div>
    </>
  )
}