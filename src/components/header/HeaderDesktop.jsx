import { Sun, Moon } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const HeaderDesktop = (props) => {
  const {
    t,
    i18n,
    theme,
    toggleTheme,
    showLangOptionsDesktop,
    setShowLangOptionsDesktop,
    langRefDesktop,
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
    <nav className="hidden lg:flex items-center space-x-10 mr-[2%]">
      <ul className="flex items-center space-x-5">
        {/* 🌍 IDIOMA */}
        <div className="relative" ref={langRefDesktop}>
          <button
            onClick={() =>
              setShowLangOptionsDesktop((prev) => !prev)
            }
            className={`w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition flex items-center justify-center text-xs font-bold border border-zinc-500 shadow-md ${
              isPortuguese
                ? "bg-gradient-to-br from-green-800 via-yellow-300 to-green-800 text-black"
                : "bg-gradient-to-br from-blue-600 via-red-500 to-blue-600 text-white"
            }`}
          >
            <span>{isPortuguese ? "BR" : "US"}</span>
          </button>

          {showLangOptionsDesktop && (
            <div className="absolute top-10 right-0 z-50 bg-zinc-900/95 backdrop-blur-md border border-zinc-600 rounded-lg shadow-lg px-3 py-2 flex gap-3 animate-fadeIn">
              <button
                onClick={() => {
                  changeLanguage("pt");
                  setShowLangOptionsDesktop(false);
                }}
                className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition flex items-center justify-center text-xs font-bold border border-zinc-500 shadow-md bg-gradient-to-br from-green-600 via-yellow-400 to-green-800 text-black"
              >
                <span>BR</span>
              </button>

              <button
                onClick={() => {
                  changeLanguage("en");
                  setShowLangOptionsDesktop(false);
                }}
                className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition flex items-center justify-center text-xs font-bold border border-zinc-500 shadow-md bg-gradient-to-br from-blue-700 via-blue-500 to-red-600 text-white"
              >
                <span>US</span>
              </button>
            </div>
          )}
        </div>

        {/* 🔥 MENU */}
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.id}
              onClick={(e) => handleLinkClickSelect(e, item.id)}
              className={`buttons-menu font-semibold transition-all duration-300 ${
                selectedSection === item.id
                  ? "border-b-2 menu-selector pb-1"
                  : "border-b-2 border-transparent"
              }`}
            >
              {t(`header.menu.${item.label}`)}
            </a>
          </li>
        ))}

        {/* 📩 CONTATO */}
        <li>
          <HoverBorderGradient
            as="button"
            onClick={(e) => handleLinkClickSelect(e, "#contato")}
            containerClassName={`transform hover:scale-110 transition-all duration-500 ${
              selectedSection === "#contato"
                ? "border-gray-600"
                : ""
            }`}
            className="contact-button font-semibold"
          >
            {t("header.menu.contact")}
          </HoverBorderGradient>
        </li>

        {/* 🌙 TEMA */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition hover:scale-110"
        >
          {theme === "dark" ? (
            <Sun className="text-yellow-400" />
          ) : (
            <Moon className="text-blue-600" />
          )}
        </button>
      </ul>
    </nav>
  );
};

export default HeaderDesktop;