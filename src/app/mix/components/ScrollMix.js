import { useContext } from "react";
import { MixContext } from "../context/MixContext";

import Image from "next/image"

export default function ScrollMix() {

  const { datas, selectedMenu } = useContext(MixContext)

  return (
    <>
      <div className="py-4 bg-white flex gap-x-12 md:gap-x-36 items-end px-4 md:px-40 overflow-x-auto table-scroll-mix">
        {Object.values(datas[selectedMenu].menu).map((items, index) => (
          <div key={index} className="shrink-0 flex flex-col  items-center">
            <Image
              src={items.url}
              alt="Semente"
              width={150}
              height={93.02}
              className="w-24 h-auto md:w-36"
            />
            <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold">
              {items.nome}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
