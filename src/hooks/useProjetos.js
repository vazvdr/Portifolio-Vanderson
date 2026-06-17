import { useEffect, useState } from "react";

import Weather from "../assets/Weather.webp";
import BarbaBrutal from "../assets/BarbaBrutal.webp";
import GamerStore from "../assets/GamerStore.webp";
import ClassScheduling from '../assets/ClassScheduling.webp';
import PraiaCheia from '../assets/PraiaCheia.webp';
import GamerExplorer from '../assets/GamerExplorer.webp';

export const useProjetos = (icons = []) => {
    const [animate, setAnimate] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(2);
    const [currentIndex, setCurrentIndex] = useState(0);

    const iconMap = {
        html5: "https://www.svgrepo.com/show/452228/html-5.svg",
        css3: "https://www.svgrepo.com/show/349330/css3.svg",
        javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        primeng: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/primeng/primeng-original.svg",
        firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
        redux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        cypress: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
        nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
        flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
        java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
        junit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg",
        nodejs: "https://www.svgrepo.com/show/439238/nodejs.svg",
        nestjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
        mongodb: "https://www.svgrepo.com/show/439231/mongodb.svg",
        postgresql: "https://www.svgrepo.com/show/354200/postgresql.svg",
        mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        docker: "https://www.svgrepo.com/show/303231/docker-logo.svg",
        kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        grafana : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
        prometheus : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
        rabbitmq: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
        swagger: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
        githubactions: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        axios: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    };

    const projects = [
        {
            title: "GamerStore",
            image: GamerStore,
            link: "https://gamerstore-shop.vercel.app/",
            repo: "https://github.com/vazvdr/GamerStore-Microsservice",
            swagger: "https://api-gateway-gamerstore.up.railway.app/webjars/swagger-ui/index.html",
            subtitleKey: "projects.gamerstore.subtitle",
            descriptionKey: "projects.gamerstore.description",
            techs: ["react", "tailwindcss", "java", "spring", "swagger", "junit", "postgresql", "redis", 
            "mongodb", "rabbitmq", "docker", "kubernetes", "grafana", "prometheus", "githubactions"],
        },
        {
            title: "Praia Cheia",
            image: PraiaCheia,
            link: "https://praiacheia.com.br/",
            subtitleKey: "projects.praiacheia.subtitle",
            descriptionKey: "projects.praiacheia.description",
            techs: ["react", "tailwindcss", "firebase", "flutter", "nodejs", "nestjs", "redis"],
        },
        {
            title: "Class Scheduling",
            image: ClassScheduling,
            link: "https://class-scheduling.vercel.app/",
            repo: "https://github.com/vazvdr/Class-Scheduling",
            swagger: "https://class-scheduling.up.railway.app/swagger-ui/index.html",
            subtitleKey: "projects.classscheduling.subtitle",
            descriptionKey: "projects.classscheduling.description",
            techs: ["react", "tailwindcss", "axios", "cypress", "spring", "swagger", "junit", "postgresql", 
            "docker", "kubernetes", "grafana", "prometheus", "githubactions"],
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
            techs: ["react", "tailwindcss", "nextjs", "typescript", "nodejs", "nestjs", "postgresql"],
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

    /**
     * 🔄 RESPONSIVO
     */
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

    /**
     * 👁️ ANIMAÇÃO
     */
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

    /**
     * ▶️ CONTROLES
     */
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const displayedProjects = Array.from({ length: cardsPerView }, (_, i) => {
        return projects[(currentIndex + i) % projects.length];
    });

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
        iconMap,
    };
};