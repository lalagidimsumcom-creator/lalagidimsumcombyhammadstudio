export interface Product {
  id: string;
  name: string;
  category: "signature" | "sharing" | "regular" | "hampers";
  badge?: string;
  description: string;
  price?: string;
  priceNote?: string;
  image: string;
  highlights: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "dimsum-cake",
    name: "Dimsum Cake",
    category: "signature",
    badge: "Birthday & Celebration Favorite 🎂",
    description: "Kue ulang tahun gurih yang disusun dari beberapa dimsum dengan baluran saus mentai bakar.",
    price: "Mulai Rp 165.000 (25 pcs)",
    priceNote: "Tersedia tulisan custom",
    image: "/images/lalagi-dimsum-cake.jpg",
    highlights: ["Dimsum Ayam", "Free Cake Topper dan Lilin", "Bisa Custom Tulisan", "Pengiriman Aman dengan Driver LalaGi Dimsum"]
  },
  {
    id: "dimsum-tower",
    name: "Dimsum Tower",
    category: "signature",
    badge: "Graduation & Anniversary 🎓",
    description: "Menara dimsum bertingkat megah dengan hiasan pita dan sparkler, cocok untuk selebrasi kelulusan, anniversary, dan pesta kejutan.",
    price: "Mulai 50 - 100 pcs",
    priceNote: "Konsultasi via WhatsApp",
    image: "/images/lalagi-dimsum-tower.jpg",
    highlights: ["3 Tingkat Menara Megah", "Pernah Dipesan Mabes Polri (100 pcs)", "Termasuk Saus Cocolan Lengkap", "Siap Santap di Lokasi Acara"]
  },
  {
    id: "dimsum-tampah",
    name: "Dimsum Tampah",
    category: "sharing",
    badge: "Gathering & Arisan Best Seller ✨",
    description: "Sajian tampah anyaman bambu tradisional berisi puluhan dimsum aneka varian dengan 2 mangkuk saus cocolan khas di tengahnya.",
    price: "Porsi Rame-Rame",
    priceNote: "Tersedia 30, 50, hingga 100 pcs",
    image: "/images/lalagi-dimsum-tampah.png",
    highlights: ["Porsi Melimpah untuk Acara", "Campuran Aneka Varian Dimsum", "Wadah Tampah Anyaman Cantik", "Pernah Dipesan RS Harapan Kita (200 pcs)"]
  },
  {
    id: "dimsum-mentai",
    name: "Dimsum Mentai",
    category: "regular",
    badge: "Creamy & Torched 🔥",
    description: "Dimsum ayam lembut dengan siraman saus mentai gurih-creamy yang dibakar torch hingga harum dan ditaburi tobiko.",
    price: "Rp 37.000",
    priceNote: "Snapshot harga marketplace",
    image: "/images/lalagi-dimsum-mentai.jpg",
    highlights: ["Saus Mentai Bakar Khas", "Topping Tobiko & Nori Crispy", "Fresh Made to Order", "Daging Full Ayam Juicy"]
  },
  {
    id: "dimsum-original",
    name: "Dimsum Ayam Frozen",
    category: "regular",
    badge: "Everyday Favorite 🥟",
    description: "Dimsum siomay ayam klasik dengan adonan padat daging ayam segar, kulit lembut, dan kaldu gurih alami tanpa bahan pengawet.",
    price: "Rp 33.000",
    priceNote: "Snapshot harga marketplace",
    image: "/images/lalagi-dimsum-original.jpg",
    highlights: ["90% Daging Ayam Bersertifikat Halal", "Tersedia Fresh & Frozen Siap Kukus", "Stok Praktis Cemilan Rumah", "Termasuk Saus & Chili Oil"]
  },
  {
    id: "dimsum-hampers",
    name: "Dimsum Hampers",
    category: "hampers",
    badge: "Food Gift & Special Moments 🎁",
    description: "Paket bingkisan makanan eksklusif dalam kotak kayu premium berpita coral, dilengkapi kartu ucapan dan jar chili oil spesial.",
    price: "Rp 90.000",
    priceNote: "Snapshot harga marketplace",
    image: "/images/lalagi-dimsum-hampers.jpg",
    highlights: ["Packaging Kotak Kayu Eksklusif", "Free Kartu Ucapan Personal", "Jar Chili Oil Spesial LalaGi", "Hadiah Berkesan & Lezat"]
  }
];
