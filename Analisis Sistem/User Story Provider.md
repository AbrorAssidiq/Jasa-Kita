# USER STORY PROVIDER – JASA KITA

## Provider (Penyedia Jasa)

### US-PRO-01 – Registrasi Akun Provider
Sebagai Provider, saya ingin mendaftarkan akun pada aplikasi Jasa Kita, sehingga saya dapat bergabung sebagai penyedia jasa.

**Acceptance Criteria:**
- Provider dapat mengisi nama, email, nomor telepon, dan password.
- Sistem memvalidasi data yang dimasukkan.
- Email atau nomor telepon tidak boleh digunakan oleh akun lain.
- Provider berhasil membuat akun dan dapat melanjutkan proses pengisian profil.

---

### US-PRO-02 – Login Provider
Sebagai Provider, saya ingin login ke akun saya, sehingga dapat mengakses fitur penyedia jasa.

**Acceptance Criteria:**
- Provider dapat login menggunakan email/nomor telepon dan password.
- Sistem memvalidasi kredensial login.
- Provider diarahkan ke halaman dashboard setelah berhasil login.
- Provider tidak dapat mengakses fitur apabila belum login.

---

### US-PRO-03 – Melengkapi Profil Provider
Sebagai Provider, saya ingin melengkapi profil penyedia jasa, sehingga Customer dapat mengenal saya dan layanan yang saya tawarkan.

**Acceptance Criteria:**
- Provider dapat mengisi foto profil, nama, deskripsi, alamat, dan informasi lainnya.
- Provider dapat mengubah informasi profil.
- Informasi profil dapat ditampilkan kepada Customer.
- Sistem menyimpan perubahan profil.

---

### US-PRO-04 – Mengunggah Dokumen Verifikasi
Sebagai Provider, saya ingin mengunggah dokumen persyaratan, sehingga akun saya dapat diverifikasi oleh Admin.

**Acceptance Criteria:**
- Provider dapat mengunggah dokumen identitas yang dipersyaratkan.
- Provider dapat melihat status verifikasi dokumen.
- Provider dapat memperbarui dokumen apabila diperlukan.
- Dokumen yang diunggah dapat diperiksa oleh Admin.

---

### US-PRO-05 – Melihat Status Verifikasi Akun
Sebagai Provider, saya ingin melihat status verifikasi akun, sehingga mengetahui apakah akun saya sudah dapat digunakan untuk menawarkan jasa.

**Acceptance Criteria:**
- Provider dapat melihat status verifikasi.
- Status meliputi menunggu verifikasi, disetujui, atau ditolak.
- Jika ditolak, Provider dapat melihat alasan penolakan apabila diberikan oleh Admin.
- Provider dapat memperbaiki data atau dokumen yang diperlukan.

---

### US-PRO-06 – Mengelola Layanan Jasa
Sebagai Provider, saya ingin mengelola layanan jasa yang saya tawarkan, sehingga Customer dapat mengetahui jasa yang tersedia.

**Acceptance Criteria:**
- Provider dapat menambahkan layanan jasa.
- Provider dapat memilih kategori jasa.
- Provider dapat mengisi nama layanan, deskripsi, dan harga jasa.
- Provider dapat mengubah informasi layanan.
- Provider dapat mengaktifkan atau menonaktifkan layanan.

---

### US-PRO-07 – Mengelola Ketersediaan Layanan
Sebagai Provider, saya ingin mengatur ketersediaan layanan, sehingga Customer mengetahui apakah saya dapat menerima pesanan.

**Acceptance Criteria:**
- Provider dapat mengatur status ketersediaan.
- Provider dapat menonaktifkan layanan sementara.
- Layanan yang tidak tersedia tidak dapat dipesan oleh Customer.

---

### US-PRO-08 – Melihat Pesanan Masuk
Sebagai Provider, saya ingin melihat pesanan yang masuk, sehingga dapat mengetahui permintaan pekerjaan dari Customer.

**Acceptance Criteria:**
- Provider dapat melihat daftar pesanan masuk.
- Provider dapat melihat informasi Customer dan detail pekerjaan.
- Provider dapat melihat lokasi pekerjaan.
- Provider dapat melihat tanggal dan waktu pesanan.
- Provider dapat melihat status masing-masing pesanan.

---

### US-PRO-09 – Menerima Pesanan
Sebagai Provider, saya ingin menerima pesanan dari Customer, sehingga dapat memulai proses pengerjaan jasa.

**Acceptance Criteria:**
- Provider dapat menerima pesanan yang masih menunggu respons.
- Sistem mengubah status pesanan setelah Provider menerima pesanan.
- Customer dapat mengetahui bahwa pesanan telah diterima.
- Pesanan yang sudah diterima tidak dapat diterima oleh Provider lain.

---

### US-PRO-10 – Menolak Pesanan
Sebagai Provider, saya ingin menolak pesanan yang tidak dapat saya kerjakan, sehingga Customer dapat mencari penyedia jasa lainnya.

**Acceptance Criteria:**
- Provider dapat menolak pesanan yang masih menunggu respons.
- Provider dapat memberikan alasan penolakan.
- Sistem mengubah status pesanan menjadi ditolak.
- Customer mendapatkan informasi bahwa pesanan ditolak.

---

### US-PRO-11 – Melihat Detail Pesanan
Sebagai Provider, saya ingin melihat detail pesanan, sehingga memahami pekerjaan yang harus dilakukan.

