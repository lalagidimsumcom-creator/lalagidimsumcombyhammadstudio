import type { MetadataRoute } from "next";
import { BRAND_CONFIG } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const image = (path: string) => `${BRAND_CONFIG.siteUrl}${path}`;

  return [
    {
      url: `${BRAND_CONFIG.siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        image("/images/lalagi-dimsum-tampah.png"),
        image("/images/lalagi-dimsum-social.jpg"),
      ],
    },
    {
      url: `${BRAND_CONFIG.siteUrl}/menu`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        image("/images/menu-groups/dimsum-party-size.webp"),
        image("/images/menu-groups/dimsum-cake-reguler.webp"),
        image("/images/menu-groups/dimsum-bucket.webp"),
        image("/images/menu-groups/dimsum-tampah-01.webp"),
        image("/images/menu-groups/dimsum-tower-01.webp"),
        image("/images/menu-groups/dimsum-money-roll.webp"),
      ],
    },
    {
      url: `${BRAND_CONFIG.siteUrl}/dimsum-cake`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        image("/images/menu-groups/dimsum-cake-reguler.webp"),
        image("/images/menu-groups/dimsum-bucket.webp"),
      ],
    },
    {
      url: `${BRAND_CONFIG.siteUrl}/pesanan-acara`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        image("/images/menu-groups/dimsum-tampah-01.webp"),
        image("/images/menu-groups/dimsum-tower-01.webp"),
        image("/images/menu-groups/dimsum-money-roll.webp"),
      ],
    },
    {
      url: `${BRAND_CONFIG.siteUrl}/tentang`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [image("/images/lalagi-story-dimsum-tower.webp")],
    },
    {
      url: `${BRAND_CONFIG.siteUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [image("/images/lalagi-dimsum-social.jpg")],
    },
  ];
}
