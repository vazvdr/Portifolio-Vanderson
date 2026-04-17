import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiSwagger } from 'react-icons/si';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProjetosComponent = ({
  animate,
  cardsPerView,
  displayedProjects,
  handlePrev,
  handleNext,
  stage,
  totalStages,
  iconMap,
  setStage // 👈 precisa receber isso pra clicar nas bolinhas
}) => {

  const { t } = useTranslation();

  return (
    <section id="projetos" className="py-6">
      <div className="mx-auto lg:w-[92%] px-4">

        <h1
          className={`text-3xl font-bold text-center mb-8 mt-12 ${animate ? "animate-slide-down" : ""}`}
          style={{ fontFamily: "DoctorGlitch" }}
        >
          {t("projects.title")}
        </h1>

        {/* CONTAINER PRINCIPAL */}
        <div className="flex flex-col items-center gap-6">

          {/* CARDS */}
          <div className="flex gap-2 overflow-hidden w-full justify-center px-2">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`
                  flex flex-col justify-between relative card shadow-lg rounded-lg overflow-hidden
                  transition-transform transform hover:shadow-2xl
                  ${animate ? (index % 2 === 0 ? "animate-slide-left" : "animate-slide-right") : ""}
                  ${cardsPerView === 2 ? "md:basis-full" : "basis-full"}
                  w-[80%] sm:w-[80%] md:w-[90%] lg:w-[48%] xl:w-[35%]
                  h-auto md:h-[440px] lg:h-[385px] xl:h-[320px]
                `}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  color: "white",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg" />

                <div className="relative p-4 flex flex-col text-left h-full z-10">

                  <h2 className="text-2xl font-bold mb-2 absolute top-2 left-2">
                    {project.title}
                  </h2>

                  <div className="flex justify-start w-full mt-12">
                    <p className="text-sm sm:text-base mb-4 leading-relaxed">
                      {t(project.subtitleKey)}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base mb-2">
                    {t(project.descriptionKey)}
                  </p>

                  <h3 className="text-base font-semibold">
                    {t("projects.techs")}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-2">
                    {project.techs.map((tech, idx) => (
                      <img
                        key={idx}
                        src={iconMap[tech]}
                        className="w-8 h-8 hover:scale-110 transition"
                      />
                    ))}
                  </div>

                  {/* ICONES */}
                  <div className="absolute top-0 right-0 flex flex-col gap-1 items-end z-20">

                    <div className="flex gap-2">
                      <div>
                        {project.swagger ? (
                          <a href={project.swagger} target="_blank">
                            <SiSwagger size={26} className="text-green-400" />
                          </a>
                        ) : (
                          <SiSwagger size={26} className="opacity-40" />
                        )}
                      </div>

                      <a href={project.link} target="_blank">
                        <FaExternalLinkAlt size={25} />
                      </a>
                    </div>

                    <div>
                      {project.repo ? (
                        <a href={project.repo} target="_blank">
                          <FaGithub size={26} />
                        </a>
                      ) : (
                        <FaGithub size={26} className="opacity-40" />
                      )}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLES */}
          <div className="flex items-center justify-center gap-6 mt-4">

            {/* BOTÃO VOLTAR */}
            <button
              onClick={handlePrev}
              className="p-1 rounded-md border border-zinc-600 hover:scale-110 transition"
            >
              <ArrowLeft size={24} />
            </button>

            {/* INDICADORES */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalStages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setStage && setStage(index + 1)}
                  className={`
          w-3 h-3 rounded-full transition-all
          ${stage === index + 1
                      ? "bg-zinc-500 scale-125"
                      : "bg-gray-500 opacity-50 hover:opacity-100"}
        `}
                />
              ))}
            </div>

            {/* BOTÃO NEXT */}
            <button
              onClick={handleNext}
              className="p-1 rounded-md border border-zinc-600 hover:scale-110 transition"
            >
              <ArrowRight size={24} />
            </button>

          </div>
        </div>
      </div>
    </section >
  );
};

export default ProjetosComponent;