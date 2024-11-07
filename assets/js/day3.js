// ini javascript day 3
console.log("Hello World")

function validateForm(){
    let beratBadan = document.getElementById('berat-badan').value;
    // kondisi validasi jika Berat badan kosong
    if (beratBadan == "") {
        alert("inputan anda kosong")
    } else {
        document.getElementById('result').innerHTML = beratBadan;
    }
    console.log(beratBadan);
}

console.log(document.getElementById('result').innerHTML);