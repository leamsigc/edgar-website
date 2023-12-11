interface SeoPagesInterface {
  siteMap: string[];
}

export const useSeoPages = defineStore("seoPages", {
  state: (): SeoPagesInterface => ({
    siteMap: [],
  }),

  actions: {
    async ACTION_GET_SITE_MAP({ url }: { url: string }) {
      const response = await $fetch<{ content: string[] }>(
        "/seo/seo-step-one",
        {
          body: {
            url,
          },
          method: "POST",
        }
      );
      this.siteMap = response.content;
    },
  },
});
