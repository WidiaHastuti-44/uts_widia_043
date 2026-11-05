'use strict';
const formSewa = document.getElementById('formSewa043');
formSewa.addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value.trim();
    const mobil = document.getElementById('mobil').value;
    const hari = Number(document.getElementById('hari').value);
    const errNama = document.getElementById('errNama');
    const errHari = document.getElementById('errHari');

    let isValid = true;
    errNama.textContent = '';
    errHari.textContent = '';
    if (nama === '' || !nama.includes('043')) {
        errNama.textContent = 'Nama harus diikuti 3 digit terakhir NIM, contoh Widia 043.';
        isValid = false;
    }
    if (mobil === '') {
        alert('Silakan pilih mobil terlebih dahulu.');
        isValid = false;
    }
    if (!Number.isInteger(hari) || hari < 1) {
        errHari.textContent = 'Lama sewa minimal 1 hari.';
        isValid = false;
    }
    if (!isValid) {
        return;
    }
    let harga = 0;

    if (mobil.includes('BMW')) {
        harga = 2300043;
    } else if (mobil.includes('Innova')) {
        harga = 550043;
    } else if (mobil.includes('HRV')) {
        harga = 750043;
    } else if (mobil.includes('Brio')) {
        harga = 400043;
    } else if (mobil.includes('Ferrari')) {
        harga = 4450043;
    } else if (mobil.includes('Alphard')) {
        harga = 1200043;
    }
    const total = harga * hari;
    const hasil = document.getElementById('hasilSewa');
    hasil.textContent = '';
    const judul = document.createElement('h3');
    judul.textContent = 'Detail Penyewaan';
    hasil.appendChild(judul);
    const data = [
        'Nama: ' + nama,
        'Mobil: ' + mobil,
        'Lama Sewa: ' + hari + ' hari',
        'Total Harga: Rp ' + total.toLocaleString('id-ID')
    ];

    data.forEach(function (item) {
        const paragraf = document.createElement('p');
        paragraf.textContent = item;
        hasil.appendChild(paragraf);
    });
    console.log('Penyewaan berhasil');
    console.log('Nama:', nama);
    console.log('Mobil:', mobil);
    console.log('Lama sewa:', hari);
    console.log('Total harga:', total);

});