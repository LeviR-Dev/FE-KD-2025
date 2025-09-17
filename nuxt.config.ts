// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  // ssr: true,
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css", "leaflet/dist/leaflet.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Jungle Tuinen – Inspiratie & Tips voor een Groene Oase",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=5",
      meta: [
        {
          name: "description",
          content: "informatieve jungletuin website",
        },
      ],
      htmlAttrs: {
        lang: "nl",
      },
    },
  },
});
