import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = "https://servicios-electricos.codielectro.com";
  return [
    {
      url: `${domain}/`,
      lastModified: new Date("2024-09-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${domain}/contacto`,
      lastModified: new Date("2024-09-15"),
      changeFrequency: "never",
      priority: 0.5,
    },
  ];
}
