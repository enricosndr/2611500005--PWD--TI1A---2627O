# P7 - Pemrosesan Formulir PHP

- Nama: Enrico Sandra
- NIM: 2611500005
- Kelompok: TI1A
- Tahun ajaran: 2026/2027 Gasal

## Menjalankan

- Laragon tidak digunakan karena masa uji coba gratisnya sudah berakhir.
- Dari folder `pertemuan-07`, jalankan server bawaan PHP: `php -S 127.0.0.1:8000`.
- Buka `http://127.0.0.1:8000/`.
- Contoh GET: `http://127.0.0.1:8000/indexGet.php?nama=Andi`.

## Perubahan

- **Baseline:** salinan artefak P6 dibuat di `pertemuan-07/`.
- **C-D:** menguji GET, lalu menetapkan POST untuk formulir utama.
- **E1-E4:** membuat `indexGet.php`; halaman utama membaca input POST, termasuk checkbox `minat[]`.
- **F1-F6:** menambah validasi server, normalisasi input, dan escaping keluaran HTML.
- **G1-G3:** menambah session dan PRG; data tetap tampil setelah redirect, pesan kesalahan hanya tampil sekali.

## Pengujian Akhir

- `index.php` dan `indexGet.php` lolos `php -l`.
- Halaman utama dan contoh GET merespons HTTP 200 tanpa peringatan PHP.
- Nilai HTML pada nama di-escape; parameter `nama[]` tidak menimbulkan peringatan.
- POST valid dialihkan ke GET; data tetap tampil setelah refresh.
- POST tidak valid menampilkan pesan validasi sekali.
- Pengujian akhir dijalankan pada server bawaan PHP lokal di `127.0.0.1:18098`.
