import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import JsonLd from "@/components/seo/json-ld";
import { DirectAnswers, ServicePageShell } from "@/components/editorial/service-page";
import { BRAND_CONFIG } from "@/data/config";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "Tentang LalaGi Dimsum | Homemade Dimsum dari Jagakarsa" },
  description: "Kenali LalaGi Dimsum, brand dimsum homemade halal dari Jagakarsa dengan 90% daging ayam pilihan, pengalaman 5+ tahun, dan layanan Jabodetabek.",
  alternates: { canonical: "/tentang" },
  openGraph: {
    title: "Tentang LalaGi Dimsum | Homemade dari Jagakarsa",
    description: "Cerita dapur rumahan LalaGi Dimsum, sertifikasi halal, fakta usaha, dan layanan pemesanan Jabodetabek.",
    url: "/tentang",
    siteName: "LalaGi Dimsum",
    images: [{ url: "/images/lalagi-story-dimsum-tower.webp", alt: "Sajian perayaan LalaGi Dimsum dari Jagakarsa" }],
    locale: "id_ID",
    type: "profile",
  },
};

const faqs = [
  {
    question: "Apa itu LalaGi Dimsum?",
    answer: "LalaGi Dimsum adalah brand dimsum homemade halal dari Jagakarsa, Jakarta Selatan. Produk dibuat dengan 90% daging ayam pilihan untuk dinikmati sehari-hari, diberikan sebagai hadiah, atau disajikan pada acara.",
  },
  {
    question: "Apakah LalaGi Dimsum bersertifikat halal?",
    answer: `Ya. LalaGi Dimsum memiliki sertifikasi Halal Indonesia dengan nomor ${BRAND_CONFIG.halalCertNumber}.`,
  },
  {
    question: "LalaGi Dimsum berada di mana?",
    answer: `LalaGi Dimsum berada di ${BRAND_CONFIG.streetAddress}, Jagakarsa, Jakarta Selatan ${BRAND_CONFIG.postalCode}. Petunjuk lokasi dapat dibuka melalui tautan Google Maps resmi di website.`,
  },
  {
    question: "Jam operasional LalaGi Dimsum kapan?",
    answer: `LalaGi Dimsum melayani pelanggan ${BRAND_CONFIG.operatingHours.toLowerCase()}. Ketersediaan produk dan slot pengiriman sebaiknya dikonfirmasi melalui WhatsApp.`,
  },
  {
    question: "Bagaimana cara memesan LalaGi Dimsum?",
    answer: `Pilih menu di website lalu hubungi admin melalui WhatsApp ${BRAND_CONFIG.phoneDisplay}. Admin akan membantu mengecek produk, jadwal, pengiriman, dan kebutuhan acara.`,
  },
] as const;

const clientTypes = ["perusahaan", "instansi pemerintah", "rumah sakit", "kampus", "media", "keluarga"] as const;

