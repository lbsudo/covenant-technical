

export default async function() {
  const baseUrl = "https://currencycovenant.com"

  return [
    { url: baseUrl, lastModified: new Date() },

    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/technologies`, lastModified: new Date() },
    { url: `${baseUrl}/industries`, lastModified: new Date() },

    { url: `${baseUrl}/industries/banking-&-finance`, lastModified: new Date() },
    { url: `${baseUrl}/industries/education`, lastModified: new Date() },
    { url: `${baseUrl}/industries/healthcare`, lastModified: new Date() },
    { url: `${baseUrl}/industries/manufacturing`, lastModified: new Date() },
    { url: `${baseUrl}/industries/oil-&-gas`, lastModified: new Date() },
    { url: `${baseUrl}/industries/retail-&-ecommerce`, lastModified: new Date() },
    { url: `${baseUrl}/industries/tech-&-sass`, lastModified: new Date() },
    { url: `${baseUrl}/industries/trades-&-services`, lastModified: new Date() },
    { url: `${baseUrl}/industries/travel`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ]
}
