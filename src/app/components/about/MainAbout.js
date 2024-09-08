import Aliancas from "./Aliancas";
import CamposProducao from "./CamposProducao";
import Comercializacao from "./Comercializacao";
import Industrializacao from "./Industrializacao";
import IntroducaoAbout from "./IntroducaoAbout";
import MercadoExterno from "./MercadoExterno";

export default function MainAbout() {
  return (
    <>
      <IntroducaoAbout/>
      <CamposProducao/>
      <Industrializacao/>
      <Comercializacao/>
      <MercadoExterno/>
      <Aliancas/>
    </>
  );
}
