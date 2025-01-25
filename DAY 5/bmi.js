function calculateBMI() {
  
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);


    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid values for weight and height.";
        document.getElementById("result").style.color = "red";
        return;
    }


    let bmi = weight / (height ** 2);

    let resultMessage = "";
    if (bmi < 18.5) {
        resultMessage = "You are Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultMessage = "Your weight is NORMAL";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultMessage = "You are Overweight";
    } else {
        resultMessage = "You are Obese";
    }

    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}. ${resultMessage}`;
    document.getElementById("result").style.color = "black"; 
}
