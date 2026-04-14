import ProjetosComponent from "../components/projetos/ProjetosComponent";
import { useProjetos } from "../hooks/useProjetos";

const Projetos = () => {
  const projetos = useProjetos();

  return <ProjetosComponent {...projetos} />;
};

export default Projetos;