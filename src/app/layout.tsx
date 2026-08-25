import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://www.lalagidimsum.com";
const SITE_DESCRIPTION =
  "LalaGi Dimsum Jagakarsa menghadirkan dimsum full ayam, Dimsum Cake, Tampah, Tower, Party Size dan pesanan acara dengan pengiriman Jabodetabek.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "LalaGi Dimsum",
  title: {
    default: "LalaGi Dimsum | Dimsum Cake, Tampah & Dimsum Jakarta Selatan",
    template: "%s | LalaGi Dimsum",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "LalaGi Dimsum",
    "Dimsum Cake Jakarta",
    "Dimsum Cake Jakarta Selatan",
    "Dimsum Tampah Jakarta",
    "Dimsum Jagakarsa",
    "Dimsum Halal Jakarta",
    "Dimsum Ulang Tahun",
    "Dimsum Mentai Jakarta",
    "Dimsum untuk Setiap Momen"
  ],
  authors: [{ name: "LalaGi Dimsum" }],
  creator: "LalaGi Dimsum",
  publisher: "LalaGi Dimsum",
  category: "Food & Beverage",
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LalaGi Dimsum | Dimsum Cake, Tampah & Dimsum Jakarta Selatan",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "LalaGi Dimsum",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "LalaGi Dimsum — Dimsum untuk Setiap Momen",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LalaGi Dimsum | Dimsum Cake, Tampah & Dimsum Jakarta Selatan",
    description: SITE_DESCRIPTION,
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#722F37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cinzel.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-screen bg-[#F7F3EF] text-[#3A2232] selection:bg-[#722F37] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
