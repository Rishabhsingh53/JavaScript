// alert is used as a pop up box 
alert("Hello !")

// input 
prompt("Enter your name?") // asking user to take input

// variables are created using var keyword

// data types 
var Myname = "Rishabh Singh"    // string
var age = 19            // integer
var isMarried = false   // boolean

// strings 
var greet = "Hello"
console.log(`the length of the ${greet} is ${greet.length}`); // length 
console.log(greet + "there," + Myname); // concatenation
console.log(Myname.slice(0,8))          // slicing
console.log(Myname.toUpperCase())
console.log(Myname.toLowerCase())

// operators 
var a = 1;
console.log(2 + 3)      // addition
console.log(10 - 4)     // subtraction
console.log(4 * 5)      // multiplication 
console.log(5 / 1 )     // division operator
console.log(10 % 3)     // modulo 
console.log(a++)        // increment operator
console.log(a--)        // decrement operator

// function 
function getGrocery() {     // creating the function
    console.log("Go to grocery shop")
    console.log("Get the grocery")
    console.log("come back")
}

getGrocery()                // calling the function
