import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Estacio from "../assets/Estacio.png";
import Docker from "../assets/Docker.jpg";
import Tailwind from "../assets/TailwindCSS.jpg";
import Git from "../assets/GitHub.jpg";
import Linux from "../assets/Linux.jpg";
import English from "../assets/English-C2.jpg";

const Formacao = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(window.innerWidth >= 768);

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

  return (
    <section
      id="formacao"
      className={`relative py-16 w-full flex flex-col items-center transition-all duration-1000 ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1
        className="text-3xl font-bold mb-8 mt-10 animate-slide-left"
        style={{ fontFamily: "DoctorGlitch" }}
      >
        {t("formacao.titulo")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { img: Estacio, titulo: "formacao.card1.titulo", instituicao: "formacao.card1.subtitulo", periodo: "formacao.card1.periodo", descricao: "formacao.card1.descricao" },
          { img: Docker, titulo: "formacao.card2.titulo", instituicao: "formacao.card2.subtitulo", periodo: "formacao.card2.periodo", descricao: "formacao.card2.descricao" },
          { img: Tailwind, titulo: "formacao.card3.titulo", instituicao: "formacao.card3.subtitulo", periodo: "formacao.card3.periodo", descricao: "formacao.card3.descricao" },
          { img: Git, titulo: "formacao.card4.titulo", instituicao: "formacao.card4.subtitulo", periodo: "formacao.card4.periodo", descricao: "formacao.card4.descricao" },
          { img: Linux, titulo: "formacao.card5.titulo", instituicao: "formacao.card5.subtitulo", periodo: "formacao.card5.periodo", descricao: "formacao.card5.descricao" },
          { img: English, titulo: "formacao.card6.titulo", instituicao: "formacao.card6.subtitulo", periodo: "formacao.card6.periodo", descricao: "formacao.card6.descricao" },
        ].map((curso, index) => (
          <div
            key={index}
            className="card p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              src={curso.img}
              alt={t(curso.titulo)}
              className="w-[100%] object-contain"
            />
            <h2 className="text-xl font-semibold">{t(curso.titulo)}</h2>
            <p className="text-gray-400">{t(curso.instituicao)}</p>
            <p className="text-gray-400 mb-2">{t(curso.periodo)}</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {t(curso.descricao, { returnObjects: true }).map((item, i) => (
                <li key={i} className="block">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formacao;
