import { useTranslation } from "react-i18next";
import Habilidades from "../components/habilidades/Habilidades";

const HabilidadesPage = () => {
  const { t } = useTranslation();

  return (
    <section id="tecnologias" className="relative py-10 w-full flex flex-col items-center">
        <h1
        className="text-2xl md:text-3xl font-bold mb-8 mt-10 animate-slide-right"
        style={{ fontFamily: "DoctorGlitch" }}
      >
        {t("tecnologias.title")}
      </h1>
      <Habilidades />
    </section>
  );
};

export default HabilidadesPage;