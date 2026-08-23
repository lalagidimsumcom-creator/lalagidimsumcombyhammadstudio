import Image from "next/image";
import Link from "next/link";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#E9D9D1] bg-[#F7F3EF] md:min-h-[calc(100dvh-80px)] md:flex md:items-center lg:min-h-[720px]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EF]/20 via-transparent to-[#F7F3EF]/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 md:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div className="max-w-[36rem] md:w-[46%]">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#D9615C] sm:text-xs">
            Homemade <span aria-hidden="true">·</span> Halal <span aria-hidden="true">·</span> Jagakarsa
          </p>
          <span aria-hidden="true" className="mt-6 block h-px w-10 bg-[#ED7772]" />

          <h1 className="mt-7 text-balance font-serif-display text-[3.15rem] font-normal leading-[0.98] tracking-[-0.025em] text-[#432719] sm:text-[4.25rem] md:text-[4.5rem] lg:text-[5.15rem] xl:text-[5.6rem]">
            Dimsum untuk
            <span className="block text-[#ED7772]">Setiap Momen.</span>
          </h1>

          <p className="mt-7 max-w-[31rem] text-[0.95rem] leading-7 text-[#76645D] sm:text-[1.05rem] sm:leading-8">
            Dibuat segar setiap hari dengan bahan pilihan dan resep khas rumahan untuk rasa yang selalu berkesan.
          </p>

          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <a
              href={getWhatsAppUrl("Halo LalaGi Dimsum, saya mau pesan dimsum")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-[#ED7772] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(191,84,79,0.2)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#D9615C] hover:shadow-[0_14px_34px_rgba(191,84,79,0.28)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED7772] sm:w-auto"
            >
              <WhatsappLogo weight="fill" className="size-5" aria-hidden="true" />
              Pesan via WhatsApp
            </a>
            <Link
              href="/menu"
              className="group inline-flex min-h-11 items-center gap-2 border-b border-[#432719]/35 text-sm font-semibold text-[#432719] transition-colors duration-200 hover:border-[#ED7772] hover:text-[#D9615C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED7772]"
            >
              Lihat Menu
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 border-t border-[#E2D6D0] pt-5 sm:mt-12">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#76645D]">
              Halal MUI <span aria-hidden="true">·</span> ID31110016921890424
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[31rem] w-full md:hidden">
        <Image
          src="/images/lalagi-dimsum-tampah.png"
          alt="Aneka dimsum LalaGi tersusun di atas tampah untuk dinikmati bersama"
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
