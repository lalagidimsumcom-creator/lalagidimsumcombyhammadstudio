# SEO, AEO, dan GEO — LalaGi Dimsum

Implementasi ini mengonsolidasikan 500 keyword menjadi enam halaman intent. Keyword tidak dimasukkan secara massal dan tidak dibuat menjadi doorway page per variasi lokasi atau pertanyaan.

## Halaman intent

| URL | Fokus |
| --- | --- |
| `/` | Brand dan local intent Jagakarsa/Jakarta Selatan |
| `/menu` | Produk, pilihan ukuran, dan harga aktual |
| `/dimsum-cake` | Birthday, anniversary, graduation, dan surprise |
| `/pesanan-acara` | Tampah, Tower, Money Roll, kantor, wedding, dan gathering |
| `/tentang` | Entity brand, lokasi, halal, cerita, dan kanal resmi |
| `/faq` | AEO untuk harga, produk, pemesanan, dan pengiriman |

Pemetaan lengkap tersedia di `LalaGiDimsum_Keyword_Map.xlsx`. Seluruh 500 keyword sudah diaudit: 294 intent faktual diimplementasikan, 178 variasi query dicakup secara semantik tanpa exact-match stuffing atau doorway page, 24 keyword produk/kanal yang belum didukung ditahan, dan 4 pertanyaan penyimpanan menunggu SOP resmi client.

Keyword yang menyebut produk atau layanan yang belum terverifikasi—misalnya frozen, udang, reseller, atau aplikasi delivery—tidak dipublikasikan sebagai klaim. Query subjektif seperti “terbaik”, “termurah”, “promo”, dan “viral” dipakai sebagai vocabulary discovery, bukan klaim marketing tanpa bukti.

## Yang sudah diimplementasikan

- Metadata, canonical, Open Graph, dan Twitter Card per halaman.
- `FoodEstablishment` untuk data usaha lokal, tanpa `aggregateRating` self-serving.
- `ProductGroup`, `Product`, dan `Offer` dari produk serta harga aktual.
- Breadcrumb dan FAQ/direct answers berbasis pertanyaan nyata.
- `sitemap.xml` dan `robots.txt` otomatis.
- Internal link berdasarkan intent pengguna.
- Copy first-party yang membedakan jenis produk, ukuran, kelengkapan, dan SOP motor/mobil.
- Halaman FAQ resmi dengan jawaban terlihat di UI dan `FAQPage` yang identik dengan konten halaman.
- Peta lokasi Jagakarsa pada halaman Tentang serta koordinat yang konsisten dengan local business schema.

## Tindakan operasional di luar kode

1. Verifikasi dan lengkapi Google Business Profile dengan nama `LalaGi Dimsum`, nomor telepon, jam operasional, kategori bisnis, area layanan, dan URL menu yang konsisten.
2. Tambahkan foto produk asli secara rutin dan balas seluruh review Google secara natural.
3. Daftarkan `https://www.lalagidimsum.com/sitemap.xml` ke Google Search Console dan Bing Webmaster Tools.
4. Pantau query, halaman, CTR, indexing, Core Web Vitals, dan kemunculan konten sosial setiap bulan.
5. Jaga alamat Google Business Profile konsisten dengan alamat dan koordinat yang digunakan website; perbarui keduanya bersamaan jika lokasi berubah.
6. Publikasikan artikel hanya jika tersedia pengalaman, data, foto, atau jawaban first-party yang substansial.

## Aturan klaim

- Daftar organisasi hanya berarti pesanan pernah hadir di lingkungan tersebut, bukan kemitraan resmi.
- Review boleh tampil sebagai social proof di UI, tetapi tidak dimasukkan sebagai rating LocalBusiness.
- Harga, stok, area, kanal delivery, jam layanan, dan komposisi harus diperbarui jika informasi bisnis berubah.
