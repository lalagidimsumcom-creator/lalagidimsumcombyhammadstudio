"use client";

import React from "react";
import Link from "next/link";
import { BowlFood, Cake, UsersThree, ArrowRight, Sparkle } from "@phosphor-icons/react";

export default function EditorialIntentNav() {
  const occasions = [
    {
      id: "everyday",
      title: "Everyday Dimsum",
      subtitle: "Buat ngemil & stok praktis di rumah",
      tag: "🥟 Fresh & Frozen",
      href: "/menu",
      buttonText: "Pesan Sekarang",
      image: "/images/lalagi-dimsum-original.jpg",
      icon: BowlFood,
    },
    {
      id: "special",
      title: "Special Moments",
      subtitle: "Birthday, anniversary & surprise",
      tag: "🎂 Free Topper & Lilin",
      href: "/dimsum-cake",
      buttonText: "Pesan Sekarang",
      image: "/images/lalagi-dimsum-cake.jpg",
      icon: Cake,
    },
    {
      id: "big",
      title: "Big Moments",
      subtitle: "Gathering, wedding & acara kantor",
      tag: "🥢 Porsi Tampah Jumbo",
      href: "/pesanan-acara",
      buttonText: "Pesan Sekarang",
      image: "/images/lalagi-dimsum-tampah.jpg",
      icon: UsersThree,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFDF9]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Heading with Sparkle Decor */}
        <div className="text-center mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FBE9E5] text-[#ED7772] text-xs font-bold uppercase tracking-wider">
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-[#E4A53A]" />
            <span>PILIHAN MOMEN SPESIAL</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#ED7772]">
            Mau Dimsum Buat Apa? <span className="inline-block font-light text-2xl sm:text-4xl align-middle">♡</span>
          </h2>
        </div>

        {/* 3 Intent Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {occasions.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#321D16] text-white shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Top Container */}
                <div className="relative h-52 sm:h-64 lg:h-76 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#321D16] via-transparent to-black/20" />
                  
                  {/* Floating White Icon Pill */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#ED7772] shadow-md flex items-center justify-center">
                    <IconComponent weight="bold" className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Floating Tag Top Right */}
                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] sm:text-xs font-bold border border-white/20">
                    {item.tag}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-7 sm:pt-4 flex flex-col justify-between flex-grow">
                  <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                    <h3 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-normal text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Action Link Button */}
                  <Link
                    href={item.href}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 sm:py-4 px-5 rounded-full bg-[#ED7772] hover:bg-[#D9615C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs hover:scale-[1.02] active:scale-95"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
