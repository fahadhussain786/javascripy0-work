var a = 2
var b = 10
var c = a+b
alert(c)





var a = 2
var b = 10
var c = (a*b)
alert(c)





var a = 2
var b = 10
var c = (a%b)
alert(c)





 var a = 2
var b = 10
 var d = 14
var e = 20
 var c = ( 2+10*14%6)
 alert(c)
 var number;
document.write("Value after variable declaration is undefined:" + "<br />");
var number = 5;
document.write("Initial value: " + number + "<br />");
var num = ++number;
document.write("Value after increment is: " + num + "<br />");
var addition = num + 7;
document.write("Value after addition is: " + addition + "<br />");
var decrement = --addition;
document.write("Value after decrement is: " + decrement + "<br />")
var reminder = decrement % 3;
document.write("The remainder is : " + reminder);


var ticket = 600;
document.write("Total cost to buy 5 tickets to a movie is " + ticket*5 + "PKR");


var number = 7;
document.write("Table of " + number + "<br />");
for(i=1; i<=10; i++){
    document.write(number + " x " + i + " = " + number*i + "<br />");
}


var c = 34;
document.write(c + "C " + "degree Celcius in Fahrenhiet is equal to " + (9*c/5 +32) + "F" + "<br />");
var f = 93.2;
document.write(f + "F " + "degree Fahrenhiet in Celcius is equal to " + ((f-32) * 5/9) + "C" + "<br />");


var price1 = 300;
var price2 = 250;
var quantity1 = 2;
var quantity2 = 1;
var charges = 150;
document.write("<h1>Shopping Cart</h1>" + "<br />");
document.write("Price of item 1 is " + price1 + "<br />");
document.write("Quantity of item 1 is " + quantity1 + "<br />");
document.write("Price of item 2 is " + price2 + "<br />");
document.write("Quantity of item 2 is " + quantity2 + "<br />");
document.write("Shipping Charges " + charges + "<br />" + "<br />");
document.write("Total cost of your order is " + ((price1*quantity1) + (price2*quantity2) + charges));


var totalMarks = 1100;
var marksObtained = 980;
document.write("<h1>Marksheet</h1>");
document.write("Total Marks: " + totalMarks + "<br />");
document.write("Marks Obtained: " + marksObtained + "<br />");
document.write("Percentage: " + marksObtained/totalMarks *100 + "%");


document.write("<h1>Currency in PKR</h1>" + "<br />" + "Total currency in PKR: " + (10*104.80 + 25*28));


var number = 10;
document.write("The Answer is: " + ((number+5)*10)/2);


var currentYear = 2021;
var birthYear = 2001;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br />");
document.write("Birth Year: " + birthYear + "<br />");
document.write("Your Age is: " + (currentYear - birthYear) + " Years.");



var radius = 20;
document.write("<h1>The Geometrizer</h1>" + "<br />");
document.write("Radius of a circle: " + radius + "<br />");
document.write("Circumference of a circle is: " + (2*3.142*radius) + "<br />");
document.write("Area of a circle is: " + (3.142*radius**2));


var snack = "Lays";
var currentAge = 19;
var maximumAge = 60;
var amount = 2;
document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br />");
document.write("Favourite Snack: " + snack + "<br />");
document.write("Current Age: " + currentAge + "<br />");
document.write("Estimated Maximum Age: " + maximumAge + "<br />");
document.write("Amount of snack consume per day: " + amount + "<br />");
document.write("You will need " + ((maximumAge-currentAge)*365*2) + " " + snack + " to last you until the rip old age of " + maximumAge + ".");

