# Rancangan Database Awal Jasa Kita

> **Status dokumen:** Draft awal untuk tahap analisis dan desain. Struktur tabel, nama kolom, relasi, dan aturan bisnis masih dapat disesuaikan setelah ditinjau bersama tim magang.

## 1. Tujuan

Dokumen ini menjadi rancangan awal basis data untuk mendukung proses utama Jasa Kita, yaitu pengelolaan akun, Provider dan layanan, pemesanan, pembayaran, komisi platform, serta penyaluran pendapatan Provider.

Teknologi basis data yang direncanakan: MySQL.

## 2. Aturan bisnis yang menjadi dasar

1. Sistem memiliki empat aktor: Guest, Customer, Provider, dan Admin.
2. Guest dapat melihat layanan, tetapi harus masuk atau mendaftar sebelum membuat pesanan.
3. Provider harus melalui proses verifikasi Admin sebelum dapat menawarkan layanan.
4. Provider menerima atau menolak pesanan, memperbarui status pekerjaan, lalu menandai pekerjaan selesai.
5. Setelah pekerjaan ditandai selesai, Customer mengonfirmasi penyelesaian sebelum melanjutkan pembayaran.
6. Pembayaran dilakukan melalui payment gateway. Status pembayaran harus diperbarui berdasarkan konfirmasi yang tervalidasi dari penyedia pembayaran.
7. Komisi promo platform adalah 3% selama tiga bulan pertama sejak peluncuran resmi. Setelah periode promo berakhir, tarif normal yang direncanakan adalah 5%.
8. Dasar perhitungan komisi mengikuti kebijakan saat ini, yaitu total pembayaran Customer termasuk biaya tambahan.
9. Sisa pembayaran setelah komisi merupakan pendapatan Provider dan direncanakan disalurkan otomatis melalui mekanisme payment gateway.
10. Customer hanya dapat memberikan rating dan ulasan setelah pekerjaan selesai dan pembayaran berhasil dikonfirmasi.

## 3. Rancangan tabel inti

### 3.1 users

Menyimpan data akun untuk pengguna yang dapat masuk ke sistem.

| Kolom | Tipe data (usulan) | Keterangan |
|---|---|---|
| user_id | BIGINT, PK | ID akun |
| name | VARCHAR(100) | Nama pengguna |
| email | VARCHAR(150), UNIQUE | Email akun |
| phone | VARCHAR(20) | Nomor telepon |
| password_hash | VARCHAR(255) | Password yang sudah di-hash |
| role | ENUM | customer, provider, admin |
| account_status | VARCHAR(30) | Status akun |
| created_at | DATETIME | Waktu pembuatan akun |
| updated_at | DATETIME | Waktu pembaruan akun |

Guest tidak perlu memiliki akun tersendiri karena merupakan pengunjung yang belum login.

### 3.2 provider_profiles

Menyimpan informasi tambahan khusus Provider.

| Kolom | Tipe data (usulan) | Keterangan |
|---|---|---|
| provider_id | BIGINT, PK, FK | Mengacu ke users.user_id |
| business_name | VARCHAR(150) | Nama usaha atau nama layanan Provider |
| description | TEXT | Deskripsi Provider |
| address | TEXT | Alamat Provider |
| verification_status | VARCHAR(30) | pending, approved, rejected, revision_requested |
| verified_at | DATETIME, NULL | Waktu verifikasi disetujui |
| created_at | DATETIME | Waktu pembuatan profil |

Dokumen identitas dan dokumen pendukung sebaiknya disimpan pada tabel terpisah agar riwayat pengajuan dan pemeriksaan dapat dicatat.

### 3.3 service_categories

Menyimpan kategori layanan jasa.

| Kolom | Tipe data (usulan) | Keterangan |
|---|---|---|
| category_id | BIGINT, PK | ID kategori |
| category_name | VARCHAR(100) | Nama kategori |
| description | TEXT | Deskripsi kategori |
| icon | VARCHAR(255), NULL | Referensi ikon |
| status | VARCHAR(20) | Status kategori |

### 3.4 services

Menyimpan layanan yang ditawarkan Provider.

