import React, { useRef } from 'react';
import Slider from 'react-slick';

export default function Diferenciais() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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

      <Slider ref={sliderRef} {...settings} className=' overflow-hidden'>
        {/* SLIDE 1 */}
        <div className='pb-6'>
          <div className='flex flex-col md:flex-row'>
            {/* COLUNA DE TEXTO */}
            <div className='md:w-1/2 md:pl-16 lg:pl-40 md:pr-8 px-2 md:px-0'>
              <h1 className="text-[#EF9D4B] font-openSans text-3xl text-center md:text-start md:text-4xl font-bold pt-16">
                Diferenciais
              </h1>
              <h2 className="text-[#354D4D] font-openSans text-2xl text-center md:text-start font-semibold pt-4">
                Tecnologia Xtra
              </h2>
              <p className="text-center text-[#354D4D] font-openSans py-4 md:text-start leading-7 font-medium md:pr-12">
                Desenvolvida com exclusividade pelo nosso Departamento de Pesquisa e Desenvolvimento, permite oferecer ao mercado um produto com qualidade superior às demais sementes concorrentes.
              </p>
              <div className="flex justify-center md:justify-end mt-0 pb-6 lg:pt-12 md:pb-0">
                <img
                  src="./icons/chevron-left-orange.svg"
                  className="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                  alt="Chevron Left"
                  onClick={goToPrev}
                />
                <img
                  src="./icons/chevron-right-orange.svg"
                  className="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                  alt="Chevron Right"
                  onClick={goToNext}
                />
              </div>
            </div>

            {/* COLUNA DE IMAGEM */}
            <div className='bg-[#EF9D4B] md:w-1/2 flex justify-center items-center relative py-8 md:py-36'>
              <img src='/imgs/diferenciais-slide3.png' className='w-auto h-80' alt="Tecnologia Xtra" />
            </div>

            {/* CAPIM */}
            <img src='/imgs/capim.png' className='absolute bottom-0 left-0 w-full' alt="Capim" />
          </div>
        </div>


        {/* SLIDE 2 */}
        <div className='pb-6'>
          <div className='flex flex-col md:flex-row'>
            {/* COLUNA DE TEXTO */}
            <div className='md:w-1/2 md:pl-16 lg:pl-40 md:pr-8 px-2 md:px-0'>
              <h1 className="text-[#EF9D4B] font-openSans text-3xl text-center md:text-start md:text-4xl font-bold pt-16">
                Diferenciais
              </h1>
              <h2 className="text-[#354D4D] font-openSans text-2xl text-center md:text-start font-semibold pt-4">
                Sementes Revestidas
              </h2>
              <p className="text-center text-[#354D4D] font-openSans pt-4 pb-2 md:pb-0 md:text-start sm:leading-5  lg:leading-7 font-medium md:pr-12">
                Com total expertise do processo de revestimento de sementes, a Safrasul produz as sementes REVESTIDAS a partir das sementes de Alta Pureza, com elevada qualidade, uniformidade e acabamento, o que permite melhoria na distribuição e desempenho das sementes no campo.
              </p>
              <div className="flex justify-center md:justify-end mt-4 sm:mt-3 pb-8 md:pt-2 md:pb-0">
                <img
                  src="./icons/chevron-left-orange.svg"
                  className="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                  alt="Chevron Left"
                  onClick={goToPrev}
                />
                <img
                  src="./icons/chevron-right-orange.svg"
                  className="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                  alt="Chevron Right"
                  onClick={goToNext}
                />
              </div>
            </div>

            {/* COLUNA DE IMAGEM */}
            <div className='bg-[#EF9D4B] md:w-1/2 flex justify-center items-center relative py-8 md:py-36'>
              <img src='/imgs/diferenciais-slide2.png' className='w-auto h-80' alt="Tecnologia Xtra" />
            </div>

            {/* CAPIM */}
            <img src='/imgs/capim.png' className='absolute bottom-0 left-0 w-full' alt="Capim" />
          </div>
        </div>



        {/* SLIDE 3 */}
        <div className='pb-6'>
          <div className='flex flex-col md:flex-row'>
            {/* COLUNA DE TEXTO */}
            <div className='md:w-1/2 md:pl-16 lg:pl-40 md:pr-8 px-3 md:px-0'>
              <h1 className="text-[#EF9D4B] font-openSans text-3xl text-center md:text-start md:text-4xl font-bold pt-16">
                Diferenciais
              </h1>
              <h2 className="text-[#354D4D] font-openSans text-2xl text-center md:text-start font-semibold pt-4">
                Alta Pureza
              </h2>
              <p className="text-center text-[#354D4D] font-openSans pt-4 pb-5 md:pb-0 md:text-start leading-6 sm:text-sm lg: text-base font-medium pr-4">
                Com a adição de mais maquinários no processo industrial de limpeza de sementes, como catadores-de-torrões, mesas densimétricas e escarificadores, a Safrasul consegue atingir padrões de pureza física altos, praticamente eliminando os materiais indesejáveis que acompanham as sementes como terra, torrões, pedras e palha, além de eliminar as presenças de sementes de plantas daninhas e risco de patógenos como nematoides.
              </p>
              <div className="flex justify-center md:justify-end pb-5 md:pb-0">
                <img
                  src="./icons/chevron-left-orange.svg"
                  className="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                  alt="Chevron Left"
                  onClick={goToPrev}
                />
                <img
                  src="./icons/chevron-right-orange.svg"
                  className="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                  alt="Chevron Right"
                  onClick={goToNext}
                />
              </div>
            </div>

            {/* COLUNA DE IMAGEM */}
            <div className='bg-[#EF9D4B] md:w-1/2 flex justify-center items-center relative py-8 md:py-36'>
              <img src='/imgs/diferenciais-slide1.png' className='w-auto h-80' alt="Tecnologia Xtra" />
            </div>

            {/* CAPIM */}
            <img src='/imgs/capim.png' className='absolute bottom-0 left-0 w-full' alt="Capim" />
          </div>
        </div>

      </Slider>
    </>
  );
}
