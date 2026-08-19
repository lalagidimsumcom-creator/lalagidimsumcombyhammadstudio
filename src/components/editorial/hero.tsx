"use client";

import React from "react";
import Link from "next/link";
import { WhatsappLogo, SealCheck, CaretRight, Sparkle, Fire } from "@phosphor-icons/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialHero() {
  const avatars = [
    "/images/avatar-1.jpg",
    "/images/avatar-2.jpg",
    "/images/avatar-3.jpg",
    "/images/avatar-4.jpg",
  ];

  return (
    <section className="relative w-full bg-[#FFF9F2] overflow-hidden min-h-[660px] lg:min-h-[700px] xl:min-h-[740px] flex flex-col justify-center md:flex-row md:items-center border-b border-[#FBE9E5]/60">
      
      {/* ── DESKTOP INTEGRATED FOOD CANVAS (Seamless Feathered Blend) ── */}
      <div 
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[54%] lg:w-[58%] xl:w-[62%] z-0 pointer-events-none select-none overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 5%, rgba(0,0,0,0.08) 12%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.65) 42%, rgba(0,0,0,0.85) 55%, black 70%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 5%, rgba(0,0,0,0.08) 12%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.65) 42%, rgba(0,0,0,0.85) 55%, black 70%, black 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lalagi-dimsum-tampah.jpg"
          alt="LalaGi Dimsum Platter"
          className="w-full h-full object-cover object-center scale-110 lg:scale-105 xl:scale-100 transform translate-x-4 transition-transform duration-1000 ease-out"
        />

        {/* Soft Cream Gradient Bleed on Left Edge */}
        <div className="absolute inset-y-0 left-0 w-48 sm:w-64 lg:w-80 bg-gradient-to-r from-[#FFF9F2] via-[#FFF9F2]/80 via-40% to-transparent pointer-events-none" />

        {/* Floating Decorative Label Pill on Desktop */}
        <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-lg flex items-center space-x-2 text-[#321D16] text-xs font-bold pointer-events-auto">
          <Fire weight="fill" className="w-4 h-4 text-[#ED7772]" />
          <span>100% Full Ayam Segar</span>
        </div>

        {/* Subtle Ambient Light Wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F2]/30 via-transparent to-[#FFF9F2]/15 pointer-events-none" />
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-8 pt-8 pb-4 md:py-16 lg:py-18">
        <div className="max-w-[620px] lg:max-w-[660px] text-left space-y-5 sm:space-y-6 lg:space-y-7">
          
          {/* 1. Halal Certified Badge + Sparkle Icon */}
          <div className="flex items-center space-x-2.5">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ED7772] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
              <SealCheck weight="fill" className="w-4.5 h-4.5 text-white animate-pulse" />
              <span>HALAL CERTIFIED • JAGAKARSA</span>
            </div>
            <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FBE9E5] text-[#ED7772] text-xs font-bold">
              <Sparkle weight="fill" className="w-3.5 h-3.5 text-[#E4A53A]" />
              <span>Full Daging Ayam</span>
            </div>
          </div>

          {/* 2. Main Dominant Editorial Headline (Mochiy Pop One Display) */}
          <h1 className="font-serif-display text-[40px] sm:text-5xl lg:text-[62px] xl:text-[70px] font-normal tracking-normal leading-[1.08] text-[#321D16]">
            Dimsum untuk <br />
            <span className="text-[#ED7772]">Setiap Momen.</span>
            {/* Hand-drawn SVG Heart Doodle */}
            <svg
              className="inline-block w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#ED7772] -rotate-12 ml-2.5 align-baseline"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </h1>

          {/* 3. Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#665750] leading-[1.68] max-w-[520px] font-normal">
            Dimsum full ayam berkualitas, dibuat dengan bahan terbaik untuk menemani momen sehari-hari hingga perayaan istimewa bersama orang tersayang.
          </p>

          {/* 4. Action Buttons (CTA Row) */}
          <div className="flex items-center gap-3 sm:gap-4 pt-1">
            {/* Primary: Pesan Sekarang */}
            <a
              href={getWhatsAppUrl("Halo LalaGi Dimsum, saya mau pesan dimsum")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[1.1] sm:flex-initial inline-flex items-center justify-center space-x-2.5 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-full bg-[#ED7772] hover:bg-[#D9615C] text-white font-bold text-sm sm:text-base md:text-lg shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all text-center"
            >
              <WhatsappLogo weight="fill" className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" />
              <span className="whitespace-nowrap">Pesan Sekarang</span>
            </a>

            {/* Secondary: Lihat Menu */}
            <Link
              href="/menu"
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-4 sm:px-7 py-3.5 sm:py-4.5 rounded-full bg-[#FFF9F2] hover:bg-white border border-[#321D16]/25 hover:border-[#321D16]/70 text-[#321D16] font-bold text-sm sm:text-base md:text-lg transition-all text-center"
            >
              <span className="whitespace-nowrap">Lihat Menu</span>
              <CaretRight weight="bold" className="w-4 h-4 text-[#321D16] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 5. Clean, Refined Customer Proof with Real Portrait Avatars */}
          <div className="pt-2 flex items-center space-x-3.5">
            {/* 4 Overlapping Real Customer Avatars */}
            <div className="flex -space-x-2.5 overflow-hidden shrink-0">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-white shadow-xs bg-[#FBE9E5]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Pelanggan LalaGi ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Clear, Readable Supporting Text */}
            <p className="text-xs sm:text-sm text-[#76645D] font-semibold leading-snug">
              Dipercaya ribuan pelanggan <br className="sm:hidden" />
              untuk setiap momennya.
            </p>
          </div>

        </div>
      </div>

      {/* ── MOBILE IMMERSIVE FOOD SECTION ── */}
      <div className="block md:hidden w-full px-5 pb-8 pt-3">
        <div className="relative w-full h-[340px] sm:h-[390px] rounded-3xl overflow-hidden shadow-md border border-[#FBE9E5]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lalagi-dimsum-tampah.jpg"
            alt="LalaGi Dimsum Platter"
            className="w-full h-full object-cover object-center"
          />
          {/* Floating Pill on Mobile Image */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-bold flex items-center space-x-1.5">
            <Fire weight="fill" className="w-3.5 h-3.5 text-[#ED7772]" />
            <span>Dimsum Tampah Signature</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

    </section>
  );
}
