import Image from "next/image";
import { useContext } from 'react';
import { ProductContext } from "@/app/products/context/ProductContext";

export default function ImageGrid() {
  const { datas, selectedCategory, selectedSeed, setSelectedSeed } = useContext(ProductContext);

  const handleImageClick = (index) => {
    setSelectedSeed(index);
  };

  return (
    <>
      {/* LAYER PRODUTOS */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
        {datas[selectedCategory].grid.images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] lg:h-[350px] cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt={datas[selectedCategory].grid.titles[index]}
              layout="fill"
              objectFit="cover"
              className="grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
              unoptimized='true'
            />
            <h1 className="text-white absolute font-openSans font-bold text-base sm:text-2xl lg:text-3xl top-4 sm:top-8 left-2 sm:left-4">
              {datas[selectedCategory].grid.titles[index]}
            </h1>
            <p className="text-white absolute font-openSans font-light text-sm sm:text-base sm:font-medium top-10 sm:top-16 left-2 sm:left-4">
              {datas[selectedCategory].grid.descriptions[index]}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
