import React from "react";
import EditorialNavbar from "@/components/editorial/navbar";
import EditorialHero from "@/components/editorial/hero";
import EditorialSignatureCake from "@/components/editorial/signature-cake";
import EditorialProductGallery from "@/components/editorial/product-gallery";
import EditorialTrustStrip from "@/components/editorial/trust-strip";
import EditorialClientWall from "@/components/editorial/client-wall";
import EditorialFinalCta from "@/components/editorial/final-cta";
import EditorialFooter from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F3EF] text-[#3A2232] font-sans">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-[#E75480] px-4 py-3 font-bold text-white transition-transform focus-visible:translate-y-0"
      >
        Lewati ke Konten
      </a>
      <EditorialNavbar />

      <main id="main-content">
        <EditorialHero />
        <EditorialTrustStrip />
        <EditorialClientWall />
        <EditorialSignatureCake />
        <EditorialProductGallery />
        <EditorialFinalCta />
      </main>

      <EditorialFooter />
      <WhatsAppFloatingCta />
    </div>
  );
}
