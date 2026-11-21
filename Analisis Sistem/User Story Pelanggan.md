# USER STORY – JASA KITA

## 1. Customer

Customer merupakan pengguna yang telah memiliki akun dan login ke aplikasi Jasa Kita. Customer dapat mencari penyedia jasa, membuat pesanan, melakukan pembayaran, memantau pekerjaan, serta memberikan penilaian terhadap layanan.

---

### US-CUS-01 – Registrasi Akun

**User Story**

Sebagai Customer, saya ingin mendaftarkan akun, sehingga saya dapat menggunakan fitur layanan Jasa Kita.

**Acceptance Criteria**
- Customer dapat mengisi nama, email, nomor telepon, dan password.
- Sistem memvalidasi data registrasi.
- Email tidak boleh digunakan oleh akun lain.
- Password harus memenuhi ketentuan keamanan.
- Jika registrasi berhasil, akun Customer dibuat.
- Customer mendapatkan informasi bahwa registrasi berhasil.

---

### US-CUS-02 – Login

**User Story**

Sebagai Customer, saya ingin login ke aplikasi, sehingga saya dapat mengakses fitur Customer.

**Acceptance Criteria**
- Customer dapat login menggunakan email dan password.
- Sistem memvalidasi kredensial.
- Jika data benar, Customer diarahkan ke halaman utama Customer.
- Jika data salah, sistem menampilkan pesan kesalahan.
- Customer dapat logout dari aplikasi.

---

### US-CUS-03 – Melihat Kategori Jasa

**User Story**

Sebagai Customer, saya ingin melihat daftar kategori jasa, sehingga saya dapat menemukan jenis layanan yang saya butuhkan.

**Acceptance Criteria**
- Sistem menampilkan kategori jasa yang tersedia.
- Setiap kategori memiliki nama dan informasi yang relevan.
- Customer dapat memilih kategori jasa.
- Sistem menampilkan layanan sesuai kategori yang dipilih.

---

### US-CUS-04 – Mencari Penyedia Jasa

**User Story**

Sebagai Customer, saya ingin mencari penyedia jasa berdasarkan nama atau kategori, sehingga saya dapat menemukan penyedia jasa yang sesuai dengan kebutuhan saya.

**Acceptance Criteria**
- Customer dapat mencari penyedia jasa berdasarkan nama.
- Customer dapat mencari penyedia jasa berdasarkan kategori.
- Sistem menampilkan hasil pencarian yang sesuai.
- Sistem menampilkan informasi apabila hasil pencarian tidak ditemukan.

---

### US-CUS-05 – Filter Lokasi Penyedia Jasa

**User Story**

Sebagai Customer, saya ingin memfilter penyedia jasa berdasarkan lokasi, sehingga saya dapat menemukan penyedia jasa di wilayah yang saya inginkan.

**Acceptance Criteria**
- Customer dapat memilih atau memasukkan lokasi pencarian.
- Sistem menampilkan penyedia jasa sesuai lokasi yang dipilih.
- Customer dapat mengubah lokasi pencarian.
- Sistem menampilkan informasi apabila tidak terdapat penyedia jasa pada lokasi tersebut.

---

### US-CUS-06 – Melihat Profil Penyedia Jasa

**User Story**

Sebagai Customer, saya ingin melihat profil penyedia jasa, sehingga saya dapat mengetahui informasi dan layanan yang ditawarkan sebelum melakukan pemesanan.

**Acceptance Criteria**
- Sistem menampilkan informasi profil penyedia jasa.
- Sistem menampilkan daftar layanan yang ditawarkan.
- Sistem menampilkan informasi harga layanan apabila tersedia.
- Sistem menampilkan informasi status ketersediaan penyedia jasa.
- Customer dapat memilih layanan yang ingin dipesan.

---

### US-CUS-07 – Membuat Pesanan

**User Story**

Sebagai Customer, saya ingin membuat pesanan jasa, sehingga saya dapat meminta penyedia jasa melakukan pekerjaan yang saya butuhkan.

**Acceptance Criteria**
- Customer dapat memilih penyedia jasa.
- Customer dapat memilih layanan yang ingin dipesan.
- Customer dapat mengirimkan permintaan pesanan.
- Pesanan tersimpan di sistem.
- Pesanan memiliki status awal sesuai ketentuan sistem.
- Penyedia jasa dapat melihat permintaan pesanan tersebut.

---

### US-CUS-08 – Mengisi Detail Pekerjaan dan Lokasi

**User Story**

Sebagai Customer, saya ingin mengisi detail pekerjaan dan lokasi pengerjaan, sehingga penyedia jasa dapat memahami kebutuhan dan lokasi pekerjaan.

**Acceptance Criteria**
- Customer dapat mengisi deskripsi pekerjaan.
- Customer dapat memasukkan lokasi pengerjaan.
- Customer dapat memberikan informasi tambahan yang dibutuhkan.
- Detail pekerjaan tersimpan pada pesanan.
- Penyedia jasa dapat melihat detail pekerjaan dan lokasi.

---

### US-CUS-09 – Melihat Status Pesanan

**User Story**

Sebagai Customer, saya ingin melihat status pesanan, sehingga saya dapat mengetahui perkembangan pesanan saya.

**Acceptance Criteria**
- Customer dapat melihat daftar pesanan.
- Customer dapat melihat status setiap pesanan.
- Status pesanan diperbarui sesuai aktivitas pesanan.
- Customer dapat melihat detail status pesanan.
- Sistem menyimpan riwayat perubahan status pesanan.

