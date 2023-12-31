import { getSlugs } from "./lib/sanity.functions"

export default async function sitemap() {
  const baseUrl = "https://currencycovenant.com"
  const inds = "industries"

  const postSlugs = await getSlugs();
  const postUrls = postSlugs.map(post => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(),
  }))
  return [
    { url: baseUrl, lastModified: new Date() },

    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/technologies`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}`, lastModified: new Date() },

    { url: `${baseUrl}/${inds}/banking-&amp;-finance`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}/education`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}/healthcare`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}/manufacturing`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}/oil-&amp;-gas`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}/retail-&amp;-ecommerce`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}/tech-&amp;-sass`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}/trades-&amp;-services`, lastModified: new Date() },
    { url: `${baseUrl}/${inds}/travel`, lastModified: new Date() },

    ...postUrls,
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ]
}
