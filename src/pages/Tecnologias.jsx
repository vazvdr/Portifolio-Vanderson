import { useTranslation } from "react-i18next";
import Tecnologias from "../components/tecnologias/Tecnologias";

const TecnologiasPage = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-10 w-full flex flex-col items-center">
      <Tecnologias />
    </section>
  );
};

export default TecnologiasPage;