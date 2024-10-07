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

  

  console.log(datas[selectedMenu].menu)
  return (
    <MixContext.Provider value={{
      setSelectedMenu, 
      selectedMenu,
      datas,
      selectedMix,
      setSelectedMix
      }}>
      {children}
    </MixContext.Provider>
  )
}