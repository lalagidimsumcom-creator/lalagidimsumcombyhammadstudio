import Image from "next/image";
import Link from "next/link";

export default function EditorialSignatureCake() {
  return (
    <section
      className="bg-lalagi-cream px-5 py-16 text-lalagi-cocoa sm:px-8 sm:py-20 lg:px-12 lg:py-28"
      aria-label="Cerita LalaGi Dimsum"
    >
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 xl:gap-24">
        <div className="relative aspect-square w-full overflow-hidden bg-lalagi-blush">
          <Image
            src="/images/lalagi-dimsum-kitchen.jpg"
            alt="Tim dapur LalaGi membuat dimsum dengan tangan di Jagakarsa"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-lalagi-coral sm:text-xs">
            DARI DAPUR JAGAKARSA
          </p>
          <span className="mb-6 block h-px w-10 bg-lalagi-coral" aria-hidden="true" />

          <p className="max-w-xl text-base leading-8 text-lalagi-muted sm:text-lg sm:leading-9">
            LalaGi lahir dari dapur rumahan di Jagakarsa. Dimsum dibuat setiap
            hari dengan bahan pilihan dan perhatian pada rasa, tekstur, serta
            pengalaman berbagi.
          </p>

          <Link
            href="/menu"
            className="mt-7 inline-block border-b border-lalagi-coral pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-lalagi-cocoa transition-colors duration-200 hover:text-lalagi-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lalagi-coral"
          >
            LIHAT MENU
          </Link>
        </div>
      </div>
    </section>
  );
}
