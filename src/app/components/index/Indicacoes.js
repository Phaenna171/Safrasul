import React, { useRef } from 'react';
import Slider from 'react-slick';

export default function Indicacoes() {

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false // Desativa as setas internas do slider

  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative bg-[#F2F2F2] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 overflow-hidden">
      <h1 className='text-center font-openSans font-bold text-xl md:text-4xl text-[#354D4D] md:pb-12 pt-8 md:pt-16'>Quem compra, indica</h1>
      <Slider className="h-full w-auto" ref={sliderRef} {...settings}>
        {/* SLIDE 1 */}
        <div className="relative flex items-center py-16 md:py-20 lg:py-24 px-4 md:px-7">
          <div className="absolute top-[15px] md:bottom-[250px] lg:bottom-[290px] xl:bottom-[380px] left-1/2 transform -translate-x-1/2">
            <img className='w-auto h-20 md:h-24 lg:h-28' src="/imgs/depoimento1.png" />
          </div>
          <div className="bg-white pt-6 md:pt-7 lg:pt-8 rounded-xl shadow-lg">
            <p className="text-center font-openSans text-[#354D4D] px-3 md:px-4 lg:px-5">
              <span className="text-4xl md:text-5xl lg:text-6xl text-[#84D360]">&quot;</span>As sementes forrageiras da Safrasul têm feito toda a diferença na minha propriedade. Germinação rápida e pastagens densas. Não poderia estar mais satisfeito!
            </p>
            <p className="pt-6 md:pt-7 lg:pt-8 pb-2 md:pb-3 font-openSans italic font-medium text-center">Fazenda Olho D’Água</p>
            <div className="py-1 bg-[#007608] rounded-b-xl"></div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="relative flex items-center py-16 md:py-20 lg:py-24 px-4 md:px-7">
          <div className="absolute top-[15px] md:bottom-[250px] lg:bottom-[290px] xl:bottom-[380px] left-1/2 transform -translate-x-1/2">
            <img className='w-auto h-20 md:h-24 lg:h-28' src="/imgs/depoimento2.png" />
          </div>
          <div className="bg-white pt-6 md:pt-7 lg:pt-8 rounded-xl shadow-lg">
            <p className="text-center font-openSans text-[#354D4D] px-3 md:px-4 lg:px-5">
              <span className="text-4xl md:text-5xl lg:text-6xl text-[#84D360]">&quot;</span>Depois de usar as sementes forrageiras da Safrasul, notei uma grande melhora na produtividade do meu rebanho. Produto de qualidade e atendimento sempre eficaz. Recomendo!
            </p>
            <p className="pt-6 md:pt-7 lg:pt-8 pb-2 md:pb-3 font-openSans italic font-medium text-center">Fazenda Água Branca            </p>
            <div className="py-1 bg-[#007608] rounded-b-xl"></div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className="relative flex items-center py-16 md:py-20 lg:py-24 px-4 md:px-7 h-full">
          <div className="absolute top-[15px] md:bottom-[250px] lg:bottom-[290px] xl:bottom-[380px] left-1/2 transform -translate-x-1/2">
            <img className='w-auto h-20 md:h-24 lg:h-28' src="/imgs/depoimento3.png" />
          </div>
          <div className="bg-white pt-6 md:pt-7 lg:pt-8 rounded-xl shadow-lg h-full">
            <p className="text-center font-openSans text-[#354D4D] px-3 md:px-4 lg:px-5">
              <span className="text-4xl md:text-5xl lg:text-6xl text-[#84D360]">&quot;</span>
              A Safrasul se destaca pela qualidade dos seus produtos e um atendimento excepcional. Estou muito satisfeito e recomendo a todos!
            </p>
            <p className="pt-6 md:pt-7 lg:pt-[56px] pb-2 md:pb-3 font-openSans italic font-medium text-center">Arlinho Castro – Fazenda Nossa Senhora das Graças</p>
            <div className="py-1 bg-[#007608] rounded-b-xl"></div>
          </div>
        </div>
      </Slider>

      {/* Chevron Left & Right */}
      <img
        src="./icons/chevron-left-green.svg"
        className="absolute top-[60%] left-0 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 cursor-pointer"
        alt="Chevron Left"
        onClick={goToPrev}
      />
      <img
        src="./icons/chevron-right-green.svg"
        className="absolute top-[60%] right-0 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 cursor-pointer"
        alt="Chevron Right"
        onClick={goToNext}
      />
    </div>
  );
}