| Kolom | Tipe data (usulan) | Keterangan |
|---|---|---|
| service_id | BIGINT, PK | ID layanan |
| provider_id | BIGINT, FK | Pemilik layanan |
| category_id | BIGINT, FK | Kategori layanan |
| service_name | VARCHAR(150) | Nama layanan |
| description | TEXT | Deskripsi layanan |
| base_price | DECIMAL(12,2) | Harga awal layanan |
| moderation_status | VARCHAR(30) | Status pemeriksaan Admin |
| created_at | DATETIME | Waktu pembuatan |

### 3.5 bookings

Menyimpan pesanan Customer kepada Provider.

| Kolom | Tipe data (usulan) | Keterangan |
|---|---|---|
| booking_id | BIGINT, PK | ID pesanan |
| customer_id | BIGINT, FK | Mengacu ke users.user_id |
| provider_id | BIGINT, FK | Mengacu ke users.user_id |
| service_id | BIGINT, FK | Layanan yang dipesan |
| booking_date | DATETIME | Waktu pemesanan |
| service_address | TEXT | Lokasi pengerjaan |
| agreed_amount | DECIMAL(12,2) | Total harga yang disepakati |
| additional_cost | DECIMAL(12,2) | Biaya tambahan yang disepakati |
| booking_status | VARCHAR(30) | Status pesanan |
| customer_confirmed_at | DATETIME, NULL | Waktu konfirmasi Customer |
| created_at | DATETIME | Waktu pembuatan |

Catatan: agreed_amount perlu didefinisikan secara konsisten. Dalam rancangan ini, nilai tersebut merupakan harga layanan yang disepakati sebelum biaya tambahan. Total pembayaran Customer dihitung dari harga yang disepakati ditambah biaya tambahan yang sah.

Status pesanan yang diusulkan:
- pending
- accepted
- rejected
- in_progress
- awaiting_confirmation
- completed
- cancelled

### 3.6 transactions

Menyimpan catatan pembayaran untuk pesanan. Satu pesanan dapat memiliki lebih dari satu percobaan transaksi pembayaran, tetapi hanya satu pembayaran berhasil yang boleh menjadi pembayaran final untuk pesanan tersebut.

| Kolom | Tipe data (usulan) | Keterangan |
|---|---|---|
| transaction_id | BIGINT, PK | ID transaksi |
| booking_id | BIGINT, FK | Pesanan terkait |
| customer_total | DECIMAL(12,2) | Total yang dibayar Customer |
| payment_method | VARCHAR(50) | Metode pembayaran |
| payment_status | VARCHAR(30) | Status pembayaran |
| gateway_reference | VARCHAR(150), NULL | Referensi dari payment gateway |
| paid_at | DATETIME, NULL | Waktu pembayaran berhasil |
| created_at | DATETIME | Waktu transaksi dibuat |

Status pembayaran yang diusulkan: pending, paid, failed, expired, refunded.

### 3.7 commission_settings

Menyimpan kebijakan tarif komisi platform berdasarkan periode berlakunya.

| Kolom | Tipe data (usulan) | Keterangan |
|---|---|---|
| setting_id | BIGINT, PK | ID pengaturan |
| commission_rate | DECIMAL(5,2) | Persentase komisi |
| calculation_base | VARCHAR(30) | Dasar perhitungan, saat ini customer_total |
| effective_start | DATETIME | Awal berlakunya tarif |
| effective_end | DATETIME, NULL | Akhir berlakunya tarif |
| description | VARCHAR(255) | Keterangan kebijakan |

Data awal yang direncanakan:
- Tarif promo 3%: berlaku sejak tanggal peluncuran resmi sampai berakhirnya periode tiga bulan promo.
- Tarif normal 5%: berlaku setelah periode promo berakhir.

Tanggal peluncuran resmi belum ditentukan, sehingga tanggal efektif belum diisi.

### 3.8 provider_payouts

Mencatat penyaluran pendapatan bersih kepada Provider.

