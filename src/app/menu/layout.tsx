import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Lihat pilihan menu LalaGi Dimsum untuk hadiah, ulang tahun, gathering, dan momen spesial lainnya.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu LalaGi Dimsum",
    description:
      "Pilihan Dimsum Party Size, Dimsum Reguler, Dimsum Bucket, Dimsum Tampah, Dimsum Tower, dan Dimsum Money Roll.",
    url: "/menu",
    siteName: "LalaGi Dimsum",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Menu LalaGi Dimsum — Dimsum untuk Setiap Momen",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu LalaGi Dimsum",
    description:
      "Pilih sajian LalaGi Dimsum untuk hadiah, perayaan, dan acara spesialmu.",
    images: ["/twitter-image.jpg"],
  },
};

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
