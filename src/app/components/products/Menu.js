import { useContext } from "react";
import { ProductContext } from "@/app/products/context/ProductContext";

export default function Menu() {
  const {datas, selectedCategory, handleCategoryChange} = useContext(ProductContext)

  return (
    <>
      <nav className="bg-[#EC732E] py-2">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-20 px-4">
            {Object.keys(datas).map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`text-sm sm:text-base cursor-pointer font-openSans ${selectedCategory === category ? 'text-white' : 'text-[#F9D55B]'}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>
    </>
  )
}