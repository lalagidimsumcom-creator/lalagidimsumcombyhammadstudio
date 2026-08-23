export type DeliveryType = "motor" | "car";

export interface MenuVariant {
  name: string;
  price: number;
}

export interface MenuGroup {
  id: string;
  menuNumber: string;
  name: string;
  meta: string;
  description: string;
  occasions?: readonly string[];
  variants: readonly MenuVariant[];
  notes?: readonly string[];
  deliveryType: DeliveryType;
  deliveryLabel: string;
  images: readonly string[];
}

const CELEBRATION_OCCASIONS = [
  "Happy Birthday",
  "Congratulations",
  "Happy Graduation",
  "Happy Wedding",
  "Happy Anniversary",
  "Bride to Be",
] as const;

export const MENU_GROUPS: readonly MenuGroup[] = [
  {
    id: "dimsum-tampah",
    menuNumber: "01",
    name: "Dimsum Tampah",
    meta: "Untuk kantor & keluarga",
    description:
      "Dimsum Tampah dikemas secara rapi dan eksklusif, cocok untuk menemani momen spesial di kantor ataupun bersama keluarga.",
    occasions: CELEBRATION_OCCASIONS,
    variants: [
      { name: "Dimsum Tampah 50 pcs", price: 390_000 },
      { name: "Dimsum Tampah 100 pcs", price: 580_000 },
    ],
    deliveryType: "car",
    deliveryLabel: "Pengantaran wajib dengan mobil",
    images: [
      "/images/menu-groups/dimsum-tampah-01.webp",
      "/images/menu-groups/dimsum-tampah-02.webp",
    ],
  },
  {
    id: "dimsum-cake",
    menuNumber: "02",
    name: "Dimsum Cake Reguler",
    meta: "Perayaan yang lebih personal",
    description:
      "Dimsum Cake untuk perayaan momen spesial kamu dengan perpaduan dimsum bersaus mentai creamy dan dimsum original.",
    occasions: CELEBRATION_OCCASIONS,
    variants: [
      { name: "Dimsum Cake Reguler 25 pcs", price: 165_000 },
      { name: "Dimsum Cake Reguler 30 pcs", price: 185_000 },
      { name: "Dimsum Cake Reguler 35 pcs", price: 200_000 },
      { name: "Dimsum Cake Reguler 40 pcs", price: 225_000 },
      { name: "Dimsum Cake Reguler 45 pcs", price: 260_000 },
    ],
    deliveryType: "motor",
    deliveryLabel: "Pengantaran bisa dengan motor",
    images: ["/images/menu-groups/dimsum-cake-reguler.webp"],
  },
  {
    id: "dimsum-bucket",
    menuNumber: "03",
    name: "Dimsum Bucket",
    meta: "Pilihan warna untuk perayaan",
    description:
      "Dimsum Bucket dengan pilihan warna untuk momen spesial kamu, berisi perpaduan dimsum bersaus mentai creamy dan dimsum original.",
    occasions: CELEBRATION_OCCASIONS,
    variants: [
      { name: "Dimsum Bucket 25 pcs", price: 180_000 },
      { name: "Dimsum Bucket 30 pcs", price: 200_000 },
      { name: "Dimsum Bucket 35 pcs", price: 215_000 },
      { name: "Dimsum Bucket 40 pcs", price: 240_000 },
      { name: "Dimsum Bucket 45 pcs", price: 275_000 },
    ],
    deliveryType: "motor",
    deliveryLabel: "Pengantaran bisa dengan motor",
    images: ["/images/menu-groups/dimsum-bucket.webp"],
  },
  {
    id: "dimsum-tower",
    menuNumber: "04",
    name: "Dimsum Tower",
    meta: "Tampilan mewah untuk acara besar",
    description:
      "Dimsum Tower dikemas secara rapi dan mewah, cocok untuk perayaan momen spesial di kantor ataupun bersama keluarga.",
    occasions: CELEBRATION_OCCASIONS,
    variants: [
      { name: "Dimsum Tower 55 pcs", price: 350_000 },
      { name: "Dimsum Tower 100 pcs", price: 635_000 },
    ],
    deliveryType: "car",
    deliveryLabel: "Pengantaran wajib dengan mobil",
    images: [
      "/images/menu-groups/dimsum-tower-01.webp",
      "/images/menu-groups/dimsum-tower-02.webp",
    ],
  },
  {
    id: "dimsum-party-size",
    menuNumber: "05",
    name: "Dimsum Party Size",
    meta: "Untuk dinikmati dan dibagikan",
    description:
      "Pilihan Party Size full mentai atau mix untuk menemani kumpul kecil, hadiah, dan momen berbagi.",
    variants: [
      { name: "Party Size Full Mentai 20 pcs", price: 90_000 },
      { name: "Party Size Mix 20 pcs", price: 100_000 },
      { name: "Party Size Full Mentai 25 pcs", price: 115_000 },
      { name: "Party Size Mix 25 pcs", price: 125_000 },
    ],
    notes: [
      "Bisa request tambahan add-on keju huruf",
      "Bisa request untuk gift",
    ],
    deliveryType: "motor",
    deliveryLabel: "Pengantaran bisa dengan motor",
    images: ["/images/menu-groups/dimsum-party-size.webp"],
  },
];
