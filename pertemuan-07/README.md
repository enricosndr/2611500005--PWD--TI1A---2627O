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
