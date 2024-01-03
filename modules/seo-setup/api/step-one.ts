import { GetSiteMapFromUrl } from "./../helpers/getSiteMap";
export default defineEventHandler(async (event) => {
  const isPost = isMethod(event, ["POST"]);

  if (!isPost) {
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    });
  }
  const body = await readBody(event);
  const siteMapContent = await GetSiteMapFromUrl(body.url);

  return { url: body.url, content: siteMapContent.content };
});
