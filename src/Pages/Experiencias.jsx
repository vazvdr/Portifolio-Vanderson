import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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

        {/* Container Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div
            style={{
              borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
              animation: "borderAnimation 1s infinite",
            }}
            className={`card rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:-translate-y-2 ${animate ? "animate-slide-in-left" : "opacity-0"
              }`}
          >
            <a href="https://01bit.tech/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={25} className="hover:scale-110 absolute top-4 right-4" title="Ver Projeto" />
            </a>
            <h2 className="text-xl sm:text-2xl font-bold">
              {t("experiencias.card1.titulo")}
            </h2>
            <h3 className="text-lg">{t("experiencias.card1.subtitulo")}</h3>
            <p className="text-sm">{t("experiencias.card1.periodo")}</p>
            <p className="mt-4 text-sm">{t("experiencias.card1.descricao")}</p>
            <div className="flex flex-wrap gap-4 mt-4">
              {/* Imagens */}
              <img
                src="https://www.svgrepo.com/show/452228/html-5.svg"
                alt="HTML"
                className="w-10 h-10"
              />
              <img
                src="https://www.svgrepo.com/show/349330/css3.svg"
                alt="CSS"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                alt="Vite"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="TailwindCSS"
                className="w-10 h-10"
              />
              <img
                src="https://www.svgrepo.com/show/373624/git2.svg"
                alt="Git"
                className="w-10 h-10"
              />
              <img
                src="https://www.svgrepo.com/show/475654/github-color.svg"
                alt="GitHub"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
              animation: "borderAnimation 1s infinite",
            }}
            className={`card rounded-lg shadow-md dark:shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2 ${animate ? "animate-slide-in-right" : "opacity-0"
              }`}
          >
            <h2 className="text-xl sm:text-2xl font-bold">
              {t("experiencias.card2.titulo")}
            </h2>
            <h3 className="text-lg">{t("experiencias.card2.subtitulo")}</h3>
            <p className="text-sm">{t("experiencias.card2.periodo")}</p>
            <p className="mt-4 text-sm">{t("experiencias.card2.descricao")}</p>
            <div className="flex flex-wrap gap-4 mt-4">
              {/* Imagens */}
              <img
                src="https://www.svgrepo.com/show/452228/html-5.svg"
                alt="HTML"
                className="w-10 h-10"
              />
              <img
                src="https://www.svgrepo.com/show/349330/css3.svg"
                alt="CSS"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                alt="Vite"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="TailwindCSS"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                alt="Java"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
                alt="Spring"
                className="w-10 h-10"
              />
              <img
                src="https://www.svgrepo.com/show/439238/nodejs.svg"
                alt="Node.js"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
                alt="NestJS"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                alt="MongoDB"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                alt="PostgreSQL"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                alt="MySQL"
                className="w-10 h-10"
              />
              <img
                src="https://www.svgrepo.com/show/373624/git2.svg"
                alt="Git"
                className="w-10 h-10"
              />
              <img
                src="https://www.svgrepo.com/show/475654/github-color.svg"
                alt="GitHub"
                className="w-10 h-10"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                alt="Postman"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
