import type { Metadata, Viewport } from "next";
import { Mochiy_Pop_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const mochiyPop = Mochiy_Pop_One({
  variable: "--font-mochiy",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
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
        url: "/images/lalagi-dimsum-cake.jpg",
        width: 1200,
        height: 1200,
        alt: "LalaGi Dimsum Cake"
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
  themeColor: "#ED7772",
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
      className={`${mochiyPop.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-screen bg-[#FFFDF9] text-[#321D16] selection:bg-[#ED7772] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
