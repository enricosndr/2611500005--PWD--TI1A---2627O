const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("nav-open");

  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup navigasi" : "Buka navigasi",
  );
});

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");
const tanggalInput = document.getElementById("tanggal");
const prodiInput = document.getElementById("prodi");
const pesanInput = document.getElementById("pesan");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formFeedback.className = "form-feedback-error";

  const nama = namaInput.value.trim();
  if (nama.length < 3 || nama.length > 50) {
    formFeedback.textContent =
      "Nama lengkap harus diisi 3 sampai 50 karakter.";
    return;
  }

  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    formFeedback.textContent = "Masukkan alamat email yang valid.";
    return;
  }

  const semester = Number(semesterInput.value);
  if (semesterInput.value === "" || semester < 1 || semester > 14) {
    formFeedback.textContent =
      "Semester harus diisi dengan angka 1 sampai 14.";
    return;
  }

  if (tanggalInput.value === "") {
    formFeedback.textContent = "Tanggal kunjungan harus diisi.";
    return;
  }

  const jenisPesan = document.querySelector(
    'input[name="jenis_pesan"]:checked',
  );

  if (!jenisPesan) {
    formFeedback.textContent = "Pilih jenis pesan.";
    return;
  }

  const topikDipilih = document.querySelectorAll(
    'input[name="minat[]"]:checked',
  );

  if (topikDipilih.length === 0) {
    formFeedback.textContent =
      "Pilih minimal satu topik yang diminati.";
    return;
  }

  if (prodiInput.value === "") {
    formFeedback.textContent = "Pilih program studi.";
    return;
  }

  const pesan = pesanInput.value.trim();
  if (pesan.length === 0) {
    formFeedback.textContent = "Pesan harus diisi.";
    return;
  }

  if (pesan.length > 300) {
    formFeedback.textContent = "Pesan maksimal 300 karakter.";
    return;
  }

  formFeedback.textContent = "Form berhasil divalidasi.";
  formFeedback.className = "form-feedback-success";
  contactForm.submit();
});

contactForm.addEventListener("input", () => {
  formFeedback.textContent = "";
  formFeedback.className = "";
});

contactForm.addEventListener("reset", () => {
  formFeedback.textContent = "";
  formFeedback.className = "";
});
const activityForm = document.getElementById("activityForm");

if (activityForm) {
  const activityFeedback = activityForm.querySelector(
    "[data-form-feedback]",
  );

  const ambilNilai = (nama) =>
    activityForm.elements.namedItem(nama).value.trim();

  const tanggalValid = (tanggal) => {
    const cocok = /^(\d{4})-(\d{2})-(\d{2})$/.exec(tanggal);
    if (!cocok) return false;

    const [, tahun, bulan, hari] = cocok.map(Number);
    const tanggalTerurai = new Date(tahun, bulan - 1, hari);

    return (
      tanggalTerurai.getFullYear() === tahun &&
      tanggalTerurai.getMonth() === bulan - 1 &&
      tanggalTerurai.getDate() === hari
    );
  };

  const tampilkanFeedback = (pesan, kelas) => {
    activityFeedback.textContent = pesan;
    activityFeedback.className = kelas;
  };

  const bersihkanFeedback = () => {
    activityFeedback.textContent = "";
    activityFeedback.className = "form-feedback";
  };

  activityForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nama = ambilNilai("nama_kegiatan");
    const kategori = ambilNilai("kategori_kegiatan");
    const status = ambilNilai("status_kegiatan");
    const tanggal = ambilNilai("tanggal_kegiatan");
    const lokasi = ambilNilai("lokasi_kegiatan");
    const deskripsi = ambilNilai("deskripsi_kegiatan");

    let kesalahan = "";

    if (nama === "") {
      kesalahan = "Nama kegiatan wajib diisi.";
    } else if (nama.length > 100) {
      kesalahan = "Nama kegiatan maksimal 100 karakter.";
    } else if (
      !["Akademik", "Lomba", "Workshop", "Organisasi", "Pengabdian"].includes(
        kategori,
      )
    ) {
      kesalahan = "Pilih kategori kegiatan.";
    } else if (
      !["Belum Dimulai", "Sedang Berjalan", "Selesai"].includes(status)
    ) {
      kesalahan = "Pilih status kegiatan.";
    } else if (!tanggalValid(tanggal)) {
      kesalahan = "Tanggal pelaksanaan tidak valid.";
    } else if (lokasi === "") {
      kesalahan = "Lokasi kegiatan wajib diisi.";
    } else if (lokasi.length > 150) {
      kesalahan = "Lokasi kegiatan maksimal 150 karakter.";
    } else if (deskripsi === "") {
      kesalahan = "Deskripsi kegiatan wajib diisi.";
    } else if (deskripsi.length > 500) {
      kesalahan = "Deskripsi kegiatan maksimal 500 karakter.";
    }

    if (kesalahan !== "") {
      tampilkanFeedback(kesalahan, "form-feedback-error");
      return;
    }

    tampilkanFeedback(
      "Form rencana kegiatan berhasil divalidasi.",
      "form-feedback-success",
    );

    activityForm.submit();
  });

  activityForm.addEventListener("input", bersihkanFeedback);
  activityForm.addEventListener("change", bersihkanFeedback);
  activityForm.addEventListener("reset", bersihkanFeedback);
}