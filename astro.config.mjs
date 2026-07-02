// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// Cambia esta URL por tu dominio real antes de desplegar
const site = "https://jasmany.dev";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});