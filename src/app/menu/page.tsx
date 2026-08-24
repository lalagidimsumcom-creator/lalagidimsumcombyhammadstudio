import Image from "next/image";
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
import { MENU_GROUPS, type MenuGroup } from "@/data/products";
import { getProductWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";

const formatRupiah = (price: number) =>
  `Rp${new Intl.NumberFormat("id-ID").format(price)}`;

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

      <Footer />
      <WhatsAppFloatingCta />
    </main>
  );
}
