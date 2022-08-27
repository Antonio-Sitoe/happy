import Galery from "../Components/Galery/Galery";
import Layault from "../Components/Layault/Layault";
import OrphanageInfo from "../Components/OrphanageInfo";

const Perfil = () => {
  return (
    <Layault title="Orfanato">
      <Galery />
      <OrphanageInfo title='Orf. Esperança' description="Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social."/>
    </Layault>
  );
};

export default Perfil;
