var city = prompt("Enter your Favourite city");
if(city === "karachi"){
    alert("Welcome to city of lights.");
}

var gender = prompt("Enter your gender");
if(gender === "male"){
    alert("Good morning sir.")
}
if(gender === "female"){
    alert("Good morning Ma'am.");
}

var trafficColor = prompt("Enter traffic signal color");
if(trafficColor === "red"){
    alert("Must Stop when traffic color is red.");
}
if(trafficColor === "yellow"){
    alert("Ready to move when signal color is yellow.");
}
if(trafficColor === "green"){
    alert("Move now when signal color is green.");
}


var fuel = +prompt("Remaining fuel in car (in litres)");
if(fuel<0.25){
    alert("Please refill the fuel in your car.")
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
alert("Alert message is displaying.");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
alert("Alert message is not displaying.");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
alert("Alert message is displaying.");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
alert("Alert message is displaying.");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
alert("Alert message is displaying.");
}

if (true) {
    alert("True");
    alert("Alert message is displaying.");
}
if (false) {
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    alert("Alert message is displaying.");
    }


var subject1 = +prompt("Enter first subject obtained marks");
var subject2 = +prompt("Enter second subject obtained marks");
var subject3 = +prompt("Enter third subject obtained marks");
var sumof3 = subject1+subject2+subject3;
var totalOf3 = 300;
var percentage = sumof3/totalOf3 *100;
document.write("<h1>Marksheet</h1>");
document.write("Total marks: " + totalOf3 + "<br />");
document.write("Marks Obtained: " + sumof3 + "<br />");
document.write("Percentage: " + percentage + "%" + "<br />");
if(percentage >= 80){
    document.write("Grade: A-one" + "<br />");
    document.write("Remarks: Excellent" + "<br />");
}
else if(percentage >= 70){
    document.write("Grade: A" + "<br />");
    document.write("Remarks: Good" + "<br />");
}
else if(percentage >=60){
    document.write("Grade: B" + "<br />");
    document.write("Remarks: You need to improve" + "<br />");
}
else if(percentage <60){
    document.write("Grade: Fail" + "<br />");
    document.write("Remarks: Sorry" + "<br />");
}


var secret = 7;
var number = +prompt("Guess the secret number from 1 to 10");
if(secret === number){
    alert("Bingo! Correct answer")
}
if(secret === ++number){
    alert("Close enough to the correct answer")
}


var number = +prompt("Enter a number");
var remainder = number % 3;

if(remainder === 0){
    alert("Your number is divisible by 3");
}

else{
    alert("Your number is not divisible by 3");
}


var number = +prompt("Enter an odd number or even number");
var Even = false;
var remaining = number % 2;
if(remaining === 0)
{
    Even = true;
}

if(Even === true)
{
    alert("Your number is even");
}

else
{
    alert("Your number is odd");
}

//Task10
var temp = +prompt("Enter the current temperature");
if(temp>40){
    alert("Its too hot outside.");
}
else if(temp>30){
    alert("The weather today is normal.")
}
else if(temp>20){
    alert("Today's weather is cool.")
}
else{
    alert("OMG! Today's weather is cool.")
}


var firstNumber = +prompt("Enter any first number");
var secondNumber = +prompt("Enter second number");
var operatorInput = prompt("Enter any single arthimetic operator");
var result;
if(operatorInput === "+")
{
    alert(result = firstNumber + secondNumber);
}

else if(operatorInput === "-")
{
    alert(result = firstNumber - secondNumber);
}

else if(operatorInput === "*")
{
    alert(result = firstNumber * secondNumber);
}

else if(operatorInput === "/")
{
    alert(result = firstNumber / secondNumber);
}

