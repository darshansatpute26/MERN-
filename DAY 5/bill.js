function calculateElectricityBill(units) {
    let bill = 0;

    if (units > 200) {
        bill += (units - 200) * 10;
        units = 200;
    }
    if (units > 100) {
        bill += (units - 100) * 5;
        units = 100;
    }

    return bill; 
}


const units = parseInt(prompt("Enter the number of units consumed:"));
if (units >= 0) {
    const bill = calculateElectricityBill(units);
    console.log("Total Electricity Bill: Rs", bill);
} else {
    console.log("Please enter a valid number of units.");
}