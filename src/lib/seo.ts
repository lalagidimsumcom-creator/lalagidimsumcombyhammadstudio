import { BRAND_CONFIG } from "@/data/config";
import { MENU_GROUPS, type MenuGroup } from "@/data/products";

const absoluteUrl = (path: string) => new URL(path, BRAND_CONFIG.siteUrl).toString();

export const localBusinessSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": `${BRAND_CONFIG.siteUrl}/#business`,
  name: BRAND_CONFIG.name,
  url: BRAND_CONFIG.siteUrl,
  logo: absoluteUrl("/icon.png"),
  image: [
    absoluteUrl("/images/lalagi-dimsum-social.jpg"),
    absoluteUrl("/images/lalagi-hero-tampah.jpg"),
    absoluteUrl("/images/lalagi-dimsum-cake.jpg"),
  ],
  description:
    "LalaGi Dimsum adalah brand dimsum homemade halal dari Jagakarsa, Jakarta Selatan, dengan 90% daging ayam pilihan untuk pesanan harian dan berbagai momen.",
  telephone: `+${BRAND_CONFIG.whatsappNumber}`,
  priceRange: "Rp90.000–Rp635.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND_CONFIG.streetAddress,
    addressLocality: "Jagakarsa",
    addressRegion: "Jakarta Selatan",
    postalCode: BRAND_CONFIG.postalCode,
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BRAND_CONFIG.latitude,
    longitude: BRAND_CONFIG.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Jakarta" },
    { "@type": "City", name: "Depok" },
    { "@type": "AdministrativeArea", name: "Jabodetabek" },
  ],
  hasMap: BRAND_CONFIG.googleMapsUrl,
  menu: absoluteUrl("/menu"),
  sameAs: [BRAND_CONFIG.instagramUrl, BRAND_CONFIG.tiktokUrl, BRAND_CONFIG.googleMapsUrl],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  currenciesAccepted: "IDR",
};

export const websiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BRAND_CONFIG.siteUrl}/#website`,
  url: BRAND_CONFIG.siteUrl,
  name: BRAND_CONFIG.name,
  inLanguage: "id-ID",
  publisher: { "@id": `${BRAND_CONFIG.siteUrl}/#business` },
};

export const homepageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BRAND_CONFIG.siteUrl}/#webpage`,
  url: `${BRAND_CONFIG.siteUrl}/`,
  name: "LalaGi Dimsum | Dimsum Cake, Tampah & Dimsum Jakarta Selatan",
  description:
    "LalaGi Dimsum Jagakarsa menghadirkan dimsum full ayam, Dimsum Cake, Tampah, Tower, Party Size dan pesanan acara dengan pengiriman Jabodetabek.",
  isPartOf: { "@id": `${BRAND_CONFIG.siteUrl}/#website` },
  about: { "@id": `${BRAND_CONFIG.siteUrl}/#business` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    "@id": `${BRAND_CONFIG.siteUrl}/#primaryimage`,
    contentUrl: absoluteUrl("/images/lalagi-dimsum-tampah.png"),
    url: absoluteUrl("/images/lalagi-dimsum-tampah.png"),
    caption: "Dimsum Tampah LalaGi Dimsum untuk acara dan momen spesial",
    representativeOfPage: true,
    creditText: "LalaGi Dimsum",
    copyrightNotice: "LalaGi Dimsum",
  },
  inLanguage: "id-ID",
};

export const breadcrumbSchema = (
  items: readonly { name: string; path: string }[],
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (
  questions: readonly { question: string; answer: string }[],
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

const productSchema = (menu: MenuGroup): Record<string, unknown> => ({
  "@type": "ProductGroup",
  "@id": `${BRAND_CONFIG.siteUrl}/menu#${menu.id}`,
  name: `${menu.name} LalaGi Dimsum`,
  description: menu.description,
  image: menu.images.map(absoluteUrl),
  brand: { "@type": "Brand", name: BRAND_CONFIG.name },
  category: "Dimsum",
  variesBy: "https://schema.org/size",
  hasVariant: menu.variants.map((variant) => ({
    "@type": "Product",
    name: `${variant.name} LalaGi Dimsum`,
    image: absoluteUrl(menu.images[0]),
    url: `${BRAND_CONFIG.siteUrl}/menu#${menu.id}`,
    size: variant.name.match(/\d+ pcs/)?.[0],
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: variant.price,
      availability: "https://schema.org/PreOrder",
      url: `${BRAND_CONFIG.siteUrl}/menu#${menu.id}`,
      seller: { "@id": `${BRAND_CONFIG.siteUrl}/#business` },
    },
  })),
});

export const menuProductsSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Menu LalaGi Dimsum",
  itemListElement: MENU_GROUPS.map((menu, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: productSchema(menu),
  })),
};

export const productGroupsSchema = (ids: readonly string[]): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@graph": MENU_GROUPS.filter((menu) => ids.includes(menu.id)).map(productSchema),
});
