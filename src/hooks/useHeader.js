import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeProvider";

export const useHeader = () => {
  const { t, i18n } = useTranslation();

  const [showLangOptionsMobile, setShowLangOptionsMobile] = useState(false);
  const [showLangOptionsDesktop, setShowLangOptionsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const { theme, toggleTheme } = useTheme();

  const menuRef = useRef(null);
  const langRefMobile = useRef(null);
  const langRefDesktop = useRef(null);

  const sections = [
    "#sobre-mim",
    "#formacao",
    "#experiencias",
    "#tecnologias",
    "#projetos",
    "#contato",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRefMobile.current && !langRefMobile.current.contains(event.target)) {
        setShowLangOptionsMobile(false);
      }
      if (langRefDesktop.current && !langRefDesktop.current.contains(event.target)) {
        setShowLangOptionsDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);

      let current = null;

      sections.forEach((section) => {
        const el = document.querySelector(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });

      if (current) setSelectedSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeLanguage = (lng) => {
    const value = lng === "pt" ? "pt-BR" : "en";
    i18n.changeLanguage(value);
    localStorage.setItem("i18nextLng", value);
  };

  const handleLinkClickSelect = (e, section) => {
    e.preventDefault();
    setSelectedSection(section);
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return {
    t,
    i18n,
    theme,
    toggleTheme,

    showLangOptionsMobile,
    setShowLangOptionsMobile,
    showLangOptionsDesktop,
    setShowLangOptionsDesktop,

    isOpen,
    toggleMenu,

    menuRef,
    langRefMobile,
    langRefDesktop,

    changeLanguage,
    handleLinkClickSelect,
    selectedSection,

    showScrollButton,
    scrollToTop,
  };
};