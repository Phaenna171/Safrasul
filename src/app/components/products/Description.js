import Image from "next/image"
import { useContext } from "react"
import { ProductContext } from "@/app/products/context/ProductContext"

export default function Description() {
  const { datas, selectedCategory } = useContext(ProductContext)
  return (
    <>
      {/* Seção de texto */}
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 py-10 md:py-20">
        <h1 className="text-[#EF9D4B] font-openSans text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-start pb-4">
          {datas[selectedCategory].index.title}
        </h1>
        {datas[selectedCategory].index.paragraphs.map((paragraph, index) => (
        <div key={index}>
          <p className="py-4 text-center text-[#354D4D] font-openSans leading-6 sm:leading-7 md:leading-8 text-sm sm:text-base md:text-lg font-medium lg:text-start">
            {paragraph}
          </p>
        </div>
        ))}
      </div>

      {/* Seção da imagem */}
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 pb-10 md:pb-24">
        <div className="relative w-full h-auto">
          <Image
            src={datas[selectedCategory].index.url}
            alt={datas[selectedCategory].index.title}
            width={1460}
            height={822}
            objectFit="contain"
            className=""
          />
        </div>
      </div>
    </>
  )
}
