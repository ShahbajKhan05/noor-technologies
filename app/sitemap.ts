import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://noor-technologies-pvt-ltd.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: "2026-10-25",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: "2026-10-25",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}