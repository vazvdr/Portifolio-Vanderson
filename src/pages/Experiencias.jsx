import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Experiencias = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [showStacks, setShowStacks] = useState({});
  const [cardsPerView, setCardsPerView] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesCard1 = [
    "https://www.svgrepo.com/show/452228/html-5.svg",
    "https://www.svgrepo.com/show/349330/css3.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://www.svgrepo.com/show/373624/git2.svg",
    "https://www.svgrepo.com/show/475654/github-color.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twilio/twilio-original-wordmark.svg",
  ];

  const imagesCard2 = [
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
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
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
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  ];

  const imagesCard3 = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  ];

  const experiences = [
    { images: imagesCard3, link: "https://praiacheia.com.br", cardIndex: 3 },
    { images: imagesCard2, cardIndex: 2 },
    { images: imagesCard1, link: "https://01bit.tech/", cardIndex: 1 },
  ];

  useEffect(() => {
    const updateCardsPerView = () => {
      const perView =
        window.innerWidth < 768
          ? 1
          : window.innerWidth < 1024
            ? 1
            : 3;

      setCardsPerView(perView);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const section = document.querySelector("#experiencias");

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observerInstance.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % experiences.length
    );
  };

  const displayedCards = Array.from(
    { length: cardsPerView },
    (_, i) => ({
      ...experiences[(currentIndex + i) % experiences.length],
      realIndex: (currentIndex + i) % experiences.length,
    })
  );

  const toggleStack = (realIndex) => {
    setShowStacks((prev) => ({
      ...prev,
      [realIndex]: !prev[realIndex],
    }));
  };

  return (
    <section id="experiencias" className="py-6">
      <div className="mx-auto lg:w-[92%] px-4 relative">

        <h1
          className={`text-3xl font-bold text-center mb-8 mt-12 ${animate ? "animate-slide-down" : ""
            }`}
          style={{ fontFamily: "DoctorGlitch" }}
        >
          {t("experiencias.titulo")}
        </h1>
        <button
          onClick={handlePrev}
          className="absolute left-4 md:-right-20  lg:-left-3
                      top-1/2 -translate-y-1/2
                      z-20 w-10
                      rounded-tl-full rounded-bl-full">
          <ArrowLeft size={24} />
        </button>
        <div className="relative w-full flex justify-center">


          {/* CARDS */}
          <div className="flex gap-1 overflow-hidden w-full justify-center px-2">
            {displayedCards.map((card, index) => (
              <div
                key={card.realIndex}
                className={`
                  group
                  flex flex-col justify-between relative card shadow-lg rounded-lg overflow-hidden
                  transition-transform transform hover:shadow-2xl
                  w-[90%] sm:w-[80%] lg:w-[48%] xl:w-[35%]
                  h-[520px] sm:h-[460px] md:h-[400px] lg:h-[600px] xl:h-[460px]
                `}
              >
                <div className="relative w-full h-full perspective">
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${showStacks[card.realIndex] ? "rotate-y-180" : ""
                      }`}
                  >
                    {/* FRENTE */}
                    <div className="absolute w-full h-full backface-hidden pt-1 px-6 pb-6 flex flex-col justify-between">

                      {card.link && (
                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-1 right-1 hover:scale-110"
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                      )}

                      <div>
                        <h2 className="text-xl font-bold">
                          {t(`experiencias.card${card.cardIndex}.titulo`)}
                        </h2>
                        <h3 className="text-lg">
                          {t(`experiencias.card${card.cardIndex}.subtitulo`)}
                        </h3>
                        <p className="text-sm">
                          {t(`experiencias.card${card.cardIndex}.periodo`)}
                        </p>
                        <div className="mt-4 text-sm space-y-2">
                          {t(`experiencias.card${card.cardIndex}.descricao`, {
                            returnObjects: true,
                          }).map((item, i) => (
                            <p key={i} className="leading-relaxed">
                              • {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleStack(card.realIndex)}
                        className="button-card-experiences w-full py-2 px-4 mt-2 rounded-lg text-sm"
                      >
                        {t("experiencias.verStack")}
                      </button>
                    </div>

                    {/* VERSO */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 pt-2 px-6 pb-6 flex flex-col justify-between">
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <h2 className="text-xl font-orbitron tracking-wider text-center drop-shadow-lg shadow-black mb-4">
                          {t("experiencias.stackTitulo")}
                        </h2>

                        <div className="flex flex-wrap gap-3 justify-center">
                          {card.images.map((src, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={src}
                              alt={`Tech ${imgIndex}`}
                              className="w-9 h-9 transition-transform hover:scale-110"
                            />
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleStack(card.realIndex)}
                        className="button-card-experiences w-full py-2 px-4 rounded-lg text-sm"
                      >
                        {t("experiencias.voltar")}
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 md:-right-3 lg:-right-7
            top-1/2 -translate-y-1/2
            z-20 w-10
            rounded-tr-full rounded-br-full
            h-[220px] md:h-[260px] lg:h-[240px]">
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Experiencias;