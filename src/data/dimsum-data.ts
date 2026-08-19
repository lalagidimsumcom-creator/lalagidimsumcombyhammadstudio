import { MenuTab, ReviewItem, FaqItem, FeatureItem, StatItem } from "@/types/dimsum";

export const SITE_INFO = {
  name: "Dimsum Muda Mudi",
  tagline: "Supplier Dimsum Jakarta Frozen untuk Reseller dan UMKM",
  phone: "+62 822-9775-5878",
  whatsappNumber: "6282297755878",
  address: "Jl. Bukit Duri Utara No. 5, RT 15 / RW 2, Manggarai, Tebet, Jakarta Selatan",
  hours: "Setiap hari, pukul 09.00 – 18.00 WIB",
  deliveryArea: "Jakarta & sekitarnya — termasuk Bekasi, Depok, dan Tangerang",
  mapsUrl: "https://maps.google.com/?cid=10992240946410887498",
  mapsEmbed: "https://maps.google.com/maps?q=Garasi%20warna%20merah%2C%20Jl%20bukit%20duri%20utara%20no%205%20rt%2015%20%2F%20rw%2002%20tebet%20kota%20jakarta%20selatan%2C%20selatan%2C%20RT.15%2FRW.2%2C%20Manggarai%2C%20Kec.%20Tebet%2C%20Jakarta%20selata%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012850&t=m&z=14&output=embed&iwloc=near",
  generalWaUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20ingin%20memesan%20dimsum.%20Mohon%20informasi%20menu%20dan%20harganya.%20Terima%20kasih.",
  resellerWaUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20tertarik%20menjadi%20reseller.%20Mohon%20informasi%20mengenai%20syarat,%20harga%20reseller,%20dan%20cara%20bergabung.%20Terima%20kasih."
};

export const MENU_TABS: MenuTab[] = [
  {
    id: "25pcs",
    label: "Dimsum 25pcs",
    items: [
      {
        id: "orig-25",
        title: "Dimsum Original",
        price: "Rp 50.000",
        image: "/images/IMG_6640.png",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Original%2025pcs."
      },
      {
        id: "mentai-25",
        title: "Dimsum Mentai",
        price: "Rp 62.500",
        image: "/images/IMG_5613.jpg",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Mentai%2025pcs."
      },
      {
        id: "nori-25",
        title: "Dimsum Nori",
        price: "Rp 67.500",
        image: "/images/IMG_6650.png",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Nori%2025pcs."
      },
      {
        id: "keju-25",
        title: "Dimsum Keju Lumer",
        price: "Rp 62.500",
        image: "/images/Gemini_Generated_Image_7zulo37zulo37zul.jpg",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Keju%20Lumer%2025pcs."
      },
      {
        id: "moza-25",
        title: "Dimsum Mozarella",
        price: "Rp 87.500",
        image: "/images/IMG_6642.png",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Mozarella%2025pcs."
      },
      {
        id: "gyoza-25",
        title: "Dimsum Gyoza",
        price: "Rp 62.500",
        image: "/images/IMG_6647.jpg",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Gyoza%2025pcs."
      }
    ]
  },
  {
    id: "50pcs",
    label: "Dimsum 50pcs",
    items: [
      {
        id: "orig-50",
        title: "Dimsum Original",
        price: "Rp 95.000",
        image: "/images/IMG_6640.png",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Original%2050pcs."
      },
      {
        id: "mini-50",
        title: "Dimsum Mini Original",
        price: "Rp 62.000",
        image: "/images/IMG_5604-3.jpg",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Mini%20Original%2050pcs."
      }
    ]
  },
  {
    id: "100pcs",
    label: "Dimsum 100pcs",
    items: [
      {
        id: "orig-100",
        title: "Dimsum Original",
        price: "Rp 185.000",
        image: "/images/IMG_6640.png",
        orderText: "Order ->",
        orderUrl: "https://wa.me/6282297755878?text=Halo%20Dimsum%20Muda%20Mudi,%20saya%20mau%20order%20Dimsum%20Original%20100pcs."
      }
    ]
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: "f1",
    title: "Kualitas Premium",
    description: "Dimsum dibuat dari bahan pilihan, ukuran lebih besar dibanding merek lain, dengan rasa yang konsisten dan autentik.",
    iconName: "Sparkles"
  },
  {
    id: "f2",
    title: "Harga Reseller Langsung",
    description: "Tidak ada minimum order. Beli 1 pack sudah dapat harga reseller, cocok untuk modal kecil dan mulai usaha dimsum dari rumah.",
    iconName: "Star"
  },
  {
    id: "f3",
    title: "Produk Fresh & Frozen Tahan Lama",
    description: "Dimsum frozen kami dikemas higienis dan tahan lama hingga 3 bulan di freezer. Praktis untuk stok usaha maupun konsumsi sehari-hari di rumah.",
    iconName: "Gem"
  },
  {
    id: "f4",
    title: "Mudah Dijual Kembali",
    description: "Produk dengan demand tinggi, margin menarik, dan kemasan menarik-siap jual langsung ke konsumen akhir.",
    iconName: "BadgePercent"
  }
];

