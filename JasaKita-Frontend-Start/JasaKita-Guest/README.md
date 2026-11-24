# Jasa Kita – Halaman Guest (v2)

Buka `index.html` (klik dua kali). Tidak perlu server.

- **Tampilan web (layar lebar)**: latar biru bergerak, ilustrasi mekanik, dan aplikasi di dalam bingkai ponsel.
- **Tampilan HP (layar ≤ 960px)**: ilustrasi disembunyikan, aplikasi memenuhi layar.

## Struktur
```
index.html              ← cangkang web (latar biru + ilustrasi + bingkai ponsel)
pages/                  ← SATU FILE HTML PER HALAMAN (isi layar aplikasi)
  splash  access  home  categories  search  providers  provider-detail  profile  login
css/
  shell.css             ← tampilan web: latar, ilustrasi, bingkai ponsel
  base.css              ← warna (:root), font, tombol
  animations.css        ← SEMUA animasi (durasi & jenis gerakan)
  components.css        ← top bar, search bar, nav bawah, chip
  pages/*.css           ← gaya tiap halaman
js/
  common.js             ← toast, perpindahan halaman beranimasi, chip, password
  splash.js  search.js  ← logika splash & pencarian
  shell.js              ← ilustrasi bergeser mengikuti kursor
assets/images/
  logo.png  logo-sm.png          ← logo Jasa Kita (latar sudah transparan)
  ilustrasi-mekanik.png          ← hanya dipakai di tampilan web (index.html)
  city.svg
```

## Cara mengubah
- Teks/data halaman → edit file di `pages/`
- Tampilan halaman → CSS dengan nama sama di `css/pages/`
- Warna utama → `--bl` di `css/base.css`; latar biru web → `body` di `css/shell.css`
- Animasi → `css/animations.css` (atau `.splash` dll. di CSS halaman)
- Logo / ilustrasi → ganti file di `assets/images/` (nama file tetap)
- Pindah halaman → `<a href="nama.html">`
