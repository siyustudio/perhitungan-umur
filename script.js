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
        keterangan.classList.remove("teks-error");
        hasilUmur.style.display = "block";
    } else {
        keterangan.innerText = `Tahun lahir anda tidak valid!`;
        keterangan.classList.add("teks-error");
        hasilUmur.style.display = "block";
    }

    // Reset semua class animasi hasil
    hasilUmur.classList.remove("animate-hasil", "animate-hasil-pertama");
    void hasilUmur.offsetWidth; // Trigger reflow

    if (!sudahAnimasi) {
        formBox.classList.add("animate-box");
        hasilUmur.classList.add("animate-hasil-pertama");
        sudahAnimasi = true;
    } else {
        hasilUmur.classList.add("animate-hasil");
    }
}
