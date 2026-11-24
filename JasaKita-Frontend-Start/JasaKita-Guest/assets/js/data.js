/* ==========================================================
   Jasa Kita — Data contoh (dummy)
   Nanti bisa diganti dengan data dari API / database.
   ========================================================== */

const KATEGORI = [
  { id: "servis-ac",   nama: "Servis AC",          ikon: "ac",    deskripsi: "Cuci, isi freon, dan perbaikan AC rumah maupun kantor." },
  { id: "bengkel-motor", nama: "Bengkel Motor",    ikon: "motor", deskripsi: "Servis berkala, ganti oli, dan perbaikan mesin sepeda motor." },
  { id: "bengkel-mobil", nama: "Bengkel Mobil",    ikon: "car",   deskripsi: "Tune up, rem, kaki-kaki, dan perawatan mobil harian." },
  { id: "teknisi-listrik", nama: "Teknisi Listrik", ikon: "bolt", deskripsi: "Instalasi, perbaikan korslet, dan pemasangan lampu." },
  { id: "tukang-bangunan", nama: "Tukang Bangunan", ikon: "brick", deskripsi: "Renovasi, pasang keramik, cat tembok, dan pengecoran." },
  { id: "perbaikan-rumah", nama: "Perbaikan Rumah", ikon: "home", deskripsi: "Atap bocor, pintu, plafon, dan perbaikan ringan lainnya." },
  { id: "tambal-ban",  nama: "Ban & Tambal Ban",   ikon: "tire",  deskripsi: "Tambal, ganti, dan balancing ban motor maupun mobil." },
  { id: "servis-elektronik", nama: "Servis Elektronik", ikon: "tv", deskripsi: "TV, kulkas, mesin cuci, dan peralatan elektronik rumah." },
];

const LOKASI = ["Metro Pusat", "Metro Timur", "Metro Barat", "Metro Utara", "Metro Selatan"];

