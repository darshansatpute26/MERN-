console.log("Ashutosh Nikam")
console.log("--------------------------------------------------------------------------------------------------------------- ");
var a = 10;
var b = 10;
var c = a + b;
console.log("addition of two Number:" + c);
console.log(4 ** 4)
const d = Math.pow(4, 4)
console.log(d)
console.log("--------------------------------------------------------------------------------------------------------------- ");
console.log("Km to milies - ");
function convert(km) {
    return km * 0.621371;
}

const km = 100;
const miles = convert(km);
console.log(`${km} km is equal to ${miles} miles`);
console.log("--------------------------------------------------------------------------------------------------------------- ");
console.log("degree to fahr - ")
function degree(n) {
    return ((n * 1.8) + 32);
}
const n = 33.22;
console.log("degree are:" + degree(n));
console.log("--------------------------------------------------------------------------------------------------------------- ");
var weight=59;
var height=1.76;

var bmi=weight/(height)^2;
console.log("BMI is:"+bmi);


if(bmi<18.5)
    status=("underweight");
else if(bmi>=18.5 && bmi<=24.9)
    status=("normal weight")
else{
    status="obsese"
}
console.log("person is " + status);

var unit=100;
if(unit<=100)
{
    bill=o;
}
else if(unit>=100 && unit<=200)
    bill=(unit-100)*5;

else if(unit>200){
    bill=()
}




