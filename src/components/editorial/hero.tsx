import Image from "next/image";
import Link from "next/link";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#EADDE5] bg-[#F7F3EF] md:min-h-[calc(100dvh-80px)] md:flex md:items-center lg:min-h-[720px]">
      <div className="hero-image-mask pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] select-none md:block lg:w-[60%]">
        <Image
          src="/images/lalagi-dimsum-tampah.png"
          alt=""
          fill
          priority
          loading="eager"
          sizes="(min-width: 1024px) 60vw, 62vw"
          className="object-cover object-[center_68%]"
        />
        <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-[#F7F3EF] via-[#F7F3EF]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EF]/20 via-transparent to-[#F7F3EF]/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 md:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div className="max-w-[36rem] md:w-[46%]">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#E75480] sm:text-xs">
            Homemade <span aria-hidden="true">•</span> Halal <span aria-hidden="true">•</span> 90% Daging Ayam
          </p>
          <span aria-hidden="true" className="mt-6 block h-px w-10 bg-[#E75480]" />

          <h1 className="mt-7 font-serif-display text-[2.45rem] font-normal leading-[1.06] tracking-[-0.025em] text-[#3A2232] sm:text-[3.15rem] md:text-[3.3rem] lg:text-[3.55rem] xl:text-[3.7rem]">
            <span className="block sm:whitespace-nowrap">Dimsum Premium</span>
            <span className="block sm:whitespace-nowrap">untuk Setiap Momen</span>
          </h1>

          <div className="mt-7 max-w-[32rem] space-y-3 text-[0.93rem] leading-7 text-[#735E6C] sm:text-base sm:leading-7">
            <p>
              Nikmati dimsum homemade dengan 90% daging ayam, halal, lembut, dan penuh rasa di setiap gigitan.
            </p>
            <p>
              Dibuat sepenuh hati dari bahan berkualitas dan disajikan dengan tampilan mewah cocok untuk menemani semua momentmu.
            </p>
          </div>

          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <a
              href={getWhatsAppUrl("Halo LalaGi Dimsum, saya mau pesan dimsum")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-[#E75480] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(231,84,128,0.18)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#D63D76] hover:shadow-[0_14px_34px_rgba(231,84,128,0.26)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E75480] sm:w-auto"
            >
              <WhatsappLogo weight="fill" className="size-5" aria-hidden="true" />
              Pesan via WhatsApp
            </a>
            <Link
              href="/menu"
              className="group inline-flex min-h-11 items-center gap-2 border-b border-[#3A2232]/35 text-sm font-semibold text-[#3A2232] transition-colors duration-200 hover:border-[#E75480] hover:text-[#E75480] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E75480]"
            >
              Lihat Menu
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>

      <div className="relative h-[31rem] w-full md:hidden">
        <Image
          src="/images/lalagi-dimsum-tampah.png"
          alt="Aneka dimsum LalaGi Dimsum tersusun di atas tampah untuk dinikmati bersama"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-[center_64%]"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F7F3EF] to-transparent" />
      </div>
    </section>
  );
}