| Kolom | Tipe data (usulan) | Keterangan |
|---|---|---|
| payout_id | BIGINT, PK | ID pencairan |
| transaction_id | BIGINT, FK | Transaksi sumber pendapatan |
| provider_id | BIGINT, FK | Provider penerima |
| gross_amount | DECIMAL(12,2) | Nilai pembayaran sebelum komisi |
| commission_rate | DECIMAL(5,2) | Tarif komisi yang diterapkan |
| commission_amount | DECIMAL(12,2) | Nominal komisi platform |
| net_amount | DECIMAL(12,2) | Pendapatan bersih Provider |
| payout_status | VARCHAR(30) | Status pencairan |
| payout_reference | VARCHAR(150), NULL | Referensi pencairan dari penyedia pembayaran |
| paid_at | DATETIME, NULL | Waktu pencairan berhasil |
| created_at | DATETIME | Waktu pencatatan |

Status pencairan yang diusulkan: pending, processing, paid, failed, reversed.

Tarif komisi dan nominal komisi disimpan sebagai snapshot pada pencatatan transaksi/pencairan agar perubahan tarif di masa depan tidak mengubah perhitungan transaksi lama.

## 4. Contoh perhitungan komisi

Misalnya total pembayaran Customer adalah Rp200.000.

| Komponen | Promo 3% | Normal 5% |
|---|---:|---:|
| Total pembayaran Customer | Rp200.000 | Rp200.000 |
| Komisi Jasa Kita | Rp6.000 | Rp10.000 |
| Pendapatan bersih Provider | Rp194.000 | Rp190.000 |

Rumus:
- Komisi = total pembayaran Customer × persentase komisi.
- Pendapatan bersih Provider = total pembayaran Customer − komisi.

Perhitungan ini belum memasukkan biaya payment gateway atau biaya operasional platform.

## 5. Relasi inti antartabel

- users 1 : 1 provider_profiles untuk akun Provider.
- users 1 : N services untuk layanan yang dimiliki Provider.
- service_categories 1 : N services.
- users (Customer) 1 : N bookings.
- users (Provider) 1 : N bookings.
- services 1 : N bookings.
- bookings 1 : N transactions untuk mendukung percobaan pembayaran.
- transactions 1 : 0..1 provider_payouts pada rancangan awal ini.
- users (Provider) 1 : N provider_payouts.
- commission_settings digunakan untuk menentukan tarif yang berlaku ketika transaksi diproses.

## 6. Aturan teknis dan keamanan

1. Gunakan DECIMAL untuk nilai uang, bukan FLOAT atau DOUBLE.
2. Simpan password dalam bentuk hash yang aman, bukan teks biasa.
3. Jangan menyimpan nomor kartu, CVV, atau data rahasia pembayaran di database Jasa Kita.
4. Konfirmasi pembayaran harus berasal dari callback/webhook payment gateway yang diverifikasi di sisi server.
5. Proses komisi dan pencatatan pencairan harus menggunakan transaksi database agar pencatatan tidak terduplikasi.
6. Terapkan batasan agar satu pesanan tidak memiliki lebih dari satu pembayaran final yang berhasil.
7. Pisahkan status pesanan, status pembayaran, dan status pencairan karena ketiganya menggambarkan proses yang berbeda.
8. Jika terjadi refund atau pembalikan pembayaran, catat sebagai proses tersendiri dan sesuaikan pencatatan pencairan/komisi. Jangan menghapus riwayat transaksi.

## 7. Hal yang masih perlu diputuskan bersama tim

1. Apakah biaya tambahan selalu menjadi bagian dari dasar perhitungan komisi, termasuk biaya material atau pembelian barang?
2. Apakah pencairan Provider dilakukan setiap transaksi atau dikumpulkan dalam pencairan berkala? Kemampuan ini bergantung pada payment gateway yang dipilih.
3. Bagaimana alur refund jika pesanan yang sudah dibayar kemudian dibatalkan?
4. Apakah satu Provider dapat memiliki beberapa rekening/akun pencairan, dan bagaimana proses verifikasinya?
5. Payment gateway apa yang akan digunakan?
6. Apakah tarif promo 3% berlaku untuk seluruh Provider selama tiga bulan pertama sejak peluncuran resmi? Rancangan ini menggunakan asumsi tersebut.

## 8. Tahap selanjutnya

Setelah rancangan awal ini ditinjau dan disepakati, langkah berikutnya adalah membuat Entity Relationship Diagram (ERD), kemudian menyusun data dictionary dan SQL DDL MySQL. Struktur ini belum merupakan skema final atau database yang sudah diimplementasikan.
