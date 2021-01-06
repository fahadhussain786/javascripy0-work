var number = 10;
document.write("<h1>RESULT:</h1>" + "\n");
document.write("The value of a is: " + number + "<br />");
document.write("------------------------------------" + "<br /><br />");
document.write("The value of ++a is: " + ++number + "<br />");
document.write("Now the value of a is: " + number + "<br /><br />");
document.write("The value of a++ is: " + number++ + "<br />");
document.write("Now the value of a is: " + number + "<br /><br />");
document.write("The value of --a is: " + --number + "<br />");
document.write("Now the value of a is: " + number + "<br /><br />");
document.write("The value of a-- is: " + number-- + "<br />");
document.write("Now the value of a is: " + number + "<br /><br />");


var a =2, b=1;
document.write("a is: " + a + "<br />");
document.write("b is: " + b + "<br />");
var result = --a - --b + ++b + b--;
document.write("Result is:" + result +"<br />");


var name = prompt("Enter Your Name:");
alert(name + "! Welcome to our website.");


var number = +prompt("Enter any number:");
if(number===0){
    for(i=1; i<=10; i++){
        document.write("5 x " + i + " = " + 5*i + "<br />");
    }
}
else{
    for(i=1; i<=10; i++){
        document.write(number + " x " + i + " = " + i*number + "<br />");
    }
}


var sub1  = prompt("Enter first subject");
var Obtained1 = +prompt("Enter first subject obtained marks");
var sub2 = prompt("Enter second subject");
var Obtained2 = +prompt("Enter second subject obtained marks"); 
var sub3 = prompt("Enter third subject");
var Obtained3 = +prompt("Enter third subject obtained marks"); 
var total = 100;

document.write("<h1>Subject: Total Marks: Obtained Marks: Percentage: </h1>");
document.write(sub1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Obtained1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (Obtained1/total)*100);
document.write(total + "&nbsp;&nbsp;");
document.write(Obtained1 + "&nbsp;&nbsp;");
document.write(sub2 + "&nbsp;&nbsp;");
document.write(total + "<br />");
document.write(sub3);
document.write(total);



