import { useExperiencias } from "../hooks/useExperiencias";
import ExperienciasComponent from "../components/experiencias/ExperienciasComponent";

const Experiencias = () => {
  const experienciasState = useExperiencias();

  return <ExperienciasComponent {...experienciasState} />;
};

export default Experiencias;