"use client";

import React from "react";
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloatingCta() {
  return (
    <aside
      aria-label="Hubungi admin LalaGi Dimsum melalui WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5 sm:bottom-5 sm:right-5"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center gap-2.5 rounded-full border border-[#722F37]/25 bg-[#FFFDF9] p-1.5 pr-3.5 shadow-lg sm:gap-3 sm:pr-4">
        <span className="relative size-9 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm sm:size-10">
          <Image
            src="/images/lalagi-whatsapp-admin.webp"
            alt="Admin LalaGi Dimsum"
            fill
            sizes="40px"
            className="object-cover object-top"
          />
        </span>
        <span className="min-w-0 leading-none">
          <strong className="block text-xs font-bold text-[#3A2232] sm:text-sm">Admin</strong>
          <span className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold text-[#735E6C] sm:text-[11px]">
            <span className="size-1.5 shrink-0 rounded-full bg-[#722F37]" aria-hidden="true" />
            Fast Respon
          </span>
        </span>
      </div>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pesan via WhatsApp"
        className="flex size-13 shrink-0 items-center justify-center rounded-full border border-[#722F37] bg-[#722F37] text-white shadow-xl transition-[background-color,color,transform] duration-200 hover:-translate-y-1 hover:bg-[#5F252D] active:translate-y-0 sm:size-14"
      >
        <WhatsappLogo weight="fill" className="size-6" aria-hidden="true" />
      </a>
    </aside>
  );
}
