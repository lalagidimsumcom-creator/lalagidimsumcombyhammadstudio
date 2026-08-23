import Image from "next/image";
import Link from "next/link";

type MenuFeatureProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  alt: string;
  imageClassName: string;
  sizes: string;
};

function MenuCopy({
  title,
  description,
  href,
  cta,
}: Pick<MenuFeatureProps, "title" | "description" | "href" | "cta">) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="font-serif-display text-[1.65rem] font-normal leading-[1.15] tracking-[-0.01em] text-[#432719] sm:text-[1.95rem]">
        {title}
      </h3>
      <span className="mt-4 block h-px w-8 bg-[#3A3A3A]" aria-hidden="true" />
      <p className="mt-4 max-w-[28rem] text-sm leading-7 text-[#665750]">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 border-b border-[#3A3A3A] pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#432719] hover:text-[#3A3A3A] focus-visible:rounded-sm"
      >
        {cta}
      </Link>
    </div>
  );
}

function MenuFeature({
  title,
  description,
  href,
  cta,
  image,
  alt,
  imageClassName,
  sizes,
}: MenuFeatureProps) {
  return (
    <article className="grid items-center gap-7 sm:grid-cols-[minmax(0,1.2fr)_minmax(11rem,0.8fr)] sm:gap-8">
      <div className={`relative overflow-hidden bg-[#FBE9E5] ${imageClassName}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          loading={image === "/images/lalagi-dimsum-tampah.png" ? "eager" : "lazy"}
          className="object-cover"
        />
      </div>
      <MenuCopy title={title} description={description} href={href} cta={cta} />
    </article>
  );
}

const features: MenuFeatureProps[] = [
  {
    title: "Dimsum Mentai",
    description:
      "Lembut dan gurih dengan saus mentai premium—pilihan hangat untuk teman makan sehari-hari.",
    href: "/menu#dimsum-mentai",
    cta: "Lihat Menu",
    image: "/images/lalagi-dimsum-mentai.jpg",
    alt: "Dimsum mentai khas LalaGi dengan saus creamy",
    imageClassName: "aspect-[4/5]",
    sizes: "(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 58vw, 25vw",
  },
  {
    title: "Dimsum Cake",
    description:
      "Kreasi gurih untuk ulang tahun dan perayaan, disusun istimewa agar momen terasa lebih personal.",
    href: "/dimsum-cake",
    cta: "Pesan Cake",
    image: "/images/lalagi-dimsum-cake.jpg",
    alt: "Dimsum cake LalaGi untuk perayaan spesial",
    imageClassName: "aspect-[1/1]",
    sizes: "(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 58vw, 27vw",
  },
  {
    title: "Dimsum Tampah",
    description:
      "Sajian melimpah untuk arisan, keluarga, hingga acara kantor—rapi, praktis, dan siap dibagikan.",
    href: "/pesanan-acara#dimsum-tampah",
    cta: "Konsultasi Acara",
    image: "/images/lalagi-dimsum-tampah.png",
    alt: "Dimsum tampah LalaGi untuk acara dan kebersamaan",
    imageClassName: "aspect-[5/3]",
    sizes: "(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 58vw, 30vw",
  },
];

export default function EditorialIntentNav() {
  return (
    <section
      aria-labelledby="signature-menu-title"
      className="bg-[#F7F3EF] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12 xl:px-16">
        <header className="mb-16 max-w-2xl lg:mb-0">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#3A3A3A] sm:text-sm">
            Signature Menu
          </p>
          <span className="mt-5 block h-px w-10 bg-[#3A3A3A]" aria-hidden="true" />
          <h2
            id="signature-menu-title"
            className="mt-5 font-serif-display text-[2.75rem] font-normal leading-[1.02] tracking-[-0.02em] text-[#432719] sm:text-5xl lg:text-[3.7rem]"
          >
            Pilihan untuk
            <br />
            setiap momen
          </h2>
        </header>

        <div className="space-y-20 lg:hidden">
          {features.map((feature) => (
            <MenuFeature key={feature.title} {...feature} />
          ))}
        </div>

        <div className="hidden lg:mt-16 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-20 xl:gap-x-14">
          <article className="col-span-6 row-start-1 grid grid-cols-[minmax(0,1.25fr)_minmax(10.5rem,0.75fr)] items-center gap-8 xl:gap-10">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#FBE9E5]">
              <Image
                src={features[0].image}
                alt={features[0].alt}
                fill
                sizes="(max-width: 1279px) 27vw, 25vw"
                className="object-cover"
              />
            </div>
            <MenuCopy {...features[0]} />
          </article>

          <article className="col-span-6 col-start-7 row-start-1 grid grid-cols-[minmax(0,1.35fr)_minmax(10.5rem,0.65fr)] items-center gap-8 xl:gap-10">
            <div className="relative aspect-square overflow-hidden bg-[#FBE9E5]">
              <Image
                src={features[1].image}
                alt={features[1].alt}
                fill
                sizes="(max-width: 1279px) 29vw, 27vw"
                className="object-cover"
              />
            </div>
            <MenuCopy {...features[1]} />
          </article>

          <article className="col-span-7 col-start-4 row-start-2 grid grid-cols-[minmax(0,1.55fr)_minmax(11rem,0.7fr)] items-center gap-8 xl:gap-10">
            <div className="relative aspect-[5/3] overflow-hidden bg-[#FBE9E5]">
              <Image
                src={features[2].image}
                alt={features[2].alt}
                fill
                sizes="36vw"
                className="object-cover"
              />
            </div>
            <MenuCopy {...features[2]} />
          </article>
        </div>
      </div>
    </section>
  );
}
