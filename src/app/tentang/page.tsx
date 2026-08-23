"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/editorial/navbar";
import Footer from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";
import { Star, Heart, UsersThree, Truck, SealCheck, Radio, ShareNetwork, InstagramLogo, ArrowUpRight, CheckCircle } from "@phosphor-icons/react";
import { BRAND_CONFIG } from "@/data/config";
import { REVIEWS_DATA } from "@/data/reviews";

export default function TentangPage() {
  const milestones = [
    {
      title: "5+ Tahun Berdiri",
      desc: "Konsisten menyajikan olahan dimsum ayam premium dari dapur rumahan di Jagakarsa, Jakarta Selatan.",
      icon: <Heart weight="duotone" className="w-6 h-6 text-[#ED7772]" />
    },
    {
      title: "Sertifikasi Halal Resmi",
      desc: `Terdaftar resmi dengan nomor sertifikat halal ${BRAND_CONFIG.halalCertNumber}, terjamin higienis dan aman.`,
      icon: <SealCheck weight="duotone" className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Liputan Radio RRI",
      desc: "Diapresiasi oleh Radio Republik Indonesia sebagai wirausaha kuliner inovatif di Jakarta Selatan.",
      icon: <Radio weight="duotone" className="w-6 h-6 text-[#ED7772]" />
    },
    {
      title: "Jejaring 3 Retail & 8 Reseller",
      desc: "Tumbuh bersama komunitas UMKM Connect dan dipercaya oleh puluhan mitra reseller di Jabodetabek.",
      icon: <ShareNetwork weight="duotone" className="w-6 h-6 text-[#321D16]" />
    }
  ];

  const instagramFeed = [
    { image: "/images/lalagi-dimsum-cake.jpg", caption: "Dimsum Cake Surprise" },
    { image: "/images/lalagi-dimsum-tampah.png", caption: "Dimsum Tampah 50pcs" },
    { image: "/images/lalagi-dimsum-mentai.jpg", caption: "Mentai Torched Fresh" },
    { image: "/images/lalagi-dimsum-tower.jpg", caption: "Celebration Dimsum Tower" },
    { image: "/images/lalagi-dimsum-kitchen.jpg", caption: "Dapur Jagakarsa" },
    { image: "/images/lalagi-dimsum-hampers.jpg", caption: "Hampers Gift Box" },
  ];

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#321D16] flex flex-col font-sans selection:bg-[#ED7772] selection:text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#FFF9F2] border-b border-[#FBE9E5] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FBE9E5] text-[#ED7772] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Heart weight="fill" className="w-4 h-4 text-[#ED7772]" />
                <span>TENTANG LALAGI DIMSUM</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#321D16] leading-[1.08] tracking-tight">
                Berawal dari Dapur, <br />
                <span className="text-[#ED7772]">Tumbuh Bersama Momen.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#665750] leading-relaxed max-w-xl">
                Lebih dari 5 tahun lalu, kami memulai perjalanan ini dari Jagakarsa dengan satu komitmen sederhana: membuat dimsum ayam yang lezat, jujur, dan membawa kebahagiaan di setiap gigitan.
              </p>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/lalagi-dimsum-kitchen.jpg"
                  alt="Dapur Pembuatan LalaGi Dimsum"
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

      {/* Behind The Kitchen & Empowered Team */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-[32px] overflow-hidden shadow-xl border-4 border-[#FFF9F2]">
              <Image
                src="/images/lalagi-dimsum-original.jpg"
                alt="Dimsum Asli Full Daging Ayam"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 bg-white p-5 rounded-2xl shadow-xl border border-[#FBE9E5] max-w-xs">
              <p className="text-xs font-bold text-[#ED7772] uppercase">Dedikasi Dapur</p>
              <p className="text-sm font-bold text-[#321D16] mt-1">
                Dibuat tanpa bahan pengawet dengan 100% daging ayam segar pilihan.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-[#ED7772] uppercase tracking-wider">BEHIND THE KITCHEN</span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#321D16] leading-tight">
              Dibuat dengan Care oleh Tangan-Tangan Hebat.
            </h2>
            <div className="space-y-4 text-base text-[#665750] leading-relaxed">
              <p>
                Dapur LalaGi di Jagakarsa setiap pagi dihangatkan oleh dedikasi 3 ibu rumah tangga hebat yang telaten mencincang daging ayam segar, menguleni adonan resep rahasia, hingga melipat kulit dimsum satu per satu dengan tangan.
              </p>
              <p>
                Pesanan Anda kemudian dihantarkan oleh 2 armada delivery internal kami yang memastikan setiap boks sampai dalam kondisi rapi, higienis, dan tepat waktu ke meja perayaan Anda di seluruh Jabodetabek.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-[#FFF9F2] border border-[#FBE9E5] text-xs sm:text-sm font-bold text-[#321D16]">
                <UsersThree weight="duotone" className="w-5 h-5 text-[#ED7772]" />
                <span>3 Ibu Berdaya di Dapur</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-[#FFF9F2] border border-[#FBE9E5] text-xs sm:text-sm font-bold text-[#321D16]">
                <Truck weight="duotone" className="w-5 h-5 text-[#ED7772]" />
                <span>2 Armada Kurir Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Milestones & Proof Grid */}
      <section className="py-20 bg-[#FFF9F2] border-y border-[#FBE9E5]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#321D16]">
              Pencapaian &amp; Pengakuan
            </h3>
            <p className="text-base text-[#665750]">
              Bukti konsistensi kualitas, legalitas halal, dan penerimaan masyarakat luas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white rounded-[28px] p-7 border border-[#FBE9E5] shadow-xs text-left space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FBE9E5] flex items-center justify-center">
                  {m.icon}
                </div>
                <h4 className="font-serif-display text-xl font-bold text-[#321D16]">{m.title}</h4>
                <p className="text-xs sm:text-sm text-[#665750] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Love (5.0 Google Rating & Reviews) */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          <div className="lg:col-span-6 space-y-3 text-left">
            <span className="text-xs font-bold text-[#ED7772] uppercase tracking-wider">CUSTOMER REVIEWS</span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#321D16]">
              Cinta dari Pelanggan. 💕
            </h2>
            <div className="flex items-center space-x-3 pt-2">
              <span className="font-serif-display text-4xl font-black text-[#321D16]">{BRAND_CONFIG.googleRating}</span>
              <div className="flex space-x-0.5 text-[#E4A53A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" className="w-5 h-5" />
                ))}
              </div>
              <span className="text-sm text-[#665750]">({BRAND_CONFIG.googleReviewCount}+ ulasan Google Maps)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.reviews.map((rev) => (
            <div key={rev.id} className="bg-white rounded-[28px] p-7 border border-[#FBE9E5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-0.5 text-[#E4A53A]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} weight="fill" className="w-4 h-4" />
                    ))}
                  </div>
                  <span className="inline-flex items-center text-xs text-emerald-600 font-semibold">
                    <CheckCircle weight="fill" className="w-3.5 h-3.5 mr-1" />
                    Google Review
                  </span>
                </div>
                <p className="text-sm text-[#321D16] italic leading-relaxed">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#FBE9E5]">
                <h4 className="text-sm font-bold text-[#321D16]">{rev.author}</h4>
                <p className="text-xs text-[#ED7772] font-semibold">{rev.productOrdered}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Gallery */}
      <section className="py-20 bg-[#FFF9F2] border-t border-[#FBE9E5]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#ED7772] uppercase tracking-wider">INSTAGRAM COMMUNITY</span>
            <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#321D16]">
              Ikuti Keseharian Dapur Kami
            </h3>
            <p className="text-sm sm:text-base text-[#665750]">
              Temukan update menu harian dan behind-the-scenes di Instagram {BRAND_CONFIG.instagramHandle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramFeed.map((item, idx) => (
              <a
                key={idx}
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square w-full rounded-[24px] overflow-hidden bg-white border border-[#FBE9E5] shadow-2xs hover:shadow-md transition-all block"
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#321D16]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <InstagramLogo weight="fill" className="w-8 h-8 text-[#ED7772]" />
                </div>
              </a>
            ))}
          </div>

          <div>
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-[#321D16] hover:bg-[#ED7772] text-white transition-colors"
            >
              <InstagramLogo weight="fill" className="w-5 h-5 text-[#ED7772]" />
              <span>Follow {BRAND_CONFIG.instagramHandle}</span>
              <ArrowUpRight weight="bold" className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingCta />
    </main>
  );
}
