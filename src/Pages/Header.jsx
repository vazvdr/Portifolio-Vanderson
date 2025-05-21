import React, { useState, useRef, useEffect } from "react";
import { SiAlienware } from "react-icons/si";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { ArrowUpCircle, Sun, Moon } from 'react-feather';
import { useTheme } from '../ThemeProvider'

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);

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
      <header className="fixed top-0 left-0 w-full z-50 h-[70px] backdrop-blur-md flex justify-between items-center">
        <div className="header-line absolute inset-x-0 bottom-0 h-[1.5px]"></div>
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="inline-flex items-center space-x-1">
            <SiAlienware size={50} className="alien transform hover:scale-110" />
            <span className="w-[30px] h-38 font-bold text-lg  text-center" style={{ fontFamily: "DoctorGlitch" }}>
              {t("header.developer")}
            </span>
          </a>
          <div className="lg:hidden flex items-center justify-between">

            {/* Botões de bandeiras */}
            <div className="flex flex-row items-center space-x-4 mt-2">
              <button
                onClick={() => changeLanguage("pt")}
                className="w-6 h-6 bg-secondary-01 shadow-lg transform hover:scale-110 transition duration-300 flex items-center justify-center rounded-full"
              >
                <Flag
                  code="BR"
                  alt="Bandeira do Brasil"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="w-6 h-6 bg-secondary-01 shadow-lg transform hover:scale-110 transition duration-300 flex items-center justify-center rounded-full"
              >
                <Flag
                  code="US"
                  alt="Bandeira dos EUA"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
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
              {theme === 'dark' ? <Sun size={22} className="text-yellow-400 hover:scale-110" /> : <Moon size={22} className="text-blue-600 hover:scale-110"/>}
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
                  <button
                    href="#contato"
                    className={`contact-button font-semibold py-1 px-3 border border-black rounded-[10px] 
          transform hover:scale-110 transition-all duration-500 ease-in-out 
          ${selectedSection === "#contato" ? "border-gray-600" : ""}`}
                    onClick={(e) => handleLinkClickSelect(e, "#contato")}
                  >
                    {t("header.menu.contact")}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Menu para telas maiores (lg e acima) */}
        <nav className="hidden lg:flex items-center space-x-10 mr-[2%] animate-fadeInRight delay-400">
          <ul className="flex items-center lg:space-x-5">
            {/* Botões de idioma */}
            <button
              onClick={() => changeLanguage("pt")}
              className="w-6 h-6 bg-secondary-01 shadow-lg transform hover:scale-110 transition duration-300 flex items-center justify-center rounded-full"
            >
              <Flag code="BR" alt="Bandeira do Brasil" className="w-full h-full object-cover rounded-full" />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="w-6 h-6 bg-secondary-01 shadow-lg transform hover:scale-110 transition duration-300 flex items-center justify-center rounded-full"
            >
              <Flag code="US" alt="Bandeira dos EUA" className="w-full h-full object-cover rounded-full" />
            </button>

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
                  className={`font-semibold whitespace-nowrap transition-all duration-300 
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
              <button
                className={`border border-black font-semibold py-2 px-2 rounded-[10px] transform hover:scale-110 transition-all duration-500 ease-in-out text-md hover:bg-black hover:text-white animate-pulse-custom ${selectedSection === "#contato" ? "" : ""
                  }`}
                onClick={(e) => handleLinkClick(e, "#contato")}
              >
                {t("header.menu.contact")}
              </button>
            </li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition duration-300 flex items-center justify-center w-12 h-12 border-none"
            >
              {theme === 'dark' ? <Sun size={22} className="text-yellow-400 hover:scale-110" /> : <Moon size={22} className="text-blue-600 hover:scale-110"/>}
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
