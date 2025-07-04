document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#messageForm');
    const output = document.querySelector('#outputForm');
    const hiName = document.querySelector('#hiName');

    // Ambil data dari localStorage saat halaman dibuka
    const saved = localStorage.getItem("formData");
    if (saved) {
        const data = JSON.parse(saved);
        tampilkanOutput(data);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = form.nama.value.trim();
        const email = form.email.value.trim();
        const telepon = form.telepon.value.trim();
        const tanggalLahir = form.tglLahir.value;
        const jenisKelamin = form.jenisKelamin.value;
        const message = form.message.value.trim();
        const waktu = new Date().toLocaleString();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const teleponRegex = /^08[0-9]{8,11}$/;

        // Validasi
        if (nama === "" || email === "" || tanggalLahir === "" || !jenisKelamin || message === "" || telepon === "") {
            swal("Oops!", "Semua field wajib diisi!", "error");
            return;
        }

        if (!emailRegex.test(email)) {
            swal("Email Salah!", "Format email tidak valid!", "error");
            return;
        }

        if (!teleponRegex.test(telepon)) {
            swal("Nomor Salah!", "Nomor telepon harus diawali 08 dan minimal 10 digit.", "error");
            return;
        }

        // Tampilkan alert sukses
        swal("Berhasil!", "Data berhasil disimpan", "success");

        const data = {
            nama, email, telepon, tanggalLahir, jenisKelamin, message, waktu
        };

        // Simpan ke localStorage
        localStorage.setItem("formData", JSON.stringify(data));

        // Tampilkan hasil ke halaman
        tampilkanOutput(data);

        form.reset();
    });

    function tampilkanOutput(data) {
        output.innerHTML = `
            <div class="space-y-2">
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"></path></svg><strong>Current Time:</strong> ${data.waktu}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A7 7 0 1118.364 4.464 7 7 0 015.121 17.804z" /></svg><strong>Nama:</strong> ${data.nama}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 01-8 0"></path></svg><strong>Email:</strong> ${data.email}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h2l3 7-1.34 2.68a1 1 0 0 0 .22 1.14l2.12 2.12a1 1 0 0 0 1.14.22L14 19l7 3V3L3 5z"/></svg><strong>No. Telepon:</strong> ${data.telepon}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"></path></svg><strong>Tanggal Lahir:</strong> ${data.tanggalLahir}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"></path></svg><strong>Jenis Kelamin:</strong> ${data.jenisKelamin}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"></path></svg><strong>Pesan:</strong> ${data.message}</p>
            </div>
        `;

        hiName.innerHTML = `<h1 class="text-3xl font-bold text-white">Selamat Datang, ${data.nama}</h1>`;
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("-translate-x-full");
}
