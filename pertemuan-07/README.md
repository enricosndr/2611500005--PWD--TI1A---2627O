# P7 - Baseline dari Pertemuan 6

Nama: Enrico Sandra
NIM: 2611500005
Kelompok: TI1A
Tahun ajaran: 2026/2027 Gasal

## Persiapan P7

- Menyalin `index.php` dan `script.js` dari `pertemuan-06` sebagai baseline.
- Mempertahankan `style.css` dan aset gambar yang sudah disalin ke folder `pertemuan-07`.
- Formulir baseline masih memakai metode GET. Pemrosesan GET akan dibuat pada tahap berikutnya.

## Pemeriksaan Baseline

- PHP 8.3.33: `index.php` lolos pemeriksaan sintaks.
- Halaman P7 dibuka melalui server PHP lokal sementara: HTTP 200.
- Formulir baseline terdeteksi memakai GET.
- Belum ada pemrosesan POST pada tahap baseline.

## C. Pengiriman Formulir Menggunakan GET

- Membaca parameter `nama` melalui `$_GET` pada halaman utama dan menampilkan nilainya setelah `htmlspecialchars()`.
- Formulir masih menggunakan `method="get"` dengan `action="index.php"` untuk tahap demonstrasi ini.
- Setelah validasi sisi klien berhasil, JavaScript memanggil `contactForm.submit()` agar formulir dikirim dan parameter tampak di URL.

### Hasil Pemeriksaan Tahap C

- `index.php` lolos `php -l` dan `script.js` lolos `node --check`.
- Uji HTTP lokal `?nama=Andi` menampilkan `Nama yang diterima: Andi` dengan status HTTP 200.
- Nilai uji berisi tag `<script>` ditampilkan sebagai teks ter-escape.
- Tanpa parameter `nama`, halaman tetap HTTP 200 tanpa keluaran nama atau peringatan PHP.
- Parameter `nama[]` juga tidak menimbulkan peringatan.
- Kode formulir GET dan pemanggilan `contactForm.submit()` sudah diperiksa. Apache Laragon tidak aktif saat pengujian; permintaan GET diuji melalui server PHP sementara.

## D. Perbandingan GET dan POST

- GET mengirim nilai formulir melalui query string pada URL; cocok untuk pencarian atau pengambilan data yang tidak mengubah keadaan aplikasi.
- POST mengirim nilai melalui request body dan lebih sesuai untuk formulir Kontak yang akan diproses oleh PHP.
- POST tidak otomatis mengenkripsi atau mengamankan data. Perlindungan saat transmisi memerlukan HTTPS.
- Keputusan tahap D: formulir utama P7 akan menggunakan POST. Implementasi perubahan method dan penerimaan `$_POST` dilakukan pada tahap E; pada checkpoint D, formulir masih GET.

## E1. Artefak Demonstrasi GET

- Menyalin halaman tahap C menjadi `indexGet.php` agar contoh GET tetap tersedia saat halaman utama nanti beralih ke POST.
- Formulir di salinan ini tetap menggunakan `method="get"` dan mengarah ke `action="indexGet.php"`.
- Kode pembacaan parameter `$_GET['nama']` tetap dipertahankan.

### Hasil Pemeriksaan Tahap E1

- `indexGet.php` lolos `php -l`.
- `indexGet.php?nama=Andi` memberi HTTP 200 dan menampilkan nama yang diterima.
- Respons halaman memastikan form GET mengarah kembali ke `indexGet.php`.

## E2. Formulir Utama Menggunakan POST

- Mengubah form Kontak pada `index.php` menjadi `method="post"` dengan tujuan tetap `action="index.php"`.
- Artefak pembanding `indexGet.php` tetap memakai GET.
- Penerimaan dan pemrosesan nilai `$_POST` dilakukan pada tahap E3, jadi belum diuji dengan pengiriman POST pada checkpoint ini.

### Hasil Pemeriksaan Tahap E2

