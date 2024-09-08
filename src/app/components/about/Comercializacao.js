import Image from "next/image"

export default function Comercializacao() {
  return (
    <>
      {/* COMERCIALIZAÇÃO */}
      <div className="bg-[#F2F2F2] relative">
        <div className="absolute flex flex-row  justify-center gap-8 sm:gap-12 left-1/2 transform -translate-x-1/2 pt-6 sm:pt-0 -top-8 md:-top-8 xl:-top-12">
          <div className="flex flex-col items-center">
            <Image
              src="/imgs/vendedores-internos.svg"
              alt="Ícone Vendedores Internos"
              width={80} // Tamanho ajustado para mobile
              height={80} // Tamanho ajustado para mobile
              className="sm:w-24 sm:h-24 md:w-28 md:h-28" // Ajustes responsivos
            />
            <p className="text-[#354D4D] font-openSans text-center text-xs sm:text-sm md:text-base font-bold">
              Vendedores<br />Internos
            </p>
          </div>
          <div className="flex flex-col items-center sm:px-8 md:px-24">
            <Image
              src="/imgs/vendedores-externos.svg"
              alt="Ícone Vendedores Externos"
              width={80} // Tamanho ajustado para mobile
              height={80} // Tamanho ajustado para mobile
              className="sm:w-24 sm:h-24 md:w-28 md:h-28" // Ajustes responsivos
            />
            <p className="text-[#354D4D] font-openSans text-center text-xs sm:text-sm md:text-base font-bold">
              Vendedores<br />Externos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/imgs/e-commerce.svg"
              alt="Ícone E-commerce"
              width={80} // Tamanho ajustado para mobile
              height={80} // Tamanho ajustado para mobile
              className="sm:w-24 sm:h-24 md:w-28 md:h-28" // Ajustes responsivos
            />
            <p className="text-[#354D4D] font-openSans text-center text-xs sm:text-sm md:text-base font-bold whitespace-nowrap">
              E-commerce
            </p>
          </div>
        </div>

        <div className="px-6 sm:px-12 md:px-40 lg:px-40 xl:px-72 pb-16 md:pb-20 lg:pb-40 pt-36 md:pt-44">
          <h1 className="text-[#EF9D4B] font-openSans text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-start pb-8">
            Estrutura de Comercialização
          </h1>
          <p className="text-center text-[#354D4D] font-openSans leading-6 sm:leading-7 md:leading-8 lg:leading-7 text-sm sm:text-base md:text-lg font-medium lg:text-start pb-5">
            Além da matriz comercial em Campo Grande – MS, contamos com uma filial e Centro de Distribuição em Formoso – GO, e uma filial comercial em Montes Claros – MG.
          </p>
          <p className="text-center text-[#354D4D] font-openSans leading-6 sm:leading-7 md:leading-8 lg:leading-7 text-sm sm:text-base md:text-lg font-medium lg:text-start pb-5">
            Atendemos todo o território nacional por diversos canais simultaneamente, com uma equipe de vendas formada por engenheiros agrônomos, zootecnistas, técnicos em agropecuária e especialistas em vendas técnicas. Além disso, nossa loja online permite atendimento em todo o Brasil.
          </p>
          <p className="text-center text-[#354D4D] font-openSans leading-6 sm:leading-7 md:leading-8 lg:leading-7 text-sm sm:text-base md:text-lg font-medium lg:text-start">
            Com parcerias comerciais sólidas e uma rede de representantes externos, garantimos presença nas principais regiões produtoras.
          </p>
        </div>
      </div>
    </>
  )
}