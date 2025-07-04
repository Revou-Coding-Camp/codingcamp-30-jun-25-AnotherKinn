document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#messageForm');
    const output = document.querySelector('#outputForm');
    const hiName = document.querySelector('#hiName');

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = form.nama.value.trim();
        const email = form.email.value.trim();
        const tanggalLahir = form.tglLahir.value;
        const jenisKelamin = form.jenisKelamin.value;
        const message = form.message.value.trim();

        const waktu = new Date().toLocaleString();

        // Regex untuk validasi email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validasi
        if (nama === "" || email === "" || tanggalLahir === "" || !jenisKelamin || message === "") {
            alert("Semua field wajib diisi!");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Format email tidak valid!");
            return;
        }

        // Output hasil dengan styling dan ikon
        output.innerHTML = `
            <div class="space-y-2">
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"></path></svg><strong>Current Time:</strong> ${waktu}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A7 7 0 1118.364 4.464 7 7 0 015.121 17.804z" /></svg><strong>Nama:</strong> ${nama}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 01-8 0"></path></svg><strong>Email:</strong> ${email}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"></path></svg><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"></path></svg><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
                <p class="flex items-center gap-2"><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"></path></svg><strong>Pesan:</strong> ${message}</p>
            </div>
        `;

        hiName.innerHTML = `<h1 class="text-3xl font-bold text-gray-800">Hi ${nama}, Welcome to Website</h1>`;
    });
});
