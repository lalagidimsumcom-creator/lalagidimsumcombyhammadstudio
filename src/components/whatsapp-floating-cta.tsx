"use client";

import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloatingCta() {
  return (
    <aside
      aria-label="Floating WhatsApp CTA"
      className="group fixed bottom-5 right-5 z-40 flex items-center"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <span className="pointer-events-none mr-3 hidden border border-[#B69A63]/45 bg-[#FFFCF7] px-4 py-2 font-serif text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17343D] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:inline-block">
        Chat LalaGi
      </span>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pesan via WhatsApp"
        className="flex size-14 items-center justify-center rounded-full border border-[#B69A63] bg-[#17343D] text-[#F7F3EC] shadow-xl transition-[background-color,color,transform] duration-200 hover:-translate-y-1 hover:bg-[#B69A63] hover:text-[#0E2831] active:translate-y-0"
      >
        <WhatsappLogo weight="fill" className="size-6" aria-hidden="true" />
      </a>
    </aside>
  );
}
