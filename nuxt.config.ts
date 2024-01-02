// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "nuxt-delay-hydration",
    "@unlighthouse/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-content-assets",
    "@nuxt/content",
    "nuxt-icons",
    "@nuxthq/studio",
    "@nuxtseo/module",
  ],
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
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
        path: "~/components/content/ui",
        // this is required else Nuxt will autoImport `.ts` file
        extensions: [".vue"],
        // prefix for your components, eg: UiButton
        prefix: "",
        // prevent adding another prefix component by it's path.
        pathPrefix: false,
      });
    },
  },
  colorMode: {
    classSuffix: "",
  },
  typescript: {
    shim: false,
  },
});
