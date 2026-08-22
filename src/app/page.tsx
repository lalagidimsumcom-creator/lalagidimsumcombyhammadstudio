import React from "react";
import EditorialNavbar from "@/components/editorial/navbar";
import EditorialHero from "@/components/editorial/hero";
import EditorialIntentNav from "@/components/editorial/intent-nav";
import EditorialSignatureCake from "@/components/editorial/signature-cake";
import EditorialTrustStrip from "@/components/editorial/trust-strip";
import EditorialFinalCta from "@/components/editorial/final-cta";
import EditorialFooter from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#17343D] font-sans">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-[#B69A63] px-4 py-3 font-bold text-[#0E2831] transition-transform focus-visible:translate-y-0"
      >
        Lewati ke Konten
      </a>
      <EditorialNavbar />

      <main id="main-content">
        <EditorialHero />
        <EditorialIntentNav />
        <EditorialTrustStrip />
        <EditorialSignatureCake />
        <EditorialFinalCta />
      </main>

      <EditorialFooter />
      <WhatsAppFloatingCta />
    </div>
  );
}
