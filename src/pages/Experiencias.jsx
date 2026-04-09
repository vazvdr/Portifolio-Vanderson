import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Experiencias = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [showStacks, setShowStacks] = useState({});
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
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex < experiences.length - 1)
      setCurrentIndex((prev) => prev + 1);
  };

  const toggleStack = (index) => {
    setShowStacks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="experiencias" className="py-3">
      <div className="mx-auto w-screen sm:w-[75%] md:w-[80%] lg:w-[50%] px-4 relative">

        <h1
          className={`text-3xl font-bold text-center mb-1 mt-12 ${animate ? "animate-slide-down" : ""
            }`}
          style={{ fontFamily: "DoctorGlitch" }}
        >
          {t("experiencias.titulo")}
        </h1>

        {/* CARROSSEL */}
        <div className="relative w-full flex justify-center overflow-hidden">
          <div className="relative w-full h-[435px] md:h-[420px] flex items-center justify-center perspective-[1200px]">

            {experiences.map((card, index) => {
              const offset = index - currentIndex;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `
                  translateX(${offset * 90}%)
                  scale(${offset === 0 ? 1 : 0.85})
                  rotateY(${offset * -25}deg)
                  translateZ(${offset === 0 ? 0 : -100}px)
                `,
                    opacity: Math.abs(offset) > 1 ? 0 : 1,
                    filter: offset === 0 ? "blur(0px)" : "blur(1.5px)",
                    zIndex: 20 - Math.abs(offset),
                    width: "380px",
                  }}
                >
                  <div className="h-full min-h-[350px] md:min-h-[380px] lg:min-h-[400px]">
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style ${showStacks[index] ? "rotate-y-180" : ""
                        }`}
                    >

                      {/* FRENTE */}
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
                            {t(`experiencias.card${card.cardIndex}.titulo`)}
                          </h2>
                          <h3>{t(`experiencias.card${card.cardIndex}.subtitulo`)}</h3>
                          <p className="text-sm">
                            {t(`experiencias.card${card.cardIndex}.periodo`)}
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
                              <img key={i} src={src} className="w-10 h-10" />
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

        {/* CONTROLES ABAIXO DO CARROSSEL */}
        <div className="flex items-center justify-center mt-0 gap-4">

          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`transition-all ${currentIndex === 0 ? "opacity-30" : "hover:scale-110"
              }`}
          >
            <ArrowLeft size={32} />
          </button>

          <div className="flex gap-2">
            {experiences.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentIndex === index
                  ? "bg-zinc-700 scale-125"
                  : "bg-zinc-400 hover:bg-black/70"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === experiences.length - 1}
            className={`transition-all ${currentIndex === experiences.length - 1
              ? "opacity-30"
              : "hover:scale-110"
              }`}
          >
            <ArrowRight size={32} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Experiencias;