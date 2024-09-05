import React, { useRef } from 'react';
import Slider from 'react-slick';

export default function QuemSomos() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
      <div className="grid grid-cols-1 md:grid-cols-2 pl-4 md:pl-8 lg:pl-16 py-8 gap-4 md:gap-8">
        {/* TEXTOS */}
        <div className="flex flex-col justify-center md:pl-8 lg:pl-16 text-center md:text-left">
          <h1 className="text-[#354D4D] font-openSans text-2xl md:text-3xl lg:text-4xl font-bold pt-4 md:pt-8">
            Quem Somos
          </h1>
          <p className="text-[#354D4D] font-openSans py-4 md:py-6 leading-7 font-medium lg:pr-32">
            Iniciamos nossas atividades em 1998, focados na produção beneficiamento e comercialização de sementes forrageiras. Hoje, somos líderes no mercado, oferecendo sementes de alta pureza e adaptadas a diversas condições climáticas e de solo, graças ao nosso compromisso com a excelência e ao investimento em pesquisa e desenvolvimento.
          </p>
          <button className="text-white bg-[#F07A10] py-2 px-4 md:py-2 md:px-6 lg:py-2 lg:px-8 rounded-full max-w-[220px] mx-auto md:mx-0">
            SAIBA MAIS
          </button>
          <div className="hidden lg:flex justify-center lg:justify-end mt-4 lg:mt-6 lg:pr-8">
            <img
              src="./icons/chevron-left-orange.svg"
              className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 cursor-pointer"
              alt="Chevron Left"
              onClick={goToPrev}
            />
            <img
              src="./icons/chevron-right-orange.svg"
              className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 ml-2 cursor-pointer"
              alt="Chevron Right"
              onClick={goToNext}
            />
          </div>
        </div>

        {/* SLIDER */}
        <div className="flex items-center lg:items-start mt-4 md:mt-0">
          <Slider ref={sliderRef} {...settings} className="overflow-hidden">
            <div>
              <img src="/imgs/quem-somos-slide1.jpg" alt="Imagem 1" className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] rounded-lg object-cover" />
            </div>
            <div>
              <img src="/imgs/quem-somos-slide2.jpg" alt="Imagem 2" className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] rounded-lg object-cover" />
            </div>
            <div>
              <img src="/imgs/quem-somos-slide3.jpg" alt="Imagem 3" className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] rounded-lg object-cover" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
