import type { MetadataRoute } from "next";
import { BRAND_CONFIG } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BRAND_CONFIG.siteUrl}/sitemap.xml`,
    host: BRAND_CONFIG.siteUrl,
  };
}
