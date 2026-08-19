"use client";

import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialFinalCta() {
  return (
    <section className="relative bg-[#ED7772] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      
      {/* ── Left Steamer Edge Crop Graphic (Desktop) ── */}
      <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/25 shadow-2xl opacity-80 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lalagi-dimsum-original.jpg"
          alt="Steamer Dimsum"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Top-Right Dimsum with Chopsticks (Positioned at Top-Right Corner) ── */}
      <div className="absolute -top-4 sm:-top-8 md:-top-12 -right-4 sm:-right-6 md:right-0 w-44 sm:w-64 md:w-80 lg:w-[380px] pointer-events-none select-none z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lalagi-cta-chopsticks-transparent.png"
          alt="Dimsum with Chopsticks"
          className="w-full h-auto object-contain transform rotate-6 scale-105 sm:scale-110 drop-shadow-2xl"
        />
      </div>

      {/* Doodles (Hand-drawn Hearts & Sparkles) */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-1/4 text-white/60 text-2xl sm:text-3xl select-none">
        ♡
      </div>
      <div className="absolute bottom-6 left-8 sm:bottom-10 sm:right-1/3 text-white/60 text-3xl sm:text-4xl select-none">
        ♡
      </div>
      <div className="absolute top-12 left-1/3 text-yellow-200/70 text-xl sm:text-2xl select-none hidden md:block">
        ✦
      </div>
      <div className="absolute bottom-10 right-1/4 text-yellow-200/70 text-lg sm:text-xl select-none hidden sm:block">
        ✦
      </div>

      {/* Content Container */}
      <div className="max-w-[840px] mx-auto px-6 sm:px-6 text-center space-y-4 sm:space-y-6 relative z-10">
        
        {/* Headline */}
        <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08]">
          Jadi, Hari Ini <br className="sm:hidden" />
          Mau Dimsum Apa?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg lg:text-xl text-white/95 font-medium max-w-xl mx-auto leading-relaxed">
          Mau untuk ngemil, surprise, atau acara besar? LalaGi siap nemenin.
        </p>

        {/* Big White WhatsApp Button */}
        <div className="pt-2 sm:pt-4">
          <a
            href={getWhatsAppUrl("Halo LalaGi Dimsum, saya mau pesan dimsum")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 sm:space-x-3 px-8 sm:px-11 py-4 sm:py-5 rounded-full bg-white hover:bg-[#FFF9F1] text-[#ED7772] font-black text-sm sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <WhatsappLogo weight="fill" className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366]" />
            <span>Pesan via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
