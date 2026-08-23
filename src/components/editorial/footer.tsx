import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { BRAND_CONFIG } from "@/data/config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Dimsum Cake", href: "/dimsum-cake" },
  { label: "Pesanan Acara", href: "/pesanan-acara" },
  { label: "Tentang", href: "/tentang" },
];

const offerings = [
  { label: "Menu Dimsum", href: "/menu" },
  { label: "Dimsum Cake", href: "/dimsum-cake" },
  { label: "Pesanan Acara", href: "/pesanan-acara" },
];

const linkClass =
  "transition-colors duration-200 hover:text-lalagi-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lalagi-coral";

export default function EditorialFooter() {
  return (
    <footer className="bg-lalagi-darkcocoa px-5 pb-8 text-lalagi-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1360px] border-t border-lalagi-coral/60 pt-12 sm:pt-14">
        <div className="grid gap-11 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.8fr_1.1fr] lg:gap-12">
          <div>
            <Link
              href="/"
              className={`inline-flex items-center gap-4 ${linkClass}`}
              aria-label="LalaGi Dimsum — Home"
            >
              <Image
                src="/images/lalagi-logo.jpg"
                alt=""
                width={52}
                height={52}
                className="aspect-square rounded-full border border-white/25 object-cover"
              />
              <span className="text-lg font-semibold tracking-normal text-white">
                LalaGi Dimsum
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              Dimsum homemade halal dari Jagakarsa, dibuat hangat untuk setiap
              momen.
            </p>
            <p className="mt-3 text-xs leading-5 tracking-wide text-white/50">
              Halal MUI No. {BRAND_CONFIG.halalCertNumber}
            </p>
            <div className="mt-6 flex gap-5 text-lalagi-coral">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label={`Instagram ${BRAND_CONFIG.instagramHandle}`}
              >
                <InstagramLogo size={22} weight="regular" aria-hidden="true" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label={`WhatsApp ${BRAND_CONFIG.phoneDisplay}`}
              >
                <WhatsappLogo size={22} weight="regular" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.14em] text-lalagi-coral">
              NAVIGASI
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.14em] text-lalagi-coral">
              LAYANAN
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {offerings.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.14em] text-lalagi-coral">
              KONTAK
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 ${linkClass}`}
                >
                  <WhatsappLogo
                    size={18}
                    weight="regular"
                    className="mt-0.5 shrink-0 text-lalagi-coral"
                    aria-hidden="true"
                  />
                  <span>{BRAND_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 ${linkClass}`}
                >
                  <InstagramLogo
                    size={18}
                    weight="regular"
                    className="mt-0.5 shrink-0 text-lalagi-coral"
                    aria-hidden="true"
                  />
                  <span>{BRAND_CONFIG.instagramHandle}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  weight="regular"
                  className="mt-0.5 shrink-0 text-lalagi-coral"
                  aria-hidden="true"
                />
                <span>{BRAND_CONFIG.location}</span>
              </li>
              <li>
                <a
                  href="mailto:hello@lalagidimsum.com"
                  className={`flex items-start gap-3 ${linkClass}`}
                >
                  <EnvelopeSimple
                    size={18}
                    weight="regular"
                    className="mt-0.5 shrink-0 text-lalagi-coral"
                    aria-hidden="true"
                  />
                  <span>hello@lalagidimsum.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lalagi-coral/60 pt-7 text-center text-[0.68rem] tracking-[0.08em] text-white/45 sm:text-left">
          © {new Date().getFullYear()} LalaGi Dimsum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
