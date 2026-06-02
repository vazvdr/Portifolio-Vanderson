import Foto from "../../assets/Foto3.jpg";
import { FaLinkedin, FaGithub, FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Cover } from "../ui/cover";

const SobreMobile = ({ t, animate, tempo, handleLinkClick }) => {
  return (
    <div className="md:hidden ld:hidden relative z-10 flex flex-col items-center">
      <div className="flex flex-col items-center max-w-[100%]">
        <div
          className={`mt-[17%] w-[90%] animate-fade-in-right sm:mt-[15%] sm:mb-[4%] ${
            animate ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <h1 className="text-sobre text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
            <div className="md:mt-7 pt-0 animate-moveY lg:pt-3">
              {t("sobre.heading.greeting")}
            </div>

            <Cover className="transition-all duration-300">
              {t("sobre.heading.name")}
            </Cover>

            <br />

            <div className="relative min-h-[10px] sm:min-h-[40px]">
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
                  delaySpeed={250}
                />
              </span>
            </div>
          </h1>

          <p className="text-base sm:text-lg leading-snug text-center">
            {t("sobre.description")}
            <span className="inline-block text-sobre py-0 mx-3 animate-pulse-custom font-bold tracking-wide">
              {tempo.anos} {t("sobre.anos")}{" "}
              {tempo.dias} {tempo.dias === 1 ? t("sobre.dia") : t("sobre.dias")}{" "}
              {tempo.segundos.toLocaleString()} {t("sobre.segundos")}
            </span>
            {t("sobre.description2")}
          </p>

          <div className="mt-5 flex items-center justify-center space-x-2">
            <a
              href="/Curriculo-Atualizado-05-2026.pdf"
              download
              className="buttons-sobre py-1 px-2 rounded-md font-semibold 
              border border-black shadow-lg hover:bg-black hover:text-white transition-all 
              transform hover:scale-110"
            >
              {t("sobre.button")}
            </a>

            <a
              href="https://www.linkedin.com/in/vanderson-de-azevedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>

            <a
              href="https://wa.me/5521967441433?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20link%20portf%C3%B3lio%20do%20Vanderson!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={32}
                className="text-xl hover:text-green-600 transform hover:scale-110"
              />
            </a>

            <a
              href="https://github.com/vazvdr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-all transform hover:scale-110"
            >
              <FaGithub size={32} />
            </a>
          </div>

          <div className="mt-4 flex justify-center">
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
          </div>
        </div>

        <div
          className={`relative w-[48%] sm:w-[40%] mt-10 animate-fade-in-left text-center ${
            animate ? "animate-slide-in-right opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative p-[3px] rounded-md bg-gradient-to-r from-gray-400 via-gray-600 to-gray-700">
            <img
              src={Foto}
              alt="Vanderson"
              className="w-full object-cover rounded-md bg-white"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMobile;