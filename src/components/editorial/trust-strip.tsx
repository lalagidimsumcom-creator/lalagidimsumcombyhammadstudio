import Image from "next/image";
import {
  CheckCircle,
  Medal,
  Quotes,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { REVIEWS_DATA } from "@/data/reviews";

const featuredReview = REVIEWS_DATA.reviews[1];

const trustMarks = [
  {
    image: "/images/logo-google-reviews.png",
    alt: "Google Reviews",
    value: "5.0 ★",
    label: "Google Rating",
  },
  {
    image: "/images/logo-halal-indonesia.jpg",
    alt: "Logo Halal Indonesia",
    value: "Halal",
    label: "Certified Resmi",
  },
  {
    image: "/images/logo-rri.png",
    alt: "Radio Republik Indonesia",
    value: "RRI",
    label: "Liputan",
  },
];

export default function EditorialTrustStrip() {
  return (
    <section
      aria-labelledby="trust-title"
      className="border-b border-[#432719] bg-[#321D16] px-5 py-16 text-[#FFFDF9] sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-10 max-w-xl lg:mb-12">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#ED7772]">
            Kepercayaan pelanggan
          </p>
          <h2
            id="trust-title"
            className="mt-4 font-serif-display text-3xl font-normal leading-tight tracking-[-0.01em] text-white sm:text-4xl"
          >
            Rasa yang dipercaya, kualitas yang terjaga.
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-4 lg:col-span-7 lg:gap-6">
            {trustMarks.map((mark) => (
              <article key={mark.label} className="flex flex-col items-center text-center">
                <div className="relative flex size-20 items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white p-2.5 shadow-[0_14px_35px_rgba(22,10,7,0.28)] transition-transform duration-200 hover:-translate-y-1 sm:size-24">
                  <Image
                    src={mark.image}
                    alt={mark.alt}
                    fill
                    sizes="96px"
                    className="object-contain p-2.5"
                  />
                </div>
                <strong className="mt-4 text-lg font-bold leading-tight text-white sm:text-xl">
                  {mark.value}
                </strong>
                <span className="mt-1 text-xs font-medium text-white/65 sm:text-sm">
                  {mark.label}
                </span>
              </article>
            ))}

            <article className="flex flex-col items-center text-center">
              <div className="flex size-20 items-center justify-center rounded-2xl border border-[#ED7772]/45 bg-[#432719] shadow-[0_14px_35px_rgba(22,10,7,0.28)] transition-transform duration-200 hover:-translate-y-1 sm:size-24">
                <Medal weight="fill" className="size-10 text-[#ED7772] sm:size-12" aria-hidden="true" />
              </div>
              <strong className="mt-4 text-lg font-bold leading-tight text-white sm:text-xl">
                5+ Tahun
              </strong>
              <span className="mt-1 text-xs font-medium text-white/65 sm:text-sm">
                Perjalanan
              </span>
            </article>
          </div>

          <figure className="border-t border-white/15 pt-9 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <Quotes weight="fill" className="size-10 text-[#ED7772] sm:size-12" aria-hidden="true" />
            <blockquote className="mt-5 font-serif-display text-xl italic leading-relaxed text-white sm:text-2xl">
              “{featuredReview.content}”
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-white/75">
              <span className="inline-flex items-center gap-2">
                — {featuredReview.author}, {featuredReview.role}
                <CheckCircle weight="fill" className="size-4 text-[#ED7772]" aria-hidden="true" />
              </span>
              <span className="inline-flex gap-0.5 text-[#ED7772]" aria-label="5 dari 5 bintang">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} weight="fill" className="size-4" aria-hidden="true" />
                ))}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
