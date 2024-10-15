import { createContext, useState, useRef, useEffect } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const datas = {
    Brachiaria: {
      // DADOS DA CATEGORIA
      grid: {
        images: [
          '/imgs/products/BACHIARIAS/Marandu/brachiaria_marandu╠ü_1_grid.jpg',
          '/imgs/products/BACHIARIAS/Piata/brachiaria_piata_7_grid.jpg',
          '/imgs/products/BACHIARIAS/Xaraes/brachiaria_xaraes_3_grid.jpg',
          '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_7_grid.jpg',
          '/imgs/products/BACHIARIAS/Ipypora/brachiaria_ipypora_5_grid.jpg',
          '/imgs/products/BACHIARIAS/Decumbens/brachiaria_decumbens_.jpg',
          '/imgs/products/BACHIARIAS/Llanero/brachiaria_llanero_2_grid.jpg',
          '/imgs/products/BACHIARIAS/Humidicola/brachiaria_humidicola_2_grid.jpg',
          '/imgs/products/BACHIARIAS/Ruziziensis/brachiaria_ruziziensis_5_grid.jpg',
          '/imgs/products/BACHIARIAS/BRSIntegra/brachiaria_BRS-integra_.jpg',
        ],
        titles: [
          'MARANDÚ',
          'BRS PIATÃ',
          'XARAÉS',
          'PAIAGUÁS',
          'IPYPORÃ',
          'DECUMBENS',
          'LLANERO',
          'HUMIDICOLA',
          'RUZIZIENSIS',
          'BRS INTEGRA'
        ],
        descriptions: [
          'Brachiaria Brizantha cv. Marandú',
          'PiatãBrachiaria brizantha cv. BRS Piatã',
          'Brachiaria brizantha cv. Xaraés',
          'Brachiaria brizantha cv. BRS Paiaguás',
          'Brachiaria Híbrida cv. BRS Ipyporã',
          'Brachiaria decumbens cv. Basilisk',
          'Brachiaria humidicola cv. Llanero',
          'Brachiaria humidicola cv. Humidicola',
          'Brachiaria ruziziensis cv. Brachiaria Ruziziensis',
          'Urochloa Ruzizizensis BRS Integra',
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
      intro: [
        {
          img: '/imgs/products/BACHIARIAS/Marandu/brachiaria_marandu╠ü_6_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/BACHIARIAS/Piata/brachiaria_piata_8_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: "/imgs/products/BACHIARIAS/Xaraes/brachiaria_xaraes_2_banner.jpg",
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {

          img: '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_8_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/BACHIARIAS/Ipypora/brachiaria_ipypora_8_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/BACHIARIAS/Decumbens/brachiaria_decumbens_.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/BACHIARIAS/Llanero/brachiaria_llanero_1_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/BACHIARIAS/Humidicola/brachiaria_humidicola_3_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/BACHIARIAS/Ruziziensis/brachiaria_ruziziensis_1_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/BACHIARIAS/BRSIntegra/brachiaria_BRS-integra_.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
      ],
      cabecalho: [
        {
          title: "Marándu",
          subtitle: "(Braquiarão)",
          description: "Brachiaria Brizantha cv. Marandú",
        },
        {
          title: "Piatã",
          subtitle: "",
          description: "Brachiaria brizantha cv. BRS Piatã",
        },
        {
          title: "Xaraés",
          subtitle: "(MG-5, Vitória ou Toledo)",
          description: "Brachiaria brizantha cv. Xaraés",
        },
        {
          title: "Paiaguás",
          subtitle: "",
          description: "Brachiaria brizantha cv. BRS Paiaguás",
        },
        {
          title: "Ipyporã",
          subtitle: "",
          description: "Brachiaria Híbrida cv. BRS Ipyporã",
        },
        {
          title: "Decumbens",
          subtitle: "(Braquiarinha)",
          description: "Brachiaria decumbens cv. Basilisk",
        },
        {
          title: "Llanero",
          subtitle: "(Lhanero ou Dictyoneura)",
          description: "Brachiaria humidicola cv. Llanero",
        },
        {
          title: "Humidicola",
          subtitle: "(Capim Quicuio ou Quicuio da Amazônia)",
          description: "Brachiaria humidicola cv. Humidicola",
        },
        {
          title: "Ruziziensis",
          subtitle: "",
          description: "Brachiaria ruziziensis cv. Brachiaria Ruziziensis",
        },
        {
          title: "BRS Integra",
          subtitle: "",
          description: "Urochloa Ruzizizensis BRS Integra",
        },
      ],
      slides: [
        [
          '/imgs/products/BACHIARIAS/Marandu/brachiaria_marandu╠ü_2_slide.jpg',
          '/imgs/products/BACHIARIAS/Marandu/brachiaria_marandu╠ü_3_slide.jpg',
          '/imgs/products/BACHIARIAS/Marandu/brachiaria_marandu╠ü_4_slide.jpg',
          '/imgs/products/BACHIARIAS/Marandu/brachiaria_marandu╠ü_5_slide.jpg',
        ],
        [
          '/imgs/products/BACHIARIAS/Piata/brachiaria_piata_1_slide.jpg',
          '/imgs/products/BACHIARIAS/Piata/brachiaria_piata_2_slide.jpg',
          '/imgs/products/BACHIARIAS/Piata/brachiaria_piata_3_slide.jpg',
          '/imgs/products/BACHIARIAS/Piata/brachiaria_piata_4_slide.jpg',
          '/imgs/products/BACHIARIAS/Piata/brachiaria_piata_5_slide.jpg',
          '/imgs/products/BACHIARIAS/Piata/brachiaria_piata_6_slide.jpg',
        ],
        [
          '/imgs/products/BACHIARIAS/Xaraes/brachiaria_xaraes_6_slide.jpg',
          '/imgs/products/BACHIARIAS/Xaraes/brachiaria_xaraes_1_slide.jpg',
          '/imgs/products/BACHIARIAS/Xaraes/brachiaria_xaraes_4_slide.jpg',
          '/imgs/products/BACHIARIAS/Xaraes/brachiaria_xaraes_5_slide.jpg',

        ],
        [
          '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_6_slide.jpg',
          '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_1_slide.jpg',
          '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_2_slide.jpg',
          '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_3_slide.jpg',
          '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_4_slide.jpg',
          '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_5_slide.jpg',
          '/imgs/products/BACHIARIAS/Paiaguas/brachiaria_paiaguas_9_slide.jpg',

        ],
        [
          '/imgs/products/BACHIARIAS/Ipypora/brachiaria_ipypora_1_slide.jpg',
          '/imgs/products/BACHIARIAS/Ipypora/brachiaria_ipypora_2_slide.jpg',
          '/imgs/products/BACHIARIAS/Ipypora/brachiaria_ipypora_3_slide.jpg',
          '/imgs/products/BACHIARIAS/Ipypora/brachiaria_ipypora_4_slide.jpg',
          '/imgs/products/BACHIARIAS/Ipypora/brachiaria_ipypora_6_slide.jpg',
          '/imgs/products/BACHIARIAS/Ipypora/brachiaria_ipypora_7_slide.jpg',
        ],
        [
          '/imgs/products/BACHIARIAS/Decumbens/brachiaria_decumbens_.jpg',
          '/imgs/products/BACHIARIAS/Decumbens/brachiaria_decumbens_.jpg',
          '/imgs/products/BACHIARIAS/Decumbens/brachiaria_decumbens_.jpg',

        ],
        [
          '/imgs/products/BACHIARIAS/Llanero/brachiaria_llanero_5_slide.jpg',
          '/imgs/products/BACHIARIAS/Llanero/brachiaria_llanero_3_slide.jpg',
          '/imgs/products/BACHIARIAS/Llanero/brachiaria_llanero_4_slide.jpg',
          '/imgs/products/BACHIARIAS/Llanero/brachiaria_llanero_6_slide.jpg',

        ],
        [
          '/imgs/products/BACHIARIAS/Humidicola/brachiaria_humidicola_1_slide.jpg',
          '/imgs/products/BACHIARIAS/Humidicola/brachiaria_humidicola_4_slide.jpg',
          '/imgs/products/BACHIARIAS/Humidicola/brachiaria_humidicola_5_slide.jpg',
          '/imgs/products/BACHIARIAS/Humidicola/brachiaria_humidicola_6_slide.jpg',

        ],
        [
          '/imgs/products/BACHIARIAS/Ruziziensis/brachiaria_ruziziensis_2_slide.jpg',
          '/imgs/products/BACHIARIAS/Ruziziensis/brachiaria_ruziziensis_3_slide.jpg',
          '/imgs/products/BACHIARIAS/Ruziziensis/brachiaria_ruziziensis_4_slide.jpg',
        ],
        [
          '/imgs/products/BACHIARIAS/BRSIntegra/brachiaria_BRS-integra_.jpg',
          '/imgs/products/BACHIARIAS/BRSIntegra/brachiaria_BRS-integra_.jpg',
          '/imgs/products/BACHIARIAS/BRSIntegra/brachiaria_BRS-integra_.jpg',
        ],
      ],
      textos: [
        {
          introducao: [
            "O capim Marandú é uma Brachiaria brizantha lançada pela Embrapa – Gado de Corte. É originária da África e o nome Marandú, dado à cultivar, significa “novidade” no idioma guarani, e foi aquele que melhor traduzia o destaque dado a esta nova alternativa de forragem para o cerrado."
          ],
          vantagens: [
            "Tem como principais características resistência às cigarrinhas-das-pastagens, alta produção de forragem, persistência, boa capacidade de rebrota, tolerância ao frio, à seca e ao fogo. Exige solos bem drenados, de média a alta fertilidade e responde muito bem à adubação",
            "É indicada para bovinos de cria, recria e engorda. Também é bem aceita por bubalinos, ovinos e caprinos. Aceita o pastejo rotacionado, produção de feno e silagem.",
            "Brachiaria mais cultivada no país, tem como vantagens o rápido estabelecimento, a longevidade após instalada e a alta capacidade de competição com as plantas daninhas."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        {
          introducao: [
            "A cultivar BRS Piatã é uma Brachiaria brizantha desenvolvida a partir de planta que faz parte da coleção de forrageiras da Embrapa e que originalmente foi coletada pelo Centro Internacional de Agricultura Tropical (Ciat) entre 1984 e 1985, na África. Foi avaliada e lançada pela Embrapa e seus parceiros em 2006. O nome Piatã é de origem tupi-guarani e significa fortaleza. Foi dado a essa cultivar pelas suas características de robustez e produtividade."
          ],
          vantagens: [
            "Elevada taxa de crescimento foliar, maior disponibilidade de folhas sob pastejo, resistência às cigarrinhas típicas das pastagens",
            "Melhor acabamento dos animais, valor nutritivo superior (principalmente no período seco).",
            "Alternativa para sistemas integrados (crescimento inicial mais lento, bom acúmulo de forragem no período seco); Florescimento precoce (jan/Fev) permitindo a recuperação das plantas e a produção de forragem de boa qualidade no final do período das chuvas e início de seca.",
            "Consorcia-se bem com Estilosantes Campo Grande.",
          ],
          obs: [
            "Não apresenta resistência à cigarrinha da cana-de-açúcar (gênero Mahanarva); Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        {
          introducao: [
            "A cultivar Xaraés (Brachiaria brizantha), coletada em Burundi. África, foi liberada pela Embrapa em 2003 após 15 anos de avaliações. É uma planta cespitosa, de 1,5 m de altura, folha lanceolada e longa, com poucos pêlos e de coloração verde-escura. Os colmos são finos e radicantes nos nós, e as inflorescência são grandes, como espiguetas em uma só fileira. A cultivar Xaraés é apomítica e penteploíde, com 45 cromossomos. Irregularidades na divisão meiótica reduzem a validade do pólen para, aproximadamente, 79%. Seus principais atributos possitivos são a alta produtividade, especialmente de folhas, a rápida rebrota e o florescimento tardio, prolongado o período de pastejo até o período seco. Além disso, apresenta bom valor nutritivo e alta capacidade de suporte, que resulta em cerca de 20% maior produtividade animal por hectare do que a cultivar Marandu. Apesar das baixas populações de cigarrinhas consistentemente observadas nas áreas experimentais, a cultivar Xaraés não apresentou nível de resistência desejável às espécies de cigarrinhas Notozulia entreriana e Deois flavopicta em ensaios sob condições controladas. Tal fato limita sua utilização extensiva em áreas com histórico de problemas com cigarrinhas, sobretudo, onde predominam as do gênero Mahanarva, significativamente mais agressivas que as outras duas. A cultivar Xaraés mostrou-se tolerante a fungos foliares e de raiz, e possui maior tolerância a solos úmido que a ‘Marandu’. A’ Xaraés’, por ter um florescimento tardio, monstrou-se suscetível à mela-das-sementes. Essa doença manifesta-se sob condições ambientais de alta umidade e baixa temperatura associadas as frentes frias típicas de outono durante o florescimento e a maturação das sementes. A cultivar Xaraés foi, aproximadamente, 15% mais produtiva do que a ‘Marandu’ na média de três cortes sob três níveis de P(0, 3-5 e 5-10 mg P Mehlich-1 dm³) e duas saturações por bases no solo: 35% a 40% e 50% a 60%. Apesar da existência de cultivares semellhantes no comércio, a identidade e origem da cultivar Xaraés são garantidas pela Empresa Brasileira de Pesquisa Agropecuária mediante produções continuadas de sementes genéticas desde 1988."
          ],
          vantagens: [
            "Elevada produtividade, especialmente de folhas.",
            "Rápida rebrota e florescimento tardio, prolongando o período de pastejo nas águas.",
            "Elevada capacidade de suporte no período chuvoso resultando em maior produção animal por área em relação a B. brizantha cv. Marandu.",
            "Adapta-se bem a solos arenosos.",
          ],
          obs: [
            "Resistência mediana às cigarrinhas típicas das pastagens. Não apresenta resistência à cigarrinha da cana-de-açúcar (gênero Mahanarva).",
            "Não tolera solos mal drenados e/ou encharcados.",
            "Menor valor nutritivo que reflete em menor ganho animal individual em relação as demais cultivares de Brachiaria brizantha."
          ],
        },
        {
          introducao: [
            "O capim-paiaguás é mais uma excelente opção para a diversificação de pastagens em solos de média fertilidade nos Cerrados. Foi selecionada com base na produtividade, vigor, produção de sementes, e apesar de não apresentar resistência à cigarrinha-das-pastagens, mostrou ter elevado potencial de produção animal no período seco, com alto teor de folhas e bom valor nutritivo. A grande vantagem da BRS Paiaguás é durante o período seco, quando apresenta maior acúmulo de forragem de melhor valor nutritivo, resultando em maiores ganhos de peso por animal e por área. Na média de três anos produziu em ganho de peso vivo por área 45 kg/ha/ano a mais que o capim-piatã usado como testemunha. Os pastos da BRS Paiaguás apresentaram bom controle de invasoras sob pastejo mais intensivo. Na integração lavoura-pecuária é de fácil utilização com milho safrinha, para produção de forragem de outono-inverno e/ou de palhada para plantio direto. Sua dessecação requer baixas doses de glifosato."
          ],
          vantagens: [
            "Elevado perfilhamento basal, comos finos e maior disponibilidade de folhas de melhor valor nutritivo no período seco.",
            "Período seco: maior ganho de peso por animal e por área, em relação a outras cultivares de B. brizanha.",
            "Alternativa para sistemas integrados: consorcia bem com milho safrinha para produção de forragem de outono-inverno e/ou de palhada para plantio direto. Fácil dessecação (semelhante a B. ruziziensis).",
            "Florescimento super precoce (dez) permitindo a recuperação das plantas e a produção de forragem de boa qualidade no final do período das chuvas e início de seca.",
          ],
          obs: [
            "Não apresenta resistência as cígarrinhas típicas das pastagens.Não recomendada para áreas com histórico de altas infestações de cigarrinhas.",
            "Não apresenta resistência à cigarrinha da cana-de-açúcar (gênero Mahanarva).",
          ],
        },
        {
          introducao: [
            "A BRS Ipyporã é recomendada para solos de fertilidade mediana, com saturação por bases (V%) entre 35 e 40%. Ela mostrou-se bastante responsiva aos níveis de fósforo (P) no solo para a produção de matéria seca total e de matéria seca foliar. Em um Latossolo Vermelho Distrófico e argiloso com 1,7 mg de P/dm3, a aplicação de 80 kg de P2O5/ha elevou o fósforo para 2,8 mg/ dm3 e a produção de matéria seca subiu de 4,7 para 8 ton/ha/ano. Embora com produções de massa menores que as cultivares Xaraés e BRS Paiaguás, apresenta uma maior porcentagem de folhas e melhor valor nutritivo, independentemente dos teores de P no solo."
          ],
          vantagens: [
            "Elevada resistência às cigarrinhas típicas das pastagens (Deois flavopicta e Notozulia entreriana) e especialmente à da cana-de-açucar (gênero Mahanarva).",
            "Melhor valor nutritivo em relação a B. brizantha cv. Marandu.",
            "Maior ganho de peso individual comparado a B. brizantha cv. Marandu."
          ],
          obs: [
            "Não tolera solos mal drenados e/ou encharcados."
          ],
        },
        {
          introducao: [
            "A Brachiaria decumbens apresenta hábito de crescimento prostrado, com altura média de 50 cm a 100 cm. Ela emite grande quantidade de estolões, bem enraizados e com pontos de crescimento protegidos. Ao contrário da brachiaria ruziziensis, a decumbens apresenta folhas curtas e eretas com bordas planas.",
          ],
          vantagens: [
            "Boa produtividade de matéria seca, mesmo sobre pastejo intensivo.",
            "Persistência em solos de baixa fertilidade natural e de elevada acidez.",
            "Boa cobertura de solo e competição com invasoras.",
          ],
          obs: [
            "Não apresenta resistência às cigarrinhas típicas das pastagens e da cana-de-açúcar (gênero Mahanarva).",
            "Pode causar fotossensibilização nos animais.",
          ],
        },
        {
          introducao: [
            "Gramínea de ciclo perene, semi-ereta a prostrada, estolonífera e rizomatosa, de 40 a 90cm de altura, estolões compridos de cor púrpura com pilosidade de cor branca, folhas lanceoladas de 4 a 6cm de comprimento e 0,8cm de largura, raízes adventícias superficiais.",
          ],
          vantagens: [
            "Tolerância à solos com alagamento temporário e/ou encharcados.",
            "Adapta-se bem a solos de baixa fertilidade natural.",
          ],
          obs: [
            "Menor valor nutritivo do que outras braquiárias.",
            "multiplica cigarrinhas típicas das pastagens, porém tolera ataque em condições de campo.",
            "Estabelecimento Lento.",
          ],
        },
        {
          introducao: [
            "Planta rústica, de porte baixo e rastejante por apresentar hábito de crescimento estolonífero. Sob condições de livre crescimento, pode alcançar 1,0 m de altura. – Principais características agronômicas: Tolera solos encharcados e até mesmo aqueles submetidos a alagamentos temporários e periódicos.",
          ],
          vantagens: [
            "Tolerância à solos com alagamento temporário e/ou encharcados.",
            "Adapta-se bem a solos de baixa fertilidade natural.",
          ],
          obs: [
            "Menor valor nutritivo do que outras braquiárias.",
            "Multiplica cigarrinhas típicas das pastagens, porém tolera ataque em condições de campo.", "Estabelecimento Lento. Dormência elevada das sementes.",
          ],
        },
        {
          introducao: [
            "A Brachiaria ruziziensis é uma planta perene. Apresenta em média 1 metro de altura, além de ter um rápido estabelecimento e boa germinação das sementes, mesmo sem incorporação.",
          ],
          vantagens: [
            "Melhor valor nutritivo em relação a outras cultivares de Brachiaria.",
            "Sistemas integrados: consorcia bem com milho safrinha para produção de forragem de outono-inverno e/ou de palhada para plantio direto. Fácil dessecação.",
            "Rápida formação de pastagem e utilização por animais em condições de fertilidade adequada."
          ],
          obs: [
            "Altamente suscetível às cigarrinhas das pastagens.",
            "Baixa persistência em solos de baixa fertilidade natural e/ou mal drenados.",
            "Não tolera estiagem ou baixas temperaturas.",
          ],
        },
        {
          introducao: [
            "Primeira cultivar de Urochloa Ruziziensis desenvolvida pelo programa de melhoramento genético de forrageiras conduzido pela Embrapa em parceria com a Unipasto. Essa cultivar foi desenvolvida para as condições de solo e clima no Brasil e recebeu o nome de BRS Integra por se destinar aos sistemas de integração lavoura, pecuária e florestas (ILPF).",
          ],
          vantagens: [
          ],
          obs: [
          ],
        },
      ],
      utilizacoes: [
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
      ],
      indicacoes: [
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
      ],
      infosTabelaNome: [
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
      ],
      infosTabelaValor: [
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
      ]
    },


    Panicum: {
      // DADOS DA CATEGORIA
      grid: {
        images: [
          '/imgs/products/PANICUM/Tanzania/panicum_tanzania_2_grid.jpg',
          '/imgs/products/PANICUM/Mombaca/panicum_mombaca_5_grid.jpg',
          '/imgs/products/PANICUM/Zuri/panicum_zuri_.jpg',
          '/imgs/products/PANICUM/Quenia/panicum_quenia_1_grid.jpg',
          '/imgs/products/PANICUM/Tamani/panicum_tamani_1_grid.jpg',
          '/imgs/products/PANICUM/Massai/panicum_massai_2_grid.jpg',
          '/imgs/products/PANICUM/Aruana/panicum_aruana_4_grid.jpg',


        ],
        titles: [
          'Tanzânia',
          'Mombaça',
          'Zuri',
          'Quênia',
          'Tamani',
          'Massai',
          'Aruana',

        ],
        descriptions: [
          'Panicum maximum cv. Tanzânia-1',
          'Panicum maximum cv. Mombaça',
          'Panicum maximum cv. BRS Zuri',
          'Panicum maximum cv. BRS Quênia',
          'Panicum maximum cv. BRS Tamani',
          'Panicum maximum cv. Massai',
          'Panicum maximum cv. Aruana IZ-5',

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
      intro: [
        {
          img: '/imgs/products/PANICUM/Tanzania/panicum_tanzania_4_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/PANICUM/Mombaca/panicum_mombaca_6_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/PANICUM/Zuri/panicum_zuri_.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/PANICUM/Quenia/panicum_quenia_2_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/PANICUM/Tamani/panicum_tamani_2_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/PANICUM/Massai/panicum_massai_1_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/PANICUM/Aruana/panicum_aruana_1_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
      ],
      cabecalho: [
        {
          title: "Tanzânia",
          subtitle: "(Tanzânia-1)",
          description: "Panicum maximum cv. Tanzânia-1",
        },
        {
          title: "Mombaça",
          subtitle: "",
          description: "Panicum maximum cv. Mombaça",
        },
        {
          title: "Zuri",
          subtitle: "",
          description: "Panicum maximum cv. BRS Zuri",
        },
        {
          title: "Quênia",
          subtitle: "",
          description: "Panicum maximum cv. BRS Quênia",
        },
        {
          title: "Tamani",
          subtitle: "",
          description: "Panicum maximum cv. BRS Tamani",
        },
        {
          title: "Massai",
          subtitle: "",
          description: "Panicum maximum cv. Massai",
        },
        {
          title: "Aruana",
          subtitle: "(Aruana IZ-5)",
          description: "Panicum maximum cv. Aruana IZ-5",
        },
      ],
      slides: [
        [
          '/imgs/products/PANICUM/Tanzania/panicum_tanzania_1_slide.jpg',
          '/imgs/products/PANICUM/Tanzania/panicum_tanzania_3_slide.jpg',
          '/imgs/products/PANICUM/Tanzania/panicum_tanzania_5_slide.jpg',
          '/imgs/products/PANICUM/Tanzania/panicum_tanzania_6_slide.jpg',
        ],
        [
          '/imgs/products/PANICUM/Mombaca/panicum_mombaca_1_slide.jpg',
          '/imgs/products/PANICUM/Mombaca/panicum_mombaca_2_slide.jpg',
          '/imgs/products/PANICUM/Mombaca/panicum_mombaca_3_slide.jpg',
          '/imgs/products/PANICUM/Mombaca/panicum_mombaca_4_slide.jpg',

        ],
        [
          '/imgs/products/PANICUM/Zuri/panicum_zuri_.jpg',
          '/imgs/products/PANICUM/Zuri/panicum_zuri_.jpg',
          '/imgs/products/PANICUM/Zuri/panicum_zuri_.jpg',
        ],
        [
          '/imgs/products/PANICUM/Quenia/panicum_quenia_3_slide.jpg',
          '/imgs/products/PANICUM/Quenia/panicum_quenia_4_slide.jpg',
          '/imgs/products/PANICUM/Quenia/panicum_quenia_5_slide.jpg',
          '/imgs/products/PANICUM/Quenia/panicum_quenia_6_slide.jpg',

        ],
        [
          '/imgs/products/PANICUM/Tamani/panicum_tamani_3_slide.jpg',
          '/imgs/products/PANICUM/Tamani/panicum_tamani_4_slide.jpg',
          '/imgs/products/PANICUM/Tamani/panicum_tamani_5_slide.jpg',

        ],
        [
          '/imgs/products/PANICUM/Massai/panicum_massai_3_slide.jpg',
          '/imgs/products/PANICUM/Massai/panicum_massai_3_slide.jpg',
          '/imgs/products/PANICUM/Massai/panicum_massai_3_slide.jpg',
        ],
        [
          '/imgs/products/PANICUM/Aruana/panicum_aruana_2_slide.jpg',
          '/imgs/products/PANICUM/Aruana/panicum_aruana_3_slide.jpg',
          '/imgs/products/PANICUM/Aruana/panicum_aruana_5_slide.jpg',
          '/imgs/products/PANICUM/Aruana/panicum_aruana_6_slide.jpg',
          '/imgs/products/PANICUM/Aruana/panicum_aruana_7_slide.jpg',
        ],
      ],
      textos: [
        {
          introducao: [
            "O capim-tanzânia (Panicum maximum cv. Tanzânia-1) é uma alternativa para áreas de solo com maior fertilidade, permitindo ao produtor diversificar as espécies presentes na fazenda. Com isso, os recursos naturais, principalmente o solo, podem ser utilizados de acordo com sua potencialidade, permitindo diferentes estratégias de manejo do rebanho e reduzindo o risco como resultado da diversificação de pastagens."
          ],
          vantagens: [
            "Os principais beneficiários são os pecuaristas, com incrementos na produtividade e possibilidade de maior diversificação das pastagens.",
            "As empresas que comercializam sementes também são beneficiadas, pois podem oferecer produtos diversificados.",
            "As empresas que vendem fertilizantes tendem a comercializar mais produtos, já que esta forrageira requer maior nível de fertilidade para expressar seu potencial produtivo.",
            "A cultivar Tanzânia-1 tem sido utilizada pelos produtores no sistema de integração lavoura/pecuária. Na pecuária de leite, vem sendo usada para substituir o capim-elefante.",
          ],
          obs: [
          ],
        },
        {
          introducao: [
            "O Capim Mombaça é uma cultivar de Panicum maximum com origem africana e foi batizada em homenagem à cidade queniana de mesmo nome. Lançada em 1993 pela Embrapa – Gado de Corte, como alternativa para diversificação e intensificação da pecuária.",
          ],
          vantagens: [
            "É opção para solos de alta fertilidade, sendo muito responsiva a adubação.",
            "Possui certa tolerância ao frio e a solos encharcados e/ou mal drenados.",
            "Tem alta resistência a cigarrinhas das pastagens e à doença foliar causada pelo fungo Bipolaris maydis.",
            "Com alta produção de massa seca de qualidade superior e alto teor proteico, cobre rapidamente o solo, podendo ser utilizada para ensilagem.",
            "Sua adoção tem se dado especialmente em áreas de produção de leite e, mais recentemente, em sistemas de Integração Lavoura-Pecuária (ILP) e tem persistência média de seis anos.",
            "Pode ser conduzido tanto em pastejo contínuo como em pastejo rotacionado.",
          ],
          obs: [
            "Suscetível à cárie do sino (Tilletia ayressi) e baixa tolerância à seca.",
          ],
        },
        {
          introducao: [
            "A BRS Zuri é uma gramínea cespitosa, que deve ser manejada preferencialmente sob pastejo rotacionado. Recomenda-se que o pasto seja manejado com altura de entrada de 70-75 cm e altura de saída de 30-35 cm. Este manejo promoveu bom controle do desenvolvimento de colmos e florescimento na Amazônia, assegurando a manutenção da estrutura do pasto e bons níveis de produção animal. Apresenta tolerância moderada ao encharcamento do solo, semelhante ao Tanzânia-1, porém se desenvolve melhor em solos bem drenados, sendo uma opção para diversificação de pastagens nos biomas Amazônia e Cerrado. Suas principais características são a elevada produção, o alto valor nutritivo, a resistência às cigarrinha-das-pastagens e o alto grau de resistência à mancha das folhas, causada pelo fungo Bipolaris maydis. Esta solução tecnológica foi desenvolvida pela Embrapa em parceria com outras instituições.",
          ],
          vantagens: [
            "Produtividade, qualidade, elevado grau de resistência ao fungo foliar Bipolaris maydis e produtividade animal.",
          ],
          obs: [
          ],
        },
        {
          introducao: [
            "A BRS Quênia é uma cultivar híbrida de Panicum maximum, proveniente do programa de melhoramento genético da Embrapa., lançada em 2017.",
          ],
          vantagens: [
            "A BRS Quênia é o uma cultivar produtiva e de excelente qualidade, de porte intermediário, com folhas macias e colmos tenros, alto perfilhamento e de fácil manejo.",
            "É muito responsiva a adubação, e com boa tolerância ao frio, muito resistente a cigarrinha típica das pastagens Bipolaris maydis.",
            "É indicada para gado de corte, leiteiro, ovinos, caprinos e equinos. Pode ser manejado em pastejo contínuo ou rotacionado.",
          ],
          obs: [
            "É exigente em fertilidade, tem baixa tolerância à seca e não tolera encharcamento do solo.",
          ],
        },
        {
          introducao: [
            "É um panicum híbrido, lançada em 2015, resultado de cruzamento realizado pela Embrapa – Gado de corte. Tamani vem do Suaíli, dialeto falado no Quênia, que significa “precioso”.",
          ],
          vantagens: [
            "Apresenta como características porte baixo, com alta produção de folhas de alto valor nutritivo (elevados teores de proteína bruta e digestibilidade), produtividade e vigor, sendo de fácil manejo e resistente às cigarrinhas das pastagens e aos fungos Bipolaris maydis; Curvularia spp.",
            "Sua alta qualidade e adaptação fazem com que seja indicada para ensilagem, fenação e pastejo de bovinos, caprinos, ovinos e equinos.",
          ],
          obs: [
            "Exigente em fertilidade, baixa tolerância ao frio e ao encharcamento",
          ],
        },
        {
          introducao: [
            "O capim massai é Panicum maximum oriundo da África, lançado em 2001 pela Embrapa- Gado de Corte. Foi batizado em homenagem a grupo étnico africano de mesmo nome.",
          ],
          vantagens: [
            "É menos exigente em fertilidade em comparação a outros panincuns, é muito responsivo a adubação.",
            "A planta tem como característica o crescimento formando touceiras com altura média de 60 cm.",
            "Possui excelente produção de forragem com grande velocidade de estabelecimento e de rebrota, com média tolerância ao frio e boa resistência ao fogo.",
            "Possui alta resistência ao fungo foliar Bipolaris maydis e ao fungo causador da cárie do sino.",
            "Produz forragem de alta qualidade com alto teor de proteína, podendo ser usada para ensilagem e fenação.",
            "É uma planta rústica, tolera solos temporariamente alagados e é tolerante à seca.",
            "É indicada para gado de corte, leiteiro, ovinos, caprinos e equinos.",
            "Pode ser manejado em pastejo contínuo ou rotacionado, tem boa persistência desde que respeitada a altura de pastejo.",

          ],
          obs: [
            "Tem baixa tolerância ao frio.",
            "Se mal manejado, pode trazer sérios problemas a equinos.",
          ],
        },
        {
          introducao: [
            "O capim Aruana foi introduzido no Instituto de Zootecnia, em Nova Odessa, no ano de 1974, as sementes foram recebidas da África em 1974 e após testes, foi lançado em 1989 como IZ-5.",
          ],
          vantagens: [
            "É utilizado amplamente e com sucesso na pecuária nacional e seu uso é muito difundido e adotado na caprinocultura e ovinocultura.",
            "É bastante aceito e suporta inclusive, o pastejo baixo dos ovinos e equinos e, quando for o caso, de bovinos.",
            "Tem boa produção de sementes, garante o restabelecimento rápido da pastagem com ótima recuperação em caso de queimadas, geadas, pragas ou degradação por falha de manejo.",
            "Os principais beneficiários são os pecuaristas, com incrementos na produtividade e possibilidade de maior diversificação das pastagens.",
            "As empresas que comercializam sementes também são beneficiadas, pois podem oferecer produtos diversificados.",
            "As empresas que vendem fertilizantes tendem a comercializar mais produtos, já que esta forrageira requer maior nível de fertilidade para expressar seu potencial produtivo.",
            "A cultivar Tanzânia-1 tem sido utilizada pelos produtores no sistema de integração lavoura/pecuária.",
            "Na pecuária de leite, vem sendo usada para substituir o capim-elefante.",
          ],
          obs: [
            "Apresenta elevada exigência em fertilidade e umidade",
          ],
        },
      ],
      utilizacoes: [
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
      ],
      indicacoes: [
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
      ],
      infosTabelaNome: [
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
      ],
      infosTabelaValor: [
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
        [
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
      ]
    },


    Leguminosas: {
      // DADOS DA CATEGORIA
      grid: {
        images: [
          '/imgs/products/LEGUMINOSAS/Crotalaria_Ochroleuca/leguminosa_crotala╠üria_Ochroleuca_.jpg',
          '/imgs/products/LEGUMINOSAS/Crotalaria_Spectabilis/leguminosa_crotalaria_spectabilis_4_grid.jpg',
          '/imgs/products/LEGUMINOSAS/EstilosanteCampoGrande/leguminosa_estilosantes_campo-grande_.jpg',
          '/imgs/products/LEGUMINOSAS/Feijao_Guandu/leguminosa_feijao_guandu_1_grid.jpg',
          '/imgs/products/LEGUMINOSAS/Mandarim/leguminosa_mandarim_1_grid_slide.jpg',
        ],
        titles: [
          'Crotalária Ochroleuca',
          'Crotalaria spectabilis',
          'Estilosantes Campo Grande',
          'Feijão-guandú',
          'Mandarim ',
        ],
        descriptions: [
          'Leguminosas cv.Marandú',
          'Leguminosas cv.BRS Piatã',
          'Leguminosas cv.Xaraés',
          'Cajanus cajan (L.) Millsp.',
          'Cajanus cajan cv. BRS Mandarim',
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
      intro: [
        {
          img: '/imgs/products/LEGUMINOSAS/Crotalaria_Ochroleuca/leguminosa_crotala╠üria_Ochroleuca_.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/LEGUMINOSAS/Crotalaria_Spectabilis/leguminosa_crotalaria_spectabilis_2_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/LEGUMINOSAS/EstilosanteCampoGrande/leguminosa_estilosantes_campo-grande_.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/LEGUMINOSAS/Feijao_Guandu/leguminosa_feijao_guandu_3_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
        {
          img: '/imgs/products/LEGUMINOSAS/Mandarim/leguminosa_mandarim_1_banner.jpg',
          txt: "Produtividade e resultado que seu campo precisa!"
        },
      ],
      cabecalho: [
        {
          title: "Crotalária Ochroleuca",
          subtitle: "",
          description: "",
        },
        {
          title: "Crotalaria spectabilis",
          subtitle: "",
          description: "",
        },
        {
          title: "Estilosantes Campo Grande",
          subtitle: "",
          description: "S. capitata e S. macrocephala cv. Campo Grande",
        },
        {
          title: "Feijão-guandú",
          subtitle: "(Feijão-guandú anão IAPAR 43 - Aratã)",
          description: "Cajanus cajan (L.) Millsp",
        },
        {
          title: "Mandarim",
          subtitle: "(Feijão guandú)",
          description: "Cajanus cajan cv. BRS Mandarim",
        },
      ],
      slides: [
        [
          '/imgs/products/LEGUMINOSAS/Crotalaria_Ochroleuca/leguminosa_crotala╠üria_Ochroleuca_.jpg',
          '/imgs/products/LEGUMINOSAS/Crotalaria_Ochroleuca/leguminosa_crotala╠üria_Ochroleuca_.jpg',
          '/imgs/products/LEGUMINOSAS/Crotalaria_Ochroleuca/leguminosa_crotala╠üria_Ochroleuca_.jpg',

        ],
        [
          '/imgs/products/LEGUMINOSAS/Crotalaria_Spectabilis/leguminosa_crotalaria_spectabilis_1_slide.jpg',
          '/imgs/products/LEGUMINOSAS/Crotalaria_Spectabilis/leguminosa_crotalaria_spectabilis_3_slide.jpg',

        ],
        [
          '/imgs/products/LEGUMINOSAS/EstilosanteCampoGrande/leguminosa_estilosantes_campo-grande_.jpg',
          '/imgs/products/LEGUMINOSAS/EstilosanteCampoGrande/leguminosa_estilosantes_campo-grande_.jpg',
          '/imgs/products/LEGUMINOSAS/EstilosanteCampoGrande/leguminosa_estilosantes_campo-grande_.jpg',

        ],
        [
          '/imgs/products/LEGUMINOSAS/Feijao_Guandu/leguminosa_feijao_guandu_2_slide.jpg',
          '/imgs/products/LEGUMINOSAS/Feijao_Guandu/leguminosa_feijao_guandu_2_slide.jpg',
          '/imgs/products/LEGUMINOSAS/Feijao_Guandu/leguminosa_feijao_guandu_2_slide.jpg',

        ],
        [
          '/imgs/products/LEGUMINOSAS/Mandarim/leguminosa_mandarim_1_grid_slide.jpg',
          '/imgs/products/LEGUMINOSAS/Mandarim/leguminosa_mandarim_1_grid_slide.jpg',
          '/imgs/products/LEGUMINOSAS/Mandarim/leguminosa_mandarim_1_grid_slide.jpg',

        ],
      ],
      textos: [
        {
          introducao: [
            "É uma leguminosa anual de primavera-verão de ciclo relativamente longo. É agressiva e rústica, resistente às condições adversas de clima e solo por causa das raízes profundas que rompem as camadas adensadas do solo. É utilizada na sucessão da soja em áreas com infestação mista dos nematoides das galhas e das lesões radiculares, com destaque para o Pratylenchus brachyurus. Consorcia muito bem com o Milheto. Apresenta boa produção de biomassa e fixação de nitrogênio, sendo também recomendada para recuperação de solos degradados. Culturas/utilização: soja, milho, culturas perenes e cana-de-açúcar.",
          ],
          vantagens: [
            "Controle de nematoides: a crotalária-ochroleuca é considerada a leguminosa mais eficiente na redução da população de nematoides. Quando utilizada após o cultivo da soja, evita a ocorrência de infestações de nematoides.",
            "Melhoria da qualidade do solo: o sistema radicular da crotalária-ochroleuca é agressivo, o que melhora a qualidade física do solo. As raízes conseguem romper camadas densas do solo, tornando-o resistente ao estresse hídrico. A crotalária-ochroleuca também contribui para a melhoria da estrutura do solo, aumentando a capacidade de retenção de água e reduzindo a erosão.",
            "Adubação verde: a crotalária-ochroleuca é uma ótima opção de adubo verde, principalmente nas lavouras de cana-de-açúcar, hortaliças, algodão e outros grãos. A planta libera substâncias químicas no solo que inibem o desenvolvimento de organismos, reduzindo a necessidade de pesticidas.",
            "Rusticidade: a crotalária-ochroleuca é uma espécie rústica que apresenta desenvolvimento viável em solos com baixa disponibilidade de nutrientes e de matéria orgânica. Também possui boa capacidade de resistência ao déficit hídrico.",
            "Outros benefícios: a crotalária-ochroleuca também contribui para a redução de plantas daninhas na área, nitrogenação do solo e atrai polinizadores e outras espécies benéficas para a lavoura."
          ],
          obs: [
          ],
        },
        {
          introducao: [
            "É uma leguminosa anual de primavera-verão cuja principal característica é ser má hospedeira de nematoides. É considerada a leguminosa mais eficiente na redução da população da maior parte dos nematoides, com destaque para os nematoides formadores de galhas, cistos e lesões radiculares.Destaca-se também pela capacidade de fixação biológica de nitrogênio e pela produção de massa verde.Devido ao seu porte médio, pode ser utilizada também nas entrelinhas de culturas perenes, sem prejudicar o trânsito de máquinas ou pessoas. Atualmente é a espécie mais utilizada no consórcio com milho de segunda safra, com o objetivo de reduzir a população de nematoides. Culturas/utilização: soja, milho, culturas perenes, algodão, hortaliças e cana-de-açúcar. Favorece o controle de nematoides.",
          ],
          vantagens: [
            "Controle de nematóides: A Crotalária-spectabilis é considerada a espécie mais eficiente na redução de nematóides de galha, cisto e lesões radiculares em áreas de culturas anuais ou perenes. As sementes da Crotalária-spectabilis contêm proteínas que ajudam a reduzir as populações de nematóides. A planta também adiciona matéria orgânica ao solo, estimulando o desenvolvimento de microfloras que controlam os nematóides.",
            "Fixação biológica de nitrogênio: A Crotalária-spectabilis tem uma excelente fixação biológica de nitrogênio atmosférico. Quando em conjunto com bactérias presentes, a planta atua na fixação de nitrogênio no solo.",
            "Produção de massa verde: A Crotalária-spectabilis é uma ótima produtora de massa verde. A planta pode ser utilizada como adubação verde, reduzindo a necessidade de aplicação de fertilizantes no solo.",
            "Descompactação do solo: A Crotalária-spectabilis tem um sistema radicular ramificado e raiz pivotante profunda, que auxiliam na descompactação do solo.",
            "Proteção contra a erosão: A Crotalária-spectabilis promove a proteção do solo contra a erosão.",
            "Adaptação a climas tropicais e subtropicais: A Crotalária-spectabilis adapta-se a climas tropicais e subtropicais.",

          ],
          obs: [
          ],
        },
        {
          introducao: [
            "O estilosantes Campo Grande é uma mistura de duas espécies de leguminosas, Stylosanthes capitata e S. macrocephala, coletadas em solos de Areia Quartzosa e de baixa fertilidade, remanescentes de experimento anterior, que, após vários multicruzamentos, teve sua seleção definida. O Campo Grande é um composto de duas espécies forrageiras: o Stylosanthes macrocephala, que possui um crescimento mais horizontal, com folhas pontiagudas e flores, na sua maioria, amarelas; e o Stylosanthes capitata, que possui hábito de crescimento mais vertical, com folhas mais arredondadas e flores que variam da cor bege ao amarelo. Ambas as espécies podem chegar a mais de um metro de altura e seu florescimento ocorre nos meses de abril a maio, respectivamente, e a principal característica da sua persistência é a ressemeadura natural, já que as suas plantas são predominantemente anuais e bianuais.",
          ],
          vantagens: [
            "Resistente à antracnose.",
            "Boa qualidade de forragem.",
            "Boa cobertura do solo.",
            "Contribui para a redução de plantas daninhas na área.",
            "Melhoria da dieta animal.",
            "Nitrogenação do solo.",
          ],
          obs: [
            "Necessidade de cuidados no manejo do pasto para evitar o domínio ou o desaparecimento da leguminosa.",
            "Não tolera solos mal drenados e/ou encharcados.",
          ],
        },
        {
          introducao: [
            "O guandu anão (Cajanus cajan (L.) Millsp.) é uma leguminosa originária da Ásia, rica em proteínas e bem adaptada às condições brasileiras. A variedade IAPAR 43 – Aratã foi desenvolvida para produção de grãos. Mas também pode ser utilizada como adubo verde descompactador do solo. Pode ser fornecido aos animais em consórcio com gramíneas, como feno, picado ainda verde, farelo (moído quando seco), na área para ser pastejado, ou como banco de proteína na área.",
          ],
          vantagens: [
            "Porte baixo que facilita o manejo.",
            "Adubo verde com grande capacidade de nodulação e fixação de nitrogênio.",
            "Cicla nutrientes e promove a liberação de fosforo no solo.",
            "O vigoroso sistema radicular da cultura descompacta o solo em subsuperfície.",
            "Rico em proteínas, pode ser utilizado tanto na alimentação humana como animal.",
            "É pouco exigente em relação à fertilidade do solo e resistente à seca.",
          ],
          obs: [
            "Não tolera solos encharcados e seu estabelecimento é lento",
          ],
        },
        {
          introducao: [
            "É uma leguminosa originária da Índia, lançada no Brasil em 2007, também é conhecida como feijão guandu.",
          ],
          vantagens: [
            "É de fácil implantação e manejo, inclusive em solos de baixa fertilidade, tem alta tolerância a solos ácidos, sendo muito responsivo a adubação.",
            "Tem alta produtividade de matéria seca, boa persistência, tolerando longos períodos de estiagem.",
            "É indicada para alimentação animal, adubação verde e recuperação de pastagens degradadas. Pode ser utilizado em apoio ao processo de produção de cana, na recuperação de áreas degradadas e no cultivo consorciado com milho e braquiária.",
          ],
          obs: [
            "Não tolera solos encharcados e seu estabelecimento é lento",
          ],
        },
      ],
      utilizacoes: [
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
        [
          "/icons/icone_pastoreio.svg",
          "/icons/icone_fenacao.svg",
          "/icons/icone_palhada.svg",
        ],
      ],
      indicacoes: [
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
        [
          "/icons/icone_gado_de_leite.svg",
          "/icons/icone_gado_de_corte.svg",
        ],
      ],
      infosTabelaNome: [
        [
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
        [
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
        [
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
        [
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
        [
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
      ],
      infosTabelaValor: [
        [
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
        [
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
        [
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
        [
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
        [
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
      ]

    },

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

