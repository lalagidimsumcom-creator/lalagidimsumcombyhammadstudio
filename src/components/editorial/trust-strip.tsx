type ProofPointProps = {
  value: string;
  label: string;
  icon: "star" | "halal" | "shield" | "location";
};

function ProofIcon({ icon }: Pick<ProofPointProps, "icon">) {
  const iconClassName = "h-9 w-9 shrink-0 text-[#C39A4A] sm:h-10 sm:w-10";

  if (icon === "star") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 3 2.62 5.31 5.86.85-4.24 4.13 1 5.83L12 16.37l-5.24 2.75 1-5.83-4.24-4.13 5.86-.85L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "halal") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.75 18.5 6.5v7L12 21.25 5.5 13.5v-7L12 2.75Z" stroke="currentColor" strokeWidth="1.35" />
        <path d="M9.2 15.3V8.7m5.6 6.6V8.7M9.2 12h5.6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.8c2.4 2 4.7 2.65 7.25 2.9v5.55c0 4.65-2.88 8.1-7.25 10-4.37-1.9-7.25-5.35-7.25-10V5.7C7.3 5.45 9.6 4.8 12 2.8Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
        <path d="m8.9 12.1 2 2 4.35-4.55" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 10c0 5.3-7 11-7 11S5 15.3 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function ProofPoint({ value, label, icon }: ProofPointProps) {
  return (
    <div className="flex min-h-24 items-center justify-center gap-4 px-3 py-5 sm:px-5">
      <ProofIcon icon={icon} />
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-left">
        <strong className="font-serif-display text-xl font-medium uppercase tracking-[0.08em] text-[#C9A259] sm:text-2xl">
          {value}
        </strong>
        <span className="font-serif-display text-[0.65rem] uppercase tracking-[0.15em] text-[#F7F3EC] sm:text-xs">
          {label}
        </span>
      </p>
    </div>
  );
}

const proofPoints: ProofPointProps[] = [
  { value: "5.0", label: "Google Rating", icon: "star" },
  { value: "Halal", label: "Certified", icon: "halal" },
  { value: "5+", label: "Tahun", icon: "shield" },
  { value: "Jabodetabek", label: "Area Layanan", icon: "location" },
];

export default function EditorialTrustStrip() {
  return (
    <section aria-label="Kepercayaan pelanggan" className="w-full bg-[#092A35] text-[#F7F3EC]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-4 py-5 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-3 xl:px-16">
        {proofPoints.map((proofPoint, index) => (
          <div
            key={proofPoint.label}
            className={[
              index % 2 === 1 ? "border-l border-[#B69A63]/55" : "",
              index > 1 ? "border-t border-[#B69A63]/55 lg:border-t-0" : "",
              index > 0 ? "lg:border-l lg:border-[#B69A63]/55" : "",
            ].join(" ")}
          >
            <ProofPoint {...proofPoint} />
          </div>
        ))}
      </div>
    </section>
  );
}
