import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        skills: resolve(__dirname, "skills.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        education: resolve(__dirname, "education.html"),
        languages: resolve(__dirname, "languages.html"),
      },
    },
  },
});
