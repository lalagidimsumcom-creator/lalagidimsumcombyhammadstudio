"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Medal } from "@phosphor-icons/react";

const trustMarks = [
  {
    image: "/images/logo-halal-indonesia.jpg",
    alt: "Logo Halal Indonesia",
    value: "Halal",
    label: "Certified Resmi",
  },
  {
    image: "/images/logo-google-reviews.png",
    alt: "Google Reviews",
    value: "5.0 ★",
    label: "Google Rating",
  },
  {
    image: "/images/logo-rri.png",
    alt: "Radio Republik Indonesia",
    value: "RRI",
    label: "Liputan",
  },
];

const reviewImages = [

  {
    src: "/images/google-review-new-1.webp",
    alt: "Ulasan Google tambahan dari Fransisca Marseilla untuk LalaGi Dimsum",
  },
  {
    src: "/images/google-review-new-2.webp",
    alt: "Ulasan Google tambahan dari Liza Noah untuk LalaGi Dimsum",
  },
  {
    src: "/images/google-review-new-3.webp",
    alt: "Ulasan Google tambahan dari Rifdah Safitri untuk LalaGi Dimsum",
  },
  {
    src: "/images/google-review-new-4.webp",
    alt: "Ulasan Google tambahan dari Elsa Meilinda Putri untuk LalaGi Dimsum",
  },
  {
    src: "/images/google-review-new-5.webp",
    alt: "Ulasan Google tambahan dari Ribka Anflora untuk LalaGi Dimsum",
  },
];

export default function EditorialTrustStrip() {
  const [activeReview, setActiveReview] = useState(0);

  const showPreviousReview = () => {
    setActiveReview((current) => (current - 1 + reviewImages.length) % reviewImages.length);
  };

  const showNextReview = () => {
    setActiveReview((current) => (current + 1) % reviewImages.length);
  };

  return (
    <section
      aria-labelledby="trust-title"
      className="border-b border-[#3A2232]/15 bg-[#F7F3EF] px-5 py-16 text-[#3A2232] sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#E75480]">
            Kepercayaan pelanggan
          </p>
          <h2
            id="trust-title"
            className="mt-4 text-balance font-serif-display text-3xl font-normal leading-tight tracking-[-0.01em] sm:text-4xl lg:text-5xl"
          >
            Rasa yang dipercaya, kualitas yang terjaga.
          </h2>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid grid-cols-2 border-l border-t border-[#3A2232]/15 lg:col-span-5">
            {trustMarks.map((mark) => (
              <article
                key={mark.label}
                className="flex min-h-52 flex-col justify-between border-b border-r border-[#3A2232]/15 p-5 sm:min-h-60 sm:p-7"
              >
                <div className="relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-[#3A2232]/15 bg-white p-2 sm:size-20">
                  <Image
                    src={mark.image}
                    alt={mark.alt}
                    fill
                    sizes="80px"
                    className="object-contain p-2.5"
                  />
                </div>
                <div>
                  <strong className="block text-xl font-bold leading-tight sm:text-2xl">
                    {mark.value}
                  </strong>
                  <span className="mt-1 block text-xs font-medium text-[#735E6C] sm:text-sm">
                    {mark.label}
                  </span>
                </div>
              </article>
            ))}

            <article className="flex min-h-52 flex-col justify-between border-b border-r border-[#3A2232]/15 p-5 sm:min-h-60 sm:p-7">
              <div className="flex size-16 items-center justify-center rounded-full border border-[#E75480] bg-[#E75480] sm:size-20">
                <Medal weight="fill" className="size-8 text-white sm:size-10" aria-hidden="true" />
              </div>
              <div>
                <strong className="block text-xl font-bold leading-tight sm:text-2xl">
                  5+ Tahun
                </strong>
                <span className="mt-1 block text-xs font-medium text-[#735E6C] sm:text-sm">
                  Perjalanan
                </span>
              </div>
            </article>
          </div>

          <div className="flex min-w-0 flex-col justify-between border-t border-[#3A2232]/15 pt-9 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div className="overflow-hidden" aria-live="polite">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeReview * 100}%)` }}
              >
                {reviewImages.map((review) => (
                  <figure key={review.src} className="w-full shrink-0">
                    <div className="relative h-[30rem] w-full overflow-hidden border border-[#3A2232]/15 bg-white sm:h-[34rem]">
                      <Image
                        src={review.src}
                        alt={review.alt}
                        fill
                        sizes="(max-width: 1023px) calc(100vw - 2.5rem), 54vw"
                        className="object-contain"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-[#3A2232]/15 pt-6">
              <span className="text-xs font-semibold tabular-nums text-[#735E6C]">
                {String(activeReview + 1).padStart(2, "0")} / {String(reviewImages.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPreviousReview}
                  aria-label="Lihat ulasan sebelumnya"
                  className="flex size-11 items-center justify-center rounded-full border border-[#E75480] text-[#E75480] transition-colors duration-200 hover:bg-[#E75480] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E75480] active:scale-95"
                >
                  <ArrowLeft weight="bold" className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNextReview}
                  aria-label="Lihat ulasan berikutnya"
                  className="flex size-11 items-center justify-center rounded-full bg-[#E75480] text-white transition-colors duration-200 hover:bg-[#D63D76] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E75480] active:scale-95"
                >
                  <ArrowRight weight="bold" className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
