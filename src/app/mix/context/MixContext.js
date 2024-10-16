import { createContext, useState, useRef } from 'react';
export const MixContext = createContext();

export const MixProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('gramineas')
  const [selectedMix, setSelectedMix] = useState(null)
  
  const datas = {
    gramineas:{
      menu:{
        aveiabranca:{
          url:"/imgs/gramineas-aveia-branca.png",
          nome:"Aveia Branca",
        },
        aveiapreta:{
          url:"/imgs/gramineas-aveia-preta.png",
          nome:"Aveia Preta",
        },
        aveiaucraniana:{
          url:"/imgs/gramineas-aveia-preta.png",
          nome:"Aveia Ucraniana",
        },
        centeio:{
          url:"/imgs/gramineas-centeio.png",
          nome:"Centeio",
        },
        milheto1:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Milheto BRS 1501",
        },
        coracana:{
          url:"/imgs/coracana.png",
          nome:"Capim Coracana",
        },
        sorgo:{
          url:"/imgs/sorgo.png",
          nome:"Sorgo BRS Ponta Negra",
        },
        outras:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Outras forrageiras",
        },
      },
      
    },
    leguminosas:{
      menu:{
        ervilhaca:{
          url:"/imgs/ervilhaca-comum.png",
          nome:"Ervilhaca comum",
        },
        ochro:{
          url:"/imgs/ochroleuca.png",
          nome:"Crotalária Ochroleuca",
        },
        spec:{
          url:"/imgs/spectabilis.webp",
          nome:"Crotalária Spectabilis",
        },
        guandu:{
          url:"/imgs/guandu-forrageiro.png",
          nome:"Guandú forrageiro",
        },
        juncea:{
          url:"/imgs/juncea.png",
          nome:"Crotalária juncea",
        },
        ervilha:{
          url:"/imgs/ervilha-forrageira.png",
          nome:"Ervilha forrageira",
        },
        feijao:{
          url:"/imgs/mungo.jpg",
          nome:"Feijão mungo",
        },
        estilosantes:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Estilosantes Campo Grande",
        },
      },
    },
    asteraceas:{
      menu:{
        girassol:{
          url:"/imgs/girassol.png",
          nome:"Girassol",
        },
      },
    },
    poligonaceas:{
      menu:{
        trigo:{
          url:"/imgs/trigo-mourisco.png",
          nome:"Trigo mourisco",
        },
      },
    },
    brassicas:{
      menu:{
        nabo:{
          url:"/imgs/nabo-forrageiro.png",
          nome:"Nabo forrageiro",
        },
        nabope:{
          url:"/imgs/nabopato.png",
          nome:"Nabo pé de pato",
        },
        crambe:{
          url:"/imgs/crambe.jpg",
          nome:"Crambe",
        },
      },
    },
  }


  const dataCobertura = {
    palha:{
      img: "/imgs/mix-palha.png",
      titulo: "Mix Palha",
      lista: [
        "Crotalária Ochroleuca",
        "Guandu Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 kg/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
      lista2: [
        "N",
        "K",
      ]
    },
    integra:{
      img: "/imgs/mix-integra.png",
      titulo: "Mix Integra",
      lista: [
        "Guandu Forrageiro",
        "Brachiaria Ruziziensis",
        "Crambe",
        "Trigo Mourisco",
      ],
      recomendacao: "Recomendação - 25kg/há",
      epoca: "Out - Mar",
      manejo: "70 a 80 dias",
      lista2: [
        "N",
        "P"
      ]
    },
    meuSolo:{
      img: "/imgs/mix-meu-solo.png",
      titulo: "Mix Meu Solo",
      lista: [
        "Crotalária Spectábilis",
        "Milheto ADR 300",
      ],
      recomendacao: "Recomendação - 20 kg/Ha",
      epoca: "Set - Mar",
      manejo: "70 a 90 dias",
      lista2: [
        "N",
        "K",
      ]
    },
    fast:{
      img: "/imgs/mix-fast.png",
      titulo: "Mix Fast Plants",
      lista: [
        "Crotalária Ochroleuca",
        "Milheto BRS 1501",
        "Nabo Forrageiro",
        "Crambe",
        "Trigo Mourisco",
      ],
      recomendacao: "Recomendação - 25 kg/há",
      epoca: "Fev - Abr",
      manejo: "50 a 70 dias",
      lista2: [
        "K",
        "N",
        "P"
      ]
    },
    milhosr:{
      img: "/imgs/mix-consorcio-sr.png",
      titulo: "Mix Milho Semente SR 14",
      lista: [
        "Crotalária Spectábilis",
        "Brachiaria Ruziziensis",
      ],
      recomendacao: "Recomendação - 14kg/há",
      epoca: "Set - Mar",
      manejo: "80 a 100 dias",
      lista2: [
        "N",
      ]
    },
    milhosp:{
      img: "/imgs/mix-consorcio-sp.png",
      titulo: "Mix Milho Sementes SR 14",
      lista: [
        "Crotalária Spectábilis",
        "Braquiaria Brizantha Piatã",
      ],
      recomendacao: "Recomendação - 14kg/há",
      epoca: "Set - Mar",
      manejo: "80 a 100 dias",
      lista2: [
        "N",
      ]
    },
    cana:{
      img: "/imgs/mix-cana.png",
      titulo: "Mix Cana",
      lista: [
        "Crotalária Ochroleuca",
        "Crotalária Spectábilis",
        "Crotalária Juncea",
        "Guando Forrageiro",
        "Girassol",
        "Nabo Forrageiro",
        "Crambe",
        "Trigo Mourisco",
      ],
      recomendacao: "Recomendação - 30 kg/há",
      epoca: "Fev - Abr",
      manejo: "80 a 100 dias",
      lista2: [
        "K",
        "Ca",
        "B",
        "N",
        "P"
      ]
    },
    cafe:{
      img: "/imgs/mix-café.png",
      titulo: "Mix Café",
      lista: [
        "Crotalária Ochroleuca",
        "Crotalária Spectábilis",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Milheto BRS 1501",
        "Nabo Forrageiro",
        "Crambe",
        "Trigo Mourisco",
      ],
      recomendacao: "Recomendação - 14 kg/há",
      epoca: "Fev - Abr",
      manejo: "80 a 100 dias",
      lista2: [
        "K",
        "Ca",
        "B",
        "N",
        "P"
      ]
    },
    winter:{
      img: "/imgs/mix-winter.png",
      titulo: "Mix Winter",
      lista: [
        "Ervilhaca",
        "Aveia Preta",
        "Aveia Ucraniana",
        "Centeio",
        "Nabo Forrageiro",
        "Crambe",
        "Trigo Mourisco",
      ],
      recomendacao: "Recomendação - 50kg/há",
      epoca: "Fev - Abr",
      manejo: "80 a 100 dias",
      lista2: [
        "N",
        "P"
      ]
    }
  }
  

  console.log(selectedMix)
  return (
    <MixContext.Provider value={{
      setSelectedMenu, 
      selectedMenu,
      datas,
      selectedMix,
      setSelectedMix,
      dataCobertura
      }}>
      {children}
    </MixContext.Provider>
  )
}