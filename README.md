# Fouryears — Untuk Suci

Versi lokal terbaru website anniversary: scrapbook interaktif, cerita masa SMA sampai 2026, kartu pesan, surat untuk Suci, dan animasi penutup.

## Menjalankan

Cara cepat: buka `index.html` di browser.

Untuk menggunakan server lokal, buka terminal di folder ini dan jalankan:

```sh
npm start
```

Buka http://127.0.0.1:4174. Perlu Node.js; tidak perlu `npm install` karena tidak memakai paket tambahan. Hentikan dengan Ctrl+C.

## Mengedit

- `index.html`: isi halaman, bab cerita, scrapbook utama, dan surat.
- `galeri.html`: halaman khusus galeri lengkap (50+ foto kenangan) dengan filter album dan lightbox.
- `gallery-data.js`: daftar data foto, judul, tanggal, caption, dan kategori untuk galeri lengkap.
- `gallery.js` & `gallery.css`: logika filter & interaksi popup lightbox serta gaya masonry.
- `script.js`: data enam kenangan di variabel `memories`, filter, galeri, dan animasi interaktif scrapbook.
- `style.css`: gaya dasar.
- `redesign.css`: scrapbook dan tampilan responsif.
- `personal.css`: penyesuaian personal untuk Suci.
- `assets/gallery/`: folder khusus untuk meletakkan 50+ file foto kenangan (`foto-1.jpg`, `foto-2.jpg`, dst).

### Cara Menambahkan 50+ Foto ke Galeri Lengkap
1. Masukkan file foto ke dalam folder `assets/gallery/`.
2. Beri nama file seperti `foto-1.jpg`, `foto-2.jpg`, `foto-3.jpg`, dan seterusnya (atau ubah path di file `gallery-data.js`).
3. Kamu juga bisa mengedit judul, tanggal, dan caption setiap foto di dalam file `gallery-data.js`.

Font diambil dari Google Fonts saat tersedia internet; browser memakai font cadangan saat offline. Tidak ada musik yang disertakan.

Ini salinan lokal mandiri. Tidak menyertakan kredensial, riwayat Git, atau konfigurasi penerbitan Sites. Mengedit folder ini tidak mengubah website online secara otomatis.
# fouryears
