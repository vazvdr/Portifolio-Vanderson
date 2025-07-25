import React, { useEffect, useState } from "react";
import CineTrends from "../assets/CineTrends.png";
import Weather from "../assets/Weather.png";
import BarbaBrutal from "../assets/BarbaBrutal.png";
import GamerStore from "../assets/GamerStore.png";
import ClassScheduling from '../assets/ClassScheduling.jpg'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiSwagger } from 'react-icons/si';
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight} from "lucide-react";

const projects = [
    {
        title: "Class Scheduling",
        image: ClassScheduling,
        link: "https://class-scheduling.vercel.app/",
        repo: "https://github.com/vazvdr/Class-Scheduling-Frontend",
        subtitleKey: "projects.classscheduling.subtitle",
        descriptionKey: "projects.classscheduling.description",
        techs: [
            "react",
            "tailwindcss",
            "cypress",
            "spring",
            "swagger",
            "junit",
            "postgresql",
            "docker"
        ],
    },
    {
        title: "GamerStore",
        image: GamerStore,
        link: "https://game-nest.vercel.app/",
        repo: "https://github.com/vazvdr/GamerStore-Frontend",
        subtitleKey: "projects.gamerstore.subtitle",
        descriptionKey: "projects.gamerstore.description",
        techs: [
            "react",
            "tailwindcss",
            "nextjs",
            "typescript",
            "nodejs",
            "nestjs",
            "postgresql",
        ],
    },
    {
        title: "Barbabrutal",
        image: BarbaBrutal,
        link: "https://barbabrutal.vercel.app/",
        repo: "https://github.com/vazvdr/Barbabrutal",
        subtitleKey: "projects.barbabrutal.subtitle",
        descriptionKey: "projects.barbabrutal.description",
        techs: [
            "react",
            "tailwindcss",
            "nextjs",
            "typescript",
            "nodejs",
            "nestjs",
            "postgresql",
        ],
    },
    {
        title: "Buscador de Filmes",
        image: CineTrends,
        link: "https://buscadordefilmes.netlify.app",
        repo: "https://github.com/vazvdr/CineTrends",
        subtitleKey: "projects.movies.subtitle",
        descriptionKey: "projects.movies.description",
        techs: ["react", "tailwindcss", "axios"],
    },
    {
        title: "Weather Project",
        image: Weather,
        link: "https://vazvdr.github.io/Weather-Project",
        repo: "https://github.com/vazvdr/Weather-Project",
        subtitleKey: "projects.weather.subtitle",
        descriptionKey: "projects.weather.description",
        techs: ["html5", "css3", "javascript"],
    },
];

const techIcons = {
    react:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tailwindcss:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    cypress:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    nextjs:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    typescript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    nodejs:
        "https://www.svgrepo.com/show/439238/nodejs.svg",
    nestjs:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    java:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    spring:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    regex:
        "https://www.thedataschool.com.au/wp-content/uploads/2023/02/RegEx-1-1.png",
    junit:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg",
    postgresql:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    docker:
        "https://www.svgrepo.com/show/303231/docker-logo.svg",
    swagger:
        "https://www.svgrepo.com/show/354420/swagger.svg",
    html5:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
    css3: "https://www.svgrepo.com/show/349330/css3.svg",
    javascript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    axios:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
};

const Projetos = () => {
    const { t } = useTranslation();
    const [animate, setAnimate] = useState(false);

    const [cardsPerView, setCardsPerView] = useState(2);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const updateCardsPerView = () => {
            const perView = window.innerWidth < 768 ? 1 : 2;
            setCardsPerView(perView);

            setCurrentIndex((prev) =>
                Math.min(prev, projects.length - perView)
            );
        };

        updateCardsPerView();

        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    useEffect(() => {
        const section = document.querySelector("#projetos");

        const observer = new IntersectionObserver(
            ([entry], observerInstance) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observerInstance.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            Math.min(prev + 1, projects.length - cardsPerView)
        );
    };

    const displayedProjects = projects.slice(
        currentIndex,
        currentIndex + cardsPerView
    );

    return (
        <section id="projetos" className="py-6">
            <div className="max-w-6xl mx-auto px-10 relative">
                <h1
                    className={`text-3xl font-bold text-center mb-8 mt-12 ${animate ? "animate-slide-down" : ""
                        }`}
                    style={{ fontFamily: "DoctorGlitch" }}
                >
                    {t("projects.title")}
                </h1>

                <div className="flex items-center justify-center relative w-full max-w-full">
                    {/* Botão voltar */}
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`button-project-back absolute left-0 top-1/2 -translate-y-1/2 z-20 h-[500px] w-10 
    rounded-tl-full rounded-bl-full disabled:cursor-not-allowed disabled:opacity-50`}
                        aria-label="Voltar"
                    >
                       <ArrowLeft size={28} />
                    </button>

                    {/* Cards */}
                    <div className="flex gap-0 overflow-hidden w-full justify-center px-12">
                        {displayedProjects.map((project, index) => (
                            <div
                                key={index}
                                className={`w-full max-w-[500px] min-h-[400px] flex flex-col justify-between 
                relative card shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-2xl
                ${animate ? (index % 2 === 0 ? "animate-slide-left" : "animate-slide-right") : ""}
                ${cardsPerView === 2 ? "md:basis-1/2" : "basis-full"}`}
                            >
                                <div className="absolute top-3 right-4 flex flex-col gap-2 items-end">
                                    <div className="flex gap-2">
                                        {project.title === "Class Scheduling" && (
                                            <a
                                                href="https://class-scheduling-backend.onrender.com/swagger-ui/index.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Swagger"
                                            >
                                                <SiSwagger size={26} className="hover:scale-110 text-green-400" />
                                            </a>
                                        )}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Ver Projeto"
                                        >
                                            <FaExternalLinkAlt size={25} className="hover:scale-110" />
                                        </a>
                                    </div>
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub size={26} className="hover:scale-110" />
                                    </a>
                                </div>
                                <div className="p-6 flex flex-col text-left">
                                    <h2 className="text-2xl font-bold mb-2 absolute top-3 left-4 transition-transform transform hover:scale-110">
                                        {project.title}
                                    </h2>
                                    <div className="flex justify-start w-full">
                                        <p className="text-sm mb-4 text-center mt-4">
                                            {t(project.subtitleKey)}
                                        </p>
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="rounded-lg shadow-md w-full h-48 object-cover mb-4 transition-transform transform hover:scale-110"
                                        draggable={false}
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                    <p className="text-left">{t(project.descriptionKey)}</p>
                                    <h3 className="text-lg font-semibold mt-4">
                                        {t("projects.techs")}
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                                        {project.techs.map((tech, idx) => (
                                            <img
                                                key={idx}
                                                src={techIcons[tech]}
                                                alt={tech}
                                                className="w-8 h-8 transition-transform transform hover:scale-110"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botão avançar */}
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= projects.length - cardsPerView}
                        className={`button-project-next absolute right-0 top-1/2 -translate-y-1/2 z-20 h-[500px] w-10 
    rounded-tr-full rounded-br-full disabled:cursor-not-allowed disabled:opacity-50`}
                        aria-label="Avançar"
                    >
                       <ArrowRight size={28} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projetos;
