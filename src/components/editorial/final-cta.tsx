import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialFinalCta() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#ED7772] px-5 py-20 text-center text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="final-cta-title"
    >
      <div className="pointer-events-none absolute -left-20 top-1/2 hidden size-72 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white/25 opacity-85 shadow-[0_24px_60px_rgba(90,33,29,0.3)] lg:block xl:-left-14 xl:size-80">
        <Image
          src="/images/lalagi-dimsum-original.jpg"
          alt=""
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute -right-12 -top-8 z-0 w-48 rotate-6 select-none sm:-right-8 sm:-top-14 sm:w-72 lg:right-0 lg:w-[360px] xl:w-[410px]">
        <Image
          src="/images/lalagi-cta-chopsticks-transparent.png"
          alt=""
          width={760}
          height={760}
          sizes="(max-width: 639px) 192px, (max-width: 1023px) 288px, 410px"
          className="h-auto w-full object-contain drop-shadow-2xl"
        />
      </div>

      <span aria-hidden="true" className="absolute left-[8%] top-8 text-3xl text-white/45">♡</span>
      <span aria-hidden="true" className="absolute bottom-8 right-[24%] hidden text-2xl text-[#FFF0C5]/80 sm:block">✦</span>

      <div className="relative z-10 mx-auto max-w-[820px]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-xs">
          Pesan langsung dari dapur kami
        </p>
        <h2
          id="final-cta-title"
          className="mt-5 text-balance font-serif-display text-3xl font-medium leading-tight tracking-[0.035em] text-white sm:text-5xl lg:text-6xl"
        >
          Jadi, hari ini mau dimsum apa?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-7 text-white/90 sm:text-lg">
          Mau untuk ngemil, surprise, atau acara besar? LalaGi siap nemenin.
        </p>
        <a
          href={getWhatsAppUrl("Halo LalaGi Dimsum, saya mau pesan dimsum")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#D9615C] shadow-[0_14px_35px_rgba(90,33,29,0.24)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:bg-[#F7F3EF] hover:shadow-[0_18px_45px_rgba(90,33,29,0.3)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-11 sm:text-lg"
        >
          <WhatsappLogo weight="fill" className="size-5 text-[#25D366] sm:size-6" aria-hidden="true" />
          Pesan via WhatsApp
        </a>
      </div>
    </section>
  );
}
