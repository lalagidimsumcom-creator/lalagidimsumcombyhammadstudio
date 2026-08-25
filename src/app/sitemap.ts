import type { MetadataRoute } from "next";
import { BRAND_CONFIG } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BRAND_CONFIG.siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BRAND_CONFIG.siteUrl}/menu`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BRAND_CONFIG.siteUrl}/dimsum-cake`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BRAND_CONFIG.siteUrl}/pesanan-acara`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BRAND_CONFIG.siteUrl}/tentang`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BRAND_CONFIG.siteUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
