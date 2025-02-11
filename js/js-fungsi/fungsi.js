var dataAngka = [];

const input = document.querySelector("input")
const input2 = document.getElementById("angkaInput")
const log = document.getElementById("values");
const log2 = document.getElementById("values2");

/** event yang terjadi saat form input di isi */
// form input 1
input.addEventListener("input", showAngka)

//form input 2
input2.addEventListener("input", showAngka2)

function showAngka(e) {
    log.textContent = e.target.value
    // log2.textContent = e.target.value
}

function showAngka2(e){
    log2.textContent = e.target.value
}

function addAngka() {
    var operasion = document.getElementById("operation")
    operasion.innerHTML = '+'
    // var input = document.getElementById("angkaInput");
    // var angka = parseInt(input.value);
    // if (!isNaN(angka)) {
    //     dataAngka.push(angka);
    //     input.value = '';
    //     showAngka();
    // } else {
    //     alert("Harap masukkan angka yang valid!");
    // }
}

function penjumlahan(index) {
    var result = dataAngka[index] + 10;
    alert("Hasil Penjumlahan: " + result);
}

function pengurangan(index) {
    var result = dataAngka[index] - 5;
    alert("Hasil Pengurangan: " + result);
}

function perkalian(index) {
    var result = dataAngka[index] * 2;
    alert("Hasil Perkalian: " + result);
}

function pembagian(index) {
    var result = dataAngka[index] / 2;
    alert("Hasil Pembagian: " + result);
}

function pemangkatan(index) {
    var result = dataAngka[index] **3;
    alert("hasil pemangkatan: " +result);
}