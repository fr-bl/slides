import { defineConfig } from "astro/config";
import icon from "astro-icon";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {},
    }),
    favicons({
      appName: "Fredericks Präsentationen",
      appShortName: "Präsis",
      appDescription: "Meine eigenen Präsentationen.",
      path: "/",
      masterPicture: "./src/assets/favicon.svg",
    }),
  ],
  site: "https://slides.blaes.ing",
});
