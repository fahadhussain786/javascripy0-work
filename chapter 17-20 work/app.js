var emptyMultiArray = [[], [], []];


var multiArray = [[0,1,2,3] ,[1,0,1,2], [2, 1, 0, 1]];



for(var i=1; i <=10; i++)
{
    console.log(i);
}

var tableNumber = +prompt("Enter table number to print", 4);
var tableLength = +prompt("Enter table length", 15);


console.log("Multiplication table of " + tableNumber);
console.log("Length: " + tableLength );
for(var i=1; i <= tableLength; i++)
{
    console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0; i <fruits.length; i++)
{   
    console.log(fruits[i]);

}

for(var i=0; i <fruits.length; i++)
{
    console.log("Element at index " + i + " is " + fruits[i]);
}




for(var i=1; i <=15; i++){
    console.log(i);
}
for(var i = 10; i >=1; i--)
{
    console.log(i);

}
for(var j=0; j<=20; j++){
    console.log(j);
    j = j+1 ;
    if(j == 20)
    {
        break;
    }
}

for(var j=1; j<=20; j++){
    console.log(j);
    j = j+1 ;
    if(j == 20)
    {
        break;
    }
}

for(var j=2; j<=20; j++)
{
    console.log(j + "k");
    j = j+1 ;
}


var barkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var numElements = barkeryItems.length;
var userInput = prompt("Welcome to ABC Bakery, What do you want to order sir / Ma'am", "cookie");
var found = false;
var itemIndex;
for(var i=0; i <=numElements; i++)
{
    if(barkeryItems[i] === userInput)
    {
        var found = true;
        itemIndex = i;
        break;
    }
}

if(found)
{
    console.log(barkeryItems[itemIndex] + " is available at index " + itemIndex + " in our bakery");

}

else
{
console.log(userInput + " is not available in our bakery");

}


var nums = [24, 53,78,91,12];
var numElements = nums.length;
var largest = nums[0];
for(var i=0; i <numElements; i++)
{
    if(nums[i] > largest)
    {
        largest = nums[i];

    }
}
console.log(largest)



var nums = [24, 53,78,91,12];
var numElements = nums.length;
var smalles = nums[0];
for(var i=0; i <numElements; i++)
{
    if(nums[i] < smalles)
    {
        smalles = nums[i];

    }
}
console.log(smalles)


for(var i=5; i <=100; i++)
{
    console.log(i);
    i = i + 5;
}