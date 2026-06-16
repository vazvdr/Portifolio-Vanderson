import { Sun, Moon } from "react-feather";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Menu, X } from "lucide-react";

const HeaderMobile = (props) => {
  const {
    t,
    i18n,
    theme,
    toggleTheme,
    showLangOptionsMobile,
    setShowLangOptionsMobile,
    isOpen,
    toggleMenu,
    menuRef,
    langRefMobile,
    changeLanguage,
    handleLinkClickSelect,
    selectedSection,
  } = props;

  const lang = i18n?.language || "pt-BR";

  const isPortuguese = lang.startsWith("pt");

  const menuItems = [
    { id: "#sobre-mim", label: "about" },
    { id: "#formacao", label: "education" },
    { id: "#experiencias", label: "experiences" },
    { id: "#tecnologias", label: "technologies" },
    { id: "#projetos", label: "projects" },
  ];

  return (
    <div className="lg:hidden flex items-center">
      {/* 🌍 IDIOMA */}
      <div className="relative" ref={langRefMobile}>
        <button
          onClick={() => setShowLangOptionsMobile((prev) => !prev)}
          className={`w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition flex items-center justify-center text-xs font-bold border border-zinc-500 shadow-md ${
            isPortuguese
              ? "bg-gradient-to-br from-green-600 via-yellow-400 to-green-800 text-black"
              : "bg-gradient-to-br from-blue-700 via-blue-500 to-red-600 text-white"
          }`}
        >
          <span>{isPortuguese ? "BR" : "US"}</span>
        </button>

        {showLangOptionsMobile && (
          <div className="absolute top-10 right-0 bg-zinc-900/95 backdrop-blur-md border border-zinc-600 rounded-lg p-2 flex gap-2 z-50 shadow-lg">
            <button
              onClick={() => {
                changeLanguage("pt");
                setShowLangOptionsMobile(false);
              }}
              className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition flex items-center justify-center text-xs font-bold border border-zinc-500 shadow-md bg-gradient-to-br from-green-600 via-yellow-400 to-green-800 text-black"
            >
              <span>BR</span>
            </button>

            <button
              onClick={() => {
                changeLanguage("en");
                setShowLangOptionsMobile(false);
              }}
              className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition flex items-center justify-center text-xs font-bold border border-zinc-500 shadow-md bg-gradient-to-br from-blue-700 via-blue-500 to-red-600 text-white"
            >
              <span>US</span>
            </button>
          </div>
        )}
      </div>

      {/* 🍔 BOTÃO MENU */}
      <button
        className="ml-3 p-1 rounded-lg border border-zinc-500 hover:scale-110 transition"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* 🌙 TEMA */}
      <button
        onClick={toggleTheme}
        data-testid="theme-wrapper"
        className="ml-2 p-1 rounded-full hover:scale-110 transition"
      >
        {theme === "dark" ? (
          <Sun className="text-yellow-400" />
        ) : (
          <Moon className="text-blue-600" />
        )}
      </button>

      {/* 🌑 OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        />
      )}

      {/* 📱 MENU LATERAL */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-[50%] bg-zinc-900 text-white border-l border-zinc-400 z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          {/* ❌ FECHAR */}
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg border border-zinc-500 hover:scale-110 transition"
            >
              <X size={22} />
            </button>
          </div>

          {/* 🔗 LINKS */}
          <ul className="flex flex-col items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  onClick={(e) => {
                    handleLinkClickSelect(e, item.id);
                  }}
                  className={`text-lg font-semibold transition-all ${
                    selectedSection === item.id
                      ? "border-b-2 border-white pb-1"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {t(`header.menu.${item.label}`)}
                </a>
              </li>
            ))}

            <HoverBorderGradient
              as="button"
              onClick={(e) => {
                handleLinkClickSelect(e, "#contato");
              }}
              className="font-semibold"
            >
              {t("header.menu.contact")}
            </HoverBorderGradient>
          </ul>

          <div />
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;