# 🥟 LalaGi Dimsum — Website Brand & Landing Page

> **"Dimsum untuk Setiap Momen. Dari ngemil sampai hari spesial."**  
> Website resmi brand F&B modern **LalaGi Dimsum** (Jagakarsa, Jakarta Selatan).

---

## 🌟 Tentang LalaGi Dimsum

**LalaGi Dimsum** adalah brand kuliner lokal spesialis olahan dimsum full ayam premium yang memadukan kelezatan autentik, higienitas tinggi, dan sertifikasi halal resmi untuk berbagai momen: mulai dari ngemil harian, hampers, perayaan ulang tahun (*Dimsum Cake & Tower*), hingga katering acara besar (*Dimsum Tampah*).

- 🏷️ **Sertifikasi Halal:** BPJPH / MUI No. `ID31110016921890424` (100% Full Ayam Segar)
- 📍 **Lokasi Dapur:** Jagakarsa, Jakarta Selatan
- ⭐ **Google Maps Rating:** 5.0 ★ (166+ ulasan pelanggan terverifikasi)
- 📱 **WhatsApp:** [0878-8255-0494](https://wa.me/6287882550494)
- 📸 **Instagram:** [@lalagi.dimsum](https://instagram.com/lalagi.dimsum)
- 📻 **Liputan Media:** Radio Republik Indonesia (RRI) & UMKM Connect

---

## 🚀 Fitur & Halaman Utama

1. **Homepage (Modern Editorial Canvas):**
   - **Hero Canvas:** Komposisi editorial menyatu (*continuous canvas*) dengan foto piringan dimsum jumbo dan *feathered gradient mask* mulus.
   - **Intent Navigation ("Mau Dimsum Buat Apa?"):** Panduan 3 skenario kebutuhan pelanggan (*Everyday Dimsum*, *Special Moments*, *Big Moments*).
   - **Best Sellers:** Preview ringkas menu andalan (*Dimsum Mentai*, *Dimsum Cake*, *Dimsum Tampah*) dengan tampilan baris horizontal hemat ruang di layar HP.
   - **Signature Celebration:** Showcase *Dimsum Cake* 50% *full-bleed edge-to-edge* dengan checklist keunggulan berikon.
   - **Trust & Testimonial Strip:** Dark cocoa strip yang memuat logo resmi Google Reviews, Halal Indonesia, RRI, dan ulasan pelanggan nyata.
   - **Final CTA & Floating WhatsApp:** Artwork sumpit menjepit dimsum transparan dengan tombol pemesanan cepat.

2. **Subpages:**
   - [`/menu`](/menu) — Katalog lengkap dimsum fresh & frozen dengan filter kategori interaktif dan panduan penyimpanan.
   - [`/dimsum-cake`](/dimsum-cake) — Halaman spesialis kue ulang tahun gurih (*Dimsum Cake 30 pcs & Dimsum Tower 3 Tingkat*).
   - [`/pesanan-acara`](/pesanan-acara) — Layanan bulk order untuk wedding stall, meeting kantor, dan gathering keluarga.
   - [`/tentang`](/tentang) — Kisah dapur rumahan Jagakarsa, tim ibu berdaya, pencapaian, dan galeri Instagram.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router, React 19, Turbopack)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) dengan skema warna OKLCH & custom tokens
- **Typography:** 
  - Display / Headlines: `Mochiy Pop One` (Google Fonts)
  - Body & UI: `Plus Jakarta Sans` (Google Fonts)
- **Icons:** [@phosphor-icons/react](https://phosphoricons.com/) & [@iconify/react](https://iconify.design/)
- **TypeScript:** Strict Mode (0 `any`, type safe)
- **Assets:** WebP / PNG / JPEG beresolusi tinggi dengan optimasi Next.js

---

## 💻 Panduan Menjalankan Project

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

### 3. Pemeriksaan Codebase & Build
```bash
npm run check      # Menjalankan lint + typecheck + build
npm run build      # Production Next.js build
npm run start      # Menjalankan production server
```

---

## 📁 Struktur Direktori

```
src/
├── app/
│   ├── layout.tsx         # Root layout (Mochiy Pop One + Plus Jakarta Sans)
│   ├── globals.css        # Tailwind v4 tokens & color variables
│   ├── page.tsx           # Homepage editorial
│   ├── menu/              # Katalog menu & filter
│   ├── dimsum-cake/       # Halaman Dimsum Cake & Tower
│   ├── pesanan-acara/     # Halaman katering & bulk order
│   └── tentang/           # Story dapur Jagakarsa & review
├── components/
│   ├── editorial/         # Komponen homepage editorial LalaGi
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── intent-nav.tsx
│   │   ├── best-sellers.tsx
│   │   ├── signature-cake.tsx
│   │   ├── trust-strip.tsx
│   │   ├── final-cta.tsx
│   │   └── footer.tsx
│   └── whatsapp-floating-cta.tsx
├── data/                  # Konfigurasi brand, menu, FAQ, & review
├── lib/                   # Utility helpers & generator URL WhatsApp
└── types/                 # Interface TypeScript
public/
└── images/                # Asset foto produk, logo resmi, & artwork
```

---

## 📄 Lisensi
© 2026 LalaGi Dimsum. Dibuat dengan dedikasi untuk menyajikan dimsum terbaik bagi setiap momen kebersamaan.
