<?php
function bersihkan($teks)
{
    return htmlspecialchars($teks ?? "", ENT_QUOTES, "UTF-8");
}

// tebal() tidak meng-escape teks, jadi hanya gunakan untuk label tetap dari kode.
// Nilai dari pengguna tetap harus diproses dengan bersihkan().
function tebal($teks)
{
    return "<strong>" . $teks . "</strong>";
}
