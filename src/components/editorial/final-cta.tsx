import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialFinalCta() {
  return (
    <section
      className="bg-lalagi-darknavy px-5 pt-20 pb-16 text-center text-lalagi-white sm:px-8 sm:pt-24 sm:pb-20 lg:pt-28"
      aria-labelledby="final-cta-title"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 text-[0.68rem] font-semibold tracking-[0.32em] text-lalagi-gold sm:text-xs">
          PESAN LANGSUNG DARI DAPUR KAMI
        </p>
        <h2
          id="final-cta-title"
          className="font-serif-display text-3xl leading-tight font-medium tracking-[0.07em] sm:text-4xl lg:text-5xl"
        >
          HARI INI MAU DIMSUM APA?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
          Dari teman ngemil sampai hari spesial, LalaGi siap menemani.
        </p>
        <a
          href={getWhatsAppUrl("Halo LalaGi Dimsum, saya mau pesan dimsum.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-lalagi-gold px-8 py-3 font-serif-display text-xs font-semibold tracking-[0.16em] text-lalagi-darknavy transition-colors duration-200 hover:bg-[#C9AE78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lalagi-white sm:px-10"
        >
          <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
          PESAN VIA WHATSAPP
        </a>
      </div>
    </section>
  );
}
