export type ProductCategory = "cake" | "bucket" | "tower-tampah" | "party" | "single";
export type StockStatus = "available" | "ask";
export type DeliveryType = "motor-ok" | "car-required" | "standard";

export interface ProductAddon {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  pieces: number;
  price: number;
  description: string;
  includes: string[];
  addons?: ProductAddon[];
  stockStatus: StockStatus;
  deliveryType: DeliveryType;
  image: string;
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

const cakeProducts: Product[] = cakeVariants.map((item, index) => ({
  id: index === 0 ? "dimsum-cake" : `dimsum-cake-${item.pieces}`,
  name: `Dimsum Cake ${item.pieces} pcs`,
  category: "cake",
  pieces: item.pieces,
  price: item.price,
  description: "Dimsum Cake untuk ulang tahun dan momen perayaan dengan perpaduan Mentai dan Original.",
  includes: [`Dimsum Mentai — ${item.mentai} pcs`, `Dimsum Original — ${item.original} pcs`, ...cakeExtras],
  addons: cakeAddons,
  stockStatus: "available",
  deliveryType: "motor-ok",
  image: "/images/lalagi-dimsum-cake.jpg",
}));

const bucketProducts: Product[] = bucketVariants.map((item) => ({
  id: `dimsum-bucket-${item.pieces}`,
  name: `Dimsum Bucket ${item.pieces} pcs`,
  category: "bucket",
  pieces: item.pieces,
  price: item.price,
  description: "Paket perayaan dalam bucket dengan perpaduan Dimsum Mentai dan Original.",
  includes: [`Dimsum Mentai — ${item.mentai} pcs`, `Dimsum Original — ${item.original} pcs`, ...cakeExtras, "Bucket"],
  addons: [...cakeAddons, { name: "Bucket dua warna", price: 5_000 }],
  stockStatus: "available",
  deliveryType: "motor-ok",
  image: "/images/lalagi-dimsum-hampers.jpg",
}));

const celebrationExtras = ["Topper", "Candle", "Cutlery", "Greeting Card", "Saus Merah", "Chili Oil", "Tape", "Box Exclusive"];

const celebrationProducts: Product[] = [
  {
    id: "dimsum-mini-tower-37",
    name: "Dimsum Mini Tower 37 pcs",
    category: "tower-tampah",
    pieces: 37,
    price: 235_000,
    description: "Mini tower dengan pilihan Mentai atau Mix Mayo Katsuobushi dan Dimsum Original.",
    includes: ["Dimsum Mentai / Mix Mayo Katsuobushi", "Dimsum Original", ...celebrationExtras],
    stockStatus: "available",
    deliveryType: "car-required",
    image: "/images/lalagi-dimsum-tower.jpg",
  },
  ...[55, 100].map((pieces): Product => ({
    id: `dimsum-tower-${pieces}`,
    name: `Dimsum Tower ${pieces} pcs`,
    category: "tower-tampah",
    pieces,
    price: pieces === 55 ? 350_000 : 635_000,
    description: "Dimsum Tower untuk perayaan besar dengan pilihan Mentai atau all-in topping.",
    includes: ["Dimsum Mentai / all-in topping", "Dimsum Original", ...celebrationExtras, "Bucket"],
    stockStatus: "available",
    deliveryType: "car-required",
    image: "/images/lalagi-dimsum-tower.jpg",
  })),
  {
    id: "dimsum-money-roll-40",
    name: "Dimsum Roll Money 40 pcs",
    category: "tower-tampah",
    pieces: 40,
    price: 315_000,
    description: "Money Roll berisi Dimsum Mentai, Mayo Katsuobushi, dan Dimsum Original.",
    includes: ["Dimsum Mentai & Mayo Katsuobushi", "Dimsum Original", ...celebrationExtras, "Bucket"],
    stockStatus: "available",
    deliveryType: "car-required",
    image: "/images/lalagi-dimsum-event.jpg",
  },
  ...[50, 100].map((pieces): Product => ({
    id: pieces === 50 ? "dimsum-tampah" : "dimsum-tampah-100",
    name: `Dimsum Tampah ${pieces} pcs`,
    category: "tower-tampah",
    pieces,
    price: pieces === 50 ? 390_000 : 580_000,
    description: "Tampah untuk acara dengan pilihan dimsum dan pelengkap yang dapat dikombinasikan.",
    includes: ["Dimsum Mentai / all-in topping", "Dimsum Original / Dimsum Panggang", "Bisa mix dengan Pempek Palembang", "Lumpia Dimsum", "Gyoza", "Topper", "Candle", "Cutlery", "Greeting Card", "Saus Merah", "Chili Oil"],
    stockStatus: "available",
    deliveryType: "car-required",
    image: "/images/lalagi-dimsum-tampah.png",
  })),
];

const partyProducts: Product[] = [
  ...[20, 25].map((pieces): Product => ({
    id: `party-super-mixed-${pieces}`,
    name: `Party Size ${pieces} pcs — Super Mixed`,
    category: "party",
    pieces,
    price: pieces === 20 ? 100_000 : 125_000,
    description: "Super Mixed berisi Mentai, Mentai Keju Melt, Mayo Katsuobushi, dan Mentai Pepperoni.",
    includes: ["Dimsum Super Mixed", "Chili Oil", "Saus Merah", "Cutlery"],
    addons: [{ name: "Special Gift: keju huruf maks. 10 huruf, topper birthday, candle, box, tape & greeting card", price: 20_000 }, { name: "Selada", price: 5_000 }],
    stockStatus: "ask",
    deliveryType: "standard",
    image: "/images/lalagi-dimsum-event.jpg",
  })),
  ...[20, 25].map((pieces): Product => ({
    id: `party-full-mentai-${pieces}`,
    name: `Party Size ${pieces} pcs — Full Mentai`,
    category: "party",
    pieces,
    price: pieces === 20 ? 90_000 : 115_000,
    description: "Party Size berisi Dimsum Full Mentai untuk dinikmati bersama.",
    includes: ["Dimsum Full Mentai", "Chili Oil", "Saus Merah", "Cutlery"],
    addons: [{ name: "Special Gift: keju huruf maks. 10 huruf, topper birthday, candle, box, tape & greeting card", price: 20_000 }, { name: "Selada", price: 5_000 }],
    stockStatus: "ask",
    deliveryType: "standard",
    image: "/images/lalagi-dimsum-mentai.jpg",
  })),
  {
    id: "dimsum-mix-platter-20",
    name: "Dimsum Mix Platter 20 pcs",
    category: "party",
    pieces: 20,
    price: 100_000,
    description: "Mix platter berisi lima jenis dimsum dan pelengkap.",
    includes: ["Dimsum Panggang", "Dimsum Mentai", "Dimsum Mayo Katsuobushi", "Lumpia Dimsum", "Gyoza", "Chili Oil", "Saus Merah", "Cutlery"],
    addons: [{ name: "Special Gift: keju huruf maks. 10 huruf, topper birthday, candle, box, tape & greeting card", price: 20_000 }, { name: "Selada", price: 5_000 }],
    stockStatus: "ask",
    deliveryType: "standard",
    image: "/images/lalagi-dimsum-tampah.png",
  },
];

const singleProducts: Product[] = [
  ["dimsum-panggang-10", "Dimsum Panggang 10 pcs", 10, 35_000, ["Dimsum Panggang — 10 pcs", "Cutlery", "Chili Oil"], "/images/lalagi-dimsum-original.jpg"],
  ["dimsum-original-10", "Dimsum Original 10 pcs", 10, 32_000, ["Dimsum Original — 10 pcs", "Cutlery", "Chili Oil / Saus Merah"], "/images/lalagi-dimsum-original.jpg"],
  ["gyoza-10", "Gyoza 10 pcs", 10, 35_000, ["Gyoza — 10 pcs", "Cutlery", "Chili Oil"], "/images/lalagi-dimsum-original.jpg"],
  ["lumpia-dimsum-10", "Lumpia Dimsum 10 pcs", 10, 35_000, ["Lumpia Dimsum — 10 pcs", "Cutlery", "Chili Oil"], "/images/lalagi-dimsum-original.jpg"],
  ["dimsum-supermix-8", "Dimsum Supermix 8 pcs", 8, 35_000, ["Dimsum Mentai", "Mayo", "Mayo Katsuobushi", "Mentai + Keju Melt", "Cutlery", "Saus Merah"], "/images/lalagi-dimsum-mentai.jpg"],
  ["dimsum-mentai-8", "Dimsum Mentai 8 pcs", 8, 35_000, ["Dimsum Mentai — 8 pcs", "Cutlery", "Saus Merah"], "/images/lalagi-dimsum-mentai.jpg"],
].map(([id, name, pieces, price, includes, image]): Product => ({
  id: id as string,
  name: name as string,
  category: "single",
  pieces: pieces as number,
  price: price as number,
  description: "Porsi dimsum satuan. Tanyakan ketersediaan stok sebelum memesan.",
  includes: includes as string[],
  stockStatus: "ask",
  deliveryType: "standard",
  image: image as string,
}));

export const PRODUCTS: Product[] = [
  ...cakeProducts,
  ...bucketProducts,
  ...celebrationProducts,
  ...partyProducts,
  ...singleProducts,
];
