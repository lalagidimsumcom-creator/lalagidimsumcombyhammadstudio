"use client";

import React from "react";
import Link from "next/link";
import { Star, ArrowRight, CaretRight, Fire } from "@phosphor-icons/react";

export default function EditorialBestSellers() {
  const bestSellers = [
    {
      id: "mentai",
      name: "Dimsum Mentai",
      description: "Dimsum lembut dengan saus mentai creamy gurih favorit semua.",
      badgeText: "🔥 Best Seller No. 1",
      image: "/images/lalagi-dimsum-mentai.jpg",
      isTop: true,
      href: "/menu#mentai",
    },
    {
      id: "cake",
      name: "Dimsum Cake",
      description: "Kue ulang tahun yang gurih, unik dan selalu jadi pusat perhatian.",
      badgeText: "🎂 Special Celebration",
      image: "/images/lalagi-dimsum-cake.jpg",
      isTop: false,
      href: "/dimsum-cake",
    },
    {
      id: "tampah",
      name: "Dimsum Tampah",
      description: "Porsi besar untuk berbagai kebahagiaan bersama keluarga & teman.",
      badgeText: "🥢 Porsi Rame-Rame",
      image: "/images/lalagi-dimsum-tampah.jpg",
      isTop: false,
      href: "/pesanan-acara#tampah",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFDF9] border-t border-[#FBE9E5]/60">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Heading with Icon Decor */}
        <div className="text-center mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FFF0E6] text-[#ED7772] text-xs font-bold uppercase tracking-wider">
            <Fire weight="fill" className="w-3.5 h-3.5 text-[#ED7772]" />
            <span>MENU PALING BANYAK DICARI</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#ED7772]">
            Kenalan Sama Favorit LalaGi <span className="inline-block font-light text-2xl sm:text-4xl align-middle">♡</span>
          </h2>
        </div>

        {/* ── MOBILE: COMPACT HORIZONTAL PRODUCT ROWS (<md) ── */}
        <div className="flex md:hidden flex-col space-y-3.5">
          {bestSellers.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex items-center bg-[#FFFDF9] border border-[#FBE9E5] rounded-2xl p-2.5 shadow-xs hover:shadow-md transition-all active:scale-[0.99] overflow-hidden"
            >
              {/* Left: Product Image 38-40% */}
              <div className="relative w-[38%] h-26 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-[#FFF9F1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Star Badge on top-left of photo */}
                {item.isTop && (
                  <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-[#ED7772] text-white flex items-center space-x-1 shadow-xs text-[10px] font-bold">
                    <Star weight="fill" className="w-3 h-3 text-yellow-300" />
                    <span>Favorit</span>
                  </div>
                )}
              </div>

              {/* Middle: Name + Short Description + Link */}
              <div className="flex-1 px-3.5 space-y-1 text-left min-w-0">
                <h3 className="font-serif-display text-lg font-bold text-[#321D16] group-hover:text-[#ED7772] transition-colors truncate">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#76645D] leading-snug line-clamp-2">
                  {item.description}
                </p>
                <div className="inline-flex items-center space-x-1 text-xs font-bold text-[#ED7772] pt-0.5">
                  <span>Lihat Detail</span>
                  <ArrowRight weight="bold" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Right: Subtle Caret */}
              <div className="pr-2 text-[#76645D]/60 group-hover:text-[#ED7772] transition-colors shrink-0">
                <CaretRight weight="bold" className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* ── DESKTOP: 3-COLUMN DOMINANT CARDS (md+) ── */}
        <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-12">
          {bestSellers.map((item) => (
            <div key={item.id} className="group flex flex-col text-left space-y-4">
              
              {/* Photo Box */}
              <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-[#FFF9F1] shadow-sm group-hover:shadow-lg transition-all duration-300 border border-[#FBE9E5]/80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#321D16] text-xs font-bold flex items-center space-x-1.5 shadow-md border border-white/80">
                  {item.isTop ? (
                    <>
                      <Star weight="fill" className="w-4 h-4 text-[#E4A53A]" />
                      <span>Best Seller No. 1</span>
                    </>
                  ) : (
                    <span>{item.badgeText}</span>
                  )}
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-2 flex-grow">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#321D16] group-hover:text-[#ED7772] transition-colors">
                  {item.name}
                </h3>
                <p className="text-base text-[#665750] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Link CTA */}
              <div className="pt-1">
                <Link
                  href={item.href}
                  className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#ED7772] hover:text-[#D9615C] transition-colors uppercase tracking-wider"
                >
                  <span>Lihat Detail</span>
                  <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