export default function TentangPage() {
  return (
    <ServicePageShell>
      <JsonLd data={[
        faqSchema(faqs),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Tentang", path: "/tentang" }]),
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Tentang LalaGi Dimsum",
          url: `${BRAND_CONFIG.siteUrl}/tentang`,
          about: { "@id": `${BRAND_CONFIG.siteUrl}/#business` },
          inLanguage: "id-ID",
        },
      ]} />
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:gap-20">
          <div className="relative aspect-square overflow-hidden bg-white">
            <Image src="/images/lalagi-story-dimsum-tower.webp" alt="Dimsum Tower LalaGi Dimsum dari dapur Jagakarsa" fill priority sizes="(max-width:1023px) 100vw, 50vw" className="object-contain" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#722F37]">Dari dapur LalaGi Dimsum</p>
            <span className="mt-6 block h-px w-10 bg-[#722F37]" aria-hidden="true" />
            <h1 className="mt-7 text-balance font-serif-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">Homemade Dimsum dari Jagakarsa</h1>
            <div className="mt-7 space-y-5 text-sm leading-7 text-[#735E6C] sm:text-base sm:leading-8">
              <p>LalaGi Dimsum lahir dari dapur rumahan di Jagakarsa dengan keyakinan bahwa makanan terbaik tercipta melalui ketelatenan, kesabaran, dan ketulusan.</p>
              <p>Setiap dimsum dibuat dengan 90% daging ayam pilihan. Dari memilih bahan, meracik bumbu, hingga menyiapkan pesanan, LalaGi Dimsum menjaga rasa dan tampilan agar tetap konsisten untuk setiap momen.</p>
              <p>LalaGi Dimsum telah berjalan lebih dari lima tahun dan melayani pesanan harian, hadiah, perayaan keluarga, hingga kebutuhan berbagai acara di Jabodetabek.</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#722F37] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#5F252D]"><WhatsappLogo weight="fill" className="size-5" aria-hidden="true" />Hubungi LalaGi Dimsum</a>
              <a href={BRAND_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#722F37]/35 px-7 py-3.5 text-sm font-bold text-[#722F37] hover:bg-white"><MapPin className="size-5" aria-hidden="true" />Buka Google Maps</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#722F37] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Fakta LalaGi Dimsum</p>
          <div className="mt-8 grid grid-cols-2 border-l border-t border-white/20 md:grid-cols-4">
            {[{ value: "90%", label: "Daging ayam pilihan" }, { value: "Halal", label: BRAND_CONFIG.halalCertNumber }, { value: "5+ Tahun", label: "Perjalanan usaha" }, { value: "Jabodetabek", label: "Area pengiriman" }].map((fact) => (
              <div key={fact.value} className="min-h-40 border-b border-r border-white/20 p-5 sm:p-7"><strong className="font-serif-display text-2xl sm:text-3xl">{fact.value}</strong><span className="mt-4 block text-xs leading-5 text-white/65">{fact.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="location-title">
        <div className="mx-auto grid max-w-[1100px] gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">Lokasi LalaGi Dimsum</p>
            <h2 id="location-title" className="mt-4 font-serif-display text-3xl font-medium leading-tight sm:text-4xl">Dapur rumahan di Jagakarsa.</h2>
            <p className="mt-5 text-sm leading-7 text-[#735E6C]">{BRAND_CONFIG.streetAddress}, Kecamatan Jagakarsa, Jakarta Selatan {BRAND_CONFIG.postalCode}.</p>
            <a href={BRAND_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 border-b border-[#722F37] pb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#722F37]">
              Buka petunjuk Google Maps<MapPin className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="aspect-[16/10] overflow-hidden border border-[#3A2232]/10 bg-[#FFFDF9]">
            <iframe
              title="Lokasi LalaGi Dimsum di Jagakarsa"
              src={`https://www.google.com/maps?q=${BRAND_CONFIG.latitude},${BRAND_CONFIG.longitude}&z=16&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FFFDF9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">LalaGi dalam berbagai momen</p>
          <h2 className="mt-4 max-w-4xl font-serif-display text-3xl font-medium leading-tight sm:text-4xl">Pesanan LalaGi Dimsum telah hadir di berbagai perusahaan, instansi, rumah sakit, kampus, dan acara keluarga.</h2>
          <ul className="mt-9 grid grid-cols-2 border-l border-t border-[#3A2232]/15 sm:grid-cols-3">
            {clientTypes.map((type) => <li key={type} className="border-b border-r border-[#3A2232]/15 px-5 py-6 text-sm font-semibold capitalize">{type}</li>)}
          </ul>
          <p className="mt-6 text-sm leading-7 text-[#735E6C]">Penyebutan ini menggambarkan jenis momen dan penerima pesanan, bukan klaim kemitraan resmi.</p>
          <Link href="/pesanan-acara" className="mt-7 inline-flex border-b border-[#722F37] pb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#722F37]">Lihat pesanan acara</Link>
        </div>
      </section>
      <DirectAnswers title="Pertanyaan tentang LalaGi Dimsum" items={faqs} moreHref="/faq" />
    </ServicePageShell>
  );
}
