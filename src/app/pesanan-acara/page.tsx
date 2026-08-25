import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { DirectAnswers, PriceTable, ServiceHero, ServicePageShell } from "@/components/editorial/service-page";
import { MENU_GROUPS } from "@/data/products";
import { breadcrumbSchema, faqSchema, productGroupsSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Dimsum Tampah & Catering Acara Jakarta | LalaGi Dimsum" },
  description: "Pesan Dimsum Tampah, Tower, dan Money Roll LalaGi Dimsum untuk kantor, gathering, wedding, arisan, dan acara keluarga di Jabodetabek.",
  alternates: { canonical: "/pesanan-acara" },
  openGraph: {
    title: "Dimsum Tampah & Pesanan Acara Jakarta | LalaGi Dimsum",
    description: "Pilihan dimsum 40–100 pcs untuk acara kantor, gathering, wedding, dan keluarga di Jabodetabek.",
    url: "/pesanan-acara",
    siteName: "LalaGi Dimsum",
    images: [{ url: "/images/menu-groups/dimsum-tampah-01.webp", alt: "Dimsum Tampah LalaGi Dimsum untuk acara" }],
    locale: "id_ID",
    type: "website",
  },
};

const eventMenus = MENU_GROUPS.filter((menu) => ["dimsum-tampah", "dimsum-tower", "dimsum-money-roll"].includes(menu.id));
const faqs = [
  {
    question: "Menu dimsum apa yang cocok untuk acara kantor?",
    answer: "Dimsum Tampah 50 atau 100 pcs cocok untuk meeting, gathering, dan acara kantor karena rapi serta mudah dibagikan. Dimsum Tower memberi tampilan lebih tinggi dan mewah untuk perayaan perusahaan.",
  },
  {
    question: "Berapa harga Dimsum Tampah 50 pcs dan 100 pcs?",
    answer: "Dimsum Tampah 50 pcs seharga Rp390.000 dan Dimsum Tampah 100 pcs seharga Rp580.000. Paket mencakup topper, lilin, cutlery, dan greeting card.",
  },
  {
    question: "Berapa harga Dimsum Tower?",
    answer: "Dimsum Tower 55 pcs seharga Rp350.000 dan Dimsum Tower 100 pcs seharga Rp635.000. Pilihan ini cocok untuk ulang tahun, wedding, graduation, gathering, dan acara keluarga besar.",
  },
  {
    question: "Kenapa Dimsum Tampah dan Tower harus dikirim dengan mobil?",
    answer: "Dimsum Tampah, Tower, dan Money Roll memiliki susunan besar atau bertingkat. Pengiriman menggunakan mobil membantu menjaga posisi, dekorasi, dan bentuk sajian tetap aman selama perjalanan.",
  },
  {
    question: "Apakah LalaGi Dimsum melayani pesanan acara di Jabodetabek?",
    answer: "Ya. LalaGi Dimsum melayani konsultasi pesanan acara dan pengiriman ke area Jabodetabek. Jadwal, jumlah, serta armada disesuaikan dengan produk dan lokasi acara.",
  },
  {
    question: "Apa itu Dimsum Money Roll?",
    answer: "Dimsum Money Roll adalah sajian surprise berisi 40 pcs dimsum dengan susunan uang. Harga Rp315.000 belum termasuk isi uang, dan pengirimannya wajib menggunakan mobil.",
  },
] as const;

export default function PesananAcaraPage() {
  const rows = eventMenus.flatMap((menu) => menu.variants.map((variant) => ({ product: variant.name, price: variant.price, note: menu.deliveryLabel })));
  return (
    <ServicePageShell>
      <JsonLd data={[
        productGroupsSchema(["dimsum-tampah", "dimsum-tower", "dimsum-money-roll"]),
        faqSchema(faqs),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pesanan Acara", path: "/pesanan-acara" }]),
      ]} />
      <ServiceHero
        eyebrow="Kantor · Gathering · Wedding · Keluarga"
        title="Dimsum Tampah dan Pesanan Acara di Jakarta"
        description="LalaGi Dimsum menyiapkan sajian besar untuk kantor, gathering, wedding, arisan, syukuran, dan acara keluarga. Pilih Tampah, Tower, atau Money Roll sesuai jumlah tamu dan karakter momenmu."
        image="/images/menu-groups/dimsum-tampah-01.webp"
        imageAlt="Dimsum Tampah LalaGi Dimsum untuk gathering dan acara kantor Jakarta"
        whatsappMessage="Halo LalaGi Dimsum, saya mau konsultasi pesanan dimsum untuk acara 😊"
      />
      <PriceTable title="Harga Dimsum Tampah, Tower, dan Money Roll" rows={rows} />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">LalaGi dalam berbagai momen</p>
          <h2 className="mt-4 max-w-4xl font-serif-display text-3xl font-medium leading-tight sm:text-4xl">Pesanan LalaGi Dimsum telah hadir di berbagai perusahaan, instansi, rumah sakit, kampus, dan acara di Jabodetabek.</h2>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#735E6C] sm:text-base">Setiap pesanan dikonsultasikan berdasarkan jumlah sajian, waktu acara, lokasi pengiriman, dan kebutuhan tampilan. Hubungi admin untuk mengecek slot produksi dan armada.</p>
          <p className="mt-5 max-w-3xl border-l border-[#722F37]/35 pl-5 text-sm leading-7 text-[#735E6C]">Area layanan mencakup Jakarta Selatan, wilayah Jakarta lainnya, Depok, Tangerang Selatan, Bekasi, dan area Jabodetabek sesuai ketersediaan armada.</p>
        </div>
      </section>
      <DirectAnswers title="Pertanyaan tentang pesanan dimsum untuk acara" items={faqs} moreHref="/faq" />
    </ServicePageShell>
  );
}
