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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#321D16] text-white">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 sm:px-7 md:h-20 lg:px-8">
        <Link href="/" aria-label="LalaGi Dimsum — halaman utama" onClick={() => setMobileOpen(false)} className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-white/25 md:size-11">
            <Image src="/images/lalagi-logo.jpg" alt="" fill sizes="44px" className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none" priority />
          </span>
          <span className="text-[15px] font-semibold tracking-normal text-white sm:text-base md:text-[17px]">LalaGi Dimsum</span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined} className={`relative rounded-sm py-2 text-[13px] font-medium tracking-normal transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}>
                {link.label}
                {isActive && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-white" />}
              </Link>
            );
          })}
        </nav>

        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full border border-white/20 bg-[#E75480] px-5 py-2.5 text-xs font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#C7436D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none xl:inline-flex">
          <WhatsappLogo aria-hidden="true" weight="regular" className="size-4" />
          Pesan
        </a>

        <button type="button" aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)} className="inline-flex size-11 items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none lg:hidden">
          {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <List aria-hidden="true" className="size-6" />}
        </button>
      </div>

      <div id="mobile-navigation" className={`${mobileOpen ? "block" : "hidden"} border-t border-white/10 bg-[#321D16] lg:hidden`}>
        <nav aria-label="Navigasi seluler" className="mx-auto max-w-[1280px] px-5 py-5 sm:px-7">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined} onClick={() => setMobileOpen(false)} className={`border-b border-white/10 py-4 text-sm font-medium tracking-normal transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white motion-reduce:transition-none ${isActive ? "text-white" : "text-white/75 hover:text-white"}`}>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-[#E75480] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#C7436D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none">
            <WhatsappLogo aria-hidden="true" weight="regular" className="size-4" />
            Pesan via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