const PENYEDIA = [
  {
    id: 1, nama: "Bengkel Maju Motor", kategori: "bengkel-motor", lokasi: "Metro Pusat",
    rating: 4.8, ulasan: 126, pengalaman: 9, tarif: 50000, jam: "08.00 – 17.00", warna: "#1558e0",
    deskripsi: "Bengkel motor harian untuk semua merek. Ditangani mekanik berpengalaman dengan suku cadang original dan garansi servis.",
    layanan: [["Servis ringan", 50000], ["Ganti oli + filter", 75000], ["Servis CVT matic", 120000], ["Tune up injeksi", 150000]],
  },
  {
    id: 2, nama: "Berkah Servis AC", kategori: "servis-ac", lokasi: "Metro Timur",
    rating: 4.9, ulasan: 184, pengalaman: 7, tarif: 75000, jam: "08.00 – 18.00", warna: "#0f8a6d",
    deskripsi: "Melayani cuci AC, isi freon, bongkar pasang, dan perbaikan AC split semua merek langsung ke lokasi pelanggan.",
    layanan: [["Cuci AC split 0,5 – 1 PK", 75000], ["Isi freon R32", 150000], ["Bongkar pasang AC", 250000], ["Perbaikan kompresor", 350000]],
  },
  {
    id: 3, nama: "Sinar Teknik Listrik", kategori: "teknisi-listrik", lokasi: "Metro Barat",
    rating: 4.7, ulasan: 91, pengalaman: 11, tarif: 60000, jam: "07.00 – 20.00", warna: "#c27c0e",
    deskripsi: "Teknisi listrik rumah tangga dan ruko. Instalasi baru, cek korslet, ganti MCB, serta pemasangan lampu dan stop kontak.",
    layanan: [["Cek & perbaikan korslet", 60000], ["Pasang titik lampu", 45000], ["Ganti MCB", 80000], ["Instalasi listrik rumah", 900000]],
  },
  {
    id: 4, nama: "Karya Bangun Mandiri", kategori: "tukang-bangunan", lokasi: "Metro Utara",
    rating: 4.6, ulasan: 58, pengalaman: 14, tarif: 150000, jam: "07.00 – 16.00", warna: "#8a4b2d",
    deskripsi: "Kelompok tukang bangunan untuk renovasi rumah, pasang keramik, pengecatan, dan pengecoran dengan hasil rapi dan tepat waktu.",
    layanan: [["Pasang keramik (per m²)", 85000], ["Cat tembok (per m²)", 25000], ["Plester & aci (per m²)", 60000], ["Upah harian tukang", 150000]],
  },
  {
    id: 5, nama: "Cahaya Perbaikan Rumah", kategori: "perbaikan-rumah", lokasi: "Metro Selatan",
    rating: 4.5, ulasan: 43, pengalaman: 6, tarif: 100000, jam: "08.00 – 17.00", warna: "#5b3fc4",
    deskripsi: "Perbaikan ringan di rumah: atap bocor, plafon rusak, pintu dan jendela macet, hingga pemasangan kanopi.",
    layanan: [["Tambal atap bocor", 150000], ["Ganti plafon (per m²)", 70000], ["Perbaikan pintu & engsel", 100000], ["Pasang kanopi (per m²)", 280000]],
  },
  {
    id: 6, nama: "Rizki Tambal Ban 24 Jam", kategori: "tambal-ban", lokasi: "Metro Pusat",
    rating: 4.7, ulasan: 212, pengalaman: 8, tarif: 15000, jam: "Buka 24 jam", warna: "#243b6b",
    deskripsi: "Tambal ban motor dan mobil, ganti ban, serta balancing. Tersedia layanan panggilan saat ban bocor di jalan.",
    layanan: [["Tambal ban motor", 15000], ["Tambal ban mobil", 25000], ["Ganti ban dalam", 45000], ["Balancing roda mobil", 120000]],
  },
  {
    id: 7, nama: "Andalan Auto Care", kategori: "bengkel-mobil", lokasi: "Metro Timur",
    rating: 4.8, ulasan: 97, pengalaman: 12, tarif: 200000, jam: "08.00 – 17.00", warna: "#0b6fa8",
    deskripsi: "Perawatan mobil lengkap: servis berkala, rem, kaki-kaki, dan AC mobil. Estimasi biaya dijelaskan sebelum pengerjaan.",
    layanan: [["Servis berkala", 200000], ["Ganti kampas rem", 180000], ["Spooring & balancing", 250000], ["Servis AC mobil", 220000]],
  },
  {
    id: 8, nama: "Metro Elektronik Service", kategori: "servis-elektronik", lokasi: "Metro Barat",
    rating: 4.4, ulasan: 36, pengalaman: 5, tarif: 50000, jam: "09.00 – 17.00", warna: "#b8325f",
    deskripsi: "Servis TV, kulkas, mesin cuci, dan kipas angin. Cek kerusakan gratis jika pelanggan melanjutkan perbaikan.",
    layanan: [["Cek kerusakan", 50000], ["Servis mesin cuci", 120000], ["Servis kulkas", 150000], ["Ganti panel TV", 450000]],
  },
  {
    id: 9, nama: "Dua Putra Service AC", kategori: "servis-ac", lokasi: "Metro Selatan",
    rating: 4.6, ulasan: 64, pengalaman: 10, tarif: 70000, jam: "08.00 – 17.00", warna: "#14864a",
    deskripsi: "Spesialis AC rumah dan ruko. Melayani cuci rutin, perawatan berkala, dan penggantian sparepart dengan garansi.",
    layanan: [["Cuci AC split", 70000], ["Isi freon R32", 140000], ["Ganti kapasitor", 120000], ["Paket cuci 3 unit", 190000]],
  },
  {
    id: 10, nama: "Surya Motor Garage", kategori: "bengkel-motor", lokasi: "Metro Utara",
    rating: 4.5, ulasan: 72, pengalaman: 6, tarif: 45000, jam: "08.00 – 16.30", warna: "#d1521f",
    deskripsi: "Servis motor bebek, matic, dan sport. Melayani ganti oli, rem, rantai, serta perbaikan kelistrikan motor.",
    layanan: [["Servis ringan", 45000], ["Ganti kampas rem", 60000], ["Ganti rantai & gear set", 220000], ["Perbaikan kelistrikan", 90000]],
  },
];

/* Contoh ulasan — dipilih bergilir di halaman detail */
const ULASAN = [
  { nama: "Dimas A.", nilai: 5, teks: "Pengerjaan rapi dan tepat waktu. Biaya sesuai dengan yang disebutkan di awal." },
  { nama: "Sari W.", nilai: 5, teks: "Ramah, menjelaskan kerusakannya dengan jelas, dan hasilnya memuaskan." },
  { nama: "Rudi H.", nilai: 4, teks: "Hasil bagus, hanya saja sempat menunggu agak lama karena antrean." },
  { nama: "Anisa P.", nilai: 5, teks: "Sudah dua kali pakai jasanya, selalu puas. Akan langganan terus." },
  { nama: "Budi S.", nilai: 4, teks: "Harga masuk akal dan pekerjaannya bersih. Direkomendasikan." },
];
