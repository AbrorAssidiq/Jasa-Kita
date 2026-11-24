# Jasa Kita — Tampilan Guest (Pengunjung)

Aplikasi web responsif untuk layanan jasa kendaraan dan rumah. Versi ini mencakup 9 fitur Guest sesuai mock up, ditambah halaman Login dan Daftar.

## Cara menjalankan

Cukup buka `index.html` di browser (klik dua kali). Tidak perlu instalasi apa pun.
Untuk server lokal (opsional): `python -m http.server 8000`, lalu buka `http://localhost:8000`.

> Font Plus Jakarta Sans dimuat dari Google Fonts. Tanpa internet, tampilan memakai font bawaan sistem.

## Struktur folder

```
jasa-kita/
├── index.html            Splash screen (fitur 1)
├── akses.html            Akses tanpa akun (fitur 2)
├── beranda.html          Halaman utama (fitur 3)
├── profil.html           Profil guest (fitur 4)
├── kategori.html         Daftar kategori jasa (fitur 5)
├── pencarian.html        Pencarian + filter kategori, lokasi, rating (fitur 6)
├── penyedia.html         Daftar penyedia jasa (fitur 7)
├── detail-penyedia.html  Detail penyedia, dibuka dengan ?id=1..10 (fitur 8)
├── wajib-login.html      Pemberitahuan wajib login (fitur 9)
├── login.html            Halaman masuk
├── daftar.html           Halaman daftar (Customer / Provider)
└── assets/
    ├── css/style.css     Seluruh gaya, dengan token warna di bagian atas
    ├── js/data.js        Data contoh (kategori, penyedia, ulasan)
    ├── js/main.js        Navbar, footer, pencarian, validasi form
    └── img/              logo.png, hero.png, favicon.png
```

## Perilaku tampilan

- **Website (layar lebar):** navbar atas, ilustrasi mekanik di hero beranda dan panel login/daftar.
- **HP (layar ≤ 820px):** ilustrasi disembunyikan, navbar bawah bergaya aplikasi.
- Logo memakai `assets/img/logo.png`.

## Catatan pengembangan

- Data penyedia masih dummy di `assets/js/data.js`. Ganti dengan pemanggilan API saat backend siap.
- Form login dan daftar sudah divalidasi di sisi klien, tetapi belum terhubung ke backend (hanya menampilkan notifikasi).
- Kontak penyedia dan tombol pesan sengaja diarahkan ke `wajib-login.html` untuk Guest.
- Warna merek diatur lewat variabel CSS di `:root` pada `style.css`.
