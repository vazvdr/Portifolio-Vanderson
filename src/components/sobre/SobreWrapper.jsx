import SobreMobile from "../sobre/SobreMobile";
import SobreDesktop from "../sobre/SobreDesktop";
import { useTranslation } from "react-i18next";
import useSobre from "../../hooks/useSobre";

const SobreWrapper = () => {
  const { t } = useTranslation();

  const { animate, isVisible, tempo, handleLinkClick } = useSobre();

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <SobreMobile
          t={t}
          animate={animate}
          tempo={tempo}
          handleLinkClick={handleLinkClick}
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <SobreDesktop
          t={t}
          animate={animate}
          isVisible={isVisible}
          tempo={tempo}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </>
  );
};

export default SobreWrapper;