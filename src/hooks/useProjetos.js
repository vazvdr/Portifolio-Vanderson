import { useEffect, useState } from "react";

import Weather from "../assets/Weather.webp";
import BarbaBrutal from "../assets/BarbaBrutal.webp";
import GamerStore from "../assets/GamerStore.webp";
import ClassScheduling from "../assets/ClassScheduling.webp";
import PraiaCheia from "../assets/PraiaCheia.webp";
import GamerExplorer from "../assets/GamerExplorer.webp";
import Github from "../assets/Github-Analyzer.webp"

import { deviconUrls } from "../constants/deviconsUrls.js";

export const useProjetos = () => {
    const [animate, setAnimate] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(2);
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: "Github Analyzer",
            image: Github,
            link: "https://analisadordegithub.vercel.app/",
            repo: "https://github.com/vazvdr/Github-Analyzer",
            swagger: "",
            subtitleKey: "projects.githubanalyzer.subtitle",
            descriptionKey: "projects.githubanalyzer.description",
            techs: [
                "nextjs",
                "typescript",
                "tailwindcss",
                "shadcn",
                "langchain",
                "gemini",
                "swagger",
                "jest",
                "redis",
                "vercel",
                "railway"
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
                "reactnative",
                "nodejs",
                "nestjs",
                "postgresql",
                "jest",
                "rabbitmq",
                "redis",
                "swagger",
                "docker",
                "kubernetes",
                "grafana",
                "prometheus",
                "k6",
            ],
        },
        {
            title: "Class Scheduling",
            image: ClassScheduling,
            link: "https://class-scheduling.vercel.app/",
            repo: "https://github.com/vazvdr/Class-Scheduling",
            swagger:
                "https://class-scheduling.up.railway.app/swagger-ui/index.html",
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
                "kubernetes",
                "grafana",
                "prometheus",
                "githubactions",
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
                "reactnative",
                "nodejs",
                "nestjs",
                "postgresql",
                "jest",
                "rabbitmq",
                "redis",
                "swagger",
                "docker",
                "kubernetes",
                "grafana",
                "prometheus",
                "k6",
            ],
        },

        {
            title: "GamerStore",
            image: GamerStore,
            link: "https://gamerstore-shop.vercel.app/",
            repo: "https://github.com/vazvdr/GamerStore-Microsservice",
            swagger:
                "https://api-gateway-gamerstore.up.railway.app/webjars/swagger-ui/index.html",
            subtitleKey: "projects.gamerstore.subtitle",
            descriptionKey: "projects.gamerstore.description",
            techs: [
                "react",
                "tailwindcss",
                "java",
                "spring",
                "swagger",
                "junit",
                "postgresql",
                "redis",
                "mongodb",
                "rabbitmq",
                "docker",
                "kubernetes",
                "grafana",
                "prometheus",
                "githubactions",
            ],
        },

        {
            title: "Gamer Explorer",
            image: GamerExplorer,
            link: "https://gamer-explorer.vercel.app/",
            subtitleKey: "projects.gamerexplorer.subtitle",
            descriptionKey: "projects.gamerexplorer.description",
            techs: ["angular", "primeng", "tailwindcss"],
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
            title: "Weather Project",
            image: Weather,
            link: "https://vazvdr.github.io/Weather-Project",
            repo: "https://github.com/vazvdr/Weather-Project",
            subtitleKey: "projects.weather.subtitle",
            descriptionKey: "projects.weather.description",
            techs: ["html5", "css3", "javascript"],
        },
    ];

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

        return () =>
            window.removeEventListener("resize", updateCardsPerView);
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
        setCurrentIndex(
            (prev) => (prev - 1 + projects.length) % projects.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const displayedProjects = Array.from(
        { length: cardsPerView },
        (_, i) => projects[(currentIndex + i) % projects.length]
    );

    const stage = currentIndex + 1;
    const totalStages = projects.length;

    return {
        animate,
        displayedProjects,
        handlePrev,
        handleNext,
        stage,
        totalStages,
        cardsPerView,
        currentIndex,
        setCurrentIndex,
        iconMap: deviconUrls,
    };
};