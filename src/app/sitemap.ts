import { MetadataRoute } from "next";

const BASE_URL = "https://ramiroperez.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/soluciones`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/casos-de-exito`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/diagnostico`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE_URL}/sobre-mi`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
