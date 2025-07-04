# 🧑‍💻 Portofolio Aji Pamungkas

Website ini adalah proyek portofolio pribadi yang dibuat oleh **Aji Pamungkas**, siswa SMKN 1 Gunungputri jurusan **Rekayasa Perangkat Lunak (RPL)**. Tujuan dari proyek ini adalah untuk menampilkan profil, sertifikat, proyek, serta menyediakan form interaktif yang dapat menyimpan input pengguna menggunakan **JavaScript**, **Tailwind CSS**, dan **SweetAlert**.

---

## 🚀 Fitur Utama

- 🔹 Navigasi responsif dengan sidebar untuk tampilan mobile.
- 🔹 Form interaktif dengan input: nama, email, no. telepon, tanggal lahir, jenis kelamin, dan pesan.
- 🔹 Validasi email dan nomor telepon sebelum submit.
- 🔹 Output hasil form tampil langsung di halaman.
- 🔹 Penyimpanan data form ke `localStorage`, tidak hilang saat refresh halaman.
- 🔹 Tampilan modern berbasis **Tailwind CSS**.

---

## 📁 Struktur Folder
- 🔹assets/ Gambar dan aset (contoh: profile.jpg, hero-image.jpg)
- 🔹node_modules/ Dependency hasil install dari pnpm
- 🔹src/ Folder file sumber utama
- 🔹script / Folder untuk file Javascript
- 🔹input.css # File sumber Tailwind CSS
- 🔹output.css # File hasil kompilasi Tailwind CSS
- 🔹index.html # Halaman utama website
- 🔹package.json # Metadata proyek dan dependencies
- 🔹pnpm-lock.yaml # Lockfile dari pnpm


---

## 📦 Teknologi yang Digunakan

- ⚡ **Tailwind CSS** - Utility-first framework untuk styling modern.
- 💡 **JavaScript Vanilla** - Untuk validasi form dan pengelolaan localStorage.
- 🎨 **SweetAlert2** - Tampilan notifikasi interaktif.
- 📦 **pnpm** - Package manager yang ringan dan cepat.

---

## 💻 Cara Menjalankan Proyek

1. Clone repositori ini:
   ```bash
   git clone <url-proyek>
   cd nama-folder-proyek

2. Install dependencies :
   ```bash
   pnpm install

3. Jalankan Tailwind CLI:
   ```bash
    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

4. Buka index.html di browser secara langsung atau gunakan live server
   




