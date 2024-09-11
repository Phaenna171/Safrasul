'use client'
import { useState } from 'react';
import Header from "../components/Header";
import ImageGrid from "../components/products/ImageGrid";
import Description from '../components/products/Description';
import Footer from '../components/Footer';
import Semente from '../components/products/Semente';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Brachiaria');
  const [selectedSeed, setSelectedSeed] = useState(null); // Estado para a semente selecionada

  const data = {
    Brachiaria: {
      images: [
        '/imgs/marandu.png',
        '/imgs/piata.png',
        '/imgs/xaraes.png',
        '/imgs/paiaguas.png',
        '/imgs/ipypora.png',
        '/imgs/decumbens.png',
      ],
      titles: [
        'MARANDÚ',
        'PIATÃ',
        'XARAÉS',
        'PAIAGUÁS',
        'IPYPORÃ',
        'DECUMBENS',
      ],
      descriptions: [
        'Brachiaria brizantha cv.Marandú',
        'Brachiaria brizantha cv.BRS Piatã',
        'Brachiaria brizantha cv.Xaraés',
        'Brachiaria brizantha cv.BRS Paiaguás',
        'Brachiaria brizantha cv.BRS Ipyporã',
        'Brachiaria brizantha cv.Basilisk',
      ],
    },
    Panicum: {
      images: [
        '/imgs/marandu.png',
        '/imgs/piata.png',
        '/imgs/xaraes.png',
        '/imgs/paiaguas.png',
        '/imgs/ipypora.png',
        '/imgs/decumbens.png',
      ],
      titles: [
        'Panicum 1',
        'Panicum 2',
        'Panicum 3',
        'Panicum 4',
        'Panicum 5',
        'Panicum 6',
      ],
      descriptions: [
        'Panicum cv.Marandú',
        'Panicum cv.BRS Piatã',
        'Panicum cv.Xaraés',
        'Panicum cv.BRS Paiaguás',
        'Panicum cv.BRS Ipyporã',
        'Panicum cv.Basilisk',
      ],
    },
    Leguminosas: {
      images: [
        '/imgs/marandu.png',
        '/imgs/piata.png',
        '/imgs/xaraes.png',
        '/imgs/paiaguas.png',
        '/imgs/ipypora.png',
        '/imgs/decumbens.png',
      ],
      titles: [
        'Leguminosas 1',
        'Leguminosas 2',
        'Leguminosas 3',
        'Leguminosas 4',
        'Leguminosas 5',
        'Leguminosas 6',
      ],
      descriptions: [
        'Leguminosas cv.Marandú',
        'Leguminosas cv.BRS Piatã',
        'Leguminosas cv.Xaraés',
        'Leguminosas cv.BRS Paiaguás',
        'Leguminosas cv.BRS Ipyporã',
        'Leguminosas cv.Basilisk',
      ],
    },
    Gramíneas: {
      images: [
        '/imgs/marandu.png',
        '/imgs/piata.png',
        '/imgs/xaraes.png',
        '/imgs/paiaguas.png',
        '/imgs/ipypora.png',
        '/imgs/decumbens.png',
      ],
      titles: [
        'Gramínea 1',
        'Gramínea 2',
        'Gramínea 3',
        'Gramínea 4',
        'Gramínea 5',
        'Gramínea 6',
      ],
      descriptions: [
        'Gramínea cv.Marandú',
        'Gramínea cv.BRS Piatã',
        'Gramínea cv.Xaraés',
        'Gramínea cv.BRS Paiaguás',
        'Gramínea cv.BRS Ipyporã',
        'Gramínea cv.Basilisk',
      ],
    },
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSeed(null); // Resetar semente selecionada ao trocar categoria
  };

  const handleSeedSelect = (index) => {
    setSelectedSeed(index); // Atualiza a semente selecionada
  };

  return (
    <>
      <Header />

      {/* MENU */}
      <nav className="bg-[#EC732E] py-2">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-20 px-4">
          {Object.keys(data).map((category) => (
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

      {/* Condicional: Exibe a grid ou a descrição da semente */}
      {selectedSeed === null ? (
        <div>
          <ImageGrid
            images={data[selectedCategory].images}
            titles={data[selectedCategory].titles}
            descriptions={data[selectedCategory].descriptions}
            onImageClick={handleSeedSelect} // Passa a função para o componente ImageGrid
          />

          <Description
            title={"Capim Brachiaria"}
            paragraphs={["Um dos mais populares capins do Brasil, o gênero Brachiaria é cultivado em aproximadamente 70 milhões de hectares no país. Apresentando variabilidade quanto a tolerência à seca e ao frio, época de florescimento, tolerância a solos úmidos, resistência à cigarrinha, entre outros fatores.", "Atualmente, são cultivados no Brasil mais de 15 gramíneas do gênero Brachiaria, entre cultivares e híbridos, e vários outros estão em fase de pesquisa e desenvolvimento para serem lanãdos nos próximos anos.", "As Brachiarias possuem boa abragência de solos, alta capacidade de competição com invasoras e estabelecimento acelerado. A escolha do melhor capim Brachiaria a ser plantado em um terreno é ponto fundamental para se consolidar uma excelente pastagem.", "No Brasil, nossa empresa é referência na produção, industrialização e comercialização de sementes do gênero Brachiaria.", "Nosso Departamento Técnico pode auxiliá-lo na escolha da melhor Brachiaria a ser utilizada em sua propriedade. Entre em contato conosco e faça a melhor escolha."]}
            image={"/imgs/video-produtos.png"}
          />
        </div>
      ) : (
        <Semente/>
      )}

      <Footer />
    </>
  );
}
