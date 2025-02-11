var cekKodamList = [
    "minyak lampu", 
    "minyak goreng",
    "kepala desa",
    "sapu lidi", 
    "kail pancing"

];

function cekKodam() {
    const name = document.getElementById('inputName').value;
    const result = document.getElementById('result');
    
    if (name === "") {
        result.textContent = "Tolong masukkan nama kamu dulu!";
        result.className = "result error";
        return;
    }

    // Pilih kodam secara acak dari array cekKodamList
    const randomIndex = Math.floor(Math.random() * cekKodamList.length);
    const selectedKodam = cekKodamList[randomIndex];
    
    result.textContent = ` Kodam kamu adalah ${selectedKodam}`;
    result.className = "result success";
}