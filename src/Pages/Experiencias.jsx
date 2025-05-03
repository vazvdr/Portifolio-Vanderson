import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experiencias = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

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
    "https://www.svgrepo.com/show/475654/github-color.svg"
  ];

  const imagesCard2 = [...imagesCard1,
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    "https://www.svgrepo.com/show/435664/file-regexp.svg",
    "https://www.svgrepo.com/show/439238/nodejs.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "https://www.svgrepo.com/show/354420/swagger.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
  ];

  return (
    <section id="experiencias" className="py-10 relative">
      <div className="max-w-4xl mx-auto px-10">
        <h1
          className={`text-3xl font-bold text-center mb-8 mt-10 ${animate ? "animate-slide-in-right" : "opacity-0"
            }`}
          style={{ fontFamily: "DoctorGlitch" }}
        >
          {t("experiencias.titulo")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {([
            { images: imagesCard1, link: "https://01bit.tech/", cardIndex: 1 },
            { images: imagesCard2, cardIndex: 2 },
          ].sort((a, b) => b.images.length - a.images.length)).map((card, index) => (
            <div
              key={index}
              className={`card rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:-translate-y-2 ${animate
                ? index === 0
                  ? "animate-slide-in-left"
                  : "animate-slide-in-right"
                : "opacity-0"
                }`}
            >
              <h2 className="text-xl sm:text-2xl font-bold">
                {t(`experiencias.card${card.cardIndex}.titulo`)}
              </h2>
              <h3 className="text-lg">{t(`experiencias.card${card.cardIndex}.subtitulo`)}</h3>
              <p className="text-sm">{t(`experiencias.card${card.cardIndex}.periodo`)}</p>
              <p className="mt-4 text-sm">{t(`experiencias.card${card.cardIndex}.descricao`)}</p>

              <div className="flex flex-wrap gap-4 mt-4">
                {card.images.map((src, imgIndex) => (
                  <img key={imgIndex} src={src} alt={`Tech ${imgIndex}`} className="w-10 h-10" />
                ))}
              </div>

              {card.link && (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver Site"
                  className="absolute bottom-4 right-4 hover:text-blue-600"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
