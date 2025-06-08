import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// @ts-ignore - necessário se você estiver usando TypeScript estrito e ainda não tiver tipos do vitest
import { configDefaults } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './vitest-setup.js',
    include: [
      'src/**/*.{test,spec}.{js,ts,jsx,tsx}'
    ],
    exclude: [...configDefaults.exclude, "e2e"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
})
