import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LalaGi Dimsum",
    short_name: "LalaGi Dimsum",
    description:
      "Website resmi LalaGi Dimsum, dimsum homemade premium dari Jagakarsa, Jakarta Selatan.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F3EF",
    theme_color: "#722F37",
    icons: [
      {
        src: "/images/lalagi-app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/lalagi-app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
