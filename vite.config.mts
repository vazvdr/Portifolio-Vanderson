import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

// @ts-ignore
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.js",
    include: [
      "src/**/*.{test,spec}.{js,ts,jsx,tsx}",
    ],
    exclude: [...configDefaults.exclude, "e2e"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});