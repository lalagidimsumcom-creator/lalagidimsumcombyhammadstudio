import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Car,
  CheckCircle,
  Gift,
  Motorcycle,
  Sparkle,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/editorial/navbar";
import Footer from "@/components/editorial/footer";
import WhatsAppFloatingCta from "@/components/whatsapp-floating-cta";
import JsonLd from "@/components/seo/json-ld";
import { MENU_GROUPS, type MenuGroup } from "@/data/products";
import { getProductWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { breadcrumbSchema, faqSchema, menuProductsSchema } from "@/lib/seo";

const formatRupiah = (price: number) =>
  `Rp${new Intl.NumberFormat("id-ID").format(price)}`;

const menuFaqs = [
  {
    question: "Apakah LalaGi Dimsum halal?",
    answer:
      "Ya. LalaGi Dimsum bersertifikat Halal Indonesia dengan nomor ID31110016921890424 dan menggunakan 90% daging ayam pilihan.",
  },
  {
    question: "Berapa harga Dimsum Cake LalaGi Dimsum?",
    answer:
      "Dimsum Cake Reguler tersedia mulai Rp165.000 untuk 25 pcs hingga Rp260.000 untuk 45 pcs. Harga sudah termasuk topper, lilin, cutlery, greeting card, saus, dan box eksklusif.",
  },
  {
    question: "Berapa harga Dimsum Tampah 50 pcs dan 100 pcs?",
    answer:
      "Dimsum Tampah 50 pcs seharga Rp390.000 dan Dimsum Tampah 100 pcs seharga Rp580.000. Pengiriman wajib menggunakan mobil agar susunannya tetap aman.",
  },
  {
    question: "Menu apa yang cocok untuk ulang tahun atau anniversary?",
    answer:
      "Dimsum Cake Reguler dan Dimsum Bucket cocok untuk surprise yang lebih personal. Untuk perayaan lebih besar, pilih Dimsum Tampah, Dimsum Tower, atau Dimsum Money Roll.",
  },
  {
    question: "Apakah pesanan bisa dikirim ke Jabodetabek?",
    answer:
      "LalaGi Dimsum melayani pengiriman Jabodetabek melalui instant, same day, atau next day sesuai produk, jarak, dan ketersediaan armada.",
  },
  {
    question: "Apakah harga menu sudah termasuk biaya pengiriman?",
    answer:
      "Belum. Biaya pengiriman mengikuti tarif GoSend atau Lalamove dan dapat berubah sesuai jarak serta kondisi perjalanan.",
  },
] as const;

function MenuPhotography({ menu }: { menu: MenuGroup }) {
  if (menu.images.length === 1) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#EADDE5]">
        <Image
          src={menu.images[0]}
          alt={menu.name}
          fill
          priority={menu.menuNumber === "01"}
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.025]"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
      {menu.images.map((image, index) => (
        <div
          key={image}
          className={`relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#EADDE5] ${index === 1 ? "mt-10 sm:mt-16" : "mb-10 sm:mb-16"}`}
        >
          <Image
            src={image}
            alt={`${menu.name} — tampilan ${index + 1}`}
            fill
            priority={menu.menuNumber === "01"}
            sizes="(max-width: 1023px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.025]"
          />
        </div>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F7F3EF] font-sans text-[#3A2232] selection:bg-[#722F37] selection:text-white">
      <JsonLd
        data={[
          menuProductsSchema,
          faqSchema(menuFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
          ]),
        ]}
      />
      <Navbar />

      <section className="border-b border-[#3A2232]/10 px-5 pb-16 pt-24 sm:px-8 md:pb-20 md:pt-32 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">
              <Sparkle weight="fill" className="size-4" aria-hidden="true" />
              Menu LalaGi Dimsum
            </p>
            <h1 className="mt-5 text-balance font-serif-display text-4xl font-normal leading-[1.08] text-[#3A2232] sm:text-6xl lg:text-7xl">
              Pilih sajian untuk momenmu.
            </h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-[#735E6C] sm:text-lg">
              Semua dimsum dibuat dari 90% daging ayam pilihan, bersertifikat
              halal resmi, dan disiapkan fresh setiap hari.
            </p>
            <p className="mt-5 border-t border-[#3A2232]/15 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#722F37]">
              6 pilihan menu saat ini
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFDF9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="price-table-title">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">Daftar harga aktual</p>
          <h2 id="price-table-title" className="mt-4 max-w-3xl font-serif-display text-3xl font-medium leading-tight sm:text-4xl">
            Berapa harga menu LalaGi Dimsum?
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#735E6C] sm:text-base">
            Harga LalaGi Dimsum mulai Rp90.000 untuk Party Size 20 pcs. Pilihan perayaan tersedia hingga Dimsum Tower 100 pcs seharga Rp635.000.
          </p>
          <div className="mt-8 overflow-x-auto border border-[#3A2232]/15">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#722F37] text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Produk</th>
                  <th className="px-5 py-4 font-semibold">Pilihan</th>
                  <th className="px-5 py-4 text-right font-semibold">Harga</th>
                </tr>
              </thead>
              <tbody>
                {MENU_GROUPS.flatMap((menu) =>
                  menu.variants.map((variant, index) => (
                    <tr key={variant.name} className="border-t border-[#3A2232]/10">
                      <td className="px-5 py-4 font-semibold text-[#3A2232]">{index === 0 ? menu.name : ""}</td>
                      <td className="px-5 py-4 text-[#735E6C]">{variant.name}</td>
                      <td className="px-5 py-4 text-right font-bold tabular-nums text-[#722F37]">{formatRupiah(variant.price)}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="menu-faq-title">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">Jawaban singkat</p>
          <h2 id="menu-faq-title" className="mt-4 max-w-3xl font-serif-display text-3xl font-medium leading-tight sm:text-4xl">
            Pertanyaan tentang menu dan pemesanan
          </h2>
          <div className="mt-10 divide-y divide-[#3A2232]/15 border-y border-[#3A2232]/15">
            {menuFaqs.map((faq) => (
              <article key={faq.question} className="grid gap-3 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                <h3 className="font-serif-display text-lg font-semibold leading-7 text-[#3A2232]">{faq.question}</h3>
                <p className="text-sm leading-7 text-[#735E6C] sm:text-base">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12"
        aria-label="Daftar menu LalaGi Dimsum"
      >
        {MENU_GROUPS.map((menu, index) => {
          const reverse = index % 2 === 1;
          const DeliveryIcon = menu.deliveryType === "car" ? Car : Motorcycle;

          return (
            <article
              key={menu.id}
              id={menu.id}
              className="grid scroll-mt-24 gap-10 border-b border-[#3A2232]/15 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-28"
            >
              <div className={reverse ? "lg:order-2" : undefined}>
                <MenuPhotography menu={menu} />
              </div>

              <div className={reverse ? "lg:order-1" : undefined}>
                <div className="flex items-center gap-4 text-[#722F37]">
                  <span className="font-serif-display text-2xl font-semibold tabular-nums">
                    {menu.menuNumber}
                  </span>
                  <span
                    className="h-px w-10 bg-[#722F37]/45"
                    aria-hidden="true"
                  />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
                    {menu.meta}
                  </span>
                </div>

                <h2 className="mt-5 text-balance font-serif-display text-3xl font-medium leading-tight text-[#3A2232] sm:text-5xl">
                  {menu.name}
                </h2>

                {menu.occasions && (
                  <p className="mt-5 max-w-xl text-xs font-semibold uppercase leading-6 tracking-[0.08em] text-[#722F37]">
                    <span className="mr-1.5">Pilihan topper:</span>
                    {menu.occasions.join("  ·  ")}
                  </p>
                )}

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#735E6C] sm:text-base">
                  {menu.description}
                </p>

                <div className="mt-8 border-t border-[#3A2232]/15">
                  {menu.variants.map((variant) => (
                    <div
                      key={variant.name}
                      className="flex items-baseline justify-between gap-5 border-b border-[#3A2232]/15 py-4"
                    >
                      <span className="text-sm font-semibold leading-6 text-[#3A2232] sm:text-base">
                        {variant.name}
                      </span>
                      <span className="shrink-0 text-sm font-bold tabular-nums text-[#722F37] sm:text-base">
                        {formatRupiah(variant.price)}
                      </span>
                    </div>
                  ))}
                </div>

                {menu.priceNote && (
                  <p className="mt-4 text-sm font-medium leading-6 text-[#735E6C]">
                    {menu.priceNote}
                  </p>
                )}

                {menu.notes && (
                  <div className="mt-6">
                    {menu.notesTitle && (
                      <h3 className="mb-3 text-sm font-bold text-[#3A2232]">
                        {menu.notesTitle}
                      </h3>
                    )}
                    <ul className="space-y-2.5">
                      {menu.notes.map((note) => (
                        <li
                          key={note}
                          className="flex items-start gap-2.5 text-sm leading-6 text-[#735E6C]"
                        >
                          <CheckCircle
                            weight="fill"
                            className="mt-1 size-4 shrink-0 text-[#722F37]"
                            aria-hidden="true"
                          />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-7 divide-y divide-[#3A2232]/10 bg-[#FFFDF9] px-4 sm:px-5">
                  <div className="flex items-start gap-3 py-4">
                    <Gift
                      weight="duotone"
                      className="mt-0.5 size-6 shrink-0 text-[#722F37]"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#722F37]">
                        Harga sudah termasuk
                      </span>
                      <p className="mt-1 text-sm font-semibold leading-6 text-[#3A2232]">
                        {menu.includedLabel}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-4">
                    <DeliveryIcon
                      weight="duotone"
                      className="mt-0.5 size-6 shrink-0 text-[#722F37]"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#722F37]">
                        Pengiriman
                      </span>
                      <p className="mt-1 text-sm font-semibold leading-6 text-[#3A2232]">
                        {menu.deliveryLabel}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={getProductWhatsAppUrl(menu.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-[#722F37] px-7 py-3.5 text-sm font-bold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#5F252D] sm:w-auto"
                >
                  <WhatsappLogo
                    weight="fill"
                    className="size-5"
                    aria-hidden="true"
                  />
                  Pesan {menu.name}
                  <ArrowUpRight
                    weight="bold"
                    className="size-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          );
        })}
      </section>

      <section
        className="bg-[#FFFDF9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
        aria-labelledby="order-note-title"
      >
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37]">
              Sebelum memesan
            </p>
            <h2
              id="order-note-title"
              className="mt-4 font-serif-display text-3xl font-medium leading-tight text-[#3A2232] sm:text-4xl"
            >
              Kami bantu siapkan pesananmu.
            </h2>
          </div>
          <div>
            <ul className="space-y-3 text-sm leading-7 text-[#735E6C] sm:text-base">
              <li>
                Pemesanan dadakan dapat dilayani jika slot masih tersedia.
              </li>
              <li>Jam pengiriman pukul 08.00–18.00.</li>
              <li>Harga belum termasuk biaya pengiriman.</li>
              <li>
                Biaya pengiriman mengikuti aplikasi GoSend/Lalamove dan dapat berubah
                mengikuti kondisi perjalanan.
              </li>
            </ul>
            <a
              href={getWhatsAppUrl(
                "Halo LalaGi Dimsum, saya mau konsultasi dan pesan dimsum 😊",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-[#722F37] px-8 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#5F252D]"
            >
              <WhatsappLogo
                weight="fill"
                className="size-5"
                aria-hidden="true"
              />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <nav className="border-t border-[#3A2232]/10 px-5 py-12 sm:px-8 lg:px-12" aria-label="Panduan memilih menu">
        <div className="mx-auto grid max-w-[1100px] gap-8 sm:grid-cols-3">
          <Link href="/dimsum-cake" className="group border-l border-[#722F37]/30 pl-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#722F37]">Untuk perayaan</span>
            <strong className="mt-2 block font-serif-display text-xl group-hover:text-[#722F37]">Panduan Dimsum Cake</strong>
          </Link>
          <Link href="/pesanan-acara" className="group border-l border-[#722F37]/30 pl-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#722F37]">Untuk banyak tamu</span>
            <strong className="mt-2 block font-serif-display text-xl group-hover:text-[#722F37]">Pesanan Acara</strong>
          </Link>
          <Link href="/tentang" className="group border-l border-[#722F37]/30 pl-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#722F37]">Dari Jagakarsa</span>
            <strong className="mt-2 block font-serif-display text-xl group-hover:text-[#722F37]">Tentang LalaGi Dimsum</strong>
          </Link>
        </div>
      </nav>

      <Footer />
      <WhatsAppFloatingCta />
    </main>
  );
}
