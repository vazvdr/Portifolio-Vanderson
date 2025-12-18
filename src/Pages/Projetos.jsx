import React, { useEffect, useState } from "react";
import CineTrends from "../assets/CineTrends.png";
import Weather from "../assets/Weather.png";
import BarbaBrutal from "../assets/BarbaBrutal.png";
import GamerStore from "../assets/GamerStore.png";
import ClassScheduling from '../assets/ClassScheduling.jpg';
import PhotoShared from '../assets/PhotoShared.png';
import PraiaCheia from '../assets/PraiaCheia.png';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiSwagger } from 'react-icons/si';
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Class Scheduling",
        image: ClassScheduling,
        link: "https://class-scheduling.vercel.app/",
        repo: "https://github.com/vazvdr/Class-Scheduling-Frontend",
        swagger: "https://class-scheduling-backend.up.railway.app/swagger-ui/index.html",
        subtitleKey: "projects.classscheduling.subtitle",
        descriptionKey: "projects.classscheduling.description",
        techs: [
            "react",
            "tailwindcss",
            "axios",
            "cypress",
            "spring",
            "swagger",
            "junit",
            "postgresql",
            "docker",
            "githubactions"
        ],
    },
    {
        title: "Praia Cheia",
        image: PraiaCheia,
        link: "https://praiacheia.com.br/",
        subtitleKey: "projects.praiacheia.subtitle",
        descriptionKey: "projects.praiacheia.description",
        techs: [
            "react",
            "tailwindcss",
            "firebase",
            "flutter",
            "nodejs",
            "nestjs",
            "redis"

        ],
    },
    {
        title: "Photo Shared",
        image: PhotoShared,
        link: "https://photoshared.vercel.app/",
        repo: "https://github.com/vazvdr/PhotoShared",
        subtitleKey: "projects.photoshared.subtitle",
        descriptionKey: "projects.photoshared.description",
        techs: [
            "react",
            "tailwindcss",
            "firebase"
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
    flutter:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    firebase:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    tailwindcss:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    cypress:
        "https://logowik.com/content/uploads/images/cypress1720868719.logowik.com.webp",
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
    redis:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    docker:
        "https://www.svgrepo.com/show/303231/docker-logo.svg",
    swagger:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
    githubactions:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
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
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    // Monta os cards dinamicamente com base no cardsPerView e wrap-around
    const displayedProjects = Array.from({ length: cardsPerView }, (_, i) => {
        return projects[(currentIndex + i) % projects.length];
    });

    // Stage é baseado no primeiro card visível
    const stage = currentIndex + 1;
    const totalStages = projects.length;

    return (
        <section id="projetos" className="py-6">
            <div className="mx-auto lg:w-[92%] px-4 relative">
                <h1
                    className={`text-3xl font-bold text-center mb-8 mt-12 ${animate ? "animate-slide-down" : ""}`}
                    style={{ fontFamily: "DoctorGlitch" }}
                >
                    {t("projects.title")}
                </h1>

                <div className="flex items-center justify-center relative w-full">
                    {/* Botão voltar */}
                    <button
                        onClick={handlePrev}
                        aria-label="Voltar"
                        className={`button-project-back relative left-0 z-20 w-10
          rounded-tl-full rounded-bl-full
          h-[280px] md:h-[380px] lg:h-[320px] xl:h-[300px]
        `}
                    >
                        <ArrowLeft size={28} />
                    </button>

                    {/* Cards */}
                    <div className="flex gap-1 overflow-hidden w-full justify-center px-2">
                        {displayedProjects.map((project, index) => (
                            <div
                                key={index}
                                className={`
                              flex flex-col justify-between relative card shadow-lg rounded-lg overflow-hidden
                              transition-transform transform hover:shadow-2xl
                              ${animate ? (index % 2 === 0 ? "animate-slide-left" : "animate-slide-right") : ""}
                              ${cardsPerView === 2 ? "md:basis-full" : "basis-full"}
                              w-[80%] sm:w-[80%] md:w-[90%] lg:w-[48%] xl:w-[35%]
                              h-auto md:h-[410px] lg:h-[340px] xl:h-[320px]
                            `}
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    color: "white",
                                }}
                            >

                                {/* Camada escura para contraste */}
                                <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg" />

                                {/* Conteúdo do card */}
                                <div className="relative p-4 flex flex-col text-left h-full z-10">
                                    <h2 className="text-2xl font-bold mb-2 absolute top-2 left-2 transition-transform transform hover:scale-110">
                                        {project.title}
                                    </h2>
                                    <div className="flex justify-start w-full mt-12">
                                        <p className="text-sm sm:text-base mb-4 text-left leading-relaxed max-w-full sm:max-w-[90%]">
                                            {t(project.subtitleKey)}
                                        </p>
                                    </div>

                                    <p className="text-left text-sm sm:text-base leading-relaxed mb-2">
                                        {t(project.descriptionKey)}
                                    </p>

                                    <h3 className="text-base font-semibold">{t("projects.techs")}</h3>
                                    <div className="flex flex-wrap justify-start gap-3 mt-2">
                                        {project.techs.map((tech, idx) => (
                                            <img
                                                key={idx}
                                                src={techIcons[tech]}
                                                alt={tech}
                                                className="w-8 h-8 transition-transform transform hover:scale-110"
                                            />
                                        ))}
                                    </div>

                                    {/* Ícones no topo direito */}
                                    <div className="absolute top-0 right-0 flex flex-col gap-1 items-end z-20">

                                        <div className="flex gap-2">

                                            {/* Swagger */}
                                            <div>
                                                {project.swagger ? (
                                                    <a
                                                        href={project.swagger}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="Swagger"
                                                    >
                                                        <SiSwagger size={26} className="hover:scale-110 text-green-400" />
                                                    </a>
                                                ) : (
                                                    <SiSwagger
                                                        size={26}
                                                        className="opacity-40"
                                                    />
                                                )}
                                            </div>

                                            {/* External link */}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Ver Projeto"
                                            >
                                                <FaExternalLinkAlt size={25} className="hover:scale-110" />
                                            </a>

                                        </div>

                                        {/* GitHub */}
                                        <div>
                                            {project.repo ? (
                                                <a
                                                    href={project.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="GitHub"
                                                >
                                                    <FaGithub size={26} className="hover:scale-110" />
                                                </a>
                                            ) : (
                                                <FaGithub
                                                    size={26}
                                                    className="opacity-40"
                                                />
                                            )}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botão avançar */}
                    <button
                        onClick={handleNext}
                        aria-label="Avançar"
                        className={`button-project-next relative right-0 z-20 w-10
          rounded-tr-full rounded-br-full
          h-[280px] md:h-[380px] lg:h-[320px] xl:h-[300px]
        `}
                    >
                        <ArrowRight size={28} />
                    </button>
                </div>
                {/* Indicador de estágio */}
                <div className="text-center mt-4 text-sm">
                    {`Projeto ${stage} de ${totalStages}`}
                </div>
            </div>
        </section>

    );
};

export default Projetos;
