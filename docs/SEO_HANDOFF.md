# SEO, AEO, dan GEO — LalaGi Dimsum

Implementasi ini mengonsolidasikan 500 keyword menjadi lima halaman intent. Keyword tidak dimasukkan secara massal dan tidak dibuat menjadi doorway page per variasi lokasi atau pertanyaan.

## Halaman intent

| URL | Fokus |
| --- | --- |
| `/` | Brand dan local intent Jagakarsa/Jakarta Selatan |
| `/menu` | Produk, pilihan ukuran, dan harga aktual |
| `/dimsum-cake` | Birthday, anniversary, graduation, dan surprise |
| `/pesanan-acara` | Tampah, Tower, Money Roll, kantor, wedding, dan gathering |
| `/tentang` | Entity brand, lokasi, halal, cerita, dan kanal resmi |

Pemetaan lengkap tersedia di `LalaGiDimsum_Keyword_Map.xlsx`. Keyword yang menyebut produk atau layanan yang belum terverifikasi—misalnya frozen, udang, franchise, reseller, aplikasi delivery, atau cabang—ditandai sebagai **Ditahan**, bukan dipublikasikan sebagai klaim.

## Yang sudah diimplementasikan

- Metadata, canonical, Open Graph, dan Twitter Card per halaman.
- `FoodEstablishment` untuk data usaha lokal, tanpa `aggregateRating` self-serving.
- `ProductGroup`, `Product`, dan `Offer` dari produk serta harga aktual.
- Breadcrumb dan FAQ/direct answers berbasis pertanyaan nyata.
- `sitemap.xml` dan `robots.txt` otomatis.
- Internal link berdasarkan intent pengguna.
- Copy first-party yang membedakan jenis produk, ukuran, kelengkapan, dan SOP motor/mobil.

## Tindakan operasional di luar kode

1. Verifikasi dan lengkapi Google Business Profile dengan nama `LalaGi Dimsum`, nomor telepon, jam operasional, kategori bisnis, area layanan, dan URL menu yang konsisten.
2. Tambahkan foto produk asli secara rutin dan balas seluruh review Google secara natural.
3. Daftarkan `https://lalagidimsum.com/sitemap.xml` ke Google Search Console dan Bing Webmaster Tools.
4. Pantau query, halaman, CTR, indexing, Core Web Vitals, dan kemunculan konten sosial setiap bulan.
5. Jaga alamat Google Business Profile konsisten dengan alamat dan koordinat yang digunakan website; perbarui keduanya bersamaan jika lokasi berubah.
6. Publikasikan artikel hanya jika tersedia pengalaman, data, foto, atau jawaban first-party yang substansial.

## Aturan klaim

- Daftar organisasi hanya berarti pesanan pernah hadir di lingkungan tersebut, bukan kemitraan resmi.
- Review boleh tampil sebagai social proof di UI, tetapi tidak dimasukkan sebagai rating LocalBusiness.
- Harga, stok, area, kanal delivery, jam layanan, dan komposisi harus diperbarui jika informasi bisnis berubah.
