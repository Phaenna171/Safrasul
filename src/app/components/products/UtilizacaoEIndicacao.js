import { useContext } from "react";
import { ProductContext } from "@/app/products/context/ProductContext";
import Image from "next/image"

export default function UtilizacaoEIndicacao() {

  const {datas, selectedCategory, selectedSeed } = useContext(ProductContext)

  return (
    <>
      {/* UTILIZAÇÃO E INDICAÇÃO */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-16 md:px-16 lg:px-28 xl:px-60 pt-16 xl:pt-0 pb-8 md:pb-16">

        {/* UTILIZAÇÃO */}
        <div className="flex flex-col w-full md:w-auto">
          <h1 className="font-openSans text-lg md:text-xl font-bold text-[#136736] pl-4 pb-4">Utilização</h1>
          <div className="relative bg-[#E7F1E9] flex px-4 py-4 gap-4 rounded-xl items-end justify-center">
            {datas[selectedCategory].utilizacoes[selectedSeed].map((utilizacao, index) => (
              <Image
                key={index}
                src={utilizacao}
                alt={utilizacao}
                height={80}
                width={80}
                className="object-contain h-[60px] md:h-[80px] w-auto"
              />
            ))}
        </div>
        </div>

        {/* INDICAÇÃO */}
        <div className="flex flex-col w-full md:w-auto">
          <h1 className="font-openSans text-lg md:text-xl font-bold text-[#136736] pl-4 pb-4">Indicação</h1>
          <div className="relative bg-[#E7F1E9] flex px-4 py-4 gap-4 rounded-xl items-end justify-center">
            {datas[selectedCategory].indicacoes[selectedSeed].map((indicacao, index) => (
              <Image
                key={index}
                src={indicacao}
                alt={indicacao}
                height={80}
                width={80}
                className="object-contain h-[60px] md:h-[80px] w-auto"
              />
            ))}
          </div>
        </div>
      </div>

    </>
  )
}
