import { createResolver, defineNuxtModule, addServerHandler } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "SEO-setup",
  },
  setup() {
    const { resolve } = createResolver(import.meta.url);

    // Add an API route
    addServerHandler({
      route: "/seo/seo-step-one",
      handler: resolve("./api/step-one"),
    });
  },
});
