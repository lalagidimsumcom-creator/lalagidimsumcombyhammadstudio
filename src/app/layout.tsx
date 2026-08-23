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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lalagidimsum.com"),
  title: "LalaGi Dimsum | Dimsum untuk Setiap Momen",
  description:
    "Dimsum homemade dengan 90% daging ayam pilihan dari Jagakarsa, Jakarta Selatan. Dari ngemil sehari-hari, Dimsum Cake ulang tahun, Dimsum Tampah acara, hingga hampers spesial. Halal Certified ID31110016921890424.",
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
      "Dimsum homemade dengan 90% daging ayam pilihan untuk menemani momen sehari-hari hingga perayaan istimewa bersama orang tersayang.",
    url: "https://lalagidimsum.com/",
    siteName: "LalaGi Dimsum",
    images: [
      {
        url: "/images/lalagi-dimsum-tampah.png",
        width: 941,
        height: 1672,
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
  themeColor: "#321D16",
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
      <body className="font-sans min-h-screen bg-[#FAF7F8] text-[#3A2232] selection:bg-[#E94E87] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
