/**
 * Data Galeri Foto "4 Tahun, Tetap Kamu"
 * Kamu bisa mengganti path 'src' dengan file foto asli di folder assets/gallery/
 * Contoh: 'assets/gallery/foto-1.jpg'
 */
const galleryCategories = [
  { id: 'all', name: 'Semua Kenangan' },
  { id: 'sma', name: 'Masa SMA' },
  { id: 'medan', name: 'Medan & Jalan-jalan' },
  { id: 'special', name: 'Momen Spesial' },
  { id: 'random', name: 'Lucu & Random' }
];

const galleryPhotos = [
  // --- Masa SMA (2020 - 2022) ---
  {
    id: 1,
    title: "Tawa di Masa SMA",
    caption: "Masa-masa manis waktu SMA saat kita mulai dekat dan sering bercanda bareng. Tawa lepasmu di sampingku selalu jadi memori masa sekolah yang paling membekas.",
    date: "Masa SMA",
    category: "sma",
    src: "assets/gallery/foto-1.jpg",
    color: "#d8dfc8"
  },
  {
    id: 2,
    title: "Dari Meja Depan",
    caption: "Waktu kamu sering maju ke depan biar kelihatan papan tulis. Awal mula kita sering ngobrol.",
    date: "2021",
    category: "sma",
    src: "assets/gallery/foto-2.jpg",
    color: "#e8cdd4"
  },
  {
    id: 3,
    title: "Momen 'Suamikuu'",
    caption: "Panggilan bercanda sama teman-temanmu yang bikin aku salting seharian.",
    date: "2022",
    category: "sma",
    src: "assets/gallery/foto-3.jpg",
    color: "#e2d5c3"
  },
  {
    id: 4,
    title: "Foto Pertama Berdua",
    caption: "'Kau mau foto sama ku, kan?' — Momen selesai acara sekolah yang ga bakal pernah aku lupa.",
    date: "2022",
    category: "sma",
    src: "assets/gallery/foto-4.jpg",
    color: "#cfd7e3"
  },
  {
    id: 5,
    title: "Pernikahan Guru",
    caption: "Kamu beneran datang nemenin aku jadi fotografer, bahkan sebelum teman-teman yang lain datang.",
    date: "11 Sep 2022",
    category: "sma",
    src: "assets/gallery/foto-5.jpg",
    color: "#e5cbb5"
  },
  {
    id: 6,
    title: "12 September 2022",
    caption: "Hari pertama kita resmi bersama. Dari rumor sekolah jadi kenyataan manis.",
    date: "12 Sep 2022",
    category: "special",
    src: "assets/gallery/foto-6.jpg",
    color: "#d8cadc"
  },
  {
    id: 7,
    title: "Duduk Berdua di Kelas",
    caption: "Jam istirahat sekolah yang selalu terasa lebih tenang kalau ada kamu di sampingku.",
    date: "2022",
    category: "sma",
    src: "assets/gallery/foto-7.jpg",
    color: "#c9ded3"
  },
  {
    id: 8,
    title: "Jalan Pulang Bareng",
    caption: "Masa-masa pulang sekolah jalan bareng, cerita hal-hal random yang ga ada habisnya.",
    date: "2022",
    category: "sma",
    src: "assets/gallery/foto-8.jpg",
    color: "#dfd6ca"
  },
  {
    id: 9,
    title: "Momen Si Cuek Luluh",
    caption: "Kata orang-orang aku dingin dan susah didekati, tapi di depan kamu pertahanan itu runtuh total.",
    date: "2022",
    category: "sma",
    src: "assets/gallery/foto-9.jpg",
    color: "#eed1cb"
  },
  {
    id: 10,
    title: "Hari Kelulusan SMA",
    caption: "Selesai masa putih abu-abu, bersiap melangkah ke babak baru masing-masing.",
    date: "2023",
    category: "sma",
    src: "assets/gallery/foto-10.jpg",
    color: "#d1dcde"
  },

  // --- Pertemuan Medan & Perjalanan (2024) ---
  {
    id: 11,
    title: "Pertemuan Tak Sengaja di Medan",
    caption: "Niatnya cuma antar teman ujian, ternyata semesta punya rencana buat mempertemukan kita lagi setelah 1 tahun jeda.",
    date: "Jun 2024",
    category: "medan",
    src: "assets/gallery/foto-11.jpg",
    color: "#d2d8ce"
  },
  {
    id: 12,
    title: "Podomoro City",
    caption: "'Yaudahlah lain kali kita ke Podomoro aja' -> 'Yaudah ayok sekarang.' Spontan tapi salah satu hari terbaik.",
    date: "Jun 2024",
    category: "medan",
    src: "assets/gallery/foto-12.jpg",
    color: "#edd2d2"
  },
  {
    id: 13,
    title: "Photobooth Kenangan",
    caption: "Senyum canggung yang perlahan berubah jadi tawa lepas di photobooth.",
    date: "Jun 2024",
    category: "medan",
    src: "assets/gallery/foto-13.jpg",
    color: "#cfdbe8"
  },
  {
    id: 14,
    title: "Nonton Bioskop Berdua",
    caption: "Setelah sekian lama ga duduk sebelahan di bioskop.",
    date: "Jun 2024",
    category: "medan",
    src: "assets/gallery/foto-14.jpg",
    color: "#e0d9cb"
  },
  {
    id: 15,
    title: "Tiket Pulang yang Tertunda",
    caption: "Batal pulang hari itu demi bisa jalan lebih lama sama kamu di Medan.",
    date: "Jun 2024",
    category: "medan",
    src: "assets/gallery/foto-15.jpg",
    color: "#dccfe0"
  },
  {
    id: 16,
    title: "Kopi & Obrolan Panjang",
    caption: "Membahas setahun yang kosong dan bagaimana perasaan kita ternyata masih sama.",
    date: "Jun 2024",
    category: "medan",
    src: "assets/gallery/foto-16.jpg",
    color: "#cadacf"
  },
  {
    id: 17,
    title: "Jalan Malam di Medan",
    caption: "Suasana kota malam yang ramai, tapi fokusku cuma ke kamu.",
    date: "Jun 2024",
    category: "medan",
    src: "assets/gallery/foto-17.jpg",
    color: "#e8cfc4"
  },
  {
    id: 18,
    title: "Balikan Kedua",
    caption: "12 September 2024. Tanggal yang selalu mengikat kita berdua.",
    date: "12 Sep 2024",
    category: "special",
    src: "assets/gallery/foto-18.jpg",
    color: "#d1d5e5"
  },
  {
    id: 19,
    title: "Perjalanan 4 Jam",
    caption: "Jarak Langsa ke Medan yang terasa singkat kalau tujuannya adalah ketemu kamu.",
    date: "2024",
    category: "medan",
    src: "assets/gallery/foto-19.jpg",
    color: "#ded2cc"
  },
  {
    id: 20,
    title: "Tempat Makan Favorit Kita",
    caption: "Makan bareng sambil curhat rutinitas kampus masing-masing.",
    date: "2024",
    category: "medan",
    src: "assets/gallery/foto-20.jpg",
    color: "#c9dcd9"
  },

  // --- Momen Spesial & Hadiah (2024 - 2025) ---
  {
    id: 21,
    title: "Boneka Anniv Pertama",
    caption: "Walau waktu itu sedang dalam masa jeda, kamu tetap orang yang kuingat.",
    date: "Sep 2023",
    category: "special",
    src: "assets/gallery/foto-21.jpg",
    color: "#ecd5da"
  },
  {
    id: 22,
    title: "Kado Ultah Januari 2024",
    caption: "Ulang tahunmu yang ga pernah terlewat dari ingatanku.",
    date: "Jan 2024",
    category: "special",
    src: "assets/gallery/foto-22.jpg",
    color: "#cfd9ce"
  },
  {
    id: 23,
    title: "Bunga Untuk Suci",
    caption: "Januari 2025. Datang langsung bawa bunga untuk ulang tahun perempuan favoritku.",
    date: "Jan 2025",
    category: "special",
    src: "assets/gallery/foto-23.jpg",
    color: "#e7cecb"
  },
  {
    id: 24,
    title: "Senyum Pegang Bunga",
    caption: "Melihat senyummu waktu terima bunga itu bikin semua perjalanan capek terbayar lunas.",
    date: "Jan 2025",
    category: "special",
    src: "assets/gallery/foto-24.jpg",
    color: "#cad6e5"
  },
  {
    id: 25,
    title: "Catatan Lagu: About You",
    caption: "'Do you think I have forgotten?' — Lagu The 1975 di notes Instagram yang jadi jembatan kita kembali bicara.",
    date: "Sep 2025",
    category: "special",
    src: "assets/gallery/foto-25.jpg",
    color: "#e2d2e2"
  },
  {
    id: 26,
    title: "Koleksi Tiket & Struk",
    caption: "Tiket bioskop, karcis parkir, dan potongan kertas kecil saksi hari-hari kita bareng.",
    date: "2024-2025",
    category: "special",
    src: "assets/gallery/foto-26.jpg",
    color: "#dce2cb"
  },
  {
    id: 27,
    title: "Panggilan Video Larut Malam",
    caption: "Sleepcall berjam-jam saat jarak memisahkan kita berdua.",
    date: "2024",
    category: "special",
    src: "assets/gallery/foto-27.jpg",
    color: "#ebd4cf"
  },
  {
    id: 28,
    title: "Kejutan Kecil di Stasiun / Terminal",
    caption: "Menunggu kedatanganmu di pintu keluar selalu bikin deg-degan kayak first date.",
    date: "2025",
    category: "medan",
    src: "assets/gallery/foto-28.jpg",
    color: "#cad9e2"
  },
  {
    id: 29,
    title: "Hari Santai Berdua",
    caption: "Ga perlu tempat mewah, duduk bareng sambil minum teh atau kopi pun udah cukup.",
    date: "2025",
    category: "special",
    src: "assets/gallery/foto-29.jpg",
    color: "#ded6ce"
  },
  {
    id: 30,
    title: "Balikan Mei 2026",
    caption: "Sejauh apa pun kita saling menjauh, hati kita selalu tahu jalan untuk kembali pulang.",
    date: "Mei 2026",
    category: "special",
    src: "assets/gallery/foto-30.jpg",
    color: "#e6cdd7"
  },

  // --- Foto Lucu, Candid, & Random ---
  {
    id: 31,
    title: "Muka Ngambek Gemas",
    caption: "Ekspresimu kalau lagi kesal tapi tetap kelihatan lucu banget.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-31.jpg",
    color: "#cfded3"
  },
  {
    id: 32,
    title: "Candid Pas Makan",
    caption: "Keahlianmu ngambil kentang gorengku padahal tadi bilang 'ga mau makan'.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-32.jpg",
    color: "#eedaca"
  },
  {
    id: 33,
    title: "Foto Absurd di HP",
    caption: "Koleksi foto ekspresi kocak yang cuma boleh kita berdua yang lihat.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-33.jpg",
    color: "#d0d4e8"
  },
  {
    id: 34,
    title: "Tertawa Lepas",
    caption: "Momen saat lelucon receh kita berhasil bikin kita ketawa sampai perut sakit.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-34.jpg",
    color: "#e8d2dc"
  },
  {
    id: 35,
    title: "Mirror Selfie Pertama",
    caption: "Coba-coba pose di depan cermin toko baju atau mall.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-35.jpg",
    color: "#d4dfcc"
  },
  {
    id: 36,
    title: "Topi Kebesaran",
    caption: "Waktu kamu minjam topi atau jaketku dan tenggelam di dalamnya.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-36.jpg",
    color: "#e6cfca"
  },
  {
    id: 37,
    title: "Di Balik Layar Kamera",
    caption: "Si fotografer yang akhirnya sering difoto diam-diam sama kamu.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-37.jpg",
    color: "#cbdae6"
  },
  {
    id: 38,
    title: "Es Krim Meleleh",
    caption: "Makan es krim bareng tapi keburu meleleh ke tangan karena kelamaan ngobrol.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-38.jpg",
    color: "#e2d6ca"
  },
  {
    id: 39,
    title: "Pose Peace Andalan",
    caption: "Gaya foto andalan Suci tiap kali disuruh gaya di depan kamera.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-39.jpg",
    color: "#d8d0e5"
  },
  {
    id: 40,
    title: "Pemandangan Sore",
    caption: "Langit sore waktu kita jalan berdua. Sederhana tapi berbekas.",
    date: "Random",
    category: "medan",
    src: "assets/gallery/foto-40.jpg",
    color: "#cddfd8"
  },

  // --- Bab Menuju 4 Tahun & Harapan (2026) ---
  {
    id: 41,
    title: "Genggaman Tangan",
    caption: "Tangan yang selalu ingin kujaga, dalam senang maupun susah.",
    date: "2026",
    category: "special",
    src: "assets/gallery/foto-41.jpg",
    color: "#ecd1cf"
  },
  {
    id: 42,
    title: "Sudut Favorit Kita",
    caption: "Tempat yang selalu bikin kita bernostalgia sama perjalanan panjang ini.",
    date: "2026",
    category: "medan",
    src: "assets/gallery/foto-42.jpg",
    color: "#cfd7e8"
  },
  {
    id: 43,
    title: "Tatapan Hangat",
    caption: "Mata yang selalu bikin hatiku luluh sejak pertama kali ketemu di kelas.",
    date: "2026",
    category: "special",
    src: "assets/gallery/foto-43.jpg",
    color: "#dfd6c8"
  },
  {
    id: 44,
    title: "Belajar Saling Memahami",
    caption: "Banyak hal berat yang kita lewati, tapi itu bikin kita semakin mengerti arti saling menjaga.",
    date: "2026",
    category: "special",
    src: "assets/gallery/foto-44.jpg",
    color: "#d6cfe5"
  },
  {
    id: 45,
    title: "Koleksi Screenshot Chat Lucu",
    caption: "Pesan-pesan manis dan tingkah konyol kita di chat yang tersimpan rapi.",
    date: "2026",
    category: "random",
    src: "assets/gallery/foto-45.jpg",
    color: "#cde0ce"
  },
  {
    id: 46,
    title: "Waktu Terbaik Bersamamu",
    caption: "Detik-detik yang ingin kuperlambat tiap kali kita punya kesempatan ketemu.",
    date: "2026",
    category: "medan",
    src: "assets/gallery/foto-46.jpg",
    color: "#e8cfd9"
  },
  {
    id: 47,
    title: "Rencana Hari Esok",
    caption: "Bicara tentang mimpi-mimpi kecil kita yang ingin diwujudkan bersama.",
    date: "2026",
    category: "special",
    src: "assets/gallery/foto-47.jpg",
    color: "#cbdbe6"
  },
  {
    id: 48,
    title: "Senyum Yang Menenangkan",
    caption: "Alasan kenapa dari dulu sampai sekarang, orangnya tetap kamu.",
    date: "2026",
    category: "special",
    src: "assets/gallery/foto-48.jpg",
    color: "#e4d3ca"
  },
  {
    id: 49,
    title: "Jalan Menuju 4 Tahun",
    caption: "12 September 2022 sampai 12 September 2026. 1.461 hari penuh rasa.",
    date: "12 Sep 2026",
    category: "special",
    src: "assets/gallery/foto-49.jpg",
    color: "#d8cee8"
  },
  {
    id: 50,
    title: "Halaman Baru Kita",
    caption: "Bukan untuk melupakan yang lalu, tapi untuk melangkah dengan lebih jujur, tenang, dan saling mencintai.",
    date: "12 Sep 2026",
    category: "special",
    src: "assets/gallery/foto-50.jpg",
    color: "#cbe0d8"
  },
  {
    id: 51,
    title: "Selalu Ada Kamu",
    caption: "Di setiap cerita yang ingin kutulis di masa depan, nama kamu yang selalu ada di sana.",
    date: "12 Sep 2026",
    category: "special",
    src: "assets/gallery/foto-51.jpg",
    color: "#ebd0cb"
  },
  {
    id: 52,
    title: "Untuk Suci, 4 Tahun & Seterusnya",
    caption: "Terima kasih sudah bertahan, sudah hadir, dan memilih bersama sampai hari ini. Tetap kamu. ♡",
    date: "12 Sep 2026",
    category: "special",
    src: "assets/gallery/foto-52.jpg",
    color: "#cbd5e7"
  },
  {
    id: 53,
    title: "Potongan Hari Indah",
    caption: "Satu dari sekian banyak momen manis yang terekam kamera saat bersamamu.",
    date: "Kenangan",
    category: "special",
    src: "assets/gallery/foto-53.jpg",
    color: "#d4dfcc"
  },
  {
    id: 54,
    title: "Momen Spontan",
    caption: "Tanpa persiapan apa-apa, tapi hasilnya selalu jadi foto favorit.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-54.jpg",
    color: "#e8d2dc"
  },
  {
    id: 55,
    title: "Senyuman Khas Suci",
    caption: "Senyum yang selalu berhasil bikin hari-hari berat terasa jauh lebih ringan.",
    date: "Kenangan",
    category: "special",
    src: "assets/gallery/foto-55.jpg",
    color: "#cfded3"
  },
  {
    id: 56,
    title: "Jalan Santai Berdua",
    caption: "Melangkah berdampingan tanpa buru-buru, menikmati setiap langkah bersamamu.",
    date: "Medan",
    category: "medan",
    src: "assets/gallery/foto-56.jpg",
    color: "#eedaca"
  },
  {
    id: 57,
    title: "Candid Terbaik",
    caption: "Foto yang diambil diam-diam tapi auranya selalu memikat.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-57.jpg",
    color: "#d0d4e8"
  },
  {
    id: 58,
    title: "Tempat Singgah Kita",
    caption: "Setiap sudut kota yang pernah kita singgahi punya ceritanya sendiri.",
    date: "Medan",
    category: "medan",
    src: "assets/gallery/foto-58.jpg",
    color: "#e6cfca"
  },
  {
    id: 59,
    title: "Matahari Sore & Kamu",
    caption: "Cahaya sore yang pas banget menyorot wajah perempuan kesayanganku.",
    date: "Kenangan",
    category: "special",
    src: "assets/gallery/foto-59.jpg",
    color: "#cbdae6"
  },
  {
    id: 60,
    title: "Koleksi Selfie Favorit",
    caption: "Gaya lucu kita berdua yang selalu tersimpan rapi di galeri HP.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-60.jpg",
    color: "#e2d6ca"
  },
  {
    id: 61,
    title: "Hari Penuh Cerita",
    caption: "Mendengarkan kamu bercerita panjang lebar tentang hal-hal kecil di harimu.",
    date: "Kenangan",
    category: "special",
    src: "assets/gallery/foto-61.jpg",
    color: "#d8d0e5"
  },
  {
    id: 62,
    title: "Suasana Hangat",
    caption: "Duduk berdekatan, cukup ada kamu dan semuanya terasa tenang.",
    date: "Medan",
    category: "medan",
    src: "assets/gallery/foto-62.jpg",
    color: "#cddfd8"
  },
  {
    id: 63,
    title: "Di Balik Senyum Ini",
    caption: "Ada rasa sayang yang ga pernah berkurang, meski waktu terus berjalan.",
    date: "Kenangan",
    category: "special",
    src: "assets/gallery/foto-63.jpg",
    color: "#ecd1cf"
  },
  {
    id: 64,
    title: "Tingkah Random Suci",
    caption: "Selalu ada tingkah tak terduga yang bikin ketawa dan gemas sendiri.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-64.jpg",
    color: "#cfd7e8"
  },
  {
    id: 65,
    title: "Kenangan di Perjalanan",
    caption: "Pemandangan jalanan saat menempuh perjalanan untuk bisa ketemu kamu.",
    date: "Medan",
    category: "medan",
    src: "assets/gallery/foto-65.jpg",
    color: "#dfd6c8"
  },
  {
    id: 66,
    title: "Momen Spesial Berdua",
    caption: "Salah satu hari penting yang kita lewati bersama dengan penuh rasa syukur.",
    date: "Spesial",
    category: "special",
    src: "assets/gallery/foto-66.jpg",
    color: "#d6cfe5"
  },
  {
    id: 67,
    title: "Tatapan Penuh Arti",
    caption: "Sorot mata yang selalu mengingatkan aku pada alasan awal kita memulai.",
    date: "Kenangan",
    category: "special",
    src: "assets/gallery/foto-67.jpg",
    color: "#cde0ce"
  },
  {
    id: 68,
    title: "Jepretan Spontan",
    caption: "Potongan waktu yang ga direncanakan, tapi justru jadi kenangan abadi.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-68.jpg",
    color: "#e8cfd9"
  },
  {
    id: 69,
    title: "Waktu Yang Berharga",
    caption: "Setiap jam dan menit yang kuhabiskan sama kamu selalu terasa sangat bernilai.",
    date: "Medan",
    category: "medan",
    src: "assets/gallery/foto-69.jpg",
    color: "#cbdbe6"
  },
  {
    id: 70,
    title: "Senyum Manis Suci",
    caption: "Selalu suka melihat ekspresi bahagiamu seperti ini.",
    date: "Kenangan",
    category: "special",
    src: "assets/gallery/foto-70.jpg",
    color: "#e4d3ca"
  },
  {
    id: 71,
    title: "Tawa Yang Lepas",
    caption: "Momen ketika kita berdua lupa sama semua beban dan cuma tertawa lepas.",
    date: "Random",
    category: "random",
    src: "assets/gallery/foto-71.jpg",
    color: "#d8cee8"
  },
  {
    id: 72,
    title: "Cerita di Balik Lensa",
    caption: "Sebagai fotografermu, kamu adalah objek terindah yang pernah kuabadikan.",
    date: "Kenangan",
    category: "special",
    src: "assets/gallery/foto-72.jpg",
    color: "#cbe0d8"
  },
  {
    id: 73,
    title: "Momen Penuh Hangat",
    caption: "Rasa nyaman yang cuma bisa kudapatkan saat berada di dekatmu.",
    date: "Spesial",
    category: "special",
    src: "assets/gallery/foto-73.jpg",
    color: "#ebd0cb"
  },
  {
    id: 74,
    title: "Perjalanan Menuju Esok",
    caption: "Menatap ke depan, bersiap menulis halaman-halaman baru bersama.",
    date: "2026",
    category: "special",
    src: "assets/gallery/foto-74.jpg",
    color: "#cbd5e7"
  },
  {
    id: 75,
    title: "Tetap Kamu, Selamanya",
    caption: "4 tahun yang penuh liku, dan untuk tahun-tahun berikutnya, orangnya tetap kamu. ♡",
    date: "12 Sep 2026",
    category: "special",
    src: "assets/gallery/foto-75.jpg",
    color: "#e2bcc5"
  },
  {
    id: 76,
    title: "Bunga untuk Suci",
    caption: "Januari 2025. Datang langsung untuk merayakan ulang tahunmu sambil membawa bunga.",
    date: "Jan 2025",
    category: "special",
    src: "assets/gallery/foto-76.jpeg",
    color: "#e5c0a9"
  },

  // --- Foto Baru (September 2026) ---
  {
    id: 77,
    title: "Momen Berdua",
    caption: "Salah satu potongan hari indah yang terekam bersama perempuan kesayanganku.",
    date: "Sep 2026",
    category: "special",
    src: "assets/gallery/foto-77.jpg",
    color: "#d8cee8"
  },
  {
    id: 78,
    title: "Kamu yang Selalu Bikin Hati Tenang",
    caption: "Ada yang beda tiap kali kita bareng — semuanya terasa lebih hangat dan lebih hidup.",
    date: "Sep 2026",
    category: "special",
    src: "assets/gallery/foto-78.jpg",
    color: "#e4d3ca"
  },
  {
    id: 79,
    title: "Senyum Khas Suci",
    caption: "Senyum yang tak pernah gagal mencerahkan hariku, hari ini dan selalu.",
    date: "Sep 2026",
    category: "special",
    src: "assets/gallery/foto-79.jpg",
    color: "#cbe0d8"
  },
  {
    id: 80,
    title: "Waktu Terbaik",
    caption: "Bersama kamu, detik-detik biasa pun jadi kenangan yang ingin terus kusimpan.",
    date: "Sep 2026",
    category: "random",
    src: "assets/gallery/foto-80.jpg",
    color: "#ebd0cb"
  },
  {
    id: 81,
    title: "Cerita Hari Ini",
    caption: "Mendengar kamu bercerita — satu hal yang selalu menjadi bagian favorit hariku.",
    date: "Sep 2026",
    category: "random",
    src: "assets/gallery/foto-81.jpg",
    color: "#cbd5e7"
  },
  {
    id: 82,
    title: "Kita dan Tawa Kita",
    caption: "Ketawa bareng tanpa alasan jelas — tapi itu selalu cukup untuk bikin semua terasa baik-baik aja.",
    date: "Sep 2026",
    category: "random",
    src: "assets/gallery/foto-82.jpg",
    color: "#d4dfcc"
  },
  {
    id: 83,
    title: "Candid Favoritku",
    caption: "Foto yang diambil diam-diam, tapi auramu tidak pernah bisa disembunyikan.",
    date: "Sep 2026",
    category: "random",
    src: "assets/gallery/foto-83.jpg",
    color: "#e8d2dc"
  },
  {
    id: 84,
    title: "Hari Yang Penuh Rasa",
    caption: "Tidak butuh kata-kata banyak — kehadiranmu sendiri sudah lebih dari cukup.",
    date: "Sep 2026",
    category: "special",
    src: "assets/gallery/foto-84.jpg",
    color: "#cfded3"
  },
  {
    id: 85,
    title: "Sudut Pandang Favoritku",
    caption: "Dari sudut manapun aku memandang, kamu selalu jadi bagian yang paling indah.",
    date: "Sep 2026",
    category: "special",
    src: "assets/gallery/foto-85.jpg",
    color: "#eedaca"
  },
  {
    id: 86,
    title: "Momen Santai Berdua",
    caption: "Ga perlu tujuan kemana-mana — yang penting bisa bareng kamu.",
    date: "Sep 2026",
    category: "medan",
    src: "assets/gallery/foto-86.jpg",
    color: "#d0d4e8"
  },
  {
    id: 87,
    title: "Hangat Seperti Biasa",
    caption: "Kamu dan kehangatanmu yang selalu berhasil bikin aku betah dan nyaman.",
    date: "Sep 2026",
    category: "special",
    src: "assets/gallery/foto-87.jpg",
    color: "#e6cfca"
  },
  {
    id: 88,
    title: "Kenangan Terindah Hari Ini",
    caption: "Setiap foto bersamamu adalah bukti betapa berharganya setiap momen kita.",
    date: "Sep 2026",
    category: "special",
    src: "assets/gallery/foto-88.jpg",
    color: "#cbdae6"
  },
  {
    id: 89,
    title: "Untuk Kita Berdua",
    caption: "Di penghujung 4 tahun ini, satu hal yang paling kusyukuri adalah — kamu masih di sini.",
    date: "12 Sep 2026",
    category: "special",
    src: "assets/gallery/foto-89.jpg",
    color: "#e2d6ca"
  }
];
