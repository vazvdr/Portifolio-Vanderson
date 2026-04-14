import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Tecnologias from "../pages/Tecnologias";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "../ThemeProvider";
import i18n from "../i18n";

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

});