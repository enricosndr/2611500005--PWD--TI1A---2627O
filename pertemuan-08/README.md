# P8 - Rencana Kegiatan Mahasiswa

- Nama: Enrico Sandra
- NIM: 2611500005
- Kelompok: TI1A
- Tahun ajaran: 2026/2027 Gasal

## Menjalankan

Dari folder `pertemuan-08`, jalankan:

```sh
php -S 127.0.0.1:8000
```

Buka `http://127.0.0.1:8000/` di browser.

## Implementasi

- Secara bertahap menambahkan menu **Rencana Kegiatan**, section, formulir, validasi JavaScript, validasi PHP, dan penyimpanan session dengan PRG serta tabel hasil.
- Formulir menyediakan lima kolom yang diminta soal (nama, kategori, tanggal, lokasi, deskripsi), ditambah status kegiatan agar pemeriksaan status yang sebelumnya ada di JavaScript juga memiliki input.
- POST Rencana Kegiatan dan Kontak dipisahkan dengan hidden input `form_type`.
- Validasi sisi klien dan peladen memeriksa kolom wajib, pilihan kategori/status, batas panjang teks, dan tanggal kalender yang valid.
- Jika validasi peladen gagal, pesan kesalahan ditampilkan dan masukan tetap terisi; data hanya disimpan jika lolos validasi.
- Teks dinormalisasi dengan `trim()` dan keluaran kegiatan di-escape dengan `htmlspecialchars()`.
- Formulir Kontak dan pemrosesan parameter GET di `indexGet.php` tetap dipertahankan.

## Hasil pemeriksaan

- Lolos `php -l index.php`, `php -l indexGet.php`, dan `node --check script.js`.
- POST kegiatan valid mengikuti redirect PRG, menyimpan data, dan menampilkannya kembali pada tabel.
- Tanggal kalender tidak valid serta kategori di luar pilihan ditolak PHP; isian draf dipertahankan dan tidak dibuat menjadi data baru.
- Refresh setelah POST valid tidak menambah duplikat kegiatan.
- Teks HTML pada data kegiatan ditampilkan sebagai teks biasa.
- POST Kontak tetap diproses dan hasilnya ditampilkan.
- Tautan navigasi menuju section yang benar, dan section Rencana Kegiatan berada sebelum Kontak.
- Parameter GET pada `indexGet.php` tetap ditampilkan dengan escaping HTML.
- Validasi JavaScript menerima isian lengkap dan menolak status kosong serta tanggal kalender tidak valid.

Data kegiatan disimpan pada session browser dan akan hilang ketika session dihapus atau kedaluwarsa. Sebelum pengumpulan, ulangi pemeriksaan melalui browser setelah menjalankan server lokal.
