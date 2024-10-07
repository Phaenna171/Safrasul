export default function Produtos() {
  return (
    <>
      <div className="relative py-4">
        {/* BG CINZA */}
        <div className="absolute inset-0 h-full md:h-[80%] bg-[#F2F2F2] z-0"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 px-4 md:px-12 lg:px-40 gap-8 lg:gap-16 py-8">
          {/* IMAGENS */}
          <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-6">
            <div className="relative">
              <img src="/imgs/bachiaria.png" className="w-full h-auto" />
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold">
                Brachiaria
              </h2>
            </div>
            <div className="relative">
              <img src="/imgs/panicum.png" className="w-full h-auto" />
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold">
                Panicum
              </h2>
            </div>
            <div className="relative">
              <img src="/imgs/leguminosas.png" className="w-full h-auto" />
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold">
                Leguminosas
              </h2>
            </div>
            <div className="relative">
              <img src="/imgs/gramineas.png" className="w-full h-auto" />
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold">
                Mix de Sementes
              </h2>
            </div>
          </div>

          {/* TEXTOS */}
          <div className="flex flex-col justify-start text-center md:text-left pt-12">
            <h1 className="text-[#354D4D] font-openSans text-2xl md:text-3xl lg:text-4xl font-bold">
              Nossos Produtos
            </h1>
            <p className="text-[#354D4D] font-openSans py-4 md:py-6 lg:py-8 md:pr-0 lg:pr-32 leading-7 font-medium">
              Os constantes investimentos em nossa Unidade de Beneficiamento de Sementes nos permite desenvolver e oferecer tecnologias que trazem grandes benefícios aos nossos clientes.
            </p>
            <button className="text-white w-max bg-[#F07A10] py-2 px-4 md:py-2 md:px-6 lg:py-2 lg:px-8 rounded-full mx-auto md:mx-0">
              VER PRODUTOS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
