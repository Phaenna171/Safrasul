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
        milheto2:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Milheto ADR 300",
        },
        coracana:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Capim Coracana",
        },
        sorgo:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Sorgo BRS Ponta Negra",
        },
      },
      
    },
    leguminosas:{
      menu:{
        aveiabranca:{
          url:"/imgs/gramineas-aveia-branca.png",
          nome:"Aveia Branca",
        },
        aveiapreta:{
          url:"/imgs/gramineas-aveia-preta.png",
          nome:"Aveia Preta",
        },
        centeio:{
          url:"/imgs/gramineas-centeio.png",
          nome:"Centeio",
        },
        milheto:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Milheto",
        },
      },
    },
    asteraceas:{
      menu:{
        aveiabranca:{
          url:"/imgs/gramineas-aveia-branca.png",
          nome:"Aveia Branca",
        },
        aveiapreta:{
          url:"/imgs/gramineas-aveia-preta.png",
          nome:"Aveia Preta",
        },
        centeio:{
          url:"/imgs/gramineas-centeio.png",
          nome:"Centeio",
        },
        milheto:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Milheto",
        },
      },
    },
    poligonaceas:{
      menu:{
        aveiabranca:{
          url:"/imgs/gramineas-aveia-branca.png",
          nome:"Aveia Branca",
        },
        aveiapreta:{
          url:"/imgs/gramineas-aveia-preta.png",
          nome:"Aveia Preta",
        },
        centeio:{
          url:"/imgs/gramineas-centeio.png",
          nome:"Centeio",
        },
        milheto:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Milheto",
        },
      },
    },
    brassicas:{
      menu:{
        aveiabranca:{
          url:"/imgs/gramineas-aveia-branca.png",
          nome:"Aveia Branca",
        },
        aveiapreta:{
          url:"/imgs/gramineas-aveia-preta.png",
          nome:"Aveia Preta",
        },
        centeio:{
          url:"/imgs/gramineas-centeio.png",
          nome:"Centeio",
        },
        milheto:{
          url:"/imgs/gramineas-milheto.png",
          nome:"Milheto",
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
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
    },
    integra:{
      img: "/imgs/mix-integra.png",
      titulo: "Mix Integra",
      lista: [
        "Crotalária Ochroleuca",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
    },
    meuSolo:{
      img: "/imgs/mix-meu-solo.png",
      titulo: "Mix Meu Solo",
      lista: [
        "Crotalária Ochroleuca",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
    },
    fast:{
      img: "/imgs/mix-fast.png",
      titulo: "Mix Fast Plants",
      lista: [
        "Crotalária Ochroleuca",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
    },
    milhosr:{
      img: "/imgs/mix-consorcio-sr.png",
      titulo: "Mix Consórcio Milho SR 14",
      lista: [
        "Crotalária Ochroleuca",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
    },
    milhosp:{
      img: "/imgs/mix-consorcio-sp.png",
      titulo: "Mix Consórcio Milho SP 14",
      lista: [
        "Crotalária Ochroleuca",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
    },
    cana:{
      img: "/imgs/mix-cana.png",
      titulo: "Mix Cana",
      lista: [
        "Crotalária Ochroleuca",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
    },
    cafe:{
      img: "/imgs/mix-café.png",
      titulo: "Mix Café",
      lista: [
        "Crotalária Ochroleuca",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
    },
    winter:{
      img: "/imgs/mix-winter.png",
      titulo: "Mix Winter",
      lista: [
        "Crotalária Ochroleuca",
        "Guando Forrageiro",
        "Brachiaria Ruziziensis",
        "Brachiaria Brizantha Piatã",
        "Milheto BRS 1501"
      ],
      recomendacao: "Recomendação - 20 KG/Ha",
      epoca: "Out - Mar",
      manejo: "80 a 100 dias",
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