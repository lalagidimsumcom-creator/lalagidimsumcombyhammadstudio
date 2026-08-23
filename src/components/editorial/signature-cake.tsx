import Image from "next/image";
import Link from "next/link";

export default function EditorialSignatureCake() {
  return (
    <section
      className="bg-lalagi-white px-5 py-16 text-lalagi-cocoa sm:px-8 sm:py-20 lg:px-12 lg:py-28"
      aria-labelledby="brand-story-title"
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
          <p className="mb-5 text-[0.7rem] font-semibold tracking-[0.3em] text-lalagi-coral sm:text-xs">
            DARI DAPUR JAGAKARSA
          </p>
          <span className="mb-6 block h-px w-10 bg-lalagi-coral" aria-hidden="true" />

          <h2
            id="brand-story-title"
            className="font-serif-display max-w-2xl text-3xl leading-[1.24] font-medium tracking-[0.035em] sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
          >
            DIBUAT HANGAT,
            <br />
            UNTUK MOMEN YANG DEKAT.
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-lalagi-muted sm:text-base sm:leading-8">
            LalaGi lahir dari dapur rumahan di Jagakarsa. Dimsum full daging
            ayam kami dibuat satu per satu oleh tim ibu-ibu lokal, dengan bahan
            pilihan dan perhatian yang terasa di setiap gigitan.
          </p>

          <Link
            href="/tentang"
            className="mt-7 inline-block border-b border-lalagi-coral pb-1 font-serif-display text-xs font-semibold tracking-[0.15em] text-lalagi-cocoa transition-colors duration-200 hover:text-lalagi-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lalagi-coral"
          >
            KENAL LEBIH DEKAT
          </Link>

          <figure className="mt-12 border-l border-lalagi-coral pl-6 sm:mt-14 sm:pl-8">
            <blockquote className="relative font-serif-display text-xl leading-relaxed tracking-[0.01em] text-lalagi-cocoa sm:text-2xl lg:text-[1.65rem]">
              <span
                className="absolute -top-8 -left-1 text-6xl leading-none text-lalagi-coral"
                aria-hidden="true"
              >
                “
              </span>
              Dimsumnya padat daging, rasanya enak, dan tampilannya cantik.
            </blockquote>
            <figcaption className="mt-4 text-sm text-lalagi-muted">
              <span className="font-semibold text-lalagi-cocoa">— Rifdah</span>,
              Google Review
            </figcaption>
            <div
              className="mt-3 flex gap-1 text-lg tracking-wider text-lalagi-coral"
              aria-label="5 dari 5 bintang"
            >
              <span aria-hidden="true">★</span>
              <span aria-hidden="true">★</span>
              <span aria-hidden="true">★</span>
              <span aria-hidden="true">★</span>
              <span aria-hidden="true">★</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
