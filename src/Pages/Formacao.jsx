import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Estacio from "../assets/Estacio.png";
import Docker from "../assets/Docker.jpg";
import Tailwind from "../assets/TailwindCSS.jpg";
import Git from "../assets/GitHub.jpg";
import Linux from "../assets/Linux.jpg";
import English from "../assets/Proficient-English.jpg";
import Spring from '../assets/Spring2025.jpg';

const Formacao = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(window.innerWidth >= 768);
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth >= 1024 ? 3 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 3 : 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleAnimation = () => {
      if (window.innerWidth < 768) {
        setAnimate(true);
        return;
      }

      const section = document.getElementById("formacao");
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimate(false);
            setTimeout(() => setAnimate(true), 100);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
      return () => observer.unobserve(section);
    };

    handleAnimation();
    window.addEventListener("resize", handleAnimation);

    return () => window.removeEventListener("resize", handleAnimation);
  }, []);

  const cursos = [
    { img: Estacio, titulo: "formacao.cardCollege.titulo", instituicao: "formacao.cardCollege.subtitulo", periodo: "formacao.cardCollege.periodo", descricao: "formacao.cardCollege.descricao" },
    { img: English, titulo: "formacao.cardEnglish.titulo", instituicao: "formacao.cardEnglish.subtitulo", periodo: "formacao.cardEnglish.periodo", descricao: "formacao.cardEnglish.descricao" },
    { img: Spring, titulo: "formacao.cardSpring.titulo", instituicao: "formacao.cardSpring.subtitulo", periodo: "formacao.cardSpring.periodo", descricao: "formacao.cardSpring.descricao" },
    { img: Docker, titulo: "formacao.cardDocker.titulo", instituicao: "formacao.cardDocker.subtitulo", periodo: "formacao.cardDocker.periodo", descricao: "formacao.cardDocker.descricao" },
    { img: Tailwind, titulo: "formacao.cardTailwind.titulo", instituicao: "formacao.cardTailwind.subtitulo", periodo: "formacao.cardTailwind.periodo", descricao: "formacao.cardTailwind.descricao" },
    { img: Git, titulo: "formacao.cardGit.titulo", instituicao: "formacao.cardGit.subtitulo", periodo: "formacao.cardGit.periodo", descricao: "formacao.cardGit.descricao" },
    { img: Linux, titulo: "formacao.cardLinux.titulo", instituicao: "formacao.cardLinux.subtitulo", periodo: "formacao.cardLinux.periodo", descricao: "formacao.cardLinux.descricao" },
  ];

  return (
    <section
      id="formacao"
      className={`relative py-16 w-full flex flex-col items-center transition-all duration-1000 ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1
        className="text-2xl md:text-3xl md:font-bold  mb-8 mt-20 animate-slide-left"
        style={{ fontFamily: "DoctorGlitch" }}
      >
        {t("formacao.titulo")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(showAll ? cursos : cursos.slice(0, visibleCards)).map((curso, index) => (
          <div
            key={index}
            className="card p-6 w-[90%] mx-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              src={curso.img}
              alt={t(curso.titulo)}
              className="w-[100%] object-contain"
            />
            <h2 className="text-xl font-semibold">{t(curso.titulo)}</h2>
            <p>{t(curso.instituicao)}</p>
            <p className="mb-2">{t(curso.periodo)}</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {t(curso.descricao, { returnObjects: true }).map((item, i) => (
                <li key={i} className="block">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {cursos.length > visibleCards && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="card mt-6 px-4 py-2 w-[90%] rounded-lg font-bold text-3x1 transition-all hover:scale-105"
        >
          {showAll ? t("formacao.verMenos") : t("formacao.verMais")}
        </button>
      )}
    </section>
  );
};

export default Formacao;
