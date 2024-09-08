import Image from "next/image"

export default function CamposProducao() {
  return (
    <>
      {/* CAMPOS DE PRODUÇÃO */}
      <div className="relative bg-[url('/imgs/campos-de-producao.png')] bg-center bg-cover px-4 sm:px-8 md:px-12 lg:px-24 xl:px-[285px] py-20 sm:py-24 md:py-28 lg:py-32">
        <h1 className="text-white font-openSans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left pb-6 sm:pb-8 md:pb-10 lg:pb-12">
          Campos de produção = Garantia da entrega
        </h1>
        <div className="bg-[#EC732E] px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 rounded-lg">
          <p className="text-center text-white font-openSans leading-5 sm:leading-6 md:leading-7 lg:leading-8 text-sm sm:text-base md:text-lg lg:text-xl">
            Com nosso controle rigoroso da produção, garantimos a entrega. Nossos campos, registrados no MAPA (Ministério da Agricultura, Pecuária e Abastecimento), são monitorados por engenheiros agrônomos do nosso Departamento Técnico desde o plantio até a colheita.
          </p>
        </div>
      </div>

    </>
  )
}