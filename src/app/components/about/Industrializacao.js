import Image from "next/image"

export default function Industrializacao() {
  return (
    <>
      {/* INDUSTRIALIZAÇÃO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-6 sm:px-12 md:px-20 xl:px-40 gap-8 md:gap-16 lg:gap-8 xl:gap-32 py-16 lg:py-24 items-center">
        <div>
          <h1 className="text-[#EF9D4B] font-openSans text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-start pb-8 md:py-8 lg:pb-8 pr-0 md:pr-16">
            Industrialização em UBS próprias
          </h1>
          <p className="text-center text-[#354D4D] font-openSans leading-6 sm:leading-7 md:leading-8 lg:leading-8 text-sm sm:text-base md:text-lg font-medium md:text-start">
            Todas as sementes são industrializadas em nossas UBS, onde o processo é rigorosamente controlado por profissionais focados na qualidade. Após análise laboratorial inicial de pureza, germinação, vigor, umidade e espécies nocivas, as sementes são processadas conforme o Protocolo de Controle Interno de Qualidade (CIC), em conformidade com o MAPA e órgãos reguladores do setor. Nossa UBS em Formoso-GO tem capacidade para processar XXXX toneladas de produto acabado.
          </p>
        </div>
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px]">
          <Image
            src="/imgs/industrializacao.png"
            alt="Industrialização"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <p className="absolute left-8 bottom-8 text-white font-openSans text-lg sm:text-xl md:text-2xl font-bold">
            UBS Campo Grande
          </p>
        </div>
      </div>

    </>
  )
}