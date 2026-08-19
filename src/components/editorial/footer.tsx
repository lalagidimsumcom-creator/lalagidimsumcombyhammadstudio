"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo, InstagramLogo, MapPin, EnvelopeSimple } from "@phosphor-icons/react";
import { BRAND_CONFIG } from "@/data/config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialFooter() {
  return (
    <footer className="bg-[#FFFDF9] text-[#76645D] pt-16 sm:pt-20 pb-12 border-t border-[#FBE9E5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#FBE9E5]/70">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#FBE9E5] shadow-xs">
                <Image
                  src="/images/lalagi-logo.jpg"
                  alt="LalaGi Dimsum"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif-display text-2xl font-bold text-[#321D16]">
                LalaGi <span className="text-[#ED7772]">Dimsum</span>
              </span>
            </Link>

            <p className="text-sm sm:text-base text-[#665750] leading-relaxed max-w-sm font-normal">
              LalaGi Dimsum – Dimsum full ayam berkualitas dibuat dengan bahan terbaik untuk setiap momen spesial dalam hidupmu.
            </p>

            <div className="pt-2">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#ED7772] hover:underline"
              >
                <InstagramLogo weight="fill" className="w-5 h-5" />
                <span>{BRAND_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm sm:text-base uppercase tracking-wider text-[#321D16]">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <Link href="/" className="hover:text-[#ED7772] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#ED7772] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/dimsum-cake" className="hover:text-[#ED7772] transition-colors">
                  Dimsum Cake
                </Link>
              </li>
              <li>
                <Link href="/pesanan-acara" className="hover:text-[#ED7772] transition-colors">
                  Pesanan Acara
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-[#ED7772] transition-colors">
                  Tentang LalaGi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Bantuan */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm sm:text-base uppercase tracking-wider text-[#321D16]">
              Bantuan
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <Link href="/tentang#pemesanan" className="hover:text-[#ED7772] transition-colors">
                  Cara Pemesanan
                </Link>
              </li>
              <li>
                <Link href="/tentang#pengiriman" className="hover:text-[#ED7772] transition-colors">
                  Pengiriman
                </Link>
              </li>
              <li>
                <Link href="/tentang#faq" className="hover:text-[#ED7772] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hubungi Kami */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm sm:text-base uppercase tracking-wider text-[#321D16]">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#665750] hover:text-[#25D366] transition-colors font-medium"
                >
                  <WhatsappLogo weight="fill" className="w-5 h-5 text-[#25D366] shrink-0" />
                  <span>{BRAND_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 font-medium text-[#665750]">
                <MapPin weight="bold" className="w-5 h-5 text-[#ED7772] shrink-0" />
                <span>{BRAND_CONFIG.location}</span>
              </li>
              <li className="flex items-center space-x-2 font-medium text-[#665750]">
                <EnvelopeSimple weight="bold" className="w-5 h-5 text-[#ED7772] shrink-0" />
                <span>hello@lalagidimsum.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs sm:text-sm text-[#76645D]">
          <p>© {new Date().getFullYear()} LalaGi Dimsum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
