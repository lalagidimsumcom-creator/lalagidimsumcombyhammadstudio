export type ProductCategory =
  | "cake"
  | "bucket"
  | "tower-tampah"
  | "party"
  | "single"
  | "hampers";

export type StockStatus = "available" | "ask" | "seasonal" | "optional";
export type DeliveryType = "motor-ok" | "car-required" | "standard";

export interface ProductAddon {
  name: string;
  price: number;
}

export interface ProductPriceOption {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  meta: string;
  price?: number;
  pricePrefix?: string;
  priceSuffix?: string;
  description: string;
  includes: string[];
  addons?: ProductAddon[];
  priceOptions?: ProductPriceOption[];
  stockStatus: StockStatus;
  availabilityNote?: string;
  deliveryType: DeliveryType;
  image?: string;
  visualLabel?: string;
}

const cakeExtras = ["Topper", "Candle", "Cutlery", "Greeting Card", "Saus Merah", "Chili Oil", "Tape", "Box Exclusive"];
const cakeAddons: ProductAddon[] = [
  { name: "Keju huruf 10 pcs", price: 5_000 },
  { name: "Extra keju melt", price: 5_000 },
  { name: "Extra pepperoni", price: 5_000 },
];

const cakeVariants = [
  { pieces: 25, price: 165_000, mentai: 14, original: 11 },
  { pieces: 30, price: 185_000, mentai: 20, original: 10 },
  { pieces: 35, price: 200_000, mentai: 20, original: 15 },
  { pieces: 40, price: 225_000, mentai: 25, original: 15 },
  { pieces: 45, price: 260_000, mentai: 25, original: 20 },
];

const bucketVariants = [
  { pieces: 25, price: 180_000, mentai: 14, original: 11 },
  { pieces: 30, price: 200_000, mentai: 20, original: 10 },
  { pieces: 35, price: 215_000, mentai: 20, original: 15 },
  { pieces: 40, price: 240_000, mentai: 25, original: 15 },
  { pieces: 45, price: 275_000, mentai: 25, original: 20 },
];

const menuImage = (number: number) => `/images/menu/lalagi-menu-${String(number).padStart(2, "0")}.webp`;
const cakeImages = [1, 4, 7, 17, 25];
const bucketImages = [9, 11, 13, 15, 21];

const cakeProducts: Product[] = cakeVariants.map((item, index) => ({
  id: index === 0 ? "dimsum-cake" : `dimsum-cake-${item.pieces}`,
  name: `Dimsum Cake ${item.pieces} pcs`,
  category: "cake",
  meta: `${item.pieces} pcs`,
  price: item.price,
  description: "Dimsum Cake untuk ulang tahun dan momen perayaan dengan perpaduan Mentai dan Original.",
  includes: [`Dimsum Mentai — ${item.mentai} pcs`, `Dimsum Original — ${item.original} pcs`, ...cakeExtras],
  addons: cakeAddons,
  stockStatus: "available",
  deliveryType: "motor-ok",
  image: menuImage(cakeImages[index]),
}));

const bucketProducts: Product[] = bucketVariants.map((item, index) => ({
  id: `dimsum-bucket-${item.pieces}`,
  name: `Dimsum Bucket ${item.pieces} pcs`,
  category: "bucket",
  meta: `${item.pieces} pcs`,
  price: item.price,
  description: "Paket perayaan dalam bucket dengan perpaduan Dimsum Mentai dan Original.",
  includes: [`Dimsum Mentai — ${item.mentai} pcs`, `Dimsum Original — ${item.original} pcs`, ...cakeExtras, "Bucket"],
  addons: [...cakeAddons, { name: "Bucket dua warna", price: 5_000 }],
  stockStatus: "available",
  deliveryType: "motor-ok",
  image: menuImage(bucketImages[index]),
}));

const celebrationExtras = ["Topper", "Candle", "Cutlery", "Greeting Card", "Saus Merah", "Chili Oil", "Tape", "Box Exclusive"];

