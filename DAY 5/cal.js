document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
document.getElementById('clearBtn').addEventListener('click', clearInputs);

function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    let heightInMeters = height / 100; 
    let bmi = weight / (heightInMeters * heightInMeters);
   
    document.getElementById('bmiResult').textContent = bmi.toFixed(2) + " kg/m²";

   
    let healthStatus = "";
    let imagePath = "";

    if (bmi <= 18.5) {
        healthStatus = "Underweight";
        imagePath = "IMG/underweight.jpeg"; 
    } else if (bmi > 18.5 && bmi <= 24.9) {
        healthStatus = "Normal weight";
        imagePath = "IMG/normal.jpeg"; 
    } else if (bmi > 24.9 && bmi <= 29.9) {
        healthStatus = "Overweight";
        imagePath = "IMG/overweight.jpeg"; 
    } 

    document.getElementById('healthStatus').textContent = healthStatus;
    let bmiImage = document.getElementById('bmiImage');
    bmiImage.src = imagePath;
    bmiImage.style.display = "block";
}

function clearInputs() {
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('bmiResult').textContent = "";
    document.getElementById('healthStatus').textContent = "";
    document.getElementById('bmiImage').style.display = "none";
}
