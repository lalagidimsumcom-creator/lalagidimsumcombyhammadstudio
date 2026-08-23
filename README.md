# LalaGi Dimsum

Website resmi LalaGi Dimsum, brand dimsum homemade dengan 90% daging ayam dari Jagakarsa, Jakarta Selatan. Situs ini dirancang sebagai landing page yang sederhana, elegan, dan berorientasi konversi untuk pemesanan harian, hadiah, perayaan, serta kebutuhan acara.

## Tentang proyek

Tampilan menggunakan pendekatan editorial premium dengan background ivory cream `#F7F3EF`, navbar dan footer burgundy `#722F37`, tombol dan aksen merah hati `#722F37`, hover `#5F252D`, serta judul `#3A2232`. Cinzel digunakan sebagai font utama untuk judul editorial, sementara Plus Jakarta Sans menjaga body dan antarmuka tetap bersih serta mudah dibaca.

Fotografi produk disimpan sebagai WebP teroptimasi dan ditampilkan pada katalog serta galeri marquee dua arah di homepage.

Informasi brand utama:

- Lokasi: Jagakarsa, Jakarta Selatan
- WhatsApp: [0878-8255-0494](https://wa.me/6287882550494)
- Instagram: [@lalagi.dimsum](https://instagram.com/lalagi.dimsum)
- Sertifikasi halal: `ID31110016921890424`
- Jam operasional: setiap hari, 09.00–17.00 WIB

## Fitur

- Homepage responsif dengan fotografi produk LalaGi Dimsum
- Navigasi mobile dan desktop
- Katalog menu dengan filter kategori
- Satu halaman menu untuk dimsum reguler, Dimsum Cake, tampah, dan hampers
- Cerita brand, bukti kepercayaan, dan carousel screenshot ulasan Google
- CTA WhatsApp kontekstual pada setiap alur pemesanan
- Optimasi gambar dan font melalui Next.js
- Metadata dasar untuk mesin pencari dan media sosial

## Halaman

| Rute | Fungsi |
| --- | --- |
| `/` | Landing page utama |
| `/menu` | Katalog produk dan kategori menu |

## Teknologi

- Next.js 16 dengan App Router
- React 19
- TypeScript strict mode
- Tailwind CSS v4
- Phosphor Icons
- Next.js Image dan Font optimization
- Vercel sebagai target deployment

## Menjalankan secara lokal

Persyaratan: Node.js 20 atau lebih baru dan npm.

```bash
git clone https://github.com/lalagidimsumcom-creator/lalagidimsumcombyhammadstudio.git
cd lalagidimsumcombyhammadstudio
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Perintah

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat production build |
| `npm run start` | Menjalankan production server |
| `npm run lint` | Menjalankan ESLint |
| `npm run typecheck` | Memeriksa TypeScript tanpa menghasilkan file |
| `npm run check` | Menjalankan lint, typecheck, dan build |

## Struktur proyek

```text
src/
├── app/                 # Route, layout, metadata, dan global styles
├── components/
│   └── editorial/       # Komponen landing page dan navigasi
├── data/                # Konfigurasi brand, produk, dan ulasan
└── lib/                 # Helper tautan WhatsApp
public/
└── images/              # Logo dan fotografi produk LalaGi Dimsum
```

## Konfigurasi deployment

Deploy langsung ke Vercel dengan root directory proyek ini. Variabel `NEXT_PUBLIC_SITE_URL` bersifat opsional; jika tidak diatur, metadata menggunakan `https://lalagidimsum.com`.

## Lisensi

Kode proyek tersedia di bawah [MIT License](LICENSE). Seluruh nama, logo, fotografi, dan aset merek LalaGi Dimsum tetap menjadi milik pemiliknya masing-masing.
