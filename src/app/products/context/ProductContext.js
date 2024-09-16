import { createContext, useState, useRef } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const datas = {
    Brachiaria: {
      // DADOS DA CATEGORIA
      grid: {
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
      index: {
        title: ["Capim Brachiaria"],
        paragraphs: [
          "Um dos mais populares capins do Brasil, o gênero Brachiaria é cultivado em aproximadamente 70 milhões de hectares no país. Apresentando variabilidade quanto a tolerência à seca e ao frio, época de florescimento, tolerância a solos úmidos, resistência à cigarrinha, entre outros fatores.",

          "Atualmente, são cultivados no Brasil mais de 15 gramíneas do gênero Brachiaria, entre cultivares e híbridos, e vários outros estão em fase de pesquisa e desenvolvimento para serem lanãdos nos próximos anos.",

          "As Brachiarias possuem boa abragência de solos, alta capacidade de competição com invasoras e estabelecimento acelerado. A escolha do melhor capim Brachiaria a ser plantado em um terreno é ponto fundamental para se consolidar uma excelente pastagem.",

          "No Brasil, nossa empresa é referência na produção, industrialização e comercialização de sementes do gênero Brachiaria.",

          "Nosso Departamento Técnico pode auxiliá-lo na escolha da melhor Brachiaria a ser utilizada em sua propriedade. Entre em contato conosco e faça a melhor escolha."
        ],
        url: "/imgs/video-produtos.png"
      },

      // DADOS DAS SEMENTES
      intro: {
        0:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        1:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        2:{
         img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        3:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        4:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        5:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
      },
      cabecalho: {
        0: {
          title: "Marándu",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        1: {
          title: "Piatã",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        2: {
          title:"Xaraés",
          subtitle:"(Braquiarão)",
          description:"Brachiaria brizantha cv.Marandú",
        },
        3: {
          title:"Paiaguás",
          subtitle:"(Braquiarão)",
          description:"Brachiaria brizantha cv.Marandú",
        },
        4: {
          title:"Ipyporã",
          subtitle:"(Braquiarão)",
          description:"Brachiaria brizantha cv.Marandú",
        },
        5: {
          title:"Decumbens",
          subtitle:"(Braquiarão)",
          description:"Brachiaria brizantha cv.Marandú",
        },
      },
      slides: {
        0: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        1: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        2: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        3: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        4: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        5: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ]
      },
      textos: {
        0: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        1: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        2: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        3: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        4: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        5: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
      },
      utilizacoes: {
        0: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        1: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        2: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        3: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        4: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        5: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
      },
      indicacoes: {
        0: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        1: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        2: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        3: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        4: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        5: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
      },
      infosTabelaNome: {
        0: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        1: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        2: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        3: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        4: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        5: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
      },
      infosTabelaValor: {
        0: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        1: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        2: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        3: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        4: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        5: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
      }
    },


    Panicum: {
      // DADOS DA CATEGORIA
      grid: {
        images: [
          '/imgs/marandu.png',
          '/imgs/piata.png',
          '/imgs/xaraes.png',

        ],
        titles: [
          'PANICUM1',
          'PANICUM2',
          'PANICUM3',
        ],
        descriptions: [
          'Panicum cv.Marandú',
          'Panicum cv.BRS Piatã',
          'Panicum cv.Xaraés',

        ],
      },
      index: {
        title: ["Panicum"],
        paragraphs: [
          "Um dos mais populares capins do Brasil, o gênero Brachiaria é cultivado em aproximadamente 70 milhões de hectares no país. Apresentando variabilidade quanto a tolerência à seca e ao frio, época de florescimento, tolerância a solos úmidos, resistência à cigarrinha, entre outros fatores.",

          "Atualmente, são cultivados no Brasil mais de 15 gramíneas do gênero Brachiaria, entre cultivares e híbridos, e vários outros estão em fase de pesquisa e desenvolvimento para serem lanãdos nos próximos anos.",

          "As Brachiarias possuem boa abragência de solos, alta capacidade de competição com invasoras e estabelecimento acelerado. A escolha do melhor capim Brachiaria a ser plantado em um terreno é ponto fundamental para se consolidar uma excelente pastagem.",

          "No Brasil, nossa empresa é referência na produção, industrialização e comercialização de sementes do gênero Brachiaria.",

          "Nosso Departamento Técnico pode auxiliá-lo na escolha da melhor Brachiaria a ser utilizada em sua propriedade. Entre em contato conosco e faça a melhor escolha."
        ],
        url: "/imgs/video-produtos.png"
      },

      // DADOS DA SEMENTE
      intro: {
        0:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        1:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        2:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
      },
      cabecalho: {
        0: {
          title: "Panicum1",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        1: {
          title: "Panicum2",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        2: {
          title:"Panicum3",
          subtitle:"(Braquiarão)",
          description:"Brachiaria brizantha cv.Marandú",
        },
      },
      slides: {
        0: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        1: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        2: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
      },
      textos: {
        0: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        1: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        2: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
      },
      utilizacoes: {
        0: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        1: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        2: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
      },
      indicacoes: {
        0: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        1: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        2: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
      },
      infosTabelaNome: {
        0: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        1: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        2: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
      },
      infosTabelaValor: {
        0: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        1: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        2: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
      }
    },


    Leguminosas: {
      // DADOS DA CATEGORIA
      grid: {
        images: [
          '/imgs/marandu.png',
          '/imgs/piata.png',
          '/imgs/xaraes.png',
          '/imgs/paiaguas.png',
          '/imgs/ipypora.png',
          '/imgs/decumbens.png',
        ],
        titles: [
          'LEGUMINOSAS1',
          'LEGUMINOSAS2',
          'LEGUMINOSAS3',
          'LEGUMINOSAS4',
          'LEGUMINOSAS5',
          'LEGUMINOSAS6',
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
      index: {
        title: ["Leguminosas"],
        paragraphs: [
          "Um dos mais populares capins do Brasil, o gênero Brachiaria é cultivado em aproximadamente 70 milhões de hectares no país. Apresentando variabilidade quanto a tolerência à seca e ao frio, época de florescimento, tolerância a solos úmidos, resistência à cigarrinha, entre outros fatores.",

          "Atualmente, são cultivados no Brasil mais de 15 gramíneas do gênero Brachiaria, entre cultivares e híbridos, e vários outros estão em fase de pesquisa e desenvolvimento para serem lanãdos nos próximos anos.",

          "As Brachiarias possuem boa abragência de solos, alta capacidade de competição com invasoras e estabelecimento acelerado. A escolha do melhor capim Brachiaria a ser plantado em um terreno é ponto fundamental para se consolidar uma excelente pastagem.",

          "No Brasil, nossa empresa é referência na produção, industrialização e comercialização de sementes do gênero Brachiaria.",

          "Nosso Departamento Técnico pode auxiliá-lo na escolha da melhor Brachiaria a ser utilizada em sua propriedade. Entre em contato conosco e faça a melhor escolha."
        ],
        url: "/imgs/video-produtos.png"

      },

      // DADOS DA SEMENTE
      intro: {
        0:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        1:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        2:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        3:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        4:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        5:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
      },
      cabecalho: {
        0: {
          title: "Leguminosas1",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        1: {
          title: "Leguminosas2",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        2: {
          title: "Leguminosas3",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        3: {
          title: "Leguminosas4",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        4: {
          title: "Leguminosas5",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        5: {
          title: "Leguminosas6",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
      },
      slides: {
        0: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        1: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        2: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        3: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        4: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        5: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ]
      },
      textos: {
        0: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        1: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        2: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        3: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        4: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        5: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
      },
      utilizacoes: {
        0: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        1: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        2: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        3: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        4: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        5: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
      },
      indicacoes: {
        0: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        1: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        2: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        3: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        4: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        5: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
      },
      infosTabelaNome: {
        0: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        1: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        2: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        3: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        4: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        5: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
      },
      infosTabelaValor: {
        0: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        1: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        2: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        3: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        4: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        5: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
      }

    },


    Gramíneas: {
      // DADOS DA CATEGORIA
      grid: {
        images: [
          '/imgs/marandu.png',
          '/imgs/piata.png',
          '/imgs/xaraes.png',

        ],
        titles: [
          'GRAMINEAS1',
          'GRAMINEAS2',
          'GRAMINEAS3',

        ],
        descriptions: [
          'Gramínea cv.Marandú',
          'Gramínea cv.BRS Piatã',
          'Gramínea cv.Xaraés',

        ],
      },
      index: {
        title: ["Gramíneas"],
        paragraphs: [
          "Um dos mais populares capins do Brasil, o gênero Brachiaria é cultivado em aproximadamente 70 milhões de hectares no país. Apresentando variabilidade quanto a tolerência à seca e ao frio, época de florescimento, tolerância a solos úmidos, resistência à cigarrinha, entre outros fatores.",

          "Atualmente, são cultivados no Brasil mais de 15 gramíneas do gênero Brachiaria, entre cultivares e híbridos, e vários outros estão em fase de pesquisa e desenvolvimento para serem lanãdos nos próximos anos.",

          "As Brachiarias possuem boa abragência de solos, alta capacidade de competição com invasoras e estabelecimento acelerado. A escolha do melhor capim Brachiaria a ser plantado em um terreno é ponto fundamental para se consolidar uma excelente pastagem.",

          "No Brasil, nossa empresa é referência na produção, industrialização e comercialização de sementes do gênero Brachiaria.",

          "Nosso Departamento Técnico pode auxiliá-lo na escolha da melhor Brachiaria a ser utilizada em sua propriedade. Entre em contato conosco e faça a melhor escolha."
        ],
        url: "/imgs/video-produtos.png"

      },

      // DADOS DA SEMENTE
      intro: {
        0:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        1:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
        2:{
          img:"/imgs/bg-intro-seed.png",
          txt:"Produtividade e resultado que seu campo precisa!"
        },
      },
      cabecalho: {
        0: {
          title: "Gramíneas1",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        1: {
          title: "Gramíneas2",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        2: {
          title: "Gramíneas3",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        3: {
          title: "Gramíneas4",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        4: {
          title: "Gramíneas5",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
        5: {
          title: "Gramíneas6",
          subtitle: "(Braquiarão)",
          description: "Brachiaria brizantha cv.Marandú",
        },
      },
      slides: {
        0: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        1: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
        2: [
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png",
          "/imgs/slider-marandu.png"
        ],
      },
      textos: {
        0: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        1: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        2: {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa - Gado de Corte. É originária da África e o nome Marandú dado à cultivar, significa \"novidade\" no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerência ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação.",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagem o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
      },
      utilizacoes: {
        0: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        1: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        2: [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
      },
      indicacoes: {
        0: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        1: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        2: [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
      },
      infosTabelaNome: {
        0: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        1: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
        2: [
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
          "Hábito de crescimento",
          "Altura da Planta",
          "Intensidade de perfilhamento basal",
          "Arquitetura da folha",
          "Comprimento da lâmina foliar",
          "Pilosidade da lâmina foliar",
          "Quantidade de rácemos",
          "Inserção da espigueta na ráquis",
        ],
      },
      infosTabelaValor: {
        0: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        1: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
        2: [
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
          "Cepitoso",
          "Média de 53 cm",
          "Média",
          "Arqueada",
          "Médio",
          "Pouca/Média",
          "Média (4)",
          "Uniserrada",
        ],
      }

    }
  };


  const [selectedCategory, setSelectedCategory] = useState('Brachiaria');
  const [selectedSeed, setSelectedSeed] = useState(null); // Estado para a semente selecionada

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSeed(null); // Resetar semente selecionada ao trocar categoria
  };


  // PASSAR OS SLIDES COM AS SETAS
  const sliderRef = useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };


  return (
    <ProductContext.Provider value={{
      setSelectedCategory,
      setSelectedSeed,
      handleCategoryChange,
      goToNext,
      goToPrev,
      datas,
      selectedCategory,
      selectedSeed,
      sliderRef
    }}>
      {children}
    </ProductContext.Provider>
  )
}

