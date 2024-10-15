import { useContext, useEffect } from "react";
import { ProductContext } from "@/app/products/context/ProductContext";
import Link from "next/link";

export default function Menu() {
  const { datas, setSelectedCategory, selectedCategory, handleCategoryChange } = useContext(ProductContext);

  useEffect(() => {
    // Verifica se estamos no browser
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const category = params.get('category');
      if (category) {
        setSelectedCategory(category); // Define a categoria no contexto
      }
    }
  }, [setSelectedCategory]);

  return (
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
        <li>
          <Link href="/mix" className="text-sm sm:text-base cursor-pointer font-openSans text-[#F9D55B]">
            Mix de Sementes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
