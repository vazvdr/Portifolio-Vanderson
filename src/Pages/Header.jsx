import React, { useState, useRef, useEffect } from "react";
import { SiAlienware } from "react-icons/si";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { FaMoon, FaSun } from "react-icons/fa";
import { ArrowUpCircle } from 'react-feather';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 h-[70px] backdrop-blur-md flex justify-between items-center">
        <div className="absolute inset-x-0 bottom-0 h-[2px] header-line"></div>
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="inline-flex items-center space-x-1">
            <SiAlienware color="purple" size={50} className=" transform hover:scale-110" />
            <span className="w-[30px] h-38 font-bold text-lg  text-center" style={{ fontFamily: "DoctorGlitch" }}>
              {t("header.developer")}
            </span>
          </a>
          <div className="md:hidden flex items-center justify-between">
            {/* Botão de alternar tema */}
            <button
              onClick={toggleTheme}
              className="w-6 h-6 shadow-lg transition duration-300 flex items-center justify-center rounded-full mr-2 mt-2" // Distância de 4px
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 w-6 h-6 transform hover:scale-110" />
              ) : (
                <FaMoon className="text-black w-6 h-6 transform hover:scale-110" />
              )}
            </button>

            {/* Botões de bandeiras */}
            <div className="flex flex-row items-center space-x-2 mt-2">
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
              className="menu-button mr-3 ml-3"
              onClick={toggleMenu}
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>

          {/* Menu aberto para telas menores */}
          {isOpen && (
            <nav
              ref={menuRef}
              className={`menu-hamburguer absolute top-[70px] right-0 w-[100%] h-auto max-h-[300px]
    flex flex-col items-center py-4 mb-4 z-50 shadow-lg border border-gray-600 
    md:hidden overflow-y-auto animate-slideInDown`}
            >
              <ul className="flex flex-col space-y-4">
                <li>
                  <a
                    href="#sobre-mim"
                    className="hover:text-purple-800 hover:underline font-semibold"
                    onClick={(e) => handleLinkClick(e, "#sobre-mim")}
                  >
                    {t("header.menu.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencias"
                    className="hover:text-purple-800 hover:underline font-semibold"
                    onClick={(e) => handleLinkClick(e, "#experiencias")}
                  >
                    {t("header.menu.experiences")}
                  </a>
                </li>
                <li>
                  <a
                    href="#tecnologias"
                    className="hover:text-purple-800 hover:underline font-semibold"
                    onClick={(e) => handleLinkClick(e, "#tecnologias")}
                  >
                    {t("header.menu.technologies")}
                  </a>
                </li>
                <li>
                  <a
                    href="#projetos"
                    className="hover:text-purple-800 hover:underline font-semibold"
                    onClick={(e) => handleLinkClick(e, "#projetos")}
                  >
                    {t("header.menu.projects")}
                  </a>
                </li>
                <li>
                  <button
                    href="#contato"
                    className="font-semibold py-1 px-3 border border-black rounded-[10px] 
          transform hover:scale-110 transition-all duration-500 ease-in-out"
                    onClick={(e) => handleLinkClick(e, "#contato")}
                  >
                    {t("header.menu.contact")}
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>

        {/* Menu para telas medias */}
        <nav className="hidden md:flex items-center space-x-6 mr-[1%] animate-fadeInLeft delay-150 sm:hidden lg:hidden">
          <ul className="flex items-center space-x-3 "> {/* Ajustando o espaçamento entre os botões de idioma e os itens do menu */}

            {/* Botões de idioma */}
            <button
              onClick={() => changeLanguage("pt")}
              className=" w-6 h-6 bg-secondary-01 shadow-lg transform hover:scale-110 transition duration-300 flex items-center justify-center rounded-full"
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

            {/* Itens do menu */}
            <li>
              <a
                href="#sobre-mim"
                className="hover:text-purple-700 font-semibold whitespace-nowrap"
                onClick={(e) => handleLinkClick(e, "#sobre-mim")}
              >
                {t("header.menu.about")}
              </a>
            </li>
            <li>
              <a
                href="#experiencias"
                className="hover:text-purple-700 font-semibold"
                onClick={(e) => handleLinkClick(e, "#experiencias")}
              >
                {t("header.menu.experiences")}
              </a>
            </li>
            <li>
              <a
                href="#tecnologias"
                className="hover:text-purple-700 font-semibold"
                onClick={(e) => handleLinkClick(e, "#tecnologias")}
              >
                {t("header.menu.technologies")}
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-purple-700 font-semibold"
                onClick={(e) => handleLinkClick(e, "#projetos")}
              >
                {t("header.menu.projects")}
              </a>
            </li>
            <li>
              <button href="#contato" className="font-semibold py-2 px-2 border border-black rounded-[10px] transform hover:scale-110 
                transition-all duration-500 ease-in-out"onClick={(e) => handleLinkClick(e, "#contato")}>

                {t("header.menu.contact")}
              </button>
            </li>
          </ul>

          {/* Botão de alternar tema, posicionado 4px da margem direita */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 shadow-lg transition duration-1000 flex items-center rounded-full"  // 4px de margem da direita
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 w-5 h-5 transform hover:scale-110" /> // Sol para o Light Mode
            ) : (
              <FaMoon className="text-blue-600 w-5 h-5 transform hover:scale-110" /> // Lua para o Dark Mode
            )}
          </button>
        </nav>

        {/* Menu para telas maiores (lg e acima) */}
        <nav className="hidden lg:flex items-center space-x-10 mr-[2%] animate-fadeInRight delay-400">
          <ul className="flex items-center lg:space-x-5">

            {/* Botões de idioma */}
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

            {/* Itens do menu */}
            <li>
              <a
                href="#sobre-mim"
                className="hover:text-purple-700 font-semibold whitespace-nowrap"
                onClick={(e) => handleLinkClick(e, "#sobre-mim")}
              >
                {t("header.menu.about")}
              </a>
            </li>
            <li>
              <a
                href="#experiencias"
                className="hover:text-purple-700 font-semibold "
                onClick={(e) => handleLinkClick(e, "#experiencias")}
              >
                {t("header.menu.experiences")}
              </a>
            </li>
            <li>
              <a
                href="#tecnologias"
                className="hover:text-purple-700 font-semibold"
                onClick={(e) => handleLinkClick(e, "#tecnologias")}
              >
                {t("header.menu.technologies")}
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-purple-700 font-semibold"
                onClick={(e) => handleLinkClick(e, "#projetos")}
              >
                {t("header.menu.projects")}
              </a>
            </li>
            <li>
              <button
                href="#contato"
                className="contact-button font-semibold py-2 px-2 border border-black rounded-[10px] 
    transform hover:scale-110 transition-all duration-500 ease-in-out text-md"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(e, "#contato");
                }}
              >
                {t("header.menu.contact")}
              </button>
            </li>
          </ul>

          {/* Botão de alternar tema, posicionado 4px da margem direita */}
          <button
            onClick={toggleTheme}
            className="shadow-lg transition duration-1000 flex items-center justify-center rounded-full mr-[4%] lg:w-6 lg:h-6"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 w-6 h-6 transform hover:scale-110" /> // Sol para o Light Mode
            ) : (
              <FaMoon className="text-black w-6 h-6 transform hover:scale-110" />
            )}
          </button>
        </nav>
      </header>

      {/* Botão para voltar ao topo */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button w-8 h-8 fixed bottom-16 right-6 bg-primary-01 text-white p-2 rounded-full shadow-lg transform hover:scale-110 transition duration-300 z-50"
        >
          <ArrowUpCircle size={34} className="hover:text-purple-800" />
        </button>
      )}

    </>
  );
};

export default Header;
