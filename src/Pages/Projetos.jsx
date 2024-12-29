import React, { useEffect, useState } from "react";
import CineTrends from "../assets/CineTrends.png";
import Weather from "../assets/Weather.png";
import BarbaBrutal from "../assets/BarbaBrutal.png";
import GamerStore from "../assets/GamerStore.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Projetos = () => {
    const { t } = useTranslation();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false);
                }
            },
            { threshold: 0.3 } // O quanto da seção precisa estar visível (30%)
        );

        const section = document.querySelector("#projetos");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section
            id="projetos"
            className="py-10"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h1
                    className={`text-3xl font-bold text-center mb-8 mt-10 ${animate ? "animate-slide-down" : ""
                        }`}
                    style={{ fontFamily: "DoctorGlitch" }}
                >
                    {t("projects.title")}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card - Barbabrutal */}
                    <div
                        className={`card relative bg-white shadow-lg rounded-lg ${animate ? "animate-slide-left" : ""
                            }`}
                    >
                        <div className="absolute top-3 right-4">
                            <a
                                href="https://barbabrutal.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-500 hover:text-blue-700 underline"
                            >
                                <FaExternalLinkAlt size={25} />
                            </a>
                        </div>
                        <h2 className="text-2xl font-bold top-1">Barbabrutal</h2>
                        <p className="text-sm">{t("projects.barbabrutal.subtitle")}</p>
                        <div className="flex justify-center my-4">
                            <img
                                src={BarbaBrutal}
                                alt="Barbabrutal"
                                className="rounded-lg shadow-sm"
                            />
                        </div>
                        <p className="mt-4">{t("projects.barbabrutal.description")}</p>
                        <div className="flex flex-col items-end mt-6">
                            <h3 className="text-lg font-semibold mb-2">Techs usadas:</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                    alt="React"
                                    className="w-10 h-10"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                    alt="Tailwind CSS"
                                    className="w-10 h-10"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                                    alt="Next.js"
                                    className="w-10 h-10"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                    alt="TypeScript"
                                    className="w-10 h-10"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                    alt="Node.js"
                                    className="w-10 h-10"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
                                    alt="NestJS"
                                    className="w-10 h-10"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                    alt="PostgreSQL"
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card - GamerStore */}
                    <div
                        className={`card relative bg-white shadow-lg rounded-lg ${animate ? "animate-slide-right" : ""
                            }`}
                    >
                        <div className="absolute top-4 right-4">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-500 hover:text-blue-700 underline mb-2"
                            >
                                <FaExternalLinkAlt size={25} className="mb-1" />
                            </a>
                        </div>
                        <h2 className="text-2xl font-bold">GamerStore</h2>
                        <p className="text-sm">{t("projects.gamerstore.subtitle")}</p>
                        <div className="flex justify-center my-4">
                            <img
                                src={GamerStore}
                                alt="GamerStore"
                                className="rounded-lg shadow-sm"
                            />
                        </div>
                        <p className="mt-4">
                            {t("projects.gamerstore.description")}
                        </p>
                        <div className="flex flex-col items-end mt-6">
                            <h3 className="text-lg font-semibold mb-2">Techs usadas:</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-10 h-10" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" alt="NestJS" className="w-10 h-10" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-10 h-10" />
                            </div>
                        </div>
                    </div>


                    {/* Card - Weather Project */}
                    <div
                        className={`card relative bg-white shadow-lg rounded-lg ${animate ? "animate-slide-left" : ""
                            }`}
                    >
                        <div className="absolute top-4 right-4">
                            <a
                                href="https://vazvdr.github.io/Weather-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-500 hover:text-blue-700 underline mb-2"
                            >
                                <FaExternalLinkAlt size={25} className="mb-1" />
                            </a>
                        </div>
                        <h2 className="text-2xl font-bold">Weather Project</h2>
                        <p className="text-sm">
                            {t("projects.weather.subtitle")}
                        </p>

                        <div className="flex justify-center my-4">
                            <img
                                src={Weather}
                                alt=""
                                className="rounded-lg shadow-sm"
                            />
                        </div>

                        <p className="mt-4">
                            {t("projects.weather.description")}
                        </p>

                        <div className="flex flex-col items-end mt-6">
                            <h3 className="text-lg font-semibold mb-2">Techs usadas:</h3>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                    className="w-10 h-10"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                                    alt="CSS3"
                                    className="w-10 h-10"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                    alt="JavaScript"
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card - Buscador de Filmes */}
                    <div
                        className={`card relative bg-white shadow-lg rounded-lg ${animate ? "animate-slide-right" : ""
                            }`}
                    >
                        <div className="absolute top-4 right-4">
                            <a
                                href="https://buscadordefilmes.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-500 hover:text-blue-700 underline mb-2"
                            >
                                <FaExternalLinkAlt size={25} className="mb-1" />
                            </a>
                        </div>
                        <h2 className="text-2xl font-bold text-blue-500">{t("projects.movies.title")}</h2>
                        <p className="text-sm">{t("projects.movies.subtitle")}</p>

                        <div className="flex justify-center my-4">
                            <img
                                src={CineTrends}
                                alt=""
                                className="rounded-lg shadow-sm"
                            />
                        </div>

                        <p className="mt-4">
                            {t("projects.movies.description")}
                        </p>

                        <div className="flex flex-col items-end mt-6">
                            <h3 className="text-lg font-semibold mb-2">Techs usadas:</h3>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                                    alt="React"
                                    className="w-10 h-10 mb-2"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                    alt="Tailwind CSS"
                                    className="w-10 h-10 mb-2"
                                />
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
                                    alt="Axios"
                                    className="w-10 h-10 mb-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Projetos;
