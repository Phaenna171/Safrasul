import Image from "next/image"
import { MixContext } from "../context/MixContext"
import { useContext } from "react";

export default function MenuMix() {

  const { selectedMenu, setSelectedMenu } = useContext(MixContext)

  const handleSelectedMenu = (menu) => {
    setSelectedMenu(menu)
  }

  return (
    <>
      <>
        <div className="bg-[#F8F8F8] flex justify-center justify-between px-4 md:px-48 py-10">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imgs/menu-gramineas.png"
              alt="Gramíneas"
              width={80}
              height={93.02}
              className={`w-16 md:w-20 h-auto cursor-pointer ${selectedMenu === "gramineas" ? "" : "grayscale opacity-[.65]"
                }`}
              onClick={() => handleSelectedMenu('gramineas')}
            />
            <p className="text-[#818181] font-openSans text-sm">Gramíneas</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imgs/menu-leguminosas.png"
              alt="Leguminosas"
              width={80}
              height={93.02}
              className={`w-16 md:w-20 h-auto cursor-pointer ${selectedMenu === "leguminosas" ? "" : "grayscale opacity-[.25]"
                }`}
              onClick={() => handleSelectedMenu('leguminosas')}
            />
            <p className="text-[#818181] font-openSans text-sm">Leguminosas</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imgs/menu-asteraceas.png"
              alt="Asteráceas"
              width={80}
              height={93.02}
              className={`w-16 md:w-20 h-auto cursor-pointer ${selectedMenu === "asteraceas" ? "" : "grayscale opacity-[.90]"
                }`}
              onClick={() => handleSelectedMenu('asteraceas')}
            />
            <p className="text-[#818181] font-openSans text-sm">Asteráceas</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imgs/menu-poligonaceas.png"
              alt="Poligonáceas"
              width={80}
              height={93.02}
              className={`w-16 md:w-20 h-auto cursor-pointer ${selectedMenu === "poligonaceas" ? "" : "grayscale opacity-[.28]"
                }`}
              onClick={() => handleSelectedMenu('poligonaceas')}
            />
            <p className="text-[#818181] font-openSans text-sm">Poligonáceas</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imgs/menu-brassicas.png"
              alt="Brássicas"
              width={80}
              height={93.02}
              className={`w-16 md:w-20 h-auto cursor-pointer ${selectedMenu === "brassicas" ? "" : "grayscale opacity-[.40]"
                }`}
              onClick={() => handleSelectedMenu('brassicas')}
            />
            <p className="text-[#818181] font-openSans text-sm">Brássicas</p>
          </div>
        </div>
      </>
    </>
  )
}