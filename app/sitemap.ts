import { documents } from "@/.velite";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePath = process.env.SITE_URL || "https://www.uicart.io";
  const documentSiteMap: {
    url: string;
    lastModified: Date;
    changeFrequency: "monthly";
    priority: number;
  }[] = documents.map((document) => ({
    url: `${basePath}/docs/${document.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [
    {
      url: `${basePath}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...documentSiteMap,
  ];
}
