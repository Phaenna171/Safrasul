export default function Posts() {
  return (
    <>
      <div className="px-10 pt-0 pb-12 md:px-40 md:py-24">
        <h1 className='font-openSans font-bold text-xl md:text-4xl text-[#354D4D] md:pb-4'>Últimas Postagens</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-1 justify-center items-center">
            <div className="flex items-center justify-center">
              <img src="imgs/post.svg" className="" />
            </div>
            <div className="flex items-center justify-center">
              <img src="imgs/post.svg" className="" />
            </div>
            <div className="flex items-center justify-center">
              <img src="imgs/post.svg" className="" />
            </div>
            <div className="flex items-center justify-center">
              <img src="imgs/post.svg" className="" />
            </div>
            {/* As duas divs abaixo só serão exibidas em telas médias ou maiores */}
            <div className="hidden md:flex items-center justify-center">
              <img src="imgs/post.svg" className="" />
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img src="imgs/post.svg" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
