import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import LandingPage from '../assets/LandingPage.jpg';
import API from '../assets/CreateConsumeAPI.png';
import Fullstack from '../assets/Fullstack.png';
import Test from '../assets/Test.png';
import Deploy from '../assets/Deployment.png';

const Tecnologias = () => {
  const { t } = useTranslation();
  const [currentIconsStage, setCurrentIconsStage] = useState(0);
  const [iconsPerStage, setIconsPerStage] = useState(4);
  const [currentCardStage, setCurrentCardStage] = useState(0);
  const [cardPerStage, setCardPerStage] = useState(3);

  const cards = [LandingPage, API, Fullstack, Test, Deploy]

  const icons = [
    "https://www.svgrepo.com/show/452228/html-5.svg",
    "https://www.svgrepo.com/show/349330/css3.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    "https://esker.ee/images/cypress-logo-white.png",
    "https://registry.npmmirror.com/@lobehub/icons-static-png/1.15.0/files/dark/vercel-text.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    "https://www.thedataschool.com.au/wp-content/uploads/2023/02/RegEx-1-1.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg",
    "https://www.svgrepo.com/show/439238/nodejs.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    "https://www.svgrepo.com/show/439231/mongodb.svg",
    "https://www.svgrepo.com/show/354200/postgresql.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://www.svgrepo.com/show/373624/git2.svg",
    "https://www.svgrepo.com/show/475654/github-color.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "https://www.svgrepo.com/show/354420/swagger.svg",
    "https://www.svgrepo.com/show/303231/docker-logo.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    "https://www.svgrepo.com/show/448236/linux.svg",
    "https://www.svgrepo.com/show/448266/aws.svg"
  ];

  useEffect(() => {
    const updateCardPerStage = () => {
      if (window.innerWidth < 768) {
        setCardPerStage(1);
      } else if (window.innerWidth < 1024) {
        setCardPerStage(2);
      } else {
        setCardPerStage(3);
      }
    };

    updateCardPerStage();
    window.addEventListener("resize", updateCardPerStage);
    return () => window.removeEventListener("resize", updateCardPerStage);
  }, []);

  const CardNextStage = () => {
    if (currentCardStage + cardPerStage < cards.length) {
      setCurrentCardStage((prev) => prev + 1);
    }
  };

  const CardPrevStage = () => {
    if (currentCardStage > 0) {
      setCurrentCardStage((prev) => prev - 1);
    }
  };

  const displayedCards = cards.slice(currentCardStage, currentCardStage + cardPerStage);

  useEffect(() => {
    const updateIconsPerStage = () => {
      if (window.innerWidth < 768) {
        setIconsPerStage(4);
      } else if (window.innerWidth < 1024) {
        setIconsPerStage(5);
      } else {
        setIconsPerStage(10);
      }
    };

    updateIconsPerStage();
    window.addEventListener("resize", updateIconsPerStage);
    return () => window.removeEventListener("resize", updateIconsPerStage);
  }, []);

  const totalStages = Math.ceil(icons.length / iconsPerStage);

  const handleNextStage = () => {
    if (currentIconsStage < totalStages - 1) {
      setCurrentIconsStage(currentIconsStage + 1);
    }
  };

  const handlePrevStage = () => {
    if (currentIconsStage > 0) {
      setCurrentIconsStage(currentIconsStage - 1);
    }
  };

  const startIndex = currentIconsStage * iconsPerStage;
  const displayedIcons = icons.slice(startIndex, startIndex + iconsPerStage);

  return (
    <section
      id="tecnologias"
      className="relative py-10 w-full flex flex-col items-center"
    >
      <h1
        className="text-2xl md:text-3xl font-bold mb-8 mt-10 animate-slide-right"
        style={{ fontFamily: "DoctorGlitch" }}
      >
        {t("tecnologias.title")}
      </h1>

      <div className="relative w-[90%] px-[5%] lg:px-[3%]">
        <div className="relative flex items-center">
          <button
            onClick={CardPrevStage}
            disabled={currentCardStage === 0}
            className={`buttons-abilitys-left absolute left-[-2rem] h-[95.5%] top-[0%] z-10 
        p-2
        ${currentCardStage === 0 ? "cursor-not-allowed" : ""}`}
          >
            <ArrowLeft size={28} />
          </button>

          <div
            id="carousel-scroll"
            className="flex overflow-hidden snap-x snap-mandatory scroll-smooth gap-0 px-4 pb-4 no-scrollbar w-full"
          >
            {displayedCards.map((image, index) => {
              const translationKeys = [
                { title: "landing_pages_title", description: "landing_pages_description" },
                { title: "api_title", description: "api_description" },
                { title: "fullstack_title", description: "fullstack_description" },
                { title: "tests_title", description: "tests_description" },
                { title: "deployment_title", description: "deployment_description" },
              ];

              const realIndex = currentCardStage + index;
              const key = translationKeys[realIndex];

              return (
                <div
                  key={realIndex}
                  className="card-abilitys snap-center w-full sm:w-full md:w-1/2 lg:w-1/3 p-4 shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Imagem ${realIndex}`}
                    className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-all duration-300"
                  />
                  <h3 className="text-xl font-bold mt-4">
                    {t(`tecnologias.${key.title}`)}
                  </h3>
                  <p className="mt-2">{t(`tecnologias.${key.description}`)}</p>
                </div>
              );
            })}
          </div>

          <button
            onClick={CardNextStage}
            disabled={currentCardStage + cardPerStage >= cards.length}
            className={`buttons-abilitys-right absolute right-[-2rem] h-[95.5%] top-[0%] z-10 
            p-2
        ${currentCardStage + cardPerStage >= cards.length ? "cursor-not-allowed" : ""}`}
          >
            <ArrowRight size={28} />
          </button>
        </div>
      </div>

      <div
        id="carousel-container"
        className="stage-carrossel-tech bg-black/90 relative w-[98%] h-[150px] lg:h-[200px] flex items-center justify-center mt-10"
        style={{ margin: "0 10%" }}
      >
        <div
          id="carousel-track"
          className="flex items-center gap-6 justify-center"
        >
          {displayedIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Icon ${index}`}
              className="w-[60px] md:w-[65px] lg:w-[75px] xl:w-[85px] 
              transition-transform duration-300 hover:scale-110 animate-wiggle"
              style={{ flexShrink: 0 }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-2 mb-3">
          {Array.from({ length: totalStages }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIconsStage ? "stage-carrossel-tech" : "bg-gray-400"} transition-all`}
            ></span>
          ))}
        </div>
        <div className="flex justify-center mt-1 gap-4">
          <button
            disabled={currentIconsStage === 0}
            className={`bg-transparent stage-carrossel-button w-12 h-12 rounded-full shadow-md transition-all flex items-center justify-center hover:scale-110 hover:opacity-80 ${currentIconsStage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handlePrevStage}
          >
            <ArrowLeftCircle size="100%" />
          </button>
          <button
            disabled={currentIconsStage === totalStages - 1}
            className={`bg-transparent stage-carrossel-button w-12 h-12 rounded-full shadow-md transition-all flex items-center justify-center hover:scale-110 hover:opacity-80 ${currentIconsStage === totalStages - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleNextStage}
          >
            <ArrowRightCircle size="100%" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
