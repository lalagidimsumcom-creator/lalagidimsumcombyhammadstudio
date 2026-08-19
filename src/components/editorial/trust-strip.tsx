"use client";

import React from "react";
import { Star, Medal, Quotes, CheckCircle } from "@phosphor-icons/react";

export default function EditorialTrustStrip() {
  return (
    <section className="bg-[#321D16] text-[#FFF9F1] py-16 lg:py-20 border-b border-[#432719]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 4 Prominent Real Logos & Badges */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center items-start">
            
            {/* Metric 1: Google Reviews Official Logo */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg border-2 border-white/30 hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-google-reviews.png"
                  alt="Google Reviews 5 Stars"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-white leading-tight">5.0 ★</div>
                <div className="text-xs sm:text-sm text-gray-200 font-semibold">Google Rating</div>
              </div>
            </div>

            {/* Metric 2: Halal Indonesia Official Logo */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg border-2 border-white/30 hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-halal-indonesia.jpg"
                  alt="Halal Indonesia BPJPH MUI"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-white leading-tight">Halal</div>
                <div className="text-xs sm:text-sm text-gray-200 font-semibold">Certified Resmi</div>
              </div>
            </div>

            {/* Metric 3: RRI Official Logo */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg border-2 border-white/30 hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-rri.png"
                  alt="Radio Republik Indonesia (RRI)"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-white leading-tight">RRI</div>
                <div className="text-xs sm:text-sm text-gray-200 font-semibold">Liputan Resmi</div>
              </div>
            </div>

            {/* Metric 4: 5+ Tahun Pengalaman */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-[#432719] to-[#25140D] flex items-center justify-center shadow-lg border-2 border-[#E4A53A]/40 hover:scale-105 transition-transform">
                <Medal weight="fill" className="w-10 h-10 text-[#E4A53A]" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-white leading-tight">5+ Tahun</div>
                <div className="text-xs sm:text-sm text-gray-200 font-semibold">Pengalaman</div>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Real Testimonial Quote with Large Readable Typography */}
          <div className="lg:col-span-6 lg:border-l-2 lg:border-white/15 lg:pl-10 space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <Quotes weight="fill" className="w-10 h-10 sm:w-12 sm:h-12 text-[#ED7772] shrink-0" />
              <div className="space-y-3">
                <p className="font-serif-display text-xl sm:text-2xl lg:text-[26px] text-white italic leading-relaxed">
                  &ldquo;Rasanya enak, bahan berkualitas, dan selalu jadi andalan tiap ada acara di keluarga kami.&rdquo;
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center space-x-1.5 text-sm sm:text-base text-gray-200 font-bold">
                    <span>— Rina, Pelanggan Setia LalaGi</span>
                    <CheckCircle weight="fill" className="w-4.5 h-4.5 text-[#25D366]" />
                  </div>
                  <div className="flex items-center space-x-1 text-[#E4A53A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="w-5 h-5" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
