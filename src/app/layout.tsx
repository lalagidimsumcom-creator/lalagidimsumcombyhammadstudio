import type { Metadata, Viewport } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lalagidimsum.com"),
  title: "LalaGi Dimsum | Dimsum untuk Setiap Momen",
  description:
    "Dimsum full ayam berkualitas dari Jagakarsa, Jakarta Selatan. Dari ngemil sehari-hari, Dimsum Cake ulang tahun, Dimsum Tampah acara, hingga hampers spesial. Halal Certified ID31110016921890424.",
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
  openGraph: {
    title: "LalaGi Dimsum | Dimsum untuk Setiap Momen",
    description:
      "Dimsum full ayam berkualitas, dibuat dengan bahan terbaik untuk menemani momen sehari-hari hingga perayaan istimewa bersama orang tersayang.",
    url: "https://lalagidimsum.com/",
    siteName: "LalaGi Dimsum",
    images: [
      {
        url: "/images/lalagi-hero-tampah.jpg",
        width: 1200,
        height: 1200,
        alt: "Tampah aneka dimsum LalaGi"
      }
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/images/lalagi-logo.jpg",
    apple: "/images/lalagi-logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#17343D",
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
      className={`${cinzel.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-screen bg-[#F7F3EC] text-[#17343D] selection:bg-[#B69A63] selection:text-[#0E2831] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
