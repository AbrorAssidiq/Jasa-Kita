# Jasa Kita – Halaman Guest

Buka `index.html` (klik dua kali) – otomatis masuk ke Splash. Tidak perlu server.

## Struktur
```
index.html            ← pintu masuk (langsung ke pages/splash.html)
pages/                ← SATU FILE HTML PER HALAMAN
  splash.html  access.html  home.html  categories.html  search.html
  providers.html  provider-detail.html  profile.html  login.html
css/
  base.css            ← warna (variabel :root), font, frame ponsel, tombol
  components.css      ← top bar, search bar, nav bawah, chip
  pages/*.css         ← CSS tiap halaman (nama sama dengan file HTML-nya)
js/
  common.js           ← toast, chip filter, tombol mata password
  splash.js           ← pindah otomatis dari splash
  search.js           ← filter saran pencarian
assets/images/        ← logo-blue.svg, logo-white.svg, city.svg (ganti dengan aset asli)
```

## Cara mengubah
- Isi/teks/data halaman → edit file di `pages/`
- Tampilan halaman → edit CSS dengan nama yang sama di `css/pages/`
- Warna utama → ubah `--bl` di `css/base.css`
- Logo → ganti `assets/images/logo-blue.svg` dan `logo-white.svg`
- Pindah halaman → `<a href="nama-halaman.html">`

## Menambah halaman baru
Salin salah satu file di `pages/`, ganti isinya, buat `css/pages/nama.css`, lalu tautkan dengan `<a href>`.
