"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/editorial/navbar";
import Footer from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";
import { ArrowUpRight, Check, Sparkle, Question, Plus, Minus, WhatsappLogo, Truck, Snowflake, ShieldCheck } from "@phosphor-icons/react";
import { PRODUCTS } from "@/data/products";
import { getProductWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { BRAND_CONFIG } from "@/data/config";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    { id: "all", label: "Semua Menu" },
    { id: "regular", label: "Dimsum & Mentai" },
    { id: "signature", label: "Dimsum Cake & Tower" },
    { id: "sharing", label: "Sharing & Tampah" },
    { id: "hampers", label: "Hampers & Gift" },
  ];

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory || (activeCategory === "regular" && (p.category === "regular" || p.id.includes("original"))));

  const menuFaqs = [
    {
      q: "Bagaimana cara memesan dimsum untuk konsumsi hari ini?",
      a: "Anda bisa langsung klik tombol 'Pesan' pada menu yang diinginkan atau hubungi WhatsApp kami di 0878-8255-0494. Pesanan siap dikirim dari dapur kami di Jagakarsa menggunakan kurir instan."
    },
    {
      q: "Apakah Dimsum Frozen tahan lama dan bagaimana cara penyimpanannya?",
      a: "Dimsum frozen kami diproduksi higienis tanpa bahan pengawet. Simpan di dalam freezer bersuhu -18°C dan dapat bertahan hingga 1-2 bulan. Untuk menikmati, cukup kukus selama 8-10 menit hingga panas merata."
    },
    {
      q: "Apakah setiap pemesanan sudah termasuk saus dan chili oil?",
      a: "Ya! Setiap pemesanan porsi reguler, frozen, tampah, maupun cake sudah dilengkapi saus cocolan khas dan chili oil racikan spesial LalaGi."
    },
    {
      q: "Area mana saja yang bisa dijangkau pengiriman LalaGi?",
      a: "Kami melayani pengiriman ke seluruh wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, dan Bekasi) menggunakan kurir instan atau sameday."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#321D16] flex flex-col font-sans selection:bg-[#ED7772] selection:text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-[#FFF9F2] border-b border-[#FBE9E5] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FBE9E5] text-[#ED7772] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkle weight="fill" className="w-4 h-4 text-[#E4A53A]" />
            <span>KATALOG LENGKAP LALAGI</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#321D16] tracking-tight">
            Pilih Favoritmu. 🥟
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#665750] max-w-2xl mx-auto">
            Semua dimsum dibuat dari 100% daging ayam segar pilihan, bersertifikat halal resmi, dan disiapkan fresh dari dapur Jagakarsa.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#ED7772] text-white shadow-md transform scale-105"
                      : "bg-white text-[#665750] hover:text-[#321D16] hover:bg-[#FBE9E5] border border-[#FBE9E5]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="group scroll-mt-24 bg-white rounded-[32px] overflow-hidden border border-[#FBE9E5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative w-full h-72 bg-[#FFF9F2] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#ED7772] shadow-sm border border-[#FBE9E5]">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-7 space-y-4">
                  <div>
                    <h3 className="font-serif-display text-2xl font-bold text-[#321D16] group-hover:text-[#ED7772] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#665750] mt-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-[#FBE9E5]">
                    {product.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm text-[#665750]">
                        <Check weight="bold" className="w-3.5 h-3.5 text-[#ED7772] mr-2 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Order Action */}
              <div className="px-7 pb-7 pt-3 flex items-center justify-between border-t border-[#FBE9E5]/60">
                <div>
                  <span className="text-xs font-semibold text-[#76645D] uppercase block">
                    Estimasi Harga
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#321D16]">
                    {product.price || "Tanya Admin"}
                  </span>
                </div>

                <a
                  href={getProductWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold bg-[#ED7772] hover:bg-[#D9615C] text-white shadow-xs hover:shadow-md transition-all group-hover:scale-105"
                >
                  <WhatsappLogo weight="fill" className="w-4 h-4 mr-1.5" />
                  <span>Pesan</span>
                  <ArrowUpRight weight="bold" className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery & Quality Strip */}
      <section className="py-12 bg-[#FFF9F2] border-y border-[#FBE9E5]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-[#FBE9E5] shadow-2xs">
              <div className="w-11 h-11 rounded-xl bg-[#FBE9E5] flex items-center justify-center shrink-0">
                <Truck weight="duotone" className="w-6 h-6 text-[#ED7772]" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-[#321D16]">Kirim Cepat Se-Jabodetabek</h4>
                <p className="text-xs sm:text-sm text-[#665750] mt-0.5">Tersedia layanan kurir instan dan sameday dari Jagakarsa.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-[#FBE9E5] shadow-2xs">
              <div className="w-11 h-11 rounded-xl bg-[#FBE9E5] flex items-center justify-center shrink-0">
                <Snowflake weight="duotone" className="w-6 h-6 text-[#ED7772]" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-[#321D16]">Fresh &amp; Frozen Berkualitas</h4>
                <p className="text-xs sm:text-sm text-[#665750] mt-0.5">Higienis, tahan lama di freezer, dan praktis siap kukus.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-[#FBE9E5] shadow-2xs">
              <div className="w-11 h-11 rounded-xl bg-[#FBE9E5] flex items-center justify-center shrink-0">
                <ShieldCheck weight="duotone" className="w-6 h-6 text-[#ED7772]" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-[#321D16]">100% Halal Certified</h4>
                <p className="text-xs sm:text-sm text-[#665750] mt-0.5">Sertifikat resmi MUI No. {BRAND_CONFIG.halalCertNumber}.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu & Storage FAQ */}
      <section className="py-20 lg:py-28 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FBE9E5] text-[#ED7772] text-xs font-bold uppercase tracking-wider">
            <Question weight="duotone" className="w-4 h-4 text-[#ED7772]" />
            <span>PANDUAN PEMESANAN</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#321D16]">
            Informasi Produk &amp; Pengiriman
          </h2>
        </div>

        <div className="space-y-4">
          {menuFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-[24px] border transition-all ${
                  isOpen ? "bg-white border-[#ED7772] shadow-md" : "bg-white/80 border-[#FBE9E5]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left space-x-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-[#321D16]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-[#ED7772] text-white" : "bg-[#FBE9E5] text-[#ED7772]"
                    }`}
                  >
                    {isOpen ? <Minus weight="bold" className="w-4 h-4" /> : <Plus weight="bold" className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#665750] leading-relaxed border-t border-[#FBE9E5]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Halo LalaGi, saya mau tanya menu dan rekomendasi pemesanan 😊")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-9 py-4 rounded-full text-base font-bold bg-[#321D16] hover:bg-[#ED7772] text-white transition-colors shadow-md"
          >
            <WhatsappLogo weight="fill" className="w-5 h-5 text-[#25D366]" />
            <span>Tanya Menu Langsung via WhatsApp</span>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingCta />
    </main>
  );
}
