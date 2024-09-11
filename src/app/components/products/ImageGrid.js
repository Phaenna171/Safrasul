"use client"
import Image from "next/image"
import { useState } from 'react';

export default function ImageGrid({ images, titles, descriptions, onImageClick }) {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    onImageClick(index); // Chama a função recebida como prop para setar a semente selecionada
  };

  const isImageSelected = (index) => selectedImage === index;

  return (
    <>
      {/* LAYER PRODUTOS */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] lg:h-[350px] cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt={titles[index]}
              layout="fill"
              objectFit="cover"
              className={isImageSelected(index) ? "" : "grayscale brightness-50"}
            />
            <h1 className='text-white absolute font-openSans font-bold text-base sm:text-2xl lg:text-3xl top-4 sm:top-8 left-2 sm:left-4'>{titles[index]}</h1>
            <p className="text-white absolute font-openSans font-light text-sm sm:text-base sm:font-medium top-10 sm:top-16 left-2 sm:left-4">{descriptions[index]}</p>
          </div>
        ))}
      </div>
    </>
  );
}
