// 1. Data Alat Kemping (Tetap Sama)
const dataAlat = [
    {
        id: 1,
        nama: "Tenda Dome Kapasitas 4 Orang",
        harga: "Rp 50.000 / hari",
        deskripsi: "Tenda double layer anti badai dan hujan deras. Cocok untuk kemping keluarga atau rombongan kecil. Sudah termasuk pasak dan tali.",
        gambar: "https://id-test-11.slatic.net/p/f6ee0c8b49bb52397d9aeff6c25061ba.jpg"
    },
    {
        id: 2,
        nama: "Tas Carrier 60L",
        harga: "Rp 30.000 / hari",
        deskripsi: "Tas gunung kapasitas besar dengan backsystem yang nyaman di punggung. Kuat dan muat banyak barang logistik.",
        gambar: "https://filebroker-cdn.lazada.co.id/kf/Sc9a56601e14a4980b28c50fa61f898bdB.jpg"
    },
    {
        id: 3,
        nama: "Kompor Portable & Nesting",
        harga: "Rp 20.000 / hari",
        deskripsi: "Paket alat masak kemping. Kompor portable menggunakan gas kaleng kecil, lengkap dengan nesting (panci susun) aluminium.",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lpjislyo9kv35f"
    },
    {
        id: 4,
        nama: "Sleeping Bag Polar",
        harga: "Rp 15.000 / hari",
        deskripsi: "Kantong tidur dengan lapisan dalam polar yang sangat hangat. Menjaga suhu tubuh tetap stabil saat malam hari di gunung.",
        gambar: "https://api.asicentral.com/v1/media/42425636?size=large"
    }
];

// Nomor WhatsApp Terpilih (Milik Deni)
const nomorWhatsApp = "6285642353684"; 

// 2. Fungsi Logika Sistem Navigasi Multi-Halaman
function pindahHalaman(namaHalaman) {
    // Sembunyikan semua halaman terlebih dahulu
    document.getElementById('page-home').classList.add('tersembunyi');
    document.getElementById('page-katalog').classList.add('tersembunyi');
    document.getElementById('page-about').classList.add('tersembunyi');

    // Tampilkan halaman spesifik yang dipilih tombol
    if (namaHalaman === 'home') {
        document.getElementById('page-home').classList.remove('tersembunyi');
    } else if (namaHalaman === 'katalog') {
        document.getElementById('page-katalog').classList.remove('tersembunyi');
    } else if (namaHalaman === 'about') {
        document.getElementById('page-about').classList.remove('tersembunyi');
    }
    
    // Scroll otomatis ke atas setiap kali pindah halaman
    window.scrollTo(0, 0);
}

// 3. Menampilkan Daftar Alat ke Halaman Katalog
const container = document.getElementById('katalog-container');
dataAlat.forEach(alat => {
    const kartu = document.createElement('div');
    kartu.classList.add('kartu-alat');
    kartu.onclick = () => bukaDetail(alat.id);

    kartu.innerHTML = `
        <img src="${alat.gambar}" alt="${alat.nama}">
        <div class="kartu-info">
            <h3>${alat.nama}</h3>
            <p class="harga">${alat.harga}</p>
        </div>
    `;
    container.appendChild(kartu);
});

// 4. Fungsi Membuka Detail Alat (Popup Modal)
function bukaDetail(id) {
    const alat = dataAlat.find(item => item.id === id);
    if (alat) {
        document.getElementById('detail-gambar').src = alat.gambar;
        document.getElementById('detail-nama').innerText = alat.nama;
        document.getElementById('detail-harga').innerText = alat.harga;
        document.getElementById('detail-deskripsi').innerText = alat.deskripsi;

        const pesanTeks = encodeURIComponent("Halo Admin, saya ingin menyewa alat: *" + alat.nama + "* (" + alat.harga + "). Apakah unit tersedia?");
        document.getElementById('tombol-hubungi').href = "https://wa.me/" + nomorWhatsApp + "?text=" + pesanTeks;

        document.getElementById('detail-modal').classList.remove('tersembunyi');
    }
}

// 5. Fungsi Menutup Detail Alat
function tutupDetail() {
    document.getElementById('detail-modal').classList.add('tersembunyi');
}