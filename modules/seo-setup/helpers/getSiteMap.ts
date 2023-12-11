export const GetSiteMapFromUrl = async (url: string) => {
  console.log(url);

  const response = await $fetch(`${url}/sitemap.xml`);
  const data = response;

  let regex = /<loc>(.*?)<\/loc>/g;
  let urls = [];
  let match;

  while ((match = regex.exec(response)) !== null) {
    urls.push(match[1]);
  }

  return {
    content: urls,
  };
};
