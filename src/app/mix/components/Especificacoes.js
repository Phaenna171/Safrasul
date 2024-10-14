import Image from "next/image"
import { useContext } from "react";
import { MixContext } from "../context/MixContext";




export default function Especificacoes() {

  const { selectedMix, dataCobertura } = useContext(MixContext)

  return (
    <>
      <div className="relative px-4 md:px-52 py-20">
        <div className="absolute inset-0 h-[35%] md:h-[45%] bg-[#F2F2F2] z-0"></div>
        <div className="relative z-10 flex gap-x-20 pb-2 md:pb-0 md:gap-x-16">
          <Image
            src={dataCobertura[selectedMix].img}
            alt="Semente"
            width={300}
            height={93.02}
            className="w-40 md:w-80"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-[#0F6035] text-5xl md:text-6xl font-effra">{dataCobertura[selectedMix].titulo}</h1>
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
            {dataCobertura[selectedMix].lista.map((item, index) => (
              <li key={index} className="font-openSans font-medium text-[#414141] tracking-wider"><span className="pr-2">&bull;</span>{item}</li>
            ))}
          </ul>

          <div className="py-8 md:pr-20 flex flex-col items-end md:items-start">
            <h1 className="text-[#414141] font-openSans font-bold md:text-xl">{dataCobertura[selectedMix].recomendacao}</h1>
            <div className="bg-[#00AC64] rounded-xl py-4 px-6 mt-4 w-[80%]">
              <p className="font-openSans text-xs text-white">{dataCobertura[selectedMix].epoca}</p>
              <p className="font-openSans text-lg font-bold underline underline-offset-4 text-[#032A29]">Out - Mar</p>
              <p className="font-openSans text-xs text-white">Manejo</p>
              <p className="text-[#032A29] font-openSans text-lg font-bold">{dataCobertura[selectedMix].manejo}</p>
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