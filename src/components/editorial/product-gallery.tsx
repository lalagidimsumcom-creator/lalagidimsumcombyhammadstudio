import Image from "next/image";

const topRow = Array.from({ length: 18 }, (_, index) => index + 1);
const bottomRow = Array.from({ length: 18 }, (_, index) => index + 19);

const tileStyles = [
  "h-52 w-36 sm:h-64 sm:w-44 lg:h-72 lg:w-48",
  "h-44 w-48 sm:h-56 sm:w-64 lg:h-64 lg:w-72",
  "h-56 w-40 sm:h-72 sm:w-52 lg:h-80 lg:w-56",
  "h-48 w-36 sm:h-60 sm:w-44 lg:h-68 lg:w-48",
  "h-52 w-52 sm:h-68 sm:w-68 lg:h-76 lg:w-76",
];

const tileOffsets = ["translate-y-2", "-translate-y-3", "translate-y-4", "-translate-y-1", "translate-y-0"];

function GallerySequence({ images, duplicate = false }: { images: number[]; duplicate?: boolean }) {
  return (
    <div className="menu-gallery-sequence flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={duplicate || undefined}>
      {images.map((number, index) => (
        <figure
          key={`${duplicate ? "duplicate" : "original"}-${number}`}
          className={`relative shrink-0 overflow-hidden bg-[#F8E8EE] shadow-[0_16px_40px_rgba(50,29,22,0.1)] ${tileStyles[index % tileStyles.length]} ${tileOffsets[index % tileOffsets.length]} ${index % 3 === 0 ? "rounded-[2rem]" : "rounded-md"}`}
        >
          <Image
            src={`/images/menu/lalagi-menu-${String(number).padStart(2, "0")}.webp`}
            alt={duplicate ? "" : `Kreasi dimsum LalaGi untuk momen perayaan ${number}`}
            fill
            sizes="(max-width: 639px) 208px, (max-width: 1023px) 272px, 304px"
            className="object-cover transition-transform duration-700 hover:scale-[1.035]"
          />
        </figure>
      ))}
    </div>
  );
}

function GalleryRail({ images, reverse = false }: { images: number[]; reverse?: boolean }) {
  return (
    <div className="menu-marquee-rail overflow-hidden py-5">
      <div className={`menu-marquee-track flex w-max ${reverse ? "menu-marquee-track-reverse" : ""}`}>
        <GallerySequence images={images} />
        <GallerySequence images={images} duplicate />
      </div>
    </div>
  );
}

export default function EditorialProductGallery() {
  return (
    <section className="menu-gallery overflow-hidden border-y border-[#3A2232]/10 bg-[#FFFDF9] py-20 sm:py-24 lg:py-28" aria-labelledby="gallery-title">
      <div className="mx-auto mb-10 max-w-[1280px] px-5 sm:px-8 lg:mb-14 lg:px-12">
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

      <div aria-label="Galeri foto produk LalaGi Dimsum">
        <GalleryRail images={topRow} />
        <GalleryRail images={bottomRow} reverse />
      </div>
    </section>
  );
}
