import MenuMix from "./MenuMix"
import ScrollMix from "./ScrollMix"
import MixSementesCobertura from "./MixSementesCobertura"
import Especificacoes from "./Especificacoes"
import { useContext } from "react"
import { MixContext } from "../context/MixContext"


export default function MainMix() {

  const { selectedMix } = useContext(MixContext)

  return (
    <>
      {selectedMix === null ? (
        <div>
          <MenuMix />
          <ScrollMix />
          <MixSementesCobertura />
        </div>
      ) : (
        <Especificacoes />
      )}

    </>
  )
}