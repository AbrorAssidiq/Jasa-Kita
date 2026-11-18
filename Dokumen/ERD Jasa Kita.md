# Entity Relationship Diagram (ERD) — Jasa Kita

> **Status:** Draft konseptual berdasarkan keputusan bisnis yang telah disepakati. Kardinalitas dan atribut perlu divalidasi sebelum SQL dibuat.

## 1. Diagram ERD

```mermaid
erDiagram
    USERS ||--o| PROVIDER_PROFILES : memiliki
    USERS ||--o{ SERVICES : menawarkan
    SERVICE_CATEGORIES ||--o{ SERVICES : mengelompokkan
    USERS ||--o{ BOOKINGS : "sebagai customer"
    USERS ||--o{ BOOKINGS : "sebagai provider"
    SERVICES ||--o{ BOOKINGS : dipesan_dalam
    BOOKINGS ||--o{ BOOKING_ADDITIONAL_COSTS : memiliki
    BOOKINGS ||--o{ TRANSACTIONS : dibayar_melalui
    TRANSACTIONS ||--o| PROVIDER_PAYOUTS : menghasilkan
    USERS ||--o{ PROVIDER_PAYOUTS : menerima
    TRANSACTIONS ||--o{ REFUND_REQUESTS : memiliki
    USERS ||--o{ REFUND_REQUESTS : mengajukan
    USERS o|--o{ REFUND_REQUESTS : "admin meninjau"

    USERS {
        bigint user_id PK
        varchar name
        varchar email UK
        varchar phone
        varchar password_hash
        varchar role
        varchar account_status
    }
    PROVIDER_PROFILES {
        bigint provider_id PK,FK
        varchar business_name
        text description
        text address
        varchar verification_status
    }
    SERVICE_CATEGORIES {
        bigint category_id PK
        varchar category_name
        text description
        varchar status
    }
    SERVICES {
        bigint service_id PK
        bigint provider_id FK
        bigint category_id FK
        varchar service_name
        decimal base_price
        varchar moderation_status
    }
    BOOKINGS {
        bigint booking_id PK
        bigint customer_id FK
        bigint provider_id FK
        bigint service_id FK
        decimal agreed_amount
        varchar booking_status
    }
    BOOKING_ADDITIONAL_COSTS {
        bigint additional_cost_id PK
        bigint booking_id FK
        varchar cost_name
        decimal amount
    }
    TRANSACTIONS {
        bigint transaction_id PK
        bigint booking_id FK
        decimal customer_total
        varchar payment_status
        varchar gateway_reference
        datetime paid_at
    }
    COMMISSION_SETTINGS {
        bigint setting_id PK
        decimal commission_rate
        varchar calculation_base
        datetime effective_start
        datetime effective_end
    }
    PROVIDER_PAYOUTS {
        bigint payout_id PK
        bigint transaction_id FK
        bigint provider_id FK
        decimal gross_amount
        decimal commission_rate
        decimal commission_amount
        decimal net_amount
        varchar payout_status
    }
    REFUND_REQUESTS {
        bigint refund_id PK
        bigint transaction_id FK
        bigint booking_id FK
        bigint requested_by FK
        bigint reviewed_by FK
        decimal requested_amount
        decimal approved_amount
        varchar refund_status
    }
```

## 2. Penjelasan relasi

1. Satu akun Provider memiliki satu profil Provider.
2. Satu Provider dapat menawarkan banyak layanan.
3. Satu kategori dapat digunakan oleh banyak layanan.
4. Satu Customer dapat membuat banyak pesanan; satu Provider dapat menerima banyak pesanan.
5. Satu layanan dapat muncul pada banyak pesanan.
6. Satu pesanan dapat memiliki beberapa rincian biaya tambahan, termasuk biaya material.
7. Satu pesanan dapat memiliki beberapa percobaan transaksi pembayaran.
8. Satu transaksi berhasil menghasilkan paling banyak satu catatan payout pada rancangan awal. Payout dicatat per transaksi.
9. Satu transaksi dapat memiliki beberapa permintaan atau percobaan refund, misalnya jika proses refund gagal lalu diajukan ulang. Kebijakan ini perlu divalidasi.
10. Pengaturan komisi disimpan berdasarkan periode efektif. Tarif yang benar-benar diterapkan harus disalin sebagai snapshot ke catatan payout agar perubahan tarif tidak mengubah transaksi lama.

## 3. Aturan perhitungan

- Total pembayaran Customer = harga layanan yang disepakati + seluruh biaya tambahan yang disetujui.
- Komisi = total pembayaran Customer × tarif komisi yang berlaku.
- Pendapatan bersih Provider = total pembayaran Customer − komisi.
- Biaya material termasuk dalam biaya tambahan dan ikut menjadi dasar perhitungan komisi.
- Tarif promo 3% berlaku selama tiga bulan pertama sejak peluncuran resmi; setelah itu tarif normal 5%.
- Payout diproses per transaksi berhasil, jika didukung payment gateway yang dipilih.
- Refund harus melalui pemeriksaan Admin. Status refund menjadi berhasil hanya setelah dikonfirmasi oleh penyedia pembayaran.

## 4. Catatan desain sebelum implementasi

- `commission_settings` adalah tabel referensi kebijakan; `provider_payouts` menyimpan snapshot tarif dan nominal komisi yang benar-benar diterapkan.
- Untuk menghindari duplikasi, implementasi perlu memastikan hanya satu pembayaran final berhasil untuk satu pesanan dan paling banyak satu payout final untuk transaksi tersebut.
- Detail rekening atau tujuan pencairan Provider belum dimodelkan karena mekanisme dan payment gateway belum dipilih.
- Diagram ini belum mencakup seluruh tabel pendukung seperti dokumen verifikasi, chat, notifikasi, rating, audit log, dan jadwal layanan. Tabel tersebut dapat ditambahkan setelah kebutuhan fitur dipetakan.
