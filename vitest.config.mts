import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ['src/__tests__/**/*.{test,spec}.{ts,tsx}'],
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest-setup.js",
  },
});