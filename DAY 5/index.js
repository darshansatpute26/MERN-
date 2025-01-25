
function convertKmToMiles() {
    var km = document.getElementById("km").value; 
    var miles = km * 0.621371; 
    document.getElementById("result").innerHTML = km + " KM = " + miles.toFixed(2) + " Miles";
    console.log(km + " KM = " + miles.toFixed(2) + " Miles") 
}
