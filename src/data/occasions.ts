export interface Occasion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  targetSection: string;
  badge: string;
}

export const OCCASIONS: Occasion[] = [
  {
    id: "birthday",
    title: "Rayain Birthday",
    subtitle: "Dimsum Cake & Tower",
    description: "Bosan kue tart manis? Ganti dengan Dimsum Cake gurih hangat yang bikin momen tiup lilin makin berkesan dan disukai semua orang.",
    image: "/images/lalagi-dimsum-cake.jpg",
    targetSection: "#signature-cake",
    badge: "Most Popular 🎂"
  },
  {
    id: "hampers",
    title: "Mau Kirim Hadiah",
    subtitle: "Dimsum Hampers",
    description: "Kirim bingkisan makanan lezat dan hangat untuk sahabat, keluarga, atau kolega dengan packaging kayu estetik dan kartu ucapan.",
    image: "/images/lalagi-dimsum-hampers.jpg",
    targetSection: "#menu",
    badge: "Thoughtful Gift 🎁"
  },
  {
    id: "acara",
    title: "Acara Rame-rame",
    subtitle: "Dimsum Tampah & Bulk Order",
    description: "Praktis untuk arisan, rapat kantor, gathering komunitas, hingga resepsi pernikahan. Porsi melimpah dengan aneka varian.",
    image: "/images/lalagi-dimsum-tampah.jpg",
    targetSection: "#event",
    badge: "Sharing Feast ✨"
  },
  {
    id: "ngemil",
    title: "Lagi Pengen Dimsum",
    subtitle: "Dimsum Regular & Frozen",
    description: "Buat teman santai nonton atau stok praktis di freezer rumah. Tinggal kukus sebentar, dimsum hangat siap dinikmati kapan saja.",
    image: "/images/lalagi-dimsum-original.jpg",
    targetSection: "#menu",
    badge: "Daily Snacking 🥟"
  }
];
