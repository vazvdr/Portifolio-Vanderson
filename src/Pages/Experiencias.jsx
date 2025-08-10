import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experiencias = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [showStacks, setShowStacks] = useState({});

  const toggleStack = (index) => {
    setShowStacks((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("experiencias");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

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
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twilio/twilio-original-wordmark.svg"
  ];

  const imagesCard2 = [
    "https://www.svgrepo.com/show/452228/html-5.svg",
    "https://www.svgrepo.com/show/349330/css3.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    "https://logowik.com/content/uploads/images/cypress1720868719.logowik.com.webp",
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
    "https://www.svgrepo.com/show/448266/aws.svg"
  ];

  return (
    <section id="experiencias" className="py-10 relative">
      <div className="max-w-4xl mx-auto px-10">
        <h1
          className={`text-3xl font-bold text-center mb-8 mt-10 ${animate ? "animate-slide-in-right" : "opacity-0"}`}
          style={{ fontFamily: "DoctorGlitch" }}
        >
          {t("experiencias.titulo")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { images: imagesCard1, link: "https://01bit.tech/", cardIndex: 1 },
            { images: imagesCard2, cardIndex: 2 },
          ]
            .sort((a, b) => b.images.length - a.images.length)
            .map((card, index) => (
              <div
                key={index}
                className={`group perspective w-full relative h-[400px] sm:h-[420px]`}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${showStacks[index] ? "rotate-y-180" : ""
                    }`}
                >
                  {/* Frente do card */}
                  <div className="absolute w-full h-full backface-hidden card rounded-lg shadow-md p-6 flex flex-col justify-between">
                    {/* Ícone no topo direito */}
                    {card.link && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver Site"
                        className="absolute top-4 right-4 hover:text-blue-600 transition-all"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold">
                        {t(`experiencias.card${card.cardIndex}.titulo`)}
                      </h2>
                      <h3 className="text-lg">
                        {t(`experiencias.card${card.cardIndex}.subtitulo`)}
                      </h3>
                      <p className="text-sm">
                        {t(`experiencias.card${card.cardIndex}.periodo`)}
                      </p>

                      {Array.isArray(
                        t(`experiencias.card${card.cardIndex}.descricao`, { returnObjects: true })
                      ) ? (
                        <ul className="mt-4 list-disc list-inside text-sm space-y-1">
                          {t(`experiencias.card${card.cardIndex}.descricao`, { returnObjects: true }).map(
                            (item, i) => (
                              <li key={i}>{item}</li>
                            )
                          )}
                        </ul>
                      ) : (
                        <p className="mt-4 text-sm">
                          {t(`experiencias.card${card.cardIndex}.descricao`)}
                        </p>
                      )}
                    </div>

                    {/* Botão Ver Stack */}
                    <div className="mt-4">
                      <button
                        onClick={() => toggleStack(index)}
                        className="button-card-experiences w-full py-2 px-4 rounded-lg text-sm font-medium transition-all"
                      >
                        {t("experiencias.verStack")}
                      </button>
                    </div>
                  </div>

                  <div className="absolute w-full h-full backface-hidden rotate-y-180 card rounded-lg shadow-md p-6 flex flex-col justify-between">
                    {/* Conteúdo centralizado */}
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

                    {/* Botão Voltar */}
                    <div className="mt-4">
                      <button
                        onClick={() => toggleStack(index)}
                        className="button-card-experiences w-full py-2 px-4 rounded-lg text-sm font-medium transition-all"
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
    </section>
  );
};

export default Experiencias;
