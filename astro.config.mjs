import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import turbolinks from "@astrojs/turbolinks";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), turbolinks(), sitemap()],
  adapter: netlify(),
});
