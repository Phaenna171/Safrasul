import { useContext } from "react";
import { ProductContext } from "@/app/products/context/ProductContext";

export default function UtilizacaoEIndicacao() {

  const { datas, selectedCategory, selectedSeed } = useContext(ProductContext)

  return (
    <>
      {/* TABELA */}
      <div className="px-4 md:px-40 lg:px-80 pb-16">
        <p className="bg-[#4C9162] text-white font-effra py-1 pl-8">MORFOLOGIA</p>

        {/* Definindo um limite de altura e overflow-y para a rolagem */}
        <div className="relative max-h-64 overflow-y-auto table-scroll">
          {datas[selectedCategory].infosTabelaNome[selectedSeed].map((info, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 py-1 px-8 ${index % 2 !== 0 ? 'bg-[#ACD3B8]' : 'bg-[#EAFCF0]'
                }`}
            >
              <p className="col-span-3 col-start-1 font-openSans font-medium">{info}</p>
              <p className="col-span-1 col-start-4 font-openSans font-medium">{datas[selectedCategory].infosTabelaValor[selectedSeed][index]}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}