"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Car,
  Check,
  Clock,
  Motorcycle,
  Sparkle,
  WarningCircle,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Navbar from "@/components/editorial/navbar";
import Footer from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";
import { PRODUCTS, type ProductCategory } from "@/data/products";
import { getProductWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";

type CategoryFilter = "all" | ProductCategory;

const categories: Array<{ id: CategoryFilter; label: string }> = [
  { id: "all", label: "Semua Menu" },
  { id: "cake", label: "Dimsum Cake" },
  { id: "bucket", label: "Dimsum Bucket" },
  { id: "tower-tampah", label: "Tower & Tampah" },
  { id: "party", label: "Party Size" },
  { id: "single", label: "Dimsum Satuan" },
];

const formatRupiah = (price: number) => `Rp${new Intl.NumberFormat("id-ID").format(price)}`;

const deliveryLabel = {
  "motor-ok": "Bisa dikirim motor dengan bag",
  "car-required": "Pengiriman wajib mobil",
  standard: null,
} as const;

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <main className="flex min-h-screen flex-col bg-[#FAF7F8] font-sans text-[#3A2232] selection:bg-[#E94E87] selection:text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#F8E8EE] bg-[#FAF7F8] pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-[1280px] space-y-4 px-5 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F8E8EE] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E94E87] sm:text-sm">
            <Sparkle weight="fill" className="size-4" aria-hidden="true" />
            <span>Katalog lengkap LalaGi</span>
          </div>
          <h1 className="font-serif-display text-4xl font-normal tracking-tight text-[#3A2232] sm:text-6xl">
            Pilih favoritmu.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-[#735E6C] sm:text-lg lg:text-xl">
            Semua dimsum dibuat dari 90% daging ayam pilihan, bersertifikat halal resmi dan disiapkan fresh setiap hari.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-7" aria-label="Filter kategori menu">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-200 sm:text-base ${
                    isActive
                      ? "border-[#E94E87] bg-[#E94E87] text-white shadow-md"
                      : "border-[#EADDE5] bg-white text-[#735E6C] hover:border-[#E94E87] hover:text-[#3A2232]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24" aria-label="Daftar menu LalaGi">
        <div className="mb-8 flex items-center justify-between border-b border-[#EADDE5] pb-4">
          <p className="text-sm font-semibold text-[#735E6C]">
            {filteredProducts.length} pilihan tersedia
          </p>
          <p className="text-xs text-[#735E6C]">Harga belum termasuk biaya kirim</p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="group flex scroll-mt-24 flex-col overflow-hidden rounded-[28px] border border-[#EADDE5] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden bg-[#F8E8EE]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
                  {product.stockStatus === "ask" && (
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold text-[#D63D76] shadow-sm">
                      Tanyakan stok
                    </span>
                  )}
                  {deliveryLabel[product.deliveryType] && (
                    <span className="rounded-full bg-[#6A1E55]/95 px-3 py-1 text-[0.68rem] font-bold text-white shadow-sm">
                      {deliveryLabel[product.deliveryType]}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E94E87]">
                    {product.pieces} pcs
                  </p>
                  <h2 className="mt-2 font-serif-display text-2xl font-semibold leading-tight text-[#3A2232]">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#735E6C]">
                    {product.description}
                  </p>
                  <p className="mt-5 text-xl font-bold text-[#3A2232]">
                    {formatRupiah(product.price)}
                  </p>
                </div>

                <details className="mt-6 border-y border-[#EADDE5] py-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[#3A2232] marker:text-[#E94E87]">
                    Lihat isi paket &amp; add-on
                  </summary>
                  <div className="mt-4 space-y-4">
                    <ul className="space-y-2 text-sm text-[#735E6C]">
                      {product.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check weight="bold" className="mt-0.5 size-4 shrink-0 text-[#E94E87]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {product.addons && (
                      <div className="rounded-2xl bg-[#F8E8EE] p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#3A2232]">Add-on</p>
                        <ul className="mt-2 space-y-1.5 text-sm text-[#735E6C]">
                          {product.addons.map((addon) => (
                            <li key={addon.name} className="flex justify-between gap-4">
                              <span>{addon.name}</span>
                              <span className="shrink-0 font-semibold">+{formatRupiah(addon.price)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </details>

                <a
                  href={getProductWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E94E87] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D63D76]"
                >
                  <WhatsappLogo weight="fill" className="size-4" aria-hidden="true" />
                  Pesan via WhatsApp
                  <ArrowUpRight weight="bold" className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#EADDE5] bg-[#F8E8EE]/55 py-14" aria-labelledby="delivery-title">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <h2 id="delivery-title" className="font-serif-display text-3xl font-normal text-[#3A2232] sm:text-4xl">
            Pengiriman &amp; ketersediaan
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              { icon: Motorcycle, title: "Cake & Bucket", text: "Bisa menggunakan motor dengan bag. Driver LalaGi direkomendasikan agar paket lebih aman." },
              { icon: Car, title: "Tower, Tampah & Money Roll", text: "Mini Tower, Tower, Money Roll, dan Tampah wajib dikirim menggunakan mobil." },
              { icon: WarningCircle, title: "Tanyakan stok", text: "Party Size dan dimsum satuan dapat sewaktu-waktu sold out. Konfirmasi sebelum memesan." },
            ].map((item) => (
              <article key={item.title} className="border border-[#EADDE5] bg-white p-6">
                <item.icon weight="duotone" className="size-7 text-[#E94E87]" aria-hidden="true" />
                <h3 className="mt-5 font-bold text-[#3A2232]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#735E6C]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 lg:py-24" aria-labelledby="terms-title">
        <div className="flex items-center gap-3 text-[#E94E87]">
          <Clock weight="duotone" className="size-6" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.18em]">Syarat &amp; ketentuan</p>
        </div>
        <h2 id="terms-title" className="mt-4 font-serif-display text-3xl font-normal text-[#3A2232] sm:text-4xl">
          Sebelum melakukan pemesanan
        </h2>
        <ol className="mt-8 list-decimal space-y-3 pl-5 text-sm leading-7 text-[#735E6C] sm:text-base">
          <li>Pemesanan dadakan dapat dilayani jika slot masih tersedia.</li>
          <li>Jam pengiriman pukul 08.00–18.00.</li>
          <li>Semua harga belum termasuk biaya kirim.</li>
          <li>Ongkir mengikuti aplikasi GoSend/Lalamove dan dapat berubah karena cuaca atau banjir.</li>
          <li>Cake dan Bucket dapat dikirim menggunakan motor dengan bag; driver LalaGi direkomendasikan.</li>
          <li>Mini Tower, Tower, Money Roll, dan Tampah wajib menggunakan mobil.</li>
        </ol>
        <a
          href={getWhatsAppUrl("Halo LalaGi, saya lihat menu di website dan mau tanya/pesan dimsum 😊")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E94E87] px-8 py-3.5 font-bold text-white transition-colors duration-200 hover:bg-[#D63D76]"
        >
          <WhatsappLogo weight="fill" className="size-5" aria-hidden="true" />
          Tanya menu via WhatsApp
        </a>
      </section>

      <Footer />
      <WhatsAppFloatingCta />
    </main>
  );
}
