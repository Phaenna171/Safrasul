import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import blogService from "@/services/blog.service";

export default function IntroBlog() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await blogService.getAll()
      setPosts(data)
    }
    getData()
  }, []);

  // Função para determinar o texto correto dos comentários
  const getComentarioTexto = (qtdComents) => {
    if (qtdComents === 0) {
      return "Nenhum comentário";
    } else if (qtdComents === 1) {
      return "1 comentário";
    } else {
      return `${qtdComents} comentários`;
    }
  };

  return (
    <>
      <div className="px-4 sm:px-8 md:px-20 lg:px-40 pb-10 md:pb-20">
        <h1 className="font-openSans text-[#354D4D] text-2xl sm:text-3xl font-bold py-8">
          Blog
        </h1>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 md:gap-8">

          {/* Imagem Principal - Post principal clicável */}
          <Link href={`/blog/${posts[0]?.id}`} passHref className="col-span-1 md:col-span-3 cursor-pointer">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={posts[0]?.image}
                alt="Post"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
                <h2 className="font-openSans text-white font-bold text-lg sm:text-2xl pb-2 sm:pb-3 pr-64 xl:pr-96">
                  {posts[0]?.title}
                </h2>
                <div className="flex font-openSans text-white font-light text-xs gap-2">
                  <p>{new Date(posts[0]?.createdAt).toLocaleDateString('pt-BR')}</p>
                  <p>{getComentarioTexto(posts[0]?.qtdComents)}</p>
                </div>
              </div>
            </div>
          </Link>

          <div className="col-span-1 md:col-span-2 grid grid-rows-3 gap-y-6">
            {posts.slice(1, 4).map((post, index) => (
              <Link href={`/blog/${post.id}`} passHref key={index} className="flex">
                <div className="flex items-center justfy-center gap-4 cursor-pointer">
                  <div >
                    <Image
                      src={post.image}
                      alt="Post"
                      width={200}
                      height={80}
                    />
                  </div>
                  <div>
                    <h2 className="font-openSans text-[#354D4D] font-bold text-lg sm:text-2xl pb-1 sm:pb-3 leading-6">
                      {post.title}
                    </h2>
                    <div className="flex gap-2">
                      <p className="font-openSans text-[#354D4D] font-light text-xs gap-2">
                        {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="font-openSans text-[#354D4D] font-light text-xs gap-2">
                        {getComentarioTexto(post.qtdComents)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
