import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import {
  DirectAnswers,
  PriceTable,
  ServiceHero,
  ServicePageShell,
} from "@/components/editorial/service-page";
import { MENU_GROUPS } from "@/data/products";
import { breadcrumbSchema, faqSchema, productGroupsSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Dimsum Cake Jakarta Selatan | Birthday & Anniversary - LalaGi Dimsum" },
  description:
    "Pesan Dimsum Cake LalaGi Dimsum di Jakarta Selatan untuk birthday, anniversary, graduation, dan surprise. Tersedia 25–45 pcs mulai Rp165.000.",
  alternates: { canonical: "/dimsum-cake" },
  openGraph: {
    title: "Dimsum Cake Jakarta Selatan | LalaGi Dimsum",
    description: "Dimsum Cake full ayam untuk ulang tahun, anniversary, graduation, dan surprise dari dapur LalaGi Dimsum Jagakarsa.",
    url: "/dimsum-cake",
    siteName: "LalaGi Dimsum",
    images: [{ url: "/images/menu-groups/dimsum-cake-reguler.webp", alt: "Dimsum Cake Reguler LalaGi Dimsum" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimsum Cake Jakarta Selatan | LalaGi Dimsum",
    description: "Dimsum Cake full ayam untuk birthday, anniversary, graduation, dan surprise.",
    images: ["/images/menu-groups/dimsum-cake-reguler.webp"],
  },
};

const cake = MENU_GROUPS.find((menu) => menu.id === "dimsum-cake")!;
const bucket = MENU_GROUPS.find((menu) => menu.id === "dimsum-bucket")!;

const faqs = [
  {
    question: "Apa itu Dimsum Cake LalaGi Dimsum?",
    answer: "Dimsum Cake LalaGi Dimsum adalah susunan dimsum full ayam dengan perpaduan saus mentai creamy dan dimsum original untuk birthday, anniversary, graduation, serta surprise. Pilihan ukurannya mulai 25 hingga 45 pcs.",
  },
  {
    question: "Berapa harga Dimsum Cake?",
    answer: "Harga Dimsum Cake Reguler mulai Rp165.000 untuk 25 pcs, Rp185.000 untuk 30 pcs, Rp200.000 untuk 35 pcs, Rp225.000 untuk 40 pcs, dan Rp260.000 untuk 45 pcs.",
  },
  {
    question: "Apakah Dimsum Cake bisa dikirim menggunakan motor?",
    answer: "Bisa. Dimsum Cake Reguler dan Dimsum Bucket dapat dikirim menggunakan motor dengan tas thermal. Untuk keamanan bentuk dan suhu, LalaGi Dimsum merekomendasikan driver dari pihak LalaGi Dimsum.",
  },
  {
    question: "Apa beda Dimsum Cake dan Dimsum Bucket?",
    answer: "Dimsum Cake tampil seperti kue gurih dalam box eksklusif, sedangkan Dimsum Bucket menggunakan dekorasi bucket dengan pilihan warna. Keduanya tersedia 25–45 pcs dan cocok untuk momen personal.",
  },
  {
    question: "Apakah tulisan dan topper bisa disesuaikan?",
    answer: "Pilihan topper meliputi Happy Birthday, Congratulations, Happy Graduation, Happy Wedding, Happy Anniversary, dan Bride to Be. Detail tulisan atau kebutuhan khusus dapat dikonsultasikan melalui WhatsApp.",
  },
] as const;

export default function DimsumCakePage() {
  const rows = [cake, bucket].flatMap((menu) =>
    menu.variants.map((variant) => ({ product: variant.name, price: variant.price, note: menu.name })),
  );

  return (
    <ServicePageShell>
      <JsonLd data={[
        productGroupsSchema(["dimsum-cake", "dimsum-bucket"]),
        faqSchema(faqs),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Dimsum Cake", path: "/dimsum-cake" }]),
      ]} />
      <ServiceHero
        eyebrow="Birthday · Anniversary · Surprise"
        title="Dimsum Cake Jakarta Selatan untuk Momen yang Lebih Personal"
        description="Dimsum Cake LalaGi Dimsum dibuat dari 90% daging ayam pilihan dan disusun sebagai alternatif kue gurih untuk ulang tahun, anniversary, graduation, serta perayaan lainnya."
        image="/images/menu-groups/dimsum-cake-reguler.webp"
        imageAlt="Dimsum Cake Reguler LalaGi Dimsum untuk ulang tahun di Jakarta Selatan"
        whatsappMessage="Halo LalaGi Dimsum, saya mau konsultasi Dimsum Cake untuk acara saya 😊"
      />
      <PriceTable title="Berapa harga Dimsum Cake dan Dimsum Bucket?" rows={rows} />
      <section className="bg-[#722F37] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-2 md:gap-16">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Dimsum Cake Reguler</p><h2 className="mt-4 font-serif-display text-3xl leading-tight">Tampilan seperti kue gurih.</h2><p className="mt-5 text-sm leading-7 text-white/70">Tersedia 25–45 pcs dengan dimsum mentai dan original. Harga sudah termasuk topper, lilin, cutlery, greeting card, saus, dan box eksklusif.</p></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Dimsum Bucket</p><h2 className="mt-4 font-serif-display text-3xl leading-tight">Dekorasi bucket yang bisa dipilih.</h2><p className="mt-5 text-sm leading-7 text-white/70">Tersedia 25–45 pcs untuk birthday dan hadiah personal. Paket mencakup kelengkapan perayaan serta bucket eksklusif.</p></div>
        </div>
      </section>
      <DirectAnswers title="Pertanyaan tentang Dimsum Cake LalaGi Dimsum" items={faqs} moreHref="/faq" />
    </ServicePageShell>
  );
}
