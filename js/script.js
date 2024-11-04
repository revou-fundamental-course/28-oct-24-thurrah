function calculateBMI() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (gender === "") {
        document.getElementById("result").textContent = "Pilih jenis kelamin yang sesuai.";
        return;
    }
    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById("result").textContent = "Masukkan berat badan dan tinggi badan yang benar.";
        return;
    }
    if (isNaN(age) || age <= 0) {
        document.getElementById("result").textContent = "Masukkan Usia dengan benar.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let status = "";

    if (bmi < 18.5) {
        status = "Berat Badan Kurang";
    } else if (bmi < 24.9) {
        status = "Berat Badan Normal";
    } else if (bmi < 29.9) {
        status = "Berat Badan Lebih";
    } else {
        status = "Obesitas";
    }

    document.getElementById("result").textContent = `Jenis Kelamin: ${gender} | Usia: ${age} tahun | BMI: ${bmi} (${status}).`;
    }

    function resetFields() {
        document.getElementById("gender").value = "";
        document.getElementById("age").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("result").textContent = "Masukkan Data Anda Sesuai Kolom Kalkulator BMI.";
    }