import { useTranslation } from "react-i18next";
import { useHabilidades } from "../../hooks/useHabilidades";

const Habilidades = () => {
  const { t } = useTranslation();

  const {
    infiniteCards,
    translationKeys,
    offset,
    trackRef,
    handleMouseEnter,
    handleMouseLeave,
    cardsLength,
  } = useHabilidades();

  return (
    <div
      className="relative w-[90%] overflow-hidden mt-6 mb-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex gap-4"
        style={{
          transform: `translateX(${offset}px)`,
          transition: "none",
          width: `${infiniteCards.length * 350}px`
        }}
      >
        {infiniteCards.map((image, index) => {
          const realIndex = index % cardsLength;
          const key = translationKeys[realIndex];

          return (
            <div
              key={index}
              className="card-abilitys w-[350px] bg-black/30 rounded-lg shadow-lg p-3"
              style={{ flexShrink: 0 }}
            >
              <img src={image} className="w-full h-48 object-cover rounded-lg" />

              <h3 className="text-xl font-bold mt-4">
                {t(`tecnologias.${key.title}`)}
              </h3>

              <p className="mt-2">
                {t(`tecnologias.${key.description}`)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Habilidades;