export const STATS: StatItem[] = [
  { label: "TOTAL RESELLER", value: 88, suffix: "+" },
  { label: "KAPASITAS PRODUKSI", value: 75000, suffix: "+" },
  { label: "PRODUK TERJUAL", value: 100000, suffix: "+" }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "hidayati04mifta",
    rating: 5,
    product: "Dimsum Gyoza 25pcs",
    comment: "Respon penjual cepat pengiriman juga kilat. Rasa autentik dan sangat gurih."
  },
  {
    id: "r2",
    author: "s*****6",
    rating: 5,
    product: "Dimsum Original 25pcs",
    comment: "Sumpahhh baru banget pertama kali beli, enak banget juicyyy, ayam nya ngayam banget, lembut juga, enak banget dah pokoknya ini kek nya bakal langganan hehe, bakal jadi langganan."
  },
  {
    id: "r3",
    author: "t*****0",
    rating: 5,
    product: "Dimsum Nori 25pcs",
    comment: "Sudah beberapa kali beli disini rasanya tetap memuaskan. Nori wangi dan daging padat."
  },
  {
    id: "r4",
    author: "dedehmardiah741",
    rating: 5,
    product: "Dimsum Mozarella 25pcs",
    comment: "Dimsumnya enak.. ukuran menurut saya pas.. rasanya ga bikin enek.. pas di lidah saya.. datang masih hangat siap santap, dan crispy pas di gigit, gurih mantappppp."
  },
  {
    id: "r5",
    author: "0102sagita",
    rating: 5,
    product: "Dimsum Keju Lumer 25pcs",
    comment: "Enakkk polll keju nya lumerr di dalam, berasa bgt keju nya ga pelit, daging nya juga fulll mantap kasi 100 deh buat muda mudi."
  },
  {
    id: "r6",
    author: "tyo1320",
    rating: 5,
    product: "Dimsum Nori 25pcs",
    comment: "Enak bangeeet. Baru nemu dimsum beli online tp se-enak ini. Thanks seller."
  },
  {
    id: "r7",
    author: "k*****o",
    rating: 5,
    product: "Dimsum Original 25pcs",
    comment: "Datang dlm keadaan masih hangat, gurih tapi bukan asin, ayam & jamurnya berasa, sausnya mantap."
  },
  {
    id: "r8",
    author: "panantok",
    rating: 5,
    product: "Dimsum Mini Original 50pcs",
    comment: "Sudah sering berlangganan di sini dan respon pembeli cepat."
  },
  {
    id: "r9",
    author: "ardiyasmin",
    rating: 5,
    product: "Dimsum Mini Original 50pcs",
    comment: "Pengiriman cepat, uda dicoba rasanya enak.. Terima kasih seller shopee… maknyus."
  },
  {
    id: "r10",
    author: "verawati_88",
    rating: 5,
    product: "Dimsum Mini Original 50pcs",
    comment: "Makasih seller, udah jual produk berkualitas. Murah tp kualitas bagus bgt, gak kayak dimsum seribuan, laris manis jualanku.. Lancar terus ya usahanya."
  },
  {
    id: "r11",
    author: "lumbungherbal28",
    rating: 5,
    product: "Dimsum Original 100pcs",
    comment: "Alhamdulillah order yg ke 3 kalinya soal rasa uuenaak banget rasa daging ayamnya sangat terasa size sedang banyak konsumen sya yg bilang enaaak."
  },
  {
    id: "r12",
    author: "yuanz77",
    rating: 5,
    product: "Dimsum Original 100pcs",
    comment: "Udah 2 kali beli. Dan udah rekomendasiin ke beberapa temen yang mau ada acara. Rasanya enak, gede dan masih anget sampe kantor."
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Apakah ada syarat minimum order untuk mendapatkan harga dimsum reseller?",
    answer: "Tidak ada minimum order sama sekali. Di Dimsum Muda Mudi, Anda bisa membeli produk mulai dari 1 pack saja dan langsung mendapatkan harga dimsum grosir termurah kualitas premium."
  },
  {
    id: "faq-2",
    question: "Bagaimana cara bergabung menjadi reseller dimsum resmi?",
    answer: "Caranya sangat mudah. Anda cukup menghubungi tim admin kami melalui tombol WhatsApp di website ini. Kami akan langsung membantu pendaftaran Anda untuk memulai reseller dimsum atau usaha dimsum mandiri dari rumah."
  },
  {
    id: "faq-3",
    question: "Apakah tersedia produk dimsum frozen yang siap dikirim setiap hari?",
    answer: "Ya, kami menyediakan dimsum frozen yang diproduksi fresh setiap hari tanpa bahan pengawet. Produk dibekukan dengan standar higienis tinggi agar tahan lama dan siap dikirim kapan saja untuk menyuplai bisnis dimsum rumahan Anda."
  },
  {
    id: "faq-4",
    question: "Mengapa harus memilih Dimsum Muda Mudi sebagai supplier dimsum terpercaya?",
    answer: "Karena kami adalah supplier dimsum dan distributor dimsum tangan pertama yang menawarkan jaminan dimsum murah dengan kualitas dimsum enak setingkat restoran. Ukuran dimsum kami juga lebih besar dan padat daging sehingga mudah dijual kembali."
  },
  {
    id: "faq-5",
    question: "Apakah melayani pengiriman area dimsum tebet dan wilayah Jakarta lainnya?",
    answer: "Tentu saja. Dapur utama kami berlokasi strategis di area dimsum tebet, Jakarta Selatan. Kami melayani pengiriman cepat menggunakan kurir instan ke seluruh wilayah kota untuk Anda yang mencari supplier dimsum jakarta atau agen dimsum terdekat."
  }
];

export const VIDEOS = [
  {
    id: "v1",
    src: "/videos/review-video-1.mp4",
    author: "@dimsum.mudamudi",
    title: "Proses & Kualitas Dimsum Muda Mudi"
  },
  {
    id: "v2",
    src: "/videos/review-video-2.mp4",
    author: "@sensen_ahmad",
    title: "Review Jujur Dimsum Muda Mudi"
  },
  {
    id: "v3",
    src: "/videos/review-video-3.mp4",
    author: "@customer_review",
    title: "Unboxing & Santap Hangat"
  }
];
