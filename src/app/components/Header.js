import React, { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };


  return (
    <div className="relative bg-[#FFF]">
      <header className="bg-gradient-header px-4 md:px-8 lg:px-16 xl:px-40 py-1">
        <nav
          aria-label="Global"
          className="w-full flex items-center justify-between"
        >
          <div className="flex flex-1">
            <a href="#" className="p-2">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="/imgs/logo.png"
                className="h-10 md:h-12 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 text-[777]"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
            <a
              href="#"
              onClick={() => handleClick("home")}
              className={`text-lg leading-6 text-[#9B9B9B] font-openSans font-medium ${activeLink === "home" ? "border-b-4 border-[#F17708] text-customGreen" : ""
                }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => handleClick("quemSomos")}
              className={`text-lg leading-6 text-[#9B9B9B] font-openSans font-medium ${activeLink === "quemSomos" ? "border-b-4 border-[#F17708] text-customGreen" : ""
                }`}
            >
              Quem Somos
            </a>
            <a
              href="#"
              onClick={() => handleClick("produtos")}
              className={`text-lg leading-6 text-[#9B9B9B] font-openSans font-medium ${activeLink === "produtos" ? "border-b-4 border-[#F17708] text-customGreen" : ""
                }`}
            >
              Produtos
            </a>
            <a
              href="#"
              onClick={() => handleClick("contato")}
              className={`text-lg leading-6 text-[#9B9B9B] font-openSans font-medium ${activeLink === "contato" ? "border-b-4 border-[#F17708] text-customGreen" : ""
                }`}
            >
              Contato
            </a>

          </PopoverGroup>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-0 z-20 w-full max-w-sm bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Logo"
                  src="/imgs/logo.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6 space-y-2">
                  <a
                    href="#"
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Quem somos
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Produtos
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contato
                  </a>
                </div>
                <div className="py-6 text-start">
                  <button className="text-white bg-[#F07A10] py-2 px-4 md:py-2 md:px-6 lg:py-2 lg:px-8 rounded-full max-w-[220px] mx-auto md:mx-0">
                    Faça sua Cotação
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