- `index.php` lolos `php -l`.
- Pemeriksaan atribut memastikan form utama POST dan tujuan pengiriman tetap `index.php`.
- Pemeriksaan `indexGet.php` memastikan demonstrasi GET tetap terpisah.

## E3. Menerima Nama dengan POST

- Mengganti handler utama agar membaca `nama` dari `$_POST` dan menampilkan teksnya setelah `htmlspecialchars()`.
- Handler GET tetap berada pada `indexGet.php`; halaman utama hanya membaca nama dari POST.
- Tahap ini baru membaca input `nama`. Input formulir lainnya ditangani pada E4.

### Hasil Pemeriksaan Tahap E3

- `index.php` lolos `php -l`.
- POST ke halaman utama menampilkan `Nama yang diterima: Andi` dengan HTTP 200.
- Nilai nama berisi tag `<script>` ditampilkan sebagai teks ter-escape.
- Query `?nama=Andi` tidak diproses oleh handler POST, sedangkan `indexGet.php?nama=Budi` masih diproses oleh demonstrasi GET.
- Membuka halaman tanpa nilai POST tetap HTTP 200 tanpa peringatan PHP.

## E4. Membaca Berbagai Jenis Input POST

- Membaca email, semester, tanggal, jenis pesan, program studi, pesan, dan pilihan minat dari `$_POST` menggunakan `??` untuk nilai awal.
- Mengubah kedua checkbox pada formulir utama menjadi `name="minat[]"`, sehingga beberapa pilihan diterima sebagai array PHP.
- Mempertahankan checkbox demonstrasi GET dengan `name="minat"`.
- Menyesuaikan selector JavaScript agar memeriksa pilihan pada kedua nama checkbox tersebut.

### Hasil Pemeriksaan Tahap E4

- `index.php` lolos `php -l` dan `script.js` lolos `node --check`.
- Pemeriksaan PHP dengan nilai POST contoh memastikan semua field scalar terbaca dan `minat` berisi `HTML` serta `CSS`.
- Pemeriksaan kode memastikan form utama memakai `minat[]`, form GET tetap memakai `minat`, dan selector JavaScript mencakup keduanya.

## F1. Alasan Validasi Sisi Peladen

Validasi JavaScript dan atribut HTML membantu pengguna mengisi formulir dengan benar, tetapi dapat dilewati jika JavaScript dinonaktifkan atau permintaan dikirim langsung. Karena itu, PHP tetap perlu memeriksa data POST di sisi peladen. Validasi server untuk kelengkapan, format, tipe, dan nilai pilihan dimulai pada tahap F2; formulir demonstrasi GET tidak diubah.

## F2. Memeriksa Kelengkapan Data

- Menambahkan pemeriksaan required-field hanya ketika metode permintaan adalah POST.
- Memeriksa nama, email, semester, tanggal kunjungan, jenis pesan, program studi, pesan, dan minimal satu pilihan minat.
- Mengumpulkan pesan kesalahan di `$pesanKesalahan`. Sesuai urutan modul, pesan tersebut belum ditampilkan pada halaman; penampilan dilakukan pada F6.

### Hasil Pemeriksaan Tahap F2

- `index.php` lolos `php -l`.
- Uji PHP dengan POST kosong menghasilkan seluruh pesan kelengkapan yang diharapkan.
- POST lengkap tidak menghasilkan pesan kesalahan kelengkapan.
- Permintaan GET melewati pemeriksaan wajib POST.

## F3. Validasi Format Email dan Semester

- Memastikan semester berupa bilangan bulat dalam rentang 1–14 menggunakan `filter_var()` dan pemeriksaan rentang.
- Memastikan email memakai format yang diterima `FILTER_VALIDATE_EMAIL`.
- Pemeriksaan format dilewati untuk nilai kosong agar pesan kelengkapan F2 tidak diduplikasi.

### Hasil Pemeriksaan Tahap F3

- `index.php` lolos `php -l`.
- Semester 1 dan 14 diterima; 0, 15, dan 4.5 ditolak.
- Email tidak valid ditolak.
- Nilai kosong tetap menghasilkan pesan kelengkapan tanpa pesan format tambahan.
