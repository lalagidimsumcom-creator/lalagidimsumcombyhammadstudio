"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Medal,
  Quotes,
  Star,
} from "@phosphor-icons/react";
import { REVIEWS_DATA } from "@/data/reviews";

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

export default function EditorialTrustStrip() {
  const reviews = REVIEWS_DATA.reviews.filter((review) => review.verified);
  const [activeReview, setActiveReview] = useState(0);

  const showPreviousReview = () => {
    setActiveReview((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const showNextReview = () => {
    setActiveReview((current) => (current + 1) % reviews.length);
  };

  return (
    <section
      aria-labelledby="trust-title"
      className="border-b border-[#321D16]/15 bg-[#F7F3EF] px-5 py-16 text-[#321D16] sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#76645D]">
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
          <div className="grid grid-cols-2 border-l border-t border-[#321D16]/15 lg:col-span-5">
            {trustMarks.map((mark) => (
              <article
                key={mark.label}
                className="flex min-h-52 flex-col justify-between border-b border-r border-[#321D16]/15 p-5 sm:min-h-60 sm:p-7"
              >
                <div className="relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-[#321D16]/15 bg-white p-2 sm:size-20">
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
                  <span className="mt-1 block text-xs font-medium text-[#76645D] sm:text-sm">
                    {mark.label}
                  </span>
                </div>
              </article>
            ))}

            <article className="flex min-h-52 flex-col justify-between border-b border-r border-[#321D16]/15 p-5 sm:min-h-60 sm:p-7">
              <div className="flex size-16 items-center justify-center rounded-full border border-[#321D16]/15 bg-[#3A3A3A] sm:size-20">
                <Medal weight="fill" className="size-8 text-white sm:size-10" aria-hidden="true" />
              </div>
              <div>
                <strong className="block text-xl font-bold leading-tight sm:text-2xl">
                  5+ Tahun
                </strong>
                <span className="mt-1 block text-xs font-medium text-[#76645D] sm:text-sm">
                  Perjalanan
                </span>
              </div>
            </article>
          </div>

          <div className="flex min-w-0 flex-col justify-between border-t border-[#321D16]/15 pt-9 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div className="overflow-hidden" aria-live="polite">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeReview * 100}%)` }}
              >
                {reviews.map((review) => (
                  <figure key={review.id} className="w-full shrink-0 pr-1">
                    <Quotes weight="fill" className="size-10 text-[#3A3A3A] sm:size-12" aria-hidden="true" />
                    <blockquote className="mt-6 max-w-[38rem] text-pretty font-serif-display text-xl leading-relaxed sm:text-2xl lg:text-[1.75rem]">
                      “{review.content}”
                    </blockquote>
                    <figcaption className="mt-8">
                      <div className="flex gap-0.5 text-[#3A3A3A]" aria-label={`${review.rating} dari 5 bintang`}>
                        {Array.from({ length: review.rating }, (_, index) => (
                          <Star key={index} weight="fill" className="size-4" aria-hidden="true" />
                        ))}
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                        <strong className="font-semibold">{review.author}</strong>
                        <CheckCircle weight="fill" className="size-4 text-[#3A3A3A]" aria-label="Ulasan terverifikasi" />
                        <span className="text-[#76645D]">{review.role}</span>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-[#321D16]/15 pt-6">
              <span className="text-xs font-semibold tabular-nums text-[#76645D]">
                {String(activeReview + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPreviousReview}
                  aria-label="Lihat ulasan sebelumnya"
                  className="flex size-11 items-center justify-center rounded-full border border-[#321D16]/25 text-[#321D16] transition-colors duration-200 hover:bg-[#3A3A3A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#321D16] active:scale-95"
                >
                  <ArrowLeft weight="bold" className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNextReview}
                  aria-label="Lihat ulasan berikutnya"
                  className="flex size-11 items-center justify-center rounded-full bg-[#3A3A3A] text-white transition-colors duration-200 hover:bg-[#242424] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#321D16] active:scale-95"
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
