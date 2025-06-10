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
  const [currentStage, setCurrentStage] = useState(0);
  const [iconsPerStage, setIconsPerStage] = useState(4);
  const [cardPerStage, setCardPerStage] = useState(3);

  const icons = [
    "https://www.svgrepo.com/show/452228/html-5.svg",
    "https://www.svgrepo.com/show/349330/css3.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
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
    "https://www.svgrepo.com/show/448236/linux.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    "https://www.svgrepo.com/show/448266/aws.svg"
  ];

  useEffect(() => {
    const updateCardPerStage = () => {
      if (window.innerWidth < 768) {
        setIconsPerStage(1);
      } else if (window.innerWidth < 1024) {
        setIconsPerStage(2);
      } else {
        setIconsPerStage(3);
      }
    };

    updateCardPerStage();
    window.addEventListener("resize", updateCardPerStage);
    return () => window.removeEventListener("resize", updateCardPerStage);
  }, []);

  const CardNextStage = () => {
    const maxIndex = icons.length - iconsPerStage;
    if (currentStage < maxIndex) {
      setCurrentStage(prev => prev + 1);
    }
  };

  const CardPrevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(prev => prev - 1);
    }
  };

  const CardStages = icons.length - iconsPerStage + 1;


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
    if (currentStage < totalStages - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePrevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const startIndex = currentStage * iconsPerStage;
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
        <div
          id="carousel-scroll"
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-0 px-4 pb-4 no-scrollbar"
        >
          {[LandingPage, API, Fullstack, Test, Deploy].map((image, index) => (
            <div
              key={index}
              className="card-abilitys snap-center flex-shrink-0 w-full sm:w-full md:w-1/2 lg:w-1/3 p-4 shadow-lg"
            >
              <img
                src={image}
                alt={`Imagem ${index}`}
                className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-all duration-300"
              />
              <h3 className="text-xl font-bold mt-4">
                {t(`tecnologias.${[
                  "landing_pages_title",
                  "api_title",
                  "fullstack_title",
                  "tests_title",
                  "deployment_title",
                ][index]}`)}
              </h3>
              <p className="mt-2">
                {t(`tecnologias.${[
                  "landing_pages_description",
                  "api_description",
                  "fullstack_description",
                  "tests_description",
                  "deployment_description",
                ][index]}`)}
              </p>
            </div>
          ))}
        </div>

        <div className="buttons-abilitys-left absolute top-[0%] lg:mr-[0%] md:ml-[2%] left-0 h-[95.5%] flex items-center z-10">
          <button
            onClick={() =>
              document.getElementById("carousel-scroll")?.scrollBy({ left: -300, behavior: "smooth" })
            }
            className="h-full w-10 transition duration-300  flex items-center justify-center"
          >
            <ArrowLeft size={28} />
          </button>
        </div>

        <div className="buttons-abilitys-right absolute top-[0%] right-0 lg:right-4 h-[95.5%]  flex items-center z-10">
          <button
            onClick={() =>
              document.getElementById("carousel-scroll")?.scrollBy({ left: 300, behavior: "smooth" })
            }
            className="h-full w-10 transition duration-300 flex items-center justify-center"
          >
            <ArrowRight size={28} className="" />
          </button>
        </div>
      </div>


      {/* Carrossel de Tecnologias */}
      <div
        id="carousel-container"
        className="bg-black/90 relative w-[98%] h-[150px] lg:h-[200px] flex items-center justify-center mt-10"
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

      {/* Indicadores e Botões */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-2 mb-3">
          {Array.from({ length: totalStages }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentStage ? "stage-carrossel-tech" : "bg-gray-400"} transition-all`}
            ></span>
          ))}
        </div>
        <div className="flex justify-center mt-1 gap-4">
          <button
            disabled={currentStage === 0}
            className={`bg-transparent stage-carrossel-button w-12 h-12 rounded-full shadow-md transition-all flex items-center justify-center hover:scale-110 hover:opacity-80 ${currentStage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handlePrevStage}
          >
            <ArrowLeftCircle size="100%" />
          </button>
          <button
            disabled={currentStage === totalStages - 1}
            className={`bg-transparent stage-carrossel-button w-12 h-12 rounded-full shadow-md transition-all flex items-center justify-center hover:scale-110 hover:opacity-80 ${currentStage === totalStages - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
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
