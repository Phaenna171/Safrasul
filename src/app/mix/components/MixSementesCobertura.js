import Image from "next/image"
import { useContext } from "react";
import { MixContext } from "../context/MixContext";


export default function MixSementesCobertura() {

  const { setSelectedMix } = useContext(MixContext)

  const handleSelectedMix = (value) => {
    setSelectedMix(value)
  }

  return (
    <>
      <div className="bg-[#F8F8F8] px-8 md:px-20 py-16">
        <h1 className="text-[#EC732E] text-4xl font-openSans font-bold text-center pb-16">Mix de Sementes de Culturas de Cobertura</h1>
        <div className="grid grid-cols-4 gap-x-8 md:gap-x-0">
          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-80"
            onClick={() => handleSelectedMix("palha")}
          >
            <Image
              src="/imgs/mix-palha.png"
              alt="Palha"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
              Mix Palha
            </p>
          </div>

          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-50"
            onClick={() => handleSelectedMix("integra")}
          >
            <Image
              src="/imgs/mix-integra.png"
              alt="Integra"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
              Mix Integra
            </p>
          </div>

          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-50"
            onClick={() => handleSelectedMix("meuSolo")}
          >
            <Image
              src="/imgs/mix-meu-solo.png"
              alt="Meu Solo"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
              Mix Meu Solo
            </p>
          </div>

          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-50"
            onClick={() => handleSelectedMix("fast")}
          >
            <Image
              src="/imgs/mix-fast.png"
              alt="Mix Fast Plants"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
              Mix Fast Plants
            </p>
          </div>

          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-50"
            onClick={() => handleSelectedMix("milhosr")}
          >
            <Image
              src="/imgs/mix-consorcio-sr.png"
              alt="Mix Consórcio Milho SR 14"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
            Mix Milho<br />Semente SR 14
            </p>
          </div>

          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-50"
            onClick={() => handleSelectedMix("milhosp")}
          >
            <Image
              src="/imgs/mix-consorcio-sp.png"
              alt="Mix Consórcio Milho SP 14"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
              Mix Milho<br />Semente SR 14
            </p>
          </div>

          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-50"
            onClick={() => handleSelectedMix("cana")}
          >
            <Image
              src="/imgs/mix-cana.png"
              alt="Mix Cana"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
              Mix Cana
            </p>
          </div>

          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-50"
            onClick={() => handleSelectedMix("cafe")}
          >
            <Image
              src="/imgs/mix-café.png"
              alt="Mix Café"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
              Mix Café
            </p>
          </div>

          <div className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-50"
            onClick={() => handleSelectedMix("winter")}
          >
            <Image
              src="/imgs/mix-winter.png"
              alt="Mix Winter"
              width={150}
              height={93.02}
              className=""
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
              Mix Winter
            </p>
          </div>
        </div>
      </div>
    </>
  )
}