import Flag from "react-world-flags";
import { Sun, Moon } from "react-feather";
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
            className="w-6 h-6 rounded-full overflow-hidden border border-zinc-500 hover:scale-110 transition"
          >
            <Flag
              code={lang.startsWith("pt") ? "BR" : "US"}
              className="w-full h-full object-cover"
            />
          </button>

          {showLangOptionsDesktop && (
            <div className="absolute top-10 right-0 z-50 bg-transparent border border-zinc-600 rounded-lg shadow-lg px-3 py-2 flex gap-3 animate-fadeIn">

              <button
                onClick={() => {
                  changeLanguage("pt");
                  setShowLangOptionsDesktop(false);
                }}
                className="w-6 h-6 rounded-full overflow-hidden hover:scale-110 transition"
              >
                <Flag
                  code="BR"
                  className="w-6 h-6 object-cover"
                />
              </button>

              <button
                onClick={() => {
                  changeLanguage("en");
                  setShowLangOptionsDesktop(false);
                }}
                className="w-6 h-6 rounded-full overflow-hidden hover:scale-110 transition"
              >
                <Flag
                  code="US"
                  className="w-6 h-6 object-cover"
                />
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
              selectedSection === "#contato" ? "border-gray-600" : ""
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