**Acceptance Criteria:**
- Provider dapat melihat deskripsi pekerjaan.
- Provider dapat melihat alamat atau lokasi pekerjaan.
- Provider dapat melihat informasi Customer.
- Provider dapat melihat kategori dan layanan yang dipesan.
- Provider dapat melihat status pesanan.

---

### US-PRO-12 – Mengajukan Rincian Biaya Material
Sebagai Provider, saya ingin mengajukan rincian biaya material kepada Customer, sehingga biaya bahan yang dibutuhkan dapat disetujui sebelum pembelian.

**Acceptance Criteria:**
- Provider dapat menambahkan nama material.
- Provider dapat mengisi jumlah, harga satuan, dan total harga material.
- Provider dapat menambahkan beberapa item material.
- Sistem menghitung total biaya material.
- Provider dapat mengirim pengajuan biaya material kepada Customer.

---

### US-PRO-13 – Melihat Status Persetujuan Material
Sebagai Provider, saya ingin melihat status persetujuan biaya material, sehingga mengetahui apakah Customer menyetujui biaya yang diajukan.

**Acceptance Criteria:**
- Provider dapat melihat status pengajuan material.
- Status meliputi menunggu persetujuan, disetujui, atau ditolak.
- Provider dapat mengetahui apabila Customer menolak pengajuan material.
- Provider dapat melakukan penyesuaian pengajuan apabila diperlukan.

---

### US-PRO-14 – Membeli Material dan Mengunggah Bukti Pembelian
Sebagai Provider, saya ingin mengunggah bukti pembelian material, sehingga Customer dapat mengetahui bahwa material telah dibeli.

**Acceptance Criteria:**
- Provider dapat mengunggah bukti pembelian material.
- Bukti pembelian dapat berupa foto atau dokumen.
- Provider dapat melihat bukti pembelian yang telah diunggah.
- Bukti pembelian dapat dilihat oleh Customer pada detail pesanan.

---

### US-PRO-15 – Memperbarui Progres Pekerjaan
Sebagai Provider, saya ingin memperbarui progres pekerjaan, sehingga Customer dapat mengetahui perkembangan pengerjaan jasa.

**Acceptance Criteria:**
- Provider dapat memperbarui status pekerjaan.
- Status pekerjaan dapat menunjukkan bahwa pekerjaan sedang berlangsung.
- Sistem menyimpan riwayat perubahan status.
- Customer dapat melihat progres pekerjaan.

---

### US-PRO-16 – Menandai Pekerjaan Selesai
Sebagai Provider, saya ingin menandai pekerjaan telah selesai, sehingga Customer dapat melakukan konfirmasi penyelesaian pekerjaan.

**Acceptance Criteria:**
- Provider dapat menandai pekerjaan selesai.
- Sistem mengubah status pesanan menjadi menunggu konfirmasi Customer.
- Customer mendapatkan informasi bahwa pekerjaan telah selesai.
- Provider dapat melihat status konfirmasi pekerjaan.

---

### US-PRO-17 – Melihat Riwayat Pesanan
Sebagai Provider, saya ingin melihat riwayat pesanan, sehingga dapat mengetahui pekerjaan yang pernah saya terima.

**Acceptance Criteria:**
- Provider dapat melihat daftar pesanan sebelumnya.
- Provider dapat melihat detail pesanan pada riwayat.
- Riwayat menampilkan status pesanan.
- Provider dapat mencari atau memfilter riwayat pesanan.

---

### US-PRO-18 – Melihat Pendapatan
Sebagai Provider, saya ingin melihat pendapatan dari pekerjaan yang telah selesai, sehingga dapat mengetahui jumlah penghasilan yang saya peroleh.

**Acceptance Criteria:**
- Provider dapat melihat daftar transaksi pendapatan.
- Provider dapat melihat nominal pembayaran jasa.
- Provider dapat melihat potongan komisi platform.
- Provider dapat melihat nominal bersih yang diterima.
- Provider dapat melihat status pembayaran dan pencairan dana.

---

### US-PRO-19 – Mengelola Rekening Bank
Sebagai Provider, saya ingin mengelola rekening bank, sehingga dana pendapatan dapat dicairkan ke rekening saya.

**Acceptance Criteria:**
- Provider dapat menambahkan rekening bank.
- Provider dapat mengubah informasi rekening.
- Provider dapat melihat informasi rekening yang tersimpan.
- Sistem memvalidasi informasi rekening yang dimasukkan.

---

### US-PRO-20 – Mengajukan Pencairan Dana
Sebagai Provider, saya ingin mengajukan pencairan dana dari pendapatan yang tersedia, sehingga dapat menerima penghasilan ke rekening bank saya.

**Acceptance Criteria:**
- Provider dapat melihat jumlah pendapatan yang dapat dicairkan.
- Provider dapat mengajukan pencairan dana.
- Provider dapat memilih rekening tujuan pencairan.
- Sistem memvalidasi jumlah dana yang diajukan.
- Provider dapat melihat status pengajuan pencairan.

---

### US-PRO-21 – Melihat Riwayat Pencairan Dana
Sebagai Provider, saya ingin melihat riwayat pencairan dana, sehingga dapat mengetahui transaksi pencairan yang telah dilakukan.

**Acceptance Criteria:**
- Provider dapat melihat daftar pencairan dana.
- Provider dapat melihat nominal pencairan.
- Provider dapat melihat tanggal pengajuan.
- Provider dapat melihat rekening tujuan.
- Provider dapat melihat status pencairan, seperti menunggu, berhasil, atau gagal.
