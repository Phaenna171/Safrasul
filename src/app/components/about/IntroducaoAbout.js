import Image from "next/image"
export default function IntroducaoAbout() {
  return (
    <>
      {/* INTRODUÇÃO */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/imgs/foto.webp"
            alt="Imagem Quem Somos"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="px-6 py-12 md:px-40 md:py-20 lg:px-60 lg:py-24">
          <h1 className="text-[#EF9D4B] font-openSans text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-start pb-4">
            Nossa empresa
          </h1>
          <p className="text-center text-[#354D4D] font-openSans leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-sm sm:text-base md:text-lg font-medium md:text-start">
            Desde 1998, nos dedicamos à produção, beneficiamento e comercialização de sementes forrageiras, contribuindo para o sucesso da pecuária e agricultura com novas tecnologias e foco na integração lavoura-pecuária.
          </p>
        </div>
      </div>

    </>
  )
}