import Image from "next/image";
import Link from "next/link";

export default function EditorialSignatureCake() {
  return (
    <section
      className="bg-lalagi-cream px-5 py-16 text-lalagi-cocoa sm:px-8 sm:py-20 lg:px-12 lg:py-28"
      aria-label="Cerita LalaGi Dimsum"
    >
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 xl:gap-24">
        <div className="relative aspect-square w-full overflow-hidden bg-white">
          <Image
            src="/images/lalagi-story-dimsum-tower.webp"
            alt="Dimsum Tower LalaGi Dimsum untuk perayaan ulang tahun"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-contain object-center"
          />
        </div>

        <div>
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-lalagi-coral sm:text-xs">
            DARI DAPUR LALAGI DIMSUM
          </p>
          <span className="mb-6 block h-px w-10 bg-lalagi-coral" aria-hidden="true" />

          <h2 className="max-w-2xl text-balance font-serif-display text-3xl font-normal leading-tight text-lalagi-cocoa sm:text-4xl lg:text-5xl">
            Di Balik Setiap Rasa, Ada Perjuangan yang Tak Pernah Sederhana.
          </h2>

          <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-lalagi-muted sm:text-base sm:leading-8">
            <p>LalaGi Dimsum lahir dari dapur rumahan di Jagakarsa, berawal dari keyakinan bahwa makanan terbaik tercipta bukan karena proses yang instan, melainkan karena ketelatenan, kesabaran, dan ketulusan.</p>
            <p>Setiap dimsum kami dibuat dengan 90% daging ayam pilihan, tanpa mengurangi kualitas demi mengejar kuantitas. Dari memilih bahan, meracik bumbu, hingga mengukus setiap sajian, kami menjaga cita rasa yang konsisten agar setiap pelanggan merasakan kehangatan yang sama di setiap momen.</p>
            <p>Karena bagi kami, setiap sajian bukan hanya tentang makanan—melainkan cara menghadirkan kebahagiaan di momen Anda.</p>
          </div>

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
