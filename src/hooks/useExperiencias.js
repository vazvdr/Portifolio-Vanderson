import { useEffect, useState } from "react";

import { deviconUrls } from "../constants/deviconsUrls";

export const useExperiencias = () => {
    const [animate, setAnimate] = useState(false);
    const [showStacks, setShowStacks] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagesCard1 = [
        deviconUrls.html5,
        deviconUrls.css3,
        deviconUrls.javascript,
        deviconUrls.typescript,
        deviconUrls.react,
        deviconUrls.vite,
        deviconUrls.tailwindcss,
        deviconUrls.git,
        deviconUrls.github,
        deviconUrls.twilio,
    ];

    const imagesCard2 = [
        deviconUrls.html5,
        deviconUrls.css3,
        deviconUrls.javascript,
        deviconUrls.typescript,
        deviconUrls.react,
        deviconUrls.angular,
        deviconUrls.primeng,
        deviconUrls.angularmaterial,
        deviconUrls.firebase,
        deviconUrls.redux,
        deviconUrls.vite,
        deviconUrls.vitest,
        deviconUrls.cypress,
        deviconUrls.nextjs,
        deviconUrls.tailwindcss,
        deviconUrls.bootstrap,
        deviconUrls.nodejs,
        deviconUrls.nestjs,
        deviconUrls.express,
        deviconUrls.grpc,
        deviconUrls.jest,
        deviconUrls.eslint,
        deviconUrls.mongodb,
        deviconUrls.postgresql,
        deviconUrls.mysql,
        deviconUrls.redis,
        deviconUrls.git,
        deviconUrls.github,
        deviconUrls.gitlab,
        deviconUrls.githubactions,
        deviconUrls.postman,
        deviconUrls.swagger,
        deviconUrls.rabbitmq,
        deviconUrls.docker,
        deviconUrls.kubernetes,
        deviconUrls.prometheus,
        deviconUrls.grafana,
        deviconUrls.k6,
        deviconUrls.aws,
        deviconUrls.googlecloud,
        deviconUrls.railway,
    ];

    const imagesCard3 = [
        deviconUrls.react,
        deviconUrls.firebase,
        deviconUrls.tailwindcss,
        deviconUrls.reactnative,
        deviconUrls.nestjs,
        deviconUrls.jest,
        deviconUrls.postgresql,
        deviconUrls.redis,
        deviconUrls.rabbitmq,
        deviconUrls.docker,
        deviconUrls.kubernetes,
        deviconUrls.prometheus,
        deviconUrls.grafana,
        deviconUrls.k6,
    ];

    const experiences = [
        {
            images: imagesCard3,
            link: "https://praiacheia.com.br",
            cardIndex: 3,
        },
        {
            images: imagesCard2,
            cardIndex: 2,
        },
        {
            images: imagesCard1,
            link: "https://01bit.tech/",
            cardIndex: 1,
        },
    ];

    useEffect(() => {
        const section = document.querySelector("#experiencias");

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
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < experiences.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const toggleStack = (index) => {
        setShowStacks((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return {
        animate,
        showStacks,
        currentIndex,
        experiences,
        handlePrev,
        handleNext,
        toggleStack,
        setCurrentIndex,
    };
};