import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

const Tecnologias = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [carouselSpeed, setCarouselSpeed] = useState("normal");

  const icons = [
    "https://www.svgrepo.com/show/452228/html-5.svg",
    "https://www.svgrepo.com/show/349330/css3.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    "https://www.svgrepo.com/show/452075/node-js.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    "https://www.svgrepo.com/show/439231/mongodb.svg",
    "https://www.svgrepo.com/show/354200/postgresql.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://www.svgrepo.com/show/373624/git2.svg",
    "https://www.svgrepo.com/show/475654/github-color.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  ];

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
      { threshold: 0.1 }
    );

    const target = document.querySelector("#stack-icons");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const handleScroll = (direction) => {
    const track = document.getElementById("carousel-track");
    const scrollAmount = 100;
    if (direction === "left") {
      track.scrollLeft -= scrollAmount;
    } else {
      track.scrollLeft += scrollAmount;
    }
  };

  return (
    <section
      id="tecnologias"
      className="relative py-10 w-full flex flex-col items-center"
    >
      <h1
        className="text-3xl font-bold mb-8 mt-10 animate-slide-right"
        style={{ fontFamily: "DoctorGlitch" }}
      >
        {t("tecnologias.title")}
      </h1>
      <div
        id="carousel-container"
        className="bg-gradient-to-r from-black  via-purple-900 to-black border-t border-b border-purple-800 relative w-[98%] h-[150px] lg:h-[200px] overflow-hidden"
        style={{ margin: "0 10%" }}
      >
        <div
          id="carousel-track"
          className={`flex items-center gap-6 mt-10 w-max ${
            carouselSpeed === "fast"
              ? "animate-carousel-fast"
              : "animate-carousel"
          }`}
          style={{
            animationDuration: carouselSpeed === "fast" ? "3s" : "7s",
            animationIterationCount: "infinite",
            whiteSpace: "nowrap", // Garante que os ícones fiquem em linha
          }}
        >
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Icon ${index}`}
              className="w-[70px] md:w-[70px] lg:w-[90px] xl:w-[100px]"
              style={{ flexShrink: 0 }}
            />
          ))}
          {icons.map((icon, index) => (
            <img
              key={`clone-${index}`}
              src={icon}
              alt={`Icon Clone ${index}`}
              className="w-[50px] md:w-[70px] lg:w-[90px] xl:w-[100px]"
              style={{ flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-3 gap-4">
        <button
          className="bg-transparent text-purple-700 w-12 h-12 rounded-full shadow-md transition-all flex items-center justify-center hover:scale-110 hover:opacity-80"
          onMouseEnter={() => setCarouselSpeed("fast")}
          onMouseLeave={() => setCarouselSpeed("normal")}
          onClick={() => handleScroll("left")}
        >
          <ArrowLeftCircle size="100%" />
        </button>
        <button
          className="bg-transparent text-purple-700 w-12 h-12 rounded-full shadow-md transition-all flex items-center justify-center hover:scale-110 hover:opacity-80"
          onMouseEnter={() => setCarouselSpeed("fast")}
          onMouseLeave={() => setCarouselSpeed("normal")}
          onClick={() => handleScroll("right")}
        >
          <ArrowRightCircle size="100%" />
        </button>
      </div>
    </section>
  );
};

export default Tecnologias;
