document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tahunLahir").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            cek();
        }
    });
});

let sudahAnimasi = false;

function cek() {
    let inputTahun = parseInt(document.getElementById("tahunLahir").value);
    let tahunSekarang = new Date().getFullYear();
    let hasilUmur = document.getElementById("hasil");
    let keterangan = document.getElementById("keterangan");
    let formBox = document.querySelector(".form-box");

    if (inputTahun && inputTahun <= tahunSekarang && inputTahun >= 1800) {
        let usia = tahunSekarang - inputTahun;
        keterangan.innerText = `${usia} tahun`;
        keterangan.classList.remove("teks-error"); // hilangkan warna merah kalau valid
        hasilUmur.style.display = "block";
    } else {
        keterangan.innerText = `Tahun lahir anda tidak valid!`;
        keterangan.classList.add("teks-error"); // tambahkan warna merah
        hasilUmur.style.display = "block";
    }

    // Animasi hasil
    hasilUmur.classList.remove("animate-hasil");
    void hasilUmur.offsetWidth;
    hasilUmur.classList.add("animate-hasil");

    // Jalankan animasi hanya sekali
    if (!sudahAnimasi) {
        formBox.classList.add("animate-box");
        sudahAnimasi = true;
    }
}
