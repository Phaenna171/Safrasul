export default function Form() {
  return (
    <>
      <div className="relative bg-[url('/imgs/bg-footer.png')] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2 flex flex-col items-center px-24 md:px-20 lg:px-40 xl:px-80 py-16 md:py-24">
          <label className="font-openSans text-white font-bold text-2xl md:text-3xl lg:text-4xl">
            Receba nosso catálogo!
          </label>
          <form className="w-full mt-4">
            <div className="mt-2">
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                required
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
            <div className="mt-2">
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Telefone"
                required
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
            <div className="flex justify-center">
              <button className="text-white mt-4 bg-[#F07A10] py-1 px-4 md:py-1 md:px-6 rounded-full">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#F3A044] col-span-1 hidden md:block"></div>
        <img src="/imgs/catalogo.png" className="hidden md:block absolute w-auto h-40 xl:h-80 right-20 xl:right-40 top-32 xl:top-20 lg:w-auto lg:h-60 lg:right-32 lg:top-40" />
      </div>

    </>
  )
}