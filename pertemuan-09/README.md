# Pertemuan 09: Fungsi dan Larik

Di P08 saya sudah punya profil mahasiswa, form Kontak, dan form Rencana Kegiatan.
Di P09 saya meneruskan halaman itu sambil belajar menata data dengan array dan
memisahkan fungsi PHP ke berkas sendiri. Kedua form tetap ada pada halaman ini.

## Perubahan yang saya kerjakan

- Saya menyalin `index.php`, `style.css`, `script.js`, dan `img/` dari P08 agar tampilan awal tetap sama.
- Saya membuat `bersihkan()` karena teks dari form harus tampil sebagai teks, bukan dijalankan sebagai HTML atau JavaScript.
- Demo sementara memperlihatkan hasil sebelum dan sesudah `bersihkan()`; setelah saya melihat alert-nya, baris demo saya hapus.
- Fungsi tersebut saya pindahkan ke `fungsi.php` supaya pemanggilannya dapat dipakai dari halaman utama.
- Data Kontak saya kumpulkan ke satu session `form_data`. Array label dan `foreach` membantu saya menampilkan field tanpa menulis baris keluaran satu per satu.
- Pilihan minat tersimpan sebagai larik di dalam `form_data`; saya gabungkan dengan `implode()`. Pesan tetap memakai `nl2br()` supaya barisnya terbaca.
- Hasil Rencana memakai session `rencana`, lalu label tiap nilai ditampilkan menggunakan `$labelRencana` dan `foreach`.
- `tebal()` saya gunakan hanya untuk label tetap. Fungsi ini tidak meng-escape teks, jadi nilai pengguna tetap lewat `bersihkan()`.
- Saya memakai `$daftarKategori` untuk dropdown dan validasi PHP. `count()` serta indeks pertama dan terakhir saya tampilkan di pengantar bagian Rencana.
- Kotak hasil kedua form saya beri pembungkus dan CSS sederhana dengan warna yang sudah dipakai halaman.

## Pemeriksaan yang saya jalankan

- `index.php` dan `fungsi.php` lolos `php -l` menggunakan PHP 8.3.
- Saya menjalankan server lokal dengan `error_reporting` E_ALL, lalu mengirim form memakai `curl.exe` dan cookie jar.
- POST Kontak berisi nama `<script>alert(1)</script>`, email `mahasiswa@example.com`, semester 3, tanggal `2026-11-15`, jenis pesan `pertanyaan`, prodi TI, dan minat HTML serta CSS. POST menghasilkan redirect ke `index.php#contact`, lalu GET menampilkan semua nilainya.
- Pesan Kontak berisi `<b>x</b>` dan teks pada baris kedua. Sumber HTML memuat `&lt;script&gt;alert(1)&lt;/script&gt;` dan `&lt;b&gt;x&lt;/b&gt;`, bukan tag input mentah.
- Dua minat muncul sebagai `HTML, CSS`, dan pesan beberapa baris menghasilkan `<br />`.
- POST Rencana berisi `Belajar PHP`, kategori Akademik, status Belum Dimulai, tanggal `2026-12-01`, lokasi Lab, dan deskripsi `Latihan array`. POST menghasilkan redirect ke `index.php#rencana-kegiatan`; hasil tetap tampil setelah GET serta refresh, tetapi tidak muncul pada session baru.
- Dropdown berisi lima kategori. Pengantar menampilkan jumlah 5, kategori pertama Akademik, dan kategori terakhir Pengabdian.
- Respons dan log server tidak menunjukkan Warning atau Notice PHP.
- Pemeriksaan curl tidak menjalankan validasi JavaScript. Saya belum memeriksa tampilan akhir secara visual di browser biasa.
- Pada pemeriksaan demo awal di browser, paragraf mentah terlihat sebagai `hai`, script membuka alert `hai`, dan teks yang dibersihkan tampil dengan tag literal.

## Catatan yang saya temukan

- P08 menyimpan data Rencana dengan key `rencana_kegiatan`, sedangkan P09 mengikuti instruksi memakai key `rencana`. Session lama dengan key P08 itu tidak dibaca sebagai hasil P09.
- Saat demo awal, browser meminta `favicon.ico` dan mendapat 404. Ini tidak menimbulkan pesan Warning atau Notice PHP.

## Susunan berkas

```text
pertemuan-09/
|-- README.md
|-- index.php
|-- fungsi.php
|-- style.css
|-- script.js
`-- img/
    `-- foto-profil.jpg
```

## Menjalankan melalui Laragon

Nyalakan Apache di Laragon, lalu buka alamat berikut:

`http://localhost/PWD/2627o/ti1a/2611500005%20-%20PWD-%20TI1A%20-%202627O/pertemuan-09/`

## Riwayat commit P09

- `205a72c` menyalin baseline pertemuan 09 dari pertemuan 08
- `a7fe1b4` menambah fungsi bersihkan di index.php beserta demo sebelum dan sesudah dibersihkan
- `1ebe902` memindahkan fungsi bersihkan ke fungsi.php dan memanggilnya dengan include
- `80f1d43` menghapus kode demo dan memakai bersihkan di semua output
- `de66e6e` mengubah session form kontak menjadi satu array form_data dan menampilkannya dengan foreach
- `f8f1b6e` menampilkan hasil rencana kegiatan dengan array label dan foreach
- `91eef2f` menambah fungsi tebal di fungsi.php dan memakainya pada label hasil form
- `4b05213` membuat array daftarKategori untuk dropdown dan menampilkan jumlah serta elemen berdasarkan indeks
- `3d33fc5` merapikan tampilan kotak hasil kiriman form
