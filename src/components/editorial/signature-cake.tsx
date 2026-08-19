"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkle, CheckCircle, Cake, Truck } from "@phosphor-icons/react";

export default function EditorialSignatureCake() {
  const highlights = [
    { text: "100% Full Daging Ayam Pilihan", icon: CheckCircle },
    { text: "Gratis Topper Kayu & Lilin Ulang Tahun", icon: Cake },
    { text: "Kirim Instant / Sameday Jabodetabek", icon: Truck },
  ];

  return (
    <section className="relative w-full bg-[#FFF9F1] border-y border-[#FBE9E5] overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[480px] lg:min-h-[540px] xl:min-h-[580px]">
        
        {/* Left Half: 50% Full-Bleed Edge-to-Edge Photography */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-auto min-h-[320px] md:min-h-full overflow-hidden bg-[#321D16]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lalagi-dimsum-cake.jpg"
            alt="LalaGi Signature Dimsum Cake"
            className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
          />
          {/* Floating Tag */}
          <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-bold flex items-center space-x-1.5 border border-white/20">
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-[#E4A53A]" />
            <span>Signature Birthday Favorite</span>
          </div>
          {/* Subtle Right Edge Gradient Fade */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFF9F1]/40 to-transparent pointer-events-none" />
        </div>

        {/* Right Half: Editorial Headline & Content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 text-left space-y-6">
          
          {/* Eyebrow Sparkle Accent */}
          <div className="inline-flex items-center space-x-2 text-[#E4A53A]">
            <Sparkle weight="fill" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#76645D]">
              LALAGI SIGNATURE CELEBRATION
            </span>
          </div>

          {/* Editorial Headline */}
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#321D16] leading-[1.08]">
            Birthday Cake? <br />
            <span className="text-[#ED7772] font-semibold">Coba yang Lebih Gurih.</span>{" "}
            <span className="inline-block text-[#E4A53A] text-2xl sm:text-3xl ml-1">✨</span>
          </h2>

          {/* Body Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#665750] leading-[1.7] max-w-lg font-normal">
            Dimsum Cake LalaGi, kombinasi rasa gurih, tekstur lembut, dan tampilan yang bikin momen ulang tahun makin berkesan.
          </p>

          {/* Highlight Checklist with Icons */}
          <div className="space-y-2.5 pt-1">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center space-x-2.5 text-sm sm:text-base font-semibold text-[#321D16]">
                  <IconComp weight="fill" className="w-5 h-5 text-[#ED7772] shrink-0" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center space-x-6">
            <Link
              href="/dimsum-cake"
              className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-[#ED7772] hover:bg-[#D9615C] text-white font-bold text-base sm:text-lg shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-95 transition-all"
            >
              <span>Explore Dimsum Cake</span>
              <ArrowRight weight="bold" className="w-4.5 h-4.5" />
            </Link>

            {/* Playful Heart Doodle */}
            <span className="text-[#ED7772] text-3xl font-light select-none transform rotate-12">
              ♡
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
