"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsappLogo, List, X, ArrowUpRight } from "@phosphor-icons/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Dimsum Cake", href: "/dimsum-cake" },
    { label: "Pesanan Acara", href: "/pesanan-acara" },
    { label: "Tentang LalaGi", href: "/tentang" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#FBE9E5] transition-all">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-xs border border-[#FBE9E5] group-hover:scale-105 transition-transform">
            <Image
              src="/images/lalagi-logo.jpg"
              alt="LalaGi Dimsum"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-[#321D16]">
              LalaGi <span className="text-[#ED7772]">Dimsum</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors py-1 ${
                  isActive
                    ? "text-[#ED7772] font-bold"
                    : "text-[#76645D] hover:text-[#ED7772]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ED7772] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#ED7772] hover:bg-[#D9615C] text-white transition-all shadow-xs hover:shadow hover:scale-105"
          >
            <WhatsappLogo weight="fill" className="w-4 h-4" />
            <span>Pesan via WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="p-2 -mr-1 text-[#321D16] focus:outline-none rounded-xl active:bg-[#FBE9E5]/60 transition-colors"
          >
            {mobileOpen ? <X weight="bold" className="w-6 h-6" /> : <List weight="bold" className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Clean, Accessible & Full-Featured) */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FFFDF9] border-b border-[#FBE9E5] px-6 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between text-base font-semibold py-3 border-b border-[#FBE9E5]/60 ${
                    isActive ? "text-[#ED7772] font-bold" : "text-[#321D16]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight weight="bold" className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full text-base font-bold bg-[#ED7772] text-white shadow-md active:bg-[#D9615C] transition-all"
            >
              <WhatsappLogo weight="fill" className="w-5 h-5" />
              <span>Pesan via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
