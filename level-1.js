/*
Question 1

Declare and initialise a variable with a string value.
*/
var cat = "Garfield";

/* Question 2

Create an object variable called person and give 
it two properties (a key and a value) of your choice.
*/
var person = {
    name: "vetle",
    age: 26
};

/* Question 3

Create a variable called outOfStock and assign it a boolean value.
Create an if else statement that checks the value of outOfStock.
If it is true, console log "Out of stock". Otherwise log "In stock".
*/
var outOfStock = false;
if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log(" In stock");
}

/* Question 4

Create an array of five numbers.
Loop through the array and console log each value.
*/
var numberArray = [1, 2, 3, 4, 5];
var numberLength = 5;
var numberEndIndex = numberLength - 1;
for (var index = 0; index <= numberEndIndex; index++) {
    console.log(numberArray[index]);
}

/*Question 5

Create a for loop that counts from 15 to 25.
Console log the value of the counter variable inside the loop.
*/
for (var count = 15; count <= 25; count++) {
    console.log(count);
}

/* Question 6

Using the same loop from the above question,
 only log the value of the counter variable if it is equal to 20.
*/
for (var count = 15; count === 25; count++) {
    console.log(count);
}

/* Question 7

Create an array of two objects.
 Each object must have the same three properties
  (with different values):
    one property with a string value
    one property with a number value
    one property with a boolean value
Loop through the array and console log the number value and the boolean value.
*/

var gamingConsole1 = {
    brand: "Playstation 5",
    price: 6500,
    released: false
};

var gamingConsole2 = {
    brand: "Xbox One",
    price: 5999,
    released: true
};

var gamingConsoles = [gamingConsole1, gamingConsole2];
for (var index = 0; index < gamingConsoles.length; index++) {
    var gamingConsoleList = gamingConsoles[index];
    var gamingConsoleListMessage = "price: " + gamingConsoleList.price +
        " it's released: " + gamingConsoleList.released;
    console.log(gamingConsoleListMessage);
}

/* Question 8

Create a function called whatIDontLike that accepts one argument.
 Choose a good name for the argument.
Inside the function, log the string "I don't like " together with the argument.
Call the function and pass in a value of your choice.
*/
  var dontLike = "I don't like ";
  var whatIDislike = "pineapples on my Pizza";

  function SomethingIDislike(dontLike, whatIDislike) {
    var answer = dontLike + whatIDislike;
    console.log(answer);
}

SomethingIDislike(dontLike, whatIDislike);

/*
Question 9

Create a function that accepts two arguments.
Inside the function, subtract the second argument
from the first and console log the result.
*/
var num1 = 50;
var num2 = 25;
function subtractAndLog(num1, num2) {
    var answer = num1 - num2;
    console.log(answer);
}
subtractAndLog(num1, num2);

/* Question 10

Create an empty array.
Create a function that accepts one argument.
Inside the function, add the argument to the array.
Call the function and pass in a value of any type.
*/
var itemBag = [];

var itemLoot = {
    name: "Rusty Dagger",
    damage: 2.8,
    value: 10,
};

itemBag.push(itemLoot);
console.log(itemBag);