const celebrationProducts: Product[] = [
  {
    id: "dimsum-mini-tower-37",
    name: "Dimsum Mini Tower 37 pcs",
    category: "tower-tampah",
    meta: "37 pcs",
    price: 235_000,
    description: "Mini tower dengan pilihan Mentai atau Mix Mayo Katsuobushi dan Dimsum Original.",
    includes: ["Dimsum Mentai / Mix Mayo Katsuobushi", "Dimsum Original", ...celebrationExtras],
    stockStatus: "available",
    deliveryType: "car-required",
    image: menuImage(2),
  },
  ...[55, 100].map((pieces, index): Product => ({
    id: `dimsum-tower-${pieces}`,
    name: `Dimsum Tower ${pieces} pcs`,
    category: "tower-tampah",
    meta: `${pieces} pcs`,
    price: pieces === 55 ? 350_000 : 635_000,
    description: "Dimsum Tower untuk perayaan besar dengan pilihan Mentai atau all-in topping.",
    includes: ["Dimsum Mentai / all-in topping", "Dimsum Original", ...celebrationExtras, "Bucket"],
    stockStatus: "available",
    deliveryType: "car-required",
    image: menuImage(index === 0 ? 8 : 36),
  })),
  {
    id: "dimsum-money-roll-40",
    name: "Dimsum Roll Money 40 pcs",
    category: "tower-tampah",
    meta: "40 pcs",
    price: 315_000,
    description: "Money Roll berisi Dimsum Mentai, Mayo Katsuobushi, dan Dimsum Original.",
    includes: ["Dimsum Mentai & Mayo Katsuobushi", "Dimsum Original", ...celebrationExtras, "Bucket"],
    stockStatus: "available",
    deliveryType: "car-required",
    image: menuImage(3),
  },
  ...[50, 100].map((pieces): Product => ({
    id: pieces === 50 ? "dimsum-tampah" : "dimsum-tampah-100",
    name: `Dimsum Tampah ${pieces} pcs`,
    category: "tower-tampah",
    meta: `${pieces} pcs`,
    price: pieces === 50 ? 390_000 : 580_000,
    description: "Tampah untuk acara dengan pilihan dimsum dan pelengkap yang dapat dikombinasikan.",
    includes: ["Dimsum Mentai / all-in topping", "Dimsum Original / Dimsum Panggang", "Bisa mix dengan Pempek Palembang", "Lumpia Dimsum", "Gyoza", "Topper", "Candle", "Cutlery", "Greeting Card", "Saus Merah", "Chili Oil"],
    stockStatus: "available",
    deliveryType: "car-required",
    image: menuImage(pieces === 50 ? 6 : 34),
  })),
];

const partyAddons: ProductAddon[] = [
  { name: "Special Gift: keju huruf maks. 10 huruf, topper birthday, candle, box, tape & greeting card", price: 20_000 },
  { name: "Selada", price: 5_000 },
];

const partyProducts: Product[] = [
  ...[20, 25].map((pieces, index): Product => ({
    id: `party-super-mixed-${pieces}`,
    name: `Party Size ${pieces} pcs — Super Mixed`,
    category: "party",
    meta: `${pieces} pcs`,
    price: pieces === 20 ? 100_000 : 125_000,
    description: "Super Mixed berisi Mentai, Mentai Keju Melt, Mayo Katsuobushi, dan Mentai Pepperoni.",
    includes: ["Dimsum Mentai", "Dimsum Mentai Keju Melt", "Dimsum Mayo Katsuobushi", "Dimsum Mentai Pepperoni", "Chili Oil", "Saus Merah", "Cutlery"],
    addons: partyAddons,
    stockStatus: "ask",
    deliveryType: "standard",
    image: menuImage(index === 0 ? 5 : 10),
  })),
  ...[20, 25].map((pieces, index): Product => ({
    id: `party-full-mentai-${pieces}`,
    name: `Party Size ${pieces} pcs — Full Mentai`,
    category: "party",
    meta: `${pieces} pcs`,
    price: pieces === 20 ? 90_000 : 115_000,
    description: "Party Size berisi Dimsum Full Mentai untuk dinikmati bersama.",
    includes: ["Dimsum Full Mentai", "Chili Oil", "Saus Merah", "Cutlery"],
    addons: partyAddons,
    stockStatus: "ask",
    deliveryType: "standard",
    image: menuImage(index === 0 ? 12 : 18),
  })),
  {
    id: "dimsum-mix-platter-20",
    name: "Dimsum Mix Platter 20 pcs",
    category: "party",
    meta: "20 pcs",
    price: 100_000,
    description: "Mix platter berisi lima jenis dimsum dan pelengkap.",
    includes: ["Dimsum Panggang", "Dimsum Mentai", "Dimsum Mayo Katsuobushi", "Lumpia Dimsum", "Gyoza", "Chili Oil", "Saus Merah", "Cutlery"],
    addons: partyAddons,
    stockStatus: "ask",
    deliveryType: "standard",
    image: menuImage(33),
  },
];

