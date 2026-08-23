import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ExperienciasComponent = ({
  animate,
  showStacks,
  currentIndex,
  experiences,
  toggleStack,
  setCurrentIndex,
}) => {
  const { t } = useTranslation();

  const total = experiences.length;

  return (
    <section id="experiencias" className="py-3">
      <div className="mx-auto w-screen relative">
        <h1
          className={`text-3xl font-bold text-center mb-4 md:mb-12 mt-12 ${
            animate ? "animate-slide-down" : ""
          }`}
          style={{ fontFamily: "DoctorGlitch" }}
        >
          {t("experiencias.titulo")}
        </h1>

        <div className="relative w-screen flex justify-center overflow-hidden">
          <div className="relative w-full h-[435px] md:h-[420px] flex items-center justify-center perspective-[1200px]">
            {experiences.map((card, index) => {
              const offset = index - currentIndex;

              if (offset < -1 || offset > 1) {
                return null;
              }

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-custom-ease"
                  style={{
                    transform: `
                      translateX(${offset * 90}%)
                      scale(${offset === 0 ? 1 : 0.85})
                      rotateY(${offset * -25}deg)
                      translateZ(${offset === 0 ? 0 : -100}px)
                    `,
                    opacity: 1,
                    filter:
                      offset === 0 ? "blur(0px)" : "blur(1.5px)",
                    zIndex: 20 - Math.abs(offset),
                    width: "380px",
                  }}
                >
                  <div className="h-full min-h-[350px] md:min-h-[380px] lg:min-h-[400px]">
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style ${
                        showStacks[index] ? "rotate-y-180" : ""
                      }`}
                    >
                      <div className="relative w-full h-full backface-hidden rounded-xl p-1 flex flex-col justify-between">
                        {card.link && (
                          <a
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 right-2 hover:scale-110"
                          >
                            <FaExternalLinkAlt size={18} />
                          </a>
                        )}

                        <div>
                          <h2 className="text-xl font-bold">
                            {t(
                              `experiencias.card${card.cardIndex}.titulo`
                            )}
                          </h2>

                          <h3>
                            {t(
                              `experiencias.card${card.cardIndex}.subtitulo`
                            )}
                          </h3>

                          <p className="text-sm">
                            {t(
                              `experiencias.card${card.cardIndex}.periodo`
                            )}
                          </p>

                          <div className="mt-4 text-sm space-y-2">
                            {t(
                              `experiencias.card${card.cardIndex}.descricao`,
                              { returnObjects: true }
                            ).map((item, i) => (
                              <p key={i}>• {item}</p>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => toggleStack(index)}
                          className="button-card-experiences mt-4 py-2 rounded-lg"
                        >
                          {t("experiencias.verStack")}
                        </button>
                      </div>

                      <div className="absolute top-0 left-0 w-full h-full backface-hidden rotate-y-180 rounded-xl p-1 flex flex-col justify-between">
                        <div>
                          <h2 className="text-xl text-center mb-4 font-orbitron tracking-wider">
                            {t("experiencias.stackTitulo")}
                          </h2>

                          <div className="flex flex-wrap gap-3 justify-center">
                            {card.images.map((src, i) => (
                              <img
                                key={i}
                                src={src}
                                className="w-10 h-10"
                              />
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => toggleStack(index)}
                          className="button-card-experiences mt-4 py-2 rounded-lg"
                        >
                          {t("experiencias.voltar")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center mt-0 gap-4">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.max(prev - 1, 0)
              )
            }
            className="hover:scale-110 rounded-lg border border-zinc-500"
          >
            <ArrowLeft size={32} />
          </button>

          <div className="flex gap-2">
            {experiences.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  currentIndex === index
                    ? "bg-zinc-700 scale-125"
                    : "bg-zinc-400 hover:bg-black/70"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.min(prev + 1, total - 1)
              )
            }
            className="hover:scale-110 rounded-lg border border-zinc-500"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienciasComponent;