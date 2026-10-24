# P6 - PHP Dasar dan Pemrograman Sisi Server

## Pengembangan

- Menggunakan folder P5 sebagai baseline dan halaman utama `index.php`.
- Menambahkan variabel dan konstanta untuk identitas mahasiswa, program studi, semester, IPK, status aktif, catatan, dan mata kuliah.
- Menerapkan perhitungan sisa semester, pemeriksaan rentang semester, percabangan `if-elseif-else`, ternary, dan `switch-case-default`.
- Mengganti daftar target belajar statis dengan perulangan `for` lima kali dan menambahkan daftar semester dengan perulangan `while`.
- Memformat IPK, memeriksa nilai `null`, menampilkan tahun dinamis dengan `date()`, dan menggunakan sintaks keluaran singkat PHP.
- Mengarahkan atribut `action` formulir ke `index.php`.

## Cara Menjalankan

1. Jalankan Apache melalui Laragon.
2. Buka halaman P6 melalui alamat berikut:

   `http://localhost/PWD/2627o/ti1a/2611500005%20-%20PWD-%20TI1A%20-%202627O/pertemuan-06/`

## Hasil Pengujian Aktual

Halaman diuji melalui localhost. Respons berhasil dengan HTTP 200 dan tidak ditemukan pesan parse error, fatal error, atau warning PHP di halaman.

| Pemeriksaan | Hasil aktual |
| --- | --- |
| Sisa semester dan rentang | Sisa 7 semester; status `Sesuai rentang` |
| Keterangan semester awal | `Semester: 1 (Semester awal)` |
| IPK | `4,00` |
| Program studi dan status | `Teknik Informatika (TI)`; `Aktif` |
| Fokus program studi TI | `Komputasi dan pengembangan perangkat lunak` |
| Catatan tambahan null | `Belum ada` |
| Target belajar | Lima butir, dari target 1 sampai `Belum dipetakan` pada target 5 |
| Perulangan while | Menampilkan Semester 1, Semester 2, dan Semester 3 |
| Footer | Menampilkan tahun 2026, Enrico Sandra, dan NIM 2611500005 |
| Formulir | Atribut `action` mengarah ke `index.php` |

### Pengujian Kondisi Alternatif

| Kondisi yang diuji sementara | Hasil aktual |
| --- | --- |
| Semester 4 | `Semester menengah`; rentang sesuai |
| Semester 7 | `Semester akhir`; rentang sesuai |
| Semester 9 | `Semester akhir`; `Perlu diperiksa` |
| Program studi SI dan status nonaktif | `Sistem Informasi (SI)`, `Tidak aktif`, fokus `Sistem informasi dan proses bisnis` |
| Program studi MI | Nama `Lainnya (MI)` dan fokus `Belum ditentukan` |
| Catatan tambahan berisi teks | Teks `Catatan praktik PHP` ditampilkan |

Setelah pengujian kondisi alternatif, nilai awal dikembalikan ke semester 1, program studi TI, status aktif, dan catatan `null`. Halaman diperiksa kembali melalui localhost.
