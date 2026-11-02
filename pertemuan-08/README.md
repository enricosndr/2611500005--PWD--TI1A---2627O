# P8 - Rencana Kegiatan Mahasiswa

- Nama: Enrico Sandra
- NIM: 2611500005
- Kelompok: TI1A
- Tahun ajaran: 2026/2027 Gasal

## Menjalankan

- Laragon tidak digunakan karena masa uji coba gratisnya sudah berakhir.
- Dari folder `pertemuan-08`, jalankan `php -S 127.0.0.1:8000`.
- Buka `http://127.0.0.1:8000/`.

## Progres

- Menyalin baseline P7 ke folder `pertemuan-08`.
- Menambahkan menu **Rencana Kegiatan**.
- Menambahkan section dan formulir dengan input nama, kategori, tanggal, lokasi, dan deskripsi.
- Menambahkan CSS untuk section dan formulir.
- Menambahkan validasi JavaScript untuk kolom formulir.
- Menambahkan pemisahan POST Kontak dan Rencana Kegiatan serta validasi sisi PHP.
- Menambahkan PRG berbasis session dan menampilkan data kegiatan dalam tabel.
- Memperbaiki selector checkbox dan pengiriman formulir Kontak setelah validasi.

## Pemeriksaan

- Menu Rencana Kegiatan membuka section yang benar.
- Validasi JavaScript menolak isian yang belum lengkap.
- Validasi PHP menolak POST yang belum lengkap dan mempertahankan input.
- POST valid menampilkan data di tabel; refresh tidak menggandakan baris.
- Data HTML ditampilkan sebagai teks biasa.
- Formulir Kontak tetap berfungsi.