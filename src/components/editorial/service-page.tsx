import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/editorial/navbar";
import Footer from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const formatRupiah = (price: number) =>
  `Rp${new Intl.NumberFormat("id-ID").format(price)}`;

export function ServicePageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F3EF] text-[#3A2232]">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloatingCta />
    </div>
  );
}

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  whatsappMessage,
}: ServiceHeroProps) {
  return (
    <section className="border-b border-[#3A2232]/10 px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#722F37]">{eyebrow}</p>
          <span className="mt-6 block h-px w-10 bg-[#722F37]" aria-hidden="true" />
          <h1 className="mt-7 text-balance font-serif-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#735E6C]">{description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#722F37] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#5F252D]">
              <WhatsappLogo weight="fill" className="size-5" aria-hidden="true" />
              Konsultasi via WhatsApp
            </a>
            <Link href="/menu" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#722F37]/35 px-7 py-3.5 text-sm font-bold text-[#722F37] transition-colors hover:bg-white">
              Lihat semua menu
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function PriceTable({
  title,
  rows,
}: {
  title: string;
  rows: readonly { product: string; price: number; note?: string }[];
}) {
  return (
    <section className="bg-[#FFFDF9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="service-prices">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">Harga transparan</p>
        <h2 id="service-prices" className="mt-4 font-serif-display text-3xl font-medium leading-tight sm:text-4xl">{title}</h2>
        <div className="mt-8 overflow-x-auto border border-[#3A2232]/15">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead className="bg-[#722F37] text-white">
              <tr><th className="px-5 py-4">Pilihan</th><th className="px-5 py-4">Keterangan</th><th className="px-5 py-4 text-right">Harga</th></tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.product} className="border-t border-[#3A2232]/10">
                  <td className="px-5 py-4 font-semibold">{row.product}</td>
                  <td className="px-5 py-4 text-[#735E6C]">{row.note ?? "Harga paket"}</td>
                  <td className="px-5 py-4 text-right font-bold tabular-nums text-[#722F37]">{formatRupiah(row.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function DirectAnswers({
  eyebrow = "Jawaban langsung",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="direct-answer-title">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">{eyebrow}</p>
        <h2 id="direct-answer-title" className="mt-4 max-w-3xl font-serif-display text-3xl font-medium leading-tight sm:text-4xl">{title}</h2>
        <div className="mt-10 divide-y divide-[#3A2232]/15 border-y border-[#3A2232]/15">
          {items.map((item) => (
            <article key={item.question} className="grid gap-3 py-7 md:grid-cols-[0.82fr_1.18fr] md:gap-12">
              <h3 className="font-serif-display text-lg font-semibold leading-7">{item.question}</h3>
              <p className="text-sm leading-7 text-[#735E6C] sm:text-base">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