const singleProducts: Product[] = [
  ["dimsum-panggang-10", "Dimsum Panggang 10 pcs", "10 pcs", 35_000, ["Dimsum Panggang — 10 pcs", "Cutlery", "Chili Oil"], "/images/lalagi-dimsum-original.jpg"],
  ["dimsum-original-10", "Dimsum Original 10 pcs", "10 pcs", 32_000, ["Dimsum Original — 10 pcs", "Cutlery", "Chili Oil / Saus Merah"], "/images/lalagi-dimsum-original.jpg"],
  ["gyoza-10", "Gyoza 10 pcs", "10 pcs", 35_000, ["Gyoza — 10 pcs", "Cutlery", "Chili Oil"], "/images/lalagi-dimsum-original.jpg"],
  ["lumpia-dimsum-10", "Lumpia Dimsum 10 pcs", "10 pcs", 35_000, ["Lumpia Dimsum — 10 pcs", "Cutlery", "Chili Oil"], "/images/lalagi-dimsum-original.jpg"],
  ["dimsum-supermix-8", "Dimsum Supermix 8 pcs", "8 pcs", 35_000, ["Dimsum Mentai", "Mayo", "Mayo Katsuobushi", "Mentai + Keju Melt", "Cutlery", "Saus Merah"], "/images/lalagi-dimsum-mentai.jpg"],
  ["dimsum-mentai-8", "Dimsum Mentai 8 pcs", "8 pcs", 35_000, ["Dimsum Mentai — 8 pcs", "Cutlery", "Saus Merah"], "/images/lalagi-dimsum-mentai.jpg"],
].map(([id, name, meta, price, includes, image]): Product => ({
  id: id as string,
  name: name as string,
  category: "single",
  meta: meta as string,
  price: price as number,
  description: "Porsi dimsum satuan. Tanyakan ketersediaan stok sebelum memesan.",
  includes: includes as string[],
  stockStatus: "ask",
  deliveryType: "standard",
  image: image as string,
}));

const hamperProducts: Product[] = [
  {
    id: "hampers-ramadan-25",
    name: "Hampers Ramadan / Idul Fitri 25 pcs",
    category: "hampers",
    meta: "Seasonal · 25 pcs",
    price: 150_000,
    description: "Hampers hari raya berisi Dimsum Party Size Super Mixed dan minuman sehat dalam box eksklusif.",
    includes: ["Dimsum Party Size 25 pcs Super Mixed", "Healthy Drink 250 ml", "Chili Oil & Sauce", "Greeting Card & Hangtag Eid Mubarak", "Box Exclusive"],
    stockStatus: "seasonal",
    availabilityNote: "Pre-order saat periode Ramadan dan Idul Fitri.",
    deliveryType: "standard",
    image: "/images/lalagi-dimsum-hampers.jpg",
  },
  {
    id: "hampers-ramadan-20",
    name: "Hampers Ramadan / Idul Fitri 20 pcs",
    category: "hampers",
    meta: "Seasonal · 20 pcs",
    price: 135_000,
    description: "Hampers hari raya dengan Dimsum Party Size Super Mixed, selada, dan minuman sehat.",
    includes: ["Dimsum Party Size 20 pcs Super Mixed with Lettuce", "Chili Oil & Sauce", "Healthy Drink 250 ml", "Greeting Card & Hangtag Eid Mubarak", "Box Exclusive"],
    stockStatus: "seasonal",
    availabilityNote: "Pre-order saat periode Ramadan dan Idul Fitri.",
    deliveryType: "standard",
    image: "/images/lalagi-dimsum-hampers.jpg",
  },
  {
    id: "custom-hampers-ramadan",
    name: "Custom Hampers Ramadan / Idul Fitri",
    category: "hampers",
    meta: "Seasonal · Custom",
    description: "Custom hampers untuk pilihan Dimsum Tampah, Cake, Tower, atau Party Size Full Mentai.",
    includes: ["Pilihan model Dimsum Tampah / Cake / Tower / Party Size Full Mentai", "Dapat ditambah keju huruf", "Dapat ditambah topper Ramadan / Idul Fitri", "Harga all-in kecuali biaya pengiriman"],
    stockStatus: "seasonal",
    availabilityNote: "Harga disesuaikan dengan model dan kebutuhan pesanan.",
    deliveryType: "standard",
    image: "/images/lalagi-dimsum-hampers.jpg",
  },
];

export const PRODUCTS: Product[] = [
  ...cakeProducts,
  ...bucketProducts,
  ...celebrationProducts,
  ...partyProducts,
  ...singleProducts,
  ...hamperProducts,
];
