import { createContext, useState, useRef } from 'react';
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

  const publicacoesIntro = [
    {
      image: '/imgs/post-secundario.png', 
      title: 'CAMPANHAS DE VALORES: PAIXÃO', 
      date: '25 de julho de 2023',
      qtdComents: 0,
    },
    {
      image: '/imgs/post-secundario.png', 
      title: 'CAMPANHAS DE VALORES: PAIXÃO', 
      date: '25 de julho de 2023',
      qtdComents: 0,
    },
    {
      image: '/imgs/post-secundario.png', 
      title: 'CAMPANHAS DE VALORES: PAIXÃO', 
      date: '25 de julho de 2023',
      qtdComents: 0,
    },
    {
      image: '/imgs/post-principal.png', 
      title: 'CAMPANHAS DE VALORES: PAIXÃO', 
      date: '25 de julho de 2023',
      qtdComents: 0,
    },
  ]

  const publicacoesPosts = [
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },


    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
  ]
  const publicacoesReponsabilidades = [
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-1.png", titulo: "Projeto Adubando Oportunidades", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-2.png", titulo: "Meio Ambiente", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-3.png", titulo: "Projeto Pintando a Escola", data: "24 de julho de 2023" },
    { imgSrc: "/imgs/posts-4.png", titulo: "TOP SS - A Revolução em Semeadeiras!", data: "24 de julho de 2023" },
  ]

  const [selectedPost, setSelectedPost] = useState(0)


  
  return (
    <BlogContext.Provider value={{
      setSelectedPost,
      publicacoesPosts,
      publicacoesReponsabilidades,
      selectedPost,
      publicacoesIntro
    }}>
      {children}
    </BlogContext.Provider>
  )
}