---

### US-CUS-10 – Menyetujui Biaya Material

**User Story**

Sebagai Customer, saya ingin melihat dan menyetujui rincian biaya material yang diajukan penyedia jasa, sehingga saya dapat mengetahui dan menyetujui biaya material sebelum pembelian dilakukan.

**Acceptance Criteria**
- Customer dapat melihat rincian material yang diajukan.
- Customer dapat melihat jumlah dan harga setiap material.
- Customer dapat melihat total biaya material.
- Customer dapat menyetujui atau menolak pengajuan material.
- Jika disetujui, pengajuan material dapat dilanjutkan ke proses pembayaran.
- Jika ditolak, pengajuan material tidak dapat dilanjutkan ke pembayaran.

---

### US-CUS-11 – Membayar Biaya Material

**User Story**

Sebagai Customer, saya ingin membayar biaya material melalui payment gateway, sehingga penyedia jasa dapat membeli material yang dibutuhkan untuk pekerjaan.

**Acceptance Criteria**
- Customer dapat melakukan pembayaran material setelah menyetujui pengajuan.
- Sistem membuat transaksi pembayaran material.
- Customer diarahkan atau diberikan akses ke proses pembayaran melalui payment gateway.
- Sistem menerima dan memproses status pembayaran.
- Jika pembayaran berhasil, status pembayaran diperbarui.
- Penyedia jasa dapat melanjutkan pembelian material setelah pembayaran terkonfirmasi.
- Jika pembayaran gagal, sistem menampilkan informasi kegagalan pembayaran.

---

### US-CUS-12 – Melihat Progres Pekerjaan

**User Story**

Sebagai Customer, saya ingin melihat progres pekerjaan, sehingga saya dapat mengetahui perkembangan pekerjaan yang sedang dilakukan penyedia jasa.

**Acceptance Criteria**
- Customer dapat melihat status pengerjaan.
- Sistem menampilkan status terbaru pekerjaan.
- Customer dapat melihat informasi ketika pekerjaan dimulai.
- Customer dapat melihat informasi ketika pekerjaan dinyatakan selesai oleh penyedia jasa.

---

### US-CUS-13 – Mengonfirmasi Pekerjaan Selesai

**User Story**

Sebagai Customer, saya ingin mengonfirmasi bahwa pekerjaan telah selesai, sehingga proses pesanan dapat dilanjutkan ke pembayaran jasa.

**Acceptance Criteria**
- Customer dapat melihat pekerjaan yang telah dinyatakan selesai oleh penyedia jasa.
- Customer dapat mengonfirmasi penyelesaian pekerjaan.
- Sistem menyimpan konfirmasi penyelesaian pekerjaan.
- Setelah dikonfirmasi, sistem melanjutkan proses pembayaran jasa sesuai ketentuan.

---

### US-CUS-14 – Membayar Biaya Jasa

**User Story**

Sebagai Customer, saya ingin membayar biaya jasa melalui payment gateway, sehingga transaksi jasa dapat diselesaikan.

**Acceptance Criteria**
- Customer dapat melihat rincian biaya jasa.
- Sistem membuat transaksi pembayaran jasa.
- Customer dapat melakukan pembayaran melalui payment gateway.
- Sistem memproses status pembayaran.
- Jika pembayaran berhasil, status pembayaran jasa diperbarui.
- Pesanan dapat dinyatakan selesai sesuai ketentuan sistem.
- Jika pembayaran gagal, sistem menampilkan informasi kegagalan pembayaran.

---

### US-CUS-15 – Melihat Riwayat Pesanan

**User Story**

Sebagai Customer, saya ingin melihat riwayat pesanan, sehingga saya dapat mengetahui daftar pesanan yang pernah saya lakukan.

**Acceptance Criteria**
- Customer dapat melihat daftar riwayat pesanan.
- Sistem menampilkan informasi pesanan.
- Customer dapat melihat detail setiap pesanan.
- Riwayat pesanan mencakup status pesanan.
- Customer dapat melihat informasi transaksi terkait pesanan.

---

### US-CUS-16 – Membatalkan Pesanan

**User Story**

Sebagai Customer, saya ingin membatalkan pesanan sesuai ketentuan, sehingga saya dapat membatalkan pesanan yang tidak lagi saya butuhkan.

**Acceptance Criteria**
- Customer dapat membatalkan pesanan apabila memenuhi ketentuan pembatalan.
- Sistem memvalidasi apakah pesanan dapat dibatalkan.
- Sistem menyimpan status pembatalan pesanan.
- Customer mendapatkan informasi bahwa pesanan berhasil dibatalkan.
- Jika pesanan tidak dapat dibatalkan, sistem menampilkan alasan atau informasi terkait.

---

### US-CUS-17 – Memberikan Rating dan Ulasan

**User Story**

Sebagai Customer, saya ingin memberikan rating dan ulasan terhadap penyedia jasa, sehingga saya dapat memberikan evaluasi atas layanan yang telah diterima.

**Acceptance Criteria**
- Customer dapat memberikan rating setelah pesanan selesai.
- Rating menggunakan skala 1 sampai 5.
- Customer dapat menuliskan ulasan.
- Sistem menyimpan rating dan ulasan.
- Rating dan ulasan terhubung dengan pesanan serta penyedia jasa.
- Customer tidak dapat memberikan rating pada pesanan yang belum selesai.
