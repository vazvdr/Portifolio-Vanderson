import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Tecnologias from "../Pages/Tecnologias";
import { I18nextProvider } from "react-i18next";
//@ts-ignore
import i18n from "../i18n";
import React from "react";

describe("Componente Tecnologias", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Tecnologias />
      </I18nextProvider>
    );
  });

  it("deve renderizar os 4 cards principais", () => {
    const allImages = screen.getAllByRole("img");
    expect(allImages.length).toBeGreaterThanOrEqual(4);
  });

});


