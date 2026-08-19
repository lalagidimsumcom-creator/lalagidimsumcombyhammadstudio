import React from "react";
import EditorialNavbar from "@/components/editorial/navbar";
import EditorialHero from "@/components/editorial/hero";
import EditorialIntentNav from "@/components/editorial/intent-nav";
import EditorialBestSellers from "@/components/editorial/best-sellers";
import EditorialSignatureCake from "@/components/editorial/signature-cake";
import EditorialTrustStrip from "@/components/editorial/trust-strip";
import EditorialFinalCta from "@/components/editorial/final-cta";
import EditorialFooter from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#321D16] flex flex-col font-sans selection:bg-[#ED7772] selection:text-white">
      {/* 00. Sticky Editorial Header */}
      <EditorialNavbar />

      {/* 01. Brand Campaign Hero: "Dimsum untuk Setiap Momen. ♡" */}
      <EditorialHero />

      {/* 02. Intent Navigation: "Mau Dimsum Buat Apa? ♡" */}
      <EditorialIntentNav />

      {/* 03. 3 Best Sellers: "Kenalan Sama Favorit LalaGi ♡" */}
      <EditorialBestSellers />

      {/* 04. Signature Campaign: "Birthday Cake? Coba yang Lebih Gurih. ✨" */}
      <EditorialSignatureCake />

      {/* 05. Dark Cocoa Trust Strip & Prominent Testimonial */}
      <EditorialTrustStrip />

      {/* 06. Playful Full-Width Coral CTA: "Jadi, Hari Ini Mau Dimsum Apa?" */}
      <EditorialFinalCta />

      {/* 07. Refined Warm Footer */}
      <EditorialFooter />

      {/* Sticky Floating WhatsApp */}
      <WhatsAppFloatingCta />
    </main>
  );
}
