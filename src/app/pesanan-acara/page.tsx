"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/editorial/navbar";
import Footer from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";
import { ArrowRight, CheckCircle, Buildings, ShieldCheck, UsersThree, WhatsappLogo, Plus, Minus, Sparkle } from "@phosphor-icons/react";
import { getEventWhatsAppUrl } from "@/lib/whatsapp";

export default function PesananAcaraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const eventUseCases = [
    {
      title: "Wedding & Resepsi",
      desc: "Stall dimsum hangat dengan live steam atau sajian tampah elegan yang selalu jadi antrean favorit tamu undangan.",
      image: "/images/lalagi-dimsum-tampah.jpg"
    },
    {
      title: "Meeting & Corporate Event",
      desc: "Konsumsi rapat kantor dan seminar yang praktis, higienis, halal, dan kenyang tanpa repot piring kotor.",
      image: "/images/lalagi-dimsum-event.jpg"
    },
    {
      title: "Arisan & Gathering Keluarga",
      desc: "Sajian Dimsum Tampah 50-100 pcs yang ditaruh di tengah meja untuk dinikmati bersama seluruh generasi.",
      image: "/images/lalagi-dimsum-original.jpg"
    }
  ];

  const realOrders = [
    {
      institution: "RS Jantung Harapan Kita",
      quantity: "200 PCS",
      category: "Hospital & Corporate Order",
      desc: "Pesanan 200 porsi dimsum ayam hangat untuk konsumsi acara internal tenaga medis dan staf rumah sakit.",
      icon: <Buildings weight="duotone" className="w-6 h-6 text-[#ED7772]" />
    },
    {
      institution: "Mabes Polri",
      quantity: "100 PCS",
      category: "Institutional Gathering",
      desc: "Kreasi Dimsum Tower megah 100 pcs untuk selebrasi acara spesial dan ramah tamah korps.",
      icon: <ShieldCheck weight="duotone" className="w-6 h-6 text-[#ED7772]" />
    },
    {
      institution: "Private Wedding Stall",
      quantity: "500+ PCS",
      category: "Wedding Reception Catering",
      desc: "Sajian live steam dimsum ayam full daging dengan saus mentai bakar dan chili oil racikan khas LalaGi.",
      icon: <UsersThree weight="duotone" className="w-6 h-6 text-[#ED7772]" />
    }
  ];

  const eventFaqs = [
    {
      q: "Berapa minimal order untuk pesanan acara kantor atau gathering?",
      a: "Untuk pesanan paket porsi acara atau Dimsum Tampah, minimal pemesanan mulai dari 30-50 pcs. Untuk pesanan ratusan porsi, kami menyarankan konfirmasi H-2 atau H-3."
    },
    {
      q: "Apakah makanan dikirim dalam keadaan siap santap (hangat)?",
      a: "Ya! Pesanan acara kami jadwalkan dikirim dekat dengan waktu mulai acara sehingga dimsum tiba dalam kondisi hangat, wangi, dan langsung siap disajikan kepada tamu."
    },
    {
      q: "Apakah bisa menerbitkan invoice atau bukti pembayaran untuk kantor?",
      a: "Bisa. Tim admin kami siap menerbitkan invoice dan kuitansi resmi untuk keperluan reimbursement atau administrasi kantor Anda."
    },
    {
      q: "Bagaimana cara konsultasi menu dan porsi yang cocok?",
      a: "Cukup klik tombol 'Konsultasi Pesanan Acara' di halaman ini, sampaikan jumlah tamu dan konsep acaramu, tim LalaGi akan memberikan rekomendasi porsi dan penawaran terbaik."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#321D16] flex flex-col font-sans selection:bg-[#ED7772] selection:text-white">
      <Navbar />

      {/* Hero Banner (Deep Dark Cocoa) */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#321D16] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#ED7772]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-[#ED7772] text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/15">
                <UsersThree weight="duotone" className="w-4 h-4" />
                <span>BULK &amp; EVENT CATERING</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-white leading-[1.08] tracking-tight">
                Dimsum Buat <br />
                <span className="text-[#ED7772]">Rame-rame? Bisa.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
                Wedding, meeting kantor, arisan keluarga, gathering komunitas, hingga syukuran. LalaGi siap menyajikan dimsum hangat porsi besar dengan rasa yang selalu konsisten.
              </p>

              <div className="pt-2">
                <a
                  href={getEventWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base sm:text-lg font-bold bg-[#ED7772] hover:bg-[#D9615C] text-white shadow-xl hover:scale-105 transition-all group"
                >
                  <WhatsappLogo weight="fill" className="w-5 h-5 mr-2" />
                  <span>Konsultasi Pesanan Acara</span>
                  <ArrowRight weight="bold" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/15">
                <Image
                  src="/images/lalagi-dimsum-event.jpg"
                  alt="Sajian Acara LalaGi Dimsum"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Real Orders Proof */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FBE9E5] text-[#ED7772] text-xs font-bold uppercase tracking-wider">
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-[#E4A53A]" />
            <span>REAL ORDER HIGHLIGHTS</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#321D16]">
            Dipercaya untuk Berbagai Acara Besar
          </h2>
          <p className="text-base text-[#665750]">
            Beberapa rekam jejak pesanan berskala besar yang telah sukses kami layani dengan tepat waktu dan rasa maksimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {realOrders.map((order, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-8 border border-[#FBE9E5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FBE9E5] flex items-center justify-center">
                    {order.icon}
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#321D16] text-white font-extrabold text-xs">
                    {order.quantity}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#ED7772] uppercase tracking-wider block">
                    {order.category}
                  </span>
                  <h3 className="font-serif-display text-2xl font-bold text-[#321D16] mt-1">
                    {order.institution}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#665750] leading-relaxed">
                  {order.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#FBE9E5] flex items-center text-xs sm:text-sm font-semibold text-emerald-600">
                <CheckCircle weight="fill" className="w-4.5 h-4.5 mr-1.5 text-emerald-600" />
                <span>Pengiriman Tepat Waktu &amp; Hangat</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jenis Acara Grid */}
      <section className="py-20 bg-[#FFF9F2] border-y border-[#FBE9E5]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#321D16]">
              Pilihan Sajian Sesuai Konsep Acara
            </h3>
            <p className="text-base text-[#665750]">
              Dari prasmanan intimate hingga stall wedding berkapasitas ratusan porsi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventUseCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-[32px] overflow-hidden border border-[#FBE9E5] shadow-xs">
                <div className="relative w-full h-56 bg-[#FFF9F2]">
                  <Image src={useCase.image} alt={useCase.title} fill className="object-cover" />
                </div>
                <div className="p-7 space-y-2 text-left">
                  <h4 className="font-serif-display text-2xl font-bold text-[#321D16]">{useCase.title}</h4>
                  <p className="text-sm text-[#665750] leading-relaxed">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Pesan Acara */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-[#ED7772] uppercase tracking-wider">CARA KONSULTASI</span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#321D16]">
            Mudahnya Menyiapkan Dimsum untuk Acaramu
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="bg-[#FFF9F2] rounded-[24px] p-6 border border-[#FBE9E5] space-y-2">
            <span className="font-serif-display text-3xl font-black text-[#ED7772]">01</span>
            <h4 className="font-bold text-lg text-[#321D16]">Jumlah Tamu</h4>
            <p className="text-sm text-[#665750]">Estimasi berapa porsi atau pax yang kamu perlukan untuk tamu acaramu.</p>
          </div>
          <div className="bg-[#FFF9F2] rounded-[24px] p-6 border border-[#FBE9E5] space-y-2">
            <span className="font-serif-display text-3xl font-black text-[#ED7772]">02</span>
            <h4 className="font-bold text-lg text-[#321D16]">Tanggal &amp; Waktu</h4>
            <p className="text-sm text-[#665750]">Tentukan hari, tanggal, serta jam sajian harus tiba di lokasi acara.</p>
          </div>
          <div className="bg-[#FFF9F2] rounded-[24px] p-6 border border-[#FBE9E5] space-y-2">
            <span className="font-serif-display text-3xl font-black text-[#ED7772]">03</span>
            <h4 className="font-bold text-lg text-[#321D16]">Pilihan Menu</h4>
            <p className="text-sm text-[#665750]">Pilih kombinasi Dimsum Tampah, Mentai, Original, atau Dimsum Tower.</p>
          </div>
          <div className="bg-[#FFF9F2] rounded-[24px] p-6 border border-[#FBE9E5] space-y-2">
            <span className="font-serif-display text-3xl font-black text-[#ED7772]">04</span>
            <h4 className="font-bold text-lg text-[#321D16]">Siap Diantar</h4>
            <p className="text-sm text-[#665750]">Tim kami antar tepat waktu dalam keadaan hangat ke venue acaramu.</p>
          </div>
        </div>
      </section>

      {/* Event FAQs */}
      <section className="py-20 bg-[#FFF9F2] border-t border-[#FBE9E5]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-serif-display text-3xl font-normal text-[#321D16]">
              FAQ Pesanan Acara &amp; Katering
            </h2>
          </div>

          <div className="space-y-4">
            {eventFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`rounded-[24px] border transition-all ${isOpen ? "bg-white border-[#ED7772] shadow-md" : "bg-white/80 border-[#FBE9E5]"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left space-x-4 focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-[#321D16]">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isOpen ? "bg-[#ED7772] text-white" : "bg-[#FBE9E5] text-[#ED7772]"}`}>
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
              href={getEventWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-9 py-4 rounded-full text-base font-bold bg-[#321D16] hover:bg-[#ED7772] text-white transition-all shadow-lg"
            >
              <WhatsappLogo weight="fill" className="w-5 h-5 text-[#25D366]" />
              <span>Ceritain Acaramu via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingCta />
    </main>
  );
}
