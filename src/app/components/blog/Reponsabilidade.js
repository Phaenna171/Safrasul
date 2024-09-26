import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogContext } from "@/app/blog/context/BlogContext";

export default function Reponsabilidade() {
  
  const {publicacoesReponsabilidades} = useContext(BlogContext);
  const postagensPorPagina = 12;
  const [paginaAtual, setPaginaAtual] = useState(1);

  const indiceFinal = paginaAtual * postagensPorPagina;
  const indiceInicial = indiceFinal - postagensPorPagina;
  const postagensExibidas = publicacoesReponsabilidades.slice(indiceInicial, indiceFinal);

  const mudarPagina = (novaPagina) => {
    setPaginaAtual(novaPagina);
  };

  const totalPaginas = Math.ceil(publicacoesReponsabilidades.length / postagensPorPagina);

  return (
    <>
      <div className="px-4 md:px-20 lg:px-40 pt-8 pb-20">
        <h1 className="font-openSans text-[#354D4D] text-2xl md:text-3xl font-bold py-10 md:py-20 text-center md:text-start">
          Responsabilidade<br/>Socioambiental
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {postagensExibidas.map((post, index) => (
            <Link 
              key={index} 
              href={`/posts/postsReponsabilidades/post${indiceInicial + index}`} // Corrige o índice global para a rota
              passHref
            >
              <div className="relative w-full h-[200px] sm:h-[250px] cursor-pointer">
                <Image
                  src={post.imgSrc}
                  alt={post.titulo}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
                  <h2 className="font-openSans text-white font-bold text-xl sm:text-2xl pb-2 sm:pb-3">
                    {post.titulo}
                  </h2>
                  <p className="font-openSans text-white font-light text-xs">
                    {post.data}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Paginação */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
            className="px-4 text-gray-700 text-xl font-openSans mr-4 disabled:opacity-50"
          >
            Anterior
          </button>

          {Array.from({ length: totalPaginas }, (_, index) => (
            <button
              key={index}
              onClick={() => mudarPagina(index + 1)}
              className={`px-2 py-2 ${
                paginaAtual === index + 1
                  ? "text-[#EC732E] font-openSans font-bold text-xl"
                  : "text-gray-700 font-openSans font-light text-xl"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
            className="px-4 text-gray-700 text-xl font-openSans ml-4 disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      </div>
    </>
  );
}
