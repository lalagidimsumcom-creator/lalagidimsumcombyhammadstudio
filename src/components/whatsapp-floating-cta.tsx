"use client";

import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloatingCta() {
  return (
    <aside
      aria-label="Floating WhatsApp CTA"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Desktop Tooltip Label */}
      <span className="mr-3 px-4 py-2 rounded-full bg-white text-[#302321] text-xs font-bold shadow-xl border border-[#F7E3E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:inline-block">
        Chat LalaGi Dimsum 🥟
      </span>

      {/* Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pesan via WhatsApp"
        className="relative flex items-center space-x-2 px-5 py-3.5 sm:px-4 sm:py-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Soft pulse glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping -z-10" />

        <WhatsappLogo weight="fill" className="w-7 h-7 text-white" />
        <span className="text-sm font-bold sm:hidden">Pesan via WhatsApp</span>
      </a>
    </aside>
  );
}
