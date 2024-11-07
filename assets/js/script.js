// Function to calculate BMI
function calculateBMI() {
    // Retrieve values from input fields
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    // Validate form inputs
    if (gender === "") {
        document.getElementById("result").textContent = "Pilih jenis kelamin yang sesuai.";
        return; // Exit function if validation fails
    }
    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById("result").textContent = "Masukkan berat badan dan tinggi badan yang benar.";
        return;
    }
    if (isNaN(age) || age <= 0) {
        document.getElementById("result").textContent = "Masukkan Usia dengan benar.";
        return;
    }

    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    const bmi = (weight / (height * height)).toFixed(2); // Rounds BMI to 2 decimal places
    let status = "";

    // Determine BMI category based on calculated BMI
    if (bmi < 18.5) {
        status = "Berat Badan Kurang";
    } else if (bmi < 24.9) {
        status = "Berat Badan Normal";
    } else if (bmi < 29.9) {
        status = "Berat Badan Lebih";
    } else {
        status = "Obesitas";
    }

    // Display result in specified format
    document.getElementById("result").textContent = `${gender} | ${age} tahun | BMI: ${bmi} (${status}).`;
}

// Function to reset all input fields and result text
function resetFields() {
    document.getElementById("gender").value = ""; // Reset gender field
    document.getElementById("age").value = ""; // Reset age field
    document.getElementById("weight").value = ""; // Reset weight field
    document.getElementById("height").value = ""; // Reset height field
    document.getElementById("result").textContent = "Hasil Kalkulasi"; // Reset result display
}
