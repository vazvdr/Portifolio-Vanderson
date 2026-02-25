import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import LandingPage from '../assets/LandingPage.png';
import API from '../assets/CreateConsumeAPI.png';
import Fullstack from '../assets/Fullstack.png';
import Mobile from '../assets/Mobile2.png';
import Test from '../assets/Test.png';
import Deploy from '../assets/Deployment.png';

const Tecnologias = () => {
  const { t } = useTranslation();

  // --- CONFIG CARDS ---
  const cards = [LandingPage, API, Fullstack, Mobile, Test, Deploy];
  const infiniteCards = [...cards, ...cards]; // LOOP REAL

  // -------- LOOP INFINITO PARA A DIREITA ----------
  const speed = 2.5; // velocidade
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const isPaused = useRef(false);

  // EVENTOS DE PAUSA
  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  useEffect(() => {
    let frame;

    const animate = () => {
      if (!isPaused.current) {
        setOffset(prev => {
          const cardWidth = 350;
          const totalWidth = infiniteCards.length * cardWidth;

          let newX = prev - speed;

          if (Math.abs(newX) >= totalWidth / 2) {
            return 0;
          }

          return newX;
        });
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  // --- CONFIG DOS ÍCONES (inalterado) ---
  const [currentIconsStage, setCurrentIconsStage] = useState(0);
  const [iconsPerStage, setIconsPerStage] = useState(4);

  useEffect(() => {
    const updateIconsPerStage = () => {
      if (window.innerWidth < 768) setIconsPerStage(4);
      else if (window.innerWidth < 1024) setIconsPerStage(5);
      else setIconsPerStage(10);
    };
    updateIconsPerStage();
    window.addEventListener("resize", updateIconsPerStage);
    return () => window.removeEventListener("resize", updateIconsPerStage);
  }, []);

  const icons = [
    "https://www.svgrepo.com/show/452228/html-5.svg",
    "https://www.svgrepo.com/show/349330/css3.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/primeng/primeng-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    "https://esker.ee/images/cypress-logo-white.png",
    "https://registry.npmmirror.com/@lobehub/icons-static-png/1.15.0/files/dark/vercel-text.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
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
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    "https://www.svgrepo.com/show/373624/git2.svg",
    "https://www.svgrepo.com/show/475654/github-color.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
    "https://www.svgrepo.com/show/303231/docker-logo.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    "https://www.svgrepo.com/show/448236/linux.svg",
    "https://www.svgrepo.com/show/448266/aws.svg"
  ];

  const totalStages = Math.ceil(icons.length / iconsPerStage);
  const startIndex = currentIconsStage * iconsPerStage;
  const displayedIcons = icons.slice(startIndex, startIndex + iconsPerStage);

  return (
    <section id="tecnologias" className="relative py-10 w-full flex flex-col items-center">

      <h1 className="text-2xl md:text-3xl font-bold mb-8 mt-10 animate-slide-right"
        style={{ fontFamily: "DoctorGlitch" }}>
        {t("tecnologias.title")}
      </h1>

      {/* ===== CARROSSEL DE CARDS ===== */}
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
            const translationKeys = [
              { title: "landing_pages_title", description: "landing_pages_description" },
              { title: "api_title", description: "api_description" },
              { title: "fullstack_title", description: "fullstack_description" },
              { title: "mobile_title", description: "mobile_description" },
              { title: "tests_title", description: "tests_description" },
              { title: "deployment_title", description: "deployment_description" },
            ];

            const realIndex = index % cards.length;
            const key = translationKeys[realIndex];

            return (
              <div
                key={index}
                className="card-abilitys w-[350px] bg-black/30 rounded-lg shadow-lg p-3"
                style={{ flexShrink: 0 }}
              >
                <img
                  src={image}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4">
                  {t(`tecnologias.${key.title}`)}
                </h3>
                <p className="mt-2">{t(`tecnologias.${key.description}`)}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== ÍCONES ===== */}
      <div
        id="carousel-container"
        className="stage-carrossel-tech bg-black/90 relative w-[98%] h-[150px] lg:h-[200px] flex items-center justify-center mt-10"
        style={{ margin: "0 10%" }}
      >
        <div id="carousel-track" className="flex items-center gap-6 justify-center">
          {displayedIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              className="w-[60px] md:w-[65px] lg:w-[75px] xl:w-[85px] transition-transform duration-300 hover:scale-110 animate-wiggle"
              style={{ flexShrink: 0 }}
            />
          ))}
        </div>
      </div>

      {/* Indicadores e botões dos ícones */}
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
            onClick={() => setCurrentIconsStage(prev => prev === 0 ? totalStages - 1 : prev - 1)}
            className="stage-carrossel-button w-12 h-12 rounded-full flex items-center justify-center"
          >
            <ArrowLeftCircle size="100%" />
          </button>

          <button
            onClick={() => setCurrentIconsStage(prev => prev >= totalStages - 1 ? 0 : prev + 1)}
            className="stage-carrossel-button w-12 h-12 rounded-full flex items-center justify-center"
          >
            <ArrowRightCircle size="100%" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default Tecnologias;
