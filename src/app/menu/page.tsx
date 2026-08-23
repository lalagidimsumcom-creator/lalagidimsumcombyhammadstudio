"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Car,
  CaretDown,
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
  { id: "hampers", label: "Hampers" },
];

const formatRupiah = (price: number) => `Rp${new Intl.NumberFormat("id-ID").format(price)}`;

const deliveryNote = {
  "motor-ok": "Dikirim dengan motor + tas bersama driver LalaGi Dimsum",
  "car-required": "Dikirim dengan mobil bersama driver LalaGi Dimsum",
  standard: null,
} as const;

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <main className="flex min-h-screen flex-col bg-[#F7F3EF] font-sans text-[#3A2232] selection:bg-[#722F37] selection:text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#F8E8EE] bg-[#F7F3EF] pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-[1280px] space-y-4 px-5 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F8E8EE] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#722F37] sm:text-sm">
            <Sparkle weight="fill" className="size-4" aria-hidden="true" />
            <span>Katalog lengkap LalaGi Dimsum</span>
          </div>
          <h1 className="font-serif-display text-4xl font-normal tracking-tight text-[#3A2232] sm:text-6xl">
            Pilih favoritmu.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-[#735E6C] sm:text-lg lg:text-xl">
            Semua dimsum dibuat dari 90% daging ayam pilihan, bersertifikat halal resmi dan disiapkan fresh setiap hari.
          </p>

          <div className="mx-auto max-w-sm pt-7 text-left">
            <label htmlFor="menu-category" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[#735E6C]">
              Submenu kategori
            </label>
            <div className="relative">
              <select
                id="menu-category"
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value as CategoryFilter)}
                className="min-h-13 w-full appearance-none rounded-full border border-[#EADDE5] bg-white py-3 pl-5 pr-12 text-sm font-bold text-[#3A2232] shadow-sm outline-none transition-colors hover:border-[#722F37] focus:border-[#722F37] focus:ring-2 focus:ring-[#722F37]/20 sm:text-base"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.label}</option>
                ))}
              </select>
              <CaretDown weight="bold" className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-[#722F37]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24" aria-label="Daftar menu LalaGi Dimsum">
        <div className="mb-8 flex items-center justify-between border-b border-[#EADDE5] pb-4">
          <p className="text-sm font-semibold text-[#735E6C]">
            {filteredProducts.length} menu &amp; paket tercatat
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
              <div className="relative aspect-square overflow-hidden bg-[#F8E8EE]">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative flex h-full items-center justify-center overflow-hidden px-8 text-center">
                    <div className="absolute -right-14 -top-14 size-44 rounded-full border border-[#722F37]/25" />
                    <div className="absolute -bottom-20 -left-10 size-56 rounded-full bg-white/55" />
                    <p className="relative font-serif-display text-2xl leading-tight text-[#3A2232]">
                      {product.visualLabel}
                    </p>
                  </div>
                )}
                <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
                  {product.stockStatus === "ask" && (
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold text-[#722F37] shadow-sm">
                      Tanyakan stok
                    </span>
                  )}
                  {product.stockStatus === "seasonal" && (
                    <span className="rounded-full bg-[#722F37] px-3 py-1 text-[0.68rem] font-bold text-white shadow-sm">
                      Seasonal
                    </span>
                  )}
                  {product.stockStatus === "optional" && (
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold text-[#3A2232] shadow-sm">
                      Tanyakan ketersediaan
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#722F37]">
                    {product.meta}
                  </p>
                  <h2 className="mt-2 font-serif-display text-2xl font-semibold leading-tight text-[#3A2232]">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#735E6C]">
                    {product.description}
                  </p>
                  <p className="mt-5 text-xl font-bold text-[#3A2232]">
                    {product.price !== undefined ? (
                      <>{product.pricePrefix}{formatRupiah(product.price)}{product.priceSuffix && <span className="ml-1 text-sm font-semibold text-[#735E6C]">{product.priceSuffix}</span>}</>
                    ) : "Harga menyesuaikan"}
                  </p>
                  {product.availabilityNote && (
                    <p className="mt-3 border-l-2 border-[#722F37] pl-3 text-xs leading-5 text-[#735E6C]">
                      {product.availabilityNote}
                    </p>
                  )}
                  {deliveryNote[product.deliveryType] && (
                    <div className="mt-4 flex items-start gap-2.5 border-t border-[#EADDE5] pt-4 text-xs font-semibold leading-5 text-[#735E6C]">
                      {product.deliveryType === "motor-ok" ? (
                        <Motorcycle weight="duotone" className="mt-0.5 size-5 shrink-0 text-[#722F37]" aria-hidden="true" />
                      ) : (
                        <Car weight="duotone" className="mt-0.5 size-5 shrink-0 text-[#722F37]" aria-hidden="true" />
                      )}
                      <span>{deliveryNote[product.deliveryType]}</span>
                    </div>
                  )}
                </div>

                <details className="mt-6 border-y border-[#EADDE5] py-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[#3A2232] marker:text-[#722F37]">
                    Lihat isi paket &amp; add-on
                  </summary>
                  <div className="mt-4 space-y-4">
                    <ul className="space-y-2 text-sm text-[#735E6C]">
                      {product.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check weight="bold" className="mt-0.5 size-4 shrink-0 text-[#722F37]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {product.priceOptions && (
                      <div className="rounded-2xl bg-[#F7F3EF] p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#3A2232]">Pilihan ukuran / jumlah</p>
                        <ul className="mt-2 space-y-1.5 text-sm text-[#735E6C]">
                          {product.priceOptions.map((option) => (
                            <li key={option.name} className="flex justify-between gap-4">
                              <span>{option.name}</span>
                              <span className="shrink-0 font-semibold">{formatRupiah(option.price)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#722F37] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5F252D]"
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
              { icon: Motorcycle, title: "Cake & Bucket", text: "Dikirim dengan motor + tas bersama driver LalaGi Dimsum agar paket tetap aman." },
              { icon: Car, title: "Tower, Tampah & Money Roll", text: "Dikirim dengan mobil bersama driver LalaGi Dimsum agar susunan tetap terjaga." },
              { icon: WarningCircle, title: "Tanyakan stok", text: "Party Size dan dimsum satuan dapat sewaktu-waktu sold out. Konfirmasi sebelum memesan." },
            ].map((item) => (
              <article key={item.title} className="border border-[#EADDE5] bg-white p-6">
                <item.icon weight="duotone" className="size-7 text-[#722F37]" aria-hidden="true" />
                <h3 className="mt-5 font-bold text-[#3A2232]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#735E6C]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 lg:py-24" aria-labelledby="terms-title">
        <div className="flex items-center gap-3 text-[#722F37]">
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
          <li>Cake dan Bucket dikirim dengan motor + tas bersama driver LalaGi Dimsum.</li>
          <li>Mini Tower, Tower, Money Roll, dan Tampah dikirim dengan mobil bersama driver LalaGi Dimsum.</li>
          <li>Hampers Ramadan/Idul Fitri bersifat seasonal dan perlu dipesan saat periodenya aktif.</li>
        </ol>
        <a
          href={getWhatsAppUrl("Halo LalaGi Dimsum, saya lihat menu di website dan mau tanya/pesan dimsum 😊")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#722F37] px-8 py-3.5 font-bold text-white transition-colors duration-200 hover:bg-[#5F252D]"
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
