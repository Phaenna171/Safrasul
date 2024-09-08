'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';


export default function Aliancas() {
  
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    fade: true,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      {/* ALIANÇAS ESTRATÉGICAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 sm:px-12 md:px-16 lg:px-40 py-12 md:py-24 gap-8">
        <div>
          <h1 className="text-[#EF9D4B] font-openSans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-start pb-4 sm:pb-6 md:pb-8">
            Alianças Estratégicas
          </h1>
          <p className="text-center md:text-start text-[#354D4D] font-openSans leading-5 sm:leading-6 md:leading-7 lg:leading-8 text-sm sm:text-base md:text-lg font-medium pb-4 sm:pb-5 md:pb-6 lg:pb-8 pr-0 xl:pr-12">
            Desde 2002, somos parte do Grupo UNIPASTO, que apoia a pesquisa científica para o desenvolvimento de novas cultivares forrageiras e o fortalecimento agropecuário nacional. Em parceria com a EMBRAPA/UNIPASTO, participamos do lançamento de diversas sementes com qualidade comprovada.
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 lg:gap-8 md:flex-row md:items-center justify-center">
          <img src="/icons/chevron-left-green.svg" onClick={goToPrev} className=" cursor-pointer" />
          <Slider ref={sliderRef} {...settings} className='w-[200px] h-auto lg:w-[300px] md:h-auto custom-slider'>
            <div className="flex justify-center items-center">
              <img src="/imgs/embrapa.png" alt='Embrapa Logo' className="w-auto h-20 sm:h-24 md:h-28" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/imgs/unipasto.png" alt='Unipasto Logo' className="w-auto h-20 sm:h-24 md:h-28" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/imgs/dlf.png" alt='DLF Logo' className="w-auto h-20 sm:h-24 md:h-28" />
            </div>
          </Slider>
          <img src="/icons/chevron-right-green.svg" onClick={goToNext} className=" cursor-pointer" />
        </div>
      </div>

    </>
  )
}