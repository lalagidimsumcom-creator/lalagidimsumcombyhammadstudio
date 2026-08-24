import Image from "next/image";

const clients = [
  { name: "BCA", logo: "/images/clients/images (3).png" },
  { name: "BRI", logo: "/images/clients/BRI_2025_(with_full_name).svg" },
  { name: "BSI", logo: "/images/clients/bsi.webp" },
  { name: "BTN", logo: "/images/clients/btn.webp" },
  { name: "DBS", logo: "/images/clients/dbs.webp" },
  { name: "Pertamina", logo: "/images/clients/Logo-Pertamina-resize-2-1.png" },
  { name: "Mabes Polri", logo: "/images/clients/Badge_of_the_Indonesian_National_Police.svg.png" },
  { name: "Kementerian PU", logo: "/images/clients/logo-kemenpu.png" },
  { name: "Kemendagri", logo: "/images/clients/kemendagri.webp" },
  { name: "Universitas Indonesia", logo: "/images/clients/images.jpg" },
  { name: "Universitas Negeri Jakarta", logo: "/images/clients/unj.webp" },
  { name: "Jasa Marga", logo: "/images/clients/images (5).png" },
  { name: "SCTV", logo: "/images/clients/SCTV_Logo.svg.png" },
  { name: "Kompas", logo: "/images/clients/Logo_Kompasdotcom.png" },
  { name: "Sinarmas Land", logo: "/images/clients/Sinar_Mas_Land_Logo.png" },
  { name: "Tokopedia", logo: "/images/clients/logo-tokopedia.png" },
  { name: "RS Jantung Harapan Kita", logo: "/images/clients/images (5).jpg" },
  { name: "BPJS Kesehatan", logo: "/images/clients/images (6).jpg" },
] as const;

export default function EditorialClientWall() {
  return (
    <section className="border-b border-[#3A2232]/15 bg-[#FFFDF9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="clients-title">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-8 border-b border-[#3A2232]/15 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#722F37]">Clients LalaGi Dimsum</p>
            <h2 id="clients-title" className="mt-4 text-balance font-serif-display text-3xl font-medium leading-tight text-[#3A2232] sm:text-4xl lg:text-5xl">
              Dipercaya untuk berbagai momen.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#735E6C] sm:text-base lg:justify-self-end">
            Dari kebutuhan kantor hingga acara institusi, LalaGi Dimsum hadir dengan sajian yang rapi dan siap dibagikan.
          </p>
        </div>

        <ul className="mt-4 grid grid-cols-2 border-l border-t border-[#3A2232]/12 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <li key={client.name} className="group flex min-h-32 flex-col items-center justify-center gap-3 border-b border-r border-[#3A2232]/12 bg-[#FFFDF9] px-4 py-5 text-center transition-colors duration-300 hover:bg-[#F7F3EF] sm:min-h-36">
              <div className="relative h-14 w-full max-w-36 sm:h-16">
                <Image src={client.logo} alt={`Logo ${client.name}`} fill sizes="144px" className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <span className="text-xs font-semibold leading-5 text-[#3A2232]">{client.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
