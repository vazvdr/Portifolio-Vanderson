import React from "react";
import Foto from "../assets/Foto.jpg";
import { FaLinkedin, FaGithub, FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Sobre = () => {
  const { t } = useTranslation();

  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Ativa a animação quando visível
        } else {
          setAnimate(false); // Desativa quando sai da viewport
        }
      },
      { threshold: 0.3 } // 30% da seção visível para ativar a animação
    );

    const section = document.getElementById("sobre-mim");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // A animação será acionada quando 50% da div estiver visível
    );

    const target = document.querySelector("#foto-container");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="sobre-mim" className="relative">
      {/*Codigo para telas pequenas */}
      <div className="md:hidden ld:hidden relative z-10 flex flex-col items-center md:items-start">
        <div className="flex flex-colum max-w-[100%]">
          <div
            className={`mt-[22%] w-[40%] ml-[2%] animate-fade-in-right
            sm:w-[50%] sm:mt-[15%] sm:mb-[4%] sm:ml-[10%] ${animate ? "animate-slide-in-left" : "opacity-0"
              }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <div className="md:mt-7 pt-0 animate-moveY lg:pt-3">
                {t("sobre.heading.greeting")}
              </div>
              <span className="text-orange-600 hover:text-purple-600 hover:translate-x-1 transition-all duration-300">
                {t("sobre.heading.name")}
              </span>
              <br />
              {t("sobre.heading.role")}
            </h1>
            <p className="text-base sm:text-lg leading-snug">
              {t("sobre.description")}
            </p>
            <div className="mt-4 flex">
              <a
                href="#projetos"
                className="buttons-sobre font-semibold py-2 px-2 rounded-md hover:bg-purple-800 
                flex items-center space-x-2 
                transition-all transform hover:scale-105 whitespace-nowrap"
                onClick={(e) => handleLinkClick(e, "#projetos")}
              >
                <span>{t("sobre.projects")}</span>
                <FaArrowDown size={20} />
              </a>
            </div>
          </div>
          <div
            className={`relative w-[65%] mt-[22%] ml-[5%] mr-[2%] mt-[15%] opacity-0 animate-fade-in-left 
  sm:w-[50%] sm:mt-[20%] sm:mr-[5%] sm:mb-[4%] 
  ${animate ? "animate-slide-in-right opacity-100" : ""}`}
          >
            {/* Contêiner de sombreamento */}
            <div
              className="h-[40%] w-[150%] sm:h-[350%] absolute inset-0 transform scale-105 bg-gradient-to-r from-black to-orange-700 to-transparent 
    rounded-md blur-md -z-10"
            ></div>
            {/* Imagem */}
            <img
              src={Foto}
              alt="Vanderson"
              className="w-full object-cover rounded-md"
            />
            <div className="mt-5 flex items-center justify-center md:justify-start space-x-1">
              <a
                href="/Curriculo-Atualizado.pdf"
                download
                className="buttons-sobre py-1 px-2 rounded-md font-semibold 
                shadow-lg hover:bg-purple-800 hover:text-white transition-all 
                transform hover:scale-110 "
              >
                {t("sobre.button")}
              </a>
              <a
                href="https://www.linkedin.com/in/vanderson-de-azevedo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:translate-y-120px transition-all transform hover:scale-110"
              >
                <FaLinkedin size={32} />
                <span className="sr-only">{t("sobre.linkedin")}</span>
              </a>
              <a
                href="https://wa.me/5521967441433"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={32} className="text-xl hover:text-green-600 transform hover:scale-110" />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-black text-white text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                WhatsApp
              </span>
              <a
                href="https://github.com/vazvdr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-all transform hover:scale-110"
              >
                <FaGithub size={32} />
                <span className="sr-only">{t("sobre.github")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Codigo para telas medias e grandes */}

      <div className="hidden md:flex relative z-10 flex-col items-center md:items-start">
        <div className="flex flex-colum max-w-[100%]">
          <div className={`mt-[10%] w-[40%] ml-[20%]
          lg:w-[50%] animate-fade-in-right ${animate ? "animate-slide-in-left" : "opacity-0"
            }`}>
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <div className="md:mt-7 pt-0 animate-moveY lg:pt-3">
                {t("sobre.heading.greeting")}
              </div>
              <span className="text-orange-600 hover:text-purple-600 hover:translate-x-1 transition-all duration-300">
                {t("sobre.heading.name")}
              </span>
              <br />
              {t("sobre.heading.role")}
            </h1>
            <p className="text-base sm:text-lg leading-snug">{t("sobre.description")}</p>
          </div>
          <div
            id="foto-container"
            className={`w-[38%] mt-[15%] ml-[5%] mr-[10%] opacity-0 
            lg:w-[27%] lg:mt-[8%] lg:ml-[5%] transition-opacity duration-1000 
            ${isVisible ? "opacity-100 scale-100" : "scale-90"
              }`}
          >
            <div
              className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-black to-gray-500 transform scale-105 blur-md
              md:h-[75%] lg:h-[100%]"
            ></div>
            <img
              src={Foto}
              alt="Vanderson"
              className="w-full object-cover rounded-md shadow-lg transform transition-transform duration-1000"
              style={{ transform: isVisible ? "scale(1)" : "scale(0.9)" }}
            />
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden md:flex mt-[5%] ml-[25%] space-x-4
      md:mt-[2%] md:ml-[20%] 
      lg:mt-[1%] lg:ml-[20%] lg:w-[50%]">
        <a
          href="#projetos"
          className="buttons-sobre h-9 font-semibold py-2 px-4 rounded-md hover:bg-purple-800 
    flex items-center space-x-2 
    transition-all transform hover:scale-105 whitespace-nowrap"
          onClick={(e) => handleLinkClick(e, "#projetos")}
        >
          <span>{t("sobre.projects")}</span>
          <FaArrowDown size={20} />
        </a>
        <a
          href="/Curriculo-Atualizado.pdf"
          download
          className="buttons-sobre h-9 py-1 px-4 rounded-md font-semibold 
    shadow-lg hover:bg-purple-800 transition-all 
    transform hover:scale-110 flex items-center"
        >
          {t("sobre.button")}
        </a>
        <a
          href="https://www.linkedin.com/in/vanderson-de-azevedo/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 flex items-center justify-center hover:text-blue-500 hover:translate-y-120px transition-all transform hover:scale-110"
        >
          <FaLinkedin size={32} />
          <span className="sr-only">{t("sobre.linkedin")}</span>
        </a>
        <a
          href="https://wa.me/5521967441433"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={28} className="h-9 text-xl hover:text-green-600 transform hover:scale-110" />
        </a>
        <a
          href="https://github.com/vazvdr"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 flex items-center justify-center hover:text-gray-500 transition-all transform hover:scale-110"
        >
          <FaGithub size={30} />
          <span className="sr-only">{t("sobre.github")}</span>
        </a>
        <a
          href="https://www.credly.com/users/vanderson-de-azevedo"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 flex items-center justify-center hover:text-orange-500 transition-all transform hover:scale-110"
        >
          <SiCredly size={32} />
          <span className="sr-only">{t("sobre.credly")}</span>
        </a>
      </div>
    </section >
  );
};

export default Sobre;
