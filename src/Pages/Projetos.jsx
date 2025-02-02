import React, { useEffect, useState } from "react";
import CineTrends from "../assets/CineTrends.png";
import Weather from "../assets/Weather.png";
import BarbaBrutal from "../assets/BarbaBrutal.png";
import GamerStore from "../assets/GamerStore.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const projects = [
    {
        title: "Barbabrutal",
        image: BarbaBrutal,
        link: "https://barbabrutal.vercel.app/",
        repo: "https://github.com/vazvdr/Barbabrutal",
        subtitleKey: "projects.barbabrutal.subtitle",
        descriptionKey: "projects.barbabrutal.description",
        techs: ["react", "tailwindcss", "nextjs", "typescript", "nodejs", "nestjs", "postgresql"]
    },
    {
        title: "GamerStore",
        image: GamerStore,
        link: "https://game-nest.vercel.app/",
        repo: "https://github.com/vazvdr/GamerStore-Frontend",
        subtitleKey: "projects.gamerstore.subtitle",
        descriptionKey: "projects.gamerstore.description",
        techs: ["react", "tailwindcss", "nextjs", "typescript", "nodejs", "nestjs", "postgresql"]
    },
    {
        title: "Weather Project",
        image: Weather,
        link: "https://vazvdr.github.io/Weather-Project",
        repo: "https://github.com/vazvdr/Weather-Project",
        subtitleKey: "projects.weather.subtitle",
        descriptionKey: "projects.weather.description",
        techs: ["html5", "css3", "javascript"]
    },
    {
        title: "Buscador de Filmes",
        image: CineTrends,
        link: "https://buscadordefilmes.netlify.app",
        repo: "https://github.com/vazvdr/CineTrends",
        subtitleKey: "projects.movies.subtitle",
        descriptionKey: "projects.movies.description",
        techs: ["react", "tailwindcss", "axios"]
    }
];

const techIcons = {
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    nodejs: "https://www.svgrepo.com/show/439238/nodejs.svg",
    nestjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
    css3: "https://www.svgrepo.com/show/349330/css3.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    axios: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
};

const Projetos = () => {
    const { t } = useTranslation();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setAnimate(entry.isIntersecting),
            { threshold: 0.3 }
        );

        const section = document.querySelector("#projetos");
        if (section) observer.observe(section);

        return () => section && observer.unobserve(section);
    }, []);

    return (
        <section id="projetos" className="py-6">
            <div className="max-w-6xl mx-auto px-10">
                <h1 className={`text-3xl font-bold text-center mb-8 mt-12 ${animate ? "animate-slide-down" : ""}`}
                    style={{ fontFamily: "DoctorGlitch" }}>
                    {t("projects.title")}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className={`relative card shadow-lg rounded-lg overflow-hidden transition-transform transform 
                        hover:shadow-2xl ${animate ? (index % 2 === 0 ? "animate-slide-left" : "animate-slide-right") : ""}`}
                        >
                            <div className="absolute top-3 right-4 flex gap-4">
                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={26} className="hover:scale-110" title="GitHub" />
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt size={25} className="hover:scale-110" title="Ver Projeto" />
                                </a>
                            </div>
                            <div className="p-6 flex flex-col text-left">
                                <h2 className="text-2xl font-bold mb-2 absolute top-3 left-4 transition-transform transform hover:scale-110">{project.title}</h2>
                                <div className="flex justify-center w-full">
                                    <p className="text-sm mb-4 text-center mt-4">{t(project.subtitleKey)}</p>
                                </div>
                                <img src={project.image} alt={project.title} className="rounded-lg shadow-md w-full h-48 object-cover mb-4 transition-transform transform hover:scale-110" />
                                <p className="text-left">{t(project.descriptionKey)}</p>
                                <h3 className="text-lg font-semibold mt-4">Techs usadas:</h3>
                                <div className="flex flex-wrap justify-center gap-4 mt-2">
                                    {project.techs.map((tech, idx) => (
                                        <img key={idx} src={techIcons[tech]} alt={tech} className="w-10 h-10 transition-transform transform hover:scale-110" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projetos;
