import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useTecnologias } from "../../hooks/useTecnologias";

const Tecnologias = () => {
  const {
    displayedIcons,
    currentIconsStage,
    totalStages,
    next,
    prev,
  } = useTecnologias();

  return (
    <>
      <div
        className="relative w-screen h-[150px] lg:h-[200px] flex items-center justify-center mt-10"
        style={{ margin: "0 10%" }}
      >
        <div className="flex items-center gap-6 justify-center">
          {displayedIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              className="w-[60px] md:w-[65px] lg:w-[75px] xl:w-[85px] transition-transform duration-300 hover:scale-110 animate-wiggle"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-2 mb-3">
          {Array.from({ length: totalStages }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIconsStage
                  ? "stage-carrossel-tech"
                  : "bg-zinc-700"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full flex items-center justify-center"
          >
            <ArrowLeftCircle size="100%" />
          </button>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full flex items-center justify-center"
          >
            <ArrowRightCircle size="100%" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Tecnologias;