import React, { useState, useRef, useEffect } from "react";
import { SiAlienware } from "react-icons/si";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { ArrowUpCircle, Sun, Moon } from 'react-feather';
import { useTheme } from '../ThemeProvider'
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showLangOptionsMobile, setShowLangOptionsMobile] = useState(false);
  const [showLangOptionsDesktop, setShowLangOptionsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);
  const langRefMobile = useRef(null);
  const langRefDesktop = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langRefMobile.current &&
        !langRefMobile.current.contains(event.target)
      ) {
        setShowLangOptionsMobile(false);
      }

      if (
        langRefDesktop.current &&
        !langRefDesktop.current.contains(event.target)
      ) {
        setShowLangOptionsDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Função para fechar o menu ao clicar fora
  const handleClickOutside = (event) => {
    if (!event.target.closest('.menu') && !event.target.closest('.menu-button')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Função para aparecer o botão que sobe para o topo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Função para traduzir
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // Suave rolagem ao clicar em um link do menu
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const sections = ["#sobre-mim", "#formacao", "#experiencias", "#tecnologias", "#projetos", "#contato"];
  const [selectedSection, setSelectedSection] = useState(null);

  // Função para tratar clique no menu
  const handleLinkClickSelect = (e, section) => {
    e.preventDefault();
    setSelectedSection(section);
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // Função para monitorar o scroll e atualizar o item selecionado
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = null;

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      if (currentSection) {
        setSelectedSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 h-[70px] backdrop-blur-lg flex justify-between items-center">
        <div className="header-line absolute inset-x-0 bottom-0 h-[1.5px]"></div>
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="inline-flex items-center space-x-1">
            <SiAlienware data-testid="alien-icon" size={50} className="alien transform hover:scale-110" />
            <span className="w-[30px] h-38 font-bold text-lg  text-center" style={{ fontFamily: "DoctorGlitch" }}>
              {t("header.developer")}
            </span>
          </a>
          <div className="lg:hidden flex items-center justify-between">

            <div className="relative mt-2" ref={langRefMobile}>
              <button
                onClick={() => setShowLangOptionsMobile(prev => !prev)}
                className="w-6 h-6 bg-secondary-01 shadow-lg transform hover:scale-110 transition duration-300 flex items-center justify-center rounded-full"
              >
                <Flag
                  code={i18n.language === "pt" ? "BR" : "US"}
                  alt="Idioma atual"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              {showLangOptionsMobile && (
                <div className="absolute top-8 right-0 min-w-[60px] bg-transparent rounded-md shadow-lg px-4 py-2 flex flex-col gap-3 z-50">
                  <button onClick={() => { changeLanguage("pt"); setShowLangOptionsMobile(false); }}>
                    <Flag code="BR" className="w-6 h-6 object-cover rounded-full" alt="Português" />
                  </button>
                  <button onClick={() => { changeLanguage("en"); setShowLangOptionsMobile(false); }}>
                    <Flag code="US" className="w-6 h-6 object-cover rounded-full" alt="Inglês" />
                  </button>
                </div>
              )}
            </div>

            {/* Botão do menu hambúrguer */}
            <button
              className="menu-button mr-2 ml-3"
              onClick={toggleMenu}
            >
              {isOpen ? '✖' : '☰'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 mt-[3%] rounded-full transition duration-300 flex items-center justify-center w-12 h-12 border-none"
            >
              {theme === 'dark' ? <Sun size={22} className="text-yellow-400 hover:scale-110" /> : <Moon size={22} className="text-blue-600 hover:scale-110" />}
            </button>

            {/* Menu aberto para telas menores */}
            <div
              ref={menuRef}
              className={`menu-hamburguer absolute top-[70px] right-0 w-[100%] max-h-[300px]
    flex flex-col items-center py-4 mb-4 z-50 shadow-lg border-b border-gray-600 
    lg:hidden overflow-hidden transition-all duration-1000 ease-in-out ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
                }`}
            >
              <ul className="flex flex-col space-y-4">
                <li>
                  <a
                    href="#sobre-mim"
                    className={`hover:text-gray-600 font-semibold transition-all duration-300 
            ${selectedSection === "#sobre-mim" ? "border-b-2 border-gray-600 pb-1" : "border-b-2 border-transparent"}`}
                    onClick={(e) => handleLinkClickSelect(e, "#sobre-mim")}
                  >
                    {t("header.menu.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#formacao"
                    className={`hover:text-gray-600 font-semibold transition-all duration-300 
            ${selectedSection === "#formacao" ? "border-b-2 border-gray-600 pb-1" : "border-b-2 border-transparent"}`}
                    onClick={(e) => handleLinkClickSelect(e, "#formacao")}
                  >
                    {t("header.menu.education")}
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencias"
                    className={`hover:text-gray-600 font-semibold transition-all duration-300 
            ${selectedSection === "#experiencias" ? "border-b-2 border-gray-600 pb-1" : "border-b-2 border-transparent"}`}
                    onClick={(e) => handleLinkClickSelect(e, "#experiencias")}
                  >
                    {t("header.menu.experiences")}
                  </a>
                </li>
                <li>
                  <a
                    href="#tecnologias"
                    className={`hover:text-gray-600 font-semibold transition-all duration-300 
            ${selectedSection === "#tecnologias" ? "border-b-2 border-gray-600 pb-1" : "border-b-2 border-transparent"}`}
                    onClick={(e) => handleLinkClickSelect(e, "#tecnologias")}
                  >
                    {t("header.menu.technologies")}
                  </a>
                </li>
                <li>
                  <a
                    href="#projetos"
                    className={`hover:text-gray-600 font-semibold transition-all duration-300 
            ${selectedSection === "#projetos" ? "border-b-2 border-gray-600 pb-1" : "border-b-2 border-transparent"}`}
                    onClick={(e) => handleLinkClickSelect(e, "#projetos")}
                  >
                    {t("header.menu.projects")}
                  </a>
                </li>
                <li>
                  <HoverBorderGradient
                    as="button"
                    onClick={(e) => handleLinkClickSelect(e, "#contato")}
                    containerClassName={`transform hover:scale-110 transition-all duration-500 ease-in-out ${selectedSection === "#contato" ? "border-gray-600" : ""
                      }`}
                    className="contact-button font-semibold"
                  >
                    {t("header.menu.contact")}
                  </HoverBorderGradient>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Menu para telas maiores (lg e acima) */}
        <nav className="hidden lg:flex items-center space-x-10 mr-[2%] animate-fadeInRight delay-400">
          <ul className="flex items-center lg:space-x-5">
            {/* Botões de bandeiras (desktop) */}
            <div className="relative" ref={langRefDesktop}>
              <button
                onClick={() => setShowLangOptionsDesktop(prev => !prev)}
                className="w-6 h-6 bg-secondary-01 shadow-lg transform hover:scale-110 transition duration-300 flex items-center justify-center rounded-full"
              >
                <Flag
                  code={i18n.language === "pt" ? "BR" : "US"}
                  alt="Idioma atual"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              {showLangOptionsDesktop && (
                <div className="absolute top-8 right-0 min-w-[60px] bg-transparent rounded-md shadow-lg px-4 py-2 flex flex-col gap-3 z-50">
                  <button onClick={() => { changeLanguage("pt"); setShowLangOptionsDesktop(false); }}>
                    <Flag code="BR" className="w-6 h-6 object-cover rounded-full" alt="Português" />
                  </button>
                  <button onClick={() => { changeLanguage("en"); setShowLangOptionsDesktop(false); }}>
                    <Flag code="US" className="w-6 h-6 object-cover rounded-full" alt="Inglês" />
                  </button>
                </div>
              )}
            </div>

            {/* Itens do menu */}
            {[
              { id: "#sobre-mim", label: t("header.menu.about") },
              { id: "#formacao", label: t("header.menu.education") },
              { id: "#experiencias", label: t("header.menu.experiences") },
              { id: "#tecnologias", label: t("header.menu.technologies") },
              { id: "#projetos", label: t("header.menu.projects") },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  className={`buttons-menu font-semibold whitespace-nowrap transition-all duration-300 
            ${selectedSection === item.id
                      ? "border-b-2 menu-selector pb-1"
                      : "border-b-2 border-transparent"
                    }`}
                  onClick={(e) => handleLinkClickSelect(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Botão de contato */}
            <li>
              <HoverBorderGradient
                as="button"
                onClick={(e) => handleLinkClickSelect(e, "#contato")}
                containerClassName={`transform hover:scale-110 transition-all duration-500 ease-in-out ${selectedSection === "#contato" ? "border-gray-600" : ""
                  }`}
                className="contact-button font-semibold"
              >
                {t("header.menu.contact")}
              </HoverBorderGradient>
            </li>
            <button
              onClick={toggleTheme}
              data-testid="theme-wrapper"
              className="p-2 rounded-full transition duration-300 flex items-center justify-center w-12 h-12 border-none"
            >
              {theme === 'dark' ? <Sun size={22} className="text-yellow-400 hover:scale-110" /> : <Moon size={22} className="text-blue-600 hover:scale-110" />}
            </button>
          </ul>
        </nav>
      </header>

      {/* Botão para voltar ao topo */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button w-8 h-8 fixed bottom-28 mr-[1%] text-white p-2 rounded-full shadow-lg transform hover:scale-110 transition duration-300 z-50"
        >
          <ArrowUpCircle size={40} />
        </button>
      )}

    </>
  );
};

export default Header;
