import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EditorialHero() {
  return (
    <section className="overflow-hidden border-b border-[#E9D9D1] bg-[#FFF9F2]">
      <div className="mx-auto grid min-h-[calc(100svh-68px)] max-w-[1280px] grid-cols-1 lg:min-h-[720px] lg:grid-cols-12">
        <div className="flex items-center px-6 py-14 sm:px-8 sm:py-16 lg:col-span-5 lg:px-10 lg:py-20 xl:px-12">
          <div className="w-full">
            <p className="font-serif-display text-[11px] font-medium uppercase tracking-[0.3em] text-[#D9615C] sm:text-xs lg:whitespace-nowrap">
              Homemade <span aria-hidden="true" className="px-1.5">•</span> Halal <span aria-hidden="true" className="px-1.5">•</span> Jagakarsa
            </p>
            <span aria-hidden="true" className="mt-6 block h-px w-12 bg-[#ED7772] sm:mt-7" />
            <h1 className="mt-9 font-serif-display text-[38px] font-normal uppercase leading-[1.08] tracking-[-0.04em] text-[#321D16] min-[390px]:text-[40px] sm:text-[54px] lg:mt-10 lg:text-[56px] xl:text-[58px]">
              <span className="block lg:whitespace-nowrap">Dimsum untuk</span>
              <span className="block lg:whitespace-nowrap">setiap momen.</span>
            </h1>
            <p className="mt-6 max-w-[440px] text-[15px] leading-7 text-[#665750] sm:text-base sm:leading-8 md:mt-7">
              Dibuat segar setiap hari dengan bahan pilihan dan resep khas rumahan untuk rasa yang selalu berkesan.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8 md:mt-10">
              <a href={getWhatsAppUrl("Halo LalaGi Dimsum, saya mau pesan dimsum")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 w-full items-center justify-center bg-[#ED7772] px-7 py-4 font-serif-display text-xs font-semibold uppercase tracking-[0.13em] text-[#FFFDF9] transition-colors duration-200 hover:bg-[#D9615C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED7772] motion-reduce:transition-none sm:w-auto">
                Pesan via WhatsApp
              </a>
              <Link href="/menu" className="inline-flex min-h-11 items-center border-b border-[#ED7772] font-serif-display text-xs font-semibold uppercase tracking-[0.14em] text-[#321D16] transition-colors duration-200 hover:text-[#D9615C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED7772] motion-reduce:transition-none">
                Lihat Menu
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-[#E9D9D1] pt-5 md:mt-14">
              <span aria-hidden="true" className="font-serif-display text-xl text-[#ED7772]">H</span>
              <p className="text-[10px] font-medium uppercase leading-5 tracking-[0.13em] text-[#665750] sm:text-[11px]">
                Halal MUI <span className="whitespace-nowrap">ID31110016921890424</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[430px] lg:col-span-7 lg:m-4 lg:ml-0 lg:min-h-0">
          <Image src="/images/lalagi-hero-tampah.jpg" alt="Aneka dimsum LalaGi tersusun di atas tampah untuk acara bersama" fill priority loading="eager" sizes="(max-width: 1023px) 100vw, 58vw" className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}
