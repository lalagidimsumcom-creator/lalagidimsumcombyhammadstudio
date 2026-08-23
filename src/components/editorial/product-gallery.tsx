import Image from "next/image";

const topRow = Array.from({ length: 18 }, (_, index) => index + 1);
const bottomRow = Array.from({ length: 18 }, (_, index) => index + 19);

const tileWidths = [
  "w-40 sm:w-52 lg:w-60",
  "w-52 sm:w-64 lg:w-72",
  "w-44 sm:w-56 lg:w-64",
  "w-56 sm:w-72 lg:w-80",
];

function GallerySequence({ images, compact, duplicate = false }: { images: number[]; compact: boolean; duplicate?: boolean }) {
  return (
    <div className="menu-gallery-sequence flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={duplicate || undefined}>
      {images.map((number, index) => (
        <figure
          key={`${duplicate ? "duplicate" : "original"}-${number}`}
          className={`relative shrink-0 overflow-hidden rounded-xl border border-[#3A2232]/[0.07] bg-[#F8E8EE] shadow-[0_12px_30px_rgba(50,29,22,0.07)] ${compact ? "h-44 sm:h-56 lg:h-64" : "h-52 sm:h-64 lg:h-72"} ${tileWidths[index % tileWidths.length]}`}
        >
          <Image
            src={`/images/menu/lalagi-menu-${String(number).padStart(2, "0")}.webp`}
            alt={duplicate ? "" : `Kreasi dimsum LalaGi untuk momen perayaan ${number}`}
            fill
            loading="eager"
            unoptimized
            sizes="(max-width: 639px) 224px, (max-width: 1023px) 288px, 320px"
            className="object-cover transition-transform duration-700 hover:scale-[1.025]"
          />
        </figure>
      ))}
    </div>
  );
}

function GalleryRail({ images, compact = false, reverse = false }: { images: number[]; compact?: boolean; reverse?: boolean }) {
  return (
    <div className="menu-marquee-rail overflow-hidden py-2 sm:py-2.5">
      <div className={`menu-marquee-track flex w-max ${reverse ? "menu-marquee-track-reverse" : ""}`}>
        <GallerySequence images={images} compact={compact} />
        <GallerySequence images={images} compact={compact} duplicate />
      </div>
    </div>
  );
}

export default function EditorialProductGallery() {
  return (
    <section className="menu-gallery overflow-hidden border-y border-[#3A2232]/10 bg-[#FFFDF9] py-20 sm:py-24 lg:py-28" aria-labelledby="gallery-title">
      <div className="mx-auto mb-12 max-w-[1280px] px-5 sm:px-8 lg:mb-16 lg:px-12">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#E75480]">Momen bersama LalaGi</p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.55fr)] lg:items-end">
          <h2 id="gallery-title" className="max-w-3xl text-balance font-serif-display text-4xl font-normal leading-[1.08] text-[#3A2232] sm:text-5xl lg:text-6xl">
            Dibuat untuk dirayakan.
          </h2>
          <p className="max-w-md text-sm leading-7 text-[#735E6C] sm:text-base lg:justify-self-end">
            Dari ulang tahun kecil di rumah sampai acara besar, setiap susunan dibuat satu per satu dari dapur LalaGi.
          </p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4" aria-label="Galeri foto produk LalaGi Dimsum">
        <GalleryRail images={topRow} />
        <GalleryRail images={bottomRow} compact reverse />
      </div>
    </section>
  );
}
