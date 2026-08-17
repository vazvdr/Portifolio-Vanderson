import { useEffect, useState } from "react";

import { deviconUrls } from "../constants/deviconsUrls.js";

export const useTecnologias = () => {
    const [currentIconsStage, setCurrentIconsStage] = useState(0);
    const [iconsPerStage, setIconsPerStage] = useState(4);

    useEffect(() => {
        const updateIconsPerStage = () => {
            if (window.innerWidth < 768) {
                setIconsPerStage(4);
            } else if (window.innerWidth < 1024) {
                setIconsPerStage(7);
            } else {
                setIconsPerStage(10);
            }
        };

        updateIconsPerStage();
        window.addEventListener("resize", updateIconsPerStage);

        return () => window.removeEventListener("resize", updateIconsPerStage);
    }, []);

    const technologies = [
        "html5",
        "css3",
        "javascript",
        "typescript",
        "react",
        "reactnative",
        "nextjs",
        "angular",
        "primeng",
        "angularmaterial",
        "firebase",
        "redux",
        "vite",
        "vitest",
        "cypress",
        "vercel",
        "tailwindcss",
        "bootstrap",
        "regex",
        "nodejs",
        "nestjs",
        "express",
        "grpc",
        "jest",
        "eslint",
        "mongodb",
        "postgresql",
        "mysql",
        "redis",
        "git",
        "github",
        "gitlab",
        "githubactions",
        "postman",
        "swagger",
        "rabbitmq",
        "docker",
        "kubernetes",
        "prometheus",
        "grafana",
        "k6",
        "linux",
        "aws",
        "googlecloud",
        "railway",
    ];

    const icons = technologies.map((technology) => deviconUrls[technology]);
    const totalStages = Math.ceil(icons.length / iconsPerStage);
    const next = () => {
        setCurrentIconsStage((prev) =>
            prev >= totalStages - 1 ? 0 : prev + 1
        );
    };
    const prev = () => {
        setCurrentIconsStage((prev) =>
            prev === 0 ? totalStages - 1 : prev - 1
        );
    };
    const startIndex = currentIconsStage * iconsPerStage;
    const displayedIcons = icons.slice(
        startIndex,
        startIndex + iconsPerStage
    );
    return {
        displayedIcons,
        currentIconsStage,
        totalStages,
        next,
        prev,
    };
};