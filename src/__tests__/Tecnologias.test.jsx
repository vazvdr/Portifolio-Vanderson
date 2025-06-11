import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Tecnologias from "../Pages/Tecnologias";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "../ThemeProvider";
import i18n from "../i18n";
import pt from "../locales/pt.json";
import en from "../locales/en.json";
import React from "react";

const icons = [
  "https://www.svgrepo.com/show/452228/html-5.svg",
  "https://www.svgrepo.com/show/349330/css3.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
  "https://registry.npmmirror.com/@lobehub/icons-static-png/1.15.0/files/dark/vercel-text.png",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
  "https://www.thedataschool.com.au/wp-content/uploads/2023/02/RegEx-1-1.png",
  "https://www.svgrepo.com/show/439238/nodejs.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  "https://www.svgrepo.com/show/439231/mongodb.svg",
  "https://www.svgrepo.com/show/354200/postgresql.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  "https://www.svgrepo.com/show/373624/git2.svg",
  "https://www.svgrepo.com/show/475654/github-color.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "https://www.svgrepo.com/show/354420/swagger.svg",
  "https://www.svgrepo.com/show/303231/docker-logo.svg",
  "https://www.svgrepo.com/show/448236/linux.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
  "https://www.svgrepo.com/show/448266/aws.svg"
];

describe("Componente Tecnologias", () => {
  it("deve renderizar o componente", () => {
    render(
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Tecnologias />
        </I18nextProvider>
      </ThemeProvider>
    );
  });

  test("renderiza os cards com as imagens corretamente", () => {
    render(<Tecnologias/>);

    const allImages = screen.getAllByRole("img");

    const ImagensEsperadas = 5;

    expect(allImages.length).toBeGreaterThanOrEqual(ImagensEsperadas);
  });

  test("renderiza as imagens do stage atual corretamente", () => {
    render(<Tecnologias />);
  
    const allImages = screen.getAllByRole("img");
  
    const expectedCarouselImagesCount = 5;
  
    const totalExpectedImages = 7 + expectedCarouselImagesCount;
  
    expect(allImages.length).toBeGreaterThanOrEqual(totalExpectedImages);
  
    // Verificar se as imagens do carousel estão entre as URLs do array icons
    const carouselImages = allImages.slice(-expectedCarouselImagesCount);
  
    carouselImages.forEach((img) => {
      expect(icons).toContain(img.getAttribute("src"));
    });
  });
  

  it("exibe informações em português", async () => {
    await i18n.changeLanguage("pt");


    render(
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Tecnologias />
        </I18nextProvider>
      </ThemeProvider>
    );

    const { tecnologias } = pt;

    const titles = screen.getAllByText(tecnologias.landing_pages_title);
    expect(titles.length).toBeGreaterThan(0);

    expect(screen.getByText(tecnologias.landing_pages_description)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.api_title)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.api_description)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.fullstack_title)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.fullstack_description)).toBeInTheDocument();
  });

  it("exibe informações em inglês", async () => {
    await i18n.changeLanguage("en");

    render(
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Tecnologias />
        </I18nextProvider>
      </ThemeProvider>
    );

    const { tecnologias } = en;

    expect(screen.getByText(tecnologias.landing_pages_title)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.landing_pages_description)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.api_title)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.api_description)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.fullstack_title)).toBeInTheDocument();
    expect(screen.getByText(tecnologias.fullstack_description)).toBeInTheDocument();
  });
});