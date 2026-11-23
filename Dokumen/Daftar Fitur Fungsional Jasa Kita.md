# Daftar Fitur Fungsional Jasa Kita

## 1. Pendahuluan

Dokumen ini berisi daftar fitur fungsional yang terdapat pada aplikasi Jasa Kita. Daftar fitur disusun berdasarkan User Story dan Acceptance Criteria dari masing-masing aktor, yaitu Customer, Provider, dan Admin.

Fitur-fitur ini menjelaskan fungsi dan proses yang dapat dilakukan pengguna di dalam aplikasi. Fitur tidak harus memiliki tabel tersendiri pada database karena beberapa fungsi dapat memanfaatkan tabel yang sudah tersedia.

## 2. Daftar Fitur Fungsional

### A. Authentication dan Hak Akses

| ID | Nama Fitur | Deskripsi | Referensi User Story |
|---|---|---|---|
| FT-01 | Registrasi Akun Customer | Memungkinkan pengguna membuat akun sebagai Customer. | US-CUS-01 |
| FT-02 | Registrasi Akun Provider | Memungkinkan pengguna mendaftar sebagai Provider. | US-PRO-01 |
| FT-03 | Login Customer | Memungkinkan Customer masuk ke aplikasi menggunakan akun terdaftar. | US-CUS-02 |
| FT-04 | Login Provider | Memungkinkan Provider masuk ke aplikasi menggunakan akun terdaftar. | US-PRO-02 |
| FT-05 | Login Admin | Memungkinkan Admin masuk ke halaman administrasi. | US-ADM-01 |
| FT-06 | Logout Customer | Memungkinkan Customer keluar dari akun yang sedang digunakan. | US-CUS-02 |
| FT-07 | Validasi Data Registrasi | Memeriksa kelengkapan dan kesesuaian data ketika pengguna melakukan registrasi. | US-CUS-01, US-PRO-01 |
| FT-08 | Validasi Kredensial Login | Memeriksa kecocokan informasi akun ketika pengguna melakukan login. | US-CUS-02, US-PRO-02, US-ADM-01 |
| FT-09 | Pembatasan Hak Akses Berdasarkan Role | Membatasi akses halaman dan fungsi aplikasi berdasarkan peran pengguna. | US-PRO-02, US-ADM-01 |

### B. Fitur Pendukung Customer

| ID | Nama Fitur | Deskripsi | Referensi User Story |
|---|---|---|---|
| FT-10 | Pencarian Provider Berdasarkan Nama | Memungkinkan Customer mencari Provider berdasarkan nama. | US-CUS-04 |
| FT-11 | Pencarian Provider Berdasarkan Kategori | Memungkinkan Customer mencari Provider berdasarkan kategori jasa. | US-CUS-04 |
| FT-12 | Filter Provider Berdasarkan Lokasi | Memungkinkan Customer menyaring Provider berdasarkan lokasi. | US-CUS-05 |
| FT-13 | Pemilihan Kategori Jasa | Memungkinkan Customer memilih kategori jasa yang dibutuhkan. | US-CUS-03 |
| FT-14 | Pemilihan Layanan Jasa | Memungkinkan Customer memilih layanan jasa yang tersedia. | US-CUS-06, US-CUS-07 |
| FT-15 | Pemilihan Provider | Memungkinkan Customer memilih Provider untuk layanan yang dibutuhkan. | US-CUS-06, US-CUS-07 |
| FT-16 | Validasi Pembatalan Pesanan | Memeriksa ketentuan pembatalan sebelum pesanan dibatalkan. | US-CUS-16 |
| FT-17 | Validasi Pemberian Rating | Memeriksa ketentuan sebelum Customer memberikan rating. | US-CUS-17 |
| FT-18 | Validasi Rating Skala 1–5 | Memastikan rating yang diberikan berada pada skala 1 sampai 5. | US-CUS-17 |

### C. Fitur Pendukung Provider

| ID | Nama Fitur | Deskripsi | Referensi User Story |
|---|---|---|---|
| FT-19 | Validasi Data Rekening Bank | Memeriksa kelengkapan dan kesesuaian data rekening bank Provider. | US-PRO-19 |
| FT-20 | Validasi Nominal Pencairan Dana | Memastikan nominal pencairan dana memenuhi ketentuan yang berlaku. | US-PRO-20 |
| FT-21 | Perhitungan Total Biaya Material | Menghitung total biaya material berdasarkan data material yang digunakan. | US-PRO-12 |
| FT-22 | Pencarian Riwayat Pesanan | Memungkinkan Provider mencari data pada riwayat pesanan. | US-PRO-17 |
| FT-23 | Filter Riwayat Pesanan | Memungkinkan Provider menyaring riwayat pesanan berdasarkan kriteria yang tersedia. | US-PRO-17 |

### D. Fitur Pendukung Admin

| ID | Nama Fitur | Deskripsi | Referensi User Story |
|---|---|---|---|
| FT-24 | Pencarian Data Pengguna | Memungkinkan Admin mencari data pengguna dalam sistem. | US-ADM-03 |
| FT-25 | Pencarian Pesanan | Memungkinkan Admin mencari data pesanan. | US-ADM-07 |
| FT-26 | Filter Pesanan | Memungkinkan Admin menyaring data pesanan berdasarkan kriteria yang tersedia. | US-ADM-07 |
| FT-27 | Filter Laporan Transaksi Berdasarkan Periode | Memungkinkan Admin menampilkan laporan transaksi berdasarkan periode tertentu. | US-ADM-16 |
| FT-28 | Filter Laporan Pesanan | Memungkinkan Admin menyaring laporan pesanan. | US-ADM-17 |
| FT-29 | Filter Laporan Provider | Memungkinkan Admin menyaring laporan Provider. | US-ADM-18 |
| FT-30 | Penghitungan Ringkasan Dashboard | Mengolah data untuk menampilkan ringkasan informasi pada dashboard Admin. | US-ADM-02 |
| FT-31 | Penghitungan Laporan Transaksi | Mengolah data transaksi untuk menghasilkan informasi laporan. | US-ADM-16 |
| FT-32 | Penghitungan Laporan Pesanan | Mengolah data pesanan untuk menghasilkan informasi laporan. | US-ADM-17 |
| FT-33 | Penghitungan Laporan Provider | Mengolah data Provider untuk menghasilkan informasi laporan. | US-ADM-18 |

## 3. Catatan

1. Daftar fitur disusun berdasarkan User Story dan Acceptance Criteria.
2. Fitur fungsional tidak selalu membutuhkan tabel database tersendiri.
3. Beberapa fitur memanfaatkan data dari tabel yang sudah tersedia pada ERD.
4. Referensi User Story digunakan untuk membantu menelusuri asal kebutuhan setiap fitur.
5. Daftar ini dapat diperbarui apabila terdapat perubahan atau penambahan kebutuhan sistem.
