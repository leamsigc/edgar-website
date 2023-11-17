// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtseo/module",
    "@unlighthouse/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxthq/studio",
    "nuxt-swiper",
  ],
  content: {
    // ... options
    documentDriven: true,
  },
  devtools: { enabled: true },
  site: {
    url: "https://example.com",
    name: "Jahaziel's Carpentry & Painting",
    description:
      "Expert Carpentry & Painting Services in Seattle, WA - Jahaziel's",
    defaultLocale: "en",
    identity: {
      type: "Organization",
    },
    twitter: "@leamsigc",
  },
  unlighthouse: {
    scanner: {
      // simulate a desktop device
      device: "desktop",
    },
  },
  hooks: {
    "components:dirs": (dirs) => {
      dirs.unshift({
        path: "~/components/ui",
        // this is required else Nuxt will autoImport `.ts` file
        extensions: [".vue"],
        // prefix for your components, eg: UiButton
        prefix: "Ui",
        // prevent adding another prefix component by it's path.
        pathPrefix: false,
      });
    },
  },
  typescript: {
    shim: false,
  },
});
