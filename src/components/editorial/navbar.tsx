"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, WhatsappLogo, X } from "@phosphor-icons/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Dimsum Cake", href: "/dimsum-cake" },
  { label: "Pesanan Acara", href: "/pesanan-acara" },
  { label: "Tentang", href: "/tentang" },
];

export default function EditorialNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#B69A63]/35 bg-[#17343D] text-[#FFFCF7]">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 sm:px-7 md:h-20 lg:px-8">
        <Link href="/" aria-label="LalaGi Dimsum — halaman utama" onClick={() => setMobileOpen(false)} className="group inline-flex items-center gap-3 rounded-sm font-serif-display focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3B676]">
          <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-[#B69A63] md:size-11">
            <Image src="/images/lalagi-logo.jpg" alt="" fill sizes="44px" className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none" priority />
          </span>
          <span className="text-[15px] font-medium uppercase tracking-[0.2em] text-[#D3B676] sm:text-base md:text-[17px]">LalaGi Dimsum</span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined} className={`relative rounded-sm py-2 font-serif-display text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3B676] motion-reduce:transition-none ${isActive ? "text-[#D3B676]" : "text-[#FFFCF7] hover:text-[#D3B676]"}`}>
                {link.label}
                {isActive && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-[#D3B676]" />}
              </Link>
            );
          })}
        </nav>

        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 border border-[#B69A63] px-4 py-2.5 font-serif-display text-[11px] font-medium uppercase tracking-[0.14em] text-[#FFFCF7] transition-colors duration-200 hover:bg-[#B69A63] hover:text-[#17343D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3B676] motion-reduce:transition-none xl:inline-flex">
          <WhatsappLogo aria-hidden="true" weight="regular" className="size-4" />
          Pesan
        </a>

        <button type="button" aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)} className="inline-flex size-11 items-center justify-center rounded-sm text-[#FFFCF7] transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D3B676] motion-reduce:transition-none lg:hidden">
          {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <List aria-hidden="true" className="size-6" />}
        </button>
      </div>

      <div id="mobile-navigation" className={`${mobileOpen ? "block" : "hidden"} border-t border-[#B69A63]/35 bg-[#17343D] lg:hidden`}>
        <nav aria-label="Navigasi seluler" className="mx-auto max-w-[1280px] px-5 py-5 sm:px-7">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined} onClick={() => setMobileOpen(false)} className={`border-b border-white/10 py-4 font-serif-display text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D3B676] motion-reduce:transition-none ${isActive ? "text-[#D3B676]" : "text-[#FFFCF7] hover:text-[#D3B676]"}`}>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-[#B69A63] bg-[#B69A63] px-5 py-3.5 font-serif-display text-xs font-semibold uppercase tracking-[0.16em] text-[#17343D] transition-colors duration-200 hover:bg-[#D3B676] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3B676] motion-reduce:transition-none">
            <WhatsappLogo aria-hidden="true" weight="regular" className="size-4" />
            Pesan via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
