import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(),
    preact(),
    astroI18next({
      resourcesPath: "./src/locales/",
      i18next: { debug: true, supportedLngs: ["en", "pl"] },
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
