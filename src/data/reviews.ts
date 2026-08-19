export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  date: string;
  productOrdered?: string;
  content: string;
  verified: boolean;
}

export const REVIEWS_DATA = {
  averageRating: "5.0",
  totalReviewsCount: "166+ Ulasan",
  googleMapsReviewUrl: "https://www.google.com/maps/search/LalaGi+Dimsum+Jagakarsa",
  reviews: [
    {
      id: "rev-1",
      author: "Rifdah Safitri",
      role: "Ulasan Google Maps",
      rating: 5,
      date: "2 bulan lalu",
      productOrdered: "Dimsum Cake Birthday",
      content: "Demi apasii ga expect banget kalo bakal sesuai ekspektasiiii 😭🫶🏻 Bentuknya cantik, rasanya jugaa enak banget 🥹🤍 Huaaa puas banget beli disinii, adminnya juga fastrespon & ramah banget!",
      verified: true
    },
    {
      id: "rev-2",
      author: "wellysa amanda",
      role: "Local Guide Google (15 ulasan)",
      rating: 5,
      date: "3 bulan lalu",
      productOrdered: "Dimsum Tower & Acara",
      content: "Kasih temen yg ulang tahun dimsum tower. Cari-cari di Instagram eh nemu LalaGi Dimsum. Fast respon bgt pelayanannya, mau juga terima custom request. Dan ternyata dimsumnya beneran enak, padat dagingnya!",
      verified: true
    },
    {
      id: "rev-3",
      author: "ayumna",
      role: "Local Guide Google (22 ulasan)",
      rating: 5,
      date: "4 bulan lalu",
      productOrdered: "Dimsum Cake Mentai",
      content: "Dimsum cake yang super duper worth it di Jagakarsa! Kata cowoku dimsumnya enak kakk hihihii mentainya juga enakk banget! (Fyi doi picky bgt kalo sama mentai sauce) trs yang jelas secara visual tampilannya cantiiik!",
      verified: true
    },
    {
      id: "rev-4",
      author: "Pengunjung Setia LalaGi",
      role: "Ulasan Google Maps",
      rating: 5,
      date: "Repeat Order",
      productOrdered: "Dimsum Hampers & Cake",
      content: "Kedua kalinya pesen di sini.. Sebelumnya cake dimsum, sekarang hampers dimsum. Hampersnya cantik banget, dimsumnya enak full ayam, mba-mbanya ramah dan gercep!",
      verified: true
    },
    {
      id: "rev-5",
      author: "Dian Permata",
      role: "Ulasan Google Maps",
      rating: 5,
      date: "Pelanggan Terverifikasi",
      productOrdered: "Dimsum Tampah 50 pcs",
      content: "Gak salah banget beli Dimsum Tampah disini, paket lengkap banget buat acara keluarga. Daging ayamnya kerasa gurih alami bukan tepung doang, chili oil-nya nagih!",
      verified: true
    },
    {
      id: "rev-6",
      author: "Farhan Maulana",
      role: "Ulasan Google Maps",
      rating: 5,
      date: "Pelanggan Terverifikasi",
      productOrdered: "Dimsum Frozen Pack",
      content: "Service-nya oke banget, seller fast response. Dimsum frozen-nya praktis tinggal kukus 10 menit, rasa tetep juicy dan padat. Stok wajib di freezer rumah.",
      verified: true
    }
  ] as Review[]
};
