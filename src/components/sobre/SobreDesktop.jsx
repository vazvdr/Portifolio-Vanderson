import Foto from "../../assets/Foto3.jpg";
import { FaLinkedin, FaGithub, FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Cover } from "../ui/cover";

const SobreDesktop = ({ t, animate, isVisible, tempo, handleLinkClick }) => {
  return (
    <>
      <div className="hidden md:flex relative z-10 flex-col items-center md:items-start">
        <div className="flex flex-colum max-w-[100%]">
          <div
            className={`mt-[10%] w-[40%] ml-[10%]
            lg:w-[50%] animate-fade-in-right ${
              animate ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h1 className="text-sobre text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <div className="md:mt-7 pt-0 animate-moveY lg:pt-3">
                {t("sobre.heading.greeting")}
              </div>

              <Cover className="hover:translate-x-1 transition-all duration-300">
                {t("sobre.heading.name")}
              </Cover>

              <br />

              <div className="relative md:min-h-[90px] lg:min-h-[60px]">
                <span>
                  <Typewriter
                    words={[
                      "Software Engineer",
                      "FullStack Developer",
                      "Mobile Developer",
                      "Java Developer",
                      "Javascript Developer",
                      "Flutter Developer",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={20}
                    deleteSpeed={20}
                    delaySpeed={200}
                  />
                </span>
              </div>
            </h1>

            <p className="text-base sm:text-lg leading-snug">
              {t("sobre.description")}
              <span className="inline-block text-sobre py-0 mx-2 animate-pulse-custom font-bold tracking-wide">
                {tempo.anos} {t("sobre.anos")}{" "}
                {tempo.dias} {tempo.dias === 1 ? t("sobre.dia") : t("sobre.dias")}{" "}
                {tempo.segundos.toLocaleString()} {t("sobre.segundos")}
              </span>
              {t("sobre.description2")}
            </p>
          </div>

          <div
            id="foto-container"
            className={`w-[30%] mt-[15%] ml-[15%] mr-[2%] opacity-0 
            lg:w-[27%] lg:mt-[8.5%] lg:ml-[15%] lg:mr-[10%] transition-opacity duration-1000 
            ${isVisible ? "opacity-100 scale-100" : "scale-90"}`}
          >
            <div className="relative p-[2px] rounded-md bg-gradient-to-r from-gray-400 via-gray-600 to-gray-700">
              <img
                src={Foto}
                alt="Vanderson"
                className="w-full object-cover rounded-md shadow-lg transform border border-transparent transition-transform duration-1000"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  transform: isVisible ? "scale(1)" : "scale(0.9)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTÕES — FORA (igual original) */}
      <div
        className="hidden sm:hidden md:flex mt-[5%] ml-[25%] space-x-4
        md:mt-[2%] md:ml-[10%] 
        lg:mt-[1%] lg:ml-[10%] lg:w-[50%]"
      >
        <a
          href="#projetos"
          className="buttons-sobre h-9 font-semibold py-2 px-4 rounded-md border
          hover:bg-black hover:text-white flex items-center space-x-2 
          transition-all transform hover:scale-105 whitespace-nowrap 
          animate-pulse-custom"
          onClick={(e) => handleLinkClick(e, "#projetos")}
        >
          <span>{t("sobre.projects")}</span>
          <FaArrowDown size={20} />
        </a>

        <a
          href="/Curriculo-Atualizado-05-2026.pdf"
          download
          className="buttons-sobre h-9 py-1 px-4 rounded-md font-semibold 
          shadow-lg border border-black hover:bg-black hover:text-white transition-all 
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
          <FaWhatsapp
            size={28}
            className="h-9 text-xl hover:text-green-600 transform hover:scale-110"
          />
        </a>

        <a
          href="https://github.com/vazvdr"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 flex items-center justify-center transition-all transform hover:scale-110"
        >
          <FaGithub size={30} />
          <span className="sr-only">{t("sobre.github")}</span>
        </a>
      </div>
    </>
  );
};

export default SobreDesktop;