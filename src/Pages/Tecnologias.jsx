import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import LandingPage from '../assets/LandingPage.jpg';
import API from '../assets/CreateConsumeAPI.png';
import Fullstack from '../assets/Fullstack.png';
import Deploy from '../assets/Deployment.png';

const Tecnologias = () => {
  const { t } = useTranslation();
  const [currentStage, setCurrentStage] = useState(0);
  const [iconsPerStage, setIconsPerStage] = useState(4);
  const icons = [
    "https://www.svgrepo.com/show/452228/html-5.svg",
    "https://www.svgrepo.com/show/349330/css3.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://registry.npmmirror.com/@lobehub/icons-static-png/1.15.0/files/dark/vercel-text.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    "https://www.thedataschool.com.au/wp-content/uploads/2023/02/RegEx-1-1.png",
    "https://www.svgrepo.com/show/439238/nodejs.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    "https://www.svgrepo.com/show/439231/mongodb.svg",
    "https://www.svgrepo.com/show/354200/postgresql.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://www.svgrepo.com/show/373624/git2.svg",
    "https://www.svgrepo.com/show/475654/github-color.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "https://www.svgrepo.com/show/354420/swagger.svg",
    "https://www.svgrepo.com/show/303231/docker-logo.svg",
    "https://www.svgrepo.com/show/448236/linux.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    "https://www.svgrepo.com/show/448266/aws.svg"
  ];

  const totalStages = Math.ceil(icons.length / iconsPerStage);

  useEffect(() => {
    const updateIconsPerStage = () => {
      if (window.innerWidth < 768) {
        setIconsPerStage(4); // Telas pequenas
      } else if (window.innerWidth < 1024) {
        setIconsPerStage(5); // Telas médias
      } else {
        setIconsPerStage(10); // Telas grandes
      }
    };

    updateIconsPerStage();
    window.addEventListener("resize", updateIconsPerStage);

    return () => window.removeEventListener("resize", updateIconsPerStage);
  }, []);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full px-6 mb-8">
      <div className="card p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <img
            src={LandingPage}
            alt="Fullstack Development"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-bold text-white mt-4">{t("tecnologias.landing_pages_title")}</h3>
          <p className="text-gray-300 mt-2">{t("tecnologias.landing_pages_description")}</p>
        </div>

        <div className="card p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <img
            src={API}
            alt="Create and consumption API"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-bold text-white mt-4">{t("tecnologias.api_title")}</h3>
          <p className="text-gray-300 mt-2">
          {t("tecnologias.api_description")}
          </p>
        </div>
        
        <div className="card p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <img
            src={Fullstack}
            alt="Fullstack Development"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-bold text-white mt-4">{t("tecnologias.fullstack_title")}</h3>
          <p className="text-gray-300 mt-2">{t("tecnologias.fullstack_description")}</p>
        </div>

        <div className="card p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <img
            src={Deploy}
            alt="Deployment Websites"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-bold text-white mt-4">{t("tecnologias.deployment_title")}</h3>
          <p className="text-gray-300 mt-2">
          {t("tecnologias.deployment_description")}
          </p>
        </div>
      </div>
      <div
        id="carousel-container"
        className="bg-black/70 border-t-2 border-b-2 border-gray-600 relative w-[98%] h-[150px] lg:h-[200px] flex items-center justify-center mt-10"
        style={{ margin: "0 10%" }}
      >
        <div
          id="carousel-track"
          className="flex items-center gap-6"
          style={{
            justifyContent: "center",
          }}
        >
          {displayedIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Icon ${index}`}
              className="w-[60px] md:w-[65px] lg:w-[75px] xl:w-[85px] 
              transition-transform duration-300 hover:scale-125 hover:animate-none animate-wiggle"
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
              className={`w-3 h-3 rounded-full ${index === currentStage ? "bg-gray-600" : "bg-gray-400"} transition-all`}
            ></span>
          ))}
        </div>
        <div className="flex justify-center mt-1 gap-4">
          <button
            disabled={currentStage === 0}
            className={`bg-transparent text-gray-400 w-12 h-12 rounded-full shadow-md transition-all flex items-center justify-center hover:scale-110 hover:opacity-80 ${currentStage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handlePrevStage}
          >
            <ArrowLeftCircle size="100%" />
          </button>
          <button
            disabled={currentStage === totalStages - 1}
            className={`bg-transparent text-gray-400 w-12 h-12 rounded-full shadow-md transition-all flex items-center justify-center hover:scale-110 hover:opacity-80 ${currentStage === totalStages - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
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
