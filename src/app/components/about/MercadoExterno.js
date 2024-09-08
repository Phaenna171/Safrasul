import Image from "next/image"

export default function MercadoExterno() {
  return (
    <>
      {/* MERCADO EXTERNO */}
      <div className="bg-[url('/imgs/mercado-externo-bg.png')] bg-cover bg-mercadoExterno grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 xl:px-40 gap-12 sm:gap-24 md:gap-32 lg:gap-60 py-16 sm:py-24 md:py-32">
        <div className="flex flex-col items-center md:items-start md:col-start-2">
          <h1 className="text-[#EF9D4B] font-openSans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-start pb-4 sm:pb-6 md:pb-8">
            Mercado Externo
          </h1>
          <p className="text-center text-[#354D4D] font-openSans leading-5 sm:leading-6 md:leading-7 lg:leading-8 text-sm sm:text-base md:text-lg font-medium md:text-start pb-4 sm:pb-5 md:pb-6 lg:pb-8 pr-0 xl:pr-12">
            Atuamos no Paraguai, Bolívia, Equador, República Dominicana, Nicarágua, Panamá, Guatemala e em países africanos como Senegal, Angola e África do Sul. Com nossa sucursal Safrasul Colômbia SAS em Medellín, fortalecemos nossa presença internacional, oferecendo produtos de alta qualidade para uma demanda em constante crescimento.
          </p>
        </div>
      </div>

    </>
  )
}