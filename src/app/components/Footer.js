import React, { forwardRef } from "react";
import Form from "./Form";

const Footer = forwardRef((props, ref) => {
  return (
    <>
      <Form />
      <div className="bg-[#0E622E]" ref={ref}>
        <div className="flex flex-col md:flex-row border-b-2 border-white py-12 md:pt-0 justify-center md:gap-8 xl:gap-32">
          <div className="flex justify-center items-center ">
            <img src="/imgs/logo-branco.png" className="w-40 md:w-auto" />
          </div>
          <div className="px-0">
            <div className="flex justify-center md:justify-start">
              <h1 className="text-white text-2xl font-openSans font-bold pt-8 pb-4 border-b-2 border-[#FF8500] inline-block">
                Unidades
              </h1>
            </div>
            <div className="grid grid-cols-2 md:gap-x-6 lg:flex flex-wrap pt-4">
            <div className=" mb-10 md:mb-0 w-full md:w-auto">
                <h2 className="text-white text-center md:text-start font-openSans text-sm font-medium">Campo Grande - MS</h2>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">Rua Lagoa Rica, 42</p>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">Jardim Panorama</p>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">CEP: 79018 800</p>
                <h2 className="text-white text-center md:text-start font-openSans text-sm font-medium mt-4">Telefones:</h2>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">0800 540 0070</p>
                
              </div>

              <div className=" mb-4 md:mb-0 w-full md:w-auto">
                <h2 className="text-white text-center md:text-start font-openSans text-sm font-medium">Formosa - GO</h2>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">Bairro: Formosinha</p>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">Avenida Brasília, 1440</p>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">CEP: 73813 010</p>
                <h2 className="text-white text-center md:text-start font-openSans text-sm font-medium mt-4">Telefones:</h2>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">0800 540 0070</p>
              </div>

              <div className=" mb-4 md:mb-0 w-full md:w-auto">
                <h2 className="text-white text-center md:text-start font-openSans text-sm font-medium">Formoso - MG</h2>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">Bairro: Formosinha</p>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">Avenida Brasília, 1440</p>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">CEP: 73813 010</p>
                
              </div>

              <div className=" mb-4 md:mb-0 w-full md:w-auto">
                <h2 className="text-white text-center md:text-start font-openSans text-sm font-medium">Montes Claros - MG</h2>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">Avenida Governador Magalhães</p>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">Pinto, 2191A</p>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">CEP: 73813 010</p>
                <h2 className="text-white text-center md:text-start font-openSans text-sm font-medium mt-4">Telefones:</h2>
                <p className="text-white text-center md:text-start font-openSans text-sm font-light">(38) 99885 7961</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-8 xl:px-36 py-4">
          <p className="text-white font-openSans font-light mb-4 md:mb-0">© 2024 Safrasul Sementes</p>
          <div className="flex">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img className="px-2 w-8 h-8" src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="px-2 w-8 h-8" src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className="px-2 w-8 h-8" src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img className="px-2 w-8 h-8" src="/icons/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

Footer.displayName = "Footer";
export default Footer;
