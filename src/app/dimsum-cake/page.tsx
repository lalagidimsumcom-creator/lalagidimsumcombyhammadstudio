"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/editorial/navbar";
import Footer from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";
import { ArrowRight, Sparkle, Cake, WhatsappLogo, Plus, Minus, CheckCircle } from "@phosphor-icons/react";
import { getCakeWhatsAppUrl } from "@/lib/whatsapp";

export default function DimsumCakePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cakeOptions = [
    {
      title: "Dimsum Cake 25 Pcs",
      badge: "Paling Populer 🎂",
      desc: "Kue ulang tahun gurih yang disusun dari beberapa dimsum dengan baluran saus mentai bakar.",
      price: "Mulai Rp 165.000",
      image: "/images/lalagi-dimsum-cake.jpg",
      features: ["Dimsum Ayam", "Free Cake Topper dan Lilin", "Bisa Custom Tulisan", "Pengiriman Aman dengan Driver LalaGi Dimsum"]
    },
    {
      title: "Dimsum Tower 3 Tingkat",
      badge: "Graduation & Anniversary 🎓",
      desc: "Menara dimsum bertingkat megah 50 hingga 100 pcs untuk selebrasi wisuda, anniversary, dan pesta kejutan besar.",
      price: "Custom Porsi",
      image: "/images/lalagi-dimsum-tower.jpg",
      features: ["3 Tingkat Susunan Megah", "Hiasan Pita & Sparkler Lilin", "Pernah Dipesan Mabes Polri (100 pcs)", "Tampilan Mewah & Eye-Catching"]
    },
    {
      title: "Dimsum Cake Custom Request",
      badge: "Special Concept ✨",
      desc: "Bisa sesuaikan jumlah dimsum, paduan varian rasa, tulisan topper nama, dan greeting card khusus.",
      price: "Konsultasi via WA",
      image: "/images/lalagi-dimsum-hampers.jpg",
      features: ["Bisa Request Tulisan Nama", "Kombinasi Mentai & Mozarella", "Packaging Kotak Estetik", "Siap Antar Tepat Waktu"]
    }
  ];

  const occasions = [
    { title: "Birthday Party", emoji: "🎂", desc: "Momen tiup lilin lebih meriah dan disukai anak-anak hingga orang tua." },
    { title: "Anniversary", emoji: "💍", desc: "Rayakan hari jadi dengan sajian hangat yang penuh makna dan cerita." },
    { title: "Graduation", emoji: "🎓", desc: "Hadiah kelulusan unik pengganti kue tart manis yang mudah dinikmati bersama." },
    { title: "Surprise Gift", emoji: "🎉", desc: "Kejutan tak terduga untuk sahabat atau rekan kantor yang suka makanan gurih." }
  ];

  const cakeFaqs = [
    {
      q: "Berapa lama waktu preorder untuk Dimsum Cake?",
      a: "Kami menyarankan pemesanan H-1 atau H-2 sebelum hari acara agar tim kami dapat menyiapkan topper custom dan jadwal slot pengiriman terbaik. Untuk pemesanan mendadak (same day), silakan chat admin WhatsApp untuk cek ketersediaan slot."
    },
    {
      q: "Apakah sudah termasuk topper dan lilin?",
      a: "Ya! Setiap paket Dimsum Cake sudah gratis cake topper (Happy Birthday / Happy Anniversary / Custom) serta lilin pesta siap pakai."
    },
    {
      q: "Apakah Dimsum Cake aman saat dikirim?",
      a: "Sangat aman. Dimsum Cake ditata di atas tatakan khusus, dikemas dalam boks kue yang kokoh, lalu dikirim dengan driver LalaGi Dimsum agar sampai dengan rapi."
    },
    {
      q: "Apakah bisa request varian dimsum di dalam cakenya?",
      a: "Bisa! Anda dapat memilih dominan varian Dimsum Original, Dimsum Mentai Bakar, atau kombinasi keju sesuai selera Anda."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7F3EF] text-[#321D16] flex flex-col font-sans selection:bg-[#3A3A3A] selection:text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#F7F3EF] border-b border-[#DED7D1] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white text-[#3A3A3A] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs border border-[#DED7D1]">
                <Cake weight="fill" className="w-4 h-4 text-[#3A3A3A]" />
                <span>LALAGI SIGNATURE CELEBRATION</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#321D16] leading-[1.08]">
                Cake Manis? Biasa. <br />
                <span className="text-[#3A3A3A]">Rayain Pakai Dimsum. 🎂</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#665750] leading-relaxed max-w-xl">
                Alternatif kue perayaan gurih dari susunan dimsum ayam padat dan saus mentai bakar. Dibuat spesial untuk ulang tahun, wisuda, anniversary, dan surprise.
              </p>

              <div className="pt-2">
                <a
                  href={getCakeWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base sm:text-lg font-bold bg-[#3A3A3A] hover:bg-[#242424] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                >
                  <WhatsappLogo weight="fill" className="w-5 h-5 mr-2" />
                  <span>Pesan Dimsum Cake Kamu</span>
                  <ArrowRight weight="bold" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-square rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/lalagi-dimsum-cake.jpg"
                  alt="Dimsum Cake LalaGi"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pilihan Dimsum Cake */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white text-[#3A3A3A] text-xs font-bold uppercase tracking-wider border border-[#DED7D1]">
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-[#3A3A3A]" />
            <span>PILIHAN UKURAN &amp; VARIASI</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#321D16]">
            Koleksi Dimsum Cake &amp; Tower
          </h2>
          <p className="text-base text-[#665750]">
            Tersedia berbagai pilihan ukuran dan konsep yang bisa disesuaikan dengan jumlah tamu acaramu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cakeOptions.map((cake, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] overflow-hidden border border-[#DED7D1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-64 bg-[#F7F3EF] overflow-hidden">
                  <Image
                    src={cake.image}
                    alt={cake.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#3A3A3A] shadow-sm">
                    {cake.badge}
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <h3 className="font-serif-display text-2xl font-bold text-[#321D16]">
                    {cake.title}
                  </h3>
                  <p className="text-sm text-[#665750] leading-relaxed">
                    {cake.desc}
                  </p>
                  <div className="space-y-2 pt-2 border-t border-[#DED7D1]">
                    {cake.features.map((f, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm text-[#665750]">
                        <CheckCircle weight="fill" className="w-4 h-4 text-[#3A3A3A] mr-2 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 pb-7 pt-3 flex items-center justify-between border-t border-[#DED7D1]/60">
                <div>
                  <span className="text-xs font-semibold text-[#76645D] uppercase block">Harga</span>
                  <span className="text-base sm:text-lg font-bold text-[#321D16]">{cake.price}</span>
                </div>
                <a
                  href={getCakeWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-bold bg-[#3A3A3A] hover:bg-[#242424] text-white transition-all shadow-xs"
                >
                  <WhatsappLogo weight="fill" className="w-4 h-4 mr-1.5" />
                  <span>Pesan</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cocok Buat Section */}
      <section className="py-20 bg-white/45 border-y border-[#DED7D1]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="font-serif-display text-2xl sm:text-4xl font-normal text-[#321D16]">
              Sempurna untuk Momen Apa Saja
            </h3>
            <p className="text-base text-[#665750]">
              Karena setiap perayaan layak dirayakan dengan makanan yang bikin semua orang senang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occ, idx) => (
              <div key={idx} className="bg-white rounded-[28px] p-6 border border-[#DED7D1] shadow-xs text-left space-y-3">
                <span className="text-3xl block">{occ.emoji}</span>
                <h4 className="font-serif-display text-xl font-bold text-[#321D16]">{occ.title}</h4>
                <p className="text-sm text-[#665750] leading-relaxed">{occ.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-[#3A3A3A] uppercase tracking-wider">CARA PESAN</span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#321D16]">
            4 Langkah Mudah Buat Dimsum Cake
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/60 rounded-[24px] p-6 border border-[#DED7D1] text-left space-y-2">
            <span className="font-serif-display text-3xl font-black text-[#3A3A3A]">01</span>
            <h4 className="font-bold text-lg text-[#321D16]">Pilih Ukuran</h4>
            <p className="text-sm text-[#665750]">Pilih jumlah porsi dimsum (mulai 25 pcs, tower 50-100 pcs, atau custom).</p>
          </div>
          <div className="bg-white/60 rounded-[24px] p-6 border border-[#DED7D1] text-left space-y-2">
            <span className="font-serif-display text-3xl font-black text-[#3A3A3A]">02</span>
            <h4 className="font-bold text-lg text-[#321D16]">Custom Topper</h4>
            <p className="text-sm text-[#665750]">Tentukan tulisan nama / ucapan dan paduan saus favoritmu.</p>
          </div>
          <div className="bg-white/60 rounded-[24px] p-6 border border-[#DED7D1] text-left space-y-2">
            <span className="font-serif-display text-3xl font-black text-[#3A3A3A]">03</span>
            <h4 className="font-bold text-lg text-[#321D16]">Konfirmasi Jadwal</h4>
            <p className="text-sm text-[#665750]">Tentukan jam dan alamat pengiriman di seluruh Jabodetabek.</p>
          </div>
          <div className="bg-white/60 rounded-[24px] p-6 border border-[#DED7D1] text-left space-y-2">
            <span className="font-serif-display text-3xl font-black text-[#3A3A3A]">04</span>
            <h4 className="font-bold text-lg text-[#321D16]">Delivered &amp; Enjoy</h4>
            <p className="text-sm text-[#665750]">Dimsum cake tiba rapi, segar, dan siap jadi pusat perhatian pesta!</p>
          </div>
        </div>
      </section>

      {/* Dimsum Cake FAQs */}
      <section className="py-20 bg-white/45 border-t border-[#DED7D1]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-serif-display text-3xl font-normal text-[#321D16]">
              FAQ Seputar Dimsum Cake
            </h2>
          </div>

          <div className="space-y-4">
            {cakeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`rounded-[24px] border transition-all ${isOpen ? "bg-white border-[#3A3A3A] shadow-md" : "bg-white/80 border-[#DED7D1]"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left space-x-4 focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-[#321D16]">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isOpen ? "bg-[#3A3A3A] text-white" : "bg-[#F7F3EF] text-[#3A3A3A]"}`}>
                      {isOpen ? <Minus weight="bold" className="w-4 h-4" /> : <Plus weight="bold" className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#665750] leading-relaxed border-t border-[#DED7D1]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href={getCakeWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-9 py-4 rounded-full text-base font-bold bg-[#3A3A3A] hover:bg-[#242424] text-white transition-all shadow-lg"
            >
              <WhatsappLogo weight="fill" className="w-5 h-5" />
              <span>Pesan Dimsum Cake via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingCta />
    </main>
  );
}
