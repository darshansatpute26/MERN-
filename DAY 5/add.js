function performOperation(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        document.getElementById("result").style.color = "red"; 
        return;
    }
    switch (operation) {
        case 'add':
            result = num1 + num2;
            document.getElementById("result").innerHTML = "The sum is: " + result;
            break;
        case 'subtract':
            result = num1 - num2;
            document.getElementById("result").innerHTML = "The difference is: " + result;
            break;
        case 'multiply':
            result = num1 * num2;
            document.getElementById("result").innerHTML = "The product is: " + result;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById("result").innerHTML = "Cannot divide by zero!";
                document.getElementById("result").style.color = "red";
                return;
            }
            result = num1 / num2;
            document.getElementById("result").innerHTML = "The quotient is: " + result;
            break;
    }
    document.getElementById("result").style.color = "black";
    console.log(operation + " result: " + result); 
}
