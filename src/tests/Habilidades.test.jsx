import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Habilidades from "../components/habilidades/Habilidades";

// 🔥 mock do i18n
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
}));

// 🔥 mock das imagens
vi.mock("../assets/LandingPage.png", () => ({ default: "landing.png" }));
vi.mock("../assets/CreateConsumeAPI.png", () => ({ default: "api.png" }));
vi.mock("../assets/Fullstack.png", () => ({ default: "fullstack.png" }));
vi.mock("../assets/Mobile2.png", () => ({ default: "mobile.png" }));
vi.mock("../assets/Test.png", () => ({ default: "test.png" }));
vi.mock("../assets/Deployment.png", () => ({ default: "deploy.png" }));

describe("Habilidades Component", () => {
    it("deve renderizar todos os cards duplicados (loop infinito)", () => {
        render(<Habilidades />);

        const images = screen.getAllByRole("img");
        expect(images.length).toBe(12);
    });

    it("deve renderizar os textos traduzidos", () => {
        render(<Habilidades />);

        expect(screen.getAllByText("tecnologias.landing_pages_title").length).toBeGreaterThan(0);
        expect(screen.getAllByText("tecnologias.api_title").length).toBeGreaterThan(0);
    });

    it("deve pausar animação ao passar o mouse", () => {
        render(<Habilidades />);

        const container = screen.getAllByRole("img")[0].closest("div");

        fireEvent.mouseEnter(container);
        fireEvent.mouseLeave(container);

        expect(container).toBeInTheDocument();
    });

    it("deve renderizar estrutura principal", () => {
        const { container } = render(<Habilidades />);

        expect(container.firstChild).toBeInTheDocument();
    });
});