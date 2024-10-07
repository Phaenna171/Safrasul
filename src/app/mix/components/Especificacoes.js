import Image from "next/image"


export default function Especificacoes() {
  return (
    <>
      <div className="relative px-4 md:px-52 py-20">
        <div className="absolute inset-0 h-[35%] md:h-[45%] bg-[#F2F2F2] z-0"></div>
        <div className="relative z-10 flex gap-x-20 pb-2 md:pb-0 md:gap-x-16">
          <Image
            src="/imgs/mix-palha.png"
            alt="Semente"
            width={300}
            height={93.02}
            className="w-40 md:w-80"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-[#0F6035] text-5xl md:text-6xl font-effra">Mix Palha</h1>
            <Image
              src="/imgs/selo-embrapa.png"
              alt="selo embrapa"
              width={40}
              height={40}
              className="object-contain "
            />
          </div>

        </div>

        <div className=" relative z-10 flex justify-between">
          <ul className="space-y-2 py-8">
            <li className="font-openSans font-medium text-[#414141] tracking-wider"><span className="pr-2">&bull;</span>Crotalária Ochroleuca</li>
            <li className="font-openSans font-medium text-[#414141] tracking-wider"><span className="pr-2">&bull;</span>Guando Forrageiro</li>
            <li className="font-openSans font-medium text-[#414141] tracking-wider"><span className="pr-2">&bull;</span>Brachiaria Ruziziensis</li>
            <li className="font-openSans font-medium text-[#414141] tracking-wider"><span className="pr-2">&bull;</span>Brachiaria Brizantha Piatã</li>
            <li className="font-openSans font-medium text-[#414141] tracking-wider"><span className="pr-2">&bull;</span>Milheto BRS 1501</li>
          </ul>

          <div className="py-8 md:pr-20 flex flex-col items-end md:items-start">
            <h1 className="text-[#414141] font-openSans font-bold md:text-xl">Recomendação - 20 KG/Ha</h1>
            <div className="bg-[#00AC64] rounded-xl py-4 px-6 mt-4 w-[80%]">
              <p className="font-openSans text-xs text-white">Época de plantio:</p>
              <p className="font-openSans text-lg font-bold underline underline-offset-4 text-[#032A29]">Out - Mar</p>
              <p className="font-openSans text-xs text-white">Manejo</p>
              <p className="text-[#032A29] font-openSans text-lg font-bold">80 a 100 dias</p>
            </div>
          </div>
        </div>


        <div className="relative z-10 flex gap-x-4">
          <div className="text-center w-10 h-10 rounded-full bg-[#08663B]">
            <p className="pt-2 text-white">N</p>
          </div>
          <div className="text-center w-10 h-10 rounded-full bg-[#EF1D20]">
            <p className="pt-2 text-white">K</p>
          </div>
        </div>
      </div>
    </>
  )
}