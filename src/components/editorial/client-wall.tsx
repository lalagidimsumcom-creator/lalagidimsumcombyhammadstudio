import Image from "next/image";

const clients = [
  { name: "BCA", logo: "/images/clients/images (3).png" },
  { name: "BRI", logo: "/images/clients/BRI_2025_(with_full_name).svg" },
  { name: "Pertamina", logo: "/images/clients/Logo-Pertamina-resize-2-1.png" },
  { name: "Mabes Polri", logo: "/images/clients/Badge_of_the_Indonesian_National_Police.svg.png" },
  { name: "Kementerian PU", logo: "/images/clients/logo-kemenpu.png" },
  { name: "Kemendagri" },
  { name: "Universitas Indonesia", logo: "/images/clients/images.jpg" },
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
    <section className="overflow-hidden border-b border-[#3A2232]/15 bg-[#FFFDF9] py-16 lg:py-24" aria-labelledby="clients-title">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
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

      </div>

      <div className="client-marquee-rail mt-8 overflow-hidden" aria-label="Daftar client LalaGi Dimsum">
        <div className="client-marquee-track flex w-max">
          {[0, 1].map((copyIndex) => (
            <ul
              key={copyIndex}
              className="flex shrink-0 border-y border-[#3A2232]/12"
              aria-hidden={copyIndex === 1 ? "true" : undefined}
            >
              {clients.map((client) => (
                <li key={client.name} className="group flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-3 border-r border-[#3A2232]/12 bg-[#FFFDF9] px-4 py-5 text-center transition-colors duration-300 hover:bg-[#F7F3EF] sm:h-40 sm:w-52">
                  {"logo" in client ? (
                    <div className="relative h-14 w-full max-w-36 sm:h-16">
                      <Image src={client.logo} alt={`Logo ${client.name}`} fill sizes="144px" loading="eager" className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]" />
                    </div>
                  ) : (
                    <span aria-hidden="true" className="flex size-14 items-center justify-center rounded-full border border-[#722F37]/20 font-serif-display text-xl font-semibold text-[#722F37]">K</span>
                  )}
                  <span className="text-xs font-semibold leading-5 text-[#3A2232]">{client.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
