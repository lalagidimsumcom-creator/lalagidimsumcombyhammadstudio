import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import JsonLd from "@/components/seo/json-ld";
import { ServicePageShell } from "@/components/editorial/service-page";
import { BRAND_CONFIG } from "@/data/config";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "FAQ LalaGi Dimsum | Harga, Pemesanan & Pengiriman" },
  description:
    "Jawaban resmi tentang harga LalaGi Dimsum, sertifikat halal, lokasi Jagakarsa, Dimsum Cake, Tampah, Tower, topper, dan pengiriman Jabodetabek.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ LalaGi Dimsum | Harga, Pemesanan & Pengiriman",
    description:
      "Temukan jawaban langsung seputar menu, harga, pemesanan, dan pengiriman LalaGi Dimsum.",
    url: "/faq",
    siteName: "LalaGi Dimsum",
    images: [
      {
        url: "/images/lalagi-dimsum-social.jpg",
        width: 1200,
        height: 630,
        alt: "LalaGi Dimsum dari Jagakarsa, Jakarta Selatan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSection = {
  eyebrow: string;
  title: string;
  items: readonly FaqItem[];
};

const faqSections: readonly FaqSection[] = [
  {
    eyebrow: "Brand & halal",
    title: "Tentang LalaGi Dimsum",
    items: [
      {
        question: "Apakah LalaGi Dimsum halal?",
        answer: `Ya. LalaGi Dimsum bersertifikat Halal Indonesia dengan nomor ${BRAND_CONFIG.halalCertNumber}.`,
      },
      {
        question: "Berapa kandungan daging ayam di dimsum LalaGi Dimsum?",
        answer:
          "Produk LalaGi Dimsum dibuat dengan 90% daging ayam pilihan. Informasi ini berlaku untuk menu dimsum yang ditampilkan pada website resmi.",
      },
      {
        question: "LalaGi Dimsum berada di mana?",
        answer: `LalaGi Dimsum berada di ${BRAND_CONFIG.streetAddress}, Kecamatan Jagakarsa, Jakarta Selatan ${BRAND_CONFIG.postalCode}.`,
      },
      {
        question: "Jam buka LalaGi Dimsum kapan?",
        answer: `${BRAND_CONFIG.operatingHours}. Ketersediaan slot produksi dan pengiriman dapat dikonfirmasi melalui WhatsApp.`,
      },
      {
        question: "Bagaimana cara memesan LalaGi Dimsum secara online?",
        answer: `Pilih produk dan ukuran di halaman menu, lalu hubungi admin melalui WhatsApp ${BRAND_CONFIG.phoneDisplay}. Admin akan mengecek slot, detail pesanan, dan pengiriman.`,
      },
    ],
  },
  {
    eyebrow: "Menu & harga",
    title: "Memilih produk yang tepat",
    items: [
      {
        question: "Apa saja menu LalaGi Dimsum yang tersedia?",
        answer:
          "Menu yang ditampilkan saat ini adalah Dimsum Party Size, Dimsum Cake Reguler, Dimsum Bucket, Dimsum Tampah, Dimsum Tower, dan Dimsum Money Roll.",
      },
      {
        question: "Berapa jumlah paling sedikit yang tersedia di menu?",
        answer:
          "Pilihan terkecil yang tercantum adalah Dimsum Party Size 20 pcs. Pilihan ukuran produk lain dapat dilihat pada halaman menu.",
      },
      {
        question: "Berapa harga Dimsum Cake LalaGi Dimsum?",
        answer:
          "Harga Dimsum Cake Reguler mulai Rp165.000 untuk 25 pcs hingga Rp260.000 untuk 45 pcs.",
      },
      {
        question: "Dimsum Cake cocok untuk berapa orang?",
        answer:
          "Dimsum Cake tersedia dalam ukuran 25, 30, 35, 40, dan 45 pcs. Jumlah orang bergantung pada alokasi dimsum per tamu; admin dapat membantu memilih ukuran berdasarkan kebutuhan acara.",
      },
      {
        question: "Apa beda Dimsum Cake dan Dimsum Bucket?",
        answer:
          "Dimsum Cake disusun seperti kue gurih dalam box eksklusif, sedangkan Dimsum Bucket menggunakan dekorasi bucket dengan pilihan warna. Keduanya tersedia dalam ukuran 25–45 pcs.",
      },
      {
        question: "Apakah topper dan tulisan bisa disesuaikan?",
        answer:
          "Pilihan topper meliputi Happy Birthday, Congratulations, Happy Graduation, Happy Wedding, Happy Anniversary, dan Bride to Be. Permintaan tulisan atau detail khusus perlu dikonsultasikan melalui WhatsApp.",
      },
      {
        question: "Apa itu Dimsum Money Roll?",
        answer:
          "Dimsum Money Roll adalah sajian 40 pcs untuk surprise yang dilengkapi susunan uang. Harga Rp315.000 belum termasuk isi uang, dan pengiriman wajib menggunakan mobil.",
      },
      {
        question: "Apakah ada pilihan dimsum untuk gift atau hampers?",
        answer:
          "Dimsum Party Size dapat diminta sebagai gift. Ketersediaan dekorasi atau paket musiman perlu dikonfirmasi kepada admin sebelum memesan.",
      },
    ],
  },
  {
    eyebrow: "Acara & pengiriman",
    title: "Dari dapur sampai ke momenmu",
    items: [
      {
        question: "Berapa harga Dimsum Tampah?",
        answer:
          "Dimsum Tampah 50 pcs seharga Rp390.000 dan Dimsum Tampah 100 pcs seharga Rp580.000.",
      },
      {
        question: "Berapa harga Dimsum Tower?",
        answer:
          "Dimsum Tower 55 pcs seharga Rp350.000 dan Dimsum Tower 100 pcs seharga Rp635.000.",
      },
      {
        question: "Apa beda Dimsum Tampah dan Dimsum Tower?",
        answer:
          "Dimsum Tampah mengutamakan sajian lebar yang mudah dibagikan, sedangkan Dimsum Tower memiliki susunan bertingkat untuk tampilan perayaan yang lebih tinggi dan mewah.",
      },
      {
        question: "Dimsum Tower cocok untuk acara apa?",
        answer:
          "Dimsum Tower cocok untuk birthday, graduation, wedding, anniversary, gathering kantor, dan perayaan keluarga.",
      },
      {
        question: "Apakah LalaGi Dimsum melayani pesanan kantor dan acara besar?",
        answer:
          "Ya. Dimsum Tampah, Tower, dan Money Roll dapat dipilih untuk kantor, gathering, wedding, arisan, syukuran, kampus, dan acara keluarga.",
      },
      {
        question: "Apakah LalaGi Dimsum bisa dikirim ke Depok, Tangerang Selatan, dan Bekasi?",
        answer:
          "LalaGi Dimsum melayani pengiriman Jabodetabek. Ketersediaan armada, jadwal, dan biaya pengiriman untuk setiap alamat perlu dikonfirmasi kepada admin.",
      },
      {
        question: "Apakah harga sudah termasuk biaya pengiriman?",
        answer:
          "Belum. Biaya pengiriman mengikuti tarif GoSend atau Lalamove dan dapat berubah berdasarkan jarak serta kondisi perjalanan.",
      },
      {
        question: "Apakah pesanan dadakan atau same day bisa dilayani?",
        answer:
          "Pemesanan dadakan dapat dilayani jika slot produksi masih tersedia. Hubungi admin untuk mendapatkan konfirmasi sebelum melakukan pembayaran.",
      },
      {
        question: "Produk mana yang bisa dikirim dengan motor atau harus menggunakan mobil?",
        answer:
          "Party Size, Dimsum Cake, dan Bucket dapat dikirim dengan motor serta tas thermal. Tampah, Tower, dan Money Roll wajib dikirim dengan mobil agar susunannya tetap aman.",
      },
    ],
  },
];

const allFaqs = faqSections.flatMap((section) => section.items);

export default function FaqPage() {
  return (
    <ServicePageShell>
      <JsonLd
        data={[
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <header className="border-b border-[#3A2232]/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#722F37]">
            Jawaban resmi LalaGi Dimsum
          </p>
          <div>
            <h1 className="text-balance font-serif-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
              Harga, pemesanan, dan pengiriman—dijawab langsung.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#735E6C]">
              Informasi ringkas berdasarkan menu dan kebijakan yang tercantum di website LalaGi Dimsum. Untuk stok, slot produksi, dan permintaan khusus, admin akan memberikan konfirmasi akhir.
            </p>
          </div>
        </div>
      </header>

      {faqSections.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 1 ? "bg-[#FFFDF9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24" : "px-5 py-16 sm:px-8 lg:px-12 lg:py-24"}
          aria-labelledby={`faq-section-${index}`}
        >
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">{section.eyebrow}</p>
              <h2 id={`faq-section-${index}`} className="mt-4 font-serif-display text-3xl font-medium leading-tight sm:text-4xl">
                {section.title}
              </h2>
            </div>
            <div className="divide-y divide-[#3A2232]/15 border-y border-[#3A2232]/15">
              {section.items.map((item) => (
                <article key={item.question} className="py-7">
                  <h3 className="font-serif-display text-lg font-semibold leading-7">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#735E6C] sm:text-base">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#722F37] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Butuh jawaban khusus?</p>
            <h2 className="mt-3 font-serif-display text-3xl font-medium">Konsultasikan momenmu dengan admin.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={getWhatsAppUrl("Halo LalaGi Dimsum, saya ingin bertanya tentang menu dan pemesanan 😊")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#722F37] hover:bg-[#F7F3EF]">
              <WhatsappLogo weight="fill" className="size-5" aria-hidden="true" />Tanya via WhatsApp
            </a>
            <Link href="/menu" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10">
              Lihat menu<ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </ServicePageShell>
  );
}
